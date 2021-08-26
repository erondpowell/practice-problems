
-- https://mode.com/sql-tutorial/understanding-search-functionality-answers/

-- GOALS: Decide if engineering should improve the search bar.

-- QUESTIONS:
-- Are search experiences good or bad?
-- Is search worth working on at all?
-- If search is worth working on? What to improve?

-- TESTS:
-- % users on site using search?
--    If low, it is bad/not important.
-- What is the CTR for users?
--    If low, people can't find what they want.
-- How often do people use Adv. Search? Adv search CTR?
--
-- Are users searching alot over many logins?
--    This suggests it is good/important.
-- Are there alot of searches in a short time?
--    This suggest people can't find stuff.
-- Do users use Autocomplete?
--    That means the autocomplete is good.
-- What about advanced searches? Is this used often?

-- TABLES USED:
--    tutorial.yammer_users
--    tutorial.yammer_events


--------- Does Anyone use search?? ---------
SELECT DATE_TRUNC('week',z.session_start) AS week,
       COUNT(*) AS sessions,
       COUNT(CASE WHEN z.autocompletes > 0 THEN z.session ELSE NULL END) AS with_autocompletes,
       COUNT(CASE WHEN z.runs > 0 THEN z.session ELSE NULL END) AS with_runs
  FROM (
SELECT x.session_start,
       x.session,
       x.user_id,
       COUNT(CASE WHEN x.event_name = 'search_autocomplete' THEN x.user_id ELSE NULL END) AS autocompletes,
       COUNT(CASE WHEN x.event_name = 'search_run' THEN x.user_id ELSE NULL END) AS runs,
       COUNT(CASE WHEN x.event_name LIKE 'search_click_%' THEN x.user_id ELSE NULL END) AS clicks
  FROM (
SELECT e.*,
       session.session,
       session.session_start
  FROM tutorial.yammer_events e
  LEFT JOIN (
       SELECT user_id,
              session,
              MIN(occurred_at) AS session_start,
              MAX(occurred_at) AS session_end
         FROM (
              SELECT bounds.*,
              		    CASE WHEN last_event >= INTERVAL '10 MINUTE' THEN id
              		         WHEN last_event IS NULL THEN id
              		         ELSE LAG(id,1) OVER (PARTITION BY user_id ORDER BY occurred_at) END AS session
                FROM (
                     SELECT user_id,
                            event_type,
                            event_name,
                            occurred_at,
                            occurred_at - LAG(occurred_at,1) OVER (PARTITION BY user_id ORDER BY occurred_at) AS last_event,
                            LEAD(occurred_at,1) OVER (PARTITION BY user_id ORDER BY occurred_at) - occurred_at AS next_event,
                            ROW_NUMBER() OVER () AS id
                       FROM tutorial.yammer_events e
                      WHERE e.event_type = 'engagement'
                      ORDER BY user_id,occurred_at
                     ) bounds
               WHERE last_event >= INTERVAL '10 MINUTE'
                  OR next_event >= INTERVAL '10 MINUTE'
               	 OR last_event IS NULL
              	 	 OR next_event IS NULL
              ) final
        GROUP BY 1,2
       ) session
    ON e.user_id = session.user_id
   AND e.occurred_at >= session.session_start
   AND e.occurred_at <= session.session_end
 WHERE e.event_type = 'engagement'
       ) x
 GROUP BY 1,2,3
       ) z
 GROUP BY 1
 ORDER BY 1

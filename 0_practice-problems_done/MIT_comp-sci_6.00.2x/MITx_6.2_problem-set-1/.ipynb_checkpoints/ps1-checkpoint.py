###########################
# 6.00.2x Problem Set 1: Space Cows 

from ps1_partition import get_partitions
import time

#================================
# Part A: Transporting Space Cows
#================================

def load_cows(filename):
    """
    Read the contents of the given file.  Assumes the file contents contain
    data in the form of comma-separated cow name, weight pairs, and return a
    dictionary containing cow names as keys and corresponding weights as values.

    Parameters:
    filename - the name of the data file as a string

    Returns:
    a dictionary of cow name (string), weight (int) pairs
    """

    cow_dict = dict()

    f = open(filename, 'r')
    
    for line in f:
        line_data = line.split(',')
        cow_dict[line_data[0]] = int(line_data[1])
    return cow_dict



# Problem 1
def greedy_cow_transport(cows,limit=10):
    """
    Uses a greedy heuristic to determine an allocation of cows that attempts to
    minimize the number of spaceship trips needed to transport all the cows. The
    returned allocation of cows may or may not be optimal.
    The greedy heuristic should follow the following method:

    1. As long as the current trip can fit another cow, add the largest cow that will fit
        to the trip
    2. Once the trip is full, begin a new trip to transport the remaining cows

    Does not mutate the given dictionary of cows.

    Parameters:
    cows - a dictionary of name (string), weight (int) pairs
    limit - weight limit of the spaceship (an int)
    
    Returns:
    A list of lists, with each inner list containing the names of cows
    transported on a particular trip and the overall list containing all the
    trips
    """
    earth_cows = sorted(cows.items(), key = lambda x: x[1], reverse = True)  #earth_cows is now a list of tuples, not a dictionary
    #print('earth cows sorted by weight: \n', earth_cows)
    aurock_cows = []     # lets us easily check if all cows have been shipped
    aurock_cow_shipments = [] # lists cows that get shipped together
    total_shipments = 0 #tracks total shipments
    
    while (len(earth_cows) != len(aurock_cows)):      #breaks when all cows leave earth
    
        total_shipments += 1
        # print(f'\n NEW SHIPMENT {total_shipments} BEGINS \n')
        shipment_inventory = []     #tracks inventory for each shipment
        ship_space = limit          #reset for each shipement
        
        for cow_tuple in earth_cows:      #iterate the cows 
            if (cow_tuple[1] <= ship_space):
                if (cow_tuple[0] not in aurock_cows):
                    aurock_cows.append(cow_tuple[0])            # used to determine when earth cows all get to aurock
                    shipment_inventory.append(cow_tuple[0])     # tracks all cows that fly together
                    ship_space -= cow_tuple[1]                  # ensures shipment_inventory under ship's weight limit
                    # print('cow_shipped:', cow_tuple[0])
                    # print('ship_space:', ship_space)
        
        if (len(shipment_inventory) == 0):    
            break
        
        # If nothing was shipped, no cows on earth fit on ship. 
        # if (len(earth_cows) == len(aurock_cows)), all cows left earth.
        aurock_cow_shipments.append(shipment_inventory) 
            
    return aurock_cow_shipments
            
       
# Problem 2
def brute_force_cow_transport(cows,limit=10):
    """
    Finds the allocation of cows that minimizes the number of spaceship trips
    via brute force.  The brute force algorithm should follow the following method:

    1. Enumerate all possible ways that the cows can be divided into separate trips
    2. Select the allocation that minimizes the number of trips without making any trip
        that does not obey the weight limitation
            
    Does not mutate the given dictionary of cows.

    Parameters:
    cows - a dictionary of name (string), weight (int) pairs
    limit - weight limit of the spaceship (an int)
    
    Returns:
    A list of lists, with each inner list containing the names of cows
    transported on a particular trip and the overall list containing all the
    trips
    """
    cows_by_name = list(cows.keys())
    optimal_shipment_len = len(cows) 
    
    optimal_shipment_schedule = [[cow] for cow in cows_by_name]
    
    for solution in get_partitions(cows_by_name):
        valid_solution = True        #well, hopefully, it's True. We'll find out down below. 
        num_shipments = 0
        
        for shipment in solution:
            num_shipments += 1
            shipment_weight = 0
            
            for cow in shipment:
                shipment_weight += cows[cow]
    
            if shipment_weight > limit:
                valid_solution = False
                break
        
        if not valid_solution:
            continue
           
        elif num_shipments < optimal_shipment_len:
            optimal_shipment_len = num_shipments
            optimal_shipment_schedule = solution
            
    return optimal_shipment_schedule
        
   
            
  
        
  
# I could reverse keys and values for the cows, with a number as key and list of cow names as values. Then pop out the cow name when it comes time to layout the list.
# Need to store generator output as object for iteration.
  
# Problem 3
def compare_cow_transport_algorithms():
    """
    Using the data from ps1_cow_data.txt and the specified weight limit, run your
    greedy_cow_transport and brute_force_cow_transport functions here. Use the
    default weight limits of 10 for both greedy_cow_transport and
    brute_force_cow_transport.
    
    Print out the number of trips returned by each method, and how long each
    method takes to run in seconds.

    Returns:
    Does not return anything.
    """
    print('Greedy Algorithm Time:')
    start = time.time()
    print(greedy_cow_transport(cows, limit))
    end = time.time()
    print(end - start)
    
    print('Brute Force Algorithm Time:')
    start = time.time()
    print(brute_force_cow_transport(cows, limit))
    end = time.time()
    print(end - start)


"""
Here is some test data for you to see the results of your algorithms with. 
Do not submit this along with any of your answers. Uncomment the last two
lines to print the result of your problem.
"""

cows = load_cows("ps1_cow_data.txt")
limit = 10
print('unaltered cows dict: \n', cows)

# print(greedy_cow_transport(cows, limit))
# print(brute_force_cow_transport(cows, limit))




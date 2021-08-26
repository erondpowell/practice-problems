#From codereview.stackexchange.com                    
def partitions(set_):
    if not set_:
        yield []
        return
    for i in range(2**len(set_)//2):
        parts = [set(), set()]
        for item in set_:
            parts[i&1].add(item)
            i >>= 1
        for b in partitions(parts[1]):
            yield [parts[0]]+b


# This is a helper function that will fetch all of the available 
# partitions for you to use for your brute force algorithm.
def get_partitions(set_):
    for partition in partitions(set_):
        yield [list(elt) for elt in partition]

### Uncomment the following code  and run this file
### to see what get_partitions does if you want to visualize it:

    
# x= []
# for item in (get_partitions(['maggie','maple','marge','moo moo','norah'])):
#     x.append(item)
    
# print(x)


# cows_dict[cow]: the imported inventory of cows.
# shipment_weight: weight of all cows on a shipment. 
# num_shipments: total shipments in a solution. Inital value is zero.

# If a shipment weight goes over the limit, disregard the solution.
# If num_shipments on any solution is shorter than the first, save the solution to shortest_solution.

print(({'Buttercup': 72, 'Daisy': 50, 'Betsy': 65}, 75))



      
        
      
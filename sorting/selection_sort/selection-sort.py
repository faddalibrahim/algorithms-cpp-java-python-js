def find_smallest(arr):
    smallest = arr[0]
    smallest_index = 0
    
    for j in range(1,len(arr)):
        if arr[j] < smallest:
            smallest = arr[j]
            smallest_index = j
    return smallest_index
    
    
def selection_sort(arr):
    sorted_ = []
    
    for i in range(len(arr)):
        smallest = find_smallest(arr)
        sorted_.append(arr.pop(smallest))
        
    return sorted_

unsorted = [8,9,7,5,0,3,18,12]

print(selection_sort(unsorted))
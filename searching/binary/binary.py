import math

array = [3, 5, 6, 9, 11, 18, 20, 21, 24, 30];

def binary_search_recursive(array, target, start = 0, end = len(array) - 1):
    middle = math.floor((start + end) / 2);
    
    if start > end:
        return -1;

    if array[middle] == target:
        return middle;
    elif array[middle] > target: 
        end = middle - 1;
        return binary_search_recursive(array, target, start, end)
    elif array[middle] < target: 
        start = middle + 1;
        return binary_search_recursive(array, target, start, end)


print(binary_search_recursive(array,3))
print(binary_search_recursive(array,6))
print(binary_search_recursive(array,20))
print(binary_search_recursive(array,200))



def binary_search_iterative(array,target,start = 0,end = len(array) - 1):
  while start <= end: 
    middle = math.floor((start + end) / 2);
    if array[middle] == target:
      return middle;
    elif array[middle] > target:
      end = middle - 1;
    else:
      start = middle + 1;
    
  return -1;


print(binary_search_iterative(array,30))
print(binary_search_iterative(array,18))
print(binary_search_iterative(array,21))
print(binary_search_iterative(array,100))
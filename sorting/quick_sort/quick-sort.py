def quick_sort(arr):
    if len(arr) < 2:
        return arr
        
    pivot = arr[0]
    left = [num for num in arr if num < pivot]
    right = [num for num in arr if num > pivot]
    
    return quick_sort(left) + [pivot] + quick_sort(right)

unsorted = [8,9,7,5,0,3,18,12]

print(quick_sort(unsorted))
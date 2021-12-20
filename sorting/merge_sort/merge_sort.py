def mergeSort(array):
    # base case : empty or single-value arrays are already sorted
    if len(array) < 2:
        return array
        
    # split array into halves
    mid = len(array) // 2
    left = array[:mid]
    right = array[mid:]
    
    
    sL = mergeSort(left)
    sR = mergeSort(right)
    
    sorted_result = []
    
    nL = len(sL)
    nR = len(sR)
    
    left_array_index = right_array_index = 0
    
    # transfer halves into one sorted_reult array
    while(left_array_index < nL and right_array_index < nR):
        if sL[left_array_index] < sR[right_array_index]:
            sorted_result.append(sL[left_array_index])
            left_array_index += 1
        else:
            sorted_result.append(sR[right_array_index])
            right_array_index += 1
    
    # transfer left overs from either halves to sorted_result
    while left_array_index < nL:
        sorted_result.append(sL[left_array_index])
        left_array_index += 1
        
    while right_array_index < nR:
        sorted_result.append(sR[right_array_index])
        right_array_index += 1
        
    return sorted_result
    
    
print(mergeSort([9,8,7,6,5,4,3,2,1]))
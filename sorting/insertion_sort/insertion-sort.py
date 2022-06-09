def insertion_sort(arr):
    for i in range(len(arr)):
        curr = arr[i]
        j = i - 1

        while arr[j] > curr and j > -1:
            arr[j + 1] = arr[j]
            j -= 1

        arr[j + 1] = curr

    return arr

print(insertion_sort([8,9,7,5,0,3,18,12]))

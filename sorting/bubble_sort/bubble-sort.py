def bubble_sort(arr):
    for i in range(len(arr)):
        for j in range(1,len(arr)-i):
            if arr[j] < arr[j - 1]:
                arr[j], arr[j - 1] = arr[j - 1], arr[j]
            print(arr)
        print("=========")

    return arr


print(bubble_sort([8,9,7,5,0,3,18,12]))
# print(bubble_sort([7,3,1,4,6,2,3]))
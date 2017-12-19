def main():
    """
    :type nums1: List[int]
    :type nums2: List[int]
    :rtype: float
    """
    nums1 = [1, 2]
    nums2 = [3, 4]

    array1_len = len(nums1)
    array2_len = len(nums2)

    result_arr_len = array1_len + array2_len
    result_arr = [0]*result_arr_len
    i = 0
    j = 0
    k = 0

    while i < array1_len and j < array2_len:
        if nums1[i] < nums2[j]:
            result_arr[k] = nums1[i]
            k = k + 1
            i = i + 1
        else:
            result_arr[k] = nums2[j]
            k = k + 1
            j = j + 1

    while i < array1_len:
        result_arr[k] = nums1[i]
        k = k + 1
        i = i + 1

    while j < array2_len:
        result_arr[k] = nums2[j]
        k = k + 1
        j = j + 1

    # print(result_arr)
    if result_arr_len % 2 != 0:
        print(result_arr[result_arr_len // 2])
    else:
        first_term = result_arr[result_arr_len // 2]
        second_term = result_arr[(result_arr_len // 2) - 1]
        median = (first_term + second_term) / 2
        print(median)


if __name__ == "__main__":
    main()
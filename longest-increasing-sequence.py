def main():
	array_length = len(nums)
        
    memo = [1]*array_length
        
    for i in range(array_length):
        for j in range(i):
            if(nums[i] > nums[j] and memo[i] < memo[j] + 1):
                memo[i] = memo[j] + 1
        
    return max(memo)

if __name__ == '__main__':
    main()
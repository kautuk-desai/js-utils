def countps(str):
    unique_chars = set(str)
    n = len(str)
    is_palindrome = [[None]*n] * n
    dp = [[]*n]*n
    for i in range(n):
        is_palindrome[i][i] = True
    
    print(is_palindrome)



str = "abaab"
countps(str)
    
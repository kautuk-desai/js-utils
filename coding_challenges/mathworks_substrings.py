#Get the string
str = "abc"
substring = []
#find all possible substrings for a given string
for counter in range (0,len(str)):
    substring.append(str[counter:len(str)])
print(substring)
#find length of similarity strings
length = []
for substr in substring:
    #initialize count
    count = 0
    index = 0
    #take one character from both the strings
    for ch in str:
        if index < len(substr):
            ch1 = substr[index]
            index+=1
        else:
            length.append(count)
            break
        #if the characters are same then increment counters
        if ch == ch1:
            count+=1
        # if the characters are not same then append count and
        # move to next element in list
        else:
            length.append(count)
            break   
    #If the code didn't break then the two strings may match exactly
    else:
        length.append(count)

print(sum(length))
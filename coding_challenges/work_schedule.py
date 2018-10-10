#
# Complete the 'findSchedules' function below.
#
# The function is expected to return a STRING_ARRAY.
# The function accepts following parameters:
#  1. INTEGER workHours
#  2. INTEGER dayHours
#  3. STRING pattern
#

def recur(target, dayHours, blank):
    if (target < 0) or (target > 8 and blank <= 1) or (blank == 1 and target > dayHours):
        return []

    output = []
    if target == 0 and blank == 1:
        temp = []
        temp.append(0)
        output.append(temp)
        return output

    if blank <= 1:
        temp = []
        temp.append(target)
        output.append(temp)
        return output

    for i in range(dayHours+1):
        t = recur(target-i, dayHours, blank-1)
        for j in t:
            temp = []
            temp.append(i)
            temp.extend(j)
            output.append(temp)
    
    return output


def findSchedules(workHours, dayHours, pattern):
    # Write your code here
    blank = 0
    sum_ = 0
    blankPos = []
    for i in range(len(pattern)):
        if pattern[i] == '?':
            blank += 1
            blankPos.append(i)
        else:
            sum_ += int(pattern[i])

    recurResult = recur(workHours - sum_, dayHours, blank)
    output = []
    for s in recurResult:
        sb = ""
        j = 0
        for i in range(len(pattern)):
            if pattern[i] == '?':
                sb += str(s[j])
                j += 1
            else:
                sb += pattern[i]

        output.append(sb)

    return output
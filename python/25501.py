# 25501번 재귀의 귀재

T = int(input())
count = 1


def recursion(s, l, r):
    global count
    if l >= r:
        return 1
    elif s[l] != s[r]:
        return 0
    else:
        count += 1
        return recursion(s, l+1, r-1)


def isPalindrome(s):
    return recursion(s, 0, len(s)-1)


for i in range(T):
    test = input()
    count = 1
    result = isPalindrome(test)
    print(result, count)

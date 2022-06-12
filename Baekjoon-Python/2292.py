def cal(n):
    if n == 1:
        return 1
    else:
        cnt = 1
        n -= 1
        while n > 0:
            n -= cnt * 6
            cnt += 1
        return cnt

num = int(input())
print(cal(num))
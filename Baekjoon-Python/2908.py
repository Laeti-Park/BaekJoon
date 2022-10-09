case = str(input())
num = case.split(' ')
num[0] = num[0][::-1]
num[1] = num[1][::-1]  # 문자열 뒤집기

if (int(num[0]) > int(num[1])):
    print(num[0])
else:
    print(num[1])
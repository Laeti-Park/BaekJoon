input_num = int(input())
num = 666
count = 0

while True:
    if '666' in str(num):
        count += 1
    if count == input_num:
        print(num)
        break
    num += 1
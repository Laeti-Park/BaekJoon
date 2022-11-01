import math

num = list(str(input()))
set = 0


temp_list = ['0', '1', '2', '3', '4', '5', '7', '8']
for i in temp_list:
    temp_num = num.count(i)
    if set < temp_num:
        set = temp_num

if set < num.count('6') + num.count('9'):
    set = int(math.ceil((num.count('6') + num.count('9')) / 2))

print(set)
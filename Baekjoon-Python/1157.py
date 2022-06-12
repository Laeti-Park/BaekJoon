num = [0 for i in range(26)]
mstr = str(input())
mcount = 0
for i in range(len(mstr)):
    if (mstr[i] >= 'A' and mstr[i] <= 'Z'):
        num[ord(mstr[i])-ord('A')] += 1
    elif (mstr[i] >= 'a' and mstr[i] <= 'z'):
        num[ord(mstr[i])-ord('a')] += 1
for i in range(len(num)):
    if (num[i] == max(num)):
        mcount += 1
if (mcount == 1):
    print(chr(num.index(max(num))+ord('A')))
else:
    print('?')

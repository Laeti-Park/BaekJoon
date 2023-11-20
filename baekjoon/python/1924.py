month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
date = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN']
m, d = map(int, input().split())
count = 0

for i in range(m - 1):
    count += month[i]

if (d > 1):
    count += d - 1

print(date[count % 7])

formula = input().split('-')
sum = 0

for i in formula[0].split('+'):
    sum += int(i)

for i in formula[1:]:
    for j in i.split('+'):
        sum -= int(j)

print(sum)
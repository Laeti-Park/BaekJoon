case = str(input())
crobet = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z=']
count = 0

for i in range(len(crobet)):
    if crobet[i] in case:
        count += case.count(crobet[i])
        case = case.replace(crobet[i], " ")
        print(count)
case = case.replace(" ", "")
print(count + len(case))
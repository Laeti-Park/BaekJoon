N = int(input())

array = []
for i in range(N):
    array.append(list(map(str, input().split())))

array = sorted(array, key=lambda x: (int(x[0])))
for item in array:
    print(item[0], item[1])

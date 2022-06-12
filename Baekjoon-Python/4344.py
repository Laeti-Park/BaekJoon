case = int(input())


for _ in range(case):
    score = 0
    count = 0
    test = list(map(int, input().split()))
    score = int(sum(test) - test[0])
    avg = float(score / test[0])

    for j in range(1, len(test)):
        if(avg < test[j]):
            count += 1
    
    print(f"{round(count / test[0] * 100, 3):.3f}%")

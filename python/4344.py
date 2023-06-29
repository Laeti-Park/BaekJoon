# 4344번 평균은 넘겠지

case = int(input())

for _ in range(case):
    score = 0
    count = 0
    test = list(map(int, input().split()))
    score = int(sum(test) - test[0])
    avg = float(score / test[0])

    for j in range(1, len(test)):
        if (avg < test[j]):
            count += 1

    # 사사오입 방식으로 변환
    roundOff = 0
    if len(str(count / test[0])) > 7:
        if int(str(count / test[0])[6]) % 2 == 0:
            roundOff = 0.001

    print(f"{round(count / test[0] * 100, 3) + roundOff:.3f}%")

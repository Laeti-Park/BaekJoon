num = [0 for i in range(10000)]
for n in range(10000):
    caseNum = int(n)
    temp = int(n)
    while temp != 0:  # 셀프 넘버인 것을 계산
        caseNum += int(temp % 10)
        temp /= int(10)
    if caseNum <= 10000:
        num[int(caseNum-1)] = 1  # 셀프 넘버를 1로 지정
    if num[n] != 1:  # 아닌 것을 출력
        print(n+1)
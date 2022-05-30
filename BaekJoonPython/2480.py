case = list(map(int, input().split()))
for i in range(len(case)):
    fir = int(case.count(case[0]))
    sec = int(case.count(case[1]))
if fir >= sec:
    max_num = fir
    noon = case[0]
else:
    max_num = sec
    noon = case[1]
if max_num == 3:
    reward = noon*1000 + 10000
elif max_num == 2:
    reward = noon*100 + 1000
else:
    reward = max(case)*100
print(reward)

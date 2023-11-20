# 1159번 농구 경기
N = int(input())
alphabet = [0 for _ in range(26)]
answer = ""

for i in range(N):
    player = input()
    alphabet[ord(player[0]) - ord('a')] += 1

for i in range(len(alphabet)):
    if alphabet[i] >= 5:
        answer += chr(i+97)
if answer != "":
    print(answer)
else:
    print("PREDAJA")

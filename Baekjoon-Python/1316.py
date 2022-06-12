case = int(input())
count = 0

for i in range(case):
    chk = True
    alphabet = [0 for i in range(26)]
    word = str(input()) # 단어 입력

    for j in range(len(word)):
        if(j == 0):
            alphabet[ord(word[j]) - ord('a')] += 1
        elif(j >= 1):
            if(word[j-1] == word[j]):
                continue
            else:
                alphabet[ord(word[j]) - ord('a')] += 1
    for k in range(len(alphabet)):
        if(alphabet[k] > 1):
            chk = False
    if(chk == True):
        count += 1
print(count)

Alphabet = ['ABC', 'DEF', 'GHI', 'JKL', 'MNO', 'PQRS', 'TUV', 'WXYZ']
case = str(input())
sum = 0
for i in range(len(case)):
    for s in range(len(Alphabet)):
        if str(case[i]) in Alphabet[s]:
            sum += 3 + s
print(sum)

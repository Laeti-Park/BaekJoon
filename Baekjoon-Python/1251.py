word = list(map(str, input().strip("\n")))
result = []
for i in range(1, len(word) - 1):
    for j in range(i + 1, len(word)):
        str1 = word[:i]
        str2 = word[i:j]
        str3 = word[j:]

        str1.reverse()
        str2.reverse()
        str3.reverse()

        result.append("".join(str1 + str2 + str3))

print(min(result))

import math

words = input()

for i in range(math.ceil(len(words)/10)):
    start = 10 * i
    finish = (10 * i) + 10 if len(words) > (10 * i) else len(words) - 1
    print(words[start:finish])

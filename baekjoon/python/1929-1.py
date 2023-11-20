# 1929번 소수 구하기-1

import math
import sys

input = sys.stdin.readline


def is_prime(parse_int):
    if parse_int == 1:
        return False

    sqrt = int(math.sqrt(parse_int))

    for i in range(2, sqrt+1):
        if parse_int % i == 0:
            return False

    return True


min_num, max_num = map(int, input().split())

for i in range(min_num, max_num+1):
    if is_prime(i) == True:
        print(i)

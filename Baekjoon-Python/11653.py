def find_prime(parse_int):
    if parse_int == 1:
        return 1

    for i in range(2, parse_int+1):
        if parse_int % i == 0:
            print(i)
            return i


num = int(input())

while num != 1:
    num //= find_prime(num)

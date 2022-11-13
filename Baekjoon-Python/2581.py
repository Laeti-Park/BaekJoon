def is_prime(parse_int):
    if parse_int == 1:
        return False

    for i in range(2, parse_int):
        if parse_int % i == 0:
            return False

    return True


min_num = int(input())
max_num = int(input())
prime_list = []

for i in range(min_num, max_num+1):
    if is_prime(i) == True:
        prime_list.append(i)


if len(prime_list) != 0:
    print(sum(prime_list))
    print(min(prime_list))
else:
    print(-1)

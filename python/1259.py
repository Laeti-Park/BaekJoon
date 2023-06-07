# 1259번 팰린드롬수

while True:
    number = input()
    palindrome = True

    if number == "0":
        break
    for i in range(len(number) // 2):
        if number[i] != number[-1 - i]:
            palindrome = False

    if palindrome:
        print("yes")
    else:
        print("no")

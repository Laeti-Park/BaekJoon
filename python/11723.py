import sys
input=sys.stdin.readline

M = int(input())
S = 0

for i in range(M):

    command = list(map(str, input().split()))
    if command[0] == "add":
        S = S | (1 << int(command[1]))
    elif command[0] == "remove":
        if S & (1 << int(command[1])):
            S = S & ~(1 << int(command[1]))
    elif command[0] == "check":
        print(1 if S & (1 << int(command[1])) else 0)
    elif command[0] == "toggle":
        S = S ^ (1 << int(command[1]))
    elif command[0] == "all":
        S = (1 << 21) - 2
    else:
        S = 0

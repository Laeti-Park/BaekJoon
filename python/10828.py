# 10828번 스택
import sys


N = int(sys.stdin.readline().rstrip())
array = []

for i in range(N):
    command = sys.stdin.readline().rstrip().split()
    if (command[0] == "push"):
        array.append(command[1])
    elif (command[0] == "pop"):
        if array:
            print(array.pop())
        else:
            print("-1")
    elif (command[0] == "size"):
        print(len(array))
    elif (command[0] == "empty"):
        if array:
            print("0")
        else:
            print("1")
    else:
        if array:
            print(array[len(array) - 1])
        else:
            print("-1")

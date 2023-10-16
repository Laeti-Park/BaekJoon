import sys
input = sys.stdin.readline

N, M = map(int, input().split())
account = {}

for _ in range(N):
    id, pw = map(str, input().rstrip().split())
    account[id] = pw

for _ in range(M):
    id = input().rstrip()
    print(account[id])
<<<<<<< HEAD
=======

>>>>>>> 7a305c747d6f7efa2cf5e5a241265df7d12a3361

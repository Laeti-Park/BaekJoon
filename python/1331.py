board = [[0] * 6 for _ in range(6)]

knight = [(-2, -1), (-2, 1), (2, -1), (2, 1),
        (-1, -2), (-1, 2), (1, -2), (1, 2)]

def moveKnight(last):
    global move
    vaild = True
    for item in knight:
        if ord(move[0]) - ord('A') - item[0] == ord(last[0]) - ord('A') and int(move[1]) - 1 - item[1] == int(last[1]) - 1:
            vaild = True
            break
        else:
            vaild = False
    return vaild

start = input()
last = start
board[ord(start[0]) - ord('A')][int(start[1]) - 1] = 1
vaild = True
for _ in range(35):
    move = input()
    if board[ord(move[0]) - ord('A')][int(move[1]) - 1] == 1:
        vaild = False
    else:
        if vaild:
            vaild = moveKnight(last)
        board[ord(move[0]) - ord('A')][int(move[1]) - 1] = 1
        last = move

if vaild:
    vaild = moveKnight(start)

if vaild:
    print("Valid")
else:
    print("Invalid")

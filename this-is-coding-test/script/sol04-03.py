locate = input()
row = int(locate[1])
col = int(ord(locate[0]) - ord('a')) + 1

knight = [(-2, -1), (-2, 1), (2, -1), (2, 1),
          (-1, -2), (-1, 2), (1, -2), (1, 2)]
count = 0

for move in knight:
    moveRow = row + move[0]
    moveCol = col + move[1]
    if moveRow > 0 and moveRow < 9 and moveCol > 0 and moveCol < 9:
        count += 1

print(count)

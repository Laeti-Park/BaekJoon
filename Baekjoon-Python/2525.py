case = list(map(int, input().split()))
cook = int(input())

minute = int((case[1] + cook) % 60)
hour = int((case[0] + ((case[1] + cook) / 60)) % 24)

print(str(hour) + ' ' + str(minute))

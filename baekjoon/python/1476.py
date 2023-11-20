input_E, input_S, input_M = map(int, input().split())
E, S, M, count = 1, 1, 1, 1

while(True):
    if input_E == E and input_S == S and input_M == M:
        break
    E += 1
    S += 1
    M += 1
    count += 1
    if E >= 16:
        E -= 15
    if S >= 29:
        S -= 28
    if M >= 20:
        M -= 19

print(count)
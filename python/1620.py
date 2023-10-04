import sys

input = sys.stdin.readline

N, M = map(int, input().split())

pokemonDict = {}

for i in range(N):
    pokemon = input().rstrip()
    pokemonDict[i] = pokemon

pokemonDictRev = {v: k for k, v in pokemonDict.items()}

for i in range(M):
    search = input().rstrip()

    if search.isdigit():
        print(pokemonDict[int(search)-1])
    else:
        print(pokemonDictRev.get(search) + 1)

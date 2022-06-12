case = int(input())
for i in range(case):
    mstr = input()
    sp = mstr.find(' ')
    for j in range(sp+1, len(mstr)):
        for k in range(int(mstr[:sp])):
            print(mstr[j], end ='')
    print()
    
    

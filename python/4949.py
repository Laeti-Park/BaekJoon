while True:
    row = input()
    stack = []
    balance = True
    if row == ".":
        break
    for i in row:
        if i == "(":
            stack.append("(")
        elif i == ")":
            if len(stack) > 0:
                char = stack.pop()
                if char != "(":
                    balance = False
            else:
                balance = False
        elif i == "[":
            stack.append("[")
        elif i == "]":
            if len(stack) > 0:
                char = stack.pop()
                if char != "[":
                    balance = False
            else:
                balance = False
    if balance and len(stack) < 1:
        print("yes")
    else:
        print("no")
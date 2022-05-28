def deaf_grandma():

    user_input = input("HEY KID!\n")
    goodbye = True
    count = 0
    while goodbye:
        if user_input == "":
            user_input = input("WHAT?!\n")

        if user_input == "GOODBYE!":
            count+=1
            user_input = input("LEAVING SO SOON?\n")

        if user_input == user_input.lower():
            user_input = input("SPEAK UP, KID!\n")
        elif user_input == user_input.upper() and user_input != "GOODBYE!":
            user_input = input("NO, NOT SINCE 1946!\n")

        if count==1:
            print("LATER, SKATER!")
            goodbye = False
            return
        



deaf_grandma()

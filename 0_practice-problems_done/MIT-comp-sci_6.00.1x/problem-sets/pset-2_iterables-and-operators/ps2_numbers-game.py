
user_input = ''
# epsilon not necessary bc I will use int() and type in h, l, c.
high = 100
low = 0
guess = int((high + low) / 2)
numGuesses = 0


print('Please think of a number between 0 and 100!')

while user_input != 'c':
    #print('\n low =', low,'high =', high, 'next_guess =', guess)
    numGuesses += 1

    user_input = input((f"""
                        \nEnter 'h' to indicate the guess is too high. 
                        \nEnter 'l' to indicate the guess is too low. 
                        \nEnter 'c' to indicate I guessed correctly.
                        \nIs your secret number {str(guess)}?"""))
    
    if user_input == "l":
        low = guess
        print('\n printing low input:', user_input)

    elif user_input == 'h':
        high = guess
        print('\n printing high input:', user_input)
        
    elif user_input != 'l' and user_input != 'h' and user_input != 'c':
        print('\n YO!!! You have to type "l", "h", or "c"...') 
    
    #guess needs to be redefined at the end of every iteration.
    #This is because we redefine high and low
    guess = int((high + low) / 2)

if user_input == 'c':
    print(f'Game Over. Your number was {guess}!')
    print('number of guesses:', str(numGuesses))

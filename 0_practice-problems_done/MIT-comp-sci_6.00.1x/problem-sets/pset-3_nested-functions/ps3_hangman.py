# Hangman game
#

# -----------------------------------
# Helper code
# You don't need to understand this helper code,
# but you will have to know how to use the functions
# (so be sure to read the docstrings!)

import random

WORDLIST_FILENAME = "words.txt"

def loadWords():
    """
    Returns a list of valid words. Words are strings of lowercase letters.
    
    Depending on the size of the word list, this function may
    take a while to finish.
    """
    print("Loading word list from file...")
    # inFile: file
    inFile = open(WORDLIST_FILENAME, 'r')
    # line: string
    line = inFile.readline()
    # wordlist: list of strings
    wordlist = line.split()
    print("  ", len(wordlist), "words loaded.")
    return wordlist

def chooseWord(wordlist):
    """
    wordlist (list): list of words (strings)

    Returns a word from wordlist at random
    """
    return random.choice(wordlist)

# end of helper code
# -----------------------------------

# Load the list of words into the variable wordlist
# so that it can be accessed from anywhere in the program
wordlist = loadWords()




def isWordGuessed(secretWord, lettersGuessed):
    '''
    secretWord: string, the word the user is guessing
    lettersGuessed: list, what letters have been guessed so far
    returns: boolean, True if all the letters of secretWord are in lettersGuessed;
      False otherwise
    '''
    for letter in secretWord: 
        if letter not in lettersGuessed:
            return False
    return True




def getGuessedWord(secretWord, lettersGuessed):
    '''
    secretWord: string, the word the user is guessing
    lettersGuessed: list, what letters have been guessed so far
    returns: string, comprised of letters and underscores that represents
      what letters in secretWord have been guessed so far.
    '''
    displayWord = ''
    
    for letter in secretWord:
        if letter not in lettersGuessed:
            displayWord += '__ '
        else:
            displayWord += letter + " "
    return displayWord



def getAvailableLetters(lettersGuessed):
    '''
    lettersGuessed: list, what letters have been guessed so far
    returns: string, comprised of letters that represents what letters have not
      yet been guessed.
    '''
    availableLetters = 'abcdefghijklmnopqrstuvwxyz'
    lettersLeft = ''
    
    for letter in availableLetters:
        if letter not in lettersGuessed:
            lettersLeft += letter
    return lettersLeft  
    
    
def hangman(secretWord):
    '''
    secretWord: string, the secret word to guess.

    Starts up an interactive game of Hangman.

    * At the start of the game, let the user know how many 
      letters the secretWord contains.

    * Ask the user to supply one guess (i.e. letter) per round.

    * The user should receive feedback immediately after each guess 
      about whether their guess appears in the computers word.

    * After each round, you should also display to the user the 
      partially guessed word so far, as well as letters that the 
      user has not yet guessed.

    Follows the other limitations detailed in the problem write-up.
    '''

    guesses = 8
    lettersGuessed = []      
    
    print('\nWelcome to the game Hangman!')
    print(f'I am thinking of a word that is {len(secretWord)} letters long.')     
    print('-------------\n')
    
    while guesses > 0:
               
        print('Letters guessed:', lettersGuessed)
        availableChars = getAvailableLetters(lettersGuessed)
        
        
        print(f'You have {guesses} guesses left.')
        print(f'Available Letters: {availableChars}')
        
        userGuess = input('Please Guess a Letter:').lower()
        wordBlanks = getGuessedWord(secretWord, lettersGuessed)
        
        if (userGuess in secretWord) and (userGuess not in lettersGuessed):
            lettersGuessed.append(userGuess)
            wordBlanks = getGuessedWord(secretWord, lettersGuessed)
            print(f'Good guess: {wordBlanks}')
            print('-------------\n')
        elif (userGuess in lettersGuessed):
            print(f'Oops! You already guessed that letter: {wordBlanks}')
            print('-------------\n')
        
        else:
            lettersGuessed.append(userGuess)
            wordBlanks = getGuessedWord(secretWord, lettersGuessed)
            guesses -= 1
            print(f'oops! That letter is not in my word: {wordBlanks}')
            print('-------------\n')
        
            
        youWinTF = isWordGuessed(secretWord, lettersGuessed)
        
        if youWinTF:
            print('Congratulations, you won!')
            break
        print(youWinTF)
        
    if guesses == 0:
        print(f'Sorry, you ran out of guesses. The word was {secretWord}.')

    
# When you've completed your hangman function, uncomment these two lines
# and run this file to test! (hint: you might want to pick your own
# secretWord while you're testing)

secretWord = chooseWord(wordlist).lower()
hangman(secretWord)




# number guessing game by Rakib Dhali
import random

n = random.randint(1, 101)

guesses = 0

print("Welcome to the Number Guessing Game!")
print("I've chosen a secret number between 1 and 100. Try to guess it!")

while True:
    try:
        a = int(input('Guess the number: '))
        if not 1 <= a <= 100:
            print("Please enter a number between 1 and 100.")
            continue

        guesses += 1

        if a < n:
            if n - a <= 5:  # Check if close (within 5)
                print('Very close. Higher number please')
            else:
                print('Too low. Higher number please')
        elif a > n:
            if a - n <= 5:  # Check if close (within 5)
                print('Very close. Lower number please')
            else:
                print('Too high. Lower number please')
        else:
            print(f'You have guessed the number {n} correctly in {guesses} attempts')
            break
    except ValueError:
        print("Invalid input. Please enter a number.")
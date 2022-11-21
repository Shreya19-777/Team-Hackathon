/*******************************************************************************************
* Name: Shreya Prasad                          
* Date Started: November 8th 2022     
* Code: C++ in repl                            
* Purpose: Coding level 4 of hangman      
* Data Dictionary: 
* randWords[]................ 10 different words to be chosen from
* wordList[]................. = declaration of randWords[] in main function
* randInt.................... Choosing the place in array for rand word
* word ...................... string equal to the random word picked
* guessingWord............... = word in main funciton
* newWord ................... The word changed to stars for display
* wordPicked ................ = newWord in main function
* score ..................... keeping track of how many wrong guesses the user has
* userScore ................. = score in main function
* i, j ...................... counters for loops
* guess ..................... the user guess for letter in the word
* done ...................... to end the loop to get user guesses
* wordBefore ................ checking if the user guess is in the word
* userContinue .............. user entered num to continue or quit
* roundsWon ................. variable to count number of wins the user has
* roundsLost ................ variable to count number of losses the user has
******************************************************************************************/

//Bringing in needed libraries
#include <iostream>
#include <cctype>
#include <cstring>
#include <cstdlib>
#include <ctime>
#include <cmath>
#include <stdlib.h>
using namespace std;

//Declaring the functions**************************************
string hangManWord (string &word, string &newWord, int &roundsPlayed, string randWords[]);
int userGuess (string word, string newWord, int roundsPlayed);

//Running the main program ************************************
int main() 
{
    //Making all random numbers generated random
  srand(time(0));
  
  //Outputting the purpose of the game
  cout<<"This is a game of hangman. Everytime you get a letter wrong your score goes down a point, you start at 10 points. Win 3 rounds without running out of points and you win! Good luck!";

  //Declaring the variables
  string guessingWord, wordPicked, wordList[10], facts[10],quickFact; 
  int userScore, userContinue, roundsLost=0, roundsWon=0, rounds=0, i=0, randFact=0;

  userContinue = 1;

  //List of fun facts to output afterward
    facts[0] = "Quick fact: Quality education is a global issue that affects millions of kids and adolescents around the world.";
    facts[1] = "Quick fact: Quality education allows students to contribute their best and allow for cognitive, social, mental and physical development.";
    facts[2] = "Quick fact: Through quality education, people can find better employment options and make better livelihoods which could be the key to reducing poverty.";
    facts[3] = "Having quality education around the world will allow us to make prgress towards creating better societies.";
    facts[4] = "Quick fact: Quality Education is a global issue and it is key to developping a brighter future.";
    facts[5] = "Quick fact: Quality Education can help individuals seek better job opportunities and can greatly help to eliminate poverty.";
    facts[6] = "Quick fact: Quality Education can help create more resilient communities and create a more peaceful society.";
    facts[7] = "Quick fact: Quality Education can help reduce inequalities in our society including gender equality.";

  //Picking the fact
  randFact = rand () % 7;
  quickFact = facts[randFact];
      
  //Loop if user wants to play again
  do
  {
    //Calling the function to get random word
    wordPicked = hangManWord(guessingWord, wordPicked, rounds, wordList);

    //Outputting the word in stars
    cout<<"\nThe word is "<<wordPicked;
    cout<<"\n___\n|";
    cout<<"\n|";
    cout<<"\n|";

    //Calling function to let user guess
    userScore = userGuess (guessingWord, wordPicked, rounds);

    //Outputting round over message, asking if the user wants to play again
    if (userScore == 0)
    {
      rounds++;
      roundsLost++;
      cout<<"\n\nYou ran out of points. You have lost "<<roundsLost<<" rounds. The word was "<<guessingWord<<". To play again press 1 or to exit press 2 ->";
      cin>>userContinue;
      userScore = 10;
    }
    else
    {
      rounds++;
      roundsWon++;
      if (roundsWon == 3)
      {
        cout<<"\n\nCongratulations, you got 3 wins! You beat the game";
        cout<<"\nIf we work together, we can create supportive learning enivronments, provide the tools necessary for students and teachers and together we can achieve quality education for all.";
        userContinue = 2;
      }
      else
      {
        cout<<"\n\nCongratulations, you guessed the word! You still have "<<userScore<<" points left! You have won "<<roundsWon<<" rounds.";
        cout<<"\n\n"<<quickFact<<"\n";
        cout<<"\nPress 1 to play again or 2 to exit -> ";
        cin>>userContinue;
        userScore = 10;
      }
    }
  } while (userContinue == 1);

  if (userContinue==2)
  {
    cout<<"\nThanks for playing!";
  }
}
//***********************************Writing the functions****************************************

//Function to get the random word and change it to '*'
string hangManWord (string &word, string &newWord, int &roundsPlayed, string randWords[])
{
  //Making all random numbers generated random
  srand(time(0));
  
  //Declaring the variables
  int randInt, num, i, usedWords[10] = {0,0,0,0,0,0,0,0,0,0}, j;

  //Adding in the words for each number
  randWords[0] = "global";
  randWords[1] = "cognitive";
  randWords[2] = "development";
  randWords[3] = "resilience";
  randWords[4] = "prosperity";
  randWords[5] = "discipline";
  randWords[6] = "mandatory";
  randWords[7] = "opportunity";
  randWords[8] = "progress";
  randWords[9] = "supportive";

  //Randomly picking the word that will be outputted;
  randInt = 0;

  if (roundsPlayed == 0)
  {
    randInt = rand () % 3;
  }
  if (roundsPlayed == 1)
  {
    randInt = rand () % 2;
    randInt = randInt + 3;
  }
  if (roundsPlayed == 2)
  {
    randInt = rand () % 2;
    randInt = randInt + 6;
  }
  if (roundsPlayed == 3)
  {
    randInt = rand () % 2;
    randInt = randInt + 8;
  }
  if (roundsPlayed>3)
  {
    randInt = rand () % 10;
  }

  //Setting word equal to the randomly generated word
  word = randWords[randInt];
    
  //Assigning the word the stars
  newWord = randWords[randInt].assign(randWords[randInt].length(), '*');

  //Returning the word to main program
  return(newWord);
}

//Function for user play and score**********************************************************************************
int userGuess (string word, string newWord, int roundsPlayed)
{
  //Declaring the variables
  char guess;
  int i, done, n, j, score=9, totalGuess=0;
  string guessCheck, wordBefore, guessTotal, change, lettersGuessed[26];

  //Resetting variables
  if (roundsPlayed>0)
  {
    for (j=0;j<26;j++)
      {
        lettersGuessed[j]="";
      }
  }

  //Starting while loop (setting condition to run loop until user runs out of guesses or gets the word)
  done = false;

  //Running loop to keep getting guesses until user is out of lives or guesses the word
  while (done == false)
  {
    //Getting the user input
    cout<<"\n\nENTER GUESS HERE -> ";
    cin>>guess;

    //checking if user input is an integer
    
    if (isdigit(guess))
    {
      cout<<"\n\nERROR. Please enter a letter instead of a number!";
    }

    else 
    {
      //Changing to have output in caps
      guess = toupper(guess);
      guessTotal = guessTotal + guess + " ";
      guess = tolower(guess);

      //Switching to string to let user guess full words (push.back function learned from techie delight)
      change.push_back(guess);
    
      //Setting variable equal to old word to check if any letters changed during loop
      wordBefore = newWord;
      
      //Writing loop to find all occurences of letter guessed
      for (i=0;i<word.length(); i++)
      {
        if (guess == word[i])
        {
          newWord[i] = guess;
        }
      }
      i = 0;
      
      //Updating the score and ASCII art for each missed letter if guess was not in word
      if (wordBefore == newWord)
      {
        totalGuess++;
        //Checking if letter has already been guessed
        guessCheck = guess;

        //If it is the first incorrect guess
        if (score == 9)
        {
          if (guessCheck == lettersGuessed[0] || guessCheck == lettersGuessed[1] || guessCheck == lettersGuessed[2] || guessCheck == lettersGuessed[3] || guessCheck == lettersGuessed[4] || guessCheck == lettersGuessed[5] || guessCheck == lettersGuessed[6] || guessCheck == lettersGuessed[7] || guessCheck == lettersGuessed[8]|| guessCheck == lettersGuessed[9] || guessCheck == lettersGuessed[10] || guessCheck == lettersGuessed[11] || guessCheck == lettersGuessed[12] || guessCheck == lettersGuessed[13] || guessCheck == lettersGuessed[14] || guessCheck == lettersGuessed[15] || guessCheck == lettersGuessed[16] || guessCheck == lettersGuessed[17] || guessCheck == lettersGuessed[18] || guessCheck == lettersGuessed[19] || guessCheck == lettersGuessed[20] || guessCheck == lettersGuessed[21] || guessCheck == lettersGuessed[22] || guessCheck == lettersGuessed[23] || guessCheck == lettersGuessed[24] || guessCheck == lettersGuessed[25])
        {
          //If letter has already been guessed
          cout<<"\n\nYou have already guessed that letter!";
        }
        else 
        {
          score--;
          cout<<"\nThe letter "<<guess<<" is not in the word. Your score is now "<<score;
          lettersGuessed[totalGuess] = guess;
        }
        cout<<"\nYour letters guessed are: \n"<<guessTotal;
        }
        //If it is not the first mistake
      else 
      {
        //Checking if the letter has already been guessed
        if (guessCheck == lettersGuessed[0] || guessCheck == lettersGuessed[1] || guessCheck == lettersGuessed[2] || guessCheck == lettersGuessed[3] || guessCheck == lettersGuessed[4] || guessCheck == lettersGuessed[5] || guessCheck == lettersGuessed[6] || guessCheck == lettersGuessed[7] || guessCheck == lettersGuessed[8]|| guessCheck == lettersGuessed[9] || guessCheck == lettersGuessed[10] || guessCheck == lettersGuessed[11] || guessCheck == lettersGuessed[12] || guessCheck == lettersGuessed[13] || guessCheck == lettersGuessed[14] || guessCheck == lettersGuessed[15] || guessCheck == lettersGuessed[16] || guessCheck == lettersGuessed[17] || guessCheck == lettersGuessed[18] || guessCheck == lettersGuessed[19] || guessCheck == lettersGuessed[20] || guessCheck == lettersGuessed[21] || guessCheck == lettersGuessed[22] || guessCheck == lettersGuessed[23] || guessCheck == lettersGuessed[24] || guessCheck == lettersGuessed[25])
        {
          cout<<"\n\nYou have already guessed that letter!";
        }
        else 
        {
          //Lowering score and outputting the letters guessed
          score--;
          cout<<"\nYour letters guessed are: "<<guessTotal;
          cout<<"\nThe letter "<<guess<<" is not in the word. Your score is now "<<score;
        }
          
        lettersGuessed[totalGuess] = guess;
        guessCheck = guess;
      }
        
      //Outputting and adding parts to hangman when incorrect - ASCII Art
      switch (score)
      {
        case (8):
          cout<<"\n___\n|";
          cout<<"\\";
          cout<<"\n|";
        break;
        case(7):
          cout<<"\n___\n|";
          cout<<"\\*";
          cout<<"\n|";
          break;
        case(6):
          cout<<"\n___\n|";
          cout<<"\\*/";
          cout<<"\n|";
          break;
        case(5):
          cout<<"\n___\n|";
          cout<<"\\*/\n| |";
          cout<<"\n|";
          break;
        case(4):
          cout<<"\n___\n|";
          cout<<"\\*/\n| |\n|/ ";
          cout<<"\n";
          break;
        case(3):
          cout<<"\n___\n|";
          cout<<"\\*/\n| |\n|/ \\";
          cout<<"\n|";
          break;
        case(2):
          cout<<"\n___\n|";
          cout<<" /\\\n| \\*/\n|  |\n| / \\";
          cout<<"\n";
          break;
        case(1):
          cout<<"\n___\n|";
          cout<<"_/\\\n| \\*/\n|  |\n| / \\";
          cout<<"\n";
          break;
        case(0):
          cout<<"\n___\n|";
          cout<<"_/\\_\n| \\*/\n   |\n| / \\";
          cout<<"\n";
          done = true;
          break;
        }
    }
      
      //Outputting the word and outputting all the user letters guessed
      if (newWord != wordBefore)
      {
        totalGuess++;
        lettersGuessed[totalGuess] = guess;
        cout<<"\nYour guess is in the word!";
        cout<<"\nYour letters guessed are: "<<guessTotal;
      }
      
      //Outputting the word
      cout<<"\n\n"<<newWord;

      //Ending while loop if the user has guessed all the letters correctly
      if (newWord == word)
      {
        done = true;
      }
    }
  }
  
  wordBefore = "";
  newWord = "";
  totalGuess = 0;
  guessCheck = "";
  change = "";
  
  //Returning the score to main function
  return (score);
}

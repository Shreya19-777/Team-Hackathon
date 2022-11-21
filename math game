#include <cctype>
#include <chrono>
#include <cmath>
#include <cstdlib>
#include <ctime>
#include <iostream>
#include <string>
#include <thread>
using namespace std;

string fact(int i); // for the facts
string questions(int i, int level); // outputing questions
string checking(float userAns, int i); //checking user's answers

int main() { //start main
  int level;
  cout << "Welcome to The Maths Game. Let's test your maths' skills and learn "
          "something new about the statistic of global education.\n\nChoose "
          "your level to start\n1. Easy\n2. Challenging\n  Your choice: ";
  cin >> level;

    cout << "\nYou selected level " <<level <<". Let's get started with the questions.\n\n" ;
    this_thread::sleep_for(chrono::seconds(1));

    for (int i = 0; i < 7; i++) { // looping 7 questions

      string question =
          questions(i, level); // for questions match with the level
      float userAns;
      cout << "Question " << i + 1 << ": " << question;
      cin >> userAns;

      string check = checking(userAns, i); // check if its correct or not

      while ((check == "incorrect") || (check != "correct")) {
        cout << "Incorrect. Re-enter the answer: ";
        cin >> userAns;
        check = checking(userAns, i);
      }

      string afact = fact(i);
      if (check == "correct") {
        cout << "\nThat is a correct answer. Here's a statistic that include "
                "the number: \n"
             << afact << "\n\n";
      }
      this_thread::sleep_for(chrono::seconds(3));

    } // end of looping 7 questions
  cout<<"Thank you for playing the game. Hope you learned something new. ";

} // end of main



// the functions
string questions(int i, int level) { //function to cout correct maths question with correct level
  
  string question1[7] = {"what is the answer of 7^2 x [3(x+1)/(x+1)]:",
                         "what is the answer of 100/2:",
                         "what is the answer of sqrt(9): ",
                         "what is the answer of 391+18+69+15: ",
                         "what is 20% : ",
                         "what is the answer of [(0.5x1.97)+11/6](2^2-4): ",
                         "what is the answer of 5/4: "};

  string question2[7] = {
      "calculate (110.25/sin^2(60)) times 10^6: ",
      "calculate (cos60) x 100: ",
      "calculate related acute angle of: cos(5(π/3)): ",
      "calculate ((48.1 x 5)+6)x2=  ",
      "what is the horizontal asymptote of this eqn: (x^2 - x - 6)/(5(x^2 - "
      "1)): ",
      "what is the answer of cos 90: ",
      "one of the verticle asymptote of this eqn: (x^2 - 4 + 3)/(4x - 5)(x^2 - "
      "1): "};
  
  int j;
  string returnQuestion[7];
  if (level == 1) {
    for (j = 0; j < 7; j++) {
      returnQuestion[j] = question1[j];
    }
  } else if (level == 2) {
    for (j = 0; j < 7; j++) {
      returnQuestion[j] = question2[j];
    }
    
  }
  string ques = returnQuestion[i];
  return (ques);
} //end of function 

string checking(float userAns, int i) { //function to check if user's answer is correct
  string check;
  float answer[7] = {147, 50, 3, 493, 0.2, 0, 1.25};
  if (userAns == answer[i]) {
    check = "correct";
  } else if (userAns != answer[i]) {
    check = "incorrect";
  }
  return (check);
}

string fact(int i) { //function to cout facts for each correct answer
  string facts[7] = {
      "Times 147 to ten to power of 6 is the number of children that missed "
      "over half of in-person instruction from the pandemic",
      "50 percent don't have access to technology like computers and internet",
      "3 million Ukrainian children has remote learning in chaos of war",
      "493 million women are illiterate, ⅔ of illiterate population in 2013",
      "1 in 5 children, adolescents and youth worldwide are out of school,  "
      "the numbers haven't change over past 5 years(UNESCO)",
      "Norway, Finland and Iceland are few countries where university is free "
      "of charge to all students",
      "1.25 US dollar is how much education cost for a child in developing "
      "countries"};
  return (facts[i]);
}

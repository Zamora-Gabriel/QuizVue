---------------------------------------
<Gabriel Zamora>
<22/06/2021>

The project is a playable Game show with multiple roles being the most important for playability the Host and the Player.
The Gameshow requires having also screens for the board to be shown to all the participants as the available questions are shown with some
score value forplayers to decide which one to answer. For the third iteration, editor screen was added more vuex components were added and also
more directives to make transitions automatic on the player and board screens.

The goal of this assignment is to apply the knowledge acquired in classes about the VUE framework, directives, routes, and vue ajax (vuex).

[demo] (https://github.com/Zamora-Gabriel/QuizVue.git) | (link)


## Synopsis
---------------
In this project, students were tasked with continuing to program a game using VUE framework's directives, routes, controllers, and events
in addition with their previous skills in html,
javascript, and css. 

This project in particular is modeled after a Gameshow with 3 different roles with different screens as
a board needs to be displayed for users to see, a host manages the game, the players and also an editor to do new questions and/or themes.

# Download/Install
---------------------------------------

Browse to demo link and download the zip from the Assignment 2 branch or download it from:

[Download Zip](https://github.com/Zamora-Gabriel/QuizVue/archive/refs/heads/Assignment3.zip)

- Once downloaded Uncompress the zip to a folder

- Open the folder in Visual Studio Code

- Once in VSCode, go to the terminal and type "npm run serve" (without the quotes)

- Or open the vue ui by typing on the terminal "npx vue ui" and from tasks select the serve option then run task

- Open google chrome or microsoft edge and access to the next URL in parenthesis: 
(http://localhost:4000)

- The demo should be showing on the screen

# *** How to use ***
---------------------------------------

- After the download/install steps, the demo should be shown on the given localhost (Port 4000).

- The page has four navigation tabs that conform the game being Host, Player, Board, and Editor

Host Page:

- On the host page it is firstly shown the login, where the host can pick a game (or theme) and start a session advancing to the next sub-screen

- Once a session is started, the host then gets to see which players have logged in on the session screen.

- The first name for the player should be empty if no player has tried to login, once a player has logged in, the name should appear.

- The host can start the game whenever all player spots have been assigned by pressing the start game button.

- If at least one spot is empty, the host won't be able to start game.

- After the host clicks the button to start the game, a new sub-screen will show up being the question select screen

- The question select screen is an interactive copy of the board with the difference being that the host can click on one of the buttons to 
travel to the player answers screen.

- Clicking a different button shall show a different category and question also depending of the value of the button.

- Once a button was pressed, a flag activates letting the player and board vues to change to the answering and question showing screens respectively.

- On the player answers screen, the host gets to see the question that popped up from the button, and also the answers given by the players

- For now the first user and first answer are the only ones that can be shown whenever the player types the answer and submits on his or her screen

- The host can mark as correct or not the answers of the players adding or substracting points with the correct or incorrect buttons

- Once the host is done with marking the players responses, he can click on the return button to return to the question selector screen

- Returning to the question selector screen deactivates the flag that led player and board vues to advance, so the player vue returns to the waiting screen while
the board vue goes to the board display.

Player Page:

- On the player page, the user must write a nickname to be identified. The user cannot leave the field in blank, nor type only a space since an alert will pop up
asking for a nickname.

- This nickname will be shown on the host session screen once submitted

- After typing, the user can click on the submit button. An alert showing the nickname typed will pop up and after closing it, the next sub-screen will appear
being the stand by screen.

- On the stand by screen the player gets to see their nickname and their actual score which will update when the host marks as correct or incorrect

- The stand by screen will change when the host has selected a question updating to the answer screen.

- The answer screen shows the question and an empty field waiting to hold an answer for the question.

- After typing the answer the user can sbumit it by clicking on the button which is shown on the host's answers screen.

- When the user submits, he or she will be returned to the stand by page. Waiting for the host to select a new question.

Board Page:

- The board page is just a screen to be shown to the players with the categories and the different questions hidden by a mak of the actual points to be awarded.

- After the host selects a question, the board page will show the question showing screen which has the question the host popped up
 and a message to the players in order to let them know they must answer on their screens.

Editor Page:

- In here the editor can change the theme of the game by typing a new name and saving it. The field cannot be blank or just a space.

- Also the editor can change the questions by clicking on one of the buttons to change that question.

- A pop up will appear asking for a new question, the field cannot be left blank so, the editor must type a new question and click on the button to close that pop up

- Once the questions have been editted the editor can hit the save questions button to save all of the questions that he or she editted. 


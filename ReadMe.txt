---------------------------------------
<Gabriel Zamora>
<07/06/2021>

The project is a playable Game show with multiple roles being the most important for playability the Host and the Player.
The Gameshow requires having also screens for the board to be shown to all the participants as the available questions are shown with some
score value forplayers to decide which one to answer. This second iteration required to change some logic to adapt to the use of vuex and also
using directives and routes from the VUE framework.

The goal of this assignment is to apply the knowledge acquired in classes about the VUE framework, directives, routes, and vue ajax (vuex).

[demo] (https://github.com/Zamora-Gabriel/QuizVue.git) | (link)


## Synopsis
---------------
In this project, students were tasked with continuing to program a game using VUE framework's directives, routes, controllers, and events
in addition with their previous skills in html,
javascript, and css. This project in particular is modeled after a Gameshow with 2 different roles on the user side, but different screens as
a board needs to be displayed for users to see.

# Download/Install
---------------------------------------

Browse to demo link and download the zip from the Assignment 2 branch or download it from:

[Download Zip](https://github.com/Zamora-Gabriel/QuizVue/archive/refs/heads/Assignment2.zip)

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

- The page has three navigation tabs that conform the game being Host, Player and Board

Host Page:

- On the host page it is firstly shown the login, where the host can pick a game (or theme) and start a session advancing to the next sub-screen

- Once a session is started, the host then gets to see which players have logged in on the session screen.

- The first name for the player should be empty if no player has tried to login, once a player has logged in, the name should appear.

- The host can start the game whenever he likes even if not all spots of players have been assigned by pressing the start game button.

- After the host clicks the button to start the game, a new sub-screen will show up being the question select screen

- The question select screen is an interactive copy of the board with the difference being that the host can click on one of the buttons to 
travel to the player answers screen.

- Clicking a different button shall show a different category and question also depending of the value of the button.

- On the player answers screen, the host gets to see the question that popped up from the button, and also the answers given by the players

- For now the first user and first answer are the only ones that can be shown whenever the player types the answer and submits on his or her screen

- The host can mark as correct or not the answers of the players adding or substracting points with the correct or incorrect buttons

- Once the host is done with marking the players responses, he can click on the return button to return to the question selector screen

Player Page:

- On the player page, the user must write a nickname to be identified. The user cannot leave the field in blank, nor type only a space since an alert will pop up
asking for a nickname.

- This nickname will be shown on the host session screen once submitted

- After typing, the user can click on the submit button. An alert showing the nickname typed will pop up and after closing it, the next sub-screen will appear
being the stand by screen.

- On the stand by screen the player gets to see their nickname and their actual score which will update when the host marks as correct or incorrect

- Also, as on the game the screen will change when the host has selected a question, for now a debug button was placed as demonstration purposes to navigate to the 
answer screen.

- The answer screen shows the question and an empty field waiting to hold an answer for the question.

- After typing the answer the user can sbumit it by clicking on the button which is shown on the host's answers screen.

- For now when the user submits, he or she will be returned to the stand by page.

Board Page:

- The board page is just a screen to be shown to the players with the categories and the different questions hidden by a mak of the actual points to be awarded.

- for debug purposes, clicking on the go to question button will show the question page which has the question the host popped up
 and a message to the players to answer on their screens.

- As well a return to board button was added; however, the navigation of this screen will be managed with the host's actions as when the host clicks a button the question
will be displayed for players to see.  


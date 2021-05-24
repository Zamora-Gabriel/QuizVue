---------------------------------------
<Gabriel Zamora>
<24/05/2021>

The project is a playable Game show with multiple roles being the most important for playability the Host and the Player.
The Gameshow requires having also screens for the board to be shown to all the participants as the available questions are shown with some
score value forplayers to decide which one to answer.

The goal of this assignment is to apply the knowledge acquired in classes about the VUE framework.

[demo] (https://github.com/Zamora-Gabriel/QuizVue.git) | (link)


## Synopsis
---------------
In this project, students were tasked with choosing a game to create using VUE framework in addition with their previous skills in html,
javascript, and css. This project in particular is modeled after a Gameshow with 2 different roles on the user side, but different screens as
a board needs to be displayed for users to see.

# Download/Install
---------------------------------------

Browse to demo link and download the zip or download it from:

[Download Zip](https://github.com/Zamora-Gabriel/QuizVue/archive/refs/heads/main.zip)

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

- The host can start the game whenever he likes even if not all spots of players have been assigned by pressing the start game button.

- After the host clicks the button to start the game, a new sub-screen will show up being the question select

- The question select screen is an interactive copy of the board with the difference being that the host can click on one of the buttons to 
travel to the player answers screen.

- On the player answers screen, the host gets to see the question that popped up from the button, and also the answers given by the players

- The host can mark as correct or not the answers of the players adding or substracting points (the last feature mentioned will be implemented)

- Once the host is done with marking the players responses, he can click on the return button to return to the question selector screen

Player Page:

- On the player page, the user must write a nickname to be identified. The user cannot leave the field in blank, nor type only a space since an alert will pop up
asking for a nickname.

- After typing, the user can click on the submit link/button. An alert showing the nickname typed will pop up and after closing it, the next sub-screen will appear
being the stand by screen.

- On the stand by screen the player gets to see their nickname and their actual score (for now just hardcoded as 0)

- Also, as on the game the screen will change when the host has selected a question, for now a debug button was placed as demonstration purposes to navigate to the 
answer screen.

- The answer screen shows the question and an empty field waiting to hold an answer for the question.

- After typing the answer the user can sbumit it by clicking on the link/button which on future implementations will be shown on the host's answers screen.

- For now when the user submits, he or she will be returned to the stand by page.

Board Page:

- The board page is just a screen to be shown to the players with the categories and the different questions hidden by a mak of the actual points to be awarded.

- for debug purposes, clicking on the go to question button will show the question page which only has the question and a message to the players to answer on their screens.

- As well a return to board button was added; however, the navigation of this screen will be managed with the host's actions as when the host clicks a button the question
will be displayed for players to see.  


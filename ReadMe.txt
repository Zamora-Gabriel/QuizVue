---------------------------------------
<Gabriel Zamora>
<19/07/2021>

The project is a playable Game show with multiple roles being the most important for playability the Host and the Player.
The Gameshow requires having also screens for the board to be shown to all the participants as the available questions are shown with some
score value forplayers to decide which one to answer.

The goal of this assignment is to apply the knowledge acquired in classes about Firebase and the firestore cloud storage in order to store game parameters on the cloud.

[demo] (https://github.com/Zamora-Gabriel/QuizVue.git) | (link)


## Synopsis
---------------
In this project, students were tasked with continuing to program a game using VUE framework's directives, routes, controllers, and events
in addition with their previous skills in html, javascript, and css. For cloud computing class, was required to start preparing the data to be sent
to the cloud by means of connecting to a server inside vue. 

This project in particular is modeled after a Gameshow with 3 different roles with different screens as
a board needs to be displayed for users to see, a host manages the game, the players and also an editor to do new questions and/or themes.

# Download/Install
---------------------------------------

Browse to demo link and download the zip from the CloudComputing branch or download it from:

[Download Zip](https://github.com/Zamora-Gabriel/QuizVue/archive/refs/heads/CloudComputingA2.zip)

- Once downloaded Uncompress the zip to a folder

- Open the folder in Visual Studio Code

- Once in VSCode open the vue ui by typing on the terminal "npx vue ui" and on google chrome or microsoft edge access to the link below
(http://localhost:8000/)

- Run the client by getting inside the Task tab on the vue ui

- Open google chrome or microsoft edge and access to the next URL in parenthesis: 
(http://localhost:4000)

- Select the host option to get to the host screen and start game

- Open 6 additional tabs of the same link (for the players)

- On those six tabs log 6 players

- Open another additional tab and set it on the Board screen

- Finally open one last tab and set to the editor

- The demo should be showing on the screen

# *** How to use ***
---------------------------------------

- After the download/install steps, the demo should be shown on the given localhost (Port 4000).

- The page has four navigation tabs that conform the game being Host, Player, Board, and Editor

Host Page:

- On the host page it is firstly shown the login, where the host can pick a game (or theme)

- Click on the refresh themes button in order to fetch all game themes on the cloud

- Select a theme and click the start session button to advance to the next sub-screen

- Once a session is started, the host then gets to see which players have logged in on the session screen.

- From the player screen (On a second browser tab) Type a nick and join game (do this 6 times for getting all the players)

- By clicking on the refresh player list button, all the players will be reset on the cloud, use for a new game

- Once all the players have logged in, their nicknames will be shown on the session screen for the host, then click start game if there is at least one missing
player, clicking that button should prompt an alert telling that not all the players have logged in.

- The host can start the game whenever all player spots have been assigned by pressing the start game button.

- After the host clicks the button to start the game, a new sub-screen will show up being the question select screen

- The question select screen is an interactive copy of the board with the difference being that the host can click on one of the buttons to 
travel to the player answers screen.

- Clicking a different button shall show a different category and question also depending of the value of the button.

- Once a button was pressed, a flag activates letting the player and board vues to change to the answering and question showing screens respectively.

- On the player answers screen, the host gets to see the question that popped up from the button, and also the answers given by the players

- The host can mark as correct or not the answers of the players adding or substracting points with the correct or incorrect buttons

- Once the host is done with marking the players responses, he can click on the return button to return to the question selector screen

- Returning to the question selector screen deactivates the flag that lets player and board vues to advance, so the player vue returns to the waiting screen while
the board vue goes to the board display.

Player Page:

- On the player page, the user must write a nickname to be identified. The user cannot leave the field in blank, nor type only a space since an alert will pop up
asking for a nickname.

- This nickname will be shown on the host session screen once submitted

- After typing, the user can click on the submit button. An alert showing the nickname typed will pop up and after closing it, the next sub-screen will appear
being the stand by screen.

- On the stand by screen the player gets to see their nickname and the score that the player has.

- If in the host screen a question was clicked, the player will be directed to the answer screen, else, it will stay on the score screen.

- The answer screen shows the question and an empty field waiting to hold an answer for the question.

- After typing the answer the user can sbumit it by clicking on the button.

- When the host presses the return button from his or her answer check screen, the player will check for a flag on the firestore to return 
to the score screen

Board Page:

- The board page is just a screen to be shown to the players with the categories and the different questions hidden by a mark of the actual points to be awarded.

- Once the bind button has been clicked, the board will respond to the host changes between selecting a question and the answer screen.

- After the host selects a question, the board page will refresh to show the question showing screen which has the question the host popped up
 and a message to the players in order to let them know they must answer on their screens.

- After the host clicks the return button on their end, the board screen will check the flag that the host rises after ending
the answer turn.

Editor Page:

- From the editor page, the editor can add a new set of questions with anew theme.

- First, a theme should be typed on the theme field if not and the user tries to submit, an alert will show up asking for a name of the theme

- Then the questions must be clicked one by one and written on the pop up field as well as clicking the save button to save the question

- Once all 15 questions are saved and the theme has been written, the new game can be submitted to the cloud.

- From the host screen, the host should be able to see the new theme and playing the new questions will be shown as well per theme selected.
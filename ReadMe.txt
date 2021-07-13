---------------------------------------
<Gabriel Zamora>
<12/07/2021>

The project is a playable Game show with multiple roles being the most important for playability the Host and the Player.
The Gameshow requires having also screens for the board to be shown to all the participants as the available questions are shown with some
score value forplayers to decide which one to answer.

The goal of this assignment is to apply the knowledge acquired in classes about the Server in VUE, and Axios.

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

[Download Zip](https://github.com/Zamora-Gabriel/QuizVue/archive/refs/heads/CloudComputing.zip)

- Once downloaded Uncompress the zip to a folder

- Open the folder in Visual Studio Code

- Once in VSCode open the vue ui by typing on the terminal "npx vue ui" and from tasks select the server option then run task

- Once the server is fired up, select the client option then run task

- Open google chrome or microsoft edge and access to the next URL in parenthesis: 
(http://localhost:4000)

- Select the host option to get to the host screen and start game

- Open two additional tabs of the same link 

- One of the additional tabs should be on the Player screen

- The second additional tab should be set on the Board screen

- The demo should be showing on the screen

# *** How to use ***
---------------------------------------

- After the download/install steps, the demo should be shown on the given localhost (Port 4000).

- The page has four navigation tabs that conform the game being Host, Player, Board, and Editor

- For this assignment the screens used were the Host, player and board

Host Page:

- On the host page it is firstly shown the login, where the host can pick a game (or theme) and start a session advancing to the next sub-screen

- Once a session is started, the host then gets to see which players have logged in on the session screen.

- The first name for the player should be empty if no player has tried to login

- From the player screen (On a second browser tab) Type a nick and join game

- Return to the host screen and refresh the player list, the typed nickname with a "Server" addition will be shown on the Player 1 space

- The host can start the game whenever all player spots have been assigned by pressing the start game button.

- Click on the refresh button again if the start game button shows he message that not all players have been assigned.

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

- On the stand by screen the player gets to see their nickname, the score (not yet implemented on server side), and a refresh button

- If in the host screen a question was clicked, the player can click the refresh button which will lead to the answer screen, else, it will stay on the score screen

- The answer screen shows the question and an empty field waiting to hold an answer for the question.

- After typing the answer the user can sbumit it by clicking on the button.

- When the host presses the return button from his or her answer check screen, the player must click the refresh button as it will check for a flag on the server to return 
to the score screen

Board Page:

- The board page is just a screen to be shown to the players with the categories and the different questions hidden by a mark of the actual points to be awarded.

- After the host selects a question, the board page will need to click the refresh button to show the question showing screen which has the question the host popped up
 and a message to the players in order to let them know they must answer on their screens.

- After the host clicks the return button on their end, the refresh question flag button will need to be pressed in order to check the flag that the host raises after ending
the answer turn.
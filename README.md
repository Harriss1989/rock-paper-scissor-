# Rock, Paper, Scissors Game
## Introduction 
The classic game we all played as children, rock, paper, scissor settled any argument. Play this classic game against the computer and see if you have got what it takes to win. This game is for anyone looking for a quick 10 minutes of fun, or to keep your kids entertained whilst you do the washing up.

![responsive](./assets/images/responsive.png)

[Link to live site](https://harriss1989.github.io/rock-paper-scissor-game/)

## User Experience (UX)
* User stories
* Visitor Goals
    * When visiting this site, I want to be able to navigate easily from the main title, to the main game and back again.

    * When visiting this site, I want to be able to easily find out about the games, and have diffrent levels of difficalty.

    * When visiting this site, I would like to find information about the game I am playing e.g game rules. 

# Structure
The game site consists of one main page. The player has the option to change the arena background, and also select the number of rounds you can play, there is a minimum of 3 rounds and a maximum of 15 rounds, giving the player added dificulty.
# Design
The game site design has been kept simple, there is one page that houses all of the game functonality in a simple and easy to use menu. There are three buttons on the main screen labeled so that the user knows what each button does. I added functions to each of the buttons to bring up the relevent content by useing modals, the first button brings up a modal for new game, where the user can enter and submit their name, this will be visable in the game screen, if the user fails to enter their name they will automatically be 'player'. If the player clicks into the input box they can then use the enter key to submit the form. There is also a game rules button that brings up the modal to explain the game. There is also a modal that pops up to notify whether you have won or lost. Lastly there is a settings button that brings up the arena choices giving the user the option to change the background of the game, and a round slider to pick how many rounds until the game is over for added difficulty. Each modal has an "x" button in the top corner to click out of the modal, you can also click outside of the modal to close it. When the modals are open, the background has a darker contrast for better visabillity. Whilst the player is playing the main game, there is a button at the bottom of the page to go back to the main menu should they want to quit the round.

## Google Fonts:
Google fonts were used to import the "Supermercado One" font into the style.css file, which is used throughout the Game and gradient back up of sans-serif. 

# Colour Scheme
### Background svg used
I used svg for background images in the hope to add movment to the game, to give the page an added element of fun. This task was a lot harder than I expected at the moment but I plan to revisit this at a later date once my skills have improved. I also came into trouble with the SVG images when I was completing my media queries, so I decided to change them to URL background images as it was becoming too time consuming.
![image Svg spaceship window used](/assets/images/spaceshipwindow.svg)
![image Svg beach used](/assets/images/summerbeach.svg)
![image Svg bascket ball court used](/assets/images/basketball.svg)
### Colors used for elements in site
![image of color gradient for elements in site](/assets/images/contrast.png)

## Balsamiq:
Balsamiq was used to create the wireframes during the design process. I kept to the design throughout the project keeping it simple for beter user experience.

Main Page Wireframe - [View](/assets/wireframes/mainpage.png)

Mobile Wireframe - [View](/assets/wireframes/mobile-main-screen.png)

Settings page Wireframe - [View](/assets/wireframes/settings.png)

Rules page Wireframe - [View](/assets/wireframes/rules.png)

Main game Wireframe - [View](/assets/wireframes/main-game.png)

Winner screen Wireframe - [view](/assets/wireframes/winner-screen.png)

Name entry Wireframe - [view](/assets/wireframes/name-entry.png)
## Features

Heading 
* The main page consists of a main heading simply letting the user know what game they are about to play all the font throught are the same "Supermercado One". I chose this as it felt to me to be retro game font. 

![image of game title used](/assets/images/gametitle.png)

Navigation
* The game has many simple navigational features, there are three buttons on the main page; New game, Rules and settings. Each button takes the player to its intended modal or game as explained previously, a hover element is applied on all of the buttons that help the player visually see which button they are selecting. The settings, game rules and the winner/loser message has a close model function when the player either clicks ouside of the modal or on the x in the top right corner there is also a main menu button on the main game screen to take the player back to reset the game for another try at beating the computer.

![image of main buttons](/assets/images/mainbutton-nohover.png)

![image of main buttons with hover](/assets/images/mainbutton-withhover.png)

![image of x button](/assets/images/backbutton.png)

![image of main menu button](/assets/images/mainmenubtn.png)

player name input modal
* The player can input there name in to an input box and have there name displayed in the game. I have limited the number of letters a palyer can input so it does not interfere with the stylings of the game. The player after inputting there name can use the enter key i added this for better fuctionallity.

![image of input name field](/assets/images/playernameinput.png)

Game rules modal
* The main page has a game rules button that brings up information about the rules of the game. Clicking outside this modal or on the 'x' in the top right of the screen will take the player back to the main menu.

![image of rules modal](/assets/images/rulesmodal.png)

Settings modal
* The settings modal has the option for the player to choose the backgroud for which the game is played there is the default option of a beach, the other arenas to choose from are a basketball court or a space ship. I added this feature to give the player a variety of excitment whilst playing the game. There is also an option to select the number of rounds to win. Each arena choice changes the modal color scheme to better match the bacground.

![image of settings modal](/assets/images/arenapick.png)

![image of basket ball color theme](/assets/images/mainmenucolorchange.png)

![image of space color theme](/assets/images/mainmenuspacetheme.png)

The main game
* Once the player has choosen their arena, selected the number of rounds and entered their name, the main game will start by pushing the start game button. The player chooses from one of the three hands by clicking on it with the mouse, the selected option will display in the player window, and the computers random choice will be displayed in the computer window. At the top of the screen the scores will be displayed and updated, at the bottom underneath the player selection it will give a message of who won or if it was a draw. After completing the set number of rounds, depending on the outcome a congratulations message will appear if the player wins, or a losing message will appear if the player loses. At any point of the game the player can go back to the main menu via the main menu button.

![image of main game](/assets/images/gamewithpicks.png)

![image of winner message](/assets/images/winnermessage.png)

![image of loser message](/assets/images/losermessage.png)
## Technologies Used

* HTML5
* CSS3
* JavaScript

Photos source

 * https://www.vecteezy.com/
 * https://icons8.com/
 
 To save on file space I ran all photos through https://tinypng.com/
 

## Git
Git was used for version control by utilizing the Gitpod terminal, to commit to Git and Push to GitHub.
## GitHub:
GitHub is used to store the projects code after being pushed from Git.

## Testing
The W3C Markup Validator and W3C CSS Validator Services were used to validate every page of the project to ensure there were no syntax errors in the project.

### Google Chrome Lighthouse Report

![light house report desktop](/assets/images/lighthouse.png)


### Validator Reports
* W3C Markup Validatorindex.html - [Results](https://validator.w3.org/nu/?doc=https%3A%2F%2Fharriss1989.github.io%2Frock-paper-scissor-game%2F)

* W3C Markup Validatorindex.html added html from script.js - [Results](https://validator.w3.org/nu/#textarea)

* W3C CSS Validator - (https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fharriss1989.github.io%2Frock-paper-scissor-game%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)

* JavaScript 
No errors were present when passing through the validator service at JSHint.com 
[Results](/assets/images/JSHint.png)
### Accessibility Report

* Wave Report - [Results](https://wave.webaim.org/report#/https://harriss1989.github.io/rock-paper-scissor-game/)

# Browsers Tested
* Safari
* Google Chrome
* Microsoft Edge
* Firefox

# Devices Tested
* iPhone Xr 
    * Safari - iOS 14.8.1 
    * Chrome - version 95.0.4638.50
* iPad 7th generation 
    * Safari - iOS 14.8.1
* iPhone 11 
    * Safari - iOS 15.1
* iPhone 11 pro max
    * Safari - iOS 15.1
* Apple MacBook Air 13"
    * Chrome - Version 96.0.4664.55
    * Safari - Version 15.1 (17612.2.9.1.20)
    * Firefox -Version 94.0.2
* Hp Laptop
    * Microsoft Edge - version 96.0.1054.34 

From these test above I ensured all the links and buttons worked correctly. I used the devices listed above to test the deployed site. I also used the devtools emulator to test the site at various sizes. 

# Deployment
* The site was deployed to Github pages.the step to deploy are as follows:
  * In the GitHub pages, navigate to the settings tab
  * select the pages link from the setting menu on the left hand side 
  * Under the GitHub pages from the source section drop-down menu, select the master branch
  * Once the master branch has been selected,the page will be automatically refreshed
  with a detailed ribbon display to indecate the successful deployment.

 [Link to live site](https://harriss1989.github.io/History-of-SuperMario/)
 
# Credits
Media source
 * https://www.vecteezy.com/
 * https://www.istockphoto.com/
 * https://www.pinterest.co.uk/

 The Favicon, links and meta code were generated by [Realfavicongenerator.net](https://realfavicongenerator.net)

 Content
 * I referenced mario.fandome to fact check the information. [mario.fandom.com](https://mario.fandom.com/wiki/MarioWiki)
 * I referred to w3schools to check HTML and CSS syntax.
 * I referred to CSS-Tricks to help me understand flexbox in more detail.

 ### Acknowledgments

 * A massive thank you to Shellie Downie for giving me the pep talk of my life, and for her constant reassurance when I was suffering with imposter syndrome. And for all the links she thought would help me understand more

 * Massive thank you to Matt Boddden who spent a lot of time helping me with positioning my form page correctly and for being a great support when I needed help. (You legend)
 
 * The brilliant Slack community wish I used you sooner.



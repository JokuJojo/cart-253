/**
 * Frog Mates
 * Jorane Milot
 * 
 * A game about getting fat enough for your crush.
 * 
 * Instructions:
 * - click on play
 * - Flip throught cutscenes by clicking on next
 * - Move the frog with your mouse
 * - Click to launch the tongue
 * - Catch flies to get fat
 * 
 * Made with p5
 * https://p5js.org/
 */

"use strict";

// Our frog
const frog = {
    // The frog's body has a position and size
    body: {
        x: 320,
        y: 520,
        size: 175
    },
    // The frog's tongue has a position, size, speed, and state
    tongue: {
        x: undefined,
        y: 480,
        size: 20,
        speed: 20,
        // Determines how the tongue moves each frame
        state: "idle" // State can be: idle, outbound, inbound
    },
    //Eyes Left
    eyeL: {
        x: 480, 
        y: 480,
        size: 55
    },
    pupilL: {
        x: 480,
        y: 468,
        size: 25
    },
    //Eyes Right
    eyeR: {
        x: 480,
        y: 480,
        size: 55
    },
    pupilR: {
        x: 480,
        y: 468,
        size: 25
    }
};

// Our fly
// Has a position, size, and speed of horizontal movement
const fly = {
    x: 0,
    y: 200, // Will be random
    yStart: 0,
    size: 40,
    speed: 7
};

// variables where the sound effects are loaded into
let frogNightSounds;
let goodEndingMusic;
let badEndingMusic;
let gameplayMusic;

// variables to control the timer
let timeDuration = 30;
let timeStart;

// Opening state
let state = "Menu screen"; 

// vairables to store loaded frog assets for cutscenes
// on menu
let smallFrogImg;
// on cutscene 1
let interestedSmallFrogImg;
// on cutscene 2
let singingBigFrogImg;
let shySmallFrogImg;
// on cutscene 3
let yikesBigFrogImg;
let sadSmallFrogImg;
// on cutscene 4
let bigFrogImg;
let confidentSmallFrogImg;
let flySwirlImg;
// on good ending
let fatSmallFrogImg;
let loveBigFrogImg;
// on bad ending
let deadBigFrogImg

// variables to store the fly image and track the # of eaten flies
let flyImg;
let fliesEaten = 0;


// strings to load the cutscene poems
let lineOne = "In the night, \n the moon shines bright. \n \n   A singing bop, \n      makes you hop." ;
let musicNotes = "♩ ♪ ♫ \n    ♪ ♩ ♫"
let lineTwo = "And there she is, \n attracting with rizz. \n \n   Waiting for a mate, \n     to catch her bait.";
let lineThree = "But once you do, \n  she takes one good look at you, \n    and gives a review.\n \n    ˝Nah, I like em big, \n      come back when you're not shaped like a twig.‶ "
let lineFour = "And just like that, \n your heart falls flat. \n \n   But you refuse your size, \n    so you decide to eat flies."
let goodEndingLine = "She liked what she sees, \n  you did succeed. \n \n   In an eternity of bliss, \n     the story ends with a kiss. ♡ "
let badEndingLine = "Unfortunately, \n  she found you too scrawny. \n \n  She pretends to be dead, \n    hoping you would've fled."

/*
* Preloads all assets and sound effects
*/
function preload() {
    // loading the sound effects
    frogNightSounds = loadSound('assets/sounds/night-outdoor-ambience-frog-croak-57267.mp3');
    goodEndingMusic = loadSound('assets/sounds/violin-music-64019.mp3');
    badEndingMusic = loadSound('assets/sounds/wah-wah-sad-trombone-6347.mp3');
    gameplayMusic = loadSound('assets/sounds/8bit-music-for-game-68698.mp3');
    
    // loading the assets for the frogs
    smallFrogImg = loadImage('assets/images/Petite grenouille.png');
    interestedSmallFrogImg = loadImage('assets/images/Petite grenouille interested.png');
    singingBigFrogImg = loadImage('assets/images/Grosse grenouille Singing.png');
    shySmallFrogImg = loadImage('assets/images/Petite grenouille Shy.png');
    yikesBigFrogImg = loadImage('assets/images/Grosse grenouille Yikes.png');
    sadSmallFrogImg = loadImage('assets/images/Petite grenouille Sad.png');
    bigFrogImg = loadImage('assets/images/Grosse grenouille.png');
    confidentSmallFrogImg = loadImage('assets/images/Petite grenouille Confident.png');
    fatSmallFrogImg = loadImage('assets/images/Fat Petite Grenouille.png')
    loveBigFrogImg = loadImage('assets/images/Love Grosse Grenouille.png')
    deadBigFrogImg = loadImage('assets/images/Dead Grosse Grenouille.png')
    
    // loading the fly assets
    flySwirlImg = loadImage('assets/images/Fly Swirl.png')
    flyImg = loadImage('assets/images/Fly.png')
}

/**
 * Creates the canvas and initializes the fly.
*/
function setup() {
    createCanvas(640, 480);
    resetFly();
}

/*
* Draws the respective scene to the screen depending on the game state.
*/
function draw() {
    // State Function order
    if (state === "Menu screen") {
        showMenuScreen();
    }
    else if (state === "Part 1") {
        cutsceneOne();
    }
    else if (state === "Part 2") {
        cutsceneTwo();
    }
    else if (state === "Part 3") {
        cutsceneThree();
    }
    else if (state === "Part 4") {
        cutsceneFour();
    }
    else if (state === "Gameplay") {
        drawGameplay();
    }
    // the two possible endings:
    // if over 20 flies are eaten then good ending (She accepts your love)
    else if (state === "Good Ending") { //or
        goodEnding();
    }
    // if under 20 flies eaten then bad ending (She rejects you, pretend to play dead)
    else if (state === "Bad Ending") {
        badEnding();
    }
}

/*
* Introduces the game through the menu screen.
*/
function showMenuScreen() {
    background("#87ceeb");
    image(smallFrogImg, 10, 100, 330, 390,);
    
    // Game Title 
    textSize(70);
    fill(34, 177, 76);
    text("Frog ♡ \n ♡ Mates", 300, 100,);

    // Play Button 
    textSize(55);
    text("Play", 430, 370);
   
    if (mouseIsPressed && mouseX > 430 && mouseX < 540
        && mouseY > 320 && mouseY < 370) {
        state = "Part 1";
        mouseIsPressed = false;
        // night sound starts
        frogNightSounds.play();
      }
}


// Part 1: Introduces our Small frog
function cutsceneOne() {
   // Night
   background(9, 62, 126);
   image(interestedSmallFrogImg, 30, 150, 300, 330,);
   // moon
   noStroke();
   fill("Khaki");
   ellipse(80, 100, 100)
   // Rhyme text 
   fill(34, 177, 76)
   textSize(30);
   text(lineOne, 300, 60,);
   // Music Notes (the bop in question)
   textSize(60);
   fill(181, 230, 29);
   text(musicNotes,380, 300,);
   // "Next" Button
   fill(34, 177, 76);
   textSize(30);
   text("Next", 565, 460);

   if (mouseIsPressed && mouseX > 565 && mouseX < 630
    && mouseY > 430 && mouseY < 460) {
        state = "Part 2";
        mouseIsPressed = false;
    }
}

// Part two: Small frog meets Big frog and falls in love
function cutsceneTwo() {
   // Night
   background(9, 62, 126);
   // Female frog (Also known as Big frog)
   image (shySmallFrogImg, 1, 250, 200, 230);
   image(singingBigFrogImg, 290, 250, 200, 230,);
   // Rhyme Intro 
   fill(34, 177, 76)
   textSize(30);
   text(lineTwo, 300, 60,);
   // Music Notes (the bop in question)
   textSize(60);
   fill(181, 230, 29);
   text(musicNotes, 80, 160);
   // "Next" button
   fill(34, 177, 76);
   textSize(30);
   text("Next", 565, 460);

   if (mouseIsPressed && mouseX > 565 && mouseX < 630
        && mouseY > 430 && mouseY < 460) {
        state = "Part 3";
        mouseIsPressed = false;
    }
}

// Part 3: Big frog rejects Small frog for being to small :(
function cutsceneThree() {
    // Night
    background(9, 62, 126);
    // Rejected and rejecting frogs
    image (sadSmallFrogImg, 100, 250, 200, 230);
    image(yikesBigFrogImg, 290, 250, 200, 230,);
    // Rhyme Intro
    fill(34, 177, 76)
    textSize(26);
    text(lineThree, 30, 60);
    // "Next" button
    fill(34, 177, 76);
    textSize(30);
    text("Next", 565, 460);

   if (mouseIsPressed && mouseX > 565 && mouseX < 630
        && mouseY > 430 && mouseY < 460) {
        
        state = "Part 4";
        mouseIsPressed = false;
    }
}

// Part : Small frog refuses to give up! He will eat flies to get big!
function cutsceneFour() {
   // Night
   background(9, 62, 126);
   // Small frog gains confidence to keep trying
   image (confidentSmallFrogImg, 100, 250, 200, 230);
   image(bigFrogImg, 290, 250, 200, 230,);
   image(flySwirlImg, 470, 1, 200, 200);
   // Rhyme Intro 
   fill(34, 177, 76)
   textSize(30);
   text(lineFour, 30, 60);
   // "Start" gameplay button
   fill(34, 177, 76);
   textSize(30);
   text("Start", 565, 460);
   
     if (mouseIsPressed && mouseX > 565 && mouseX < 630
        && mouseY > 430 && mouseY < 460) {
        state = "Gameplay";
        gameplayMusic.play();
        mouseIsPressed = false;
        // Stop sound
        frogNightSounds.stop();
        // Start timer
        timeStart = millis();
     }
}

// Game actually becomes playable, where Small frog eats the flies.
function drawGameplay() {
    background("#87ceeb");
    moveFly();
    drawFly();
    moveFrog();
    moveTongue();
    drawFrog();
    checkTongueFlyOverlap(); 
    // 30 second Timer
    drawTimer();
}

// Appearance and functionality of timer, on the top left during the gameplay
function drawTimer() {
    let timeElapsed = millis() - timeStart;
    timeElapsed = int(timeElapsed / 1000);
    let timeLeft = timeDuration - timeElapsed;
    
    // What happens when timer runs out
    if (timeLeft < 0) {
        textSize(65);
        textFont("Brush Script MT");
        fill("Hotpink");
        text("It's Sexy Time!", width / 4 - 20, height / 2);
        
        //  the two ending scenes
        // If over 20 flies are eaten, success:
        if (mouseIsPressed && fliesEaten >= 20) { 
            state = "Good Ending";
            gameplayMusic.stop();
            goodEndingMusic.play();
        }
        // and if under 20 flies collected, lost:
        else if (mouseIsPressed && fliesEaten < 20) { 
            state = "Bad Ending";
            gameplayMusic.stop();
            badEndingMusic.play();
        }
     }  
     // Timer couting down
      else {
        textSize(30);
        fill("white");
        text(timeLeft, 5, 30);
    }

}
// Good ending, you got fat enough and now you are in love!
function goodEnding() {
    //Lovely pink background for love!
    background(255, 149, 153);
    //Frogs in love
    image (fatSmallFrogImg, 100, 250, 200, 230);
    image(loveBigFrogImg, 290, 250, 200, 230,);
    //Finishing victory line
    fill("pink");
    textSize(35);
    text(goodEndingLine, 30, 50)
}
// Bad ending, yoe're not to her liking and she rejects you (by pretending to be dead)
function badEnding() {
    // Blue for sadness
    background(59, 100, 155);
    // Big frog faking death and Small frog very sad
    image (sadSmallFrogImg, 100, 250, 200, 230);
    image(deadBigFrogImg, 290, 250, 200, 230,);
    // Finishing losing line
    textFont("ariel");
    fill("white");
    textSize(35);
    text(badEndingLine, 30, 50);
}
/**
 * Moves the fly according to its speed
 * Resets the fly if it gets all the way to the right
 */
function moveFly() { 
    // Moves the fly
    fly.x += fly.speed;
    fly.y = fly.yStart + 30 * sin(0.016*fly.x);
    // Handle the fly going off the canvas
    if (fly.x > width) {
        resetFly();
    }
}

/**
 * New fly image on top 
 */
function drawFly() {
    push();
    image(flyImg, fly.x - 40 / 2, fly.y - 35 / 2, 40, 35);
    pop();
}

/**
 * Resets the fly to the left with a random y
 */
function resetFly() {
    fly.x = 0;
    fly.yStart = random(0, 300);
    fly.y = fly.yStart;
}

/**
 * Moves the frog to the mouse position on x
 * Also the eyes following the movement
 */
function moveFrog() {
    frog.body.x = mouseX;
    frog.eyeL.x = mouseX -60;
    frog.pupilL.x = mouseX -60;
    frog.eyeR.x = mouseX +60;
    frog.pupilR.x = mouseX +60;
}


/**
 * Handles moving the tongue based on its state
 */
function moveTongue() {
    // Tongue matches the frog's x
    frog.tongue.x = frog.body.x;
    // If the tongue is idle, it doesn't do anything
    if (frog.tongue.state === "idle") {
        // Do nothing
    }
    // If the tongue is outbound, it moves up
    else if (frog.tongue.state === "outbound") {
        frog.tongue.y += -frog.tongue.speed;
        // The tongue bounces back if it hits the top
        if (frog.tongue.y <= 0) {
            frog.tongue.state = "inbound";
        }
    }
    // If the tongue is inbound, it moves down
    else if (frog.tongue.state === "inbound") {
        frog.tongue.y += frog.tongue.speed;
        // The tongue stops if it hits the bottom
        if (frog.tongue.y >= height) {
            frog.tongue.state = "idle";
        }
    }
}

/**
 * Displays the tongue (tip and line connection) and the frog (body)
 */
function drawFrog() {
    // Draw the tongue tip
    push();
    fill("#ff0000");
    noStroke();
    ellipse(frog.tongue.x, frog.tongue.y, frog.tongue.size);
    pop();

    // Draw the rest of the tongue
    push();
    stroke("pink");
    strokeWeight(frog.tongue.size);
    line(frog.tongue.x, frog.tongue.y, frog.body.x, frog.body.y);
    pop();

    // Draw the frog's body
    push();
    fill(181, 230, 29); //Frog color
    noStroke();
    ellipse(frog.body.x, frog.body.y, frog.body.size);
    pop();

    // Draw the frog's left eye
    push();
    fill ("white");
    stroke(181, 230, 29);
    strokeWeight (6);
    ellipse(frog.eyeL.x, frog.eyeL.y, frog.eyeL.size);
    pop();

    // Draw the frog's left pupil
    push();
    fill ("black");
    noStroke ();
    ellipse(frog.pupilL.x, frog.pupilL.y, frog.pupilL.size);
    pop();
    
     // Draw the frog's right eye
    push();
    fill ("white");
    stroke(181, 230, 29);
    strokeWeight (6);
    ellipse(frog.eyeR.x, frog.eyeR.y, frog.eyeR.size);
     pop();
    
     // Draw the frog's right pupil
    push();
    fill ("black");
    noStroke ();
    ellipse(frog.pupilR.x, frog.pupilR.y, frog.pupilR.size);
    pop();
}

/**
 * Handles the tongue overlapping the fly
 */
function checkTongueFlyOverlap() {
    // Get distance from tongue to fly
    const d = dist(frog.tongue.x, frog.tongue.y, fly.x, fly.y);
    // Check if it's an overlap
    const eaten = (d < frog.tongue.size/2 + fly.size/2);
    if (eaten) {
        fliesEaten = fliesEaten + 1;
        // Reset the fly
        resetFly();
        // Makes the frog gain weight after every fly eaten
        frog.body.size = frog.body.size +5;
        // Brings back the tongue
        frog.tongue.state = "inbound";
    }
}


/**
 * Launch the tongue on click (if it's not launched yet)
 */
function mousePressed() {
    if (frog.tongue.state === "idle") {
        frog.tongue.state = "outbound";
    }
}
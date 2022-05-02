var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

//--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+
//--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+-|| FUNCTION: BLAST OFF TIMER ||+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+
//--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+

function blastOffTimer(){
    console.log("blastOffTimer() started");
    document.getElementById("countdown").play();                                                        // Start the countdown audio clip, it's synced with the entire countdown loop.
    var currTime = 50;
    document.getElementById("blastOffText").innerHTML = currTime;
    console.log("50");
    currTime = currTime - 5;

    let myTimer = setInterval(blastOffCountdown, 5000);

    function blastOffCountdown(){
        console.log(currTime);
        document.getElementById("startCountdown").style.background = "orange";
        setTimeout(() => {document.getElementById("startCountdown").style.background = "#ccc";}, 500);
        if (currTime > 25){document.getElementById("blastOffText").innerHTML = currTime;                // Explanation for both this line and line below here -- I wrapped the first 25 seconds in an if statement and then the other in an else if so that it can't go off without the other not activating, I used '<' '>' symbols to check the current status of the countdown and prepend a text warning once the countdown reaches 25 seconds remaining.
        } else if (currTime < 30){document.getElementById("blastOffText").innerHTML = "Warning less than 1/2 way to launch, time left = " + currTime;}
        currTime = currTime - 5;
        if (currTime == -5){
            startBurn();
            document.getElementById("blastOffText").innerHTML = "Blastoff!";
            document.getElementById("blastOffPic").style.display="block";
            console.log("Blast off!")
            clearInterval(myTimer)
        }                    
    }
}

//--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+
//--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+-|| FUNCTION: PLAY CRAPS ||--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+
//--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+

// Setting variables
var numWin = 0;                                                                                         // |\
var numLoss = 0;                                                                                        // | \
var numTie = 0;                                                                                         // |  Setting Variables.
var rig = 0;                                                                                            // | /
var numWinHid = 0;                                                                                      // |/
                                                                                                        //-----------------------------------------------------------------------------------------------------------------
function playCraps(){                                                                                   // Defining the function that's associated with the button on the .html file.
    if(numLoss >= 30){                                                                                  // If numLoss >= 30 then execute this codeblock.
        document.getElementById("crapsRes").innerHTML = "You're not a very good gambler... Take a break"; // A message for those gamblers who just can't help but accrue debt!
        document.getElementById("gambleButton").disabled = true;                                        // Actually disable the button the play to prevent any temptation!
        console.log("Sorry! Better luck next time, take a break :)")                                    // A message in console wishing the gambler luck in their next attempt a later day.
    } else if(numWinHid >= 8) {                                                                         // If numWin >= 8 then rig the game so the user can no longer win (User will eventually hit loss limit if they haven't by now)
        rig += 1                                                                                        // The actual rigging. It's done by simply setting a variable to detect if rigging is required.
        numWinHid -= 1                                                                                  // This variable exists so I can track the wins with a method other than numWin variable which is used to update elements.
    } else {                                                                                            // If the gambler hasn't lost 30 times, go ahead and play craps!
    console.log("Craps game started");                                                                  // Simple console output.
    var die1 = Math.ceil(6 * Math.random());                                                            // Determine a random number between 1-6 for the first die.
    var die2 = Math.ceil(6 * Math.random());                                                            // Determine a random number between 1-6 for the second die.
    var sum = die1 + die2;                                                                              // Adding up the sum of the two die that will later be compared to determine a loss.
    document.getElementById("die1Res").innerHTML = die1;                                                // Updating the results of the first die to display on the webpage
    document.getElementById("die2Res").innerHTML = die2;                                                // Updating the results of the second die to display on the webpage
    document.getElementById("sumRes").innerHTML = sum;                                                  // Updating the results of the sum of both die to display on the webpage
                                                                                                        //-----------------------------------------------------------------------------------------------------------------
    console.log("The first die is: " + die1)                                                            // Output the value of the first die to the console
    console.log("The second die is: " + die2)                                                           // Output the value of the second die to the console
    console.log("The sum is: " + sum)                                                                   // Output the value of the sum to the console
                                                                                                        //-----------------------------------------------------------------------------------------------------------------
    if(sum == 7|| sum == 11){                                                                           // An if statement checking the variable 'sum' to see if it equals (==) 7 or (||) 11, which would mean you lost
        document.getElementById("crapsRes").innerHTML = "Craps, you lose.";                             // If the if statement is true, set the element "crapsRes" to say "Craps, you lose." on the web page
        numLoss += 1;                                                                                   // Add one (+= 1) to the variable that tracks losses.
        console.log("%cCraps, you lose.", "color:red; font-size: 50; -webkit-text-stroke: 1px black")   // Some cheeky formatting for a fancy 'You lost' message in the console.
    } else if(die1 == die2 && die1 % 2 == 0 && rig == 0){                                               // Another if statement, using elseif to keep the process linear, meaning it can't become true without the previous statement being false. Only statements that the sum != 7 || 11 reach this point
        document.getElementById("crapsRes").innerHTML = "You win!";                                     // If the elseif statement is true, set the element "crapsRes" to say "You win!" on the web page
        numWin += 1;                                                                                    // Add one (+= 1) to the variable that tracks wins.
        numWinHid += 1;                                                                                 // The secondary variable to track wins, once this hits the 'rig' limit, it will increment down by one then never be able to win again.
        console.log("%cY%cO%cU %cW%cI%cN!", "color:red", "color:orange", "color:yellow", "color:green", "color:blue", "color:purple")   // Some cheeky formatting for a fancy 'You win!' message in the console.
    } else if(die1 == die2 && die1 % 2 == 0 && rig == 1){                                               // If you win and the rig setting is enabled, use this statement
        var die1 = Math.ceil(3 * Math.random());                                                        // Reroll the first die, this time only between 1-3
        var die2 = Math.ceil(3 * Math.random() + 3);                                                    // Reroll the second die, this time only between 3-6
        var sum = die1 + die2;                                                                          // Redetermine the sum of the die
        document.getElementById("die1Res").innerHTML = die1;                                            // Updating the results of the first die to display on the webpage
        document.getElementById("die2Res").innerHTML = die2;                                            // Updating the results of the second die to display on the webpage
        document.getElementById("sumRes").innerHTML = sum;                                              // Updating the results of the sum of both die to display on the webpage
    } else {                                                                                            // Just an else statement, not relying on any conditional comparisons, but instead being the default outcome if neither of the previous two if statements return true
        document.getElementById("crapsRes").innerHTML = "Tie, please try again.";                       // If neither of the previous if statements are true, set the eleement "crapsRes" to say "Tie, please try again." on the webpage
        numTie += 1;                                                                                    // Add one (+= 1) to the variable that tracks ties.
        console.log("Tie!")                                                                             // A boring 'Tie' console output for a lackluster result.
    }                                                                                                   //-----------------------------------------------------------------------------------------------------------------
    document.getElementById("wins").innerHTML = numWin                                                  // Update wins tracker on webpage.
    document.getElementById("losses").innerHTML = numLoss                                               // Update losses tracker on webpage.
    document.getElementById("ties").innerHTML = numTie                                                  // Update ties tracker on webpage.
    }
}

//--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+
//--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+-|| FUNCTION: CLOCK ||-+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+
//--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+

window.onload = function clockLoop(){                                                                   // An onload event in order to load the clock function with the page
    let clockTimer = setInterval(clockDisplay, 1000);                                                   // Establishing the loop to allow for updates every second
                                                                                                        //
    function clockDisplay(){                                                                            // The function itself
        var clockTime = new Date();                                                                     // Establishing the base function
        var clockHours = clockTime.getHours();                                                          // Grabbing the hours from the machine
        var clockHoursUTC = clockTime.getUTCHours();                                                    // Grabbing UTC hours
        var clockMinutes = clockTime.getMinutes();                                                      // Grabbing minutes
        var clockSeconds = clockTime.getSeconds();                                                      // Grabbing seconds
                                                                                                        //
        clockMinutes = (clockMinutes < 10 ? "0" : "") + clockMinutes;                                   // Using a comparison w/ a ternary operator to add a "0" to the beginning of the minutes number if it's less than 10
        clockSeconds = (clockSeconds < 10 ? "0" : "") + clockSeconds;                                   // line 106 (below) formats the string in such a way that only one update is required to display the time
                                                                                                        //
        var clockTimeFull = "Local time: " + clockHours + ":" + clockMinutes + ":" + clockSeconds + "<br>" + "UTC time: " + clockHoursUTC + ":" + clockMinutes + ":" + clockSeconds;
        document.getElementById("clock").innerHTML = clockTimeFull;                                     // Updating the webpage

        if(!(clockSeconds % 5)){                                                                        // Despite updating every second, this posts UTC time to console only every 5 seconds by using a combination of the '!' not and '%' remainder operators
            console.log("UTC - " + clockHoursUTC + ":" + clockMinutes + ":" + clockSeconds)             // Sending the console message with formating.
        }
    }
}

//--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+
//--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+-|| FUNCTION: EVENT HANDLING ||-+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+
//--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+

var apoapsisMeters = "1.1";                                                                             //
var displayApo = "1";                                                                                   //
var burnLoop;                                                                                           //
                                                                                                        //
function startBurn(){                                                                                   // Function called in the 'onclick' event for the start button
    document.getElementById("startBurn").style.background = "darkred";                                  // A brief change of color to give the user feedback that the button was pressed
    document.getElementById("burnSeqInit").play();                                                      // Play audio saying the burn has started
    burnLoop = setInterval(burn, 100);                                                                  // Establishing loop
                                                                                                        //
    function burn(){                                                                                    //
        console.log("Apoapsis: " + apoapsisMeters);                                                     //
        document.getElementById("apoapsis").value = displayApo + "m";                                   // Updating the Apoapsis, appending meters on end of variable
        apoapsisMeters = apoapsisMeters * 1.0102312 + 0.7;                                              // A random bit of math I made to make rocket a little more realistic, slowly increasing its height expotentially
        displayApo = Math.round(apoapsisMeters);                                                         // Rounding the number to display -- It's important I separated the display value and the real value because of the small increments at first, the equation would break if rounding that early.
                                                                                                        //
        document.getElementById("startBurn").style.background = "orange";                               // Changing the color of the button to show that it's currently performing a burn.
                                                                                                        //
        if(13000 < displayApo && displayApo < 14000){document.getElementById("maxQ").play();}           // Start the "maxQ" audio clip once the rocket has reached 13km
        if(95000 < displayApo && displayApo < 96000){document.getElementById("apoKarman").play();}      // Start the "apoKarman" audio clip once the rocket apoapsis has reached 95km (it's climbing so fast at this point that the audio plays at 100km)
        if(150000 < displayApo && displayApo < 152000){                                                 // 
            document.getElementById("stageSeperation").play();                                          // Start the "stageSeperation" audio clip once the rocket apoapsis has reached 150km
            setTimeout(() => {burnLoop = setInterval(burn, 100);}, 9300);                               // Restart the loop after the second stage engine begins its burn (9.3s)
            setTimeout(() => {clearInterval(burnLoop);}, 4000);                                         // Stop the loop once the first stage seperates (4s)
        }                                                                                               //
                                                                                                        //
        if(apoapsisMeters > 35785000){                                                                  // Just a small check to stop the burn once the satellite's reached GSO and stop the loop
            document.getElementById("apoGSO").play();                                                   // Start the "apoGSO" audio clip once the rocket's apoapsis has reached Geostationary orbit
            clearInterval(burnLoop);                                                                    //
        }                                                                                               //
    }                                                                                                   //    
}                                                                                                       //
                                                                                                        //
function stopBurn(){                                                                                    // Function called in the 'onclick' event for the stop button
    clearInterval(burnLoop);                                                                            // Stopping the burn loop
    document.getElementById("startBurn").style.background = "#ccc";                                     // Resetting the color of the burn button to signify that it's no longer burning
}                                                                                                       //

//--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+
//--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+-|| FUNCTION: UPDATE TABLE ||+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+
//--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+

function startReading(){                                                                                // Function to start reading flight recorder telemetry.
    console.log("Starting to read data...");                                                            //
    document.getElementById("data").rows["Time"].innerHTML = "<td>Reading...</td><td></td>";            // Insert into the first row "Reading..." while still keeping the &nbsp in the second column.
    index = 0;                                                                                          // Setting index to 0 before iterating through the data
    timer = setInterval(updateDisplay, time_interval);                                                  // Running the updateDisplay function every 'time_interval' (5000ms as defined in the inline JS in the html)
}                                                                                                       //
function stopReading(){                                                                                 // Function to stop reading the flight recorder telemetry
    console.log("Starting to read data...");                                                            //
    clearInterval(timer);                                                                               //
}                                                                                                       //
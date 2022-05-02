var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

function bypass(){window.open("mainPage.html", "_self")}

//--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+
//--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+-|| FUNCTION: UPDATE NAME ||-+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+
//--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+
                                                                                                            //
var fullFirstName = ""                                                                                      //
var fullLastName = ""                                                                                       //
                                                                                                            //
function updateName(){                                                                                      //
    let fullFirstName = document.getElementById("firstName").value;                                         // Getting the input value after the user unfocuses the field (onchange value in HTML)
    let fullLastName = document.getElementById("lastName").value;                                           // ||
    document.getElementById("fullName").value = fullFirstName + " " + fullLastName;                         // Combinining First/Last name with a space between and updating the page to show it
    console.log(fullFirstName + " " + fullLastName);                                                        //
}                                                                                                           //
                                                                                                            //
//--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+
//--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+-|| FUNCTION: VALIDATION ||--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+
//--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+
                                                                                                            //
function validateLogin(){                                                                                   //
    let fullFirstName = document.getElementById("firstName").value;                                         // Same as previous function, gathering name data
    let fullLastName = document.getElementById("lastName").value;                                           //
    let fullName = fullFirstName + " " + fullLastName;                                                      // Combining First/Last name into one function
    console.log(fullName.length);                                                                           // 
                                                                                                            //
    let badge = document.getElementById("badgeNum").value;                                                  // Getting the value for the badge number !!THIS IS ALREADY CONFIRMED TO BE NUMERICAL BY CHANGING THE INPUT FIELD!!
    console.log(badge.length);                                                                              //
                                                                                                            //
    if(fullName.length > 20){                                                                               // Checking to make sure the full name is 20 characters or less
        alert("Full name must be less than 20 characters, current length is " + fullName.length);           // Returning an alert relating to the error
        return false;                                                                                       // Not progressing to the program due to the error
    } else if(badge.length > 3){                                                                            // Else if to ensure the badge is 3 digits or less
        alert("Badge number length is too long, ensure your badge number is between 0-999");                // Same process as the previous error
        return false;                                                                                       //
    }                                                                                                       //
}                                                                                                           // The page it goes to is a loading screen, just some flair, no real purpose.                                                                                                        //

//--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+
//--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+-|| FUNCTION: AUDIO ||-+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+
//--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+

function keyClack(file){
    var audio = document.createElement('audio');
    audio.src = file;
    document.body.appendChild(audio);
    audio.play();
        
    audio.onended = function () {
      this.parentNode.removeChild(this);
    }
}

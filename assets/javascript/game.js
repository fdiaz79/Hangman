$(document).ready(function() {
    //variable declaration

    var queenObject = {
        musicians : ["Freddie Mercury","John Deacon","Bryan May","Roger Taylor"],
        albums: 15,
        songs : ["killer queen", "it's a hard life", "you are my best friend", "love of my life", "the prophet's song", "hammer to fall", "is this the world we created", "the show must go on", "don't stop me now", "bicycle race"],
        pictures : [],
        ffArray : ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a placerat nunc, eget ultrices enim. Nam dapibus nulla a accumsan tempor. Integer eget imperdiet urna, ac hendrerit est. Cras a tempus erat. Curabitur in urna quis elit varius finibus a eget quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas", "Vestibulum est nunc, lobortis ut dolor nec, consequat pretium sem. Vivamus vel diam scelerisque magna dictum accumsan. Phasellus ut auctor lectus, et dignissim urna. Aliquam non urna tortor. Etiam vulputate scelerisque mollis.", "Ut tincidunt sem nisl, vitae vulputate ipsum pretium vel. Sed malesuada porttitor interdum. Cras sed justo faucibus, eleifend dui vitae, placerat nibh. Curabitur pharetra, erat nec semper luctus, tortor orci tincidunt lacus, et tincidunt est neque non ligula. Suspendisse in elementum diam, et sagittis erat.","Nullam ullamcorper mollis ante, ac luctus purus porta non. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras ornare tortor orci, nec semper metus mattis sed. Nulla consequat cursus massa eu sagittis. Vestibulum eu lacus sit amet velit convallis dictum finibus vitae velit."]
    };

    var hangArray = ["assets/images/hang0.jpg", "assets/images/hang1.jpg", "assets/images/hang2.jpg", "assets/images/hang3.jpg", "assets/images/hang4.jpg", "assets/images/hang5.jpg", "assets/images/hang6.jpg", "assets/images/hang7.jpg", "assets/images/hang8.jpg", "assets/images/hang9.jpg", "assets/images/hang10.jpg"];
    


    var chosenSong;
    var letterStorage = [];
    var displaySongString = "";
    var controlSpace = false;
    var hitCounter = 0;
    var spaceCounter = 0;
    var mistakes = 10;
    var mistakesCounter;
    
    var mainAreaJ = document.getElementById('mainArea');
    var instContainerJ = document.getElementById('instContainer');
    var funFactsJ = document.getElementById('funFacts');
    var drawingJ = document.getElementById('drawing');
    var startButtonJ = document.getElementById('start-button');

    // $("#drawing").add("<img src='assets/images/hang0.jpg'>");
    $("#drawing").attr("src", "assets/images/hang0.jpg");
    startButtonJ.disabled = false;

    $("#start-button").click(function() {
        initialize ();
        hangGame();
    });

    function initialize(){
        //var gameTrigger = 1;
        
        var songIndex;
        var chosenLetter;
        var chosenArray = [];
        var hit = false;
        hitCounter = 0;
        var control = 0;
        controlSpace = false;
        mistakes = 10;
        mistakesCounter = 0;
        spaceCounter = 0;
        var alreadyControl = false;

        var displaySongArray = [];
        displaySongString = "";
        letterStorage = [" "];

        // choose a random song from the array
        console.log(queenObject.songs.length);
        songIndex = Math.floor(Math.random()*queenObject.songs.length);
        console.log(songIndex);
        chosenSong = queenObject.songs[songIndex];
        console.log(chosenSong);

        //display the spaces of the song
    
        for (var i = 0; i < chosenSong.length; i++){
            
            if (chosenSong.charAt(i)==" "){
                displaySongString = displaySongString + " ";
            } else {
                displaySongString = displaySongString + "-";
            }
        }
        console.log(displaySongString);
        
        mainAreaJ.textContent = displaySongString;

        $("#instContainer").text("Guess the title of the Queen's song I'm thinking. Please choose a letter.");
        //console.log(gameTrigger);
        $("#start-button").text("Play again")
        startButtonJ.disabled = true;

        //restarts the mistakes images
        $("#drawing").attr("src", "assets/images/hang0.jpg");

        //erase the letterStorage array from the screen
        $("#letter-display").empty();

        $('#mistakeCounts').empty();
        $("#hitCounts").empty();

    };

    function hangGame () {
        // prompt for a letter
        var gameOver = false;
        
        
        document.onkeyup= function(event){
            
            //if ()won or lost {alert please reset tghe game}
            if (gameOver) {
                return false;
            }
            //return false
            //reset function
            chosenLetter = event.key.toLowerCase();
            console.log(chosenLetter);
            alreadyControl = false;

            // Show funFacts
            var ffIndex = Math.floor(Math.random()*queenObject.ffArray.length);
            var singleFF = queenObject.ffArray[ffIndex];
            $("#funFacts").text(singleFF);
            
            
            
            for (var l = 0; l < letterStorage.length ; l++) {
                
                if (chosenLetter == letterStorage[l]){
                    alreadyControl = true;
                } 
                
            };
            
            console.log(letterStorage);
            
            var lsIndex =8;
            if (alreadyControl) {
                instContainerJ.textContent = "YOU PLAYED THIS KEY ALREADY!!! TRY ANOTHER ONE.";
            } else { 
                
                letterStorage.push(chosenLetter);
                lsIndex++;
                $("#letter-display").text(letterStorage);

                //compare the letter with the song
                hit = false;
                control = 0;
                
                for (var x = 0; x < displaySongString.length; x++) {

                    if (!controlSpace) {
                        if (chosenSong.charAt(x) == " "){
                                spaceCounter++;
                        }
                    }

                    if (chosenLetter == chosenSong.charAt(x)){

                        // change dashes for letter
                        displaySongString = displaySongString.substr(0,x) + chosenSong.charAt(x) + displaySongString.substr(x+1);
                        console.log(displaySongString);

                        control ++;
                        hitCounter ++;
                        if (control == 1){
                            hit = true;
                        }

                    }
                    
                    mainAreaJ.textContent = displaySongString;
                }                       

            
                controlSpace = true;

                if (hit){
                    instContainerJ.textContent = "Good Job choosing the " + chosenLetter + ". You still have " + mistakes + " errors left. Guess another key!!!";
                    $('#hitCounts').text(hitCounter);
                    console.log(chosenSong.length);
                    console.log(hitCounter, spaceCounter);
                    if (hitCounter+spaceCounter >= chosenSong.length) {
                        instContainerJ.textContent = "GOD SAVED THE QUEEN!!!"
                        $("#drawing").attr("src", "assets/images/you-won.jpg");
                        startButtonJ.disabled = false;
                        gameOver = true;
                    }
                } else {
                    mistakes --;
                    instContainerJ.textContent = "Ooops!!! you really don't like the Queen. Choosing the " + chosenLetter + " counts as high treason. You still have " + mistakes + " errors left. Guess another key!!!";
                    $('#mistakeCounts').text(mistakesCounter+1);
                    mistakesCounter++;
                    $("#drawing").attr("src", hangArray[mistakesCounter]);
                    if (mistakes<=0) {
                        instContainerJ.textContent = "THE QUEEN IS DEAD, LONG LIVE THE QUEEN!!!";
                        startButtonJ.disabled = false;
                        gameOver = true;
                    }
                }
            }

            
        }
    };

    
});
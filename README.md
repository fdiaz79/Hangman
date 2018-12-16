# Hangman
The classic game of hangman with some Queen on it.

To play this game just hit play.

When you hit a key it will compare against previuosly chosen letters. If you selected the song before, it will tell you and if you haven't selected it before, it will compare against the title of randomly chosen Queen's song. At this moment there are 10 options of songs, but in the future the plan is to add more options of songs.

The game will display the previously chosen letters, the number of hits and errors you have, as long a s a drawing of the hanging man. 

Once you have guessed correctly the song, the button to play again will activate and the program will choose a new song and erase the counter.

In future versions of the game, it will also display fun facts of the band and play some songs of the band.

The DOM is based on the grid system of bootstrap, to make it responsive, and a very basic css.
It uses JavaScript and JQuery

The logic behind the programm is a button that when clicked, activates an event listener that will capture the pressed key and will compare against a string of characters. Once the game is over (win or lose) the event listener is removed by returning a false value. This will activate again the button that will allow the user to trigger again the even listener in case he wants to play again.

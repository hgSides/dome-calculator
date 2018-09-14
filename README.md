# Using the Calculator.
It's pretty easy-peasy.

## Access the Calculator Here
[Calculator](https://hgsides.github.io/dome-calculator/scorecalc.html)

You'll land on a selection page for the 3 sizes.

![image dome1](https://i.imgur.com/bqVfuqE.png)

From there, clicking on any one of them will populate forms for inputting the necessary data.  Placement goes from top to bottom (i.e., 1-24), but is calculated in an inverse method to determine how many tributes were passed in the game.  
E.g.: A 24-person game.  Tribute 'Foo' is the winner, with a placement of 1; 24-1 = 23.  So on and so forth to Tribute 'Bar', with a placement of 24; 24-24 = 0.  

![image dome2](https://i.imgur.com/9URTFtG.png)

After inputting the necessary data, pressing the "Process Tributes" button (in green) will calculate the stores and inject that value into the 'Scores' input.  

![image dome3](https://i.imgur.com/0xGvXEi.png)

As seen here.  After calculation, retrieval of raw text is possible by pressing the 'Get Their Scores' button, which will then output the scores in an expected format of:
**#: (NAME) : (SCORE)**

![image dome4](https://i.imgur.com/hNF2zev.png)

Testing with actual values from a game, displayed here:

![image domeTest](https://i.imgur.com/YFSGl3C.png)

The values should coincide with the given formula of (100 * passed)+(100 * days)+(500 * arenas)+(1000 * kill)+{if winner:1500}.  I'm not sure how you count a day survived, if it means they clear both DayX and NightX, or that they reach DayX, but the given data in the field adds up the way it should, at a glance.  Let me know if it's wrong and I'll adjust it.

# Further Plans for Development
* Support for saved scores.
* Support for uploading raw text scores.
* Support for automation of at least some input fields.
* Access for saved scores in current 'errors' (more of a pseudo-log I used when working on the scripting) div.
* Prettifying the interface beyond bland '90s work software.

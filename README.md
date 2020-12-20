# week-04-password-generator-homework <br>

## Aim of the homework <br>
To create a password generator in javaScript.  There was a little bit of javaScript code to start us off, along with html and css files, and the rest needed to be written from scratch, which would then feed into the code provided.  For ease of reading, I have left the initial code at the top of the .js file and my own code follows beneath it.<br>

## Design <br>
I struggled for a good few days trying to get my head around how to implement this, so that it looked good.  I had designs in my head on creating textboxes with check boxes to choose the types of characters required in the password, but as we were focussing solely on the javascript, and my understanding of creating elements on the fly was still very limited, I ended up meeting the criteria mainly using alerts and prompts.  

## Pseudocoding <br>
My general line of thinking was to define the different arrays to be used, ie special characters, numbers, lowercase characters and upper case characters.  Then to create options to determine how long the password was to be, and which arrays to use for creating the password.  I knew that I would need to use some loops, and concatenate the arrays chosen.  Then I would have to apply some maths logic to the compiled array to choose which particular characters were to be used in each instance. 

## Arrays <br>
These were straightforward, defining each array, using a google search for the special characters that can be used in a password.  Although with this I discovered that in order for \ to be accepted, it was necessary to write "\\" 

## Password Length and Character Selection <br>
I realised that whilst determining the length of password should be easy enough if the user entered an integer, I had to guard against them entering an invalid character, such as a letter.  Therefore I used isNan (is Not a Number), as well as parseInt to ensure that the value returned was read as an integer, and not a string.
Creating a while loop, to ensure that we eventually got a valid input was necessary, and then console.logging the result to ensure that all was working as expected.  <br>

For the character selection, again I used a while loop, this time with if statements inside and using booleans to determine whether the particular character type was to be chosen or not.  If a character type was selected then the associated array was then concatenated into an empty array, ready for the random maths logic to applied to it.   

## Maths logic <br>
The general premise of this is that by applying the random maths formula to the defined array,  that it would create a random number and apply that as an array integer, and then add that chosen character to the password variable.  This would happen as many times as the length of password variable determined, and then feed the completed password back into the code that was provided initially. 

## Issues <br>
The maths logic was an area that I struggled with. With googling I could see a pattern of code used to create the desired function, and whilst I tried to break it down into smaller elements that allowed me to understand the logic of it more completely, I had to admit a little bit of defeat at the end of the day, and use the code without full comprehension, this is an area I will need to come back to ensure better comprehension. 

## Screenshots <br>

## Deployed code <br>
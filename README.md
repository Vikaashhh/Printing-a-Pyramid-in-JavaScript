## Printing-a-Pyramid-in-JavaScript

#This JavaScript function, printPyramid, generates and prints a pyramid of a specified height to the console. The pyramid is centered and consists of "#" characters.

#Function Breakdown
1. 
```sh
function printPyramid(height) {
  // ...
}
```
The function takes a single argument, height, which represents the number of rows in the pyramid.

2. Looping Through Rows
```sh
   for (let i = 0; i < height; i++) {
  // ...
}
```
The function uses a for loop to iterate through each row of the pyramid, starting from the top (row 0) and moving down to the bottom (row height - 1).

3. Calculating Spaces
```sh
const spaces = " ".repeat(height - i - 1);
```
For each row, the function calculates the number of spaces needed to center the pyramid. This is done by subtracting the current row number (i) from the total height and then subtracting 1. The resulting value is used to repeat a string of spaces using the repeat() method.

4. Calculating Hash Characters
```sh
const char = "#".repeat(2 * i + 1);
```
The function calculates the number of # characters needed for each row. This is done by multiplying the current row number (i) by 2 and then adding 1. The resulting value is used to repeat a string of # characters using the repeat() method.

5. Printing the Row
```sh
console.log(spaces + char);
```
Finally, the function combines the spaces and # characters and prints the resulting string to the console using

6. Example Usage
```sh
printPyramid(7);
```
This will print a pyramid of height 7 to the console.

7. Output
```sh
      #
     ###
    #####
   #######
  #########
 ###########
#############
```

This code provides a simple and efficient way to generate and print pyramids of varying heights in JavaScript.
-----------------------------------------------------------------------------------------------------------------
#Pratice and Grow
#Made with love by Vikash

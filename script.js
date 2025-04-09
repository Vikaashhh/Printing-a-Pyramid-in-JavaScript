function printPyramid(height) {
    // Loop through each row from top to bottom
    for (let i = 0; i < height; i++) {
      // Calculate spaces before the # characters
      // We need (height - i - 1) spaces to center the pyramid
      // As i increases, the number of spaces decreases
      const spaces = " ".repeat(height - i - 1);
      
      // Calculate # characters for this row
      // We use 2*i + 1 to generate odd numbers: 1, 3, 5, 7, etc.
      // Row 0: 2*0+1 = 1 hash
      // Row 1: 2*1+1 = 3 hashes
      // Row 2: 2*2+1 = 5 hashes
      // And so on...
      const char = "#".repeat(2 * i + 1);
      
      // Combine spaces and hashes and print the row
      // This creates the centered pyramid effect
      console.log(spaces + char);
    }
  }
  
  // Execute the function with height 7
  printPyramid(7);
  
  /* Output will be:
        #        (6 spaces + 1 hash)
       ###       (5 spaces + 3 hashes)
      #####      (4 spaces + 5 hashes)
     #######     (3 spaces + 7 hashes)
    #########    (2 spaces + 9 hashes)
   ###########   (1 space + 11 hashes)
  #############  (0 spaces + 13 hashes)
  */
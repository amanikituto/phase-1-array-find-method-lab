// Define the array of game records
const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    // Add more records here if needed
  ];
  
  // Define the function superbowlWin
  function superbowlWin(record) {
    // Use the find method to search for a winning result
    const winningRecord = record.find(game => game.result === "W");
    
    // If a winning record is found, return the year
    if (winningRecord) {
      return winningRecord.year;
    } else {
      // If no winning record is found, return undefined
      return undefined;
    }
  }
  
  // Example usage
  console.log(superbowlWin(record)); // Output will be the year of the winning record or undefined if no win
  
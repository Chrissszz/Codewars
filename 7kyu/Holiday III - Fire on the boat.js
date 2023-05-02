// Enjoying your holiday, you head out on a scuba diving trip!

// Disaster!! The boat has caught fire!!

// You will be provided a string that lists many boat related items. If any of these items are "Fire" you must spring into action. Change any instance of "Fire" into "~~". Then return the string.

// Go to work!

//Solution
function fireFight(s){
  return s.replace(/Fire/g, '~~');
}

//use replace method to replace the word fire
// use forward slash to mark beginning and end and mark it global so it doesnt just stop at the first word of fire

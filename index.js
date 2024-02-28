function shout(string) {
  return string.toUpperCase();
}
shout("hello");
console.log(shout("hello"));

// Task 02

function whisper(string) {
  return string.toLowerCase();
}
whisper("HeLLO");
console.log(whisper("HeLLO"));

// Task 03

function logShout(string) {
  console.log(shout(string));
}

logShout("Hello There!");

// Task 04

function logWhisper(string) {
  console.log(whisper(string));
}

logWhisper("HELLO I am HERE!");

// Last Task
function sayHiToHeadphonedRoommate(string) {
  if (string === whisper(string)) {
    return `I can\'t hear you!`;
  } else if (string === shout(string)) {
    return `YES INDEED!`;
  } else if (string === `Let's have dinner together!`) {
    return `I would love to!`;
  } else {
    `speak clearly please!`;
  }
}

console.log(sayHiToHeadphonedRoommate("hello "));
console.log(sayHiToHeadphonedRoommate("HELLO"));
console.log(sayHiToHeadphonedRoommate(`Let's have dinner together!`));

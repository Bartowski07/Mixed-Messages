const knocks = ["Knock, knock. Who's there?\n"];

let answers = [
  "-Ice cream.\n Ice cream who?\n -Ice cream if you don't give me some candy!",
  "-Stopwatch.\n Stopwatch who?\n -Stopwatch you're doing and let me in!",
  "-Spell.\n Spell who?\n -W. H. O.",
  "-Icy.\n Icy who?\n -Icy you looking at me!",
  "-Norma Lee.\n Norma Lee who?\n -Norma Lee I don't knock on random doors, but I had to meet you!",
  "-Somebody too short to ring the doorbell!",
  "-Harry.\n Harry who?\n -Harry up, it’s cold outside!",
  "-Justin.\n Justin who?\n -Justin time for dinner.",
  "-Isabel.\n Isabel who?\n -Isabel working?",
  "-I am.\n I am who?\n -Wait, you don’t know who you are?",
];

function generateJoke() {
  const answer = answers[Math.floor(Math.random() * answers.length)];

  return `${knocks} ${answer}`;
}

console.log(generateJoke());

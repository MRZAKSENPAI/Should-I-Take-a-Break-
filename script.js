const answers = [
    "YES! 🎉 You deserve it!",
    "NO! 🛑 Stay focused.",
    "Why are you even asking? 🤨",
    "Maybe... 🧐",
    "Take a mini break! ☕",
    "Definitely, you've earned it! 🌟",
    "Nah, keep grinding! 🔥",
    "You'll fall behind. 😂",
    "Your call! 🤦‍♂️",
    "Please don't. 😒"
  ];
  
  const button = document.getElementById('breakBtn');
  const answerDisplay = document.getElementById('answer');
  
  button.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * answers.length);
    answerDisplay.textContent = answers[randomIndex];
  });
  
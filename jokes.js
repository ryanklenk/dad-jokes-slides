import strongman from "./images/strongman.jpg";

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const jokes = [
  {
    question: "Cashier: Would you like the milk in a bag, Sir?",
    answer: "Dad: No thanks, I’d rather have it in the carton",
  },
  {
    question: "When does a joke become a dad joke?",
    answer: "When it becomes apparent!",
  },
  {
    question: "Why can't you hear a pterodactyl use the bathroom?",
    answer: 'Because the "p" is silent.',
  },
  {
    question: "What is the strongest day of the week?",
    answer: "Saturday and Sunday. Every other day is a weak day.",
    image: strongman,
  },
  {
    question: "What's an astronaut's favorite part of a computer? ",
    answer: "...The space bar.",
  },
  {
    question: "I told my Dad I broke my arm in three places.",
    answer: "He told me to stop going to those places.",
  },
  {
    question: "Why are you asking for shampoo?",
    answer: "Would you like the real thing?",
  },
  {
    question: "I tried to come up with a joke about social distancing.",
    answer: "This is as close as I could get.",
  },
  {
    question: "Why can't you trust stairs?",
    answer: "They're always up to something.",
  },
];

const shuffledJokes = shuffle(jokes);

export { shuffledJokes as jokes };

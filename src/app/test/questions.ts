export interface Question {
  id: number;
  question: string;
  options: string[];
  answer: string;
  marked: boolean;
}

export const questions: Question[] = [
  {
    id: 1,
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    answer: "4",
    marked: false,
  },
  {
    id: 2,
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: "Paris",
    marked: false,
  },
  {
    id: 3,
    question: "What is the color of the sky?",
    options: ["Red", "Blue", "Green", "Yellow"],
    answer: "Blue",
    marked: false,
  },
  {
    id: 4,
    question: "What is the largest planet in our solar system?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    answer: "Jupiter",
    marked: false,
  },
  {
    id: 5,
    question: "Who wrote 'Hamlet'?",
    options: ["Shakespeare", "Dickens", "Chaucer", "Austen"],
    answer: "Shakespeare",
    marked: false,
  },
  {
    id: 6,
    question: "What is the boiling point of water?",
    options: ["90°C", "100°C", "110°C", "120°C"],
    answer: "100°C",
    marked: false,
  },
  {
    id: 7,
    question: "Which gas do plants absorb?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    answer: "Carbon Dioxide",
    marked: false,
  },
  {
    id: 8,
    question: "How many continents are there?",
    options: ["6", "7", "8", "9"],
    answer: "7",
    marked: false,
  },
  {
    id: 9,
    question: "Who was the first president of the USA?",
    options: [
      "George Washington",
      "Abraham Lincoln",
      "Thomas Jefferson",
      "John Adams",
    ],
    answer: "George Washington",
    marked: false,
  },
  {
    id: 10,
    question: "What is the speed of light?",
    options: ["300,000 km/s", "150,000 km/s", "500,000 km/s", "700,000 km/s"],
    answer: "300,000 km/s",
    marked: false,
  },
  {
    id: 11,
    question: "What is the capital of Japan?",
    options: ["Seoul", "Tokyo", "Beijing", "Hong Kong"],
    answer: "Tokyo",
    marked: false,
  },
  {
    id: 12,
    question: "What is 5 * 5?",
    options: ["10", "15", "25", "30"],
    answer: "25",
    marked: false,
  },
  {
    id: 13,
    question: "What is the smallest prime number?",
    options: ["0", "1", "2", "3"],
    answer: "2",
    marked: false,
  },
  {
    id: 14,
    question: "Which element has the chemical symbol 'O'?",
    options: ["Oxygen", "Osmium", "Ozone", "Oganesson"],
    answer: "Oxygen",
    marked: false,
  },
  {
    id: 15,
    question: "How many states are in the United States?",
    options: ["50", "51", "52", "53"],
    answer: "50",
    marked: false,
  },
  {
    id: 16,
    question: "Who invented the telephone?",
    options: ["Tesla", "Edison", "Bell", "Faraday"],
    answer: "Bell",
    marked: false,
  },
  {
    id: 17,
    question: "What is the currency of Japan?",
    options: ["Yuan", "Won", "Yen", "Ringgit"],
    answer: "Yen",
    marked: false,
  },
  {
    id: 18,
    question: "What is the largest ocean on Earth?",
    options: ["Atlantic", "Pacific", "Indian", "Arctic"],
    answer: "Pacific",
    marked: false,
  },
  {
    id: 19,
    question: "What is the capital of India?",
    options: ["Mumbai", "Delhi", "Bangalore", "Chennai"],
    answer: "Delhi",
    marked: false,
  },
  {
    id: 20,
    question: "Which company created the iPhone?",
    options: ["Samsung", "Apple", "Nokia", "Motorola"],
    answer: "Apple",
    marked: false,
  },
  {
    id: 21,
    question: "Which country is known as the Land of the Rising Sun?",
    options: ["Japan", "China", "South Korea", "Thailand"],
    answer: "Japan",
    marked: false,
  },
  {
    id: 22,
    question: "What is the main ingredient in guacamole?",
    options: ["Tomato", "Avocado", "Lemon", "Onion"],
    answer: "Avocado",
    marked: false,
  },
  {
    id: 23,
    question: "What is the longest river in the world?",
    options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
    answer: "Nile",
    marked: false,
  },
  {
    id: 24,
    question: "What year did World War II end?",
    options: ["1940", "1944", "1945", "1949"],
    answer: "1945",
    marked: false,
  },
  {
    id: 25,
    question: "Who painted the Mona Lisa?",
    options: [
      "Leonardo da Vinci",
      "Vincent van Gogh",
      "Pablo Picasso",
      "Claude Monet",
    ],
    answer: "Leonardo da Vinci",
    marked: false,
  },
  {
    id: 26,
    question: "What is the freezing point of water?",
    options: ["0°C", "32°F", "-10°C", "100°C"],
    answer: "0°C",
    marked: false,
  },
  {
    id: 27,
    question: "Who developed the theory of relativity?",
    options: [
      "Isaac Newton",
      "Albert Einstein",
      "Galileo Galilei",
      "Nikolai Tesla",
    ],
    answer: "Albert Einstein",
    marked: false,
  },
  {
    id: 28,
    question: "What is the largest desert in the world?",
    options: ["Sahara", "Arctic", "Gobi", "Antarctic"],
    answer: "Antarctic",
    marked: false,
  },
  {
    id: 29,
    question: "Who was the first man to step on the moon?",
    options: [
      "Buzz Aldrin",
      "Neil Armstrong",
      "Yuri Gagarin",
      "Michael Collins",
    ],
    answer: "Neil Armstrong",
    marked: false,
  },
  {
    id: 30,
    question: "Which is the smallest country in the world?",
    options: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"],
    answer: "Vatican City",
    marked: false,
  },
  {
    id: 31,
    question: "What is the tallest mountain in the world?",
    options: [
      "Mount Kilimanjaro",
      "Mount Everest",
      "Mount Fuji",
      "Mount Denali",
    ],
    answer: "Mount Everest",
    marked: false,
  },
  {
    id: 32,
    question: "What is the symbol for gold on the periodic table?",
    options: ["Ag", "Au", "Pb", "Fe"],
    answer: "Au",
    marked: false,
  },
  {
    id: 33,
    question: "Which animal is known as the King of the Jungle?",
    options: ["Lion", "Tiger", "Elephant", "Giraffe"],
    answer: "Lion",
    marked: false,
  },
  {
    id: 34,
    question: "What is the chemical formula for water?",
    options: ["H2O", "CO2", "O2", "H2O2"],
    answer: "H2O",
    marked: false,
  },
  {
    id: 35,
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Venus", "Mars", "Saturn"],
    answer: "Mars",
    marked: false,
  },
  {
    id: 36,
    question: "What is the capital of Australia?",
    options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
    answer: "Canberra",
    marked: false,
  },
  {
    id: 37,
    question: "Which country is the Eiffel Tower located in?",
    options: ["Italy", "Spain", "Germany", "France"],
    answer: "France",
    marked: false,
  },
  {
    id: 38,
    question: "What is the main language spoken in Brazil?",
    options: ["English", "Portuguese", "Spanish", "French"],
    answer: "Portuguese",
    marked: false,
  },
  {
    id: 39,
    question: "What is the symbol for the element Carbon?",
    options: ["C", "O", "H", "N"],
    answer: "C",
    marked: false,
  },
  {
    id: 40,
    question: "What is the longest bone in the human body?",
    options: ["Femur", "Humerus", "Tibia", "Radius"],
    answer: "Femur",
    marked: false,
  },
  {
    id: 41,
    question: "How many bones are in the adult human body?",
    options: ["206", "205", "208", "210"],
    answer: "206",
    marked: false,
  },
  {
    id: 42,
    question: "Which country invented the game of chess?",
    options: ["India", "China", "Russia", "Iran"],
    answer: "India",
    marked: false,
  },
  {
    id: 43,
    question: "What is the national sport of Canada?",
    options: ["Hockey", "Football", "Lacrosse", "Basketball"],
    answer: "Hockey",
    marked: false,
  },
];


export interface ExamQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
  category: 'vocabulary' | 'grammar' | 'translation';
  explanation?: string;
}

export const examQuestions: ExamQuestion[] = [
  {
    id: 1,
    question: "We don't like this man; he's really …………… .",
    options: ["serious", "cruel", "tolerant", "cooperative"],
    correctAnswer: "cruel",
    category: "vocabulary",
    explanation: "The context implies a negative trait, and 'cruel' is the most negative option."
  },
  {
    id: 2,
    question: "Come and see this film; it is really thrilling. \"Thrilling\" here can be an antonym for ……….. .",
    options: ["new", "bored", "boring", "fresh"],
    correctAnswer: "boring",
    category: "vocabulary",
    explanation: "'Thrilling' is exciting, while 'boring' means dull or unexciting."
  },
  {
    id: 3,
    question: "I have ……… a great progress in the new project.",
    options: ["missed", "bought", "done", "made"],
    correctAnswer: "made",
    category: "vocabulary",
    explanation: "The correct collocation is 'make progress'."
  },
  {
    id: 4,
    question: "It's a complex task to finish; you can't do it alone. \"Complex\" here has the opposite meaning of …………. .",
    options: ["interesting", "simple", "long", "unclear"],
    correctAnswer: "simple",
    category: "vocabulary",
    explanation: "'Complex' means complicated, while 'simple' means uncomplicated or easy."
  },
  {
    id: 5,
    question: "He's a marvellous actor. \"Marvellous\" is similar in meaning to ………… .",
    options: ["amazing", "strange", "generous", "boring"],
    correctAnswer: "amazing",
    category: "vocabulary",
    explanation: "'Marvellous' means wonderful or extraordinary, similar to 'amazing'."
  },
  {
    id: 6,
    question: "Firefighters are usually ………",
    options: ["brave", "courageous", "generous", "a & b"],
    correctAnswer: "a & b",
    category: "vocabulary",
    explanation: "Both 'brave' and 'courageous' describe firefighters accurately."
  },
  {
    id: 7,
    question: "The famous actor is going to …..…… a film of his own for the first time.",
    options: ["stop", "produce", "sell", "do"],
    correctAnswer: "produce",
    category: "vocabulary",
    explanation: "'Produce a film' is the correct collocation for creating films."
  },
  {
    id: 8,
    question: "It's strange that you like ……… films most; there are lots of frightening scenes.",
    options: ["horror", "musical", "comedy", "romantic"],
    correctAnswer: "horror",
    category: "vocabulary",
    explanation: "Horror films typically contain frightening scenes."
  },
  {
    id: 9,
    question: "My uncle is a brilliant mathematician. \"Brilliant\" can be replaced by …………. .",
    options: ["extremely skillful", "incredibly old", "ordinary", "unknown"],
    correctAnswer: "extremely skillful",
    category: "vocabulary",
    explanation: "'Brilliant' suggests having exceptional skill or intelligence."
  },
  {
    id: 10,
    question: "Hatim ……… late, is he?",
    options: ["wasn't", "doesn't come", "comes", "is never"],
    correctAnswer: "is never",
    category: "grammar",
    explanation: "The tag question structure requires 'is never' to match the expected 'is he' tag."
  },
  {
    id: 11,
    question: "I prefer watching ……… films.",
    options: ["historical", "historic", "a history", "historian"],
    correctAnswer: "historical",
    category: "vocabulary",
    explanation: "'Historical films' is the correct term for films about events in history."
  },
  {
    id: 12,
    question: "Teachers usually use ……… aids in the classroom; children like to see what is being introduced.",
    options: ["unclear", "visual", "listening", "audio"],
    correctAnswer: "visual",
    category: "vocabulary",
    explanation: "Visual aids help students see what is being taught."
  },
  {
    id: 13,
    question: "My brother plays a/an ……… part in society; his role is really wonderful.",
    options: ["unknown", "negative", "minor", "positive"],
    correctAnswer: "positive",
    category: "vocabulary",
    explanation: "The context suggests a good contribution, which aligns with 'positive'."
  },
  {
    id: 14,
    question: "What a/an ……… film; I couldn't watch it till the end. I don't recommend it to anyone.",
    options: ["terrific", "interesting", "terrible", "bored"],
    correctAnswer: "terrible",
    category: "vocabulary",
    explanation: "The context indicates a negative opinion, making 'terrible' the appropriate choice."
  },
  {
    id: 15,
    question: "The best film I've seen lately was the ……… -winning \"Hidden Figures.\"",
    options: ["present", "reward", "award", "price"],
    correctAnswer: "award",
    category: "vocabulary",
    explanation: "Films win awards, not rewards, presents, or prices."
  },
  // Adding more exam questions would follow the same pattern
  {
    id: 16,
    question: "Your goals should be specific, measurable and time-...........; they should be met by a specific date.",
    options: ["bound", "out", "consuming", "repeating"],
    correctAnswer: "bound",
    category: "vocabulary",
    explanation: "'Time-bound' refers to having a specific timeline or deadline."
  },
  {
    id: 17,
    question: "Dalia, ................. received us in her house, is really hospitable.",
    options: ["whom", "who's", "whose", "who"],
    correctAnswer: "who",
    category: "grammar",
    explanation: "'Who' is the correct relative pronoun for the subject of the relative clause."
  },
  {
    id: 18,
    question: "I don't think Tamer is angry, ………….?",
    options: ["don't I", "isn't he", "do I", "is he"],
    correctAnswer: "do I",
    category: "grammar",
    explanation: "For a negative statement like 'I don't think', the tag question should be positive: 'do I'."
  },
  {
    id: 19,
    question: "Let's go to the library now, ………….?",
    options: ["do we", "shall we", "will you", "we don't"],
    correctAnswer: "shall we",
    category: "grammar",
    explanation: "For suggestions starting with 'Let's', the tag question is 'shall we'."
  },
  {
    id: 20,
    question: "We must take advantage of our free time to do important things or practise useful hobbies, as wasted time is wealth that can never be recovered.",
    options: [
      "يجب أن نستغل أوقات فراغنا في عمل أشياء مهمة أو ممارسة هوايات مفيدة, فالوقت الضائع ثروة لا يمكن أن تُسترد أبدا.",
      "يجب أن نستغل أوقات فراغنا في عمل أشياء جديدة أو ممارسة هوايات مفيدة, فالوقت الضائع مصدر لا يمكن أن يُسترجع أبدا.",
      "يجب أن نستغل أوقات فراغنا في عمل أشياء مهمة أو ممارسة رياضات مفيدة, فالوقت الضائع ثروة لا يمكن أن يُحفظ أبدا.",
      "يجب أن نستغل أوقات فراغنا في عمل أشياء مهمة أو ممارسة هوايات جديدة, فالوقت الضائع ثروة لا يمكن أن تُستبدل أبدا."
    ],
    correctAnswer: "يجب أن نستغل أوقات فراغنا في عمل أشياء مهمة أو ممارسة هوايات مفيدة, فالوقت الضائع ثروة لا يمكن أن تُسترد أبدا.",
    category: "translation",
    explanation: "This is the most accurate Arabic translation of the given English sentence."
  }
];

export const getExamCategories = () => {
  return [
    { id: "all", name: "All Questions" },
    { id: "vocabulary", name: "Vocabulary" },
    { id: "grammar", name: "Grammar" },
    { id: "translation", name: "Translation" }
  ];
};

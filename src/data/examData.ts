
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
  },
  // Adding new questions based on provided vocabulary and grammar
  {
    id: 21,
    question: "A/An ......... is a building or structure with parts that turn around in the wind, used for producing electrical power or crushing grain.",
    options: ["windmill", "lighthouse", "tower", "factory"],
    correctAnswer: "windmill",
    category: "vocabulary",
    explanation: "A windmill is a structure with turning parts that uses wind power for electricity or grinding grain."
  },
  {
    id: 22,
    question: "Who took ……… the factory after the general manager had resigned?",
    options: ["part of", "revenge on", "place in", "control of"],
    correctAnswer: "control of",
    category: "vocabulary",
    explanation: "'Take control of' is the correct phrasal verb meaning to assume responsibility or management."
  },
  {
    id: 23,
    question: "A lot of young people prefer watching ……… films in which a hero strives to marry the lady he prefers.",
    options: ["documentary", "romantic", "economical", "historical"],
    correctAnswer: "romantic",
    category: "vocabulary",
    explanation: "Romantic films typically feature love stories where a character pursues a romantic interest."
  },
  {
    id: 24,
    question: "All workers are very ……… to the idea of closing the factory; it's very difficult for them to find other jobs.",
    options: ["welcoming", "hospitable", "accepting", "hostile"],
    correctAnswer: "hostile",
    category: "vocabulary",
    explanation: "'Hostile' means unfriendly or opposed to something, which fits the negative reaction to factory closure."
  },
  {
    id: 25,
    question: "It's a political crime when a country ……… another country.",
    options: ["invades", "supports", "invites", "disappears"],
    correctAnswer: "invades",
    category: "vocabulary",
    explanation: "To 'invade' means to enter a country by force with an army, which is considered a political crime."
  },
  {
    id: 26,
    question: "It was so funny when the new servant thought that the owner of the villa was its gardener. I usually like watching ……… films.",
    options: ["animation", "comedy", "historical", "action"],
    correctAnswer: "comedy",
    category: "vocabulary",
    explanation: "Comedy films feature humorous situations that make people laugh, like the mix-up described."
  },
  {
    id: 27,
    question: "The most frightening part of this ……… film is the fierce, huge animal that destroys the small house.",
    options: ["historical", "romantic", "comedy", "horror"],
    correctAnswer: "horror",
    category: "vocabulary",
    explanation: "Horror films typically include frightening elements like monsters or fierce creatures."
  },
  {
    id: 28,
    question: "Turn down the music, please; it's very …………… .",
    options: ["pleasant", "relieving", "annoying", "annoyed"],
    correctAnswer: "annoying",
    category: "vocabulary",
    explanation: "'Annoying' is used to describe something that irritates or bothers someone, like loud music."
  },
  {
    id: 29,
    question: "Which ……… instrument would you like to play?",
    options: ["musically", "musical", "musician", "music"],
    correctAnswer: "musical",
    category: "vocabulary",
    explanation: "'Musical' is the correct adjective form used to describe an instrument."
  },
  {
    id: 30,
    question: "Sorrowfully, the plane ……… didn't survive the crash.",
    options: ["band", "staff", "gang", "crew"],
    correctAnswer: "crew",
    category: "vocabulary",
    explanation: "'Crew' refers to the group of people who work on an aircraft, ship, etc."
  },
  {
    id: 31,
    question: "The film ……… had a bitter comment on a lot of fight scenes in the new film.",
    options: ["critical", "criticism", "critic", "critically"],
    correctAnswer: "critic",
    category: "vocabulary",
    explanation: "A 'critic' is a person who judges the qualities of films, books, etc."
  },
  {
    id: 32,
    question: "I don't like such films; I'm a ……… of action films only.",
    options: ["fun", "fan", "fine", "van"],
    correctAnswer: "fan",
    category: "vocabulary",
    explanation: "A 'fan' is someone who admires or loves something, like a type of film."
  },
  {
    id: 33,
    question: "A/An ……… is a person who supervises the actors and other staff in a film, play, or similar production.",
    options: ["campaigner", "captain", "director", "author"],
    correctAnswer: "director",
    category: "vocabulary",
    explanation: "A 'director' is the person who controls how a film is made."
  },
  {
    id: 34,
    question: "Did you know who was ……… charge of the new factory in our town?",
    options: ["in", "of", "at", "with"],
    correctAnswer: "in",
    category: "vocabulary",
    explanation: "The correct preposition is 'in charge of' meaning responsible for something."
  },
  {
    id: 35,
    question: "The truth about his failure was a bitter pill to swallow. \"A bitter pill to swallow\" refers to...",
    options: [
      "the unexpected hardships he has to face in the future.",
      "an unpleasant fact or situation that is difficult to accept.",
      "an illogical result due to the poor achievement.",
      "The ups and downs in our lives."
    ],
    correctAnswer: "an unpleasant fact or situation that is difficult to accept.",
    category: "vocabulary",
    explanation: "The idiom 'a bitter pill to swallow' means an unpleasant fact that is hard to accept."
  },
  {
    id: 36,
    question: "You're an ……… and punctual worker; the manager is going to promote you.",
    options: ["actively", "activate", "action", "active"],
    correctAnswer: "active",
    category: "vocabulary",
    explanation: "'Active' is the correct adjective form to describe a worker who does many things."
  },
  {
    id: 37,
    question: "Lions aren't tame animals, ………….. ?",
    options: ["isn't it", "are they", "aren't they", "don't they"],
    correctAnswer: "are they",
    category: "grammar",
    explanation: "For a negative statement like 'Lions aren't', the tag question should be positive: 'are they'."
  },
  {
    id: 38,
    question: "You will help me when I'm in trouble ……………..?",
    options: ["aren't I", "am I", "won't you", "will you"],
    correctAnswer: "won't you",
    category: "grammar",
    explanation: "For a positive statement with 'will', the tag question should be negative: 'won't you'."
  },
  {
    id: 39,
    question: "He'd come to the party if I invited him ………….. ?",
    options: ["don't I", "hadn't he", "didn't I", "wouldn't he"],
    correctAnswer: "wouldn't he",
    category: "grammar",
    explanation: "For a conditional with 'would', the tag question should use 'wouldn't he'."
  },
  {
    id: 40,
    question: "She's got two brothers, ………….?",
    options: ["she hasn't", "has she", "hasn't she", "isn't she"],
    correctAnswer: "hasn't she",
    category: "grammar",
    explanation: "For a positive statement with 'has got', the tag question should be negative: 'hasn't she'."
  },
  {
    id: 41,
    question: "Dalia had to see her doctor yesterday, ………….?",
    options: ["hadn't she", "didn't she", "she didn't", "wasn't she"],
    correctAnswer: "didn't she",
    category: "grammar",
    explanation: "For a statement with 'had to', the tag question uses 'didn't' not 'hadn't'."
  },
  {
    id: 42,
    question: "This food tastes ………; you can share the meal with me.",
    options: ["delicious", "deliciously", "badly", "bad"],
    correctAnswer: "delicious",
    category: "grammar",
    explanation: "After verbs of perception like 'taste', we use an adjective ('delicious') not an adverb ('deliciously')."
  },
  {
    id: 43,
    question: "The bad student wasn't forgiven because of his repeated mistakes, ………….?",
    options: ["didn't he", "wasn't he", "was he", "did he"],
    correctAnswer: "was he",
    category: "grammar",
    explanation: "For a negative statement like 'wasn't forgiven', the tag question should be positive: 'was he'."
  },
  {
    id: 44,
    question: "Everyone is ready for the exam, ………….?",
    options: ["aren't they", "isn't he", "are they", "isn't she"],
    correctAnswer: "aren't they",
    category: "grammar",
    explanation: "For singular pronouns referring to groups (everyone), we use plural tags: 'aren't they'."
  },
  {
    id: 45,
    question: "Your goals in life should be relevant to your abilities. ................ is an antonym for \"relevant.\"",
    options: ["connected", "unrelated", "attached", "recognized"],
    correctAnswer: "unrelated",
    category: "vocabulary",
    explanation: "'Unrelated' is the opposite of 'relevant', meaning not connected or pertinent."
  },
  {
    id: 46,
    question: "To succeed in life, it's important to have specific goals. The synonym for \"specific\" is …… .",
    options: ["usual", "sufficient", "different", "particular"],
    correctAnswer: "particular",
    category: "vocabulary",
    explanation: "'Particular' is a synonym for 'specific', meaning clearly defined or exact."
  },
  {
    id: 47,
    question: "Your goal shouldn't be vague. \"Vague\" is similar in meaning to …………… .",
    options: ["unclear", "exact", "definite", "simple"],
    correctAnswer: "unclear",
    category: "vocabulary",
    explanation: "'Vague' means not clearly expressed or understood, similar to 'unclear'."
  },
  {
    id: 48,
    question: "Mohamed Salah is a ............... player that all Egyptians are proud of.",
    options: ["unknown", "famous", "well-known", "b & c"],
    correctAnswer: "b & c",
    category: "vocabulary",
    explanation: "Both 'famous' and 'well-known' correctly describe Mohamed Salah's popularity."
  },
  {
    id: 49,
    question: "I .............. access to the necessary requirements to start my research.",
    options: ["gained", "lost", "did", "earned"],
    correctAnswer: "gained",
    category: "vocabulary",
    explanation: "'Gained access' is the correct collocation meaning to obtain or acquire access."
  },
  {
    id: 50,
    question: "Athletes should have their hearts checked ……………?",
    options: ["did they", "didn't they", "should they", "shouldn't they"],
    correctAnswer: "shouldn't they",
    category: "grammar",
    explanation: "For statements with modal verbs like 'should', the tag uses the same modal in negative form."
  },
  {
    id: 51,
    question: "I wish I had more time to study. This sentence expresses:",
    options: ["a plan for the future", "an unlikely present possibility", "regret about the past", "a present hope"],
    correctAnswer: "an unlikely present possibility",
    category: "grammar",
    explanation: "'Wish + past tense' expresses an unlikely or impossible present situation."
  },
  {
    id: 52,
    question: "She will have finished her project by tomorrow. This is an example of:",
    options: ["Present Perfect", "Past Perfect", "Future Simple", "Future Perfect"],
    correctAnswer: "Future Perfect",
    category: "grammar",
    explanation: "Future Perfect (will have + past participle) is used for actions completed by a specific time in the future."
  },
  {
    id: 53,
    question: "يجب أن نحمي الغابات المطيرة لأنها موئل للكثير من الأنواع المهددة بالانقراض.",
    options: [
      "We should protect rainforests because they are home to many endangered species.",
      "We must protect rainforests because they are home to many endangered species.",
      "We might protect rainforests because they are home to many endangered species.",
      "We could protect rainforests because they are home to many endangered species."
    ],
    correctAnswer: "We must protect rainforests because they are home to many endangered species.",
    category: "translation",
    explanation: "The Arabic phrase 'يجب أن' translates to 'must' in English, indicating obligation."
  },
  {
    id: 54,
    question: "To achieve your dreams, you need ................... and hard work.",
    options: ["determination", "distraction", "disturbance", "distance"],
    correctAnswer: "determination",
    category: "vocabulary",
    explanation: "'Determination' means firmness of purpose or resoluteness, needed to achieve goals."
  },
  {
    id: 55,
    question: "Living with a ................ family is a great way to learn about a new culture.",
    options: ["hotel", "host", "hostile", "house"],
    correctAnswer: "host",
    category: "vocabulary",
    explanation: "A 'host family' is a family that welcomes visitors or students into their home."
  },
  {
    id: 56,
    question: "Being ................ means you can take care of yourself without depending on others.",
    options: ["independent", "indigent", "indifferent", "industrial"],
    correctAnswer: "independent",
    category: "vocabulary",
    explanation: "'Independent' means self-sufficient or not relying on others."
  },
  {
    id: 57,
    question: "Learning a new language requires a lot of ................ but it's worth it.",
    options: ["stress", "strength", "struggle", "strain"],
    correctAnswer: "struggle",
    category: "vocabulary",
    explanation: "'Struggle' refers to the great effort required to overcome difficulties."
  },
  {
    id: 58,
    question: "Which of the following is NOT a stative verb?",
    options: ["know", "have", "love", "study"],
    correctAnswer: "study",
    category: "grammar",
    explanation: "'Study' is an action verb, while 'know', 'have', and 'love' are stative verbs that describe states."
  },
  {
    id: 59,
    question: "If he ................... harder, he would have passed the exam.",
    options: ["studies", "studied", "had studied", "would study"],
    correctAnswer: "had studied",
    category: "grammar",
    explanation: "In third conditional sentences (past impossible situations), we use 'if + past perfect' in the if-clause."
  },
  {
    id: 60,
    question: "Is Egypt the only country ................ the Nile flows through?",
    options: ["which", "that", "where", "whose"],
    correctAnswer: "where",
    category: "grammar",
    explanation: "We use 'where' as a relative pronoun for places."
  }
]

export const getExamCategories = () => {
  return [
    { id: "all", name: "All Questions" },
    { id: "vocabulary", name: "Vocabulary" },
    { id: "grammar", name: "Grammar" },
    { id: "translation", name: "Translation" }
  ];
};


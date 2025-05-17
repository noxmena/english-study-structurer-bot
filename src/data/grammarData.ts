
export interface GrammarRule {
  id: number;
  title: string;
  definition: string;
  whenToUse: string;
  howToUse: string;
  example: string;
  translation: string;
}

export const grammarRules: GrammarRule[] = [
  {
    id: 1,
    title: "Present Continuous",
    definition: "Use am/is/are + verb-ing for actions now, temporary events, future plans, or repeated actions.",
    whenToUse: "For current actions, temporary situations, future arrangements, or annoying habits.",
    howToUse: "Add am/is/are + verb-ing.",
    example: "I am studying English now.",
    translation: "أنا أدرس الإنجليزية الآن"
  },
  {
    id: 2,
    title: "Stative Verbs",
    definition: "Stative verbs describe states (thoughts, feelings, senses, possessions) and don't use continuous form. Some can be action verbs (e.g., think, have).",
    whenToUse: "For permanent states, not actions.",
    howToUse: "Use verb directly.",
    example: "I like coffee.",
    translation: "أحب القهوة"
  },
  {
    id: 3,
    title: "Future Perfect",
    definition: "Use will/won't have + past participle for actions done by a future time or before another action.",
    whenToUse: "For actions finished by a future time or before another action.",
    howToUse: "Use will/won't have + past participle.",
    example: "She will have left by tomorrow.",
    translation: "ستكون قد غادرت بحلول الغد"
  },
  {
    id: 4,
    title: "Comparative Phrases",
    definition: "Use \"exactly the same as\" for no difference, \"almost as ... as\" or \"slightly ... than\" for small differences, \"far ... than\" for big differences.",
    whenToUse: "To compare two things with equal, small, or big differences.",
    howToUse: "Use \"as ... as\" or \"more/less + than\" with modifiers.",
    example: "This book is slightly better than that one.",
    translation: "هذا الكتاب أفضل قليلًا من ذلك"
  },
  {
    id: 5,
    title: "Past Habits",
    definition: "Use \"used to/didn't use to\" for past habits or situations. Use \"would + infinitive\" for past habits only.",
    whenToUse: "For past habits or situations that no longer happen.",
    howToUse: "Use \"used to + verb\" or \"would + verb.\"",
    example: "I used to play football every day.",
    translation: "كنت ألعب كرة القدم كل يوم"
  },
  {
    id: 6,
    title: "Past Perfect",
    definition: "Use had + past participle for actions before another past action. Use with think/say for past thoughts. Use had been + past participle for passive.",
    whenToUse: "For actions completed before another past action.",
    howToUse: "Use had + past participle or had been + past participle.",
    example: "They had eaten before I arrived.",
    translation: "كانوا قد أكلوا قبل وصولي"
  },
  {
    id: 7,
    title: "Adjectives vs. Adverbs",
    definition: "Adjectives describe nouns (before noun). Adverbs describe verbs (after verb) or modify adjectives (e.g., very, quite). Many end in -ly.",
    whenToUse: "Adjectives for nouns, adverbs for verbs or adjective modification.",
    howToUse: "Place adjective before noun, adverb after verb or before adjective.",
    example: "She sings beautifully.",
    translation: "تغني بجمال"
  },
  {
    id: 8,
    title: "Tag Questions",
    definition: "A tag turns a statement into a question. Positive + negative tag, negative + positive tag. Use auxiliaries (do, be, have, modal). Intonation varies.",
    whenToUse: "To confirm or check information.",
    howToUse: "Add opposite auxiliary tag (e.g., is → isn't).",
    example: "You are tired, aren't you?",
    translation: "أنت متعب، أليس كذلك؟"
  },
  {
    id: 9,
    title: "Relative Clauses",
    definition: "Defining clauses give essential info (use who/which/that). Non-defining clauses give extra info (use who/which/whose with commas).",
    whenToUse: "Defining for essential info, non-defining for extra info.",
    howToUse: "Use who/which/that for defining, who/which/whose with commas for non-defining.",
    example: "The man who helped me is kind.",
    translation: "الرجل الذي ساعدني لطيف"
  }
];

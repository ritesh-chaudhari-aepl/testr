import tier1Image from "@/assets/tiercards-1.jpeg";
import tier2Image from "@/assets/perk-b.jpeg";
import tier3Image from "@/assets/tiercards-2.jpeg";

export const nav = [
  { name: "Home", href: "hero" },
  { name: "About Film", href: "about" },
  // { name: "Investment", href: "invest-now" },
  { name: "About the Trust", href: "trustees" },
  { name: "Cause", href: "cause" },
  { name: "Updates", href: "updates" },
  // { name: "Home", href: "home" },
];

// export const dropdownItems = [
//   { label: "Essay" },
//   { label: "Admission Essay" },
//   { label: "PowerPoint Presentation" },
//   { label: "Paper" },
//   { label: "Research Paper" },
//   { label: "Assignment" },
//   { label: "Homework" },
//   { label: "Speech" },
//   { label: "Book Reviews" },
//   { label: "Course Work" },
//   { label: "Personal Statement" },
//   { label: "Ph.D Dissertation" },
//   { label: "Thesis" },
//   { label: "Case Study" },
//   { label: "Term Paper" },
//   { label: "Lab Report" },
//   { label: "Editing" },
//   { label: "Proofreading" },
//   { label: "Rewrite" },
// ];

// export const dropdownItems2 = [
//   { label: "Psychology" },
//   { label: "Literature" },
//   { label: "Sociology" },
//   { label: "Math" },
//   { label: "CPM" },
//   { label: "Statistics" },
//   { label: "Physics" },
//   { label: "English" },
//   { label: "Spanish" },
//   { label: "French" },
//   { label: "Accounting" },
//   { label: "Economics" },
//   { label: "Biology" },
//   { label: "Marketing" },
//   { label: "Philosophy" },
//   { label: "Programming" },
//   { label: "Computer Science" },
//   { label: "Nursing" },
//   { label: "History" },
//   { label: "Other Projects We Help With" },
// ];

// Dummy data for supporters (you can replace it with actual data)
export const topContributors = [
  { nameShort: "WW", name: "well wisher", amount: "" },
  { nameShort: "j s", name: "jay shankar", amount: "" },
  { nameShort: "A p", name: "Anonymous Donor", amount: "" },
  { nameShort: "k k", name: "kamal kulkarni", amount: "" },
  { nameShort: "v s", name: "vijay singh", amount: "" },
];
export const socialSharing = [
  { nameShort: "WW", name: "well wisher", amount: "" },
  { nameShort: "j s", name: "jay shankar", amount: "" },
  { nameShort: "A p", name: "Anonymous Donor", amount: "" },
  { nameShort: "k k", name: "kamal kulkarni", amount: "" },
  { nameShort: "v s", name: "vijay singh", amount: "" },
];
export const totalSupporters = [
  { nameShort: "WW", name: "well wisher", amount: "" },
  { nameShort: "j s", name: "jay shankar", amount: "" },
  { nameShort: "A p", name: "Anonymous Donor", amount: "" },
  { nameShort: "k k", name: "kamal kulkarni", amount: "" },
  { nameShort: "v s", name: "vijay singh", amount: "" },
];

export const cardData = [
  {
    id: 1,
    imagesrc: tier1Image,
    tierNo: "Tier 1",
    Inr: "2000",
    redLine: "₹29,093 INR",
    offpercent: "(14% OFF)",
    CadAmount: "20",
    Cad: "CAD",
    desc: "See your name on the big screen! By opting into this donation tier your name will be included in our movie&apos;s credits as a supporter of the film.  Thank you so much for your contribution!",
    includedItems: ["Your Name in Radha's Credits"],
    estshipping: "May 2024",
    claim: "3",
  },
  {
    id: 2,
    imagesrc: tier2Image,
    tierNo: "Tier 2",
    Inr: "2500",
    redLine: "₹29,093 INR",
    offpercent: "(14% OFF)",
    CadAmount: "450",
    Cad: "USD",
    desc: "As well as your name in the credits of the movie, you will get access to a password protected link to see the animated film before it has a wide release. While the film is submitting to festivals, this will be the only place see Radha online.",
    includedItems: ["Your Name in Radha's Credits", "Digital Ticket"],
    estshipping: "May 2024",
    claim: "7 out of 10",
  },
  {
    id: 3,
    imagesrc: tier3Image,
    tierNo: "Tier 3",
    Inr: "3040",
    redLine: "₹29,093 INR",
    offpercent: "(14% OFF)",
    CadAmount: "50",
    Cad: "CAD",
    desc: "As well as your name in the movie's credits & an exclusive link to see the film online, this tier unlocks a PDF art book which will include all art made for Radha, including concept art & development.",
    includedItems: [
      "Your Name in Radha's Credits",
      "Digital Ticket",
      "Radha Art Book",
    ],
    estshipping: "May 2024",
    claim: "1 out of 5",
  },
  {
    id: 4,
    tierNo: "Tier 4",
    Inr: "6080",
    CadAmount: "100",
    Cad: "CAD",
    desc: "See the process! As well as your name in the credits, a digital ticket, & a pdf copy of the art book, this tier gives you access to Radha's animatic, the early rough animation which the animators base their work on, & the live action reference video where you can see the film's creators make movement references for the cinema.",
    includedItems: [
      "Your Name in Radha's Credits",
      "Digital Ticket",
      "Radha Art Book",
      "see the Cinematic & Reference",
    ],
    estshipping: "May 2024",
    claim: "5",
  },
  {
    id: 5,
    tierNo: "Tier 5",
    Inr: "15203",
    CadAmount: "250",
    Cad: "USD",
    desc: "As well as all previous donation rewards, purchasing this tier will earn you a Radha Sticker pack featuring characters & elements from the film & a poster for Radha signed by the film's creators.",
    includedItems: [
      "Your Name in Radha's Credits",
      "Digital Ticket",
      "Radha Art Book",
      "see the Cinematic & Reference",
      "Sticker Pack",
      "Signed Radha Poster",
    ],
    estshipping: "June 2024",
    claim: "3",
  },
  {
    id: 6,
    tierNo: "Tier 6",
    Inr: "30406",
    CadAmount: "500",
    Cad: "CAD",
    desc: "As well as all other rewards available, this tier gives you a custom drawing from the director of you as a villager in Radha's village hanging out with Gale, & an exclusive executive producer credit within the film's credits. After the campaign is complete the production trustees will be in contact to customize your drawing. Thank you so much!",
    includedItems: [
      "Your Name in Radha's Credits",
      "Digital Ticket",
      "Radha Art Book",
      "see the Cinematic & Reference",
      "Sticker Pack",
      "Signed Radha Poster",
      "Custom Drawing",
      "Executive Producer Credit",
    ],
    estshipping: "June 2024",
    claim: "5",
  },
];

export const accordion = [
  {
    id: 1,
    title: "Why Choose Goodgradeshelper's tutoring services?",
    content: [
      "- Tutoring on more than 100+ subjects",
      "- PhD Experts with 10+ years of experience offering tutoring Help",
      "- Lowest possible prices for tutoring",
      "- Amazing 24x7 live support — highly qualified, experienced & friendly customer service executives",
      "- Experience our services to believe in us",
    ],
  },

  {
    id: 2,
    title: "For what levels, do you provide tutoring?",
    content: [
      "We provide tutoring & guidance for all levels from primary, high school, grad & post grad levels.",
    ],
  },
  {
    id: 3,
    title: "What are the areas & domains in which you provide tutoring?",
    content: [
      "We provide expert guidance on Management, Law , Literature, English, Science, Maths etc.",
    ],
  },
  {
    id: 4,
    title: "How is your tutoring service different from others?",
    content: [
      "Our PhD tutors have been drawn from reputed institutes having 10+ years of teaching experience in various institutes. They have been trained on best learning methodologies. We have PhDs drawn from various domains & specialisations. We have an inhouse benchmark where only those tutors are selected whose tutoring enabled student to get A grades. Not only that, top 5% of the academic writers guide you during the writing process.",
    ],
  },
  {
    id: 5,
    title: "How do I trust you with any payment?",
    content: [
      "You are given an order confirmation number as soon as you make the payment. We ensure that the most credible & safe gateway is used for payment with firewall & multiple security options. 24* 7 live support is provided for all payment details.",
    ],
  },
  {
    id: 6,
    title: "How do I know that I would get quality tutors?",
    content: ["You can have live interaction with our tutors alongwith"],
  },
  {
    id: 7,
    title: "Can I talk with your tutor?",
    content: [
      "Yes, you can have live interaction with out tutors anytime you face a problem.",
    ],
  },
  {
    id: 8,
    title: "Are my personal details provided to my tutor?",
    content: [
      "No your personal details are neither divulged to any party nor provided to your tutors",
    ],
  },
];

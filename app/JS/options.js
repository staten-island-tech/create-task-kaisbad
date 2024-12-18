const lcfb = [
  {
    name: "Lion",
    beat: "Chicken",
    lose: "Attacker",
    tie: "Fly",
    image: "",
  },
  {
    name: "Chicken",
    beat: "Fly",
    lose: "Lion",
    tie: "Bone",
    image: "",
  },
  {
    name: "Fly",
    beat: "Bone",
    lose: "Chicken",
    tie: "Lion",
    image: "",
  },
  {
    name: "Bone",
    beat: "Lion",
    lose: "Fly",
    tie: "Chicken",
    image: "",
  },
];
const coinFlip = [
  {
    name: "Heads",
    image: "",
  },
  {
    name: "Tails",
    image: "",
  },
];

export { lcfb, coinFlip };

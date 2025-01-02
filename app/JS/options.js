const lcfb = [
  {
    name: "Lion",
    beat: "Chicken",
    lose: "Attacker",
    tie: "Fly",
    image: "/lion.jpg",
  },
  {
    name: "Chicken",
    beat: "Fly",
    lose: "Lion",
    tie: "Bone",
    image: "/chicken.jpg",
  },
  {
    name: "Fly",
    beat: "Bone",
    lose: "Chicken",
    tie: "Lion",
    image: "/fly.jpg",
  },
  {
    name: "Bone",
    beat: "Lion",
    lose: "Fly",
    tie: "Chicken",
    image: "/Bone.jpg",
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

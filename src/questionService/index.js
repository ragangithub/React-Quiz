const queSer = [
  {
    question: "What is 2*2?",
    answer: {
      a: [1, false],
      b: [5, false],
      c: [3, false],
      d: [4, true],
    },
  },
  {
    question: "what is 2*0?",
    answer: {
      a: [1, false],
      b: [50, false],
      c: [0, true],
      d: [3, false],
    },
  },
  {
    question: "what is 10*10?",
    answer: {
      a: [10, false],
      b: [100, true],
      c: [3, false],
      d: [4, false],
    },
  },
  {
    question: "what is 4-4?",
    answer: {
      a: [0, true],
      b: [53, false],
      c: [4, false],
      d: [23, false],
    },
  },
];

let promise = Promise.resolve(queSer);
export default promise;

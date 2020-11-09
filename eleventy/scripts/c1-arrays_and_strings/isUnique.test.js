const isUnique = require('./isUnique');
const isUniqueStringOnly = require('./isUniqueStringOnly');

const cases = [
  {
    string: "jvtdnwgrim",
    correct: true,
  },
  {
    string: "psrfczkehj",
    correct: true,
  },
  {
    string: "ouhenqbmyf",
    correct: true,
  },
  {
    string: "injfxqctyp",
    correct: true,
  },
  {
    string: "dsqtfwnegp",
    correct: true,
  },
  {
    string: "jvtddnwgrim",
    correct: false,
  },
  {
    string: "psrfczkehsj",
    correct: false,
  },
  {
    string: "ouhenqbmhyf",
    correct: false,
  },
  {
    string: "iinjfxqctyp",
    correct: false,
  },
  {
    string: "dsqtfwsnegp",
    correct: false,
  },
]

describe('isUnique', () => {
  for(let himle of cases) {
    const {string, correct} = himle;
    test(string, () => {
      expect(isUnique(string)).toEqual(correct);
    });
  }
} );

describe('isUnique no additional data structures', () => {
  for(let himle of cases) {
    const {string, correct} = himle;
    test(string, () => {
      expect(isUniqueStringOnly(string)).toEqual(correct);
    });
  }
} );

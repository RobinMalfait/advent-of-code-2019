// Day 22: Slam Shuffle

const { match, range } = require("../utils");

module.exports = function(input, size) {
  const actions = parseInput(input);
  const deck = range(size);

  return actions.reduce((next_deck, action) => {
    return match(action.type, HANDLERS, next_deck, action.amount);
  }, deck);
};

const ACTIONS = { CUT: 0, DEAL_INTO_NEW_STACK: 1, DEAL_WITH_INCREMENT: 2 };

function parseInput(input) {
  return input.split("\n").map(line => {
    if (line === "deal into new stack") {
      return { type: ACTIONS.DEAL_INTO_NEW_STACK, amount: null };
    }

    if (line.startsWith("deal with increment")) {
      const amount = Number(line.split(" ").pop());
      return { type: ACTIONS.DEAL_WITH_INCREMENT, amount };
    }

    if (line.startsWith("cut")) {
      const amount = Number(line.split(" ").pop());
      return { type: ACTIONS.CUT, amount };
    }

    throw new Error("WHAT");
  });
}

const HANDLERS = {
  [ACTIONS.CUT](deck, amount) {
    return [...deck.slice(amount), ...deck.slice(0, amount)];
  },
  [ACTIONS.DEAL_INTO_NEW_STACK](deck) {
    return deck.slice().reverse();
  },
  [ACTIONS.DEAL_WITH_INCREMENT](deck, amount) {
    const new_deck = [];

    for (let i = 0; i < deck.length; i++) {
      new_deck[(i * amount) % deck.length] = deck[i];
    }

    return new_deck;
  }
};
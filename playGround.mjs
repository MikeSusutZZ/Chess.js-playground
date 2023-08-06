import * as Chess from './chess.mjs';
import { createInterface } from 'readline';

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

const chess = new Chess.Chess();

async function inp() {
  return new Promise((resolve) => {
    rl.question('from: ', (from) => {
      rl.question('to: ', (to) => {
        resolve({ from, to });
      });
    });
  });
}

async function main() {
  while (!chess.isGameOver()) {
    const { from, to } = await inp();
    try {
      chess.move({ from, to });
    } catch (error) {
      console.log(`${from} to ${to} failed`);
    }
    console.log(chess.ascii());
  }

  rl.close();
}

main();

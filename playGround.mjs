import * as Chess from './dist/chess.mjs'

const chess = new Chess.Chess()

chess.move('e4')
chess.move('e5')

console.log(chess.ascii())
console.log(chess.board())

import ANSI from "./ANSI.mjs";

function renderBrett(brett){
  let drawing = `


      1   2   3
    ╔═══╦═══╦═══╗
  1 ║ ${ev(brett[0][0])} ║ ${ev(brett[0][1])} ║ ${ev(brett[0][2])} ║
    ╠═══╬═══╬═══╣
  2 ║ ${ev(brett[1][0])} ║ ${ev(brett[1][1])} ║ ${ev(brett[1][2])} ║
    ╠═══╬═══╬═══╣
  3 ║ ${ev(brett[2][0])} ║ ${ev(brett[2][1])} ║ ${ev(brett[2][2])} ║
    ╚═══╩═══╩═══╝ 

  `

  return drawing
}

function evaluate(verdi){
  const spiller1 = 1;
  let visning = "";
  if (verdi == 0) {
    visning += " "
} else if (verdi == spiller1) {
  visning += ANSI.COLOR.GREEN + "X" + ANSI.COLOR_RESET;
} else {
  visning += ANSI.COLOR.RED + "O" + ANSI.COLOR_RESET;
}
return visning;
}

const ev = evaluate;

export default renderBrett 
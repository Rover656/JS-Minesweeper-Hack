// ROVER656's Javascript Minesweeper Solver

function cheatGame(uncheckNonMines)
{
 //Find first non-bomb so we can leave it for the player to click, this fixes win issues
 var first = 0;
 for (var i = 0; i < total; i++) {
  if (adjacent[i] != mine)
 {
   first = i;
   break;
  }
 }

 //Loop over, flagging all bombs and unhiding all but 1 empty square
 for (var i = 0; i < total; i++) {
  if (adjacent[i] == mine)
  {
   exposed[i] = flagged;
   setSq(i);
   flags++;
   setMines();
  }
  else if (i != first && uncheckNonMines) {
   exposed[i] = exposed;
   setSq(i);
   remaining--;
  }
 }
}

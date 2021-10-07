import { Players } from "../models/game.models";

export function checkForWinner(moves: Players[], nextPlayer: Players): Players {
    if (rows(moves) || diagonals(moves) || cols(moves)) {
      return nextPlayer;
    }
    return null;
  }
  
  function rows(moves: Players[]) {
    return rowOne(moves) || rowTwo(moves) || rowThree(moves);
  }
  
  function rowOne(moves: Players[]) {
    if (!moves[0] || !moves[1] || !moves[2]) {
      return false;
    }
    if (moves[0] === moves[1] && moves[0]=== moves[2]) {
      return true;
    }
    return false;
  }
  
  function rowTwo(moves: Players[]) {
    if (!moves[3] || !moves[4] || !moves[5]) {
      return false;
    }
    if (moves[3] === moves[4] && moves[3]=== moves[5]) {
      return true;
    }
    return false;
  }
  
  function rowThree(moves: Players[]) {
    if (!moves[6] || !moves[7] || !moves[8]) {
      return false;
    }
    if (moves[6] === moves[7] && moves[7]=== moves[8]) {
      return true;
    }
    return false;
  }
  
  function diagonals(moves: Players[]) {
    return diagonalOne(moves) || diagonalTwo(moves);
  }
  
  function diagonalOne(moves: Players[]) {
    if (!moves[0] || !moves[4] || !moves[8]) {
      return false;
    }
    if (moves[0] === moves[4] && moves[0]=== moves[8]) {
      return true;
    }
    return false;
  }
  
  function diagonalTwo(moves: Players[]) {
    if (!moves[2] || !moves[4] || !moves[6]) {
      return false;
    }
    if (moves[2] === moves[4] && moves[2] === moves[6]) {
      return true;
    }
    return false;
  }

  function cols(moves: Players[]) {
    return colOne(moves) || colTwo(moves) || colThree(moves);
  }

  function colOne(moves: Players[]) {
    if (!moves[0] || !moves[3] || !moves[6]) {
      return false;
    }
    if (moves[0] === moves[3] && moves[0]=== moves[6]) {
      return true;
    }
    return false;
  }
  
  function colTwo(moves: Players[]) {
    if (!moves[1] || !moves[4] || !moves[7]) {
      return false;
    }
    if (moves[1] === moves[4] && moves[1]=== moves[7]) {
      return true;
    }
    return false;
  }
  
  function colThree(moves: Players[]) {
    if (!moves[2] || !moves[5] || !moves[8]) {
      return false;
    }
    if (moves[2] === moves[5] && moves[2]=== moves[8]) {
      return true;
    }
    return false;
  }
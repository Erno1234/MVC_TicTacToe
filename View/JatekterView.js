import TicTacView from "./TicTacView.js";

class JatekterView {
    constructor(szuloElem) {
        for (let index = 0; index < 9; index++) {
            new TicTacView(szuloElem, index);
            
        }
    }
  }
  export default JatekterView;
class TicTacView {
    #index;
    #allapot;
    constructor(szuloElem, index) {
      this.szuloElem = szuloElem;
      this.#index=index
      this.#allapot=true;
      this.#htmlLetrehozasas();
      this.elem = $(".elem:last-child")
      this.pElem = this.elem.children("p");
      this.elem.on("click", () => {
        if(this.#allapot){
            this.#esemenyLetrehozas("csere");
            this.#allapot = false;
        }
      });
    }
    setP_Elem(ertek){
        this.pElem.html(ertek);
    }
    #esemenyLetrehozas(esemenynev) {
      const esemenyem = new CustomEvent(esemenynev, {detail:this});
      window.dispatchEvent(esemenyem);
    }
    #htmlLetrehozasas() {
      let txt = "";
        txt += `<div class="elem"><p></p></div>`;
      this.szuloElem.append(txt);
    }
    getIndex(){
        return this.#index;
    }
  }
  export default TicTacView;
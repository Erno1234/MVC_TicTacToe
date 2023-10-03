class Model {
  #allapot;
  #list = [];
  #lepes;
  constructor() {
    this.#allapot = "X";
    this.#list = [".", ".", ".", ".", ".", ".", ".", ".", "."];
    this.#lepes = 0;
  }
  setAllapot(index) {
    this.#lepes++;
    if (this.#allapot === "O") {
      this.#allapot = "X";
    } else {
      this.#allapot = "O";
    }
    this.#list[index] = this.#allapot;
    console.log(this.#list);
  }
  getErtek() {
    return this.#allapot;
  }
  vegeVanE() {
    let eredmeny = this.#vizszintesEll();
    if(eredmeny.indexOf("XXX")>-1){
        return "X nyert"
    }else if(eredmeny.indexOf("OOO")>-1){
        return "O nyert"
    }else if(this.#lepes >= 9){
        return "Döntetlen"
    }
    
    if (this.#lepes >= 9) {
      return "vége";
    } else {
      return "nincs vége";
    }
  }
  #vizszintesEll(){
    let vizszint = "";
    for (let index = 0; index < this.#list.length; index++) {
        vizszint+=this.#list[index];
        if(index % 3== 2){
            vizszint+="@";
        }
    }
    console.log(vizszint);
    return vizszint;
  }
}
export default Model;

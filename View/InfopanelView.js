class InfopanelView {
    #eredmeny
  constructor(szuloElem) {
    this.szuloElem = szuloElem;
    this.#htmlLetrehozasas();
  }

  setEredmeny(eredmeny){
    this.#eredmeny= eredmeny;
    console.log(this.#eredmeny)
    this.#htmlLetrehozasas();
  }

  #htmlLetrehozasas() {
    let txt = "";
    txt += `<table>
        <tr>}
            <th>Lépés</th>
            <th>Végeredmény</th>
        </tr>
        <tr>
             <td>Alfreds Futterkiste</td>
             <td>${this.#eredmeny}</td>
        </tr>
     </table>`;
    this.szuloElem.html(txt);
  }
}
export default InfopanelView;

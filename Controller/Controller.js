import Model from "../Model/Model.js";
import JatekterView from "../View/JatekterView.js";
class Controller {
  constructor() {
    const MODEL = new Model();
    const JATEKTER = new JatekterView($(".jatekter"));
    
    $(window).on("csere", (event) => {
        MODEL.setAllapot(event.detail.getIndex());
        event.detail.setP_Elem(MODEL.getErtek());
        console.log(MODEL.vegeVanE())
    });
  }
}
export default Controller;

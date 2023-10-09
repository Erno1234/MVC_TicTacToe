import Model from "../Model/Model.js";
import InfopanelView from "../View/InfopanelView.js";
import JatekterView from "../View/JatekterView.js";
class Controller {
  constructor() {
    const MODEL = new Model();
    const JATEKTER = new JatekterView($(".jatekter"));
    const INFOPANEL = new InfopanelView($(".infopanel"));
    
    $(window).on("csere", (event) => {
        MODEL.setAllapot(event.detail.getIndex());
        event.detail.setP_Elem(MODEL.getErtek());
        console.log(MODEL.vegeVanE())
        INFOPANEL.setEredmeny(MODEL.vegeVanE());

    });
  }
}
export default Controller;

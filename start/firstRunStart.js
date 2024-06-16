import { changeBgTextColor } from "../helpers/changeBgTextColorHelper.js";
import { colorHex } from "../utils/colorHex.js";
import { agoChoice } from "../utils/agoChoice.js";
import { frameChoice } from "../utils/frameChoice.js";
import { tutor } from "../utils/tutor.js";

//first run
(()=>{
    //agoChoice's first run = FIFO
    changeBgTextColor(agoChoice.FIFOChoice,colorHex.pink,colorHex.white);

    //frameChoice's first run = frameFour
    changeBgTextColor(frameChoice.frameFour,colorHex.pink,colorHex.white)

    //tutor first run
    document.getElementById('tutor').innerHTML = tutor.howToUseThisWebSite;

})()
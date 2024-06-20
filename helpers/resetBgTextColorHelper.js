import { changeBgTextColor } from "./changeBgTextColorHelper.js";
import { colorHex } from "../utils/colorHex.js";
import { agoChoice } from "../utils/agoChoice.js";
import { frameChoice } from "../utils/frameChoice.js";

export const resetBgTextColor = (DOM,method) => {
    if(method==1){
        switch (DOM) {
            case agoChoice.FIFOChoice:
                changeBgTextColor(agoChoice.LRUChoice,colorHex.white,colorHex.black);
                changeBgTextColor(agoChoice.OPTIMALChoice,colorHex.white,colorHex.black);
                changeBgTextColor(agoChoice.CLOCKChoice,colorHex.white,colorHex.black);
                break;
            case agoChoice.LRUChoice:
                changeBgTextColor(agoChoice.FIFOChoice,colorHex.white,colorHex.black);
                changeBgTextColor(agoChoice.OPTIMALChoice,colorHex.white,colorHex.black);
                changeBgTextColor(agoChoice.CLOCKChoice,colorHex.white,colorHex.black);
                break;
            case agoChoice.OPTIMALChoice:
                changeBgTextColor(agoChoice.FIFOChoice,colorHex.white,colorHex.black);
                changeBgTextColor(agoChoice.LRUChoice,colorHex.white,colorHex.black);
                changeBgTextColor(agoChoice.CLOCKChoice,colorHex.white,colorHex.black);
                break;
            case agoChoice.CLOCKChoice:
                changeBgTextColor(agoChoice.FIFOChoice,colorHex.white,colorHex.black);
                changeBgTextColor(agoChoice.LRUChoice,colorHex.white,colorHex.black);
                changeBgTextColor(agoChoice.OPTIMALChoice,colorHex.white,colorHex.black);
                break;
            case frameChoice.frameOne:
                changeBgTextColor(frameChoice.frameTwo,colorHex.white,colorHex.black);
                changeBgTextColor(frameChoice.frameThree,colorHex.white,colorHex.black);
                changeBgTextColor(frameChoice.frameFour,colorHex.white,colorHex.black);
                changeBgTextColor(frameChoice.frameFive,colorHex.white,colorHex.black);
                break;
            case frameChoice.frameTwo:
                changeBgTextColor(frameChoice.frameOne,colorHex.white,colorHex.black);
                changeBgTextColor(frameChoice.frameThree,colorHex.white,colorHex.black);
                changeBgTextColor(frameChoice.frameFour,colorHex.white,colorHex.black);
                changeBgTextColor(frameChoice.frameFive,colorHex.white,colorHex.black);
                break;
            case frameChoice.frameThree:
                changeBgTextColor(frameChoice.frameOne,colorHex.white,colorHex.black);
                changeBgTextColor(frameChoice.frameTwo,colorHex.white,colorHex.black);
                changeBgTextColor(frameChoice.frameFour,colorHex.white,colorHex.black);
                changeBgTextColor(frameChoice.frameFive,colorHex.white,colorHex.black);
                break;
            case frameChoice.frameFour:
                changeBgTextColor(frameChoice.frameOne,colorHex.white,colorHex.black);
                changeBgTextColor(frameChoice.frameTwo,colorHex.white,colorHex.black);
                changeBgTextColor(frameChoice.frameThree,colorHex.white,colorHex.black);
                changeBgTextColor(frameChoice.frameFive,colorHex.white,colorHex.black);
                break;
            case frameChoice.frameFive:
                changeBgTextColor(frameChoice.frameOne,colorHex.white,colorHex.black);
                changeBgTextColor(frameChoice.frameTwo,colorHex.white,colorHex.black);
                changeBgTextColor(frameChoice.frameThree,colorHex.white,colorHex.black);
                changeBgTextColor(frameChoice.frameFour,colorHex.white,colorHex.black);
                break;
            case document.getElementById('customFrame'):
                changeBgTextColor(frameChoice.frameOne,colorHex.white,colorHex.black);
                changeBgTextColor(frameChoice.frameTwo,colorHex.white,colorHex.black);
                changeBgTextColor(frameChoice.frameThree,colorHex.white,colorHex.black);
                changeBgTextColor(frameChoice.frameFour,colorHex.white,colorHex.black);
                changeBgTextColor(frameChoice.frameFive,colorHex.white,colorHex.black);
                break;
            default:
                break;
        }
    }else{
        changeBgTextColor(DOM,colorHex.white,colorHex.black);
    }
    
}
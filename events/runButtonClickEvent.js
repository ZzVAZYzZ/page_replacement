import { runFIFO, runCLOCK, runLRU, runOPTIMAL } from "../jobs/runJob.js";
import { getAlgorithm } from "./agoClickEvent.js";
import { getFrameChoice } from "./frameChooseEvent.js";
import { isOnlyDigits } from "../validations/checkDigits.js";
import { tutor } from "../utils/tutor.js";
import { firstTitleColumn } from "../components/pageFramesGenerator.js";
import { firstClockRender } from "../components/clockFramesGenerator.js";
import { getChoice } from "./frameChooseEvent.js";


const runButton = document.getElementById("runButton");

const validationModal = document.getElementById("validationModal");

const customFrame = document.getElementById("customFrame");

let numberArray ;




 
runButton.addEventListener("click", () => {
  const inputValue = document.getElementById("referenceDetail").value.trim();
  let checkDigits = isOnlyDigits(inputValue);
  //split to array but still string
  const numbers = inputValue.split(" ").filter(Boolean);
  //covert string to number
  const parsedNumbers = numbers.map(Number);
  numberArray = parsedNumbers;
  //validate custom Frame
  const customCheckDigits = isOnlyDigits(customFrame.value);

  
  let choose = getChoice();


  switch (choose) {
    case 'frameChoice':
      if (checkDigits) {
        firstTitleColumn(getFrameChoice());
        document.getElementById("tutor").innerHTML = "";
        switch (getAlgorithm()) {
          case 1:
            document.getElementById("clockContainer").style.display = "none";
            runFIFO(getFrameChoice(), parsedNumbers);
            break;
          case 2:
            document.getElementById("clockContainer").style.display = "none";
            runLRU(getFrameChoice(), parsedNumbers, numberArray);
            break;
          case 3:
            document.getElementById("clockContainer").style.display = "none";
            runOPTIMAL(getFrameChoice(), parsedNumbers, numberArray);
            break;
          case 4:
            firstClockRender(getFrameChoice());
            runCLOCK(getFrameChoice(), parsedNumbers);
            break;
          default:
            break;
        }
      } else {
        validationModal.style.display = "block";
        document.getElementById("referenceDetail").value = "";
        document.getElementById("tutor").innerHTML = tutor.howToUseThisWebSite;
        document.getElementById("tableContainer").style.display = "none";
        document.getElementById("clockContainer").style.display = "none";
        document.getElementById("pageFault").innerHTML = "";
      }
      break;
    case 'customChoice':
      if (customCheckDigits&&checkDigits) {
        firstTitleColumn(getFrameChoice());
        document.getElementById("tutor").innerHTML = "";
        switch (getAlgorithm()) {
          case 1:
            document.getElementById("clockContainer").style.display = "none";
            runFIFO(getFrameChoice(), parsedNumbers, numberArray);
            break;
          case 2:
            document.getElementById("clockContainer").style.display = "none";
            runLRU(getFrameChoice(), parsedNumbers);
            break;
          case 3:
            document.getElementById("clockContainer").style.display = "none";
            runOPTIMAL(getFrameChoice(), parsedNumbers, numberArray);
            break;
          case 4:
            firstClockRender(getFrameChoice());
            runCLOCK(getFrameChoice(), parsedNumbers);
            break;
          default:
            break;
        }
      } else {
        
        validationModal.style.display = "block";
        document.getElementById("referenceDetail").value = "";
        document.getElementById("tutor").innerHTML = tutor.howToUseThisWebSite;
        document.getElementById("tableContainer").style.display = "none";
        document.getElementById("clockContainer").style.display = "none";
        document.getElementById("pageFault").innerHTML = "";
      }
      break;

    default:
      break;
  }
});

import { runFIFO, runCLOCK, runLRU, runOPTIMAL } from '../jobs/runJob.js';
import { getAlgorithm } from './agoClickEvent.js';
import { getFrameChoice } from './frameChooseEvent.js';
import { isOnlyDigits } from '../validations/checkDigits.js';
import { tutor } from '../utils/tutor.js'
import { firstTitleColumn } from '../components/pageFramesGenerator.js';
const runButton = document.getElementById('runButton');

const validationModal = document.getElementById('validationModal');

runButton.addEventListener('click', ()=>{
    const inputValue = document.getElementById('referenceDetail').value;
    const checkDigits = isOnlyDigits(inputValue.trim());
    firstTitleColumn(getFrameChoice());
    if(checkDigits){
        document.getElementById('tutor').innerHTML = "";
        switch (getAlgorithm()) {
            case 1:
                runFIFO(getFrameChoice(),inputValue);
                break;
            case 2:
                runLRU(getFrameChoice(),inputValue);
                break;
            case 3:
                runOPTIMAL(getFrameChoice(),inputValue);
                break;
            case 4:
                runCLOCK(getFrameChoice(),inputValue);
                break;
            default:
                break;
        }
    }else{
        validationModal.style.display = 'block';
        document.getElementById('referenceDetail').value = '';
        document.getElementById('tutor').innerHTML = tutor.howToUseThisWebSite;
    }
});

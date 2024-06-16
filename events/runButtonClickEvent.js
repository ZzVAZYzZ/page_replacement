import { runFIFO, runCLOCK, runLRU, runOPTIMAL } from '../jobs/runJob.js';
import { getAlgorithm } from './agoClickEvent.js';
import { getFrameChoice } from './frameChooseEvent.js';

const runButton = document.getElementById('runButton');

runButton.addEventListener('click',()=>{
    switch (getAlgorithm()) {
        case 1:
            runFIFO(getFrameChoice());
            break;
        case 2:
            runLRU(getFrameChoice());
            break;
        case 3:
            runOPTIMAL(getFrameChoice());
            break;
        case 4:
            runCLOCK(getFrameChoice());
            break;
        default:
            break;
    }
    
});

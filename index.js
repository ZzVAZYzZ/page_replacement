import FIFOPageReplacement from './classes/FIFOPageReplacement.js';
import LRUPageReplacement from './classes/LRUPageReplacement.js';
import OPTIMALPageReplacement from './classes/OPTIMALPageReplacement.js';

const frameChoice = 4;

window.runFIFO = () => {
    const inputValue = document.getElementById('referenceDetail').value.trim();
    const pages = inputValue.split(' ').map(Number);
    const result = document.getElementById('result');
    result.innerHTML = "";
    const fifo = new FIFOPageReplacement(frameChoice,result);

    pages.forEach(page => fifo.accessPage(page));
    
    const totalPageFaults = fifo.getPageFaults();

    result.innerHTML += `Total page faults: ${totalPageFaults}`;
}

window.runLRU = () => {
    const inputValue = document.getElementById('referenceDetail').value.trim();
    const pages = inputValue.split(' ').map(Number);
    const result = document.getElementById('result');
    result.innerHTML = "";
    const lru = new LRUPageReplacement(frameChoice,result);
    pages.forEach(page => lru.accessPage(page));
    const totalPageFaults = lru.getPageFaults();
    result.innerHTML += `Total page faults: ${totalPageFaults}`;
}

window.runOPTIMAL = () => {
    const inputValue = document.getElementById('referenceDetail').value.trim();
    const pages = inputValue.split(' ').map(Number);
    const result = document.getElementById('result');
    result.innerHTML = "";
    const optimal = new OPTIMALPageReplacement(frameChoice,result);
    pages.forEach(page => optimal.accessPage(page));
    const totalPageFaults = optimal.getPageFaults();
    result.innerHTML += `Total page faults: ${totalPageFaults}`;
}

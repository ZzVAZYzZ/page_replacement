import FIFOPageReplacement from './classes/FIFOPageReplacement.js';

window.runFIFO = () => {
    const inputValue = document.getElementById('referenceDetail').value.trim();
    const pages = inputValue.split(' ').map(Number);
    const result = document.getElementById('result');

    const fifo = new FIFOPageReplacement(3,result);

    pages.forEach(page => fifo.accessPage(page));
    
    const totalPageFaults = fifo.getPageFaults();

    result.innerHTML = `Total page faults: ${totalPageFaults}`;
}



export default class FIFOPageReplacement {
    constructor(frameSize, resultElement) {
        this.frameSize = frameSize;
        this.frames = [];
        this.pageFaults = 0;
        this.resultElement = resultElement;
    }

    accessPage(page) {
        if (!this.frames.includes(page)) {
            // Page fault
            this.pageFaults++;
            if (this.frames.length < this.frameSize) {
                // Add the new page if there is space
                this.frames.push(page);
            } else {
                // Replace the oldest page
                this.frames.shift();
                this.frames.push(page);
            }
        }
        // Update result in DOM
        this.updateResult();
    }

    updateResult() {
        // Prepare the content to append
        const framesContent = this.frames.join(', ');
        const pageFaultsContent = `Total page faults: ${this.pageFaults}`;

        // Create HTML content to append
        const contentToAppend = `
            <p>Frames: [${framesContent}]</p>
        `;

        // Append content to resultElement
        this.resultElement.insertAdjacentHTML('beforeend', contentToAppend);
    }

    getPageFaults() {
        return this.pageFaults;
    }
}

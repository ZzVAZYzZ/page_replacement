export default class FIFOPageReplacement {
    constructor(frameSize, resultElement) {
        this.frameSize = frameSize;
        this.frames = [];
        this.pageFaults = 0;
        this.resultElement = resultElement;
        this.autoBot = 0;
    }   

    accessPage(page) {
        const pageExists = this.frames.some(item => item.page === page);
        if (!pageExists) {
            
            // Page fault
            this.pageFaults++;
            if (this.frames.length < this.frameSize) {
                // Add the new page if there is space
                this.frames.push(page);
            } else {
                // Replace the oldest page
                this.frames[this.autoBot] = page;
            }
            this.runAutoBout();
        }
        // Update result in DOM
        this.updateResult();
    }

    runAutoBout(){
        this.autoBot++;
        if(this.autoBot>=this.frameSize){
            this.autoBot = 0;
        }
    }

    updateResult() {
        // Prepare the content to append
        const framesContent = this.frames.join(', ');
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

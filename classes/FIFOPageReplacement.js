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
        //reset pinky
        this.resetPinky();
        if (!pageExists) {

            // Page fault
            this.pageFaults++;
            if (this.frames.length < this.frameSize) {
                // Add the new page if there is space
                this.frames.push({
                    page: page,
                    pinky: true
                });
            } else {
                // Replace the oldest page
                this.frames[this.autoBot].page = page;
                this.frames[this.autoBot].pinky = true;
            }
            this.runAutoBot();
        }
        // Update result in DOM
        this.updateResult();
    }

    // resetPinky use to reset color when render, if pinky = true when render background color will be pink and otherwise backgroud color is white
    resetPinky(){
        this.frames.forEach( item => {
            item.pinky = false;
        })
    }

    runAutoBot(){
        this.autoBot++;
        //reset autoBot
        if(this.autoBot>=this.frameSize){
            this.autoBot = 0;
        }
    }

    updateResult() {
        // Prepare the content to append
        const framesContent = this.frames.map(item => `${item.page}:${item.pinky}`).join(', ');
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

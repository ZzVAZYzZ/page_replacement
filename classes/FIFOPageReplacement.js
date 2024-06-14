export default class FIFOPageReplacement {
    constructor(frameSize) {
        this.frameSize = frameSize;
        this.frames = [];
        this.pageFaults = 0;
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
        // For debug: Print the current state of frames
        console.log(this.frames);
    }

    getPageFaults() {
        return this.pageFaults;
    }
}

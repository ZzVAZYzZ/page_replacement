import { addOnColumn,resetReferenceCount } from "../components/pageFramesGenerator.js";
import { getNumberArrayI } from "../jobs/runJob.js";

export default class OPTIMALPageReplacement {
    constructor(frameSize, resultElement) {
        this.frameSize = frameSize;
        this.frames = [];
        this.pageFaults = 0;
        this.resultElement = resultElement;
        this.countOfPageIndex = 1;
        this.numberArray = getNumberArrayI();
        this.newIndex = 0;
        this.count = 1;
        this.infinity = 100000000;
    }

    accessPageOPTIMAL(page) {
        const pageExists = this.frames.some(item => item.page === page);
        
        //reset pinky
        this.resetPinky()
        if (!pageExists) {
            // Page fault
            this.pageFaults++;
            if (this.frames.length < this.frameSize) {
                const predictedIndex = this.predictIndex(this.numberArray,page);
                console.log(`page: ${page}, index:${this.count-1}, predictedIndex: ${predictedIndex}`);
                // console.log(predictedIndex);
                // Add the new page if there is space
                this.frames.push({
                    page: page,
                    countOfPageIndex: predictedIndex,
                    pinky: true
                });
                this.countOfPageIndex++;
            } else {
                const predictedIndex = this.predictIndex(this.numberArray,page);
                console.log(`page: ${page}, index:${this.count-1}, predictedIndex: ${predictedIndex}`);
                
                if(this.checkInfinityArray()){
                    this.frames.splice(this.frameSize-1, 1, {
                        page: page,
                        countOfPageIndex: predictedIndex,
                        pinky: true,
                    });
                    this.countOfPageIndex++;
                }else{
                    // Replace the least recently used page (OPTIMAL logic in function findOPTIMALPage)
                    const optimalPageIndex = this.findOptimalPage();
                    this.frames.splice(optimalPageIndex, 1, {
                        page: page,
                        countOfPageIndex: predictedIndex,
                        pinky: true,
                    });
                    this.countOfPageIndex++;
                }
                
            }
        } else {
            const predictedIndex = this.predictIndex(this.numberArray,page);
            console.log(`page: ${page}, index:${this.count-1}, predictedIndex: ${predictedIndex}`);
            // Page already exists, update its countOfPageIndex
            const pageIndex = this.frames.findIndex(item => item.page === page);
            this.frames[pageIndex].countOfPageIndex = predictedIndex;
            this.countOfPageIndex++;
        }
    
        // Update result in DOM
        this.updateResult(page);
        resetReferenceCount();
    }
    
    //numberArray = [1, 2, 3, 4, 6, 3 ,2 , 7, 1]
    //page = 1
    //predictIndex(numberArray,page) = 8;

    predictIndex(numberArray,page){
        for (let index = this.count; index < numberArray.length; index++) {
            if (numberArray[index]==page) {
                // console.log(`page: ${page}, index:${this.count}, predictedIndex:${index+1}`);
                this.count++;
                return index+1;
            }
        }
        this.count++;
        // console.log(`page: ${page}, index:${this.count-1}, predictedIndex: infinity`);
        return this.infinity++;
    }

    checkInfinityArray(){
        let count = 0
        for (let index = 0; index < this.frames.length; index++) {
            console.log(this.frames[index].countOfPageIndex);
            if(this.frames[index].countOfPageIndex > 100000){
                count++;   
            }
            
        }
        console.log(count);
        if (count >=2) {
            return true
        }
        return false
    }

    findOptimalPage() {
        let oldestPageIndex = 0;
        let oldestPageCount = this.frames[0].countOfPageIndex;
        //swap oldest CountOfPageIndex
        this.frames.forEach((item, index) => {
            if (item.countOfPageIndex > oldestPageCount) {
                oldestPageIndex = index;
                oldestPageCount = item.countOfPageIndex;
            }
        });
    
        return oldestPageIndex;
    }

    // resetPinky use to reset color when render, if pinky = true when render background color will be pink and otherwise backgroud color is white
    resetPinky(){
        this.frames.forEach( item => {
            item.pinky = false;
        })
    }

    updateResult(page) {
        addOnColumn(page,this.frameSize,this.frames);
    }
    

    getPageFaults() {
        return this.pageFaults;
    }
}

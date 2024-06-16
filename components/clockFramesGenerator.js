
const clockContainer = document.getElementById('clockContainer');

const clockCell = document.createElement('div');
clockCell.classList.add('clock-cell-zone');

const titleDiv = document.createElement('div');
const clockPage = document.createElement('div');
clockPage.classList.add('clock-table');

//When click Run button, and excute firstTitleColumn one time
export const firstClockRender = (framsize) => {
    document.getElementById('clockContainer').style.display='block'
    clockCell.replaceChildren();
    titleDiv.replaceChildren();
    clockPage.replaceChildren();
    
    titleDiv.innerHTML = 'STATUS'
    titleDiv.classList.add('clock-table-title');
    clockPage.appendChild(titleDiv);


    //first column
    const firstColumn = document.createElement('div');
    firstColumn.classList.add('first-clock-column');
    for (let index = 0; index < framsize; index++) {
        const firstColumnDiv = document.createElement('div');
        firstColumnDiv.classList.add('first-clock-div');
        firstColumn.appendChild(firstColumnDiv);
    }

    clockCell.appendChild(firstColumn);

    

    clockPage.appendChild(clockCell);
    
    clockContainer.appendChild(clockPage);
    
}

const clock1 = [0];
const clock2 = [0,0];
const clock3 = [0,0,1];
const clock4 = [0,0,1,1];

const checkClockUndefined = (value) => {
    if (value === undefined) {
        value = '0';
    }
    return value;
}

//auto add column when updateresult in classes execute
export const addOnClockColumn = (pinky, framsize, clockValue) => {
    const autoColumn = document.createElement('div');
    autoColumn.classList.add('clock-auto-column');

    for (let index = 0; index < framsize; index++) {
        const autoDiv = document.createElement('div');
        let clock = checkClockUndefined(clockValue[index]);
        autoDiv.innerHTML = clock;
        autoDiv.classList.add('clock-auto-div');
        if (index + 1 == pinky) {
            autoDiv.classList.add('pinky');
        }
        autoColumn.appendChild(autoDiv);
    }

    clockCell.appendChild(autoColumn);
}

//test
// addOnClockColumn(2,4,clock1);
// addOnClockColumn(3,4,clock2);
// addOnClockColumn(1,4,clock3);
// addOnClockColumn(4,4,clock4);
/*
    #clockContainer{
        .clock-table{
            .clock-table-title{
                h1{

                }
            }
            .clock-cell-zone{
                firstColumn{
                
                }

                autoColumn{
                
                }
                ...
                autoColumn{
                
                }
                ...
                autoColumn{
                
                }
                ...
            }
        }
    }  
*/
//To access html elements
const body = document.body;
let numpad = document.querySelector(".numpad");

//Initializations
let rows = 4;
let columns = 4;

const buttons = [
                 "C", "/", "*", "+",
                 "7", "8", "9", "-",
                 "4", "5", "6", "=",
                 "1","2", "3", "0",
                 ];

buttonCycle = 0;

function CreateNumpad(rows, columns)
{
    for(let j = 0; j<rows; j++)
    {
        const row = document.createElement("div");
        row.classList.add("row");
        row.setAttribute('style', 'display:flex; gap:5px;');

        for(let i = 0; i < columns; i ++)
        {
            const button = document.createElement("button");
            button.classList.add("button")
            button.classList.add(buttons[buttonCycle]);

            if(buttonCycle===0)
            {
                button.setAttribute('style', 'border: 1px solid orangered; height:50px; width: 50px; background-color: burlywood; box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;');
                
            }
            else if ((buttonCycle>=1 && buttonCycle <= 3) || buttonCycle === 7 || buttonCycle === 11)
            {
                button.setAttribute('style', 'border: 1px solid orangered; height:50px; width: 50px; background-color: darkgoldenrod; box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;');
            }
            else{
                button.setAttribute('style', 'border: 1px solid orangered; height:50px; width: 50px; background-color: yellowgreen; box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;');
            }
            //Update DOM

            row.appendChild(button);
            numpad.appendChild(row);
            button.appendChild(document.createTextNode(buttons[buttonCycle]));
            buttonCycle+=1;



        }
    }

    

}


CreateNumpad(rows, columns);
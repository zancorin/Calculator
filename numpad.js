//To access html elements
const body = document.body;
let numpad = document.querySelector(".numpad");

//Initializations
let rows = 6;
let columns = 4;

const buttons = ["toy", "toy", "C", "/",
                 "7", "8", "9", "*",
                 "4", "5", "6", "+",
                 "1","2", "3", "-",
                 "toy", "0", "toy", "="];

function CreateNumpad(rows, columns)
{
    for(let j = 0; j<rows; j++)
    {
        const row = document.createElement("div");
        row.classList.add("row");

        for(let i = 0; i < columns; i ++)
        {
            const button = document.createElement("button");
            button.classList.add("button")
            button.setAttribute('style', `border: 1px solid red; height:50px; width:50px;`);


            //Update DOM
            row.appendChild(button);
            numpad.appendChild(row);



        }
    }

    

}


CreateNumpad(5,4);
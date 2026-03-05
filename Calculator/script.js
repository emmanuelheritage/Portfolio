const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

//Function for number display
buttons.forEach(button =>{
    button.addEventListener("click", () =>{
        const value = button.textContent;

        //Function to clear display
        if (value === "C")
        {
            display.textContent = "";
        }
        //Function that powers the delete button
        else if (value === "DEL")
        {
            display.textContent = display.textContent.slice(0,-1);
        }
        //Function that powers the = sign
        else if (value === "=")
        {
            try{
                display.textContent = eval(display.textContent);
            }
            catch{
                display.textContent = "Error";
            }
        }
        //Function that powers each number buttons
        else
        {
            display.textContent += value;
        }
    });
});

//Keyboard Support
document.addEventListener("keydown", (event) =>{
    const key = event.key;

    if (!isNaN(key)||"+=-/.*0".includes(key))
    {
        display.textContent += key;
    }
    else if (key === "Enter")
    {
        try{
            display.textContent = eval(display.textContent);
        }
        catch{
            display.textContent = "Error";
        }
    }
    else if (key === "Backspace"){
        display.textContent = display.textContent.slice(0,-1);
    }
    else if (key === "Escape"){
        display.textContent = "";
    }
});
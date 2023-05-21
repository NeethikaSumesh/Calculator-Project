function buttonclick(val)
{
    document.getElementById("screen").value=document.getElementById("screen").value+val;
}
function clearDisplay()
{
    document.getElementById("screen").value=""
}
function equalClick()
{
    var text=document.getElementById("screen").value
    var result = eval(text) //values inside text will be added and store in the result variable
    document.getElementById("screen").value=result //result is displyed
}


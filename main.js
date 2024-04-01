function display(x)
{
    document.getElementById('screen').value +=x
}
function clr()
{
    document.getElementById('screen').value=" "
}
function solve()
{
 let x =document.getElementById('screen').value 
 let y = eval(x)
 document.getElementById('screen').value=y
}

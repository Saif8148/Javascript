// function usd()
// {
//     Number=(document.getElementById('currency').value)
// }
// function inr()
// {
//     Number=(document.getElementById('currency').value)
// }
// function eur()
// {
//     Number=(document.getElementById('currency').value)
// }
function convert()
{
    let currency =Number(document.getElementById("currency").value)
    let opt1 = document.getElementById("opt1").value 
    let opt2 = document.getElementById("opt2").value 
    let usdtousd = currency
    let usdtoinr = currency*83
    let usdtoeuro = currency*0.92
    let inrtousd = currency*0.011

    if(opt1=="USD")
    {
        if(opt2=="USD")
        {
            document.getElementById('result').value= usdtousd
        }
        else if(opt2=="INR")
        {
            document.getElementById('result').value= usdtoinr
        }
        else if(opt2=="EUR")
        {
            document.getElementById('result').value= usdtoeuro
        }
    }
    else if (opt1=="INR") {
        if (opt2=="USD") 
        {
            document.getElementById('result').value= inrtousd
          
        }
    }

    }

    

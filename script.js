function compute(){

        var amount = Number(document.getElementById("amount").value);
        var ir = Number(document.getElementById("rate").value);
        var select = document.getElementById("years");
        var years = Number(select.options[select.selectedIndex].value);
        var thisYear = new Date().getFullYear();

    if(amount <= 0 || "" == document.getElementById("amount").value){
        alert("Enter a positive Number")
        document.getElementById("amount").focus();
        }else{

    document.getElementById("damount").innerHTML = amount;
    document.getElementById("drate").innerHTML = rate;
    document.getElementById("dyears").innerHTML = years;
    document.getElementById("dresult").innerHTML = result;
    document.getElementById("resText").style.display = "block";
        }
}

        
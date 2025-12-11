function replaceAll(){
    let orig_str = document.getElementById("txtInput").value;
        
    let newStr = orig_str.replaceAll(" ","");
    document.getElementById("txtResult").innerHTML = newStr;
}

let text = "";

function loadText() {
    text = document.getElementById("txtInput1").value;
    document.getElementById("txtResult1").innerHTML = text;
}
        
function searchWord(){
    let word = document.getElementById("txtInput2").value;
    
    if (text.includes(word) && word !== "") {
        document.getElementById("txtResult2").innerHTML = "Found!";
    
    } else {
        document.getElementById("txtResult2").innerHTML = "Not Found!";
    }

    }
    

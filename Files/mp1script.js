function replaceAll() {
    let str1 = document.getElementById("txtInput").value;
    console.log(str1);
    // Logic to replace all occurrences of ' ' (space) with '' (no space) 

    let newStr = str1.replaceAll(' ','');
    document.getElementById("txtResult").innerHTML = newStr;

}


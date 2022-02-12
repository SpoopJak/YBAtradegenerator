function tradegen(){
    let offer = document.getElementById("Offer").value;
    let offertwo = document.getElementById("offerr").value;
    let lf = document.getElementById("lf").value;
    var output = document.getElementById("output");
    if(offertwo == "null"){
    
     output.InnerHTML = "*trading:*" + " " + "**" + offer + "**";
        
    } else if(offertwo !== "null"){
        output.innerHTML = "*trading:*" + " " + "**" + offer + ", " + offertwo + "**";
            
    }


    if(lf !== ""){
        output.textContent += " *LF:* " + "**" + lf + "**";
    }
}
let myCarBands=["bmw","mercedes","rolls royce","lamborgihini","ferrari","bentley"];

    let promptBand=prompt("What band do you like?");
    
    
    
    if(myCarBands.indexOf(promptBand.toLowerCase()) === -1)
    {
    
        alert("YEAH I LOVE THEM");
    }
    
    else
    {
    
        alert("They're Pretty Lame");
    }

function distanceFromHqInBlocks(a){ if(a >42){return a - 42
}
else {return 42 -a }


}
let distanceFromHqInFeet =(a) =>{ return distanceFromHqInBlocks(a) * 264

}



function distanceTravelledInFeet(start,destination){
    if(start<destination){
        return (destination - start) *264
    }
    else{return (start-destination) *  264}
}

function calculatesFarePrice(start, destination){
    let distance = distanceTravelledInFeet(start,destination)
    if(distance <= 400){return 0}

    else if (distance>400 && distance < 2000){
        return (distance - 400) * 0.02
    }
    else if(distance>2000 && distance < 2500){return 25}
    else
    {return ("cannot travel that far")}
}
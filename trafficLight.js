let color = "red";
let trafficLightChecker;

switch (color){
    case 'red' :
        trafficLightChecker = "stop";
        break;
    case 'yellow' :
        trafficLightChecker = "ready";
        break;
     case 'green' :
        trafficLightChecker = "Go!!!";
        break;            
    default :
    "Invalid Color";
    break;
}

console.log(color +"means:" + trafficLightChecker);
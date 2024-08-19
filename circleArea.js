const  Circumfrence = (radius) =>{
    const Pi = Math.PI;
    return Pi * radius * radius;
};

let AREA = Circumfrence(7);
console.log("AREA: " + AREA);
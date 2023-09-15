//your code here
let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];
let modifiedArr = [];
let mp = {};
for ( let i = 0; i < touristSpots.length; i++ ){
    let str = touristSpots[i].replace(/\bThe\b/, "").trim();
    modifiedArr.push(str);
    mp[str] = touristSpots[i];
}
modifiedArr.sort();
for ( let i = 0; i < modifiedArr.length; i++ ){
    touristSpots[i] = mp[modifiedArr[i]];
}
console.log(touristSpots);
const HashMap = require('./2-hash');

 function main()
{
// 1. )  

    const lotr = new HashMap;
    lotr.MAX_LOAD_RATIO = 0.5;
    lotr.SIZE_RATIO = 3
    let inserts = [{"Hobbit": "Bilbo"}, {"Hobbit": "Frodo"},
    {"Wizard": "Gandolf"}, {"Human": "Aragorn"}, {"Elf": "Legolas"}, {"Maiar": "The Necromancer"},
    {"Maiar": "Sauron"}, {"RingBearer": "Gollum"}, {"LadyOfLight": "Galadriel"}, {"HalfElven": "Arwen"},
    {"Ent": "Treebeard"}]
for (let i = 0; i < inserts.length; i++){
    for(let [key, value] of Object.entries(inserts[i])){
        lotr.set(key, value);
    }
}
console.log(lotr)
console.log(lotr.length)

console.log(lotr.get('Maire'))
console.log(lotr.get('Hobbit'))
console.log(lotr._capacity);


}
/* 2.) 
Hello world
Discrepincy as 20 has already been taken: undefined

after running code: It would make since that str3 has 10 as its value and would therefor print 10
*/

WhatDoesThisDo = () => {
    let str1 = 'Hello World.';
    let str2 = 'Hello World.';
    let map1 = new HashMap();
    map1.set(str1,10);
    map1.set(str2,20);
    let map2 = new HashMap();
    let str3 = str1;
    let str4 = str2;
    map2.set(str3,20);
    map2.set(str4,10);

    console.log(map1.get(str1));
    console.log(map2.get(str3));
}


main();
WhatDoesThisDo();
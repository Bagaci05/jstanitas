//if statement
//ha az állítás igaz -> akkor végrehajtja a kódot
if(true) { //<-- állítás
           //<-- VÉgrehajtásra kerülő kód
}


let today =  new Date();

if(today.getHours<10){
    console.log("Jóreggeét");
}else if(today.getHours<20){
    console.log("Jónapot");
}else{
    console.log("Jóestét");
}



//create a for loop
for (let i = 1; i < 3; i++) {
    console.log(i)
}



//Listában való ismétlő ciklus futtatás
let myList = ["item1", "item2", "item3"];
for(let i = 0; i < myList.length; i++) {
    console.log(myList[i]);
}

myList.forEach(myFunction);



function myFunction(item, index, array) {
    console.log(item);
    console.log(index);
 //   console.log(array);
}

//ha az állitás nem igaz ->akkor bagaci egy nagyon rossz tanár
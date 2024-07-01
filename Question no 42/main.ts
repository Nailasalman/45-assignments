// Question no  42:Great magicicans: Start with a copy of your program from Exercise 39. Write a function called 
// make_great() that modifies the array of magicians by adding the phrase th Great to each magician's name.call
//sow_magicians() to see that the list has actually been modofied.


//Unmodified:
let Magicians: string[] = ["Neelam","Naila","Suraiya"]
function show_magicians(itsmagic){
    itsmagic.forEach((Element)=>{console.log(Element);
 })
}
show_magicians(Magicians)

//modified:

function make_great(itsmagic){
    for (let i=0;i<itsmagic.lenght;i++){itsmagic[i]="The Great"+""+itsmagic[i]}
}
make_great(Magicians)
show_magicians(Magicians)
  
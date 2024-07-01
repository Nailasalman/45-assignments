// Question no 41:Magicians: Make a array of magician's names. Pass the array to a function called show_magicians
//(), which prints the name of each magician in the array.

let magicians: string[] = ["Neelam", "Nail","Suraiya"];

function show_magicians(itsmagic) {
    itsmagic.forEach((element) => {console.log(element);

    })
}
show_magicians(magicians)
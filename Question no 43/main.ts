//Question no 43:Unchanged Magicians: Start with your work from Exercise 40. Call the functon make_great() with a
// copy of the array of magicians' name.Because the original array will be unchanged, return the original array and
//store it in a separates array. Call show_magicians() with each array of the original names and one array with the
// Great added to each magicians' name.

let Magicians: string[] = ["Neelam","Naila","Suraiy"];
function show_magicians(itsmagic) {
    itsmagic.forEach((element) => {
        console.log(element);
    });
}

show_magicians(Magicians);

function make_great(itsmagic) {
    let jadugar: string[] = [];
    itsmagic.forEach((element) =>{
        jadugar.push(element + "" + "The Great ");
    });


return jadugar;

}

let thegreatpeople = make_great(Magicians);

show_magicians(thegreatpeople);
show_magicians(Magicians);
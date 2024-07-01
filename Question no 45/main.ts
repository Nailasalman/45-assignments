// Question no 45:Cars: Write a function that store information about a car in a object.The function should always
// receive a manufacturer and a model name.It should then accept an arbitrary number of keyward arguments.Call the 
// function with the required information and two other name-value pairs,such as a color or an optional feature.Print
// the Object that's returned to make sure all the information was store correctly.

function make_car(manufacturer:
    string,model: string, ... options:[string,any] []): Object {
        let car = {manufacturer, model };
        return car;
    }

    console.log(make_car("Toyata","Corola",["color","red"], ["year", "2020"]));
    console.log(make_car("Ford","Fiesta",["color","blue"],["sunroof", true]));


 
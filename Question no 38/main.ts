// Question no 38:Cities:Write a function called describe_city() that accepts the name of a city and its country.
// The function should print a simple sentence,such as Karachi is in Pakistan.GIve the parameter for the country a 
// defult value.Call your function for three different cities, at least one of which is not in the defult country.

function describe_city(city: string,country: string = "Pakistan") {
    console.log(`${city} is in ${country}.`);
}

describe_city("Karachi");
describe_city("Lahore");
describe_city("Multan, Fesilabad");
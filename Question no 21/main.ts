// Question no 21:Think of something you could store in a TypeScript Object. Write a program that creates Objects
// containing these items.

let book:{ title: string; author:string; yearPublished: number } = {
    title:"jannat k pattey",
    author:"Nimra Ahmed",
    yearPublished: 2004
};
console.log(`Book info: ${book.title} by ${book.author}, published in ${book.yearPublished}`);

const  coding = ['C','C++','Java','Python','JavaScript'];

const values = coding.forEach( (i) => {
    //console.log(i);
    return i //foreac doesnt return anything
})

//console.log(values); // undefined
// // in output we get undefined because forEach does not return anything

const num = [1,2,3,4,5,6,7,8,9,10];

// console.log(num.filter( (i) => {
//     return i>4 // return lagana padega because scope is used . explicit return
// })); // [5,6,7,8,9,10]

newnum = []

// num.forEach( (i) => {
//     if (i>4){
//         newnum.push(i); // 5,6,7,8,9,10
//     }
// })

//console.log(newnum); // [5,6,7,8,9,10]

const books = [
    {title : 'Book1', genre : 'fiction', publish : 1981 , edition : 2004},
    {title : 'Book2', genre : 'horror', publish : 1982 , edition : 2005},
    {title : 'Book3', genre : 'science-fiction', publish : 1983 , edition : 2006},
    {title : 'Book4', genre : 'science', publish : 1984 , edition : 2007},
    {title : 'Book5', genre : 'history', publish : 1985 , edition : 2008},
    {title : 'Book6', genre : 'fiction', publish : 1986 , edition : 2009},
    {title : 'Book7', genre : 'science', publish : 1987 , edition : 2010},
    {title : 'Book8', genre : 'science-fiction', publish : 1988 , edition : 2011},
]

let userBooks = books.filter( (bk) => bk.genre === 'fiction' ); // if const declared, cant override it 
userBooks = books.filter( (bk) => {
    bk.publish >1983 && bk.genre === 'fiction' // if we use return keyword then we have to use curly braces
}); // overriding

//console.log(userBooks); // 

// const a = num.map( (i) => {return i + 10})
// console.log(a); // [11,12,13,14,15,16,17,18,19,20]

//----------------chaining------------

const NewNums = num
                .map( (i) => {return i * 10})
                .map( (i) => {return i + 1})
                .filter( (i) => {return i >= 40})

//console.log(NewNums); // [41,51,61,71,81,91]

const Mynum = [1,2,3,4,5];

// const myTotal = Mynum.reduce(function (acc,currval){
//     console.log(`acc:${acc} and currval:${currval}`);
//     return acc + currval; // 1+2+3+4+5 = 15
// } , 3)

const myTotal = Mynum.reduce( (acc,currval) => acc + currval , 0)

//console.log(myTotal); // 15

const ShoppingCart = [
    {product : 'laptop', price : 50000},
    {product : 'mobile', price : 20000},
    {product : 'tablet', price : 10000},
    {product : 'tv', price : 30000},
]

const CartTotal = ShoppingCart.reduce( (acc,item) => acc + item.price , 0)
console.log(CartTotal);


let greetings: string = "Hello World";
greetings = greetings.toUpperCase();
console.log(greetings);

//!number
let usrId: number = 334455;

//!boolean
let isLoggedIn: boolean = true;

//!type inference
let id = 87899802;
id.toFixed();

//!any
let hero: any;
function getHero() {
    return "Thor";
}
hero = getHero();

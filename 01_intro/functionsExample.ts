
function addTwo(num: number): number {
    return num + 2;
}
addTwo(5);

function getUpper(val: string) {
    return val.toUpperCase();
}
getUpper("hello");

function signUpUsr(name: string, email: string, password: string) { }

let loginUsr = (email: string, name: string = "name") => { }
loginUsr("email");

function getValue(myVal: number) {
    if(myVal > 5) {
        return true;
    } else {
        return "less than 5";
    }
}

const getHello = (s: string): string => { return ""; }

const heroes = ["thor", "ironman", "spiderman"];
heroes.map(hero => hero.toUpperCase());

function consoleError(errmsg: string): void {
    console.log(errmsg);
}

function handleError(errmsg: string): never {
    throw new Error(errmsg);
}


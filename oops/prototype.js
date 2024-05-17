// let name = "Sameer        "
// // console.log(name.truelength) // task is to create a method to log out true length of the function and making it a string function which can be used for any strung

let myHero = ['thor', 'superman']

let heroPower = {
    thor: 'hammer',
    superman: 'god',

    getSupesPower: function(){
        console.log(`Spidy Power is ${this.superman}`);
    }
}

Object.prototype.superPower = function(){
    console.log('All objects have this property now!');
} // only if the property is injected to Object then only any array, object, string which are subclasses of Object can access it.
/// if injected to Array, then an object cant use it.
// myHero.superPower();
// heroPower.superPower();
const User = {
    name: 'Coder',
    email: 'coder@gmail.com'
}
const Teacher = {
    makeVideo : true
}

const TeachingSupport = {
    isAval : false
}
const TASupport = {
    makeAssignment: 'JS Assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User //a lil outdated

//Modern Syntax :-

Object.setPrototypeOf(TeachingSupport, Teacher)

//Now onto the assinment

let anotherUserName = 'Sameer Jain       ';

String.prototype.trueLength = function(){
    // console.log(`${this.length}`); // original length of the calling string
    console.log(`True Length is: ${this.trim().length}`); // required result
}

anotherUserName.trueLength();
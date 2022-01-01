//tic tac toe game


//example one
const playerOneName= 'tim';
const playerTwoName= 'Jen';

const playerOneMarker='X';
const playerTwoMarker="O";

//example two

const playerOne= {
    name:"Tim",
    marker:'X'

}

const playerTwo= {
    name: "jenn",
    marker: 'O'
}

function printName(player){
    console.log(player.name);
}


function gameOver(winningPlayer) {
    console.log("Congratulations");
    console.log (winningPlayer.name + "is the winner!")
}

//Object constructors

//this is an object constructor and it is a template
function Player(name, marker){
    this.name=name
    this.marker=marker
}
//which you use by calling the function with the keyword new.
const player= new Player('steve', "X");
console.log(player.name);


// you can add functions to the object
function Player(name, marker){
    this.name=name
    this.marker=marker
    this.sayName=function(){
    console.log(name)
}
}

const player1=new Player('steve', 'X');
const player2= new Player('Harry', "C");
player1.sayName() //logs "steve"
player2.sayName()  //logs "Harry"


//Exerscise:

function Book(title, author, pages, read){
   this.title=title
   this.author=author 
   this.pages=pages
   this.read=read
}
const theHobbit= new Book("The Hobbit by J.R.R. Tolkien, 295 pages, not read yet")



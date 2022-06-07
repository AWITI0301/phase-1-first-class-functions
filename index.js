function receivesAFunction(callback){
    return callback()
}
function returnsANamedFunction(spy){
    return function spy(){
        console.log("named function")
    }
}

function returnsAnAnonymousFunction() {
    return () => console.log("Anon func");
  }
// const returnsAnAnonymousFunction = () =>{
//     return console.log("Anon")
// }
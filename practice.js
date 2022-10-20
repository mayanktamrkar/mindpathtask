
// let x=1
// let x=5  not allowed

// var x=5
// var x=9   allowed


// {
//     let x=5
// }
// //not acces x outsed of block

// {
//     var x=10
// }
// //we access x outside of block 


// function may(){
//     let x=5
// }
// may()
//   not access outside of function 


// function may(){
//     var x=5
// }
// may()  // not access outside of funcion 


// for (let i = 0; i < 5; i++) {
//    let x=5;
    
// }// not access x outside of loop



// for (let i = 0; i < 5; i++) {
//     var x=i
// }
//  access outside of for loop

//let y=1
// if(y==1){
//     let x=5
// }//not access


// let y=1
// if(y==1){
//     var x=8
// } access outside of if else

// let x="tamrkar"
// let y="tamrka"

// if(x>y) {
//     console.log("x")

// }else{
//     console.log('y')
// }


(async () => {
    console.time("Slept for")
    await sleep(3000)
    console.timeEnd("Slept for")
})()





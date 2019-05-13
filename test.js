// function randomize(arr) {
//     let temp = 0;
//     let random = 0;
    

//     for (var i = 0; i < arr.length; i++) {
//         random = Math.floor(Math.random() * arr.length);
//         temp = arr[i];
//         arr[i] = arr[random];
//         arr[random] = temp;
//     } 
//     return arr;
// }


// console.log(randomize([1,2,3,4,5]));




function randomize(arr) {

    for (var i = 0; i < arr.length; i++) {
        const random = Math.floor(Math.random() * arr.length);
        [arr[i],arr[random]] = [arr[random],arr[i]];
    } 
    return arr;
}


console.log(randomize([1,2,3,4,5]));



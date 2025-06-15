console.log('For Loop')

for (let index = 0; index < 5; index++) {
   console.log(index)
}

//reverse loop

for(let i = 5; i > 0; i--){
    console.log("hello! "+i)
}

//Looping over array
let arr = [1,2,3,4]
for(let i = 0; i < arr.length; i++){
    console.log(arr[i])
}

//reversing array
for(let i = arr.length - 1; i >= 0; i--){
    console.log(arr[i])
}

//conditions in for loop

for(let i = 0; i < arr.length; i++){
    if(arr[i]%2 === 0){
        console.log(arr[i])
    }
}

// all even number from array will be printed
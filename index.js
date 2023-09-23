

// //// selection of an html element
//  var a = document.querySelector('h1');

//  console.log(a)

//  /// changing HTML Element

//  a.innerHTML = "Aayush Shinde"

// ///   changing CSS
//  a.style.background = "red";
//  a.style.color = "aqua"

//  ////   Event listner



//  a.addEventListener('click',function(){

//     a.innerHTML = "Text Got Changed"
//     a.style.backgroundColor ="Green"

//  })


/// bulb code

var a = document.querySelector('#bulb')

var b = document.querySelector('button')

var flag = 0;


b.addEventListener('click',function(){

    if(flag == 0){
        a.style.backgroundColor = "Yellow"
    b.innerHTML = "off";
    flag = 1;

    }
    else{
        a.style.backgroundColor = "white"
    b.innerHTML = "on";
    flag = 0;
    
    }
   
})

// a.innerHTML = "On"


// var h = document.querySelectorAll("h1")


// h.forEach(function(e){
//     console.log(e)
// })


// var b = document.querySelector("#bom")

// b.textContent = "<h1>Nandave</h1>";




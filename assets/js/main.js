console.log("test");



/* 
getElementById
anzahl = 0
anazahl += 1
innerHTML
*/


const btn = document.querySelector("#clickMe");

// counter 
let counter = 0;


// function 
// wenn auf Button geclickt wird, wird hochgezählt
btn.addEventListener("click", () => {
    // counter ändern -> hochzählen
counter = counter + 1;
console.log(counter)

// innerHTML schreiben
document.querySelector("#clickMe").innerHTML = `Click me: ${counter}`;
});




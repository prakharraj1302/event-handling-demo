
var time = 0;

function increment(e){
        setInterval(() =>{
            time += 1;
            e.innerHTML = time;
        },1000)
}
function decrement(e){
    setInterval(() =>{
        time -= 1;
        // e. = time;
    },1000)
}

function chngColor(e) {
    e.style.color = "red";
}


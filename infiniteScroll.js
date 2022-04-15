const container = document.getElementById('container');

let count = 1;

function createItem(count1) {
    var item = document.createElement("li");
    item.innerText = "Masai School "+count1;
    container.appendChild(item);
}

function addData() {
    for( var i = 1; i <= 10; i++ ) {
        const item = createItem(count);
        count++;
    }
}

document.addEventListener('scroll', () => {
    if( window.scrollY + window.innerHeight >= document.documentElement.scrollHeight ) {
        setTimeout(() => {
            addData();
        }, 1500)
    }
})

addData();
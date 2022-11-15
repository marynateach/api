function findPost() {
    let id = document.getElementById('num').value; 
    if(id != 0 && id >= 1 && id <= 100 || "" ) {
    fetch('https://jsonplaceholder.typicode.com/posts/' + id)
    .then((response) => response.json())
    .then((json) => showData(json));

    fetch('https://jsonplaceholder.typicode.com/posts/' + id + '/comments')
    .then((response) => response.json())
    .then((json) => showComment(json));
    }
}

let btn = document.getElementById('find');
btn.addEventListener('click', findPost);



function showData(d) {
    document.querySelector('.title').innerHTML = d.title;
    document.querySelector('.body').innerHTML = d.body;
}


function showComment(d) {
    for(let i = 0; i < d.length; i++) {
        document.getElementById('forComment').innerHTML += `<h3>${d[i].name}</h3>` + `<p>${d[i].body}<p>` + `<br>`
    }
}
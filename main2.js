const form = document.querySelector('#formID');
const input = document.querySelector('#input');
const ul = document.querySelector('.liste');

function liLeriKaldir(item){
    const tasktext = item.target.parentElement.firstChild.textContent.trim()
    item.target.parentElement.remove();
    localStorageSil(tasktext)
}
function localStorageSil(gorev) {
    let gorevler;

    if (localStorage.getItem('gorevler') === null) {
        gorevler = [];
    } else {
        gorevler = JSON.parse(localStorage.getItem('gorevler'));
    }

    const index = gorevler.indexOf(gorev);
    if (index !== -1) {
        gorevler.splice(index, 1);
        localStorage.setItem('gorevler', JSON.stringify(gorevler));
    }
}

form.addEventListener('submit',item=>{
    liElementim = document.createElement('li');
    liElementim.textContent = input.value 
    ul.appendChild(liElementim)
    liKaldir = document.createElement('button');
    liKaldir.textContent = 'Kaldır';
    liKaldir.id = 'kaldir'
    liElementim.appendChild(liKaldir)

    liKaldir.addEventListener('click',liLeriKaldir);
    localStorageKaydet(input.value)



    item.preventDefault()
})

form.addEventListener('reset',item=>{
    let lielemanlari = document.querySelectorAll('.liste li');
    lielemanlari.forEach(element=>{
        element.remove()
    })
})

function localStorageKaydet(item){
    let gorevler;

    if(localStorage.getItem('gorevler') ===null){
        gorevler = [];
    }else{
        gorevler = JSON.parse(localStorage.getItem('gorevler'))
    }

    gorevler.push(item);
    localStorage.setItem('gorevler',JSON.stringify(gorevler));
}
let btn = document.getElementById('myBtn')

btn.onclick = function (){
    let spoil = document.querySelector('.closed')
    if (spoil.style.display === 'block'){
        spoil.style.display = 'none';
    } else {
        spoil.style.display = 'block';
    }
}  

document.addEventListener('keyup', function(event){
    let spoil = document.querySelector('.closed')
    if (spoil.style.display !== 'block'){
        event.stopPropagation();
        return;
    }

    if(event.key === 'Escape'){
        spoil.style.display = 'none';
    }
})  
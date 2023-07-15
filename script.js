const switchcontainer = document.getElementById('switch-container');
switchcontainer.addEventListener("click", handleSwitch);

function handleSwitch(event){
    if(event.target.classList.contains('dark')){
        event.target.classList.remove('dark')
    } else {
        event.target.classList.add('dark')
    }
}
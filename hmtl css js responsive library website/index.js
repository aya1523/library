const bar = document.getElementById("bar");
const Nav = document.getElementById("Navbar");
const close = document.getElementById("close");
if(bar){
    bar.addEventListener('click', () => {
        Nav.classList.add('active');
    })
}
if(close){
    close.addEventListener('click', () => {
        Nav.classList.remove('active');
    })
}
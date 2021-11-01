let openMega = document.querySelector("#open-mega");
let closed = document.querySelector("#close");

openMega.onclick = () => {
    document.querySelector("#mega-me").classList.toggle("active");
}
closed.onclick = () => {
    document.querySelector("#mega-me").classList.remove("active");
}
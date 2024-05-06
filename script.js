const slidecontent =document.querySelector(".slidecontent");

const dragging =(e) =>{
    console.scrollLeft=e.pageX;
}

slidecontent.addEventListener("mousemove", dragging);
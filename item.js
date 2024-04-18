import { obtenerProductoPorId } from "./utils.js";
const render = async () => {

    const params = new URLSearchParams(window.location.search);
    
    const id = params.get("id");

    const producto = await obtenerProductoPorId(parseInt(id));

    const breadcrumbs = document.querySelector(".breadcrumbs");
    breadcrumbs.textContent="Inicio > " + producto.name;

    const itemTitle = document.querySelector(".itemTitle");
    itemTitle.textContent=producto.name;

    const itemPrice = document.querySelector(".itemPrice");
    itemPrice.textContent="$" + producto.name;

    const itemDescription = document.querySelector(".itemDescription");
    itemPrice.textContent=producto.name;

    const itemLeft = document.querySelector(".item__left");
    itemLeft.src = producto.image;
    itemLeft.alt = producto.image;


}

document.addEventListener("DOMContentLoaded", render);
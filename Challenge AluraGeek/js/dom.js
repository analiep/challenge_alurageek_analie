// Arquivo dom.js

document.addEventListener("DOMContentLoaded", function() {
    const products = [
        {
            imgSrc: "img/festa01.png",
            title: "AfterHours",
            description: "A festa que você irá curtir após a cidade dormir.",
            price: "R$ 50,00"
        },
        {
            imgSrc: "img/festa02.png",
            title: "Urbana",
            description: "A energia da cidade concentrada em um só lugar.",
            price: "R$ 50,00"
        },
        {
            imgSrc: "img/festa03.png",
            title: "Good Times",
            description: "Viva hoje o que você só pode viver HOJE!",
            price: "R$ 50,00"
        },
        {
            imgSrc: "img/festa04.png",
            title: "Reloaded",
            description: "Recarregue suas energias e comece novamente.",
            price: "R$ 50,00"
        },
        {
            imgSrc: "img/festa05.png",
            title: "After Hours 2",
            description: "Dobradinha da festa que poucos conseguem ir.",
            price: "R$ 50,00"
        },
        {
            imgSrc: "img/festa06.png",
            title: "Old Timer",
            description: "Venha descobrir se antigamente tudo era melhor.",
            price: "R$ 50,00"
        }
    ];

    const productGrid = document.getElementById("product-grid");

    products.forEach(product => {
        const productElement = document.createElement("div");
        productElement.classList.add("product");

        productElement.innerHTML = `
            <img src="${product.imgSrc}" alt="${product.title}">
            <h2>${product.title}</h2>
            <p>${product.description}</p>
            <p>Valor: ${product.price}</p>
            <button>Excluir</button>
        `;

        productGrid.appendChild(productElement);
    });
});

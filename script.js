document.addEventListener("DOMContentLoaded", () => {
    fetch('database.json')
        .then(response => response.json())
        .then(data => {
            const productList = document.getElementById('product-list');
            data.products.forEach(product => {
                const productItem = document.createElement('div');
                productItem.innerHTML = `<h3>${product.name}</h3><p>${product.price}</p>`;
                productList.appendChild(productItem);
            });
        });
});

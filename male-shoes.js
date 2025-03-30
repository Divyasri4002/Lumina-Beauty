function createStars() {
    const container = document.getElementById('stars');
    for(let i = 0; i < 150; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.width = Math.random() * 2 + 'px';
        star.style.height = star.style.width;
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 3 + 's';
        container.appendChild(star);
    }
}

function createCircles() {
    const container = document.getElementById('circles');
    for(let i = 0; i < 20; i++) {
        const circle = document.createElement('div');
        circle.className = 'circle';
        circle.style.width = Math.random() * 30 + 10 + 'px';
        circle.style.height = circle.style.width;
        circle.style.left = Math.random() * 100 + '%';
        circle.style.top = Math.random() * 100 + '%';
        circle.style.animationDelay = Math.random() * 5 + 's';
        container.appendChild(circle);
    }
}
createStars();
createCircles();
const products = [
    { name: 'Formal Shoes', description: 'Classic leather formal shoes.', price: '₹2800.00', image: 'm9.png' },
    { name: 'Casual Sneakers', description: 'Comfortable casual sneakers.', price: '₹2200.00', image: 'm10.png' },
    { name: 'Sports Shoes', description: 'Performance sports shoes.', price: '₹3200.00', image: 'm11.png' },
    { name: 'Loafers', description: 'Stylish men\'s loafers.', price: '₹2500.00', image: 'm12.png' },
];
const productList = document.getElementById('productList');
function displayProducts() {
    productList.innerHTML = '';
    products.forEach(product => {
        productList.innerHTML += `
            <div class="product">
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p>${product.price}</p>
            </div>
        `;
    });
}
displayProducts();
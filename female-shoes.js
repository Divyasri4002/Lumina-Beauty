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
    { name: 'Heels', description: 'Elegant high heels.', price: '₹2800.00', image: 'f13.png' },
    { name: 'Sandals', description: 'Stylish women\'s sandals.', price: '₹2200.00', image: 'f14.png' },
    { name: 'Boots', description: 'Fashionable women\'s boots.', price: '₹3200.00', image: 'f15.png' },
    { name: 'Flats', description: 'Comfortable women\'s flats.', price: '₹2500.00', image: 'f16.png' },
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
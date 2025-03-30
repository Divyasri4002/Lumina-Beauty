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
    { name: 'Casual Shirt', description: 'Comfortable cotton casual shirt.', price: '₹1500.00', image: 'm5.png' },
    { name: 'Formal Suit', description: 'Classic formal suit for events.', price: '₹5000.00', image: 'm6.png' },
    { name: 'Denim Jeans', description: 'Stylish denim jeans for everyday wear.', price: '₹2500.00', image: 'm7.png' },
    { name: 'Traditional Kurta', description: 'Elegant traditional kurta for festive occasions.', price: '₹3000.00', image: 'm8.png' },
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
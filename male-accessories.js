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
    { name: 'Leather Wallet', description: 'Genuine leather wallet.', price: '₹1200.00', image: 'MA.png' },
    { name: 'Stylish Watch', description: 'Elegant men\'s wristwatch.', price: '₹3500.00', image: 'MA1.png' },
    { name: 'Sunglasses', description: 'Classic aviator sunglasses.', price: '₹1800.00', image: 'MA2.png' },
    { name: 'Belt', description: 'Formal leather belt.', price: '₹900.00', image: 'MA3.png' },
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
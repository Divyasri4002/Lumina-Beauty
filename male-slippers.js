// male-beauty-accessories.js

function createStars() {
    const starsContainer = document.createElement('div');
    starsContainer.className = 'sizzling-stars';
    document.body.appendChild(starsContainer);

    for (let i = 0; i < 50; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + 'vw';
        star.style.top = Math.random() * 100 + 'vh';
        star.style.animationDelay = Math.random() * 2 + 's';
        starsContainer.appendChild(star);
    }
}

function createCircles() {
    const circlesContainer = document.createElement('div');
    circlesContainer.className = 'animated-circles';
    document.body.appendChild(circlesContainer);

    for (let i = 0; i < 20; i++) {
        const circle = document.createElement('div');
        circle.className = 'circle';
        circle.style.left = Math.random() * 100 + 'vw';
        circle.style.top = Math.random() * 100 + 'vh';
        circle.style.animationDelay = Math.random() * 3 + 's';
        circlesContainer.appendChild(circle);
    }
}

createStars();
createCircles();

const products = [
    { name: 'Beard Oil', description: 'Nourishing beard oil.', price: '₹600.00', image: 'm13.png' },
    { name: 'Face Wash', description: 'Cleansing face wash.', price: '₹450.00', image: 'm14.png' },
    { name: 'Hair Gel', description: 'Strong hold hair gel.', price: '₹550.00', image: 'm15.png' },
    { name: 'Shaving Cream', description: 'Smooth shaving cream.', price: '₹350.00', image: 'm16.png' },
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
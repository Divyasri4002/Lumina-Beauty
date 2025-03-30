
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
createStars();

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
createCircles();



const products = [
    { name: 'Radiant Glow Face Wash', description: 'A gentle, foaming cleanser that removes impurities.', price: '₹2075.00', image: 'rad.png' }, // $25 * 83
    { name: 'Hydrating Moisturizer', description: 'Intense hydration for all skin types.', price: '₹2490.00', image: 'moisturizer.png' }, // $30 * 83
    { name: 'Nourishing Lip Balm', description: 'Keeps lips soft and supple.', price: '₹996.00', image: 'lip.png' }, // $12 * 83
    { name: 'Velvet Matte Lipstick', description: 'Luxurious matte lipstick with long-lasting wear.', price: '₹2490.00', image: 'stick.png' }, // $30 * 83
    { name: 'Precision Eyeliner', description: 'Defines eyes with precision and intensity.', price: '₹1660.00', image: 'liner.png' }, // $20 * 83
    { name: 'Intense Kajal', description: 'Creates dramatic, smoky eyes.', price: '₹1494.00', image: 'kajal.png' }, // $18 * 83
    { name: 'Flawless Finish Foundation', description: 'Evens skin tone for a natural, flawless look.', price: '₹2905.00', image: 'foundation.png' }, // $35 * 83
    { name: 'Volumizing Mascara', description: 'Adds volume and length to lashes.', price: '₹1826.00', image: 'masc.png' }, // $22 * 83
    { name: 'Smoothing Primer', description: 'Creates a smooth base for makeup application.', price: '₹2324.00', image: 'primer.png' }, // $28 * 83
    { name: 'Silky Body Lotion', description: 'Nourishes and softens skin.', price: '₹2324.00', image: 'lotion.png' }, // $28 * 83
    { name: 'Radiant Blush', description: 'Adds a natural flush of color.', price: '₹2158.00', image: 'blush.png' }, // $26 * 83
    { name: 'Lash Enhancing Serum', description: 'Enhances lash length and volume.', price: '₹3154.00', image: 'lash.png' }, // $38 * 83
    { name: 'Cleansing Oil', description: 'Removes makeup and impurities effectively.', price: '₹2241.00', image: 'oil.png' }, // $27 * 83
    { name: 'Night Repair Serum', description: 'Repairs and rejuvenates skin overnight.', price: '₹3320.00', image: 'serum.png' }, // $40 * 83
    { name: 'Tinted Moisturizer', description: 'Provides light coverage and hydration.', price: '₹2656.00', image: 'tinted.png' }, // $32 * 83
    { name: 'Brow Defining Gel', description: 'Shapes and sets brows for a polished look.', price: '₹1660.00', image: 'brow.png' }, // $20 * 83
    { name: 'Exfoliating Scrub', description: 'Removes dead skin cells for a smoother complexion.', price: '₹2075.00', image: 'scrub.png' }, // $25 * 83
    { name: 'Setting Powder', description: 'Sets makeup for a long-lasting finish.', price: '₹2407.00', image: 'powder.png' }, // $29 * 83
    { name: 'Hair Serum', description: 'Adds shine and smoothness to hair.', price: '₹2158.00', image: 'hair.png' }, // $26 * 83
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
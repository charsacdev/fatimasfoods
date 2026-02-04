document.addEventListener('DOMContentLoaded', function () {

    // --- 1. Product Data ---
    const products = [
        // RICE (12 items)
        { id: 101, category: 'rice', name: 'Premium Parboiled Rice 50kg', price: 55000, img: 'assets/images/rice.jpg' },
        { id: 102, category: 'rice', name: 'Local Stone-Free Rice 50kg', price: 48000, img: 'assets/images/rice.jpg' },
        { id: 103, category: 'rice', name: 'Basmati Rice 5kg', price: 12000, img: 'assets/images/rice.jpg' },
        { id: 104, category: 'rice', name: 'Ofada Rice 5kg', price: 8500, img: 'assets/images/rice.jpg' },
        { id: 105, category: 'rice', name: 'Jasmine Rice 10kg', price: 18000, img: 'assets/images/rice.jpg' },
        { id: 106, category: 'rice', name: 'Foreign Long Grain 25kg', price: 28000, img: 'assets/images/rice.jpg' },
        { id: 107, category: 'rice', name: 'Mama Gold Rice 50kg', price: 56000, img: 'assets/images/rice.jpg' },
        { id: 108, category: 'rice', name: 'Royal Stallion Rice 50kg', price: 55500, img: 'assets/images/rice.jpg' },
        { id: 109, category: 'rice', name: 'Caprice 25kg', price: 29000, img: 'assets/images/rice.jpg' },
        { id: 110, category: 'rice', name: 'Big Bull Rice 10kg', price: 11500, img: 'assets/images/rice.jpg' },
        { id: 111, category: 'rice', name: 'Optimum Rice 50kg', price: 49000, img: 'assets/images/rice.jpg' },
        { id: 112, category: 'rice', name: 'Falcon Rice 5kg', price: 6000, img: 'assets/images/rice.jpg' },

        // YAMS (12 items)
        { id: 201, category: 'yams', name: 'Abuja Yam (Large Tuber)', price: 3500, img: 'assets/images/yam.jpg' },
        { id: 202, category: 'yams', name: 'Benue Yam (Medium)', price: 2200, img: 'assets/images/yam.jpg' },
        { id: 203, category: 'yams', name: 'Old Yam (5 Tubers)', price: 15000, img: 'assets/images/yam.jpg' },
        { id: 204, category: 'yams', name: 'New Yam (Small)', price: 1500, img: 'assets/images/yam.jpg' },
        { id: 205, category: 'yams', name: 'Large Yam Set (10 Tubers)', price: 32000, img: 'assets/images/yam.jpg' },
        { id: 206, category: 'yams', name: 'Sweet Potato (Paint Bucket)', price: 4000, img: 'assets/images/yam.jpg' },
        { id: 207, category: 'yams', name: 'Irish Potato (Basket)', price: 6500, img: 'assets/images/yam.jpg' },
        { id: 208, category: 'yams', name: 'Pounded Yam Flour 1kg', price: 2500, img: 'assets/images/yam.jpg' },
        { id: 209, category: 'yams', name: 'Amala (Yam Flour) 5kg', price: 6000, img: 'assets/images/yam.jpg' },
        { id: 210, category: 'yams', name: 'Cassava Tubers (Bundle)', price: 1500, img: 'assets/images/yam.jpg' },
        { id: 211, category: 'yams', name: 'Cocoyam (Basket)', price: 5000, img: 'assets/images/yam.jpg' },
        { id: 212, category: 'yams', name: 'Water Yam (Tuber)', price: 1800, img: 'assets/images/yam.jpg' },

        // BEANS (12 items)
        { id: 301, category: 'beans', name: 'Honey Beans (Oloyin) Paint', price: 5500, img: 'assets/images/beans.jpg' },
        { id: 302, category: 'beans', name: 'Iron Beans (Paint Bucket)', price: 4500, img: 'assets/images/beans.jpg' },
        { id: 303, category: 'beans', name: 'White Beans (Paint Bucket)', price: 4000, img: 'assets/images/beans.jpg' },
        { id: 304, category: 'beans', name: 'Honey Beans (Bag)', price: 85000, img: 'assets/images/beans.jpg' },
        { id: 305, category: 'beans', name: 'Brown Beans (Derica)', price: 900, img: 'assets/images/beans.jpg' },
        { id: 306, category: 'beans', name: 'Peeled Beans 1kg', price: 2500, img: 'assets/images/beans.jpg' },
        { id: 307, category: 'beans', name: 'Soya Beans (Paint Bucket)', price: 3500, img: 'assets/images/beans.jpg' },
        { id: 308, category: 'beans', name: 'Bean Flour 1kg', price: 1500, img: 'assets/images/beans.jpg' },
        { id: 309, category: 'beans', name: 'Bambara Nut (Paint)', price: 4500, img: 'assets/images/beans.jpg' },
        { id: 310, category: 'beans', name: 'Locust Beans (Iru)', price: 500, img: 'assets/images/beans.jpg' },
        { id: 311, category: 'beans', name: 'Green Peas 1kg', price: 3000, img: 'assets/images/beans.jpg' },
        { id: 312, category: 'beans', name: 'Red Kidney Beans 1kg', price: 3500, img: 'assets/images/beans.jpg' },

        // SPICES (12 items)
        { id: 401, category: 'spices', name: 'Maggi Star (Pack)', price: 1200, img: 'assets/images/spices.jpg' },
        { id: 402, category: 'spices', name: 'Knorr Cubes (Pack)', price: 1300, img: 'assets/images/spices.jpg' },
        { id: 403, category: 'spices', name: 'Curry Powder (Sachet)', price: 500, img: 'assets/images/spices.jpg' },
        { id: 404, category: 'spices', name: 'Dried Thyme (Sachet)', price: 500, img: 'assets/images/spices.jpg' },
        { id: 405, category: 'spices', name: 'Cameroun Pepper (Paint)', price: 4500, img: 'assets/images/spices.jpg' },
        { id: 406, category: 'spices', name: 'Dried Crayfish (Paint)', price: 6000, img: 'assets/images/spices.jpg' },
        { id: 407, category: 'spices', name: 'Palm Oil (5 Liters)', price: 7000, img: 'assets/images/oil.jpg' },
        { id: 408, category: 'spices', name: 'Vegetable Oil (5 Liters)', price: 9500, img: 'assets/images/oil.jpg' },
        { id: 409, category: 'spices', name: 'Salt (Bag 1kg)', price: 300, img: 'assets/images/spices.jpg' },
        { id: 410, category: 'spices', name: 'Ginger Powder', price: 1000, img: 'assets/images/spices.jpg' },
        { id: 411, category: 'spices', name: 'Garlic Powder', price: 1000, img: 'assets/images/spices.jpg' },
        { id: 412, category: 'spices', name: 'Mixed Spices Set', price: 5000, img: 'assets/images/spices.jpg' },

        // MEAT (12 items)
        { id: 501, category: 'meat', name: 'Fresh Beef (Kilo)', price: 4500, img: 'assets/images/meat.jpg' },
        { id: 502, category: 'meat', name: 'Goat Meat (Kilo)', price: 5500, img: 'assets/images/meat.jpg' },
        { id: 503, category: 'meat', name: 'Chicken (Whole)', price: 8000, img: 'assets/images/meat.jpg' },
        { id: 504, category: 'meat', name: 'Turkey Wings (Kilo)', price: 6000, img: 'assets/images/meat.jpg' },
        { id: 505, category: 'meat', name: 'Cow Leg (Cut)', price: 4000, img: 'assets/images/meat.jpg' },
        { id: 506, category: 'meat', name: 'Shaki (Tripe) Kilo', price: 4000, img: 'assets/images/meat.jpg' },
        { id: 507, category: 'meat', name: 'Liver (Kilo)', price: 4500, img: 'assets/images/meat.jpg' },
        { id: 508, category: 'meat', name: 'Stockfish (Bundle)', price: 12000, img: 'assets/images/meat.jpg' },
        { id: 509, category: 'meat', name: 'Dry Catfish (Pack)', price: 5000, img: 'assets/images/meat.jpg' },
        { id: 510, category: 'meat', name: 'Fresh Catfish (Kilo)', price: 3500, img: 'assets/images/meat.jpg' },
        { id: 511, category: 'meat', name: 'Ram Meat (Kilo)', price: 6500, img: 'assets/images/meat.jpg' },
        { id: 512, category: 'meat', name: 'Snail (Large Bunch)', price: 15000, img: 'assets/images/meat.jpg' }
    ];

    // --- 2. State & Utils ---
    let cart = JSON.parse(localStorage.getItem('fatima_cart')) || [];

    // --- 3. Functions ---

    function init() {
        updateFloatingCart();

        // Page Router logic
        if (window.location.pathname.includes('products.html')) {
            renderProducts('all');
            setupFilterListeners();
        } else if (window.location.pathname.includes('cart.html')) {
            renderCartPage();
        } else if (window.location.pathname.includes('checkout.html')) {
            setupCheckout();
        } else if (window.location.pathname.includes('payment.html')) {
            setupPayment();
        } else if (window.location.pathname.includes('special-order.html')) {
            // Setup Special Order if needed here, mostly form submission logic below
        }

        // Global Event Delegation for Product Cards
        document.body.addEventListener('click', function (e) {
            if (e.target.closest('.btn-plus')) {
                const input = e.target.closest('.quantity-control').querySelector('input');
                input.value = parseInt(input.value) + 1;
            }
            if (e.target.closest('.btn-minus')) {
                const input = e.target.closest('.quantity-control').querySelector('input');
                if (parseInt(input.value) > 1) input.value = parseInt(input.value) - 1;
            }
            if (e.target.closest('.add-to-cart-btn')) {
                const btn = e.target.closest('.add-to-cart-btn');
                const id = parseInt(btn.dataset.id);
                const qtyInput = btn.closest('.premium-card').querySelector('.quantity-control input');
                const qty = qtyInput ? parseInt(qtyInput.value) : 1;
                addToCart(id, qty);
            }
        });
    }

    // Product Rendering
    window.renderProducts = function (category) {
        const grid = document.getElementById('productGrid');
        if (!grid) return;

        grid.innerHTML = '';
        const filtered = category === 'all' ? products : products.filter(p => p.category === category);

        if (filtered.length === 0) {
            grid.innerHTML = '<div class="col-12 text-center p-5"><h4>No products found in this category.</h4></div>';
            return;
        }

        filtered.forEach(p => {
            const html = `
            <div class="col-md-3 col-sm-6 animate__animated animate__fadeIn">
                <div class="premium-card">
                    <div class="product-img-wrapper">
                        <img src="${p.img}" alt="${p.name}" class="product-img">
                    </div>
                    <div class="p-3">
                        <div class="d-flex justify-content-between align-items-start mb-2">
                            <h6 class="mb-0 text-truncate" style="max-width: 70%;" title="${p.name}">${p.name}</h6>
                            <span class="fw-bold text-primary-green">₦${p.price.toLocaleString()}</span>
                        </div>
                        
                        <div class="d-flex justify-content-between align-items-center mt-3">
                            <div class="quantity-control">
                                <button class="btn-minus">-</button>
                                <input type="text" value="1" readonly>
                                <button class="btn-plus">+</button>
                            </div>
                            <button class="btn btn-primary btn-sm rounded-circle add-to-cart-btn" data-id="${p.id}" style="width: 40px; height: 40px; padding: 0;">
                                <i class="fas fa-cart-plus"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>`;
            grid.innerHTML += html;
        });
    };

    function setupFilterListeners() {
        const triggers = document.querySelectorAll('.category-trigger');
        triggers.forEach(t => {
            t.addEventListener('click', (e) => {
                e.preventDefault();
                document.querySelectorAll('.category-pill').forEach(c => c.classList.remove('active'));

                if (t.classList.contains('category-pill')) {
                    t.classList.add('active');
                }

                const cat = t.dataset.category;
                renderProducts(cat);
            });
        });

        const urlParams = new URLSearchParams(window.location.search);
        const catParam = urlParams.get('category');
        if (catParam) {
            renderProducts(catParam);
            const pill = document.querySelector(`.category-pill[data-category="${catParam}"]`);
            if (pill) pill.classList.add('active');
        }
    }

    // Cart Logic
    function addToCart(id, quantity) {
        const product = products.find(p => p.id === id);
        if (!product) return;

        const existing = cart.find(item => item.id === id);
        if (existing) {
            existing.quantity += quantity;
        } else {
            cart.push({ ...product, quantity: quantity });
        }

        saveCart();
        showToast(`${product.name} added to cart!`);
    }

    function saveCart() {
        localStorage.setItem('fatima_cart', JSON.stringify(cart));
        updateFloatingCart();
    }

    function updateFloatingCart() {
        const badges = document.querySelectorAll('#cart-count, .cart-badge');
        const count = cart.reduce((sum, item) => sum + item.quantity, 0);
        badges.forEach(b => b.textContent = count);
    }

    function showToast(msg) {
        let toast = document.createElement('div');
        toast.className = 'position-fixed bottom-0 start-50 translates-middle-x bg-dark text-white p-3 rounded mb-4 shadow';
        toast.style.zIndex = '2000';
        toast.innerHTML = `<i class="fas fa-check-circle text-success me-2"></i> ${msg}`;
        document.body.appendChild(toast);
        setTimeout(() => toast.remove(), 2000);
    }

    // Refactored Cart Page Logic
    function renderCartPage() {
        const container = document.getElementById('cart-items');
        const subtotalEl = document.getElementById('subtotal');
        const totalEl = document.getElementById('total');

        if (!container) return;

        if (cart.length === 0) {
            container.innerHTML = `
                <div class="text-center py-5">
                    <i class="fas fa-shopping-basket fa-4x text-muted mb-3"></i>
                    <p class="text-muted">Your cart is empty.</p>
                    <a href="products.html" class="btn btn-primary">Start Shopping</a>
                </div>`;
            if (subtotalEl) subtotalEl.innerText = '₦0';
            if (totalEl) totalEl.innerText = '₦0';
            return;
        }

        container.innerHTML = '';
        let total = 0;

        cart.forEach((item, index) => {
            total += item.price * item.quantity;
            container.innerHTML += `
                <div class="d-flex align-items-center mb-4 pb-4 border-bottom">
                    <img src="${item.img}" width="80" height="80" class="rounded me-3 object-fit-cover">
                    <div class="flex-grow-1">
                        <h6 class="mb-1 premium-font">${item.name}</h6>
                        <span class="text-muted small">Unit Price: ₦${item.price.toLocaleString()}</span>
                    </div>
                    <div class="mx-3">
                        <div class="quantity-control btn-sm" style="padding: 2px;">
                            <button onclick="updateCartItem(${index}, -1)">-</button>
                            <input type="text" value="${item.quantity}" readonly style="width:30px">
                            <button onclick="updateCartItem(${index}, 1)">+</button>
                        </div>
                    </div>
                    <div class="text-end" style="min-width: 80px;">
                        <span class="fw-bold d-block mb-2">₦${(item.price * item.quantity).toLocaleString()}</span>
                        <button class="btn btn-sm btn-link text-danger p-0 text-decoration-none" onclick="removeCartItem(${index})">
                            <i class="fas fa-trash-alt"></i> Remove
                        </button>
                    </div>
                </div>
            `;
        });

        if (subtotalEl) subtotalEl.innerText = `₦${total.toLocaleString()}`;
        if (totalEl) totalEl.innerText = `₦${total.toLocaleString()}`;
    }

    window.updateCartItem = function (index, change) {
        if (cart[index].quantity + change > 0) {
            cart[index].quantity += change;
        }
        saveCart();
        renderCartPage();
    };

    window.removeCartItem = function (index) {
        cart.splice(index, 1);
        saveCart();
        renderCartPage();
    };

    // Checkout & Payment
    function setupCheckout() {
        const form = document.getElementById('checkoutForm');
        if (form) {
            form.addEventListener('submit', function (e) {
                e.preventDefault();
                // Collect data
                const formData = new FormData(form);
                const data = Object.fromEntries(formData.entries());
                // Check disclaimer
                if (!document.getElementById('disclaimer').checked) {
                    alert('Please agree to the delivery disclaimer.');
                    return;
                }

                localStorage.setItem('fatima_delivery', JSON.stringify(data));
                window.location.href = 'payment.html';
            });
        }
    }

    function setupPayment() {
        // Display Total on Load
        const currentCart = JSON.parse(localStorage.getItem('fatima_cart')) || [];
        const totalAmount = currentCart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const totalEl = document.getElementById('paymentTotal');
        if (totalEl) totalEl.innerText = '₦' + totalAmount.toLocaleString();

        const copyBtn = document.getElementById('copyAccount');
        if (copyBtn) {
            copyBtn.addEventListener('click', function () {
                const accNum = document.getElementById('accountNumber').innerText;
                navigator.clipboard.writeText(accNum.replace(/\s/g, ''));
                copyBtn.innerHTML = '<i class="fas fa-check"></i> Copied';
                setTimeout(() => copyBtn.innerHTML = '<i class="fas fa-copy"></i> Copy', 2000);
            });
        }

        const confirmBtn = document.getElementById('confirmOrder');
        if (confirmBtn) {
            confirmBtn.addEventListener('click', function () {
                const delivery = JSON.parse(localStorage.getItem('fatima_delivery')) || {};
                const currentCart = JSON.parse(localStorage.getItem('fatima_cart')) || [];

                if (currentCart.length === 0) {
                    alert('Cart is empty!');
                    return; // Don't block testing if user wants to see logic, but in prod block
                }

                let msg = `*NEW ORDER - FATIMA FOODS*\n\n`;
                msg += `*Customer Details:*\n`;
                msg += `Name: ${delivery.fullName}\n`;
                msg += `Phone: ${delivery.phone}\n`;
                msg += `Alt Phone: ${delivery.altPhone || 'N/A'}\n`;
                msg += `Address: ${delivery.address}, ${delivery.location}, ${delivery.lga}, ${delivery.state}\n`;
                msg += `Landmark: ${delivery.landmark}\n\n`;

                msg += `*Order Summary:*\n`;
                let total = 0;
                currentCart.forEach(item => {
                    msg += `- ${item.name} (x${item.quantity}): ₦${(item.price * item.quantity).toLocaleString()}\n`;
                    total += item.price * item.quantity;
                });

                msg += `\n*TOTAL AMOUNT: ₦${total.toLocaleString()}*\n`;
                msg += `(Payment Status: Pending Verification)`;

                const phone = '2349068257514';
                const url = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;

                localStorage.removeItem('fatima_cart');
                localStorage.removeItem('fatima_delivery');

                window.open(url, '_blank');
                setTimeout(() => window.location.href = 'index.html', 1000);
            });
        }
    }

    // --- Special Order Logic ---
    const specialOrderForm = document.getElementById('specialOrderForm');
    if (specialOrderForm) {
        specialOrderForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const name = document.getElementById('sp_name').value;
            const phone = document.getElementById('sp_phone').value;
            const state = document.getElementById('sp_state').value;
            const lga = document.getElementById('sp_lga').value;
            const landmark = document.getElementById('sp_landmark').value;
            const busstop = document.getElementById('sp_busstop').value;
            const desc = document.getElementById('sp_desc').value;

            let msg = `*SPECIAL ORDER REQUEST*\n\n`;
            msg += `*Customer Details:*\n`;
            msg += `Name: ${name}\n`;
            msg += `Phone: ${phone}\n`;
            msg += `State: ${state}\n`;
            msg += `L.G.A: ${lga}\n`;
            msg += `Landmark: ${landmark}\n`;
            msg += `Nearest Bus Stop: ${busstop}\n\n`;
            msg += `*Request Description:*\n${desc}`;

            const phoneNum = '2348012345678';
            const url = `https://wa.me/${phoneNum}?text=${encodeURIComponent(msg)}`;

            window.open(url, '_blank');
        });
    }

    // Run Init
    init();

});

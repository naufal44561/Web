// Data Produk
const products = [
    {
        id: 1,
        name: "GlowBody Moisturizing Lotion",
        category: "body-lotion",
        price: 125000,
        description: "Lotion pelembab dengan ekstrak aloe vera dan shea butter untuk kulit lembut dan lembab sepanjang hari.",
        image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 2,
        name: "SmoothSkin Body Scrub",
        category: "body-scrub",
        price: 95000,
        description: "Body scrub dengan butiran gula dan minyak kelapa untuk mengangkat sel kulit mati dengan lembut.",
        image: "https://images.unsplash.com/photo-1590420485407-d8f554b5aeb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 3,
        name: "Lavender Relaxing Body Wash",
        category: "body-wash",
        price: 85000,
        description: "Body wash dengan aroma lavender yang menenangkan untuk pengalaman mandi seperti spa.",
        image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 4,
        name: "Nourishing Body Oil",
        category: "body-oil",
        price: 145000,
        description: "Minyak tubuh dengan campuran jojoba, almond, dan argan oil untuk kulit yang bersinar dan terhidrasi.",
        image: "https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 5,
        name: "Vitamin C Brightening Lotion",
        category: "body-lotion",
        price: 135000,
        description: "Lotion dengan vitamin C untuk mencerahkan kulit dan mengurangi noda hitam pada tubuh.",
        image: "https://images.unsplash.com/photo-1556228578-9c360e1d8d34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 6,
        name: "Coffee & Coconut Body Scrub",
        category: "body-scrub",
        price: 110000,
        description: "Scrub kopi dan kelapa untuk mengencangkan kulit dan mengurangi selulit secara alami.",
        image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 7,
        name: "Refreshing Citrus Body Wash",
        category: "body-wash",
        price: 80000,
        description: "Body wash dengan ekstrak jeruk dan mint untuk menyegarkan kulit di pagi hari.",
        image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 8,
        name: "Rose & Jasmine Body Oil",
        category: "body-oil",
        price: 155000,
        description: "Minyak tubuh dengan aroma bunga mawar dan melati untuk kulit halus dan wangi tahan lama.",
        image: "https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    }
];

// State Aplikasi
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let currentTestimonial = 0;

// DOM Elements
const productGrid = document.getElementById('product-grid');
const cartBtn = document.getElementById('cart-btn');
const cartSidebar = document.getElementById('cart-sidebar');
const closeCartBtn = document.getElementById('close-cart');
const cartItemsContainer = document.getElementById('cart-items');
const cartTotalPrice = document.getElementById('cart-total-price');
const cartCount = document.querySelector('.cart-count');
const filterButtons = document.querySelectorAll('.filter-btn');
const checkoutBtn = document.getElementById('checkout-btn');
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');
const notification = document.getElementById('notification');
const notificationText = document.getElementById('notification-text');
const testimonialSlides = document.querySelectorAll('.testimonial');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const messageForm = document.getElementById('message-form');
const newsletterForm = document.getElementById('newsletter-form');

// Format Rupiah
function formatRupiah(amount) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(amount);
}

// Tampilkan Produk
function displayProducts(filter = 'all') {
    productGrid.innerHTML = '';
    
    const filteredProducts = filter === 'all' 
        ? products 
        : products.filter(product => product.category === filter);
    
    filteredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-img">
            <div class="product-info">
                <div class="product-category">${product.category.replace('-', ' ')}</div>
                <h3 class="product-name">${product.name}</h3>
                <p class="product-desc">${product.description}</p>
                <div class="product-bottom">
                    <div class="product-price">${formatRupiah(product.price)}</div>
                    <button class="add-to-cart" data-id="${product.id}">
                        <i class="fas fa-cart-plus"></i>
                    </button>
                </div>
            </div>
        `;
        productGrid.appendChild(productCard);
    });
    
    // Tambahkan event listener untuk tombol tambah ke keranjang
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', (e) => {
            const productId = parseInt(e.currentTarget.getAttribute('data-id'));
            addToCart(productId);
        });
    });
}

// Tambah ke Keranjang
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    updateCart();
    showNotification(`${product.name} telah ditambahkan ke keranjang`);
}

// Update Keranjang
function updateCart() {
    // Simpan ke localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Update jumlah item di ikon keranjang
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    // Update tampilan keranjang
    renderCartItems();
}

// Tampilkan Item Keranjang
function renderCartItems() {
    cartItemsContainer.innerHTML = '';
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="empty-cart">Keranjang belanja Anda kosong</p>';
        cartTotalPrice.textContent = formatRupiah(0);
        return;
    }
    
    let total = 0;
    
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="cart-item-img">
            <div class="cart-item-info">
                <h4>${item.name}</h4>
                <div class="cart-item-price">${formatRupiah(item.price)}</div>
                <div class="cart-item-controls">
                    <button class="quantity-btn minus" data-id="${item.id}">-</button>
                    <span class="quantity">${item.quantity}</span>
                    <button class="quantity-btn plus" data-id="${item.id}">+</button>
                    <button class="remove-item" data-id="${item.id}">Hapus</button>
                </div>
            </div>
        `;
        cartItemsContainer.appendChild(cartItem);
    });
    
    cartTotalPrice.textContent = formatRupiah(total);
    
    // Tambahkan event listener untuk kontrol kuantitas
    document.querySelectorAll('.quantity-btn.minus').forEach(button => {
        button.addEventListener('click', (e) => {
            const productId = parseInt(e.currentTarget.getAttribute('data-id'));
            updateQuantity(productId, -1);
        });
    });
    
    document.querySelectorAll('.quantity-btn.plus').forEach(button => {
        button.addEventListener('click', (e) => {
            const productId = parseInt(e.currentTarget.getAttribute('data-id'));
            updateQuantity(productId, 1);
        });
    });
    
    document.querySelectorAll('.remove-item').forEach(button => {
        button.addEventListener('click', (e) => {
            const productId = parseInt(e.currentTarget.getAttribute('data-id'));
            removeFromCart(productId);
        });
    });
}

// Update Kuantitas Item
function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    
    if (item) {
        item.quantity += change;
        
        if (item.quantity <= 0) {
            cart = cart.filter(item => item.id !== productId);
        }
        
        updateCart();
    }
}

// Hapus Item dari Keranjang
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
    showNotification('Produk telah dihapus dari keranjang');
}

// Tampilkan Notifikasi
function showNotification(message) {
    notificationText.textContent = message;
    notification.classList.add('show');
    
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

// Filter Produk
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Hapus kelas active dari semua tombol
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Tambahkan kelas active ke tombol yang diklik
        button.classList.add('active');
        
        // Filter produk berdasarkan kategori
        const filter = button.getAttribute('data-filter');
        displayProducts(filter);
    });
});

// Testimonial Slider
function showTestimonial(index) {
    // Sembunyikan semua testimonial
    testimonialSlides.forEach(slide => {
        slide.classList.remove('active');
    });
    
    // Hapus active dari semua dots
    dots.forEach(dot => {
        dot.classList.remove('active');
    });
    
    // Tampilkan testimonial yang dipilih
    testimonialSlides[index].classList.add('active');
    dots[index].classList.add('active');
    
    currentTestimonial = index;
}

// Event Listeners untuk slider
prevBtn.addEventListener('click', () => {
    let newIndex = currentTestimonial - 1;
    if (newIndex < 0) newIndex = testimonialSlides.length - 1;
    showTestimonial(newIndex);
});

nextBtn.addEventListener('click', () => {
    let newIndex = currentTestimonial + 1;
    if (newIndex >= testimonialSlides.length) newIndex = 0;
    showTestimonial(newIndex);
});

// Event listener untuk dots
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        showTestimonial(index);
    });
});

// Auto slide testimonial
setInterval(() => {
    let newIndex = currentTestimonial + 1;
    if (newIndex >= testimonialSlides.length) newIndex = 0;
    showTestimonial(newIndex);
}, 5000);

// Toggle Menu Mobile
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Tutup menu mobile saat klik di luar
document.addEventListener('click', (e) => {
    if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('active');
    }
});

// Toggle Cart Sidebar
cartBtn.addEventListener('click', (e) => {
    e.preventDefault();
    cartSidebar.classList.add('active');
});

closeCartBtn.addEventListener('click', () => {
    cartSidebar.classList.remove('active');
});

// Tutup cart saat klik di luar
document.addEventListener('click', (e) => {
    if (!cartBtn.contains(e.target) && 
        !cartSidebar.contains(e.target) && 
        cartSidebar.classList.contains('active')) {
        cartSidebar.classList.remove('active');
    }
});

// Checkout
checkoutBtn.addEventListener('click', () => {
    if (cart.length === 0) {
        showNotification('Keranjang belanja Anda kosong');
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    showNotification(`Terima kasih! Total belanja Anda: ${formatRupiah(total)}. Silakan lanjutkan pembayaran.`);
    
    // Reset keranjang
    cart = [];
    updateCart();
    cartSidebar.classList.remove('active');
});

// Form Submit Handler
messageForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Simulasi pengiriman pesan
    console.log('Pesan dikirim:', { name, email, message });
    
    // Tampilkan notifikasi
    showNotification(`Terima kasih ${name}, pesan Anda telah dikirim!`);
    
    // Reset form
    messageForm.reset();
});

// Newsletter Form
newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const emailInput = newsletterForm.querySelector('input[type="email"]');
    const email = emailInput.value;
    
    // Simulasi berlangganan newsletter
    console.log('Berlangganan newsletter:', email);
    
    // Tampilkan notifikasi
    showNotification('Terima kasih telah berlangganan newsletter kami!');
    
    // Reset form
    emailInput.value = '';
});

// Smooth scroll untuk navigasi
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            // Tutup menu mobile jika terbuka
            navLinks.classList.remove('active');
            
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Inisialisasi Aplikasi
function initApp() {
    // Tampilkan semua produk
    displayProducts();
    
    // Update keranjang dari localStorage
    updateCart();
    
    // Tampilkan testimonial pertama
    showTestimonial(0);
}

// Jalankan aplikasi saat DOM siap
document.addEventListener('DOMContentLoaded', initApp);
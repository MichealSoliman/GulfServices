// Gulf Services Website - Main JavaScript with New Color Scheme
// New Color Palette: Charcoal, Silver, Petroleum Blue, Rose Gold

// Services data
const services = [
    {
        id: 1,
        name: 'نقل العفش بالكويت',
        description: 'خدمة نقل العفش والأثاث في الكويت بأحدث الوسائل وأفضل الأسعار مع ضمان سلامة الأثاث وخدمة فاخرة',
        image: './assets/images/pexels-rdne-7464369.jpg',
        url: 'https://www.bashir-mover.com/',
        location: 'الكويت',
        category: '  اثاث الكويت ',
        nameCom: 'بشاير الخير  ',
        borderClass: 'petroleum-border'
    },
   
    {
        id: 2,
        name: 'تنظيف المنازل جدة',
        description: 'خدمة تنظيف شاملة للمنازل والشقق بعمالة مدربة ومواد تنظيف عالية الجودة مع ضمان النظافة',
        image: 'https://naqaa-clean.com/blog/water-leak-detection.png',
        
        url: 'https://naqaa-clean.com/',
        location: 'جدة',
        category: 'تنظيف',
        nameCom: ' نقاء كلين',
        borderClass: 'rose-border'
    },
      {
        id: 3,
        name: 'نقل العفش بجدة ',
      description: 'صيانة شاملة واحترافية لأنظمة التكييف في الرياض تشمل التنظيف، الفحص، وإصلاح الأعطال، مع أسعار تنافسية، وخدمة سريعة، وضمان كفاءة التبريد والأداء المثالي طوال العام.',

        image: 'https://homo-ve.com/Untitled-1Artboard-12%20copy.webp',
        url: 'https://homo-ve.com/',
        location: 'جدة',
        category: 'نقل عفش',
        nameCom: 'Homve',
        borderClass: 'petroleum-border'
    },

    {
        id: 4,
        name: 'صيانة المكيفات بالرياض',
        description: 'خدمة صيانة وتنظيف المكيفات في الرياض بأحدث التقنيات وأفضل الأسعار مع ضمان شامل على الخدمة',
        image: 'https://ironcool.net/img/carousel-1.jpg',
        url: 'https://ironcool.net/',
        location: 'الرياض',
        category: 'صيانة',
        nameCom: 'iron Cool',
        borderClass: 'silver-border'
    },
    {
       id: 5,
        name: 'نقل العفش بجدة',
        description: 'اكزو موف تقدم خدمة نقل العفش والأثاث في الرياض بأحدث الوسائل وبأفضل الأسعار مع ضمان سلامة الأثاث وخدمة فاخرة.',

        image: 'https://exzofor.com/Artboard%206.avif',
        url: 'https://exzofor.com/',
        location: 'جدة',
        category: 'نقل عفش',
        nameCom: ' ميفوكس',
        borderClass: 'petroleum-border'
    },
    {
        id: 6,
        name: 'خدمات النظافة المنزلية  ',
        description: 'نقدم خدمات تنظيف شاملة للمنازل والفلل والشقق والقصور بأعلى معايير الجودة، مع عمالة تنظيف محترفة وأحدث تقنيات التنظيف',
        image: 'https://getlamaaclean.com/Artboard%206.png',
        url: 'https://getlamaaclean.com/',
        location: 'الرياض',
        category: 'لمعة',
        nameCom: 'لمعة كلين',
        borderClass: 'rose-border'
    },
     {
        id: 7,
        name: 'نقل العفش بالرياض',
        description: 'نقل أثاث وعفش في الرياض بأسلوب حديث، مع ضمان الأمان الكامل للعفش وخدمة عملاء راقية وبأسعار مناسبة.',
        image: 'https://naqlaty-ship.com/Artboard%205.avif',
        url: 'https://naqlaty-ship.com/',
        location: 'الرياض',
        category: 'نقل عفش',
        nameCom: ' نقلاتي ',
        borderClass: 'petroleum-border'
    },
   
     {
        id: 8,
        name: 'نقل العفش بجدة',
        description: 'نقل أثاث وعفش في جدة بأسلوب حديث، مع ضمان الأمان الكامل للعفش وخدمة عملاء راقية وبأسعار مناسبة.',
        image: 'https://meuvex-furniture.com/Artboard%201%20copy.webp',
        url: 'https://meuvex-furniture.com/',
        location: 'جدة',
        category: 'نقل عفش',
        nameCom: ' ميفوكس',
        borderClass: 'petroleum-border'
    },
      {
        id: 9,
        name: 'نقل العفش بالرياض',
        description: 'نقل الأثاث والعفش في الرياض بخدمة فاخرة، أسعار تنافسية، وضمان كامل لسلامة الأثاث.',
        image: 'https://www.primomoves.com/serv2.avif',
        url: 'https://www.primomoves.com/',
        location: 'الرياض',
        category: 'نقل عفش',
        nameCom: ' بريمو موفرز',
        borderClass: 'petroleum-border'
    },
      {
        id: 10,
        name: 'نظافة منزلك  ',
        description: 'نقدم خدمات تنظيف شاملة للمنازل والفلل والشقق والقصور بأعلى معايير الجودة، مع عمالة تنظيف محترفة وأحدث تقنيات التنظيف',
        image: 'https://cleanplusteam.com/pest_control.jpg',
        url: 'https://cleanplusteam.com/',
        location: 'الرياض',
        category: 'بلس كلين ',
        nameCom: 'كلين',
        borderClass: 'rose-border'
    },
      {
        id: 11,
        name: 'النظافه المثالية ',
        description: 'نقدم خدمات تنظيف شاملة للمنازل والفلل والشقق والقصور بأعلى معايير الجودة، مع عمالة تنظيف محترفة وأحدث تقنيات التنظيف',
        image: 'https://www.cleanwithfresh.com/images/blog/home-disinfection.png',
        url: 'https://www.cleanwithfresh.com/',
        location: 'جدة',
        category: ' فريش ',
        nameCom: 'كلين',
        borderClass: 'rose-border'
    },
      {
        id: 12,
        name: 'نقل العفش بالرياض',
       description: 'أفضل حلول نقل الأثاث والعفش في الرياض مع ضمان السرعة والأمان، تغليف احترافي وخدمة عملاء على مدار الساعة بأسعار مغرية.',

        image: 'https://jadmoves.com/Untitled-1Artboard-3%20copy.webp',
        url: 'https://jadmoves.com/',
        location: 'الرياض',
        category: 'نقل عفش',
        nameCom: ' جادة موفرز',
        borderClass: 'petroleum-border'
    },
      {
        id: 13,
        name: ' مكافحة الحرائق ',
       description: 'خدمات مكافحة حرائق متكاملة تشمل الوقاية والتوعية، مع نصائح احترافية لحماية الأرواح والممتلكات وضمان أعلى معايير الأمان والسلامة على مدار الساعة.',

        image: 'https://nazretelebdaa.com/assets/img/Artboard3.webp',
        url: 'https://nazretelebdaa.com/',
        location: 'الرياض',
        category: ' انظيمة السلامة',
        nameCom: ' نظرة الابداع ',
        borderClass: 'petroleum-border'
    },
   
];

// Gulf Services Main Class
class GulfServices {
    constructor() {
        this.currentServices = 3; // Show first 3 services initially
        this.init();
    }

    init() {
        this.createParticles();
        this.setupMobileMenu();
        this.loadServices();
        this.setupEventListeners();
        this.animateOnScroll();
    }

    // Create floating particles
    createParticles() {
        const particlesContainer = document.getElementById('particles');
        if (!particlesContainer) return;

        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 6 + 's';
            particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
            particlesContainer.appendChild(particle);
        }
    }

    // Setup mobile menu functionality
    setupMobileMenu() {
        const hamburger = document.getElementById('hamburger');
        const mobileMenu = document.getElementById('mobileMenu');
        const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
        let isMenuOpen = false;

        const toggleMenu = () => {
            isMenuOpen = !isMenuOpen;
            
            if (isMenuOpen) {
                hamburger.classList.add('active');
                mobileMenu.classList.add('active');
                mobileMenuOverlay.classList.add('active');
                document.body.style.overflow = 'hidden';
            } else {
                hamburger.classList.remove('active');
                mobileMenu.classList.remove('active');
                mobileMenuOverlay.classList.remove('active');
                document.body.style.overflow = '';
            }
        };

        hamburger?.addEventListener('click', toggleMenu);
        mobileMenuOverlay?.addEventListener('click', toggleMenu);

        // Close menu when clicking on links
        const mobileLinks = mobileMenu?.querySelectorAll('a');
        mobileLinks?.forEach(link => {
            link.addEventListener('click', toggleMenu);
        });
    }

    // Load and display services
    loadServices() {
        const servicesGrid = document.getElementById('servicesGrid');
        if (!servicesGrid) return;

        servicesGrid.innerHTML = '';
        
        const servicesToShow = services.slice(0, this.currentServices);
        
        servicesToShow.forEach((service, index) => {
            const serviceCard = this.createServiceCard(service, index);
            servicesGrid.appendChild(serviceCard);
        });

        // Update load more button
        const loadMoreBtn = document.getElementById('loadMoreServices');
        if (loadMoreBtn) {
            if (this.currentServices >= services.length) {
                loadMoreBtn.style.display = 'none';
            } else {
                loadMoreBtn.style.display = 'inline-flex';
            }
        }
    }

    // Create service card element
    createServiceCard(service, index) {
        const card = document.createElement('div');
        card.className = `service-card ${service.borderClass}`;
        card.style.animationDelay = `${index * 0.1}s`;
        
        card.innerHTML = `
            <div class="relative">
                <img src="${service.image}" alt="${service.name}" class="w-full h-48 object-cover">
                <div class="absolute top-4 left-4 bg-petroleum text-white px-3 py-1 rounded-full text-sm font-medium">
                    ${service.location}
                </div>
                <div class="absolute top-4 right-4 bg-rose-gold text-white px-3 py-1 rounded-full text-sm font-medium">
                    ${service.category}
                </div>
                <div class="absolute bottom-4 right-4 bg-charcoal bg-opacity-80 text-white px-3 py-1 rounded-full text-sm font-medium">
                    ${service.nameCom}
                </div>
            </div>
            <div class="p-6">
                <h3 class="text-xl font-bold text-charcoal mb-3 font-luxury">${service.name}</h3>
                <p class="text-silver-mist mb-4 font-elegant leading-relaxed">${service.description}</p>
                <div class="flex items-center justify-between">
                    <div class="flex space-x-2 space-x-reverse">
                        <button class="w-10 h-10 bg-rose-gold bg-opacity-20 hover:bg-opacity-100 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110" title="إضافة للمفضلة">
                            <i class="fas fa-heart text-rose-gold hover:text-white"></i>
                        </button>
                        <button class="w-10 h-10 bg-petroleum bg-opacity-20 hover:bg-opacity-100 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110" title="مشاركة">
                            <i class="fas fa-share text-petroleum hover:text-white"></i>
                        </button>
                    </div>
                    <a href="${service.url}" class="rose-btn px-6 py-2 text-sm">
                        <i class="fas fa-external-link-alt ml-2"></i>
                        زيارة الموقع
                    </a>
                </div>
            </div>
        `;
        
        return card;
    }

    // Setup event listeners
    setupEventListeners() {
        // Load more services button
        const loadMoreBtn = document.getElementById('loadMoreServices');
        loadMoreBtn?.addEventListener('click', () => {
            this.currentServices += 3;
            this.loadServices();
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    // Animate elements on scroll
    animateOnScroll() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe all cards and sections
        document.querySelectorAll('.luxury-card, .service-card').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'all 0.6s ease-out';
            observer.observe(el);
        });
    }

    // Add new service (for future use)
    static addService(serviceData) {
        services.push({
            id: services.length + 1,
            ...serviceData
        });
    }
}

// Utility functions
function scrollToServices() {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// Initialize the website
document.addEventListener('DOMContentLoaded', () => {
    new GulfServices();
});

// Advanced Animations
function createRippleEffect(element, event) {
    const ripple = document.createElement('span');
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple');
    
    element.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// Add ripple effect to buttons
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.luxury-btn, .rose-btn').forEach(button => {
        button.addEventListener('click', function(e) {
            createRippleEffect(this, e);
        });
    });
});

// Magnetic effect for cards
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.luxury-card, .service-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
        });
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.luxury-gradient');
    if (parallax) {
        const speed = scrolled * 0.5;
        parallax.style.transform = `translateY(${speed}px)`;
    }
});

// Text typing animation
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(26, 37, 47, 0.98)';
        navbar.style.backdropFilter = 'blur(25px)';
    } else {
        navbar.style.background = 'rgba(26, 37, 47, 0.95)';
        navbar.style.backdropFilter = 'blur(20px)';
    }
});

// Export for global access
window.GulfServices = GulfServices;





// Blog Posts Data organized by categories
const blogData = {
    moving: [
        {
            id: 1,
            title: 'الحلول الشاملة لعملية نقل العفش بالكويت',
            excerpt: ' اكتشف الحلول الشاملة لعملية نقل العفش بالكويت من التخطيط الدقيق حتى إعادة ترتيب العفش في الموقع الجديد — نقدم لك خدمة متكاملة تضمن لك الأمان، السرعة، والدقة في كل خطوة',
            image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=300&fit=crop',
            category: 'moving',
            date: '',
            readTime: '',
            author: 'فريق خدمات الخليج',
                link: './comprehensive-transportation-solutions/index.html' 
        },
        {
            id: 2,
            title: 'دليل شامل: أفضل طرق ترتيب الأثاث في المنزل',
            excerpt: 'استكشف دليلنا الشامل لأفضل الطرق المبتكرة والعملية لترتيب الأثاث داخل المنزل بأسلوب أنيق ومنظم يوفر المساحة ويعزز الراحة',
            image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=500&h=300&fit=crop',
            category: 'moving',
            date: '',
            readTime: '',
            author: 'فريق النقل التجاري',
                link: './furniture-arrangement/index.html' 
        },
        {
            id: 3,
            title: 'دليل شامل لاختيار شركة نقل أثاث موثوقة',
            excerpt: 'دليل شامل يساعدك في اختيار شركة نقل أثاث موثوقة تضمن الأمان والاحترافية والسرعة في تنفيذ عملية النقل دون عناء.',
            image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=300&fit=crop',
            category: 'moving',
            date: '',
            readTime: '',
            author: 'فريق النقل السكني',
                link: './furniture-moving-companies/index.html' 
        }
    ],
    cleaning: [
        {
            id: 4,
            title: 'شركات التنظيف في السعودية',
            excerpt: 'استكشف معنا دليلًا متكاملًا حول أفضل شركات التنظيف في السعودية، حيث نُسلط الضوء على معايير الجودة والاحترافية، لنساعدك في اختيار الشركة الأنسب لتنظيف المنازل، المكاتب، الفلل، المساجد، وحتى خزانات المياه، مع ضمان نتائج مذهلة وراحة تدوم',
            image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=500&h=300&fit=crop',
            category: 'cleaning',
            date: '',
            readTime: '',
            author: 'فريق التنظيف',
            link: './cleaning-companies/index.html' 
        },
        {
            id: 5,
            title: 'دليل شامل لأساليب وخدمات التنظيف',
            excerpt: 'دليل شامل لأساليب وخدمات التنظيف: استكشف أحدث تقنيات التنظيف وحلول العناية بالمنازل والمكاتب، مع نصائح لاختيار أفضل خدمات التنظيف لضمان بيئة نظيفة وصحية تدوم طويلًا.',
            image: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=500&h=300&fit=crop',
            category: 'cleaning',
            date: '',
            readTime: '',
            author: 'فريق التنظيف التجاري',
            link: './cleaning-methods-and-services/index.html'
        },
        {
            id: 6,
            title: ' خدمات التنظيف المهنية في الرياض ',
            excerpt: ' دليلك الشامل إلى أفضل خدمات التنظيف في الرياض: حلول مبتكرة، تقنيات حديثة، وفرق عمل محترفة تضمن لك نظافة مثالية في المنازل والمكاتب.',
            image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=500&h=300&fit=crop',
            category: 'cleaning',
            date: '',
            readTime: '',
            author: 'فريق التنظيف السكني',
            link: './cleaning-services/index.html'
        }
    ],
    maintenance: [
        {
            id: 7,
            title: 'صيانة وتعديل المكيفات  ',
            excerpt: 'دليل شامل لصيانة أنظمة التكييف، يوضح أفضل الممارسات لإطالة عمر المكيف، وخطوات التنظيف الدورية، ونصائح الحفاظ على كفاءة التبريد وتوفير استهلاك الطاقة.',
            image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=500&h=300&fit=crop',
            category: 'maintenance',
            date: '',
            readTime: '',
            author: 'فريق الصيانة',
            link: './air-conditioner-maintenance/index.html'
        },
        {
            id: 8,
            title: 'مكافحة الحرائق: دليل شامل للسلامة والوقاية',
            excerpt: 'الدليل الكامل لمكافحة الحرائق والوقاية منها: استراتيجيات الوقاية، وأساليب الإنقاذ، وخطط السلامة لحماية الأرواح والممتلكات، مع خطوات وإرشادات شاملة لتحقيق أعلى مستويات الأمان والسلامة في المنازل والأماكن العامة.',

            image: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=500&h=300&fit=crop',
            category: 'maintenance',
            date: '',
            readTime: '',
            author: 'فريق صيانة الأنظمة',
            link: './fire-fighting/index.html'
        },
        // {
        //     id: 9,
        //     title: 'صيانة الأنظمة الكهربائية في مول تجاري',
        //     excerpt: 'مشروع صيانة وتحديث الأنظمة الكهربائية في مول تجاري كبير بالكويت. تم العمل على مدار 3 أيام دون توقف العمليات التجارية.',
        //     image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=500&h=300&fit=crop',
        //     category: 'maintenance',
        //     date: '2023-12-28',
        //     readTime: '5 دقائق',
        //     author: 'فريق الصيانة الكهربائية',
        //     link: '#'
            
        // }
    ]
};

// Blog functionality
class BlogManager {
    constructor() {
        this.init();
    }

    init() {
        this.createBlogParticles();
        this.renderAllSections();
    }

    createBlogParticles() {
        const blogParticles = document.getElementById('blogParticles');
        if (!blogParticles) return;

        for (let i = 0; i < 15; i++) {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: absolute;
                width: ${Math.random() * 6 + 2}px;
                height: ${Math.random() * 6 + 2}px;
                background: linear-gradient(45deg, var(--petroleum), var(--rose-gold));
                border-radius: 50%;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                animation: blogFloat ${Math.random() * 10 + 10}s infinite linear;
                opacity: ${Math.random() * 0.5 + 0.2};
            `;
            blogParticles.appendChild(particle);
        }
    }

    renderAllSections() {
        this.renderSection('moving', 'movingCards');
        this.renderSection('cleaning', 'cleaningCards');
        this.renderSection('maintenance', 'maintenanceCards');
    }

    renderSection(category, containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        const posts = blogData[category];
        container.innerHTML = '';
        
        posts.forEach((post, index) => {
            const postElement = this.createBlogCard(post);
            container.appendChild(postElement);
            
            // Add staggered animation
            setTimeout(() => {
                postElement.style.opacity = '1';
                postElement.style.transform = 'translateY(0)';
            }, index * 200);
        });
    }

    createBlogCard(post) {
        const card = document.createElement('div');
        card.className = 'blog-card';
        card.style.cssText = 'opacity: 0; transform: translateY(30px); transition: all 0.6s ease;';

        const categoryClass = `blog-card-category--${post.category}`;
        const categoryNames = {
            moving: 'نقل العفش',
            cleaning: 'التنظيف',
            maintenance: 'الصيانة'
        };

        card.innerHTML = `
        <img src="${post.image}" alt="${post.title}" class="blog-card-image">
        <div class="blog-card-content">
        <span class="blog-card-category ${categoryClass}">${categoryNames[post.category]}</span>
        <h3 class="blog-card-title">${post.title}</h3>
        <p class="blog-card-excerpt">${post.excerpt}</p>
        <div class="blog-card-meta">
            <span><i class="fas fa-calendar ml-1"></i> ${this.formatDate(post.date)}</span>
            <span><i class="fas fa-clock ml-1"></i> ${post.readTime}</span>
        </div>
        <a href="${post.link}" class="blog-card-button">
            <i class="fas fa-arrow-left ml-2"></i>
            عرض التفاصيل
        </a>
        </div>
        `;

        return card;
    }

    formatDate(dateString) {
        const date = new Date(dateString);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('ar-SA', options);
    }

    openBlogPost(postId) {
        // Find the post in all categories
        let post = null;
        for (const category in blogData) {
            post = blogData[category].find(p => p.id === postId);
            if (post) break;
        }

        if (post) {
            // In a real application, this would navigate to a dedicated page
            // For now, we'll show an alert with post details
            alert(`عنوان المقال: ${post.title}\n\nالفئة: ${this.getCategoryName(post.category)}\nتاريخ النشر: ${this.formatDate(post.date)}\nوقت القراءة: ${post.readTime}\nالكاتب: ${post.author}\n\n${post.excerpt}\n\nسيتم توجيهك إلى صفحة المقال الكاملة...`);
            
            // Here you would typically do:
            // window.location.href = `/blog/${post.id}`;
            // or use a router in a SPA
        }
    }

    getCategoryName(category) {
        const categoryNames = {
            moving: 'نقل العفش',
            cleaning: 'التنظيف',
            maintenance: 'الصيانة'
        };
        return categoryNames[category] || category;
    }
}

// Initialize blog when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    window.blogManager = new BlogManager();
});
    



          
    // Footer Particles Animation
    function createFooterParticles() {
        const footerParticles = document.getElementById('footerParticles');
        if (!footerParticles) return;

        for (let i = 0; i < 20; i++) {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: absolute;
                width: ${Math.random() * 4 + 2}px;
                height: ${Math.random() * 4 + 2}px;
                background: linear-gradient(45deg, var(--petroleum), var(--rose-gold));
                border-radius: 50%;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                animation: footerFloat ${Math.random() * 15 + 15}s infinite linear;
                opacity: ${Math.random() * 0.3 + 0.1};
            `;
            footerParticles.appendChild(particle);
        }
    }

    

    // Initialize when DOM is loaded
    document.addEventListener('DOMContentLoaded', function() {
        createFooterParticles();
        handleNewsletterSubmit();
    });
    
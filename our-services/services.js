// Gulf Services Website - Main JavaScript with New Color Scheme
// New Color Palette: Charcoal, Silver, Petroleum Blue, Rose Gold

// Services data
const services = [
  {
    id: 1,
    name: "نقل العفش بالكويت",
    description:
      "خدمة نقل العفش والأثاث في الكويت بأحدث الوسائل وأفضل الأسعار مع ضمان سلامة الأثاث وخدمة فاخرة",
    image: "../assets/images/Furniture-moving-in-Kuwait.webp",
    url: "https://www.bashir-mover.com/",
    location: "الكويت",
    category: "  اثاث الكويت ",
    nameCom: "بشاير الخير  ",
    borderClass: "petroleum-border",
  },

  {
    id: 2,
    name: "تنظيف المنازل جدة",
    description:
      "خدمة تنظيف شاملة للمنازل والشقق بعمالة مدربة ومواد تنظيف عالية الجودة مع ضمان النظافة",
    image: "https://naqaa-clean.com/blog/water-leak-detection.png",

    url: "https://naqaa-clean.com/",
    location: "جدة",
    category: "تنظيف",
    nameCom: " نقاء كلين",
    borderClass: "rose-border",
  },
  {
    id: 3,
    name: "نقل العفش بجدة ",
    description:
      "صيانة شاملة واحترافية لأنظمة التكييف في الرياض تشمل التنظيف، الفحص، وإصلاح الأعطال، مع أسعار تنافسية، وخدمة سريعة، وضمان كفاءة التبريد والأداء المثالي طوال العام.",

    image: "../assets/images/Furniture-moving-in-Jeddah.webp",
    url: "https://homo-ve.com/",
    location: "جدة",
    category: "نقل عفش",
    nameCom: "Homve",
    borderClass: "petroleum-border",
  },

  {
    id: 4,
    name: "صيانة المكيفات بالرياض",
    description:
      "خدمة صيانة وتنظيف المكيفات في الرياض بأحدث التقنيات وأفضل الأسعار مع ضمان شامل على الخدمة",
    image: "https://ironcool.net/img/carousel-1.jpg",
    url: "https://ironcool.net/",
    location: "الرياض",
    category: "صيانة",
    nameCom: "iron Cool",
    borderClass: "silver-border",
  },
  {
    id: 5,
    name: "نقل العفش بجدة",
    description:
      "اكزو موف تقدم خدمة نقل العفش والأثاث في الرياض بأحدث الوسائل وبأفضل الأسعار مع ضمان سلامة الأثاث وخدمة فاخرة.",

    image: "../assets/images/Furniture-moving.webp",
    url: "https://exzofor.com/",
    location: "جدة",
    category: "نقل عفش",
    nameCom: " ميفوكس",
    borderClass: "petroleum-border",
  },
  {
    id: 6,
    name: "خدمات النظافة المنزلية  ",
    description:
      "نقدم خدمات تنظيف شاملة للمنازل والفلل والشقق والقصور بأعلى معايير الجودة، مع عمالة تنظيف محترفة وأحدث تقنيات التنظيف",
    image: "../assets/images/hero-img.webp",
    url: "https://getlamaaclean.com/",
    location: "الرياض",
    category: "لمعة",
    nameCom: "لمعة كلين",
    borderClass: "rose-border",
  },
  {
    id: 7,
    name: "نقل العفش بالرياض",
    description:
      "نقل أثاث وعفش في الرياض بأسلوب حديث، مع ضمان الأمان الكامل للعفش وخدمة عملاء راقية وبأسعار مناسبة.",
    image: "../assets/images/Furniture-moving-in-Riyadh.webp",

    url: "https://naqlaty-ship.com/",
    location: "الرياض",
    category: "نقل عفش",
    nameCom: " نقلاتي ",
    borderClass: "petroleum-border",
  },

  {
    id: 8,
    name: "نقل العفش بجدة",
    description:
      "نقدم لكم خدمات نقل الأثاث والعفش داخل جدة بأحدث الأساليب، مع ضمان الحماية الكاملة لممتلكاتكم، وفريق خدمة عملاء متميز، وأسعار تنافسية تناسب الجميع.",
    image: "https://meuvex-furniture.com/Artboard%201%20copy.webp",
    url: "https://meuvex-furniture.com/",
    location: "جدة",
    category: "نقل عفش",
    nameCom: " ميفوكس",
    borderClass: "petroleum-border",
  },
  {
    id: 9,
    name: "نقل العفش بالرياض",
    description:
      "نقل الأثاث والعفش في الرياض بخدمة فاخرة، أسعار تنافسية، وضمان كامل لسلامة الأثاث.",

    image: "../assets/images/Furniture-transportation.webp",

    url: "https://www.primomoves.com/",
    location: "الرياض",
    category: "نقل عفش",
    nameCom: " بريمو موفرز",
    borderClass: "petroleum-border",
  },
  {
    id: 10,
    name: "نظافة منزلك  ",
    description:
      "نقدم خدمات تنظيف شاملة للمنازل والفلل والشقق والقصور بأعلى معايير الجودة، مع عمالة تنظيف محترفة وأحدث تقنيات التنظيف",
    image: "../assets/images/cleanplus.webp",
    url: "https://cleanplusteam.com/",
    location: "الرياض",
    category: "بلس كلين ",
    nameCom: "كلين",
    borderClass: "rose-border",
  },
  {
    id: 11,
    name: "النظافه المثالية ",
    description:
      "نقدم خدمات تنظيف شاملة للمنازل والفلل والشقق والقصور بأعلى معايير الجودة، مع عمالة تنظيف محترفة وأحدث تقنيات التنظيف",
    image: "https://www.cleanwithfresh.com/images/blog/home-disinfection.png",
    url: "https://www.cleanwithfresh.com/",
    location: "جدة",
    category: " فريش ",
    nameCom: "كلين",
    borderClass: "rose-border",
  },
  {
    id: 12,
    name: "نقل العفش بالرياض",
    description:
      "أفضل حلول نقل الأثاث والعفش في الرياض مع ضمان السرعة والأمان، تغليف احترافي وخدمة عملاء على مدار الساعة بأسعار مغرية.",

    image: "../assets/images/Riyadh-Furniture.webp",

    url: "https://jadmoves.com/",
    location: "الرياض",
    category: "نقل عفش",
    nameCom: " جادة موفرز",
    borderClass: "petroleum-border",
  },
  {
    id: 13,
    name: " مكافحة الحرائق ",
    description:
      "خدمات مكافحة حرائق متكاملة تشمل الوقاية والتوعية، مع نصائح احترافية لحماية الأرواح والممتلكات وضمان أعلى معايير الأمان والسلامة على مدار الساعة.",

    image: "https://nazretelebdaa.com/assets/img/Artboard3.webp",
    url: "https://nazretelebdaa.com/",
    location: "الرياض",
    category: " انظيمة السلامة",
    nameCom: " نظرة الابداع ",
    borderClass: "petroleum-border",
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
    const particlesContainer = document.getElementById("particles");
    if (!particlesContainer) return;

    for (let i = 0; i < 50; i++) {
      const particle = document.createElement("div");
      particle.className = "particle";
      particle.style.left = Math.random() * 100 + "%";
      particle.style.top = Math.random() * 100 + "%";
      particle.style.animationDelay = Math.random() * 6 + "s";
      particle.style.animationDuration = Math.random() * 3 + 3 + "s";
      particlesContainer.appendChild(particle);
    }
  }

  // Setup mobile menu functionality
  setupMobileMenu() {
    const hamburger = document.getElementById("hamburger");
    const mobileMenu = document.getElementById("mobileMenu");
    const mobileMenuOverlay = document.getElementById("mobileMenuOverlay");
    let isMenuOpen = false;

    const toggleMenu = () => {
      isMenuOpen = !isMenuOpen;

      if (isMenuOpen) {
        hamburger.classList.add("active");
        mobileMenu.classList.add("active");
        mobileMenuOverlay.classList.add("active");
        document.body.style.overflow = "hidden";
      } else {
        hamburger.classList.remove("active");
        mobileMenu.classList.remove("active");
        mobileMenuOverlay.classList.remove("active");
        document.body.style.overflow = "";
      }
    };

    hamburger?.addEventListener("click", toggleMenu);
    mobileMenuOverlay?.addEventListener("click", toggleMenu);

    // Close menu when clicking on links
    const mobileLinks = mobileMenu?.querySelectorAll("a");
    mobileLinks?.forEach((link) => {
      link.addEventListener("click", toggleMenu);
    });
  }
  // Load and display services
  loadServices() {
    const servicesGrid = document.getElementById("servicesGrid");
    if (!servicesGrid) return;

    servicesGrid.innerHTML = "";

    const servicesToShow = services.slice(0, this.currentServices);

    servicesToShow.forEach((service, index) => {
      const serviceCard = this.createServiceCard(service, index);
      servicesGrid.appendChild(serviceCard);
    });

    // Update load more button
    const loadMoreBtn = document.getElementById("loadMoreServices");
    if (loadMoreBtn) {
      if (this.currentServices >= services.length) {
        loadMoreBtn.style.display = "none";
      } else {
        loadMoreBtn.style.display = "inline-flex";
      }
    }
  }

  // Create service card element
  createServiceCard(service, index) {
    const card = document.createElement("div");
    card.className = `service-card ${service.borderClass}`;
    card.style.animationDelay = `${index * 0.1}s`;

    card.innerHTML = `
            <div class="relative">
                <img src="${service.image}" alt="${service.name}" class="w-full h-48 object-cover">
                <div style="background-color: #153052; color: #e8c468" class="absolute top-4 left-4  text-white px-3 py-1 rounded-full text-sm font-medium">
                    ${service.location}
                </div>
                <div style="background-color: #153052; color: #e8c468" class="absolute top-4 right-4 bg-rose-gold text-white px-3 py-1 rounded-full text-sm font-medium">
                    ${service.category}
                </div>
                <div  class="absolute bottom-4 right-4 bg-charcoal bg-opacity-80 text-white px-3 py-1 rounded-full text-sm font-medium">
                    ${service.nameCom}
                </div>
            </div>
            <div class="p-6">
                <h3 class="text-xl font-bold text-yellow-600 mb-3 font-luxury">
                    <a href="${service.url}" class="hover:underline hover:text-yellow-700 transition-colors duration-300">
                        ${service.name}←
                    </a>
                </h3>

                <p class="text- black mb-4 font-elegant leading-relaxed">${service.description}</p>
                <div class="flex items-center justify-between">
                  <div class="flex">
                      <a href="https://wa.me/966565265233" target="_blank" title="تواصل واتساب"
                        class="w-12 h-12 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg">
                          <i class="fab fa-whatsapp text-white text-2xl"></i>
                      </a>
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
    const loadMoreBtn = document.getElementById("loadMoreServices");
    loadMoreBtn?.addEventListener("click", () => {
      this.currentServices += 3;
      this.loadServices();
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      });
    });
  }

  // Animate elements on scroll
  animateOnScroll() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    }, observerOptions);

    // Observe all cards and sections
    document.querySelectorAll(".luxury-card, .service-card").forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(30px)";
      el.style.transition = "all 0.6s ease-out";
      observer.observe(el);
    });
  }

  // Add new service (for future use)
  static addService(serviceData) {
    services.push({
      id: services.length + 1,
      ...serviceData,
    });
  }
}

// Utility functions
function scrollToServices() {
  const servicesSection = document.getElementById("services");
  if (servicesSection) {
    servicesSection.scrollIntoView({ behavior: "smooth" });
  }
}

// Initialize the website
document.addEventListener("DOMContentLoaded", () => {
  new GulfServices();
});

// Advanced Animations
function createRippleEffect(element, event) {
  const ripple = document.createElement("span");
  const rect = element.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  const x = event.clientX - rect.left - size / 2;
  const y = event.clientY - rect.top - size / 2;

  ripple.style.width = ripple.style.height = size + "px";
  ripple.style.left = x + "px";
  ripple.style.top = y + "px";
  ripple.classList.add("ripple");

  element.appendChild(ripple);

  setTimeout(() => {
    ripple.remove();
  }, 600);
}

// Add ripple effect to buttons
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".luxury-btn, .rose-btn").forEach((button) => {
    button.addEventListener("click", function (e) {
      createRippleEffect(this, e);
    });
  });
});

// Magnetic effect for cards
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".luxury-card, .service-card");

  cards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = (y - centerY) / 10;
      const rotateY = (centerX - x) / 10;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform =
        "perspective(1000px) rotateX(0) rotateY(0) translateZ(0)";
    });
  });
});

// Parallax effect for hero section
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const parallax = document.querySelector(".luxury-gradient");
  if (parallax) {
    const speed = scrolled * 0.5;
    parallax.style.transform = `translateY(${speed}px)`;
  }
});

// Text typing animation
function typeWriter(element, text, speed = 100) {
  let i = 0;
  element.innerHTML = "";

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
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 100) {
    navbar.style.background = "var(--petroleum)";
    navbar.style.backdropFilter = "blur(25px)";
  } else {
    navbar.style.background = "var(--petroleum)";
    navbar.style.backdropFilter = "blur(20px)";
  }
});

// Export for global access
window.GulfServices = GulfServices;

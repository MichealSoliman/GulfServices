// Gulf Services Website - Main JavaScript with New Color Scheme
// New Color Palette: Charcoal, Silver, Petroleum Blue, Rose Gold



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










// Blog Posts Data organized by categories
const blogData = {
  moving: [
    {
      id: 1,
      title: "الحلول الشاملة لعملية نقل العفش بالكويت",
      excerpt:
        " اكتشف الحلول الشاملة لعملية نقل العفش بالكويت من التخطيط الدقيق حتى إعادة ترتيب العفش في الموقع الجديد — نقدم لك خدمة متكاملة تضمن لك الأمان، السرعة، والدقة في كل خطوة",
      image:
        "../assets/images/Kuwait-furniture.webp",
      category: "moving",
     
      author: "فريق خدمات الخليج",
      link: "../comprehensive-transportation-solutions/index.html",
    },
    {
      id: 2,
      title: "دليل شامل: أفضل طرق ترتيب الأثاث في المنزل",
      excerpt:
        "استكشف دليلنا الشامل لأفضل الطرق المبتكرة والعملية لترتيب الأثاث داخل المنزل بأسلوب أنيق ومنظم يوفر المساحة ويعزز الراحة",
      image:
        "../assets/images/Furniture-arrangement.webp",
      category: "moving",
     
      author: "فريق النقل التجاري",
      link: "../furniture-arrangement/index.html",
    },
    {
      id: 3,
      title: "دليل شامل لاختيار شركة نقل أثاث موثوقة",
      excerpt:
        "دليل شامل يساعدك في اختيار شركة نقل أثاث موثوقة تضمن الأمان والاحترافية والسرعة في تنفيذ عملية النقل دون عناء.",
      image:
        "../assets/images/Furniture-company.webp",
      category: "moving",
     
      author: "فريق النقل السكني",
      link: "../furniture-moving-companies/index.html",
    },
     {
      id: 3,
      title: " الاثاث والعفش في الخليج",
      excerpt:"دليلك لاختيار أفضل شركات نقل الأثاث والعفش في الخليج العربي، مع ضمان الأمان الكامل والخدمة السريعة دون متاعب",
      image:
        "../assets/images/Furniture-moving.webp",
      category: "moving",
    
      author: "فريق النقل السكني",
      link: "../furniture-in-the-gulf/index.html",
    },
     {
      id: 3,
      title: " نقل الأثاث والعفش في الرياض ",
      excerpt:
        "دليل شامل يساعدك في اختيار عملية نقل أثاث في جميع الاماكن تتميز بالأمان والاحترافية والسرعة في تنفيذ عملية النقل دون عناء.",
      image:
        "../assets/images/Furniture-transportation.webp",
      category: "moving",
    
      author: "فريق النقل السكني",
      link: "../furniture-moving-in-the-Gulf/index.html",
    },
  ],
  cleaning: [
    {
      id: 4,
      title: "شركات التنظيف في السعودية",
      excerpt:
        "استكشف معنا دليلًا متكاملًا حول أفضل شركات التنظيف في السعودية، حيث نُسلط الضوء على معايير الجودة والاحترافية، لنساعدك في اختيار الشركة الأنسب لتنظيف المنازل، المكاتب، الفلل، المساجد، وحتى خزانات المياه، مع ضمان نتائج مذهلة وراحة تدوم",
      image:
        "../assets/images/Cleaning-in-Saudi-Arabia.webp",
      category: "cleaning",
     
      author: "فريق التنظيف",
      link: "../cleaning-companies/index.html",
    },
    {
      id: 5,
      title: "دليل شامل لأساليب وخدمات التنظيف",
      excerpt:
        "دليل شامل لأساليب وخدمات التنظيف: استكشف أحدث تقنيات التنظيف وحلول العناية بالمنازل والمكاتب، مع نصائح لاختيار أفضل خدمات التنظيف لضمان بيئة نظيفة وصحية تدوم طويلًا.",
      image:
        "../assets/images/Cleaning-methods.webp",
      category: "cleaning",
     
      author: "فريق التنظيف التجاري",
      link: "../cleaning-methods-and-services/index.html",
    },
    {
      id: 6,
      title: " خدمات التنظيف المهنية في الرياض ",
      excerpt:
        " دليلك الشامل إلى أفضل خدمات التنظيف في الرياض: حلول مبتكرة، تقنيات حديثة، وفرق عمل محترفة تضمن لك نظافة مثالية في المنازل والمكاتب.",
      image:
        "../assets/images/Cleaning-services.webp",
      category: "cleaning",
     
      author: "فريق التنظيف السكني",
      link: "../cleaning-services/index.html",
    },
       {
      id: 6,
      title: " النظافة في الخليج العربي",
      excerpt:" دليلك الشامل إلى أفضل خدمات التنظيف في الخليج العربي: حلول مبتكرة، تقنيات حديثة، وفرق عمل محترفة تضمن لك نظافة مثالية في المنازل والمكاتب",
      image:
        "../assets/images/Cleanliness-in-the-Gulf.webp",
      category: "cleaning",
    
      author: " التنظيف الخليجي",
      link: "../cleanliness-in-the-Gulf/index.html",
    },
  ],
  maintenance: [
    {
      id: 7,
      title: "صيانة وتعديل المكيفات  ",
      excerpt:
        "دليل شامل لصيانة أنظمة التكييف، يوضح أفضل الممارسات لإطالة عمر المكيف، وخطوات التنظيف الدورية، ونصائح الحفاظ على كفاءة التبريد وتوفير استهلاك الطاقة.",
      image:
        "../assets/images/Air-conditioner-maintenance.webp",
      category: "maintenance",
     
      author: "فريق الصيانة",
      link: "../air-conditioner-maintenance/index.html",
    },
    {
      id: 8,
      title: "مكافحة الحرائق: دليل شامل للسلامة والوقاية",
      excerpt:
        "الدليل الكامل لمكافحة الحرائق والوقاية منها: استراتيجيات الوقاية، وأساليب الإنقاذ، وخطط السلامة لحماية الأرواح والممتلكات، مع خطوات وإرشادات شاملة لتحقيق أعلى مستويات الأمان والسلامة في المنازل والأماكن العامة.",

      image:
        "../assets/images/fire-fighting.webp",
      category: "maintenance",
     
      author: "فريق صيانة الأنظمة",
      link: "../fire-fighting/index.html",
    },
  
  ],
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
    const blogParticles = document.getElementById("blogParticles");
    if (!blogParticles) return;

    for (let i = 0; i < 15; i++) {
      const particle = document.createElement("div");
      particle.style.cssText = `
                position: absolute;
                width: ${Math.random() * 6 + 2}px;
                height: ${Math.random() * 6 + 2}px;
                background: linear-gradient(45deg, var(--petroleum), var(--rose-gold));
                border-radius: 50%;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                animation: blogFloat ${
                  Math.random() * 10 + 10
                }s infinite linear;
                opacity: ${Math.random() * 0.5 + 0.2};
            `;
      blogParticles.appendChild(particle);
    }
  }

  renderAllSections() {
    this.renderSection("moving", "movingCards");
    this.renderSection("cleaning", "cleaningCards");
    this.renderSection("maintenance", "maintenanceCards");
  }

  renderSection(category, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const posts = blogData[category];
    container.innerHTML = "";

    posts.forEach((post, index) => {
      const postElement = this.createBlogCard(post);
      container.appendChild(postElement);

      // Add staggered animation
      setTimeout(() => {
        postElement.style.opacity = "1";
        postElement.style.transform = "translateY(0)";
      }, index * 200);
    });
  }

  createBlogCard(post) {
    const card = document.createElement("div");
    card.className = "blog-card";
    card.style.cssText =
      "opacity: 0; transform: translateY(30px); transition: all 0.6s ease;";

    const categoryClass = `blog-card-category--${post.category}`;
    const categoryNames = {
      moving: "نقل العفش",
      cleaning: "التنظيف",
      maintenance: "الصيانة",
    };

    card.innerHTML = `
        <img src="${post.image}" alt="${post.title}" class="blog-card-image">
        <div class="blog-card-content">
        <span class="blog-card-category ${categoryClass}">${
      categoryNames[post.category]
    }</span>
        <h3 class="blog-card-title">${post.title}</h3>
        <p class="blog-card-excerpt">${post.excerpt}</p>
       
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
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString("ar-SA", options);
  }

  openBlogPost(postId) {
    // Find the post in all categories
    let post = null;
    for (const category in blogData) {
      post = blogData[category].find((p) => p.id === postId);
      if (post) break;
    }

    if (post) {
      // In a real application, this would navigate to a dedicated page
      // For now, we'll show an alert with post details
      alert(
        `عنوان المقال: ${post.title}\n\nالفئة: ${this.getCategoryName(
          post.category
        )}\nتاريخ النشر: ${this.formatDate(post.date)}\nوقت القراءة: ${
          post.readTime
        }\nالكاتب: ${post.author}\n\n${
          post.excerpt
        }\n\nسيتم توجيهك إلى صفحة المقال الكاملة...`
      );

      // Here you would typically do:
      // window.location.href = `/blog/${post.id}`;
      // or use a router in a SPA
    }
  }

  getCategoryName(category) {
    const categoryNames = {
      moving: "نقل العفش",
      cleaning: "التنظيف",
      maintenance: "الصيانة",
    };
    return categoryNames[category] || category;
  }
}

// Initialize blog when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  window.blogManager = new BlogManager();
});

// Footer Particles Animation
function createFooterParticles() {
  const footerParticles = document.getElementById("footerParticles");
  if (!footerParticles) return;

  for (let i = 0; i < 20; i++) {
    const particle = document.createElement("div");
    particle.style.cssText = `
                position: absolute;
                width: ${Math.random() * 4 + 2}px;
                height: ${Math.random() * 4 + 2}px;
                background: linear-gradient(45deg, var(--petroleum), var(--rose-gold));
                border-radius: 50%;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                animation: footerFloat ${
                  Math.random() * 15 + 15
                }s infinite linear;
                opacity: ${Math.random() * 0.3 + 0.1};
            `;
    footerParticles.appendChild(particle);
  }
}

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  createFooterParticles();
  handleNewsletterSubmit();
});

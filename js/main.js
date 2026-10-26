/**
 * Vantage Motorworks - Premium Automotive Website
 * Main JavaScript Controller
 * Multi-page compatible, reactive & accessible
 */

document.addEventListener("DOMContentLoaded", () => {
  // Global components across all pages
  initNavbar();
  initFooterAndNewsletter();
  initScrollAnimations();

  // Page-specific components (initialized conditionally if elements exist)
  initHeroSlideshow();
  initHeroWidget();
  initBrandSlider();
  initServicesGrid();
  initBrandsPage();
  initTiltEffects();
  initStatsCounter();
  initGallery();
  initTestimonialsSlider();
  initEstimator();
  initBookingForm();
  initContactForm();
});

/* ===================================================================
   1. NAVBAR & NAVIGATION (ACROSS ALL PAGES)
   =================================================================== */
function initNavbar() {
  const navbar = document.getElementById("navbar");
  const mobileToggle = document.getElementById("mobileToggle");
  const mobileDrawer = document.getElementById("mobileDrawer");
  const drawerClose = document.getElementById("drawerClose");
  const drawerBackdrop = document.getElementById("drawerBackdrop");
  const backToTop = document.getElementById("backToTop");

  // Sticky header on scroll
  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (navbar) {
      if (scrollY > 40) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    }

    if (backToTop) {
      if (scrollY > 500) {
        backToTop.classList.add("show");
      } else {
        backToTop.classList.remove("show");
      }
    }
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();

  // Highlight active page link based on pathname
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-link, .mobile-nav-link").forEach(link => {
    const href = link.getAttribute("href");
    if (href === currentPath || (currentPath === "" && href === "index.html")) {
      link.classList.add("active");
    } else if (href && !href.includes(".html") && currentPath === "index.html" && href === "index.html") {
      link.classList.add("active");
    }
  });

  // Mobile Drawer Toggle
  const openDrawer = () => {
    if (!mobileDrawer) return;
    mobileDrawer.classList.add("open");
    if (drawerBackdrop) drawerBackdrop.classList.add("active");
    if (mobileToggle) mobileToggle.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
  };

  const closeDrawer = () => {
    if (!mobileDrawer) return;
    mobileDrawer.classList.remove("open");
    if (drawerBackdrop) drawerBackdrop.classList.remove("active");
    if (mobileToggle) mobileToggle.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  };

  if (mobileToggle) mobileToggle.addEventListener("click", openDrawer);
  if (drawerClose) drawerClose.addEventListener("click", closeDrawer);
  if (drawerBackdrop) drawerBackdrop.addEventListener("click", closeDrawer);

  document.querySelectorAll(".mobile-nav-link, .mobile-drawer-btn, .mobile-drawer a").forEach(link => {
    link.addEventListener("click", () => {
      closeDrawer();
    });
  });

  // Close drawer on Escape key press
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeDrawer();
    }
  });

  // Back to top button
  if (backToTop) {
    backToTop.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
}

/* ===================================================================
   2. FULL-SCREEN AUTOMOTIVE BACKGROUND IMAGE SLIDESHOW
   =================================================================== */
function initHeroSlideshow() {
  const slideshow = document.getElementById("heroSlideshow");
  if (!slideshow) return;

  const slides = slideshow.querySelectorAll(".hero-slide");
  const dots = document.querySelectorAll(".hero-slide-dot");
  if (!slides.length) return;

  let currentIndex = 0;
  let autoplayTimer = null;
  const SLIDE_DURATION = 4800; // 4.8 seconds per slide (matches 4-5s requirement)

  // Preload all slides immediately to prevent any flicker
  slides.forEach(slide => {
    const img = slide.querySelector("img");
    if (img && img.src) {
      const preload = new Image();
      preload.src = img.src;
    }
  });

  function showSlide(targetIndex) {
    // Normalise index
    const newIndex = (targetIndex + slides.length) % slides.length;

    slides.forEach((slide, i) => {
      if (i === newIndex) {
        slide.classList.add("active");
        slide.setAttribute("aria-hidden", "false");
      } else {
        slide.classList.remove("active");
        slide.setAttribute("aria-hidden", "true");
      }
    });

    dots.forEach((dot, i) => {
      if (i === newIndex) {
        dot.classList.add("active");
        dot.setAttribute("aria-selected", "true");
        // Re-trigger CSS animation for progress bar
        const progress = dot.querySelector(".dot-progress");
        if (progress) {
          progress.style.animation = "none";
          void progress.offsetWidth; // Trigger reflow
          progress.style.animation = `slide-timer ${SLIDE_DURATION}ms linear forwards`;
        }
      } else {
        dot.classList.remove("active");
        dot.setAttribute("aria-selected", "false");
        const progress = dot.querySelector(".dot-progress");
        if (progress) progress.style.animation = "none";
      }
    });

    currentIndex = newIndex;

    // Proactively preload the next slide in sequence
    const nextIndex = (currentIndex + 1) % slides.length;
    const nextImg = slides[nextIndex]?.querySelector("img");
    if (nextImg && !nextImg.complete) {
      const p = new Image();
      p.src = nextImg.src;
    }
  }

  function startAutoplay() {
    stopAutoplay();
    autoplayTimer = setInterval(() => {
      showSlide(currentIndex + 1);
    }, SLIDE_DURATION);
  }

  function stopAutoplay() {
    if (autoplayTimer) {
      clearInterval(autoplayTimer);
      autoplayTimer = null;
    }
  }

  // Interactive slide indicator navigation
  dots.forEach(dot => {
    dot.addEventListener("click", () => {
      const target = parseInt(dot.dataset.slide, 10);
      if (!isNaN(target) && target !== currentIndex) {
        showSlide(target);
        startAutoplay(); // Reset timer on manual navigation
      }
    });
  });

  // Pause on hover over slideshow nav dots
  const navContainer = document.querySelector(".hero-slide-nav");
  if (navContainer) {
    navContainer.addEventListener("mouseenter", stopAutoplay);
    navContainer.addEventListener("mouseleave", startAutoplay);
  }

  // Check reduced-motion preferences
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)");
  if (!prefersReduced.matches) {
    startAutoplay();
  }
  prefersReduced.addEventListener("change", (e) => {
    if (e.matches) {
      stopAutoplay();
    } else {
      startAutoplay();
    }
  });
}

/* ===================================================================
   2B. HERO INTERACTIVE 3D TELEMETRY WIDGET
   =================================================================== */
function initHeroWidget() {
  const heroCard = document.getElementById("heroInteractiveCard");
  const heroSection = document.getElementById("hero");

  if (!heroSection) return;

  heroSection.addEventListener("mousemove", (e) => {
    if (window.innerWidth < 992) return;
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    
    const xRatio = (clientX / innerWidth - 0.5) * 2;
    const yRatio = (clientY / innerHeight - 0.5) * 2;

    if (heroCard) {
      const rotateY = xRatio * 8;
      const rotateX = -yRatio * 8;
      const widget = heroCard.querySelector(".widget-inner");
      if (widget) {
        widget.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
      }
    }
  });

  heroSection.addEventListener("mouseleave", () => {
    if (heroCard) {
      const widget = heroCard.querySelector(".widget-inner");
      if (widget) widget.style.transform = "rotateX(0deg) rotateY(0deg) translateZ(0px)";
    }
  });
}

/* ===================================================================
   3. BRANDS CONTINUOUS MARQUEE SLIDER (HOMEPAGE)
   =================================================================== */
function initBrandSlider() {
  const brandsTrack = document.getElementById("brandsTrack");
  if (!brandsTrack || typeof brandsData === "undefined") return;

  // Primary set: fully accessible with aria-label
  const primaryCards = brandsData.map(brand => `
    <div class="brand-card" data-brand="${brand.name}" title="${brand.name} - ${brand.tagline}" tabindex="0" role="link" aria-label="${brand.name}: ${brand.tagline}">
      <div class="brand-svg-wrap">
        ${brand.svg}
      </div>
      <span class="brand-card-name">${brand.name}</span>
    </div>
  `).join("");

  // Duplicate set: aria-hidden to eliminate redundant screen-reader loops
  const duplicateCards = brandsData.map(brand => `
    <div class="brand-card" data-brand="${brand.name}" aria-hidden="true" tabindex="-1">
      <div class="brand-svg-wrap">
        ${brand.svg}
      </div>
      <span class="brand-card-name">${brand.name}</span>
    </div>
  `).join("");

  brandsTrack.innerHTML = primaryCards + duplicateCards;

  // Attach interactive navigation
  brandsTrack.querySelectorAll(".brand-card").forEach(card => {
    const brandName = card.dataset.brand;
    const navigate = () => {
      window.location.href = `booking.html?brand=${encodeURIComponent(brandName)}`;
    };
    card.addEventListener("click", navigate);
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        navigate();
      }
    });
  });
}

/* ===================================================================
   4. SERVICES GRID & MODAL CONTROLLER
   =================================================================== */
function initServicesGrid() {
  const servicesGrid = document.getElementById("servicesGrid");
  const allServicesGrid = document.getElementById("allServicesGrid");
  const targetGrid = allServicesGrid || servicesGrid;

  if (!targetGrid || typeof servicesData === "undefined") return;

  // On homepage (servicesGrid), display 6 featured services
  // On services.html (allServicesGrid), display all 12 services with filter support
  const isAllPage = targetGrid === allServicesGrid;
  let currentList = isAllPage ? servicesData : servicesData.slice(0, 6);

  const renderServices = (list) => {
    targetGrid.innerHTML = list.map(service => `
      <div class="service-card" data-id="${service.id}">
        <div class="service-card-img-wrap">
          <img 
            src="${service.image}" 
            alt="${service.name}" 
            class="service-card-img" 
            loading="lazy"
            onerror="this.src='https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=900&q=80'"
          >
          <div class="service-card-gradient"></div>
        </div>

        <span class="service-card-badge">${service.badge}</span>

        <div class="service-card-body">
          <div class="service-card-icon-title">
            <div class="service-icon-box">
              <i class="fa-solid ${service.icon}"></i>
            </div>
            <h3 class="service-card-title">${service.name}</h3>
          </div>

          <p class="service-card-desc">${service.shortDesc}</p>

          <div class="service-card-meta">
            <div class="service-price-tag">
              <span>Starts at</span>
              <strong>${service.startingPrice}</strong>
            </div>
            <button class="btn-view-service" data-service-id="${service.id}">
              <span>View Details</span>
              <i class="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    `).join("");

    // Attach click events on "View Details" buttons
    targetGrid.querySelectorAll(".btn-view-service").forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        openServiceModal(btn.dataset.serviceId);
      });
    });

    // Mobile tap handling: tap reveals details, second tap opens modal
    targetGrid.querySelectorAll(".service-card").forEach(card => {
      card.addEventListener("click", () => {
        const serviceId = card.dataset.id;
        if (window.innerWidth <= 1024 || ('ontouchstart' in window) || navigator.maxTouchPoints > 0) {
          if (!card.classList.contains("touch-active")) {
            targetGrid.querySelectorAll(".service-card").forEach(c => c.classList.remove("touch-active"));
            card.classList.add("touch-active");
          } else {
            openServiceModal(serviceId);
          }
        } else {
          openServiceModal(serviceId);
        }
      });
    });
  };

  renderServices(currentList);

  // Category filter buttons on services.html
  const serviceFilterBtns = document.querySelectorAll(".service-filter-btn");
  if (serviceFilterBtns.length > 0) {
    serviceFilterBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        serviceFilterBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        const filter = btn.dataset.filter;
        if (filter === "all") {
          renderServices(servicesData);
        } else {
          const filtered = servicesData.filter(s => s.category === filter);
          renderServices(filtered);
        }
        initTiltEffects();
      });
    });
  }

  initServiceModalController();
}

function initServiceModalController() {
  const modal = document.getElementById("serviceModal");
  if (!modal) return;

  const closeBtn = document.getElementById("modalCloseBtn");
  const dismissBtn = document.getElementById("modalDismissBtn");
  const bookNowBtn = document.getElementById("modalBookNowBtn");

  const closeModal = () => {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  };

  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  if (dismissBtn) dismissBtn.addEventListener("click", closeModal);

  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("open")) {
      closeModal();
    }
  });

  if (bookNowBtn) {
    bookNowBtn.addEventListener("click", () => {
      const serviceName = document.getElementById("modalServiceTitle").textContent;
      closeModal();
      window.location.href = `booking.html?service=${encodeURIComponent(serviceName)}`;
    });
  }
}

function openServiceModal(serviceId) {
  if (typeof servicesData === "undefined") return;
  const service = servicesData.find(s => s.id === serviceId);
  if (!service) return;

  const modal = document.getElementById("serviceModal");
  if (!modal) return;

  document.getElementById("modalServiceImg").src = service.image;
  document.getElementById("modalServiceBadge").textContent = service.badge;
  document.getElementById("modalServiceDuration").textContent = service.duration;
  document.getElementById("modalServiceWarranty").textContent = service.warranty;
  document.getElementById("modalServicePrice").textContent = service.startingPrice;
  document.getElementById("modalServiceCategory").textContent = service.categoryLabel || "Factory OEM Service";
  document.getElementById("modalServiceTitle").textContent = service.name;
  document.getElementById("modalServiceDesc").textContent = service.fullDescription;

  const featuresList = document.getElementById("modalServiceFeatures");
  if (featuresList) {
    featuresList.innerHTML = service.features.map(f => `
      <li><i class="fa-solid fa-circle-check"></i> <span>${f}</span></li>
    `).join("");
  }

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

/* ===================================================================
   5. DEDICATED BRANDS PAGE GRID (BRANDS.HTML)
   =================================================================== */
function initBrandsPage() {
  const brandsGrid = document.getElementById("brandsDetailedGrid");
  if (!brandsGrid || typeof brandsData === "undefined") return;

  const renderBrands = (list) => {
    brandsGrid.innerHTML = list.map(brand => `
      <div class="brand-detail-card" data-region="${brand.region}">
        <div class="brand-detail-header">
          <div class="brand-detail-logo">
            ${brand.svg}
          </div>
          <div class="brand-detail-meta">
            <strong>${brand.name}</strong>
            <span>${brand.country}</span>
          </div>
        </div>

        <p class="brand-detail-tagline">"${brand.tagline}"</p>

        <div class="brand-detail-specs">
          <div class="spec-row">
            <span>Specialization</span>
            <strong>${brand.specialty}</strong>
          </div>
          <div class="spec-row">
            <span>Diagnostic Software</span>
            <strong>${brand.diagnosticSuite}</strong>
          </div>
          <div class="spec-row">
            <span>Key Models Serviced</span>
            <strong>${brand.models}</strong>
          </div>
        </div>

        <a href="booking.html?brand=${encodeURIComponent(brand.name)}" class="btn btn-outline-cyan btn-sm">
          <span>Book for ${brand.name}</span>
          <i class="fa-solid fa-arrow-right"></i>
        </a>
      </div>
    `).join("");
  };

  renderBrands(brandsData);

  // Filter pills on brands.html
  const filterPills = document.querySelectorAll(".brand-filter-pill");
  filterPills.forEach(pill => {
    pill.addEventListener("click", () => {
      filterPills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      const region = pill.dataset.region;
      if (region === "all") {
        renderBrands(brandsData);
      } else {
        const filtered = brandsData.filter(b => b.region.toLowerCase() === region.toLowerCase());
        renderBrands(filtered);
      }
    });
  });
}

/* ===================================================================
   6. 3D HOVER TILT EFFECTS
   =================================================================== */
function initTiltEffects() {
  if (window.innerWidth < 992) return;

  const cards = document.querySelectorAll(".service-card, .tilt-card, .brand-detail-card");

  cards.forEach(card => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = ((y - centerY) / centerY) * -6;
      const rotateY = ((x - centerX) / centerX) * 6;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)";
    });
  });
}

/* ===================================================================
   7. ANIMATED STATISTICS COUNTER
   =================================================================== */
function initStatsCounter() {
  const statsGrid = document.getElementById("statsGrid");
  if (!statsGrid || typeof statsData === "undefined") return;

  statsGrid.innerHTML = statsData.map(stat => `
    <div class="stat-box" data-target="${stat.target}" data-suffix="${stat.suffix}">
      <div class="stat-icon-wrap">
        <i class="fa-solid ${stat.icon}"></i>
      </div>
      <div class="stat-number-wrap">
        <span class="stat-number" id="counter-${stat.id}">0</span><span class="stat-suffix">${stat.suffix}</span>
      </div>
      <div class="stat-label">${stat.label}</div>
    </div>
  `).join("");

  let animated = false;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        animateCounters();
      }
    });
  }, { threshold: 0.3 });

  observer.observe(statsGrid);

  function animateCounters() {
    const counterElements = statsGrid.querySelectorAll(".stat-box");
    
    counterElements.forEach(box => {
      const target = parseInt(box.dataset.target, 10);
      const numberEl = box.querySelector(".stat-number");
      const duration = 2000;
      const steps = 60;
      const increment = target / steps;
      let current = 0;
      let stepCount = 0;

      const timer = setInterval(() => {
        stepCount++;
        current += increment;
        if (stepCount >= steps) {
          numberEl.textContent = target.toLocaleString();
          clearInterval(timer);
        } else {
          numberEl.textContent = Math.floor(current).toLocaleString();
        }
      }, duration / steps);
    });
  }
}

/* ===================================================================
   8. GALLERY & LIGHTBOX
   =================================================================== */
function initGallery() {
  const galleryGrid = document.getElementById("galleryGrid");
  const filterBtns = document.querySelectorAll(".gallery-filter-btn, .filter-btn");
  if (!galleryGrid || typeof galleryData === "undefined") return;

  let activeLightboxIndex = 0;
  let filteredItems = [...galleryData];

  const renderGallery = (category) => {
    filteredItems = category === "all" 
      ? galleryData 
      : galleryData.filter(item => item.category === category);

    galleryGrid.innerHTML = filteredItems.map((item, idx) => `
      <div class="gallery-item" data-index="${idx}">
        <img src="${item.image}" alt="${item.title}" class="gallery-img" loading="lazy">
        <div class="gallery-overlay">
          <span class="gallery-cat-pill">${item.categoryLabel}</span>
          <h3 class="gallery-item-title">${item.title}</h3>
          <p class="gallery-item-desc">${item.description}</p>
        </div>
      </div>
    `).join("");

    galleryGrid.querySelectorAll(".gallery-item").forEach(item => {
      item.addEventListener("click", () => {
        const index = parseInt(item.dataset.index, 10);
        openLightbox(index);
      });
    });
  };

  renderGallery("all");

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderGallery(btn.dataset.filter);
    });
  });

  const lightbox = document.getElementById("lightboxModal");
  const lightboxImg = document.getElementById("lightboxImg");
  const lightboxCategory = document.getElementById("lightboxCategory");
  const lightboxTitle = document.getElementById("lightboxTitle");
  const lightboxDesc = document.getElementById("lightboxDesc");
  const lightboxClose = document.getElementById("lightboxClose");
  const lightboxPrev = document.getElementById("lightboxPrev");
  const lightboxNext = document.getElementById("lightboxNext");

  const openLightbox = (index) => {
    if (!lightbox) return;
    activeLightboxIndex = index;
    const item = filteredItems[activeLightboxIndex];
    if (!item) return;

    lightboxImg.src = item.image;
    lightboxImg.alt = item.title;
    lightboxCategory.textContent = item.categoryLabel;
    lightboxTitle.textContent = item.title;
    lightboxDesc.textContent = item.description;

    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    if (!lightbox) return;
    lightbox.classList.remove("open");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  };

  const showNextImg = () => {
    activeLightboxIndex = (activeLightboxIndex + 1) % filteredItems.length;
    openLightbox(activeLightboxIndex);
  };

  const showPrevImg = () => {
    activeLightboxIndex = (activeLightboxIndex - 1 + filteredItems.length) % filteredItems.length;
    openLightbox(activeLightboxIndex);
  };

  if (lightboxClose) lightboxClose.addEventListener("click", closeLightbox);
  if (lightboxNext) lightboxNext.addEventListener("click", showNextImg);
  if (lightboxPrev) lightboxPrev.addEventListener("click", showPrevImg);

  if (lightbox) {
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) closeLightbox();
    });
  }

  document.addEventListener("keydown", (e) => {
    if (lightbox && lightbox.classList.contains("open")) {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") showNextImg();
      if (e.key === "ArrowLeft") showPrevImg();
    }
  });
}

/* ===================================================================
   9. CUSTOMER TESTIMONIALS SLIDER
   =================================================================== */
function initTestimonialsSlider() {
  const track = document.getElementById("testiTrack");
  const dotsContainer = document.getElementById("testiDots");
  const prevBtn = document.getElementById("testiPrev");
  const nextBtn = document.getElementById("testiNext");
  const wrapper = document.querySelector(".testimonials-carousel-wrap");

  if (!track || typeof testimonialsData === "undefined") return;

  let currentIndex = 0;
  const total = testimonialsData.length;
  let autoplayTimer = null;

  track.innerHTML = testimonialsData.map(testi => `
    <div class="testimonial-slide">
      <div class="testimonial-card glass-card">
        <div class="testi-header">
          <div class="testi-user">
            <img src="${testi.avatar}" alt="${testi.name}" class="testi-avatar" loading="lazy">
            <div>
              <h3 class="testi-name">${testi.name}</h3>
              <span class="testi-role">${testi.role}</span>
            </div>
          </div>
          <div class="testi-stars">
            ${'<i class="fa-solid fa-star"></i>'.repeat(testi.rating)}
          </div>
        </div>

        <p class="testi-quote">"${testi.text}"</p>

        <div class="testi-footer">
          <span class="testi-service-tag"><i class="fa-solid fa-shield-check text-cyan"></i> Verified Service: ${testi.service}</span>
          <span class="testi-date">${testi.date}</span>
        </div>
      </div>
    </div>
  `).join("");

  if (dotsContainer) {
    dotsContainer.innerHTML = testimonialsData.map((_, i) => `
      <button class="carousel-dot ${i === 0 ? 'active' : ''}" data-index="${i}" aria-label="Go to slide ${i + 1}"></button>
    `).join("");

    dotsContainer.querySelectorAll(".carousel-dot").forEach(dot => {
      dot.addEventListener("click", () => {
        updateSlide(parseInt(dot.dataset.index, 10));
      });
    });
  }

  const updateSlide = (index) => {
    currentIndex = (index + total) % total;
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
    if (dotsContainer) {
      dotsContainer.querySelectorAll(".carousel-dot").forEach((dot, idx) => {
        dot.classList.toggle("active", idx === currentIndex);
      });
    }
  };

  if (prevBtn) prevBtn.addEventListener("click", () => updateSlide(currentIndex - 1));
  if (nextBtn) nextBtn.addEventListener("click", () => updateSlide(currentIndex + 1));

  const startAutoplay = () => {
    stopAutoplay();
    autoplayTimer = setInterval(() => {
      updateSlide(currentIndex + 1);
    }, 6000);
  };

  const stopAutoplay = () => {
    if (autoplayTimer) clearInterval(autoplayTimer);
  };

  startAutoplay();
  if (wrapper) {
    wrapper.addEventListener("mouseenter", stopAutoplay);
    wrapper.addEventListener("mouseleave", startAutoplay);
  }
}

/* ===================================================================
   10. INTERACTIVE SERVICE ESTIMATOR (BOOKING.HTML)
   =================================================================== */
function initEstimator() {
  const vehicleTier = document.getElementById("estVehicleType");
  const serviceType = document.getElementById("estServiceType");
  const addons = document.getElementById("estAddons");
  const durationVal = document.getElementById("estDurationVal");
  const priceVal = document.getElementById("estPriceVal");
  const applyBtn = document.getElementById("estApplyBtn");

  if (!vehicleTier || !serviceType || !addons) return;

  const calculateEstimate = () => {
    const tierMultiplier = {
      sedan: 1.0,
      suv: 1.15,
      luxury: 1.35,
      exotic: 1.75
    }[vehicleTier.value] || 1.0;

    const baseServiceRates = {
      oil: { price: 2499, time: "45 Minutes" },
      brakes: { price: 2999, time: "1.5 - 2 Hours" },
      diagnostics: { price: 1499, time: "45 Minutes" },
      detailing: { price: 4999, time: "3 - 5 Hours" },
      alignment: { price: 799, time: "1 Hour" },
      ac: { price: 1999, time: "1 - 1.5 Hours" }
    }[serviceType.value] || { price: 1999, time: "1.5 Hours" };

    const addonRates = {
      none: 0,
      cabin: 699,
      fluid: 1199,
      "engine-wash": 1499
    }[addons.value] || 0;

    const total = Math.round((baseServiceRates.price * tierMultiplier) + addonRates);
    
    if (priceVal) priceVal.textContent = `₹${total.toLocaleString('en-IN')}`;
    if (durationVal) durationVal.textContent = baseServiceRates.time;
  };

  vehicleTier.addEventListener("change", calculateEstimate);
  serviceType.addEventListener("change", calculateEstimate);
  addons.addEventListener("change", calculateEstimate);
  calculateEstimate();

  if (applyBtn) {
    applyBtn.addEventListener("click", () => {
      const serviceMap = {
        oil: "Oil Change & Maintenance",
        brakes: "Brake Inspection & Repair",
        diagnostics: "Computer Diagnostics",
        detailing: "Car Washing & Detailing",
        alignment: "Wheel Alignment & Tyre Services",
        ac: "AC Repair & Climate Control"
      };

      const selectedName = serviceMap[serviceType.value];
      const serviceSelect = document.getElementById("serviceSelection");
      if (serviceSelect && selectedName) {
        serviceSelect.value = selectedName;
      }

      const formElem = document.getElementById("bookingForm");
      if (formElem) {
        formElem.scrollIntoView({ behavior: "smooth" });
        showToast("Applied estimate package to booking details.");
      }
    });
  }
}

/* ===================================================================
   11. FUNCTIONAL BOOKING FORM (BOOKING.HTML)
   =================================================================== */
function initBookingForm() {
  const form = document.getElementById("bookingForm");
  if (!form) return;

  const dateInput = document.getElementById("preferredDate");
  const submitBtn = document.getElementById("submitBookingBtn");
  const successModal = document.getElementById("bookingSuccessModal");
  const successCloseBtn = document.getElementById("successCloseBtn");
  const successPrintBtn = document.getElementById("successPrintBtn");

  // Min date today
  if (dateInput) {
    dateInput.setAttribute("min", new Date().toISOString().split("T")[0]);
  }

  // Auto-fill from URL parameters (e.g. ?service=... or ?brand=...)
  const urlParams = new URLSearchParams(window.location.search);
  const paramBrand = urlParams.get("brand");
  const paramService = urlParams.get("service");

  if (paramBrand) {
    const brandSelect = document.getElementById("carBrand");
    if (brandSelect) {
      for (let i = 0; i < brandSelect.options.length; i++) {
        if (brandSelect.options[i].value.toLowerCase() === paramBrand.toLowerCase()) {
          brandSelect.selectedIndex = i;
          break;
        }
      }
    }
  }

  if (paramService) {
    const serviceSelect = document.getElementById("serviceSelection");
    if (serviceSelect) {
      for (let i = 0; i < serviceSelect.options.length; i++) {
        if (serviceSelect.options[i].value.toLowerCase().includes(paramService.toLowerCase()) || 
            paramService.toLowerCase().includes(serviceSelect.options[i].value.toLowerCase())) {
          serviceSelect.selectedIndex = i;
          break;
        }
      }
    }
  }

  const validateField = (input, condition) => {
    const group = input.closest(".form-group");
    if (!condition) {
      group.classList.add("has-error");
      return false;
    } else {
      group.classList.remove("has-error");
      return true;
    }
  };

  form.querySelectorAll(".form-control").forEach(input => {
    input.addEventListener("input", () => {
      const group = input.closest(".form-group");
      if (group) group.classList.remove("has-error");
    });
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("customerName");
    const phone = document.getElementById("phoneNumber");
    const brand = document.getElementById("carBrand");
    const model = document.getElementById("carModel");
    const service = document.getElementById("serviceSelection");
    const date = document.getElementById("preferredDate");
    const time = document.getElementById("preferredTime");

    const isNameValid = validateField(name, name.value.trim().length >= 2);
    const isPhoneValid = validateField(phone, phone.value.trim().length >= 7);
    const isBrandValid = validateField(brand, brand.value !== "");
    const isModelValid = validateField(model, model.value.trim().length >= 2);
    const isServiceValid = validateField(service, service.value !== "");
    const isDateValid = validateField(date, date.value !== "");
    const isTimeValid = validateField(time, time.value !== "");

    if (!isNameValid || !isPhoneValid || !isBrandValid || !isModelValid || !isServiceValid || !isDateValid || !isTimeValid) {
      showToast("Please fill in all required fields accurately.");
      return;
    }

    const btnText = submitBtn.querySelector(".btn-text");
    const btnSpinner = submitBtn.querySelector(".btn-spinner");
    const btnIcon = submitBtn.querySelector(".btn-icon");

    if (btnText) btnText.textContent = "Securing Bay...";
    if (btnSpinner) btnSpinner.classList.remove("hidden");
    if (btnIcon) btnIcon.classList.add("hidden");
    submitBtn.disabled = true;

    setTimeout(() => {
      if (btnText) btnText.textContent = "Confirm Service Booking";
      if (btnSpinner) btnSpinner.classList.add("hidden");
      if (btnIcon) btnIcon.classList.remove("hidden");
      submitBtn.disabled = false;

      const randomCode = "VMW-" + Math.floor(1000 + Math.random() * 9000);

      document.getElementById("successCustomerName").textContent = name.value.trim();
      document.getElementById("successBookingCode").textContent = randomCode;
      document.getElementById("successCar").textContent = `${brand.value} - ${model.value.trim()}`;
      document.getElementById("successService").textContent = service.value;
      
      const formattedDate = new Date(date.value).toLocaleDateString("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
        year: "numeric"
      });
      document.getElementById("successDate").textContent = formattedDate;
      document.getElementById("successTime").textContent = time.value;
      document.getElementById("successPhone").textContent = phone.value.trim();

      if (successModal) {
        successModal.classList.add("open");
        document.body.style.overflow = "hidden";
      }

      form.reset();
      showToast(`Appointment ${randomCode} confirmed! Welcome to Vantage Motorworks.`);
    }, 1000);
  });

  const closeSuccess = () => {
    if (successModal) {
      successModal.classList.remove("open");
      document.body.style.overflow = "";
    }
  };

  if (successCloseBtn) successCloseBtn.addEventListener("click", closeSuccess);

  if (successPrintBtn) {
    successPrintBtn.addEventListener("click", () => {
      window.print();
    });
  }
}

/* ===================================================================
   12. CONTACT FORM (CONTACT.HTML)
   =================================================================== */
function initContactForm() {
  const contactForm = document.getElementById("contactInquiryForm");
  if (!contactForm) return;

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("contactName");
    const email = document.getElementById("contactEmail");
    const message = document.getElementById("contactMessage");

    if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
      showToast("Please fill in your name, email, and message.");
      return;
    }

    const submitBtn = contactForm.querySelector("button[type='submit']");
    const origText = submitBtn.innerHTML;
    submitBtn.innerHTML = `<span>Transmitting Message...</span> <i class="fa-solid fa-circle-notch fa-spin"></i>`;
    submitBtn.disabled = true;

    setTimeout(() => {
      submitBtn.innerHTML = origText;
      submitBtn.disabled = false;
      contactForm.reset();
      showToast("Message received! A master service advisor will respond within 2 business hours.");
    }, 1000);
  });
}

/* ===================================================================
   13. FOOTER & NEWSLETTER
   =================================================================== */
function initFooterAndNewsletter() {
  const yearElems = document.querySelectorAll(".current-year");
  const currentYear = new Date().getFullYear();
  yearElems.forEach(el => el.textContent = currentYear);

  const newsletterForm = document.getElementById("newsletterForm");
  const newsletterEmail = document.getElementById("newsletterEmail");
  const newsletterMsg = document.getElementById("newsletterMsg");

  if (newsletterForm) {
    newsletterForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = newsletterEmail.value.trim();
      if (email && email.includes("@")) {
        if (newsletterMsg) newsletterMsg.textContent = "✓ Subscribed to Vantage Performance Insights.";
        newsletterEmail.value = "";
        showToast("Subscribed successfully! Welcome to Vantage Motorworks.");
        setTimeout(() => {
          if (newsletterMsg) newsletterMsg.textContent = "";
        }, 5000);
      }
    });
  }
}

/* ===================================================================
   14. SCROLL REVEAL ANIMATIONS (INTERSECTION OBSERVER)
   =================================================================== */
function initScrollAnimations() {
  const revealElements = document.querySelectorAll(
    ".section-header-center, .features-grid, .process-timeline, .estimator-card, .form-styled-card, .workshop-details-card, .emergency-banner, .about-intro-grid, .values-grid"
  );

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealElements.forEach(el => {
    el.classList.add("reveal-fade-up");
    observer.observe(el);
  });
}

/* ===================================================================
   15. TOAST NOTIFICATION SYSTEM
   =================================================================== */
function showToast(message) {
  let container = document.getElementById("toast-container");
  if (!container) {
    container = document.createElement("div");
    container.id = "toast-container";
    container.className = "toast-container";
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `
    <i class="fa-solid fa-circle-check text-cyan"></i>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(-20px)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 4000);
}

// Vehicle Fleet Data
const vehicles = [
  { id: "re-classic", name: "Royal Enfield Classic 350", type: "Bike", price: 800, seats: 2, fuel: "Petrol", image: "images/bike.png", tag: "Most Popular" },
  { id: "activa", name: "Honda Activa 6G", type: "Scooter", price: 400, seats: 2, fuel: "Petrol", image: "images/scooty1.png", tag: "Best Value" },
  { id: "jupiter", name: "TVS Jupiter", type: "Scooter", price: 350, seats: 2, fuel: "Petrol", image: "images/scooty2.png", tag: "" },
  { id: "pulsar", name: "Bajaj Pulsar 150", type: "Bike", price: 600, seats: 2, fuel: "Petrol", image: "images/bike2.png", tag: "" },
  { id: "swift", name: "Maruti Swift", type: "Car", price: 2500, seats: 5, fuel: "Petrol", image: "images/car1.png", tag: "Family Pick" },
  { id: "thar", name: "Mahindra Thar", type: "SUV", price: 4500, seats: 4, fuel: "Diesel", image: "images/car2.png", tag: "Adventure" },
];

const SHOW_REVIEWS = true;

// Translations
const translations = {
  en: {
    nav_home: "Home", nav_fleet: "Fleet", nav_book: "Book Now", nav_about: "About", nav_contact: "Contact", nav_docs: "Docs",
    hero_label: "Mahabaleshwar's #1 Rental", hero_h1: "Explore Every Road,<br>Every Hill, Every Moment", hero_sub: "Rent the best bikes and cars for your hill station adventure.",
    btn_browse: "Browse Our Fleet", btn_wa: "WhatsApp Us Now",
    badge_price: "₹350/day", badge_hidden: "No Hidden Charges", badge_helmet: "Helmets Included", badge_hours: "Open 7AM–8PM", badge_instant: "Instant Confirmation",
    stat_years: "Years in Business", stat_riders: "Happy Riders", stat_start: "Starting Per Day",
    how_label: "Simple Process", how_h2: "Ready to Ride in 3 Steps", 
    step1_title: "Choose Your Vehicle", step1_desc: "Browse our fleet and pick the perfect ride.",
    step2_title: "Fill Booking Form", step2_desc: "Takes less than 2 minutes to complete.",
    step3_title: "Get WhatsApp Confirmation", step3_desc: "We confirm your booking within minutes.",
    fleet_label: "Our Fleet", fleet_h2: "Vehicles Made for<br>Mahabaleshwar Roads", view_all: "View All 6 Vehicles →", book_this: "Book This →",
    why_h2: "Why Choose Us", 
    why1_title: "Lowest Prices, No Hidden Charges", why1_desc: "What you see is what you pay.",
    why2_title: "Helmets & Safety Gear Included Free", why2_desc: "Your safety is our priority.",
    why3_title: "Instant WhatsApp Booking & Confirmation", why3_desc: "Fast and easy booking process.",
    why4_title: "Local Knowledge — Best Routes Suggested", why4_desc: "We tell you exactly where to go.",
    reviews_h2: "What Tourists Say", reviews_note: "Reviews collected from Google Maps",
    faq_h2: "Mini FAQ", see_all_faq: "See all FAQs →",
    calc_title: "Calculate Your Price", calc_vehicle: "Select Vehicle", calc_pickup: "Pickup Date", calc_return: "Return Date",
    calc_helmet: "Helmet", calc_gps: "GPS Navigator", calc_poncho: "Rain Poncho", calc_extra_helmet: "Extra Rider Helmet",
    calc_proceed: "Proceed to Book ↓", form_title: "Confirm Your Booking",
    form_name: "Full Name *", form_phone: "Phone Number *", form_email: "Email (optional)", form_time: "Pickup Time *", form_riders: "Number of Riders", form_requests: "Special Requests",
    form_submit: "Confirm Booking via WhatsApp →",
    docs_h2: "What to Bring", 
    docs_q1: "What documents do I need to rent a bike or scooter?",
    docs_a1: "You need your original 2-wheeler driving license and an original Aadhar Card or Passport. We cannot accept photocopies or digital versions. A refundable deposit of ₹1,000 is also collected at the time of pickup.",
    docs_q2: "Is fuel included in the rental price?",
    docs_a2: "No, fuel is not included. The vehicle will be given to you with a full tank and we expect you to return it full as well.",
    docs_q3: "What happens if the vehicle breaks down?",
    docs_a3: "Call us immediately on +91 98765 43210. We will send assistance or a replacement vehicle as soon as possible at no extra charge.",
    docs_policy1: "Cancellation Policy", docs_policy2: "Damage & Accident Policy", docs_policy3: "Fuel Policy", docs_policy4: "Privacy Policy", docs_policy5: "Terms & Conditions",
    footer_quick: "Quick Links", footer_contact: "Contact", footer_wa_card: "Book on WhatsApp", footer_wa_avail: "Available 7AM–8PM",
    footer_copy: "© 2024 RideEasy Rentals. Made with love in Mahabaleshwar.",
    about_h1: "Our Story", about_h2: "We Started With Two Bikes", about_team: "The People Behind RideEasy",
    values: "Our Core Values", val1: "Honest Pricing", val2: "Safety First", val3: "Tourist-Friendly", val4: "Local Knowledge"
  },
  hi: {
    nav_home: "होम", nav_fleet: "वाहन", nav_book: "बुक करें", nav_about: "हमारे बारे में", nav_contact: "संपर्क करें", nav_docs: "दस्तावेज़",
    hero_label: "महाबलेश्वर का #1 रेंटल", hero_h1: "हर सड़क, हर पहाड़ी,<br>हर पल को जिएं", hero_sub: "अपने पहाड़ी रोमांच के लिए सबसे अच्छी बाइक और कार किराए पर लें।",
    btn_browse: "हमारे वाहन देखें", btn_wa: "हमें WhatsApp करें",
    badge_price: "₹350/दिन", badge_hidden: "कोई छुपे शुल्क नहीं", badge_helmet: "हेलमेट शामिल", badge_hours: "खुला 7AM–8PM", badge_instant: "त्वरित पुष्टि",
    stat_years: "व्यापार में वर्ष", stat_riders: "संतुष्ट राइडर्स", stat_start: "प्रति दिन शुरू",
    how_label: "सरल प्रक्रिया", how_h2: "3 चरणों में राइड के लिए तैयार",
    step1_title: "अपना वाहन चुनें", step1_desc: "हमारे बेड़े को ब्राउज़ करें और सही सवारी चुनें।",
    step2_title: "बुकिंग फॉर्म भरें", step2_desc: "पूरा करने में 2 मिनट से भी कम समय लगता है।",
    step3_title: "WhatsApp पुष्टि प्राप्त करें", step3_desc: "हम मिनटों में आपकी बुकिंग की पुष्टि करते हैं।",
    fleet_label: "हमारा बेड़ा", fleet_h2: "महाबलेश्वर की सड़कों<br>के लिए बने वाहन", view_all: "सभी 6 वाहन देखें →", book_this: "इसे बुक करें →",
    why_h2: "हमें क्यों चुनें",
    why1_title: "सबसे कम कीमतें, कोई छुपे शुल्क नहीं", why1_desc: "जो आप देखते हैं वही आप भुगतान करते हैं।",
    why2_title: "हेलमेट और सुरक्षा गियर मुफ्त शामिल", why2_desc: "आपकी सुरक्षा हमारी प्राथमिकता है।",
    why3_title: "त्वरित WhatsApp बुकिंग और पुष्टि", why3_desc: "तेज़ और आसान बुकिंग प्रक्रिया।",
    why4_title: "स्थानीय ज्ञान - सर्वोत्तम मार्गों का सुझाव", why4_desc: "हम आपको बताते हैं कि वास्तव में कहाँ जाना है।",
    reviews_h2: "पर्यटक क्या कहते हैं", reviews_note: "Google मानचित्र से एकत्रित समीक्षाएँ",
    faq_h2: "लघु सामान्य प्रश्न", see_all_faq: "सभी सामान्य प्रश्न देखें →",
    calc_title: "अपनी कीमत की गणना करें", calc_vehicle: "वाहन चुनें", calc_pickup: "पिकअप तिथि", calc_return: "वापसी तिथि",
    calc_helmet: "हेलमेट", calc_gps: "GPS नेविगेटर", calc_poncho: "रेन पोंचो", calc_extra_helmet: "अतिरिक्त राइडर हेलमेट",
    calc_proceed: "बुक करने के लिए आगे बढ़ें ↓", form_title: "अपनी बुकिंग की पुष्टि करें",
    form_name: "पूरा नाम *", form_phone: "फ़ोन नंबर *", form_email: "ईमेल (वैकल्पिक)", form_time: "पिकअप समय *", form_riders: "राइडर्स की संख्या", form_requests: "विशेष अनुरोध",
    form_submit: "WhatsApp के माध्यम से बुकिंग की पुष्टि करें →",
    docs_h2: "क्या लाना है",
    docs_q1: "मुझे बाइक या स्कूटर किराए पर लेने के लिए किन दस्तावेजों की आवश्यकता है?",
    docs_a1: "आपको अपना मूल 2-पहिया ड्राइविंग लाइसेंस और एक मूल आधार कार्ड या पासपोर्ट की आवश्यकता है। हम फोटोकॉपी स्वीकार नहीं कर सकते।",
    docs_q2: "क्या किराये की कीमत में ईंधन शामिल है?",
    docs_a2: "नहीं, ईंधन शामिल नहीं है। वाहन आपको पूरे टैंक के साथ दिया जाएगा और हम उम्मीद करते हैं कि आप इसे पूरा वापस कर देंगे।",
    docs_q3: "यदि वाहन खराब हो जाता है तो क्या होगा?",
    docs_a3: "हमें तुरंत +91 98765 43210 पर कॉल करें। हम बिना किसी अतिरिक्त शुल्क के जल्द से जल्द सहायता या प्रतिस्थापन वाहन भेजेंगे।",
    docs_policy1: "रद्दीकरण नीति", docs_policy2: "क्षति और दुर्घटना नीति", docs_policy3: "ईंधन नीति", docs_policy4: "गोपनीयता नीति", docs_policy5: "नियम और शर्तें",
    footer_quick: "त्वरित लिंक", footer_contact: "संपर्क करें", footer_wa_card: "WhatsApp पर बुक करें", footer_wa_avail: "उपलब्ध 7AM–8PM",
    footer_copy: "© 2024 राइडईज़ी रेंटल्स। महाबलेश्वर में प्यार से बनाया गया।",
    about_h1: "हमारी कहानी", about_h2: "हमने दो बाइकों के साथ शुरुआत की", about_team: "राइडईज़ी के पीछे के लोग",
    values: "हमारे मूल मूल्य", val1: "ईमानदार मूल्य निर्धारण", val2: "सुरक्षा पहले", val3: "पर्यटक के अनुकूल", val4: "स्थानीय ज्ञान"
  },
  mr: {
    nav_home: "होम", nav_fleet: "वाहने", nav_book: "बुक करा", nav_about: "आमच्याबद्दल", nav_contact: "संपर्क", nav_docs: "कागदपत्रे",
    hero_label: "महाबळेश्वरचे #1 रेंटल", hero_h1: "प्रत्येक रस्ता, प्रत्येक टेकडी,<br>प्रत्येक क्षण जगा", hero_sub: "तुमच्या हिल स्टेशनच्या प्रवासासाठी सर्वोत्तम बाईक आणि कार भाड्याने घ्या.",
    btn_browse: "आमची वाहने पहा", btn_wa: "आम्हाला WhatsApp करा",
    badge_price: "₹350/दिवस", badge_hidden: "कोणतेही छुपे शुल्क नाही", badge_helmet: "हेल्मेट समाविष्ट", badge_hours: "सकाळी 7 ते रात्री 8", badge_instant: "त्वरित पुष्टीकरण",
    stat_years: "व्यवसायातील वर्षे", stat_riders: "आनंदी रायडर्स", stat_start: "प्रति दिवस सुरू",
    how_label: "सोपी प्रक्रिया", how_h2: "3 पाऊलांमध्ये राईडसाठी तयार",
    step1_title: "तुमचे वाहन निवडा", step1_desc: "आमची वाहने पहा आणि योग्य वाहन निवडा.",
    step2_title: "बुकिंग फॉर्म भरा", step2_desc: "पूर्ण करण्यासाठी 2 मिनिटांपेक्षा कमी वेळ लागतो.",
    step3_title: "WhatsApp पुष्टीकरण मिळवा", step3_desc: "आम्ही काही मिनिटांत तुमच्या बुकिंगची पुष्टी करतो.",
    fleet_label: "आमची वाहने", fleet_h2: "महाबळेश्वरच्या रस्त्यांसाठी<br>बनवलेली वाहने", view_all: "सर्व 6 वाहने पहा →", book_this: "हे बुक करा →",
    why_h2: "आम्हाला का निवडावे",
    why1_title: "सर्वात कमी किमती, कोणतेही छुपे शुल्क नाही", why1_desc: "तुम्ही जे पाहता तेच तुम्हाला द्यावे लागते.",
    why2_title: "हेल्मेट आणि सुरक्षा गियर मोफत", why2_desc: "तुमची सुरक्षा आमची प्राथमिकता आहे.",
    why3_title: "त्वरित WhatsApp बुकिंग आणि पुष्टीकरण", why3_desc: "जलद आणि सोपी बुकिंग प्रक्रिया.",
    why4_title: "स्थानिक माहिती - सर्वोत्तम मार्गांची सूचना", why4_desc: "नक्की कुठे जायचे हे आम्ही तुम्हाला सांगतो.",
    reviews_h2: "पर्यटक काय म्हणतात", reviews_note: "Google Maps वरून गोळा केलेली पुनरावलोकने",
    faq_h2: "लहान सामान्य प्रश्न", see_all_faq: "सर्व सामान्य प्रश्न पहा →",
    calc_title: "तुमची किंमत मोजा", calc_vehicle: "वाहन निवडा", calc_pickup: "पिकअप तारीख", calc_return: "परतीच्या तारीख",
    calc_helmet: "हेल्मेट", calc_gps: "GPS नेव्हिगेटर", calc_poncho: "रेन पोंचो", calc_extra_helmet: "अतिरिक्त रायडर हेल्मेट",
    calc_proceed: "बुक करण्यासाठी पुढे जा ↓", form_title: "तुमच्या बुकिंगची पुष्टी करा",
    form_name: "पूर्ण नाव *", form_phone: "फोन नंबर *", form_email: "ईमेल (पर्यायी)", form_time: "पिकअप वेळ *", form_riders: "रायडर्सची संख्या", form_requests: "विशेष विनंत्या",
    form_submit: "WhatsApp द्वारे बुकिंगची पुष्टी करा →",
    docs_h2: "काय आणावे",
    docs_q1: "बाईक किंवा स्कूटर भाड्याने घेण्यासाठी मला कोणती कागदपत्रे आवश्यक आहेत?",
    docs_a1: "तुम्हाला तुमचे मूळ 2-चाकी लायसन्स आणि मूळ आधार कार्ड किंवा ओळखपत्राची आवश्यकता आहे. आम्ही झेरॉक्स स्वीकारत नाही.",
    docs_q2: "भाड्याच्या रकमेत इंधन समाविष्ट आहे का?",
    docs_a2: "नाही, इंधन समाविष्ट नाही. वाहन तुम्हाला पूर्ण टाकीसह दिले जाईल आणि तुम्ही ते तसेच परत करावे अशी आमची अपेक्षा आहे.",
    docs_q3: "वाहन खराब झाल्यास काय होईल?",
    docs_a3: "आम्हाला त्वरित +91 98765 43210 वर कॉल करा. आम्ही त्वरित मदत किंवा दुसरे वाहन पाठवू.",
    docs_policy1: "रद्दीकरण धोरण", docs_policy2: "नुकसान आणि अपघात धोरण", docs_policy3: "इंधन धोरण", docs_policy4: "गोपनीयता धोरण", docs_policy5: "अटी व शर्ती",
    footer_quick: "जलद दुवे", footer_contact: "संपर्क", footer_wa_card: "WhatsApp वर बुक करा", footer_wa_avail: "सकाळी 7 ते रात्री 8 उपलब्ध",
    footer_copy: "© 2024 RideEasy Rentals. महाबळेश्वरमध्ये प्रेमाने बनवलेले.",
    about_h1: "आमची गोष्ट", about_h2: "आम्ही दोन बाईक्सने सुरुवात केली", about_team: "RideEasy च्या पाठीमागील लोक",
    values: "आमची मूळ मूल्ये", val1: "प्रामाणिक किमती", val2: "सुरक्षा प्रथम", val3: "पर्यटकांसाठी अनुकूल", val4: "स्थानिक माहिती"
  }
};

document.addEventListener('DOMContentLoaded', () => {
  // 1. Theme / UI Init
  initLanguageSwitcher();
  initGlobalFloatingElements();
  initNavbarScroll();
  initMobileMenu();
  initScrollAnimations();
  initSmoothScroll();
  
  // 2. Conditional Init
  if (!SHOW_REVIEWS) {
    const revSec = document.getElementById('reviews-section');
    if (revSec) revSec.style.display = 'none';
  }

  // 3. Page specific Init
  initFleetCards();
  initCalculatorAndForm();
  initFAQAccordion();
  initFleetFilters();
  init3DTilt();
});

// -------------- L10N --------------
function initLanguageSwitcher() {
  const langSelect = document.getElementById('lang-switch');
  if (!langSelect) return;
  
  const savedLang = localStorage.getItem('rideeasy_lang') || 'en';
  langSelect.value = savedLang;
  applyTranslations(savedLang);

  langSelect.addEventListener('change', (e) => {
    const lang = e.target.value;
    localStorage.setItem('rideeasy_lang', lang);
    applyTranslations(lang);
  });
}

function applyTranslations(lang) {
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key]; // Using innerHTML to support <br>
    }
  });
}

// -------------- Global Floating Elements --------------
function initGlobalFloatingElements() {
  // WhatsApp Floating Button
  const waFab = document.createElement('a');
  waFab.href = "https://wa.me/9876543210";
  waFab.className = "fab-whatsapp";
  waFab.innerHTML = '<i class="fa-brands fa-whatsapp"></i>';
  waFab.title = "Chat with us";
  waFab.target = "_blank";
  document.body.appendChild(waFab);

  // Mobile Sticky Bottom Bar
  const mobileBar = document.createElement('div');
  mobileBar.className = "mobile-bottom-bar";
  mobileBar.innerHTML = `
    <a href="tel:+919876543210" class="mobile-bar-btn"><i class="fa-solid fa-phone"></i> Call</a>
    <a href="https://wa.me/9876543210" class="mobile-bar-btn"><i class="fa-brands fa-whatsapp"></i> Chat</a>
    <a href="booking.html" class="mobile-bar-btn"><i class="fa-regular fa-calendar-check"></i> Book</a>
  `;
  document.body.appendChild(mobileBar);
}

// -------------- Navbar Scroll Context --------------
function initNavbarScroll() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
  });
}

function initMobileMenu() {
  const menuToggle = document.getElementById('menu-toggle');
  const navDrawer = document.getElementById('nav-drawer');
  if (!menuToggle || !navDrawer) return;

  menuToggle.addEventListener('click', () => {
    navDrawer.classList.toggle('open');
    const icon = menuToggle.querySelector('i');
    if (navDrawer.classList.contains('open')) {
      icon.classList.remove('fa-bars');
      icon.classList.add('fa-xmark');
    } else {
      icon.classList.remove('fa-xmark');
      icon.classList.add('fa-bars');
    }
  });
}

// -------------- Animations --------------
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-in').forEach((el, index) => {
    // Stagger delay based on structure/index if needed. Let's do simple index based inline style.
    // If it's part of a flex/grid we look at parent's children.
    const parent = el.parentElement;
    const siblings = Array.from(parent.children).filter(c => c.classList.contains('fade-in'));
    const i = siblings.indexOf(el);
    if(i > -1) {
      el.style.transitionDelay = (i * 80) + 'ms';
    }
    observer.observe(el);
  });
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        window.scrollTo({
          top: target.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });
}

// -------------- Render Vehicles --------------
function generateVehicleCardHTML(v) {
  let tagHtml = v.tag ? `<div class="vehicle-tag">${v.tag}</div>` : '';
  return `
    <div class="card vehicle-card tilt-card fade-in" data-type="${v.type}">
      ${tagHtml}
      <div class="vehicle-img-container"><img src="${v.image}" alt="${v.name}" class="vehicle-img"></div>
      <h3 style="margin-bottom:8px;">${v.name}</h3>
      <div class="badge" style="margin-bottom:16px;">${v.type}</div>
      <div class="vehicle-price">₹${v.price} <span style="font-size:14px; color:var(--color-text-muted); font-weight:400;">/ day</span></div>
      <div class="vehicle-features">
        <div class="feature-item"><i class="fa-solid fa-user"></i> ${v.seats} Seats</div>
        <div class="feature-item"><i class="fa-solid fa-gas-pump"></i> ${v.fuel}</div>
      </div>
      <a href="booking.html?vehicle=${v.id}" class="btn w-full btn-primary" data-i18n="book_this">Book This →</a>
    </div>
  `;
}

function initFleetCards() {
  const container = document.getElementById('fleet-container');
  if (!container) return;
  
  // If we're on homepage, show only top 3, else all
  const isHome = container.getAttribute('data-home') === "true";
  const displayVehicles = isHome ? vehicles.slice(0, 3) : vehicles;
  
  container.innerHTML = displayVehicles.map(generateVehicleCardHTML).join('');
}

function initFleetFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.vehicle-card');
  if(!filterBtns.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter');
      
      cards.forEach(card => {
        if (filter === 'all' || card.getAttribute('data-type') === filter) {
          card.classList.remove('hidden');
          setTimeout(() => card.style.opacity = '1', 10);
        } else {
          card.classList.add('hidden');
          card.style.opacity = '0';
        }
      });
    });
  });
}

// -------------- Booking Calculator & Form --------------
function initCalculatorAndForm() {
  const calcForm = document.getElementById('price-calc');
  const bookingForm = document.getElementById('booking-form');
  if (!calcForm || !bookingForm) return;

  const vehicleSelects = document.querySelectorAll('.vehicle-select');
  
  // Populate dropdowns
  let opts = '<option value="" disabled selected>-- Select --</option>';
  vehicles.forEach(v => {
    opts += `<option value="${v.id}">${v.name} (₹${v.price}/day)</option>`;
  });
  vehicleSelects.forEach(sel => {
    sel.innerHTML = opts;
  });

  // Pre-fill from URL
  const urlParams = new URLSearchParams(window.location.search);
  const vId = urlParams.get('vehicle');
  if (vId) {
    vehicleSelects.forEach(sel => sel.value = vId);
  }

  // Set min dates
  const today = new Date().toISOString().split('T')[0];
  const t = new Date(); t.setDate(t.getDate()+1);
  const tmrw = t.toISOString().split('T')[0];
  
  document.getElementById('calc_pickup').min = today;
  document.getElementById('form_pickup').min = today;
  document.getElementById('calc_return').min = tmrw;
  document.getElementById('form_return').min = tmrw;

  // Sync logic
  calcForm.addEventListener('input', calculatePrice);
  vehicleSelects[0].addEventListener('change', (e) => vehicleSelects[1].value = e.target.value);
  vehicleSelects[1].addEventListener('change', (e) => {
    vehicleSelects[0].value = e.target.value;
    calculatePrice();
  });
  
  document.getElementById('calc_pickup').addEventListener('change', (e) => {
    document.getElementById('form_pickup').value = e.target.value;
    const pDate = new Date(e.target.value);
    pDate.setDate(pDate.getDate() + 1);
    const minD = pDate.toISOString().split('T')[0];
    document.getElementById('calc_return').min = minD;
    document.getElementById('form_return').min = minD;
    if(document.getElementById('calc_return').value < minD) document.getElementById('calc_return').value = minD;
    calculatePrice();
  });
  
  document.getElementById('calc_return').addEventListener('change', (e) => {
    document.getElementById('form_return').value = e.target.value;
    calculatePrice();
  });

  // Proceed button linking
  document.getElementById('btn-proceed').addEventListener('click', () => {
    document.getElementById('booking-form').scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  // Initial calculation
  calculatePrice();

  // Booking Submit
  bookingForm.addEventListener('submit', handleBookingSubmit);
}

function calculatePrice() {
  const vId = document.getElementById('calc_vehicle').value;
  const pDate = document.getElementById('calc_pickup').value;
  const rDate = document.getElementById('calc_return').value;
  
  const vRateObj = document.getElementById('v_rate_line');
  const addObj = document.getElementById('add_rate_line');
  const dCountObj = document.getElementById('days_count');
  const gTotalObj = document.getElementById('g_total');

  if (!vId || !pDate || !rDate) {
    vRateObj.innerText = '₹0'; addObj.innerText = '₹0'; dCountObj.innerText = '0 days'; gTotalObj.innerText = '₹0';
    return;
  }

  const v = vehicles.find(x => x.id === vId);
  if(!v) return;

  const d1 = new Date(pDate);
  const d2 = new Date(rDate);
  const diffTime = Math.abs(d2 - d1);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) || 1; 

  const basePrice = v.price * diffDays;

  // Addons
  let addonTotal = 0;
  if (document.getElementById('add_helmet').checked) addonTotal += 50 * diffDays;
  if (document.getElementById('add_gps').checked) addonTotal += 100 * diffDays;
  if (document.getElementById('add_poncho').checked) addonTotal += 30 * diffDays;
  if (document.getElementById('add_exhelmet').checked) addonTotal += 50 * diffDays;

  const total = basePrice + addonTotal;

  vRateObj.innerText = `₹${v.price} × ${diffDays} = ₹${basePrice}`;
  addObj.innerText = `₹${addonTotal}`;
  dCountObj.innerText = `${diffDays} days`;
  gTotalObj.innerText = `₹${total}`;
}

function handleBookingSubmit(e) {
  e.preventDefault();
  let valid = true;
  const reqFields = ['form_name', 'form_phone', 'form_vehicle', 'form_pickup', 'form_return', 'form_time'];
  
  reqFields.forEach(id => {
    const el = document.getElementById(id);
    const errObj = document.getElementById(id+'_err');
    if (!el.value.trim()) {
      el.classList.add('input-error');
      if (errObj) errObj.style.display = 'block';
      valid = false;
    } else {
      el.classList.remove('input-error');
      if (errObj) errObj.style.display = 'none';
    }
  });

  if (!valid) return;

  // Construct WA Msg
  const name = document.getElementById('form_name').value;
  const phone = document.getElementById('form_phone').value;
  const vId = document.getElementById('form_vehicle').value;
  const pickup = document.getElementById('form_pickup').value;
  const ret = document.getElementById('form_return').value;
  const time = document.getElementById('form_time').value;
  const riders = document.getElementById('form_riders').value;
  const req = document.getElementById('form_requests').value || 'None';
  
  const v = vehicles.find(x => x.id === vId);
  const diffTime = Math.abs(new Date(ret) - new Date(pickup));
  const days = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) || 1;
  const amt = document.getElementById('g_total') ? document.getElementById('g_total').innerText.replace('₹', '') : 'N/A';
  
  let addOns = [];
  if (document.getElementById('add_helmet') && document.getElementById('add_helmet').checked) addOns.push('Helmet');
  if (document.getElementById('add_gps') && document.getElementById('add_gps').checked) addOns.push('GPS');
  if (document.getElementById('add_poncho') && document.getElementById('add_poncho').checked) addOns.push('Poncho');
  if (document.getElementById('add_exhelmet') && document.getElementById('add_exhelmet').checked) addOns.push('Extra Helmet');
  
  const addonsStr = addOns.length > 0 ? addOns.join(', ') : 'None';

  const msg = `*New Booking Request — RideEasy Rentals*

*Name:* ${name}
*Phone:* ${phone}
*Vehicle:* ${v ? v.name : vId}
*Pickup:* ${pickup} at ${time}
*Return:* ${ret}
*Duration:* ${days} day(s)
*Riders:* ${riders}
*Add-ons:* ${addonsStr}
*Estimated Total:* ₹${amt}
*Note:* ${req}

Please confirm availability. Thank you!`;

  const waLink = `https://wa.me/9876543210?text=${encodeURIComponent(msg)}`;
  window.open(waLink, '_blank');

  // Show banner
  const banner = document.getElementById('success-banner');
  if (banner) {
    banner.style.display = 'block';
    setTimeout(() => { document.getElementById('booking-form').reset(); calculatePrice(); }, 4000);
    setTimeout(() => banner.style.display = 'none', 6000);
  }
}

// -------------- Accordion --------------
function initFAQAccordion() {
  const items = document.querySelectorAll('.accordion-item');
  items.forEach(item => {
    const hdr = item.querySelector('.accordion-header');
    hdr.addEventListener('click', () => {
      // Close others
      items.forEach(i => {
        if(i !== item) i.classList.remove('active');
      });
      // Toggle this
      item.classList.toggle('active');
    });
  });
}

// -------------- 3D Tilt Animations ------------
function init3DTilt() {
  document.querySelectorAll('.tilt-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      if (window.innerWidth < 768) return; // Disable tilt on mobile
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const rotateX = ((y - rect.height/2) / (rect.height/2)) * -6;
      const rotateY = ((x - rect.width/2) / (rect.width/2)) * 6;
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.03, 1.03, 1.03)`;
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    });
  });
}

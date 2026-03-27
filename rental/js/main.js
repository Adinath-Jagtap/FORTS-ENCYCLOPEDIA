/* ============================================
   RideEasy Rentals — Main JavaScript
   js/main.js
   ============================================ */

// ============================================
// EDIT THIS — Vehicle Fleet Data
// ============================================
const vehicles = [
  { id: "re-classic", name: "Royal Enfield Classic 350",
    type: "Bike", price: 800, seats: 2, fuel: "Petrol",
    icon: "fa-motorcycle", tag: "Most Popular" },
  { id: "activa", name: "Honda Activa 6G",
    type: "Scooter", price: 400, seats: 2, fuel: "Petrol",
    icon: "fa-motorcycle", tag: "Best Value" },
  { id: "jupiter", name: "TVS Jupiter",
    type: "Scooter", price: 350, seats: 2, fuel: "Petrol",
    icon: "fa-motorcycle", tag: "" },
  { id: "pulsar", name: "Bajaj Pulsar 150",
    type: "Bike", price: 600, seats: 2, fuel: "Petrol",
    icon: "fa-motorcycle", tag: "" },
  { id: "swift", name: "Maruti Swift",
    type: "Car", price: 2500, seats: 5, fuel: "Petrol",
    icon: "fa-car", tag: "Family Pick" },
  { id: "thar", name: "Mahindra Thar",
    type: "SUV", price: 4500, seats: 4, fuel: "Diesel",
    icon: "fa-truck-pickup", tag: "Adventure" },
];

// EDIT THIS — Toggle reviews section
const SHOW_REVIEWS = true;

// EDIT THIS — WhatsApp number
const WA_NUMBER = "9876543210";

// ============================================
// TRANSLATIONS — i18n
// ============================================
const translations = {
  en: {
    // Navbar
    nav_home: "Home",
    nav_fleet: "Fleet",
    nav_book: "Book Now",
    nav_about: "About",
    nav_contact: "Contact",
    nav_docs: "Docs",
    nav_cta: "Book Now",
    lang_label: "EN",

    // Hero
    hero_label: "Mahabaleshwar's #1 Rental",
    hero_h1: "Explore Every Road,<br>Every Hill, Every Moment",
    hero_sub: "Rent bikes, scooters, and cars from Mahabaleshwar's most trusted rental. Honest prices, clean vehicles, instant WhatsApp booking.",
    hero_btn1: "Browse Our Fleet",
    hero_btn2: "WhatsApp Us Now",
    badge_price: "₹350/day",
    badge_no_hidden: "No Hidden Charges",
    badge_helmets: "Helmets Included",
    badge_hours: "Open 7AM–8PM",
    badge_confirm: "Instant Confirmation",
    stat_years: "Years in Business",
    stat_riders: "Happy Riders",
    stat_from: "Starting Per Day",

    // How it works
    hiw_label: "Simple Process",
    hiw_h2: "Ready to Ride in 3 Steps",
    step1_title: "Choose Your Vehicle",
    step1_desc: "Browse our fleet of well-maintained bikes, scooters, and cars. Each listed at honest, no-surprise pricing.",
    step2_title: "Fill Booking Form",
    step2_desc: "Enter your details and travel dates. Takes less than 2 minutes and we'll have everything ready for you.",
    step3_title: "Get WhatsApp Confirmation",
    step3_desc: "We confirm your booking via WhatsApp within minutes. Show up at our location, collect your vehicle, and ride.",

    // Fleet
    fleet_label: "Our Fleet",
    fleet_h2: "Vehicles Made for<br>Mahabaleshwar Roads",
    fleet_view_all: "View All 6 Vehicles",
    book_now_btn: "Book Now",
    book_this_btn: "Book This",

    // Why choose us
    why_label: "Why Rent with Us",
    why_h2: "We Keep It Simple,<br>Honest, and Reliable",
    why_sub: "Since 2019, we've been Mahabaleshwar's most trusted rental — not because of flashy marketing, but because we actually deliver on our promises.",
    why1_title: "Lowest Prices, No Hidden Charges",
    why1_desc: "What you see is what you pay. No fuel surcharges, no late pickup fees, no shock bills at return.",
    why2_title: "Helmets & Safety Gear Included Free",
    why2_desc: "One helmet per booking at no extra cost. We won't let you leave without safety gear — it's non-negotiable.",
    why3_title: "Instant WhatsApp Booking",
    why3_desc: "No lengthy forms or email chains. Book via WhatsApp and get confirmed within minutes.",
    why4_title: "Local Knowledge — Best Routes",
    why4_desc: "We'll tell you about Venna Lake, Pratapgad Fort, Wilson Point and the best time to beat the crowds.",

    // Reviews
    reviews_h2: "What Tourists Say",
    reviews_note: "Reviews collected from Google Maps",
    review1_text: "Rented the Royal Enfield for two days and it was in perfect condition. The team at RideEasy was incredibly helpful — they even suggested a route to Pratapgad that I never would have found otherwise. Highly recommended.",
    review2_text: "Best rental experience in Mahabaleshwar. Got the Activa at a very fair price, it was clean and well-maintained. They confirmed booking on WhatsApp within 5 minutes. Will definitely come back next trip.",
    review3_text: "We took the Thar for a day and it handled all the mountain roads beautifully. The team helped us plan our entire itinerary. No hidden charges, no drama at return. Perfect experience for a family of four.",
    review4_text: "Rented the Pulsar for a solo trip and it was an amazing experience. The guys at RideEasy know every scenic route in and around Mahabaleshwar. Honest, helpful, and genuinely friendly.",

    // Mini FAQ
    faq_label: "Quick Answers",
    faq_h2: "Common Questions",
    faq1_q: "What documents do I need?",
    faq1_a: "You need your original driving license (2-wheeler or 4-wheeler depending on vehicle) and an original Aadhar Card or Passport. A refundable security deposit is also collected at pickup.",
    faq2_q: "Is fuel included in the price?",
    faq2_a: "No, fuel is not included. Vehicles are provided with a full tank and must be returned full. Any fuel deficit is deducted from the security deposit.",
    faq3_q: "How do I confirm my booking?",
    faq3_a: "Fill out our booking form and submit — it opens WhatsApp with your booking details pre-filled. We confirm availability within minutes.",
    faq_see_all: "See all FAQs",

    // Footer
    footer_desc: "Mahabaleshwar's most trusted vehicle rental since 2019. Honest prices, clean vehicles, and local knowledge you can actually use.",
    footer_quick_links: "Quick Links",
    footer_contact: "Get in Touch",
    footer_wa_title: "Book on WhatsApp",
    footer_wa_sub: "Available every day, 7AM – 8PM",
    footer_wa_btn: "Open WhatsApp",
    footer_copy: "© 2024 RideEasy Rentals. All rights reserved.",
    footer_love: "Made with love in Mahabaleshwar",

    // Fleet page
    fleet_page_h1: "Our Fleet",
    filter_all: "All Vehicles",
    filter_bikes: "Bikes",
    filter_scooters: "Scooters",
    filter_cars: "Cars",
    filter_suvs: "SUVs",

    // Booking page
    booking_h1: "Book a Vehicle",
    calc_h3: "Calculate Your Price",
    calc_vehicle: "Select Vehicle",
    calc_pickup: "Pickup Date",
    calc_return: "Return Date",
    calc_days: "days",
    calc_addons: "Add-Ons",
    addon_helmet: "Helmet",
    addon_gps: "GPS Navigator",
    addon_poncho: "Rain Poncho",
    addon_ext_helmet: "Extra Rider Helmet",
    calc_vehicle_cost: "Vehicle",
    calc_addon_cost: "Add-ons",
    calc_total: "Total",
    calc_proceed: "Proceed to Book",
    form_h3: "Confirm Your Booking",
    field_name: "Full Name",
    field_phone: "Phone Number",
    field_email: "Email (optional)",
    field_vehicle: "Select Vehicle",
    field_pickup: "Pickup Date",
    field_return: "Return Date",
    field_time: "Pickup Time",
    field_riders: "Number of Riders",
    field_notes: "Special Requests",
    submit_btn: "Confirm Booking via WhatsApp",
    success_msg: "Opening WhatsApp! We'll confirm your booking within minutes.",

    // About page
    about_h1: "Our Story",
    about_label: "Who We Are",
    about_h2: "Started Small.<br>Built on Trust.",
    team_h2: "The People Behind RideEasy",
    values_h2: "What We Stand For",
    value1_title: "Honest Pricing",
    value1_desc: "No hidden charges, no surprise bills. The price you see is the price you pay.",
    value2_title: "Safety First",
    value2_desc: "Every vehicle is checked before every rental. Helmets mandatory, no exceptions.",
    value3_title: "Tourist-Friendly",
    value3_desc: "We help you plan your trip, not just hand over keys. Local tips always included.",
    value4_title: "Local Knowledge",
    value4_desc: "We know Mahabaleshwar better than anyone. Ask us anything about the area.",

    // Contact page
    contact_h1: "Get in Touch",
    contact_label: "We're Here to Help",
    contact_h2: "Reach Us Any Way<br>You Like",
    contact_name: "Your Name",
    contact_email: "Email Address",
    contact_phone: "Phone Number",
    contact_message: "Your Message",
    contact_submit: "Send Message",
    contact_success: "Message sent! We'll get back to you soon.",
    contact_wa_btn: "Chat on WhatsApp",
    contact_call_btn: "Call Us Now",

    // Docs page
    docs_h1: "Docs & Policies",
    docs_label: "Know Before You Ride",
    docs_h2: "What to Bring",
    docs_bike_title: "Bikes & Scooters",
    docs_car_title: "Cars & SUVs",
    docs_intl_title: "International Tourists",
    docs_note: "We keep your documents safely during the rental period and return them when you bring the vehicle back.",
    faq_full_h2: "Frequently Asked Questions",
    policies_h2: "Our Policies",
  },

  hi: {
    nav_home: "होम",
    nav_fleet: "वाहन",
    nav_book: "बुक करें",
    nav_about: "हमारे बारे में",
    nav_contact: "संपर्क",
    nav_docs: "दस्तावेज़",
    nav_cta: "बुक करें",
    lang_label: "हिंदी",
    hero_label: "महाबलेश्वर की #1 रेंटल",
    hero_h1: "हर रोड, हर पहाड़,<br>हर पल को एक्सप्लोर करें",
    hero_sub: "महाबलेश्वर के सबसे भरोसेमंद रेंटल से बाइक, स्कूटर और कार किराए पर लें। सही कीमत, साफ वाहन, तुरंत WhatsApp बुकिंग।",
    hero_btn1: "हमारा फ्लीट देखें",
    hero_btn2: "WhatsApp करें",
    badge_price: "₹350/दिन",
    badge_no_hidden: "कोई छुपा शुल्क नहीं",
    badge_helmets: "हेलमेट शामिल",
    badge_hours: "7AM–8PM खुला",
    badge_confirm: "तुरंत पुष्टि",
    stat_years: "वर्षों का अनुभव",
    stat_riders: "खुश सवार",
    stat_from: "प्रतिदिन शुरुआत",
    hiw_label: "आसान प्रक्रिया",
    hiw_h2: "3 चरणों में सवारी के लिए तैयार",
    step1_title: "वाहन चुनें",
    step1_desc: "हमारे बाइक, स्कूटर और कारों के फ्लीट में से चुनें। सही कीमत पर।",
    step2_title: "बुकिंग फॉर्म भरें",
    step2_desc: "अपनी जानकारी और तारीखें भरें। 2 मिनट से कम लगेंगे।",
    step3_title: "WhatsApp पर पुष्टि पाएं",
    step3_desc: "हम मिनटों में WhatsApp पर बुकिंग की पुष्टि करते हैं।",
    fleet_label: "हमारा फ्लीट",
    fleet_h2: "महाबलेश्वर की सड़कों के लिए<br>बने वाहन",
    fleet_view_all: "सभी 6 वाहन देखें",
    book_now_btn: "अभी बुक करें",
    book_this_btn: "यह बुक करें",
    why_label: "हमें क्यों चुनें",
    why_h2: "सरल, ईमानदार<br>और विश्वसनीय",
    why_sub: "2019 से हम महाबलेश्वर की सबसे भरोसेमंद रेंटल हैं — चमकदार मार्केटिंग से नहीं, बल्कि अपने वादे पूरे करके।",
    why1_title: "सबसे कम कीमत, कोई छुपा शुल्क नहीं",
    why1_desc: "जो दिखता है वही चुकाते हैं। कोई अतिरिक्त शुल्क नहीं।",
    why2_title: "हेलमेट और सुरक्षा उपकरण मुफ्त",
    why2_desc: "हर बुकिंग पर एक हेलमेट मुफ्त। सुरक्षा से समझौता नहीं।",
    why3_title: "तुरंत WhatsApp बुकिंग",
    why3_desc: "WhatsApp पर बुक करें, मिनटों में पुष्टि पाएं।",
    why4_title: "स्थानीय जानकारी — बेहतरीन रास्ते",
    why4_desc: "वेणा लेक, प्रतापगड किले और विलसन पॉइंट के रास्ते हम बताएंगे।",
    reviews_h2: "पर्यटक क्या कहते हैं",
    reviews_note: "Google Maps से एकत्र की गई समीक्षाएं",
    review1_text: "दो दिनों के लिए Royal Enfield किराए पर ली और वो बिल्कुल सही हालत में थी। RideEasy की टीम बेहद मददगार थी — उन्होंने प्रतापगड का एक रास्ता बताया जो मुझे कभी नहीं मिला होता।",
    review2_text: "महाबलेश्वर में सबसे अच्छा किराया अनुभव। Activa उचित कीमत पर मिली, साफ और अच्छी थी। 5 मिनट में WhatsApp पर बुकिंग पक्की हो गई।",
    review3_text: "हमने पहाड़ी सड़कों के लिए Thar ली और यह बहुत बढ़िया थी। टीम ने हमारा पूरा यात्रा कार्यक्रम बनाने में मदद की।",
    review4_text: "एकल यात्रा के लिए Pulsar किराए पर ली और यह अद्भुत अनुभव था। RideEasy के लोग आसपास के हर सुंदर रास्ते को जानते हैं।",
    faq_label: "जल्दी जवाब",
    faq_h2: "सामान्य प्रश्न",
    faq1_q: "मुझे कौन से दस्तावेज़ चाहिए?",
    faq1_a: "मूल ड्राइविंग लाइसेंस और मूल आधार कार्ड या पासपोर्ट जरूरी है। रिफंडेबल सिक्योरिटी डिपॉजिट भी लिया जाता है।",
    faq2_q: "क्या कीमत में ईंधन शामिल है?",
    faq2_a: "नहीं, ईंधन शामिल नहीं है। वाहन पूरे टैंक के साथ दिया जाता है और वापस करते समय पूरा टैंक चाहिए।",
    faq3_q: "बुकिंग की पुष्टि कैसे होगी?",
    faq3_a: "बुकिंग फॉर्म भरें — यह WhatsApp खोलेगा। हम मिनटों में पुष्टि करेंगे।",
    faq_see_all: "सभी FAQs देखें",
    footer_desc: "2019 से महाबलेश्वर की सबसे भरोसेमंद वाहन रेंटल। ईमानदार कीमत, साफ वाहन।",
    footer_quick_links: "त्वरित लिंक",
    footer_contact: "संपर्क करें",
    footer_wa_title: "WhatsApp पर बुक करें",
    footer_wa_sub: "हर दिन उपलब्ध, 7AM – 8PM",
    footer_wa_btn: "WhatsApp खोलें",
    footer_copy: "© 2024 RideEasy Rentals. सर्वाधिकार सुरक्षित।",
    footer_love: "महाबलेश्वर में प्यार से बनाया",
    fleet_page_h1: "हमारा फ्लीट",
    filter_all: "सभी वाहन",
    filter_bikes: "बाइक",
    filter_scooters: "स्कूटर",
    filter_cars: "कारें",
    filter_suvs: "SUVs",
    booking_h1: "वाहन बुक करें",
    calc_h3: "अपनी कीमत जानें",
    calc_vehicle: "वाहन चुनें",
    calc_pickup: "पिकअप तारीख",
    calc_return: "वापसी तारीख",
    calc_days: "दिन",
    calc_addons: "ऐड-ऑन",
    addon_helmet: "हेलमेट",
    addon_gps: "GPS नेवीगेटर",
    addon_poncho: "रेन पोंचो",
    addon_ext_helmet: "अतिरिक्त हेलमेट",
    calc_vehicle_cost: "वाहन",
    calc_addon_cost: "ऐड-ऑन",
    calc_total: "कुल",
    calc_proceed: "बुकिंग पर जाएं",
    form_h3: "बुकिंग पक्की करें",
    field_name: "पूरा नाम",
    field_phone: "फोन नंबर",
    field_email: "ईमेल (वैकल्पिक)",
    field_vehicle: "वाहन चुनें",
    field_pickup: "पिकअप तारीख",
    field_return: "वापसी तारीख",
    field_time: "पिकअप समय",
    field_riders: "सवारों की संख्या",
    field_notes: "विशेष अनुरोध",
    submit_btn: "WhatsApp से बुकिंग पक्की करें",
    success_msg: "WhatsApp खुल रहा है! हम मिनटों में पुष्टि करेंगे।",
    about_h1: "हमारी कहानी",
    about_label: "हम कौन हैं",
    about_h2: "छोटे शुरू किया।<br>विश्वास पर बनाया।",
    team_h2: "RideEasy के पीछे के लोग",
    values_h2: "हम किसके लिए खड़े हैं",
    value1_title: "ईमानदार कीमत",
    value1_desc: "कोई छुपा शुल्क नहीं। जो दिखता है वही चुकाते हैं।",
    value2_title: "सुरक्षा पहले",
    value2_desc: "हर किराए से पहले हर वाहन की जांच। हेलमेट अनिवार्य।",
    value3_title: "पर्यटक-अनुकूल",
    value3_desc: "हम सिर्फ चाबी नहीं देते — यात्रा में मदद भी करते हैं।",
    value4_title: "स्थानीय जानकारी",
    value4_desc: "हम महाबलेश्वर को किसी से भी बेहतर जानते हैं।",
    contact_h1: "संपर्क करें",
    contact_label: "हम मदद के लिए हैं",
    contact_h2: "जैसे चाहें<br>हमसे संपर्क करें",
    contact_name: "आपका नाम",
    contact_email: "ईमेल पता",
    contact_phone: "फोन नंबर",
    contact_message: "आपका संदेश",
    contact_submit: "संदेश भेजें",
    contact_success: "संदेश भेजा गया! हम जल्द वापस आएंगे।",
    contact_wa_btn: "WhatsApp पर चैट करें",
    contact_call_btn: "अभी कॉल करें",
    docs_h1: "दस्तावेज़ और नीतियां",
    docs_label: "सवारी से पहले जानें",
    docs_h2: "क्या लाना है",
    docs_bike_title: "बाइक और स्कूटर",
    docs_car_title: "कार और SUV",
    docs_intl_title: "अंतरराष्ट्रीय पर्यटक",
    docs_note: "किराए की अवधि में हम आपके दस्तावेज़ सुरक्षित रखते हैं और वापसी पर लौटा देते हैं।",
    faq_full_h2: "अक्सर पूछे जाने वाले प्रश्न",
    policies_h2: "हमारी नीतियां",
  },

  mr: {
    nav_home: "होम",
    nav_fleet: "वाहने",
    nav_book: "बुक करा",
    nav_about: "आमच्याबद्दल",
    nav_contact: "संपर्क",
    nav_docs: "कागदपत्रे",
    nav_cta: "बुक करा",
    lang_label: "मराठी",
    hero_label: "महाबळेश्वरची #1 रेंटल",
    hero_h1: "प्रत्येक रस्ता, प्रत्येक डोंगर,<br>प्रत्येक क्षण अनुभवा",
    hero_sub: "महाबळेश्वरच्या सर्वात विश्वासार्ह रेंटलमधून बाईक, स्कूटर आणि कार भाड्याने घ्या. प्रामाणिक किंमत, स्वच्छ वाहने, तत्काळ WhatsApp बुकिंग.",
    hero_btn1: "आमचे वाहन पहा",
    hero_btn2: "WhatsApp करा",
    badge_price: "₹350/दिवस",
    badge_no_hidden: "छुपा शुल्क नाही",
    badge_helmets: "हेल्मेट समाविष्ट",
    badge_hours: "7AM–8PM उघडे",
    badge_confirm: "तत्काळ पुष्टी",
    stat_years: "वर्षांचा अनुभव",
    stat_riders: "आनंदी सवार",
    stat_from: "दिवसापासून सुरुवात",
    hiw_label: "सोपी प्रक्रिया",
    hiw_h2: "3 चरणांमध्ये सवारीसाठी तयार",
    step1_title: "वाहन निवडा",
    step1_desc: "आमच्या बाईक, स्कूटर आणि कारच्या फ्लीटमधून निवडा. प्रामाणिक किंमतीत.",
    step2_title: "बुकिंग फॉर्म भरा",
    step2_desc: "तुमचे तपशील आणि तारखा भरा. 2 मिनिटांपेक्षा कमी वेळ लागतो.",
    step3_title: "WhatsApp वर पुष्टी मिळवा",
    step3_desc: "आम्ही मिनिटांत WhatsApp वर बुकिंगची पुष्टी करतो.",
    fleet_label: "आमचे वाहन",
    fleet_h2: "महाबळेश्वरच्या रस्त्यांसाठी<br>बनवलेली वाहने",
    fleet_view_all: "सर्व 6 वाहने पहा",
    book_now_btn: "आत्ता बुक करा",
    book_this_btn: "हे बुक करा",
    why_label: "आम्हाला का निवडावे",
    why_h2: "सोपे, प्रामाणिक<br>आणि विश्वासार्ह",
    why_sub: "2019 पासून आम्ही महाबळेश्वरची सर्वात विश्वासार्ह रेंटल आहोत — चकाकत्या जाहिरातींमुळे नाही, तर आमच्या आश्वासनांमुळे.",
    why1_title: "सर्वात कमी किंमत, छुपा शुल्क नाही",
    why1_desc: "जे दिसते ते द्यावे लागते. कोणताही अतिरिक्त शुल्क नाही.",
    why2_title: "हेल्मेट आणि सुरक्षा उपकरणे मोफत",
    why2_desc: "प्रत्येक बुकिंगवर एक हेल्मेट मोफत. सुरक्षेशी तडजोड नाही.",
    why3_title: "तत्काळ WhatsApp बुकिंग",
    why3_desc: "WhatsApp वर बुक करा, मिनिटांत पुष्टी मिळवा.",
    why4_title: "स्थानिक ज्ञान — सर्वोत्तम मार्ग",
    why4_desc: "वेण्णा लेक, प्रतापगड किल्ला आणि विल्सन पॉइंटचे मार्ग आम्ही सांगू.",
    reviews_h2: "पर्यटक काय म्हणतात",
    reviews_note: "Google Maps वरून गोळा केलेले अभिप्राय",
    review1_text: "दोन दिवसांसाठी Royal Enfield भाड्याने घेतली आणि ती उत्तम स्थितीत होती. RideEasy ची टीम खूप मदत करणारी होती — त्यांनी प्रतापगडचा एक मार्ग सुचवला जो मला कधीच सापडला नसता.",
    review2_text: "महाबळेश्वरमधील सर्वोत्तम भाडे अनुभव. Activa योग्य किंमतीत मिळाली, स्वच्छ आणि चांगली होती. 5 मिनिटांत WhatsApp वर बुकिंग पक्की झाली.",
    review3_text: "आम्ही डोंगरी रस्त्यांसाठी Thar घेतली आणि ती खूपच छान होती. टीमने आमचा संपूर्ण प्रवास कार्यक्रम बनवण्यात मदत केली.",
    review4_text: "एकट्याच्या प्रवासासाठी Pulsar भाड्याने घेतली आणि अनुभव अप्रतिम होता. RideEasy चे लोक आसपासचे प्रत्येक सुंदर मार्ग जाणतात.",
    faq_label: "त्वरित उत्तरे",
    faq_h2: "सामान्य प्रश्न",
    faq1_q: "मला कोणती कागदपत्रे हवीत?",
    faq1_a: "मूळ ड्रायव्हिंग लायसन्स आणि मूळ आधार कार्ड किंवा पासपोर्ट आवश्यक आहे. परत करण्यायोग्य सुरक्षा ठेव देखील घेतली जाते.",
    faq2_q: "किंमतीत इंधन समाविष्ट आहे का?",
    faq2_a: "नाही, इंधन समाविष्ट नाही. वाहन पूर्ण टाकीसह दिले जाते आणि परत करताना पूर्ण टाकी आवश्यक आहे.",
    faq3_q: "बुकिंगची पुष्टी कशी होईल?",
    faq3_a: "बुकिंग फॉर्म भरा — WhatsApp उघडेल. आम्ही मिनिटांत पुष्टी करू.",
    faq_see_all: "सर्व FAQs पहा",
    footer_desc: "2019 पासून महाबळेश्वरची सर्वात विश्वासार्ह वाहन रेंटल. प्रामाणिक किंमत, स्वच्छ वाहने.",
    footer_quick_links: "त्वरित दुवे",
    footer_contact: "संपर्क करा",
    footer_wa_title: "WhatsApp वर बुक करा",
    footer_wa_sub: "दररोज उपलब्ध, 7AM – 8PM",
    footer_wa_btn: "WhatsApp उघडा",
    footer_copy: "© 2024 RideEasy Rentals. सर्व हक्क राखीव.",
    footer_love: "महाबळेश्वरमध्ये प्रेमाने बनवले",
    fleet_page_h1: "आमचे वाहन",
    filter_all: "सर्व वाहने",
    filter_bikes: "बाईक",
    filter_scooters: "स्कूटर",
    filter_cars: "कार",
    filter_suvs: "SUVs",
    booking_h1: "वाहन बुक करा",
    calc_h3: "तुमची किंमत मोजा",
    calc_vehicle: "वाहन निवडा",
    calc_pickup: "पिकअप तारीख",
    calc_return: "परत तारीख",
    calc_days: "दिवस",
    calc_addons: "ऐड-ऑन",
    addon_helmet: "हेल्मेट",
    addon_gps: "GPS नेव्हिगेटर",
    addon_poncho: "रेन पोंचो",
    addon_ext_helmet: "अतिरिक्त हेल्मेट",
    calc_vehicle_cost: "वाहन",
    calc_addon_cost: "ऐड-ऑन",
    calc_total: "एकूण",
    calc_proceed: "बुकिंगकडे जा",
    form_h3: "बुकिंग पक्की करा",
    field_name: "पूर्ण नाव",
    field_phone: "फोन नंबर",
    field_email: "ईमेल (पर्यायी)",
    field_vehicle: "वाहन निवडा",
    field_pickup: "पिकअप तारीख",
    field_return: "परत तारीख",
    field_time: "पिकअप वेळ",
    field_riders: "सवारांची संख्या",
    field_notes: "विशेष विनंत्या",
    submit_btn: "WhatsApp द्वारे बुकिंग पक्की करा",
    success_msg: "WhatsApp उघडत आहे! आम्ही मिनिटांत पुष्टी करू.",
    about_h1: "आमची कहाणी",
    about_label: "आम्ही कोण आहोत",
    about_h2: "लहानातून सुरुवात.<br>विश्वासावर उभारणी.",
    team_h2: "RideEasy मागे असलेले लोक",
    values_h2: "आम्ही कशासाठी उभे आहोत",
    value1_title: "प्रामाणिक किंमत",
    value1_desc: "छुपा शुल्क नाही. जे दिसते ते द्यावे लागते.",
    value2_title: "सुरक्षा प्रथम",
    value2_desc: "प्रत्येक भाड्याआधी वाहन तपासणी. हेल्मेट अनिवार्य.",
    value3_title: "पर्यटक-अनुकूल",
    value3_desc: "आम्ही फक्त चाव्या देत नाही — प्रवासातही मदत करतो.",
    value4_title: "स्थानिक ज्ञान",
    value4_desc: "महाबळेश्वर आम्हाला कुणाहीपेक्षा चांगले माहीत आहे.",
    contact_h1: "संपर्क करा",
    contact_label: "आम्ही मदतीसाठी आहोत",
    contact_h2: "तुम्हाला योग्य त्या<br>मार्गाने संपर्क करा",
    contact_name: "तुमचे नाव",
    contact_email: "ईमेल पत्ता",
    contact_phone: "फोन नंबर",
    contact_message: "तुमचा संदेश",
    contact_submit: "संदेश पाठवा",
    contact_success: "संदेश पाठवला! आम्ही लवकरच परत येऊ.",
    contact_wa_btn: "WhatsApp वर चॅट करा",
    contact_call_btn: "आत्ता कॉल करा",
    docs_h1: "कागदपत्रे आणि नीती",
    docs_label: "सवारीपूर्वी जाणून घ्या",
    docs_h2: "काय आणायचे",
    docs_bike_title: "बाईक आणि स्कूटर",
    docs_car_title: "कार आणि SUV",
    docs_intl_title: "आंतरराष्ट्रीय पर्यटक",
    docs_note: "भाड्याच्या कालावधीत आम्ही तुमची कागदपत्रे सुरक्षित ठेवतो आणि परत करताना परत देतो.",
    faq_full_h2: "वारंवार विचारले जाणारे प्रश्न",
    policies_h2: "आमच्या नीती",
  }
};

// =============================================
// RIDEEASY — script.js
// =============================================

document.addEventListener('DOMContentLoaded', () => {

  // ===== NAVBAR: Floating + Scroll Effect =====
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }, { passive: true });

  // ===== HAMBURGER MOBILE MENU =====
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');

  hamburger.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', isOpen);
    // Animate hamburger → X
    const spans = hamburger.querySelectorAll('span');
    if (isOpen) {
      spans[0].style.cssText = 'transform: translateY(7px) rotate(45deg)';
      spans[1].style.cssText = 'opacity: 0; transform: scaleX(0)';
      spans[2].style.cssText = 'transform: translateY(-7px) rotate(-45deg)';
    } else {
      spans.forEach(s => s.style.cssText = '');
    }
  });

  // Close mobile menu on outside click
  document.addEventListener('click', (e) => {
    if (!navbar.contains(e.target)) {
      mobileMenu.classList.remove('open');
      hamburger.querySelectorAll('span').forEach(s => s.style.cssText = '');
    }
  });

  // ===== VEHICLE SLIDER =====
  const slides = document.querySelectorAll('.vehicle-slide');
  const dotsContainer = document.getElementById('sliderDots');
  const prevBtn = document.getElementById('prevSlide');
  const nextBtn = document.getElementById('nextSlide');
  let current = 0;
  let autoSlideTimer = null;

  // Build dots
  slides.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.classList.add('dot');
    dot.setAttribute('aria-label', `Slide ${i + 1}`);
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goTo(i));
    dotsContainer.appendChild(dot);
  });

  function goTo(index) {
    slides[current].classList.remove('active');
    dotsContainer.querySelectorAll('.dot')[current].classList.remove('active');
    current = (index + slides.length) % slides.length;
    slides[current].classList.add('active');
    dotsContainer.querySelectorAll('.dot')[current].classList.add('active');
    resetAutoSlide();
  }

  function resetAutoSlide() {
    clearInterval(autoSlideTimer);
    autoSlideTimer = setInterval(() => goTo(current + 1), 4500);
  }

  prevBtn.addEventListener('click', () => goTo(current - 1));
  nextBtn.addEventListener('click', () => goTo(current + 1));

  // Touch swipe support
  let touchStartX = 0;
  const sliderEl = document.getElementById('vehicleSlider');
  sliderEl.addEventListener('touchstart', e => { touchStartX = e.changedTouches[0].clientX; }, { passive: true });
  sliderEl.addEventListener('touchend', e => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) goTo(diff > 0 ? current + 1 : current - 1);
  }, { passive: true });

  resetAutoSlide();

  // ===== FAQ ACCORDION =====
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const isOpen = item.classList.contains('open');

      // Close all
      document.querySelectorAll('.faq-item.open').forEach(openItem => {
        openItem.classList.remove('open');
        openItem.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
      });

      // Open clicked if it was closed
      if (!isOpen) {
        item.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // ===== SCROLL REVEAL =====
  const revealElements = document.querySelectorAll(
    '.step-card, .review-card, .vehicle-slide, .section-header, .faq-item, .map-wrapper'
  );

  revealElements.forEach(el => el.classList.add('reveal'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // Stagger siblings
        const siblings = [...entry.target.parentElement.querySelectorAll('.reveal:not(.visible)')];
        siblings.forEach((sib, idx) => {
          setTimeout(() => sib.classList.add('visible'), idx * 90);
        });
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

  revealElements.forEach(el => observer.observe(el));

  // ===== ACTIVE NAV LINK on scroll =====
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}` || (id === 'hero' && link.getAttribute('href') === 'index.html')) {
            link.classList.add('active');
          }
        });
      }
    });
  }, { threshold: 0.4 });

  sections.forEach(s => sectionObserver.observe(s));

});
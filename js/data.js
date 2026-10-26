// Vantage Motorworks - Automotive Service Data & Assets
// Theme: Deep Navy Blue (#101923), Steel Blue (#1C2B3A), Electric Cyan (#20C5D8), Metallic Silver (#D8E0E7)

const servicesData = [
  {
    id: "engine-repair",
    name: "Engine Repair & Overhaul",
    category: "powertrain",
    categoryLabel: "Mechanical & Powertrain",
    shortDesc: "Complete powertrain diagnostics, timing belt, head gasket, and precision mechanical rebuilding.",
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=900&q=80",
    icon: "fa-engine",
    badge: "Powertrain Specialist",
    startingPrice: "₹12,499",
    duration: "4 - 8 Hours",
    warranty: "24 Months / 30,000 km",
    fullDescription: "Our master certified technicians utilize OEM-level diagnostic tools, bore scopes, and precision dynamometers to detect internal engine friction, compression loss, and combustion anomalies. From timing chains to complete cylinder head overhauls, your engine returns to factory tolerance.",
    features: [
      "Digital compression & leak-down testing",
      "Timing belt / chain & water pump replacement",
      "Cylinder head re-machining & valve seating",
      "Turbocharger & supercharger service",
      "Fuel injector flow calibration & ultrasonic cleaning",
      "ECU synchronization & live dyno verification"
    ]
  },
  {
    id: "car-detailing",
    name: "Car Washing & Detailing",
    category: "detailing",
    categoryLabel: "Detailing & Bodywork",
    shortDesc: "Triple-stage foam bath, multi-step swirl paint correction, and 9H hydrophobic ceramic protection.",
    image: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&w=900&q=80",
    icon: "fa-sparkles",
    badge: "Ceramic Pro Certified",
    startingPrice: "₹4,999",
    duration: "3 - 6 Hours",
    warranty: "Up to 5 Years Coating",
    fullDescription: "Experience concourse-level brilliance. We utilize pH-balanced snow foams, clay bar decontaminants, and dual-action rotary polishers to eliminate up to 95% of clear-coat scratches, micro-marring, and oxidation before applying aerospace-grade ceramic nanocoatings.",
    features: [
      "Touchless high-pressure snow foam pre-wash",
      "Iron de-ironizer & clay bar paint decontamination",
      "3-step paint correction & mirror polish",
      "9H nano ceramic coat on paint, glass & wheels",
      "Engine bay degreasing & satin dressing",
      "UV-blocking hydrophobic trim restoration"
    ]
  },
  {
    id: "oil-change",
    name: "Oil Change & Maintenance",
    category: "maintenance",
    categoryLabel: "Mechanical & Powertrain",
    shortDesc: "Full synthetic European-grade oil service, OEM filter replacement, and comprehensive 50-point safety check.",
    image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=900&q=80",
    icon: "fa-oil-can",
    badge: "Full Synthetic",
    startingPrice: "₹2,499",
    duration: "45 Minutes",
    warranty: "10,000 km Protection",
    fullDescription: "Engine longevity depends on thermal stability and lubrication purity. We use only manufacturer-specified premium synthetics (Motul, Mobil 1, Castrol Edge) matched to your engine's exact viscosity and emission spec, accompanied by a genuine OEM filter.",
    features: [
      "100% full synthetic motor oil (0W-20, 5W-30, 5W-40)",
      "OEM oil filter & crushed copper washer replacement",
      "50-point complimentary vehicle safety health check",
      "Top-up of steering, coolant & brake fluids",
      "Digital service interval counter reset",
      "Comprehensive digital vehicle inspection report"
    ]
  },
  {
    id: "brake-repair",
    name: "Brake Inspection & Repair",
    category: "chassis",
    categoryLabel: "Safety & Chassis",
    shortDesc: "Ceramic pads, drilled rotor machining, ABS fluid flush, and computerized electronic stopping calibration.",
    image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=900&q=80",
    icon: "fa-circle-stop",
    badge: "Brembo / OEM Grade",
    startingPrice: "₹2,999",
    duration: "1.5 - 2.5 Hours",
    warranty: "18 Months / 20,000 km",
    fullDescription: "Your stopping power is non-negotiable. Vantage Motorworks services performance multi-piston calipers, floating rotors, and advanced electronic parking brakes (EPB) with computerized pad retraction and pressure-flushed DOT 4/5.1 brake fluids.",
    features: [
      "Digital micrometer rotor thickness & runout testing",
      "Ceramic or semi-metallic low-dust brake pads",
      "Precision on-car brake disc skimming & resurfacing",
      "High-pressure hydraulic bleed & fresh DOT 4 fluid",
      "Electronic parking brake (EPB) recalibration",
      "ABS wheel speed sensor & caliper slide pin overhaul"
    ]
  },
  {
    id: "wheel-alignment",
    name: "Wheel Alignment & Tyre Services",
    category: "chassis",
    categoryLabel: "Safety & Chassis",
    shortDesc: "3D laser 4-wheel geometry alignment, high-speed dynamic road-force balancing, and tyre replacement.",
    image: "https://images.unsplash.com/photo-1578844251758-2f71da64c96f?auto=format&fit=crop&w=900&q=80",
    icon: "fa-compass-drafting",
    badge: "Hunter 3D Laser",
    startingPrice: "₹799",
    duration: "1 Hour",
    warranty: "6 Months Alignment Guarantee",
    fullDescription: "Cure vehicle pulling, uneven tyre tread wear, and highway vibrations. Using our Hunter Hawkeye 3D laser alignment bay, we calibrate camber, caster, toe angles, and thrust angle to within fractions of a millimeter to factory specs.",
    features: [
      "Ultra-precise 4-wheel 3D laser geometry scan",
      "Camber, caster & toe angle precision adjustment",
      "Road-Force dynamic tire wheel balancing",
      "Tyre tread depth & bead pressure verification",
      "Steering angle sensor (SAS) electronic reset",
      "Nitrogen tire inflation for consistent thermal pressure"
    ]
  },
  {
    id: "ac-repair",
    name: "AC Repair & Climate Control",
    category: "diagnostics",
    categoryLabel: "Diagnostics & Electrical",
    shortDesc: "R134a/R1234yf refrigerant recharge, compressor testing, leak detection, and anti-bacterial evaporator cleaning.",
    image: "https://images.unsplash.com/photo-1625047509168-a7026f36de04?auto=format&fit=crop&w=900&q=80",
    icon: "fa-snowflake",
    badge: "Dual Gas Compliant",
    startingPrice: "₹1,999",
    duration: "1.5 Hours",
    warranty: "12 Months Chill Guarantee",
    fullDescription: "Beat the heat with sub-zero cabin climate performance. We diagnose AC compressor clutch slipping, condenser fin blockages, expansion valve bottlenecks, and micro-leaks using nitrogen pressure holds and UV dye tracing.",
    features: [
      "Automated refrigerant recovery, vacuum & precision recharge",
      "UV fluorescent dye micro-leak detection scan",
      "AC compressor clutch & electronic control valve check",
      "Condenser & evaporator ultrasonic deep cleaning",
      "Activated carbon cabin pollen filter upgrade",
      "Ozone anti-bacterial cabin duct sanitization"
    ]
  },
  {
    id: "battery-replacement",
    name: "Battery Replacement",
    category: "diagnostics",
    categoryLabel: "Diagnostics & Electrical",
    shortDesc: "AGM / EFB heavy-duty batteries with digital load conductance testing and alternator charging validation.",
    image: "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=900&q=80",
    icon: "fa-car-battery",
    badge: "Bosch / Varta Official",
    startingPrice: "₹3,499",
    duration: "30 Minutes",
    warranty: "36 - 48 Months Replacement",
    fullDescription: "Modern luxury vehicles depend heavily on consistent voltage for start-stop and electronic control modules. We supply high-cranking AGM batteries and program your vehicle's Battery Management System (BMS) to preserve alternator health.",
    features: [
      "Conductance cold-cranking amps (CCA) testing",
      "High-output AGM & EFB batteries for start-stop systems",
      "Alternator diode ripple & starter motor load check",
      "Corrosion-resistant terminal treatment & lead cleaning",
      "ECU Battery Management System (BMS) coding",
      "Eco-friendly disposal and recycling of old battery"
    ]
  },
  {
    id: "denting-painting",
    name: "Denting & Painting",
    category: "detailing",
    categoryLabel: "Detailing & Bodywork",
    shortDesc: "Computerized spectrophotometer color matching, paintless dent repair (PDR), and climate-controlled baking.",
    image: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=900&q=80",
    icon: "fa-paint-roller",
    badge: "PPG / Glasurit Paint",
    startingPrice: "₹3,999",
    duration: "1 - 3 Days",
    warranty: "Lifetime Paint Warranty",
    fullDescription: "Restore flawless factory contours. We utilize Paintless Dent Removal (PDR) rods for hail damage and door dings without compromising the paint, and state-of-the-art downdraft spray booths with infrared heat curing for seamless panel refinishing.",
    features: [
      "German computerized spectrophotometer color formula",
      "Paintless Dent Removal (PDR) for hail & minor creases",
      "Fiberglass & high-strength alloy body panel realignment",
      "Dust-free downdraft heated spray booth environment",
      "Multi-stage high-solid scratch-resistant clearcoat",
      "100% OEM color & flake match guarantee"
    ]
  },
  {
    id: "computer-diagnostics",
    name: "Computer Diagnostics",
    category: "diagnostics",
    categoryLabel: "Diagnostics & Electrical",
    shortDesc: "OEM dealer-level diagnostic scanning, live sensor telemetry, ECU module coding, and MIL light troubleshooting.",
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=900&q=80",
    icon: "fa-laptop-code",
    badge: "Dealer Level Tools",
    startingPrice: "₹1,499",
    duration: "45 Minutes",
    warranty: "100% Accurate Diagnosis",
    fullDescription: "Say goodbye to mystery check engine lights. Using Autel MaxiSys, BMW ISTA, Mercedes XENTRY, and VAG ODIS dealer diagnostic software, our master technicians interrogate CAN-bus networks, verify live sensor graphs, and identify the root cause before any parts are replaced.",
    features: [
      "Full network topology scan across all ECUs & modules",
      "Live data graphing (fuel trims, boost, timing, O2)",
      "Sensor test actuators (throttle body, VVT solenoids)",
      "Transmission TCM adaptation & shift point relearn",
      "Clearing historic DTC fault codes with detailed logs",
      "Software updates & factory control module coding"
    ]
  },
  {
    id: "interior-cleaning",
    name: "Car Interior Cleaning",
    category: "detailing",
    categoryLabel: "Detailing & Bodywork",
    shortDesc: "Hot-water extraction shampooing, steam sanitation, aniline leather conditioning, and ozone odor elimination.",
    image: "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?auto=format&fit=crop&w=900&q=80",
    icon: "fa-couch",
    badge: "Spa Level Revival",
    startingPrice: "₹1,499",
    duration: "2 - 4 Hours",
    warranty: "100% Odor-Free Guarantee",
    fullDescription: "Step into a cabin that feels fresh off the showroom floor. We deep-steam clean air vents, extract embedded dirt from carpet fibers, clean headliners without sagging, and nourish genuine leather with matte-finish UV conditioning balms.",
    features: [
      "Deep hot-water carpet & upholstery injection-extraction",
      "220°F pressurized steam cleaning of vents & crevices",
      "Leather pH balance cleaning & lanolin moisturizing",
      "Headliner delicate stain treatment without adhesive sagging",
      "Interior dashboard & console matte UV protection coat",
      "Complete medical-grade ozone molecular odor removal"
    ]
  },
  {
    id: "suspension-repair",
    name: "Suspension Repair",
    category: "chassis",
    categoryLabel: "Safety & Chassis",
    shortDesc: "Struts, air suspension bladders, control arms, ball joints, bushings, and active ride damper calibration.",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80",
    icon: "fa-wave-square",
    badge: "Air & Coil Specialists",
    startingPrice: "₹4,499",
    duration: "2 - 5 Hours",
    warranty: "24 Months / 25,000 km",
    fullDescription: "Restore planted cornering stability, crisp turn-in, and supreme riding comfort. Vantage Motorworks replaces leaking active air struts, worn polyurethane or rubber control arm bushings, sway bar links, and electronic damping systems.",
    features: [
      "Hydraulic shock dyno & rebound rate verification",
      "Airmatic / Adaptive air suspension bladder & compressor fix",
      "Lower & upper control arms, ball joints & tie rods",
      "Polyurethane performance bushing upgrades",
      "Electronic ride height sensor calibration",
      "Chassis subframe torque inspection & alignment"
    ]
  },
  {
    id: "roadside-assistance",
    name: "Emergency Roadside Assistance",
    category: "safety",
    categoryLabel: "Safety & Chassis",
    shortDesc: "24/7 priority emergency dispatch: flat-bed hydraulic towing, jump starts, lockouts, and on-site fuel delivery.",
    image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=900&q=80",
    icon: "fa-truck-pickup",
    badge: "24/7 Instant Dispatch",
    startingPrice: "₹999",
    duration: "20 - 35 Min Arrival",
    warranty: "Zero Damage Towing Guarantee",
    fullDescription: "Stranded on the highway or in an underground parking garage? Our fleet of modern flatbed haulers with soft-strap wheel tie-downs and low-angle ramps guarantees zero underbody or bumper damage to low-profile sports cars.",
    features: [
      "Low-approach hydraulic flatbed recovery trucks",
      "Commercial heavy-duty battery booster jump-starts",
      "On-the-spot flat tyre changeover or tyre plug seal",
      "Lockout key retrieval without seal damage",
      "Emergency high-octane fuel or diesel delivery",
      "Direct priority transport to our main workshop center"
    ]
  }
];

// 14 Automotive Brands with AUTHENTIC, ORIGINAL BRAND COLORS & VECTOR ARTWORK
// No grayscale, no monochrome inversion - pure original brand design
const brandsData = [
  {
    id: "bmw",
    name: "BMW",
    country: "Germany",
    region: "German",
    tagline: "The Ultimate Driving Machine",
    specialty: "TwinPower Turbo Powertrain & xDrive Calibration",
    diagnosticSuite: "BMW ISTA / INPA / Rheingold OEM Suite",
    models: "M2, M3, M4, M5, 3/5/7 Series, X3, X5, X7",
    svg: `<svg viewBox="0 0 100 100" class="brand-svg-img" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="BMW original logo">
      <circle cx="50" cy="50" r="48" fill="#1C1F26" stroke="#9EA8B6" stroke-width="2.5"/>
      <circle cx="50" cy="50" r="32" fill="#0A0B0E" stroke="#FFFFFF" stroke-width="1.5"/>
      <path d="M50 18 A32 32 0 0 1 82 50 L50 50 Z" fill="#0066B1"/>
      <path d="M50 82 A32 32 0 0 1 18 50 L50 50 Z" fill="#0066B1"/>
      <path d="M18 50 A32 32 0 0 1 50 18 L50 50 Z" fill="#FFFFFF"/>
      <path d="M82 50 A32 32 0 0 1 50 82 L50 50 Z" fill="#FFFFFF"/>
      <line x1="50" y1="18" x2="50" y2="82" stroke="#6F7C8A" stroke-width="1.2"/>
      <line x1="18" y1="50" x2="82" y2="50" stroke="#6F7C8A" stroke-width="1.2"/>
      <text x="50" y="14" font-size="8.5" font-family="'Outfit', 'Arial Black', sans-serif" font-weight="900" fill="#FFFFFF" text-anchor="middle" letter-spacing="1">BMW</text>
    </svg>`
  },
  {
    id: "mercedes",
    name: "Mercedes-Benz",
    country: "Germany",
    region: "German",
    tagline: "The Best or Nothing",
    specialty: "AMG Bi-Turbo V8, 9G-Tronic & AIRMATIC Suspension",
    diagnosticSuite: "Mercedes-Benz XENTRY Diagnostics",
    models: "C-Class, E-Class, S-Class, G-Wagon, AMG GT",
    svg: `<svg viewBox="0 0 100 100" class="brand-svg-img" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Mercedes-Benz original chrome star logo">
      <defs>
        <linearGradient id="mb_chrome" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FFFFFF"/>
          <stop offset="45%" stop-color="#C2CCD6"/>
          <stop offset="70%" stop-color="#808F9E"/>
          <stop offset="100%" stop-color="#E2E8F0"/>
        </linearGradient>
      </defs>
      <circle cx="50" cy="50" r="46" stroke="url(#mb_chrome)" stroke-width="3.5" fill="none"/>
      <circle cx="50" cy="50" r="41" stroke="#94A3B8" stroke-width="1" stroke-opacity="0.5" fill="none"/>
      <!-- Three pointed star with metallic facets -->
      <polygon points="50,6 50,50 12,72" fill="url(#mb_chrome)" stroke="#718096" stroke-width="0.8"/>
      <polygon points="50,6 50,50 88,72" fill="#E2E8F0" stroke="#718096" stroke-width="0.8"/>
      <polygon points="12,72 50,50 88,72" fill="#A0AEC0" stroke="#718096" stroke-width="0.8"/>
      <circle cx="50" cy="50" r="3" fill="#FFFFFF"/>
    </svg>`
  },
  {
    id: "audi",
    name: "Audi",
    country: "Germany",
    region: "German",
    tagline: "Vorsprung durch Technik",
    specialty: "Quattro All-Wheel Drive & S-Tronic Dual Clutch",
    diagnosticSuite: "ODIS / VCDS Dealer Diagnostic Software",
    models: "A4, A6, A8, RS3, RS6, RS7, R8, Q5, Q7, Q8",
    svg: `<svg viewBox="0 0 120 60" class="brand-svg-img" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Audi original chrome rings logo">
      <defs>
        <linearGradient id="audi_metal" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FFFFFF"/>
          <stop offset="40%" stop-color="#CBD5E1"/>
          <stop offset="70%" stop-color="#94A3B8"/>
          <stop offset="100%" stop-color="#E2E8F0"/>
        </linearGradient>
      </defs>
      <circle cx="24" cy="30" r="18" stroke="url(#audi_metal)" stroke-width="3.5" fill="none"/>
      <circle cx="48" cy="30" r="18" stroke="url(#audi_metal)" stroke-width="3.5" fill="none"/>
      <circle cx="72" cy="30" r="18" stroke="url(#audi_metal)" stroke-width="3.5" fill="none"/>
      <circle cx="96" cy="30" r="18" stroke="url(#audi_metal)" stroke-width="3.5" fill="none"/>
    </svg>`
  },
  {
    id: "porsche",
    name: "Porsche",
    country: "Germany",
    region: "German",
    tagline: "Driven by Dreams",
    specialty: "Flat-6 Engine Rebuilding, PDK & PCCB Ceramic Brakes",
    diagnosticSuite: "PIWIS III Factory Porsche Diagnostic Tester",
    models: "911 Carrera/GT3/Turbo, 718 Cayman, Macan, Cayenne, Panamera",
    svg: `<svg viewBox="0 0 100 110" class="brand-svg-img" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Porsche authentic Stuttgart crest logo">
      <!-- Shield background in authentic gold -->
      <path d="M20 18 C20 18, 50 12, 80 18 C83 46, 82 72, 50 102 C18 72, 17 46, 20 18 Z" fill="#D4AF37" stroke="#997A15" stroke-width="2.5"/>
      <rect x="23" y="24" width="54" height="70" fill="none"/>
      <!-- Top banner PORSCHE -->
      <rect x="25" y="19" width="50" height="9" fill="#000000" rx="2"/>
      <text x="50" y="26" font-size="6.5" font-family="'Outfit', sans-serif" font-weight="900" fill="#D4AF37" text-anchor="middle" letter-spacing="1.5">PORSCHE</text>
      <!-- Quadrants: Red stripes, Black antlers -->
      <!-- Top Left: Antlers -->
      <path d="M26 31 L47 31 L47 52 L26 52 Z" fill="#D4AF37"/>
      <path d="M29 34 C35 34, 43 38, 45 44 M30 40 C35 40, 42 43, 44 48 M30 46 C36 46, 42 47, 44 51" stroke="#000000" stroke-width="1.5" stroke-linecap="round"/>
      <!-- Top Right: Red & Black bars -->
      <path d="M53 31 L74 31 L74 52 L53 52 Z" fill="#D4AF37"/>
      <rect x="54" y="32" width="19" height="4" fill="#D11218"/>
      <rect x="54" y="38" width="19" height="4" fill="#000000"/>
      <rect x="54" y="44" width="19" height="4" fill="#D11218"/>
      <!-- Bottom Left: Red & Black bars -->
      <path d="M27 55 L47 55 L47 75 L33 75 Z" fill="#D4AF37"/>
      <rect x="28" y="56" width="18" height="4" fill="#D11218"/>
      <rect x="29" y="62" width="17" height="4" fill="#000000"/>
      <rect x="31" y="68" width="15" height="4" fill="#D11218"/>
      <!-- Center Stuttgart Horse in Gold & Black -->
      <path d="M42 46 C42 46, 50 43, 58 46 C59 55, 57 65, 50 72 C43 65, 41 55, 42 46 Z" fill="#E8C85B" stroke="#000000" stroke-width="1.2"/>
      <path d="M48 64 C48 60, 52 55, 50 51 C52 50, 53 48, 51 47 C48 49, 48 51, 46 53 C46 56, 47 60, 48 64 Z" fill="#000000"/>
    </svg>`
  },
  {
    id: "volkswagen",
    name: "Volkswagen",
    country: "Germany",
    region: "German",
    tagline: "Das Auto",
    specialty: "TSI Turbocharged Engines & DSG Mechatronics",
    diagnosticSuite: "VAG ODIS Diagnostic System",
    models: "Golf GTI/R, Passat, Tiguan, Touareg, Arteon",
    svg: `<svg viewBox="0 0 100 100" class="brand-svg-img" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Volkswagen original blue roundel logo">
      <circle cx="50" cy="50" r="46" fill="#001E50" stroke="#FFFFFF" stroke-width="2.5"/>
      <circle cx="50" cy="50" r="41" fill="#001E50" stroke="#0046AD" stroke-width="2"/>
      <!-- V over W Monogram in Chrome White -->
      <path d="M27 33 L40 67 L49 46 L51 46 L60 67 L73 33" stroke="#FFFFFF" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
      <path d="M36 53 L50 82 L64 53" stroke="#FFFFFF" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    </svg>`
  },
  {
    id: "toyota",
    name: "Toyota",
    country: "Japan",
    region: "Japanese",
    tagline: "Let's Go Places",
    specialty: "Hybrid Synergy Drive, VVT-i & D-4S Injection",
    diagnosticSuite: "Toyota Techstream Diagnostic Software",
    models: "Supra, Land Cruiser, Camry, RAV4, GR Yaris, Fortuner",
    svg: `<svg viewBox="0 0 120 80" class="brand-svg-img" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Toyota original red emblem">
      <!-- Authentic Toyota Red Ellipses -->
      <ellipse cx="60" cy="40" rx="52" ry="34" stroke="#EB0A1E" stroke-width="5" fill="none"/>
      <ellipse cx="60" cy="40" rx="19" ry="33" stroke="#EB0A1E" stroke-width="5" fill="none"/>
      <ellipse cx="60" cy="27" rx="36" ry="14" stroke="#EB0A1E" stroke-width="5" fill="none"/>
    </svg>`
  },
  {
    id: "honda",
    name: "Honda",
    country: "Japan",
    region: "Japanese",
    tagline: "The Power of Dreams",
    specialty: "VTEC Mechanical Valvetrain & Earth Dreams Powertrains",
    diagnosticSuite: "Honda HDS (Honda Diagnostic System)",
    models: "Civic Type R, Accord, CR-V, NSX, City",
    svg: `<svg viewBox="0 0 100 85" class="brand-svg-img" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Honda original red badge logo">
      <defs>
        <linearGradient id="honda_red_bg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#E50014"/>
          <stop offset="100%" stop-color="#A5000E"/>
        </linearGradient>
      </defs>
      <!-- Classic Type R / Heritage Red Badge -->
      <rect x="8" y="6" width="84" height="72" rx="12" fill="url(#honda_red_bg)" stroke="#D8E0E7" stroke-width="2"/>
      <!-- Polished Chrome 'H' -->
      <path d="M24 20 L32 64 M76 20 L68 64 M24 20 L38 20 L40 40 L60 40 L62 20 L76 20 M38 40 L62 40" stroke="#FFFFFF" stroke-width="5.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`
  },
  {
    id: "hyundai",
    name: "Hyundai",
    country: "South Korea",
    region: "Korean",
    tagline: "Progress for Humanity",
    specialty: "T-GDI Turbocharged Engines & N-Performance Tuning",
    diagnosticSuite: "Hyundai GDS Diagnostic System",
    models: "i30 N, Elantra N, Tucson, Santa Fe, Ioniq 5",
    svg: `<svg viewBox="0 0 120 70" class="brand-svg-img" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Hyundai authentic blue oval logo">
      <!-- Authentic Hyundai Deep Oceanic Blue -->
      <ellipse cx="60" cy="35" rx="53" ry="29" stroke="#002C6C" stroke-width="5.5" transform="rotate(-7 60 35)" fill="none"/>
      <!-- Slanted stylized 'H' -->
      <path d="M42 53 L48 18 C52 24, 68 24, 72 18 L78 53 M45 36 C55 33, 65 33, 75 36" stroke="#002C6C" stroke-width="6" stroke-linecap="round" fill="none"/>
    </svg>`
  },
  {
    id: "kia",
    name: "Kia",
    country: "South Korea",
    region: "Korean",
    tagline: "Movement that Inspires",
    specialty: "Smartstream Turbos & Electric E-GMP Architecture",
    diagnosticSuite: "Kia KDS Diagnostic Tool",
    models: "Stinger GT, EV6, Sportage, Sorento, Carnival",
    svg: `<svg viewBox="0 0 120 50" class="brand-svg-img" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Kia modern red/white connected wordmark logo">
      <!-- Authentic Kia Red Accent Background -->
      <rect x="5" y="4" width="110" height="42" rx="8" fill="#05141F" stroke="#EA0029" stroke-width="2"/>
      <!-- Connected KIA Letters in Bold White with Red Dynamic Line -->
      <path d="M22 37 L32 13 L42 37 M26 27 L53 13 L53 37 M66 37 L66 13 L98 13 L98 37" stroke="#FFFFFF" stroke-width="6" stroke-linecap="square" stroke-linejoin="miter" fill="none"/>
      <circle cx="98" cy="13" r="3" fill="#EA0029"/>
    </svg>`
  },
  {
    id: "skoda",
    name: "Škoda",
    country: "Czech Republic",
    region: "European",
    tagline: "Simply Clever",
    specialty: "TSI Powertrains & MQB Platform Suspension",
    diagnosticSuite: "ODIS / VAG Comprehensive System",
    models: "Octavia vRS, Superb, Kodiaq, Kushaq, Slavia",
    svg: `<svg viewBox="0 0 100 100" class="brand-svg-img" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Škoda original emerald green winged arrow logo">
      <circle cx="50" cy="50" r="46" fill="#0E2A24" stroke="#2EE59D" stroke-width="3"/>
      <!-- Winged Arrow in Authentic Škoda Electric Green -->
      <path d="M50 20 C50 20 67 28 67 46 C67 60 52 70 34 68 C45 62 48 54 48 50 C40 50 36 44 40 38 C44 32 50 20 50 20 Z" fill="#2EE59D"/>
      <circle cx="63" cy="40" r="3.5" fill="#FFFFFF"/>
      <text x="50" y="90" font-size="8.5" font-weight="900" font-family="'Outfit', sans-serif" fill="#FFFFFF" text-anchor="middle" letter-spacing="2">ŠKODA</text>
    </svg>`
  },
  {
    id: "ford",
    name: "Ford",
    country: "USA",
    region: "American",
    tagline: "Go Further",
    specialty: "EcoBoost Turbo & Coyote 5.0L V8 Overhauls",
    diagnosticSuite: "Ford FDRS & IDS Diagnostic Suite",
    models: "Mustang GT/Mach 1, F-150, Bronco, Ranger Raptor, Explorer",
    svg: `<svg viewBox="0 0 130 75" class="brand-svg-img" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Ford authentic royal blue oval script logo">
      <defs>
        <linearGradient id="ford_blue" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#004BA8"/>
          <stop offset="60%" stop-color="#002C6C"/>
          <stop offset="100%" stop-color="#00183B"/>
        </linearGradient>
      </defs>
      <!-- Legendary Blue Oval -->
      <ellipse cx="65" cy="37.5" rx="60" ry="32" fill="url(#ford_blue)" stroke="#FFFFFF" stroke-width="3"/>
      <ellipse cx="65" cy="37.5" rx="55" ry="28" fill="none" stroke="#60A5FA" stroke-width="1.2" stroke-opacity="0.6"/>
      <!-- Script Typography -->
      <text x="65" y="47" font-size="32" font-family="'Brush Script MT', 'Lucida Calligraphy', Georgia, serif" font-style="italic" font-weight="bold" fill="#FFFFFF" text-anchor="middle">Ford</text>
    </svg>`
  },
  {
    id: "jeep",
    name: "Jeep",
    country: "USA",
    region: "American",
    tagline: "Go Anywhere. Do Anything.",
    specialty: "4x4 Transfer Case Overhaul, HEMI V8 & Axle Regearing",
    diagnosticSuite: "Stellantis wiTECH 2.0 Diagnostic System",
    models: "Wrangler Rubicon, Grand Cherokee, Gladiator, Compass",
    svg: `<svg viewBox="0 0 120 55" class="brand-svg-img" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Jeep original bold army green / white logo">
      <!-- Authentic Jeep Wordmark in Bold White & 7-slot Military Grille -->
      <text x="60" y="34" font-size="34" font-family="'Outfit', 'Impact', sans-serif" font-weight="900" fill="#FFFFFF" text-anchor="middle" letter-spacing="3">Jeep</text>
      <!-- 7 vertical iconic grille slots -->
      <g fill="#20C5D8">
        <rect x="25" y="42" width="5" height="7" rx="2"/>
        <rect x="35" y="42" width="5" height="7" rx="2"/>
        <rect x="45" y="42" width="5" height="7" rx="2"/>
        <rect x="55" y="42" width="5" height="7" rx="2"/>
        <rect x="65" y="42" width="5" height="7" rx="2"/>
        <rect x="75" y="42" width="5" height="7" rx="2"/>
        <rect x="85" y="42" width="5" height="7" rx="2"/>
      </g>
    </svg>`
  },
  {
    id: "tata",
    name: "Tata Motors",
    country: "India",
    region: "Indian",
    tagline: "Connecting Aspirations",
    specialty: "Kryotec & Revotron Powertrains, OMEGARC Architecture",
    diagnosticSuite: "Tata Diagnostic System (TDS)",
    models: "Harrier, Safari, Nexon, Curvv, Altroz",
    svg: `<svg viewBox="0 0 110 70" class="brand-svg-img" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Tata Motors original blue roundel logo">
      <!-- Authentic Tata Blue -->
      <ellipse cx="55" cy="35" rx="50" ry="30" fill="#003366" stroke="#FFFFFF" stroke-width="2.5"/>
      <!-- Connected Dual T swooshes in White -->
      <path d="M28 24 C40 24 55 42 55 50 C55 42 70 24 82 24 M35 24 L75 24" stroke="#FFFFFF" stroke-width="4.5" stroke-linecap="round" fill="none"/>
      <text x="55" y="64" font-size="8" font-weight="900" font-family="'Outfit', sans-serif" fill="#FFFFFF" text-anchor="middle" letter-spacing="2">TATA</text>
    </svg>`
  },
  {
    id: "mahindra",
    name: "Mahindra",
    country: "India",
    region: "Indian",
    tagline: "Rise",
    specialty: "mStallion Turbo-Petrol & mHawk Diesel Drivetrain Tuning",
    diagnosticSuite: "Mahindra Smart Diagnostic System",
    models: "Scorpio-N, XUV700, Thar, Thar Roxx, XUV 3XO",
    svg: `<svg viewBox="0 0 110 70" class="brand-svg-img" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Mahindra original twin peaks red/chrome logo">
      <!-- Twin Peaks Wings in Chrome / Silver with Mahindra Red Foundation -->
      <rect x="10" y="8" width="90" height="54" rx="8" fill="#131F2C" stroke="#D31027" stroke-width="1.8"/>
      <!-- Twin peaks metallic wings -->
      <path d="M24 46 L44 18 L55 36 L66 18 L86 46 M36 46 L48 28 L55 38 L62 28 L74 46" stroke="#FFFFFF" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" fill="#E2E8F0" fill-opacity="0.3"/>
      <text x="55" y="60" font-size="7.5" font-weight="900" font-family="'Outfit', sans-serif" fill="#D31027" text-anchor="middle" letter-spacing="1.5">MAHINDRA</text>
    </svg>`
  }
];

// Interactive Gallery Items with verified real photography
const galleryData = [
  {
    id: 1,
    title: "Porsche 911 GT3 RS Overhaul",
    category: "luxury",
    categoryLabel: "Luxury Cars",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1000&q=80",
    description: "Suspension corner-balancing, Brembo carbon-ceramic brake service, and bespoke high-RPM engine tuning."
  },
  {
    id: 2,
    title: "Master Diagnostic Workshop Bay",
    category: "workshop",
    categoryLabel: "Workshop",
    image: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1000&q=80",
    description: "Climate-controlled diagnostic bay equipped with flush hydraulic lifts, 3D laser alignment, and OEM scanners."
  },
  {
    id: 3,
    title: "Bi-Turbo V8 Engine Rebuild",
    category: "engine",
    categoryLabel: "Engine Repair",
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=1000&q=80",
    description: "Complete timing chain replacement, valve reseating, and high-performance fuel injection calibration."
  },
  {
    id: 4,
    title: "Multi-Stage Paint Correction & Coating",
    category: "detailing",
    categoryLabel: "Detailing",
    image: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&w=1000&q=80",
    description: "Removal of clearcoat swirls and micro-marring followed by a 9H dual-layer hydrophobic ceramic coating."
  },
  {
    id: 5,
    title: "Touchless High-Foam Citrus Wash",
    category: "washing",
    categoryLabel: "Car Washing",
    image: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=1000&q=80",
    description: "De-ionized water rinse with dense snow foam lifting road grime without micro-scratching sensitive clearcoats."
  },
  {
    id: 6,
    title: "Before & After: Paint Swirl Elimination",
    category: "before-after",
    categoryLabel: "Before & After",
    image: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=1000&q=80",
    description: "50/50 test section showing dull, heavily scratched gloss paint revived to deep reflective mirror finish."
  },
  {
    id: 7,
    title: "Mercedes-AMG Aerodynamic Alignment",
    category: "luxury",
    categoryLabel: "Luxury Cars",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1000&q=80",
    description: "High-speed track day preparation, differential oil exchange, and adaptive air suspension recalibration."
  },
  {
    id: 8,
    title: "Audi S-Line Cockpit Restoration",
    category: "detailing",
    categoryLabel: "Detailing",
    image: "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?auto=format&fit=crop&w=1000&q=80",
    description: "Steam-sanitized air conditioning ductwork, deep alcantara restoration, and matte leather feeding balm."
  },
  {
    id: 9,
    title: "High-Performance Slotted Disc Service",
    category: "workshop",
    categoryLabel: "Workshop",
    image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1000&q=80",
    description: "Installation of two-piece floating rotors with Pagid track-duty pads and high-temp synthetic fluid."
  }
];

// Verified Customer Testimonials
const testimonialsData = [
  {
    id: 1,
    name: "Marcus Vance",
    role: "Porsche 911 Carrera 4S Owner",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    date: "2 weeks ago",
    service: "Major Service & Ceramic Coating",
    text: "Vantage Motorworks is the only workshop I trust with my 911. Their transparent digital inspection report with live technician videos was incredible. The car drives even sharper than the day I picked it up from the dealership."
  },
  {
    id: 2,
    name: "Elena Rostova",
    role: "BMW M3 Competition Owner",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    date: "1 month ago",
    service: "Brake Overhaul & 3D Laser Alignment",
    text: "Diagnosed a high-speed vibration that two other luxury garages failed to solve. Within 90 minutes they identified a microscopic runout on the right front hub. Exceptional engineering mindset and spotless facility."
  },
  {
    id: 3,
    name: "David Chen",
    role: "Audi RS6 Avant Owner",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    date: "3 weeks ago",
    service: "Twin-Turbo Diagnostics & Full Service",
    text: "Honest pricing, zero unnecessary upsells, and genuine OEM parts. They even stored the replaced components in a labeled box for me to inspect upon pickup. The customer lounge and loaner vehicle made it effortless."
  },
  {
    id: 4,
    name: "Sarah Jenkins",
    role: "Mercedes-Benz G63 AMG Owner",
    avatar: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    date: "Just recently",
    service: "Emergency Towing & Battery Replacement",
    text: "My vehicle refused to start late on a Sunday evening. The roadside unit arrived in 24 minutes, protected my low splitter with customized ramps, and had an OEM AGM battery installed first thing in the morning."
  }
];

// Interactive Statistics Data
const statsData = [
  { id: "cars-serviced", label: "Cars Serviced", target: 18450, suffix: "+", icon: "fa-car" },
  { id: "happy-customers", label: "Happy Customers", target: 14200, suffix: "+", icon: "fa-users" },
  { id: "expert-technicians", label: "Expert Technicians", target: 48, suffix: "+", icon: "fa-wrench" },
  { id: "years-experience", label: "Years of Experience", target: 16, suffix: "+", icon: "fa-award" }
];

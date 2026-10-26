# Vantage Motorworks — Luxury Automotive Service Website

A complete, production-grade automotive service company website engineered with modern frontend technologies (HTML5, CSS3, ES6+ JavaScript). Styled in an executive automotive palette with deep navy blue, steel blue, electric cyan accents, and metallic silver surfaces.

---

## 🏎️ Color Palette & Design System

- **Primary Background**: Deep Navy Blue (`#101923`)
- **Secondary Background**: Steel Blue (`#1C2B3A`)
- **Main Accent**: Electric Cyan (`#20C5D8` / `#39D6E8`)
- **Secondary Accent**: Metallic Silver (`#D8E0E7`)
- **Text**: Pure White (`#FFFFFF`) and Light Grey (`#B8C4CE`)
- **Cards & Surfaces**: Coordinated Dark Blue-Grey Surfaces (`#162432` / `rgba(28, 43, 58, 0.72)`)
- **Typography**: Google Fonts [`Outfit`](https://fonts.google.com/specimen/Outfit) for headings and [`Plus Jakarta Sans`](https://fonts.google.com/specimen/Plus+Jakarta+Sans) for body text.

---

## 📑 7 Independent Pages & Navigation Structure

1. **`index.html` — Home**
   - Fixed navbar with active state.
   - Cinematic automotive hero section with interactive 3D telemetry card.
   - **Continuous car company logo slider** (positioned directly below the hero section).
   - Featured top automotive services with instant hover cards and modal view.
   - Why Choose Us (4 feature cards: Certified Technicians, Advanced Diagnostic Equipment, Transparent Pricing, Genuine Quality Parts).
   - How It Works (4-step connected timeline).
   - Animated statistics counters.
   - Workshop gallery preview with lightbox modal.
   - Verified driver testimonials carousel.
   - Online reservation call-to-action banner.
   - Comprehensive footer.

2. **`services.html` — All 12 Services**
   - Page hero banner with breadcrumbs.
   - Category filter tabs (Mechanical & Powertrain, Diagnostics & Electrical, Safety & Chassis, Detailing & Bodywork).
   - Complete grid containing all 12 services with instant hover reveals, 3D tilt, and "View Details" modal buttons.
   - Service details modal with specs, technical checklist, warranty, and "Book This Service Now" pre-filling button.
   - Workshop guarantees (Manufacturer Warranty Protection, Live Video Inspection, 24-Month / 30,000 km Warranty).

3. **`brands.html` — Supported Car Brands**
   - Dedicated showcase of 14 global manufacturers: **BMW, Mercedes-Benz, Audi, Volkswagen, Toyota, Honda, Hyundai, Kia, Tata Motors, Mahindra, Škoda, Porsche, Jeep, and Ford**.
   - Region filter pills (German, Japanese, American, Korean, European, Indian).
   - Authentic SVG vector logos, country of origin, philosophy, diagnostic software suites, and key models serviced.
   - Direct "Book for [Brand]" action buttons that pre-fill the reservation form.

4. **`about.html` — About Us**
   - Company history and state-of-the-art facility introduction.
   - Core founding principles and values.
   - Certified technician credentials (ASE Master, Bosch, Manufacturer Certifications).
   - Advanced equipment infrastructure (Hunter 3D Hawkeye Laser Alignment, OEM Diagnostic Suites, Heated Downdraft Booth, Dual-Gas AC stations).

5. **`gallery.html` — Workshop Gallery**
   - Real high-definition photography with interactive category filters: *All Works, Luxury Cars, Workshop Bays, Engine Repair, Detailing, Car Washing, and Before & After*.
   - Click-to-expand lightbox preview with caption descriptions and keyboard navigation (<kbd>Esc</kbd>, <kbd>&larr;</kbd>, <kbd>&rarr;</kbd>).

6. **`contact.html` — Contact Us**
   - 24/7 Rapid Response Towing & Breakdown Emergency dispatch card with direct call button.
   - Interactive digital inquiry form with client-side validation.
   - Workshop facility address, business hours, direct phone numbers, and email contacts.
   - Dark simulated interactive map with pulsing beacon and "Open in Google Maps" link.
   - Frequently Asked Questions accordion.

7. **`booking.html` — Book a Service**
   - Dedicated reservation page with integrated **Quick Service Price Estimator** (calculates turnaround time and baseline investment).
   - Comprehensive booking form: Full Name, Phone, Car Brand (all 14 brands), Car Model & Year, Required Service (all 12 services), Preferred Date (min date restricted to today), Time Slot, and Symptoms Notes.
   - Auto-fills parameters from URL queries (`?brand=...` and `?service=...`).
   - Generates an instant digital confirmation pass (`VMW-XXXX`) with a printable receipt option.

---

## 🚀 How to Run the Website

### Option 1: Direct File Open
You can open [index.html](file:///d:/JMKC%20DESIGN/my%20car/index.html) or any of the 7 `.html` files directly in any web browser.

### Option 2: Pure Node.js Server (Recommended)
Open a terminal in `d:\JMKC DESIGN\my car` and run:
```bash
node server.js
```
Then visit in your browser:
```
http://localhost:3000
```
*(The server supports both `.html` files and clean extensionless URLs like `http://localhost:3000/services`, `http://localhost:3000/brands`, etc.)*

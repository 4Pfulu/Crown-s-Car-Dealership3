# Crown-s-Car-Dealership3
## Student Information
### ST10509996/Pfulufhedziso Mulaudzi

## Module: WEDE5020 - Web Development

## Project Overview
Crown's Car Dealership is a fictional small, independently owned car dealership based in Pretoria, Gauteng, specialising in new and pre-owned vehicles. This project is part of a three-part Portfolio of Evidence for WEDE5020, in which a fully functional, responsive, and SEO-optimised website is developed for the dealership. Part 1 covered planning and the HTML structure, Part 2 covered CSS styling and responsive design, and Part 3 adds JavaScript functionality, search engine optimisation (SEO), and deployment.

## Live Website and Repository
- Live website: [paste your GitHub Pages link here]

## Website Goals and Objectives
- Establish a professional online presence for Crown's Car Dealership.
- Allow potential customers to browse available vehicle stock online.
- Generate qualified sales leads through an online enquiry form.
- Provide clear, accessible information on services, financing, and contact details.

## Key Features and Functionality
- Responsive navigation menu linking all pages.
- Homepage with hero section and featured vehicles.
- Vehicles page with JavaScript search, vehicle type filter, price sort and a lightbox photo gallery.
- About page with an FAQ accordion.
- Enquiry page and contact page with online forms (embedded Google Forms) for vehicle, finance and general enquiries.
- Contact page with the branch location shown on an interactive Leaflet map.
- SEO: unique titles and meta descriptions, alt text, heading structure, robots.txt and sitemap.xml.
- Fully responsive design, tested on desktop, tablet and mobile.
- Deployed online using GitHub Pages.

## Timeline and Milestones
- **Part 1:** Research, content gathering, sitemap, wireframes and the HTML structure of all five pages.
- **Part 2:** External stylesheet, typography, layout, visual styling and responsive design.
- **Part 3:** Part 2 feedback corrections, JavaScript features, forms, SEO, deployment and README.

## Part 1 Details
Part 1 covered project planning, content research, and the foundational HTML structure of the website, including semantic HTML, navigation, and basic content integration across five pages: Home, Vehicles, About Us, Enquiries and Contact.

## Part 2 Details
Part 2 focused on the visual design and responsive behaviour of the website. An external CSS stylesheet was created and linked to all five pages, applying consistent typography, colour scheme, and layout using CSS Grid and Flexbox. Interactive states (`:hover`, `:focus`, `:active`) were added to navigation links, buttons, and form fields. The site was made fully responsive using relative units, media query breakpoints (900px and 600px), and `<picture>`/`srcset` for responsive vehicle images.

## Part 3 Details
Part 3 focuses on adding JavaScript functionality, applying search engine optimisation (SEO), and deploying the website online. On the vehicles page, the vehicle cards are loaded with JavaScript, with a search box, a vehicle type filter, a price sort, and a lightbox that shows each photo larger when clicked. The About page has an FAQ accordion that opens and closes with JavaScript. The Contact page shows the branch location on an interactive map built with the Leaflet library. The enquiry and contact pages use embedded Google Forms to collect customer enquiries and general messages, and the phone number question is validated with a pattern. The website is deployed on GitHub Pages.

## SEO

### On-page SEO
- Every page has its own title tag and meta description.
- Headings (h1, h2, h3) are used to structure the content on every page.
- Images use descriptive alt text.
- Pages link to each other through the menu and through links inside the content.
- The website is mobile-friendly, using media queries and relative units.
- Keywords used: car dealership Pretoria, new and pre-owned vehicles, SUVs, bakkies, finance options, trade-ins.

### Off-page SEO (plan)
- Backlinks: ask local motoring and business directories in Pretoria to link to the website.
- Social media: share new stock and offers on Facebook and Instagram, with a link back to the website.
- Local SEO: list the dealership on Google Business Profile with the Pretoria Central address.

### Additional SEO files
- robots.txt tells search engine crawlers which pages they may visit.
- sitemap.xml lists all five pages to help search engines understand the structure of the website.

### Page speed and security
- Vehicle images use `loading="lazy"` so they load only when needed.
- The site is served over HTTPS by GitHub Pages.
- No personal information is stored by the website. Form answers are collected by Google Forms.

## Sitemap
- Home (index.html)
  - Vehicles (products.html)
  - About Us (about.html)
  - Enquiries (enquiries.html)
  - Contact (contact.html)

## Changelog

### Part 1
- **13 August 2026:** Initial project setup – folder structure created (css, js, images).
- **13 August 2026:** index.html created with header, nav, hero section, featured vehicles, and footer.
- **13 August 2026:** about.html created with history, mission, and vision content.
- **13 August 2026:** products.html created with vehicle listings.
- **13 August 2026:** enquiry.html created with enquiry form.
- **13 August 2026:** contact.html created with branch locations, map embeds, and contact form.
- **13 August 2026:** Real images and logo added to all pages.
### Part 2
- **11 September 2026:** Created external stylesheet (style.css) and linked it to all five pages (index, products, about, contact, enquiry).
- **11 September 2026:** Applied base styles, typography, colour scheme, and CSS reset site-wide.
- **11 September 2026:** Built layouts using CSS Grid (vehicle grid) and Flexbox (header, nav, forms, footer).
- **12 September 2026:** Added visual styling (card shadows, button styling, borders) and interactive states (:hover, :focus, :active).
- **12 September 2026:** Implemented responsive breakpoints at 900px and 600px for tablet and mobile.
- **17 September 2026:** Fixed broken navigation links: enquiries.html corrected to enquiry.html across all pages.
- **17 September 2026:** Standardized "Products" nav label to "Vehicles" to match other pages.
- **18 September 2026:** Fixed inconsistent logo class naming (.Logo vs .logo).
- **18 September 2026:** Added responsive `<picture>` elements with srcset to vehicle images on the home and vehicles pages.
- **18 September 2026:** Tested site across desktop, tablet, and mobile widths using browser developer tools.
### Part 3
- **24 October 2026:** Fixed Part 2 feedback: [write what your lecturer flagged and what you changed].
- **24 October 2026:** Created script.js and linked it to the pages that use it.
- **25 October 2026:** Vehicles page: vehicles are now loaded dynamically with JavaScript, with a search box, a vehicle type filter, and a price sort.
- **25 October 2026:** Vehicles page: added a lightbox so a vehicle photo opens larger when clicked.
- **26 October 2026:** About page: added an FAQ accordion that opens and closes with JavaScript.
- **27 October 2026:** Contact page: replaced the embedded map with an interactive Leaflet map with a marker and popup.
- **28 October 2026:** Enquiry and contact pages: replaced the HTML forms with embedded Google Forms, with the phone number question validated using a pattern.
- **29 October 2026:** Added a unique title tag and meta description to every page.
- **29 October 2026:** Fixed the Enquiries menu link and the "Make an Enquiry" button so they point to the correct page.
- **30 October 2026:** Removed the products script from pages that do not use it, to stop JavaScript errors.
- **31 October 2026:** Created robots.txt and sitemap.xml.
- **1 November 2026:** Created a new GitHub repository, uploaded the final website files, and deployed the website on GitHub Pages.
- **1 November 2026:** Updated the README with Part 3 details, SEO notes, the changelog, and references.

  ## References
- Citton Cars, 2026. *Used car dealership Pretoria.* [Online] Available at: https://pretoria.infoisinfo.co.za/search/used-car [Accessed 9 August 2026].
- MDN Web Docs, 2026. *HTML: Structuring the web.* [Online] Available at: https://developer.mozilla.org [Accessed 9 August 2026].
- MDN Web Docs, 2026. *Responsive images.* [Online] Available at: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture [Accessed 11 September 2026].
- MDN Web Docs, 2026. *CSS Grid Layout.* [Online] Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout [Accessed 11 September 2026].
- MDN Web Docs, 2026. *CSS Media Queries.* [Online] Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries [Accessed 11 September 2026].
- MDN Web Docs, 2026. *JavaScript.* [Online] Available at: https://developer.mozilla.org/en-US/docs/Web/JavaScript [Accessed 24 October 2026].
- Leaflet, 2026. *Leaflet: an open-source JavaScript library for interactive maps.* [Online] Available at: https://leafletjs.com [Accessed 27 October 2026].
- OpenStreetMap contributors, 2026. *OpenStreetMap.* [Online] Available at: https://www.openstreetmap.org [Accessed 27 October 2026].
- Google, 2026. *Google Forms.* [Online] Available at: https://www.google.com/forms [Accessed 28 October 2026].
- Google Search Central, 2026. *SEO starter guide.* [Online] Available at: https://developers.google.com/search/docs/fundamentals/seo-starter-guide [Accessed 29 October 2026].

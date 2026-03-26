# ☕ Coffee Finder

## Overview
Coffee Finder is a user-centric web application designed to help coffee enthusiasts explore different blends, search for specific drinks, and discover their perfect match through an interactive quiz. The site provides a seamless experience across all devices, from desktop to mobile.



## User Stories
To ensure a high-quality User Experience (UX), the site was developed based on the following user needs:
1. **As a first-time visitor**, I want to immediately understand the brand's purpose so I can decide if I want to browse the menu.
2. **As a busy professional**, I want a clear navigation menu and search bar so I can find my favorite drink quickly.
3. **As someone new to coffee**, I want an interactive quiz to recommend a drink based on my taste preferences (Sweet, Bold, Iced).
4. **As a mobile user**, I want a responsive layout and easy-to-click buttons so I can browse on the go.

## Design & Accessibility
### Design Choices
- **Color Palette**: We used a "Dark Roast" theme (Primary: #180202) contrasted with "Cream" (#fdfaf8) to ensure high readability and a premium feel (Pass 1.4).
- **Typography**: 'Inter' was chosen for body text for maximum legibility on small screens.
- **Imagery**: Consistent rounded graphics were used to create a modern, friendly UI (Pass 1.5).

### Accessibility
- **High Contrast**: All text passes AA contrast ratios against backgrounds.
- **Alt Text**: All images contain descriptive alternative text for screen readers.
- **Semantic HTML**: Used `<header>`, `<main>`, `<section>`, and `<footer>` tags to allow assistive technologies to navigate the structure easily (Pass 2.7).

## 🛠️ Technologies Used
- **HTML5**: Structured content.
- **CSS3**: Custom styling, Flexbox, and Media Queries for responsiveness.
- **JavaScript**: Logic for the mobile menu toggle and the interactive Coffee Quiz.
- **FontAwesome**: Scalable vector icons for social media and UI elements.

## 🧪 Testing Procedures
### Manual Testing Table
| Feature | Action | Expected Result | Result |
|---------|--------|-----------------|--------|
| Navbar | Click "Quiz" link | Page scrolls smoothly to Quiz section | PASS |
| Mobile Menu | Click Burger Icon | Menu slides out and icon changes to "X" | PASS |
| Search Bar | Type in input | User can enter text to search | PASS |
| Coffee Quiz | Click "Sweet & Creamy" | Result displays "Your choice is Latte!" | PASS |
| Social Links | Click Instagram Icon | Opens Instagram in a new browser tab | PASS |

### Validation
- **HTML**: Validated via [W3C Markup Validator](https://validator.w3.org/).
- **CSS**: Validated via [W3C Jigsaw Validator](https://jigsaw.w3.org/css-validator/).

## 🚀 Deployment
The site is deployed via **GitHub Pages**. 
**Live Link:** [https://y40y50.github.io/coffee-finder/](https://y40y50.github.io/coffee-finder/)

### How to Deploy:
1. Push the latest code to the `main` branch on GitHub.
2. Go to **Settings > Pages**.
3. Select the `main` branch as the source and click **Save**.

## 📝 Attribution
- All custom code was written by the author unless stated otherwise.
- **Icons**: [FontAwesome](https://fontawesome.com/)
- **Fonts**: [Google Fonts](https://fonts.google.com/)
- **Images**: Sourced from high-resolution royalty-free providers (Unsplash/Pexels).
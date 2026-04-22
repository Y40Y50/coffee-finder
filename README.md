# Coffee Finder 

## Project Overview

Coffee Finder is a front-end web application designed to help users discover coffee options through a simple interactive quiz. The website provides a clean, responsive interface and allows users to engage with content easily.

---

## Target Audience

* Coffee lovers looking for recommendations
* Casual users exploring drink options
* Mobile users needing a simple, responsive interface

---

## Features

* Interactive quiz for coffee selection
* Responsive design for mobile and desktop
* Clean and consistent UI styling
* Fast-loading static website

---

## Technologies Used

## Languages
    HTML5
    CSS3
    JAVASCRIPT
## Tools
    Git
    GitHub
    GitHub Pages
    Google Fonts
    Font Awesome
---

## User Stories

* As a user, I want to answer a quiz so I can get a coffee recommendation
* As a user, I want a simple layout so I can navigate easily
* As a mobile user, I want the site to work on my device

---

## UX Design

Wireframes were created to plan layout and structure before development.

Design decisions:

* Simple navigation for ease of use
* Large buttons for accessibility
* Clear text for readability

[wireframe](assets/images/wireframe-desktop.jpg)
[wireframe](assets/images/wireframe-desktop1.jpg)
[wireframe](assets/images/wireframe-mobile.jpg)

---

## Testing

### Manual Testing

| Feature      | Test              | Result                |
| ------------ | ----------------- | --------------------- |
| Quiz buttons | Click interaction | Works correctly       |
| Layout       | Resize screen     | Responsive            |
| Images       | Load on page      | All display correctly |

### Validation

* HTML validated using W3C Validator
[html validator](assets/images/Html-checker.png)
* CSS validated using W3C Validator
[html validator](assets/images/CSS-checker.png)


---

## Bugs Found and Fixed

* Quiz not responding initially → Fixed by correcting event listener
* Image not loading → Fixed file path
* Styling inconsistency → Unified CSS classes

---

## Deployment

This project was deployed using GitHub Pages.
[GitHub live link](https://y40y50.github.io/coffee-finder/)

Steps:

1. Push project to GitHub
2. Go to repository settings
3. Enable GitHub Pages
4. Select main branch
5. Site is live

---

## Version Control

Git and GitHub were used to manage development.
Commits include:

* Initial project setup
* Added quiz functionality
* Fixed bugs and improved UI

---

## File Structure

/css – Stylesheets
/js – JavaScript files
/assets/images – Image assets
index.html – Main page

---

## Credits

Some guidance and tutorials were referenced during development and have been credited within the code comments.

---

## User Stories with Evidence
### 1. Coffee Recommendation Quiz
#### User Story:
    As a user, I want to answer a quiz so that I can get a coffee recommendation based on my preferences.

#### Evidence:
The quiz allows users to select options such as "Black & Strong" or "Sweet & Creamy"
JavaScript function checkChoice() processes user input and displays results
The result is shown dynamically on the page without reloading

[Qiz-result befor](assets/images/Quiz-Result.png)
[Qiz-result after](assets/images/Quiz-Resultafter.png)

### 2. Responsive Navigation Menu

#### User Story:
As a mobile user, I want a navigation menu that I can open and close so that I can easily access different sections.

#### Evidence:

Hamburger menu icon toggles navigation links
JavaScript event listener adds/removes .active class
Menu icon changes from ☰ to X for better UX

[menu closed](assets/images/menu-close.png)
[menu open](assets/images/menu-open.png)

### 3. Interactive Video Modal

#### User Story:
As a user, I want to watch a video in a popup so that I can learn more without leaving the page.

#### Evidence:

Modal opens when "Watch Video" button is clicked
Modal closes when clicking X or outside the modal
Implemented using JavaScript and CSS modal logic

[modal open](assets/images/model-open.png)

### 4. Visual Feedback with Progress Bar

#### User Story:
As a user, I want visual feedback when I interact with the quiz so that I understand my progress.

#### Evidence:

Progress bar fills when a selection is made
Updated dynamically using JavaScript (progressFill.style.width)

[progress bar](assets/images/progress-bar.png)

### 5. Clean and Accessible Layout

#### User Story:
As a user, I want a clean and readable layout so that I can easily understand the content.

#### Evidence:

Consistent color scheme and typography
Clear headings and readable text
Responsive design tested on different screen sizes

[desktop view](assets/images/desktop-view.png) 
[mobile view](assets/images/mobile-view.png)



## Coffee Search with Feedback

### User Story

As a user, I want to search for a coffee and receive feedback if no results are found, so that I understand whether my search was successful.

---

### Evidence

    Typing "latte" shows only Latte
    Typing "espresso" shows Espresso
    Typing unrelated words shows "No coffee found"
    Clearing input restores all items

[results](assets/images/results.png)
[no result](assets/images/noresults.png)

---

### Outcome

This improvement enhances usability by clearly informing users when no matching results are found, ensuring better interaction and meeting input validation requirements.


## 📌 Future Improvements

* Add category filter functionality (Hot / Iced / Seasonal)
* Improve quiz result logic for more accurate recommendations
* Add animations for better user experience
* Store user preferences (local storage)

---

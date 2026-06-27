# Araucaria Association - Static Website

A clean, responsive static website built with Bootstrap 5.3.8.

## Project Structure

```
araucaria-asso.fr/
├── index.html                 # Landing page (Accueil)
├── pages/
│   ├── about.html            # About page (L'association)
│   ├── tree-climbing.html    # Tree climbing page (La grimpe d'arbre)
│   └── contact.html          # Contact page
├── css/
│   └── style.css             # Custom styles
├── js/
│   └── script.js             # Custom JavaScript
├── assets/
│   ├── images/               # Store your images here
│   └── fonts/                # Custom fonts if needed
└── README.md                 # This file
```

## Pages

- **Accueil (Home)** - Landing page with overview and navigation to other sections
- **L'association** - About the association page
- **La grimpe d'arbre** - Tree climbing activities and services
- **Contact** - Contact form and information

## Features

- ✅ Bootstrap 5.3.8 responsive framework
- ✅ Shared header and footer across all pages
- ✅ French navigation menu with 4 links
- ✅ Mobile-friendly navigation with hamburger menu
- ✅ Custom CSS styling with hover effects and animations
- ✅ Contact form with validation ready
- ✅ Flexbox layout ensuring footer stays at bottom
- ✅ Modern color scheme and typography

## Customization

### Change site information
Edit the header in each HTML file:
- Replace "Araucaria Association" with your site name
- Update contact info in the footer

### Modify colors
Edit CSS variables in `css/style.css`:
```css
:root {
    --primary-color: #0d6efd;
    --secondary-color: #212529;
    --accent-color: #22b14c;
}
```

### Add images
Place images in the `assets/images/` folder and reference them in HTML:
```html
<img src="../assets/images/your-image.jpg" alt="Description">
```

### Add new pages
1. Create a new `.html` file in the `pages/` folder
2. Copy the structure from an existing page
3. Update the navigation links to include your new page

## Linking between pages

From the root (`index.html`):
```html
<a href="pages/about.html">L'association</a>
```

From a page file (`pages/about.html`):
```html
<a href="../index.html">Accueil</a>
<a href="tree-climbing.html">La grimpe d'arbre</a>
```

## Bootstrap 5.3.8 Documentation

For more information about Bootstrap components and utilities, visit:
https://getbootstrap.com/docs/5.3/

## Quick Start

1. Open `index.html` in your web browser
2. Click through the navigation to view all pages
3. Customize content as needed
4. Keep the same structure for header/footer/navigation to maintain consistency

## Deployment

Since this is a static website (no server-side processing):
1. Upload all files to your web hosting
2. Keep the folder structure intact
3. No build process required
4. Works on any web server

## License

© 2026 Araucaria Association. All rights reserved.

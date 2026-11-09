# Syed Parvez Alam — Modern Portfolio

A clean, modern, fully functional single-page portfolio website.

## Folder Structure

```
portfolio/
├── index.html          # Main HTML
├── css/
│   └── style.css       # All styles (dark/light theme)
├── js/
│   └── script.js       # Interactivity, projects data, animations
├── assets/             # Put your images here (avatar, project screenshots)
└── README.md
```

## Features

- **Modern dark/light theme** with smooth toggle (saved in localStorage)
- **Typing animation** in the hero
- **Filterable projects** (All / Web Apps / Frontend / Full Stack)
- **Project modal** with live demo + source code links
- **Skills grid** with animated progress bars
- **Contact form** (currently shows a success toast — connect to Formspree, EmailJS, or your backend)
- **Responsive** design (mobile menu included)
- **Smooth scroll** + active nav highlighting
- **Cursor glow** effect on desktop
- **Glassmorphism** cards and soft animations

## How to Run

1. Open `index.html` directly in your browser, **or**
2. Use a local server (recommended):

```bash
# from inside the portfolio folder
npx serve .
# or
python -m http.server 8000
```

Then visit `http://localhost:3000` (or the port shown).

## Customization Guide

### 1. Personal Info
Edit `index.html`:
- Name, title, description in the **Hero** section
- About text and stats
- Contact details (email, location, social links)
- Social icons in hero + footer

### 2. Projects
Open `js/script.js` and edit the `projects` array:

```js
{
  id: 7,
  title: "My Awesome App",
  description: "Short description shown on the card.",
  longDesc: "Longer description shown in the modal.",
  category: "fullstack",   // "web" | "frontend" | "fullstack"
  tags: ["React", "Node.js"],
  icon: "fas fa-rocket",   // Font Awesome icon class
  live: "https://your-live-demo.com",
  github: "https://github.com/you/repo",
}
```

### 3. Skills
Edit the `skills` array in `js/script.js` (name, icon, level 0–100).

### 4. Add Real Images
- Replace the placeholder avatar in the About section with an `<img>`.
- For projects, you can add background images to `.project-image` via CSS or by updating the HTML generation in `renderProjects()`.

### 5. Connect the Contact Form (so messages reach YOUR email)

The form is already connected to **Web3Forms** (free).

**Do these steps once (takes ~1 minute):**

1. Go to → [https://web3forms.com](https://web3forms.com)
2. Enter **your email address** (where you want to receive messages)
3. Click **Create Access Key**
4. Copy the access key they give you
5. Open `index.html` and find this line:
   ```html
   <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
   ```
6. Replace `YOUR_ACCESS_KEY_HERE` with your real key
7. Save the file

Now every message submitted on the portfolio will arrive in your inbox.

### 6. Deploy
- **Vercel / Netlify**: drag & drop the `portfolio` folder
- **GitHub Pages**: push to a repo and enable Pages

## Tech Used

- Pure HTML, CSS & JavaScript (no frameworks)
- Font Awesome icons
- Google Fonts (Inter + Space Grotesk)
- Web3Forms (for contact form)

---

Feel free to customize everything and make it truly yours.
Happy coding!

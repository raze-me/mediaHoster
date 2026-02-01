# MediaHoster Sign-In Page

## Project Structure

```
tiny-tools/
├── static/
│   ├── css/
│   │   └── style.css          # All styling and animations
│   └── js/
│       ├── auth.js            # Firebase authentication logic
│       └── firebase-config.js # Firebase config module
├── templates/
│   └── index.html             # Clean HTML structure
├── app.py                     # Flask application
├── .env                       # Environment variables
├── .gitignore                 # Git ignore rules
└── requirements.txt           # Python dependencies
```

## Features

### Design
- Orange (#FF6B35), Yellow (#FFB627), Off-white (#FFF8E7) color scheme
- Poppins playful font family
- Animated gradient background with floating orbs
- Glassmorphism card design
- Smooth micro-animations on all interactions
- Fully responsive mobile-friendly layout

### Authentication
- Email/Password sign-in
- Google OAuth sign-in
- GitHub OAuth sign-in
- Forgot password link
- Sign up link

### Icons
- Google Material Icons for social login buttons
- Clean, modern icon design

## Files

### `templates/index.html`
Clean HTML structure with:
- Google Fonts (Poppins)
- Material Icons
- Linked external CSS and JS files
- Firebase config passed via window object

### `static/css/style.css`
Complete styling including:
- Responsive design
- Animations (float, slideIn)
- Form styling
- Button hover effects
- Mobile breakpoints

### `static/js/auth.js`
Firebase authentication logic:
- Email/password sign-in
- Google sign-in with popup
- GitHub sign-in with popup
- Error handling

## Running the App

```bash
pip install -r requirements.txt
python app.py
```

Visit: `http://localhost:5000`

## Security

- Firebase credentials stored in `.env` file
- Config passed server-side via Flask
- `.env` excluded from git via `.gitignore`

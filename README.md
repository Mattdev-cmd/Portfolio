# 🎨 Modern Portfolio Website

A beautiful, responsive portfolio website built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS**. Showcase your projects, skills, and connect with potential clients and employers.

## ✨ Features

- **Responsive Design** - Works seamlessly on mobile, tablet, and desktop devices
- **Dark/Light Mode** - Toggle between dark and light themes
- **Project Showcase** - Display your best work with descriptions, technologies, and links
- **Skills Section** - Categorized list of your technical expertise
- **Contact Form** - Functional contact form for visitor inquiries
- **Smooth Navigation** - Sticky header with smooth scroll links
- **Modern UI** - Clean and professional design using Tailwind CSS
- **Social Links** - Easy access to your GitHub, LinkedIn, and email
- **Hero Section** - Eye-catching introduction with call-to-action buttons

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Navigate to the project directory:**
   ```bash
   cd Portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

   The app will be available at `http://localhost:5173/`

## 📦 Available Scripts

- **`npm run dev`** - Start the development server with hot reload
- **`npm run build`** - Build the production-ready application
- **`npm run preview`** - Preview the production build locally

## 🛠️ Tech Stack

- **React 18** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful SVG icons
- **React Router** - Smooth navigation (setup ready)

## 📁 Project Structure

```
src/
├── components/          # Reusable components
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero/intro section
│   ├── Projects.tsx    # Projects showcase
│   ├── Skills.tsx      # Skills section
│   ├── Contact.tsx     # Contact form
│   └── Footer.tsx      # Footer section
├── App.tsx             # Main app component
├── main.tsx            # Entry point
├── index.css           # Global styles with Tailwind
└── assets/             # Static assets

public/                # Static files

dist/                  # Production build (generated)
```

## 🎨 Customization

### Update Personal Information

1. **Hero Section** - Edit [src/components/Hero.tsx](src/components/Hero.tsx)
   - Change your name and tagline
   - Update the call-to-action buttons

2. **Projects** - Edit [src/components/Projects.tsx](src/components/Projects.tsx)
   - Add your project details, descriptions, and links
   - Update project images and technologies

3. **Skills** - Edit [src/components/Skills.tsx](src/components/Skills.tsx)
   - Add or remove skill categories
   - Update your technical expertise

4. **Contact** - Edit [src/components/Contact.tsx](src/components/Contact.tsx)
   - Update email, phone, and location
   - Connect the contact form to an email service (Formspree, EmailJS, etc.)

5. **Header/Navigation** - Edit [src/components/Header.tsx](src/components/Header.tsx)
   - Customize navigation links
   - Update social media URLs

### Modify Colors and Theme

Edit `tailwind.config.js` to customize colors:

```javascript
theme: {
  extend: {
    colors: {
      primary: "#3b82f6",      // Primary color
      secondary: "#1f2937",    // Secondary color
      accent: "#f59e0b",       // Accent color
    },
  },
}
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your project to GitHub
2. Connect your GitHub repo to [Vercel](https://vercel.com)
3. Vercel will automatically detect the React + Vite setup
4. Your site will be live at a Vercel URL

### Deploy to Netlify

1. Build the project: `npm run build`
2. Connect your GitHub repo to [Netlify](https://netlify.com)
3. Set build command to `npm run build`
4. Set publish directory to `dist`

### Deploy to Other Platforms

The `dist` folder created by `npm run build` can be deployed to:
- GitHub Pages
- Firebase Hosting
- AWS S3 + CloudFront
- Heroku
- Any static hosting service

## 📧 Contact Form Integration

To enable the contact form, integrate with one of these services:

- **Formspree** - `formspree.io`
- **EmailJS** - `emailjs.com`
- **SendGrid** - `sendgrid.com`

Update the form submission in [src/components/Contact.tsx](src/components/Contact.tsx)

## 🎯 Best Practices

- Keep project descriptions concise and impactful
- Use high-quality images for project thumbnails
- Regular backup resume to main portfolio
- Test your portfolio on different devices
- Update projects and skills regularly
- Ensure all external links are working

## 🔧 Troubleshooting

### Dev server won't start
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Tailwind CSS not working
Ensure `tailwind.config.js` and `postcss.config.js` exist in the root directory.

### Build fails
1. Check for TypeScript errors: `npm run tsc`
2. Clear dist folder: `rm -rf dist`
3. Rebuild: `npm run build`

## 📚 Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Lucide React Icons](https://lucide.dev)

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Support

For issues and questions, please refer to the documentation or create an issue in the repository.

---

**Built with ❤️ using React, Vite, and Tailwind CSS**

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

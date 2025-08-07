# 🚀 Prasannaram R R - Portfolio Website

A modern, responsive portfolio website showcasing my skills as a Full-Stack Developer with backend expertise. Built with React and featuring a complete dark/light theme system and functional contact form.

## ✨ Features

### 🎨 Design & Theme
- **Dark/Light Theme Toggle** - Perfect theme consistency across all sections
- **Responsive Design** - Optimized for all devices (mobile, tablet, desktop)
- **Smooth Animations** - Powered by Framer Motion for engaging user experience
- **Modern UI** - Clean, professional design with excellent typography

### 🔧 Functionality  
- **Working Contact Form** - Real email delivery using EmailJS integration
- **Interactive Skills Section** - Hover effects and skill categorization
- **Project Showcase** - Detailed project displays with live demos
- **Resume Download** - Direct PDF download functionality
- **Scroll Animations** - Elements animate on scroll for better engagement

### 📱 Sections
- **Hero** - Professional introduction with call-to-action
- **About** - Detailed background and expertise overview  
- **Skills** - Technical skills with visual indicators
- **Projects** - Portfolio showcase with descriptions and links
- **Contact** - Functional contact form with social links

## 🛠️ Tech Stack

### Frontend
- **React 18.2.0** - Modern React with hooks and context
- **Tailwind CSS 3.3.3** - Utility-first CSS framework
- **Framer Motion 10.16.4** - Animation library for React
- **React Icons** - Comprehensive icon library

### Contact System
- **EmailJS** - Serverless email delivery service
- **Environment Variables** - Secure API key management

### Deployment
- **GitHub Pages** - Automated deployment pipeline
- **GitHub Actions** - CI/CD for seamless updates

## 🌐 Live Demo

**🔗 [View Portfolio](https://prasannaram2k4.github.io/portfolio)**

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/Prasannaram2k4/portfolio.git
cd portfolio
```

2. **Install dependencies:**
```bash
npm install
```

3. **Start development server:**
```bash
npm start
```

4. **Build for production:**
```bash
npm run build
```

## 📧 Contact Form Setup

The portfolio includes a fully functional contact form. To set up email delivery:

1. **Create EmailJS Account** at [emailjs.com](https://emailjs.com)
2. **Set up Gmail service** and create email template
3. **Create `.env` file** in root directory:
```env
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

> **Note:** Never commit the `.env` file to version control

## 🚀 Deployment

### GitHub Pages (Current Setup)
```bash
npm run deploy
```

### Alternative Deployment Options

#### Vercel
1. Connect GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push

#### Netlify  
1. Connect GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `build`
4. Add environment variables

## 🎨 Customization

### Personal Information
- **Hero Section**: `src/components/Hero.jsx`
- **About Section**: `src/components/Resume.jsx` 
- **Contact Info**: `src/components/Contact.jsx`

### Content Updates
- **Skills**: `src/components/Skills.jsx`
- **Projects**: `src/components/Projects.jsx`
- **Resume PDF**: `public/resume.pdf`

### Theme Customization
- **Colors**: `src/index.css` and Tailwind config
- **Fonts**: Update in `src/index.css`
- **Animations**: Modify Framer Motion settings in components

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 🔧 Key Features Implementation

- **Theme Context**: Persistent theme switching with localStorage
- **EmailJS Integration**: Serverless contact form with error handling
- **Intersection Observer**: Scroll-triggered animations
- **CSS Grid/Flexbox**: Modern responsive layouts
- **Environment Variables**: Secure API configuration

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Connect With Me

- **Email**: prasannaram978@gmail.com
- **LinkedIn**: [Prasannaram R R](https://www.linkedin.com/in/prasannaram-r-r-327b09249/)
- **GitHub**: [Prasannaram2k4](https://github.com/Prasannaram2k4)

---

**Built with ❤️ by Prasannaram R R**
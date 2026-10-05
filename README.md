# EduSpark Technologies – Promotional Company Website

**Module**: CET257 – Enterprise Project (University of Sunderland)  
**Team**: Team 9  
**Company Name**: EduSpark Technologies  
**Project Title**: Interactive Health and Safety Training System  
**Academic Tutor**: Dr. Becky Allen  

---

## 📌 Project Purpose

This repository contains the **promotional and corporate company website** for **EduSpark Technologies (Team 9)**, a student software development enterprise established for the CET257 Enterprise Project. 

The website professionally presents EduSpark Technologies to prospective enterprise clients, external assessors, and university evaluators by showcasing:
- **Corporate Identity**: Modern dark/crescent visual branding inspired by the official crescent logo.
- **Team Structure**: Real student members, specialized engineering roles, and governance.
- **Service Offerings**: Core software capabilities (Web Apps, Prototyping, PACT Analysis, Digital Training).
- **Client Project Overview**: The *Interactive Health & Safety Training System* developed for an Automotive Logistics and Warehousing client.
- **Project Lifecycle & Progress**: Transparent development roadmap covering requirements, analysis, prototyping, and client presentations.
- **External Prototype Integration**: Direct configurable links to the independently hosted client system prototype.

---

## 💻 Tech Stack

- **Framework**: React 18
- **Tooling**: Vite 6
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Typography**: Inter (Google Fonts)

---

## 🚀 Installation & Running

### Prerequisites
- Node.js (v18 or higher recommended)
- npm

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Client Prototype URL (Optional)
The website connects to the separately deployed client prototype via an environment variable. A default `.env` file is provided:
```env
VITE_SAFELEARN_URL=http://localhost:5174
```
For production deployment, update `VITE_SAFELEARN_URL` to point to the live hosting domain of your client training system.

### 3. Run Development Server
```bash
npm run dev
```
The website will start at: `http://localhost:5173`

### 4. Build for Production
```bash
npm run build
```
Production assets are compiled into the `/dist` directory.

---

## 📑 Website Sections

1. **Header**: Brand identity with official EduSpark crescent logo, smooth page jump links, and direct *"View SafeLearn Prototype"* action.
2. **Hero**: Headline *"Building Interactive Digital Solutions for Safer Workplaces"*, prominent logo display, and mission highlights.
3. **About Us**: Authentic student enterprise background, official mission statement, vision statement, and 6 core values (Innovation, Teamwork, User-Centred Design, Professionalism, Quality, Continuous Improvement).
4. **Our Team**: Four authentic team member profiles (Aniyol Chaudhary, Ananta Kapri, Karan Gurung, Sanis Sapkota) with roles and specific technical responsibilities.
5. **Services**: 8 corporate software engineering capabilities with deliverables.
6. **Current Project**: Automotive logistics client overview, major training system areas, and launch link.
7. **Our Work / Project Progress**: 11-stage project timeline with authentic milestone statuses (Completed, In Progress, Current Stage, Planned).
8. **Contact Us**: Interactive contact form with input validation and official University of Sunderland academic context.
9. **Footer**: Navigation, brand summary, and back-to-top shortcut.

---

## 🌐 Independent Deployment Guide

This project can be deployed independently to modern cloud platforms:

### Deploying to Netlify
1. Connect this folder (`CET257-Team9/eduspark-company-website`) to Netlify.
2. Set Build command: `npm run build`
3. Set Publish directory: `dist`
4. Set Environment Variable: `VITE_SAFELEARN_URL` = `<your-deployed-safelearn-url>`

### Deploying to Vercel
1. Run `vercel` inside `eduspark-company-website/`
2. Framework Preset: `Vite`
3. Add Environment Variable: `VITE_SAFELEARN_URL`
"# eduspark_website" 
"# eduspark_website" 

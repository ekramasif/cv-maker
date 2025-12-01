<h1 align="center">CV Maker</h1>

A professional CV/Resume builder with a LaTeX-inspired design, built with Next.js, TypeScript, and Tailwind CSS.

## Features

### LaTeX-Style Professional Design
- **Academic Format**: Inspired by IIT/IIIT resume templates with a clean, minimalist layout
- **Serif Typography**: Uses Georgia/Times New Roman for an authentic LaTeX document appearance
- **Three-Part Header**: Institute logo, name/details, and contact information with icons
- **Section Separators**: Horizontal lines dividing major sections (Education, Experience, etc.)
- **Smart Date Alignment**: Dates and locations automatically aligned to the right
- **Print-Optimized**: Perfect formatting for PDF export and printing

### Comprehensive Sections
- **Personal Information**: Name, roll number, program, institute, contact details, and links (LinkedIn, GitHub, Website)
- **Logo Upload**: Add your institute or company logo to the header
- **Education**: Academic background with CGPA, dates, and locations
- **Work Experience**: Professional history with detailed descriptions
- **Projects**: Showcase portfolio projects with technologies and links
- **Technical Skills**: Organized by category (Languages, Frameworks, Tools, etc.)
- **Professional Summary**: Optional summary section

### Powerful Features
- **Live Preview**: See your CV update in real-time as you edit
- **Print/PDF Export**: Professional PDF output using browser's print function
- **Save/Load**: Export and import your CV data as JSON for later editing
- **Responsive Interface**: Works seamlessly on desktop and mobile devices

## Getting Started

### Prerequisites

- Node.js 18+ installed on your machine
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd cv-maker
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Usage

### Creating Your CV

1. **Upload Logo** (Optional): In the Personal Information tab, upload your institute or company logo
2. **Fill in Personal Details**: Enter your name, roll number, program, institute, and contact information
3. **Add Education**: Include your academic background with institutions, degrees, CGPA, and dates
4. **Add Work Experience**: Document your professional history with company names, positions, and achievements
5. **Add Projects**: Showcase your projects with descriptions and technologies used
6. **Add Skills**: Organize your skills by category (Languages, Frameworks, Tools, etc.)
7. **Write Summary** (Optional): Add a professional summary if desired

### Managing Your CV

- **Live Preview**: The right panel shows real-time updates as you edit
- **Save JSON**: Download your CV data to continue editing later
- **Load JSON**: Import a previously saved CV to make updates
- **Print/PDF**: Use "Print / Export PDF" button, then use your browser's print dialog to save as PDF

### Tips for Best Results

- Use bullet points (•) in experience descriptions for better formatting
- Keep descriptions concise and achievement-focused
- Use action verbs (Developed, Implemented, Optimized, etc.)
- Organize skills into logical categories
- Include quantifiable achievements when possible

## Building for Production

```bash
npm run build
npm start
```

## Design Philosophy

This CV maker is inspired by the professional LaTeX resume templates commonly used in top-tier institutions (IITs/IIITs). The design prioritizes:

- **Content Density**: Maximizes information while maintaining readability
- **Professional Appearance**: Serif fonts and structured layout convey professionalism
- **Print Optimization**: Designed primarily for PDF export and professional distribution
- **Academic Standard**: Follows conventions used in academic and technical resumes

## Technology Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI**: React 19
- **Typography**: Georgia/Times New Roman (LaTeX-style serif fonts)

## Project Structure

```
cv-maker/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── CVPreview.tsx
│   ├── EducationForm.tsx
│   ├── ExperienceForm.tsx
│   ├── PersonalInfoForm.tsx
│   ├── ProjectsForm.tsx
│   └── SkillsForm.tsx
├── types/
│   └── cv.ts
└── package.json
```

## License

MIT

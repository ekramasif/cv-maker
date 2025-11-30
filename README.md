# CV Maker

A modern, responsive CV/Resume builder application built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Personal Information**: Add your contact details, professional summary, and links
- **Work Experience**: Track your professional history with detailed descriptions
- **Education**: Document your academic background
- **Skills**: Organize your skills by category (Technical, Languages, Soft Skills, etc.)
- **Projects**: Showcase your portfolio projects
- **Live Preview**: See your CV update in real-time as you edit
- **Print/PDF Export**: Print directly or save as PDF using browser's print function
- **Save/Load**: Export and import your CV data as JSON for later editing

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

1. **Fill in your information**: Use the tabs on the left to navigate between different sections
2. **Add entries**: Click "Add Experience", "Add Education", etc. to create new entries
3. **Preview**: Watch the right panel update in real-time as you make changes
4. **Save your work**: Click "Save JSON" to download your CV data
5. **Load previous work**: Click "Load JSON" to import a previously saved CV
6. **Export**: Click "Print / Export PDF" to print or save as PDF

## Building for Production

```bash
npm run build
npm start
```

## Technology Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI**: React 19

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

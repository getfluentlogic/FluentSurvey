# AI Agent Build vs Buy Assessment Tool

A mobile-friendly web application that helps organizations make informed decisions about whether to build AI agents in-house or purchase existing solutions. Features an interactive 26-question assessment framework with auto-advancing questions, progress tracking, and personalized recommendations.

## 🚀 Features

- **Interactive Assessment**: 26 comprehensive questions across 4 key decision areas
- **Auto-Advancing Interface**: Smooth user experience without manual navigation
- **Mobile-Optimized**: Responsive design that works perfectly on all devices
- **Progress Tracking**: Visual progress indicators throughout the assessment
- **Quick Decision Path**: Fast-track option for immediate recommendations
- **FluentLogic Integration**: Professional branding with newsletter subscription
- **Real-time Results**: Instant recommendations (Build/Buy/Hybrid) with detailed reasoning

## 🏗️ Tech Stack

### Frontend
- **React 18** with TypeScript
- **Tailwind CSS** with shadcn/ui components
- **Wouter** for lightweight routing
- **TanStack Query** for server state management
- **Framer Motion** for smooth animations
- **Vite** for fast development and builds

### Backend
- **Node.js** with Express.js
- **TypeScript** with ES modules
- **Drizzle ORM** with PostgreSQL support
- **Zod** for data validation
- **Session-based** storage

## 📦 Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/ai-agent-assessment-tool.git
   cd ai-agent-assessment-tool
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   ```bash
   # Optional: Add DATABASE_URL for PostgreSQL
   # Defaults to in-memory storage for development
   DATABASE_URL=your_postgresql_connection_string
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```

5. **Open your browser:**
   Navigate to `http://localhost:5000`

## 🎯 Usage

### Assessment Flow
1. **Welcome Screen**: Choose between Quick Decision Path or Full Assessment
2. **Question Sequence**: 26 questions across 4 sections with auto-advance
3. **Progress Tracking**: Visual indicators show completion status
4. **Results Page**: Personalized recommendations with FluentLogic services

### Quick Decision Path
For users who need immediate guidance, the Quick Decision Path provides rapid recommendations based on 3 key questions.

### Full Assessment
Complete 26-question evaluation covering:
- Technical capabilities and requirements
- Resource availability and constraints
- Timeline and budget considerations
- Strategic business alignment

## 🏢 FluentLogic Integration

This tool is branded for FluentLogic and includes:
- Professional logo linking to newsletter subscription
- Contact information for Nidhi Sharma on LinkedIn
- Service promotion for established companies
- Newsletter subscription with community access

## 📱 Mobile Optimization

- Progressive logo sizing for different screen sizes
- Touch-friendly interface with large tap targets
- Responsive typography that scales appropriately
- Optimized layouts for portrait and landscape modes

## 🛠️ Development

### Project Structure
```
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Application pages
│   │   ├── hooks/          # Custom React hooks
│   │   ├── data/           # Assessment questions and data
│   │   └── types/          # TypeScript type definitions
├── server/                 # Express backend
│   ├── index.ts           # Server entry point
│   ├── routes.ts          # API endpoints
│   └── storage.ts         # Data persistence layer
├── shared/                 # Shared types and schemas
└── README.md
```

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

### Database
The application supports both in-memory storage (development) and PostgreSQL (production) through Drizzle ORM. Schema definitions are centralized in `shared/schema.ts`.

## 🚀 Deployment

### Replit (Recommended)
The application is optimized for Replit deployment:
1. Fork/import the repository
2. Install dependencies automatically
3. Run with `npm run dev`
4. Use Replit's deployment feature for production

### Other Platforms
Compatible with:
- Vercel
- Netlify
- Railway
- Any Node.js hosting service

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes and commit: `git commit -m 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Contact

For questions about the assessment framework or FluentLogic services:
- **Nidhi Sharma**: Connect on LinkedIn
- **Newsletter**: [FluentLogic Substack](https://getfluentlogic.substack.com/)

## 🙏 Acknowledgments

Built with modern web technologies and designed for optimal user experience across all devices. Special thanks to the FluentLogic team for the comprehensive assessment framework.
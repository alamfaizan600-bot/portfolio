import React from 'react';
import Link from 'next/link';

const projectDetails = {
  'uk-power-networks': {
    title: 'AI-Driven Data Analysis - UKPN',
    subtitle: 'Data Analysis for Electrical Infrastructure',
    icon: '⚡',
    color: 'from-blue-500 to-blue-600',
    overview: 'Processed and analyzed more than 50,000 electrical connection data cards using OCR and Azure OpenAI GPT-4o to extract critical details like addresses, service cable sizes, and cutout sizes. Developed a proof-of-concept chatbot for querying ADI-extracted data.',
    challenge: 'UK Power Networks had massive volumes of electrical connection data in card format that needed to be digitized and made queryable. Manual processing was infeasible, and data needed to be verified for accuracy against government databases.',
    solution: 'Implemented a multi-stage pipeline: (1) OCR for text extraction from connection cards, (2) Azure OpenAI GPT-4o for intelligent data parsing and entity extraction, (3) YOLO model training on 95% accuracy for sketch analysis of electrical connections, (4) Web scraping from UK government websites for address verification and coordinates (ADI), (5) LlamaIndex + Azure OpenAI + Streamlit chatbot for interactive data queries.',
    technologies: ['Python', 'Azure OpenAI', 'YOLO', 'LlamaIndex', 'Streamlit', 'OCR', 'Web Scraping'],
    results: [
      'Processed 50,000+ electrical connection cards',
      '95% accuracy in sketch analysis for connection information',
      'Deployed interactive chatbot for data querying',
      'Verified data accuracy using UK government databases'
    ],
    link: '#'
  },
  'poi-verification': {
    title: 'AI-Powered POI Verification Automation - Apple Maps',
    subtitle: 'Intelligent Points of Interest Validation at Scale',
    icon: '📍',
    color: 'from-cyan-500 to-blue-500',
    overview: 'Transformed the manual and time-consuming process of Points of Interest (POI) verification into a scalable, automated workflow. Developed a POC that will be used to process more than 80,000 records per quarterly using LLMs, web scraping, and NLP-based validation.',
    challenge: 'Traditional POI verification required analysts to manually search multiple online sources, identify authoritative websites, and cross-check attributes like name, address, and existence. This approach was inefficient, inconsistent, and impossible to scale for large datasets.',
    solution: 'Developed an AI-driven automation framework integrating: (1) Search automation for identifying reliable sources, (2) Web scraping to extract POI attributes (name, address, coordinates, category), (3) Natural Language Processing for intelligent analysis, (4) Large Language Models for handling complex reasoning and identifying official sources, (5) Rule-based validation engine to ensure consistency with business rules, (6) Batch processing pipeline for large-scale verification with minimal human intervention.',
    technologies: ['Python', 'LangChain', 'Azure OpenAI', 'Web Scraping'],
    results: [
      'Developed POC for processing 80k+ records per quarter',
      'Significantly reduced manual verification effort',
      'Improved accuracy and consistency in POI data',
      'Scalable framework for enterprise-level POI datasets'
    ],
    link: '#'
  },
  'ppg-staff-assignment': {
    title: 'AI-Based Staff Assignment Optimization - PPG',
    subtitle: 'Knowledge Graph & ML-Driven Workforce Optimization',
    icon: '✈️',
    color: 'from-purple-500 to-pink-500',
    overview: 'Designed and implemented a Neo4j-based Knowledge Graph system to optimize staff-to-booking assignments for airport passenger services. Developed ML models that outperformed rule-based logic by 75% in accuracy and adaptability.',
    challenge: 'Airport passenger services required matching available staff (with specific language skills, shift availability, job roles) to booking requirements (meet & assist, wheelchair services, etc.) across multiple locations. Rule-based assignment logic was inflexible and inefficient.',
    solution: 'Built a comprehensive solution: (1) Data processing pipeline collecting and cleaning staff attributes (skills, shifts, locations) and booking requirements, (2) Neo4j Knowledge Graph modeling complex relationships between staff, bookings, services, and availability, (3) ML model using skill matching, time constraints, and location filters for optimal assignments, (4) Real-time recommendation engine for dynamic workforce optimization.',
    technologies: ['Python', 'Neo4j', 'Scikit-learn'],
    results: [
      '75% improvement over rule-based logic in accuracy',
      'Real-time staff recommendations for bookings',
      'Optimized spare utilization across multiple airports',
      'Improved customer satisfaction through better staff matching'
    ],
    link: '#'
  },
  'here-maps-traffic': {
    title: 'Traffic Sign Detection - HERE Maps',
    subtitle: 'YOLO-Based Real-Time Traffic Sign Classification',
    icon: '🚦',
    color: 'from-yellow-500 to-red-500',
    overview: 'Trained a YOLO model on 30,000+ images to detect and classify traffic signs including stop signs, traffic lights, and speed limits. Achieved high accuracy for real-time traffic applications.',
    challenge: 'HERE Maps needed reliable real-time detection of traffic signs to support navigation and traffic management features. Traffic signs vary significantly by region, lighting conditions, and weather, requiring a robust detection model.',
    solution: 'Implemented YOLOv8 architecture with comprehensive dataset of 30,000+ annotated traffic sign images. Trained the model to classify four key traffic sign categories: stop signs, red lights, green lights, and speed limits. Optimized for real-time inference performance.',
    technologies: ['Python', 'YOLOv8', 'OpenCV', 'PyTorch'],
    results: [
      'High accuracy detection across 4 traffic sign categories',
      'Real-time inference at 30+ FPS',
      'Robust performance in varied weather conditions',
      'Deployed in production for HERE Maps applications'
    ],
    link: '#'
  },
  'verizon-spatial': {
    title: 'AI-Driven Spatial Optimization - Verizon',
    subtitle: 'LLM & GIS-Based Space Utilization Analysis',
    icon: '🗺️',
    color: 'from-green-500 to-emerald-500',
    overview: 'Developed a space optimization application combining LLM intelligence with GIS analysis. Processed geospatial data from DWG floorplans to identify and recommend optimized space utilization scenarios.',
    challenge: 'Verizon needed to optimize real estate utilization across multiple facilities. Manual analysis of floorplans and space requirements was time-consuming and suboptimal.',
    solution: 'Created an integrated application: (1) QGIS & GeoPandas for processing and analyzing DWG floorplan data, (2) LLM-driven reasoning engine to apply business rules and optimization heuristics, (3) Automated recommendation system for space utilization scenarios, (4) Geospatial visualization of optimization results.',
    technologies: ['Python', 'LangChain', 'Azure OpenAI', 'QGIS', 'GeoPandas'],
    results: [
      'Automated floorplan analysis and space recommendations',
      'Identified multiple optimization scenarios per facility',
      'Reduced space utilization analysis time by 80%',
      'Generated data-driven recommendations for real estate decisions'
    ],
    link: '#'
  }
};

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = projectDetails[id as keyof typeof projectDetails];

  if (!project) {
    return (
      <div className="bg-slate-900 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
          <Link href="/" className="text-blue-400 hover:text-blue-300">
            ← Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 min-h-screen text-white">
      {/* Navigation */}
      <nav className="border-b border-slate-700 bg-slate-800/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent hover:opacity-80">
            FA
          </Link>
          <Link href="/" className="text-slate-300 hover:text-blue-400 transition">
            ← Back to Home
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="px-6 py-20 border-b border-slate-700">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-start gap-6 mb-8">
            <div className="text-7xl">{project.icon}</div>
            <div>
              <h1 className="text-5xl font-bold mb-4">{project.title}</h1>
              <p className="text-2xl text-slate-300">{project.subtitle}</p>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="px-6 py-16">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Overview */}
          <section>
            <h2 className="text-3xl font-bold mb-6">Overview</h2>
            <p className="text-xl text-slate-300 leading-relaxed">{project.overview}</p>
          </section>

          {/* Challenge */}
          <section>
            <h2 className="text-3xl font-bold mb-6">The Challenge</h2>
            <div className="bg-slate-700/40 border border-slate-600 rounded-xl p-8">
              <p className="text-lg text-slate-300 leading-relaxed">{project.challenge}</p>
            </div>
          </section>

          {/* Solution */}
          <section>
            <h2 className="text-3xl font-bold mb-6">Solution</h2>
            <div className="bg-slate-700/40 border border-slate-600 rounded-xl p-8">
              {project.solution.includes('(1)') ? (
                <ul className="space-y-4">
                  {project.solution.split(/\(\d+\)\s+/).filter(Boolean).map((item, idx) => (
                    <li key={idx} className="flex gap-4">
                      <span className="text-blue-400 font-semibold flex-shrink-0">•</span>
                      <span className="text-lg text-slate-300 leading-relaxed">{item.trim()}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-lg text-slate-300 leading-relaxed">{project.solution}</p>
              )}
            </div>
          </section>

          {/* Technologies */}
          <section>
            <h2 className="text-3xl font-bold mb-6">Technologies Used</h2>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech) => (
                <span key={tech} className="px-4 py-2 bg-blue-600/30 border border-blue-500 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {/* Results */}
          <section>
            <h2 className="text-3xl font-bold mb-6">Key Results</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.results.map((result, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-sm font-bold">
                    ✓
                  </div>
                  <p className="text-lg text-slate-300">{result}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="py-12 text-center border-t border-slate-700">
            <h3 className="text-2xl font-bold mb-6">Explore this project</h3>
            <div className="flex gap-4 justify-center">
              <Link href={`/projects/${id}/gallery`} className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition">
                View Gallery
              </Link>
              <Link href="/" className="px-8 py-3 border border-slate-400 rounded-lg font-semibold hover:bg-slate-700 transition">
                Back to Projects
              </Link>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-700 bg-slate-900/50 px-6 py-12">
        <div className="max-w-7xl mx-auto text-center text-slate-500">
          <p>© 2026 Faizan Alam. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

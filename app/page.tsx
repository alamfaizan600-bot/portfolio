import React from 'react';
import Link from 'next/link';

export default function Home() {
  const projects = [
    {
      id: 'uk-power-networks',
      title: 'AI-Driven Data Analysis - UKPN',
      description: 'AI-driven data analysis using OCR, YOLO, and Azure OpenAI to extract electrical connection details.',
      icon: '⚡',
      color: 'from-blue-500 to-blue-600',
    },
    {
      id: 'poi-verification',
      title: 'AI-Powered POI Verification Automation - Apple Maps',
      description: 'Automated Points of Interest verification using LLMs, web scraping, and NLP-based validation.',
      icon: '📍',
      color: 'from-cyan-500 to-blue-500',
    },
    {
      id: 'ppg-staff-assignment',
      title: 'AI-Based Staff Assignment Optimization - PPG',
      description: 'Neo4j Knowledge Graph with ML modeling for optimal job-staff assignments and real-time recommendations.',
      icon: '✈️',
      color: 'from-purple-500 to-pink-500',
    },
    {
      id: 'here-maps-traffic',
      title: 'Traffic Sign Detection - HERE Maps',
      description: 'YOLO model trained on 30,000+ images to detect and classify traffic signs in real-time.',
      icon: '🚦',
      color: 'from-yellow-500 to-red-500',
    },
    {
      id: 'verizon-spatial',
      title: 'AI-Driven Spatial Optimization - Verizon',
      description: 'LLM & GIS-based application for geospatial analysis and optimized space utilization recommendations.',
      icon: '🗺️',
      color: 'from-green-500 to-emerald-500',
    },
  ];

  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 min-h-screen text-white">
      {/* Navigation */}
      <nav className="border-b border-slate-700 bg-slate-800/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            FA
          </div>
          <ul className="flex gap-8 text-sm">
            <li><a href="#home" className="hover:text-blue-400 transition">Home</a></li>
            <li><a href="#about" className="hover:text-blue-400 transition">About</a></li>
            <li><a href="#projects" className="hover:text-blue-400 transition">Projects</a></li>
            <li><a href="#contact" className="hover:text-blue-400 transition">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <header id="home" className="relative overflow-hidden px-6 py-32">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Faizan Alam
            </h1>
            <p className="text-2xl md:text-3xl text-slate-300 mb-4">
              Generative AI Engineer @ TCS
            </p>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Expert in Large Language Models, RAG pipelines, Agentic AI, and NLP-driven solutions. Building scalable, domain-specific AI applications with expertise in prompt engineering and Knowledge Graphs.
            </p>
          </div>
          <div className="flex gap-4 justify-center mt-8">
            <a href="#projects" className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition">
              View Projects
            </a>
            <a href="#contact" className="px-8 py-3 border border-slate-400 rounded-lg font-semibold hover:bg-slate-700 transition">
              Get In Touch
            </a>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="px-6 py-20 border-b border-slate-700">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">About Me</h2>
          <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
            <p>
              I'm a <span className="text-blue-400 font-semibold">Generative AI Engineer</span> with <span className="text-blue-400 font-semibold">4.5+ years</span> of experience at <span className="text-blue-400 font-semibold">Tata Consultancy Services (TCS)</span>, where I've been designing and deploying cutting-edge AI solutions for Fortune 500 clients.
            </p>
            <p>
              My expertise spans developing <span className="text-blue-400 font-semibold">AI-driven automation pipelines</span> that significantly improve productivity and accuracy. I specialize in leveraging <span className="text-blue-400 font-semibold">Large Language Models (LLMs), RAG frameworks, and agentic AI</span> to create intelligent automation and decision-making systems that drive business value.
            </p>
            <div className="bg-slate-700/40 border border-slate-600 rounded-lg p-6 my-6">
              <h3 className="text-blue-400 font-semibold mb-4">Key Accomplishments:</h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex gap-3">
                  <span className="text-blue-400">▸</span>
                  <span>Worked on developing <span className="text-blue-300">AI-driven solutions using LLMs, RAG frameworks, and agentic AI</span> for automation and decision-making</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-400">▸</span>
                  <span>Built <span className="text-blue-300">AI-powered chatbots</span> for real-time querying and data interaction</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-400">▸</span>
                  <span>Developed <span className="text-blue-300">OCR-based automation systems</span> with vector search for intelligent document analysis and data extraction</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-400">▸</span>
                  <span>Trained <span className="text-blue-300">YOLO-based traffic sign detection models</span> for autonomous driving applications</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-400">▸</span>
                  <span>Contributed to <span className="text-blue-300">model fine-tuning, backend integrations, and workflow optimization</span> to enhance accuracy and operational efficiency</span>
                </li>
              </ul>
            </div>
            <p>
              I'm passionate about translating complex AI concepts into practical, scalable solutions that solve real-world business problems. My work bridges the gap between cutting-edge AI research and production-ready applications.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="px-6 py-20 bg-slate-800/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Link key={project.id} href={`/projects/${project.id}`}>
                <div className="group relative bg-slate-700/40 backdrop-blur rounded-xl overflow-hidden border border-slate-600 hover:border-blue-400 transition duration-300 cursor-pointer h-full">
                  {/* Gradient background on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition duration-300`}></div>
                  
                  <div className="p-8 relative z-10 flex flex-col h-full justify-between">
                    <div className="text-5xl mb-4">{project.icon}</div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-300 transition">
                        {project.title}
                      </h3>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                    <div className="mt-6 flex items-center text-blue-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition">
                      Learn more →
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Education</h2>
          <div className="space-y-8">
            <div className="flex gap-6 items-start">
              <div className="text-4xl">🎓</div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold">Master of Computer Applications (MCA)</h3>
                <p className="text-blue-400">Chandigarh University</p>
                <p className="text-slate-400">08/2022 – 09/2024</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="text-4xl">🎓</div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold">B.Sc. (Hons) Computer Science</h3>
                <p className="text-blue-400">Delhi University</p>
                <p className="text-slate-400">07/2017 – 08/2020</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="border-t border-slate-700 bg-slate-900/50 px-6 py-16">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
          <p className="text-slate-400 mb-8">Interested in collaborating or learning more about my work?</p>
          <div className="flex gap-4 justify-center mb-8 flex-wrap">
            <a href="mailto:alamfaizan600@gmail.com" className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition">
              Email
            </a>
            <a href="tel:9667550151" className="px-6 py-2 border border-slate-600 hover:border-blue-400 rounded-lg transition">
              Phone
            </a>
            <a href="https://www.linkedin.com/in/faizan-alam-ab374a166/" target="_blank" rel="noopener noreferrer" className="px-6 py-2 border border-slate-600 hover:border-blue-400 rounded-lg transition">
              LinkedIn
            </a>
          </div>
          <p className="text-slate-500 text-sm">© 2026 Faizan Alam. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

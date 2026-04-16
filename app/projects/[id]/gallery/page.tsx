import React from 'react';
import Link from 'next/link';
import { readdirSync } from 'fs';
import { join } from 'path';
import Image from 'next/image';

const projectNames = {
  'uk-power-networks': 'AI-Driven Data Analysis - UKPN',
  'poi-verification': 'AI-Powered POI Verification Automation - Apple Maps',
  'ppg-staff-assignment': 'AI-Based Staff Assignment Optimization - PPG',
  'here-maps-traffic': 'Traffic Sign Detection - HERE Maps',
  'verizon-spatial': 'AI-Driven Spatial Optimization - Verizon',
};

async function getProjectImages(projectId: string) {
  try {
    const galleryPath = join(process.cwd(), 'public', 'project-galleries', projectId);
    const files = readdirSync(galleryPath).filter((file) => 
      /\.(jpg|jpeg|png|gif|webp)$/i.test(file)
    );
    return files.map((file) => ({
      name: file,
      path: `/project-galleries/${projectId}/${file}`,
    }));
  } catch (error) {
    return [];
  }
}

export default async function GalleryPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const projectTitle = projectNames[id as keyof typeof projectNames] || 'Project Gallery';
  const images = await getProjectImages(id);

  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 min-h-screen text-white">
      {/* Navigation */}
      <nav className="border-b border-slate-700 bg-slate-800/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent hover:opacity-80">
            FA
          </Link>
          <Link href={`/projects/${id}`} className="text-slate-300 hover:text-blue-400 transition">
            ← Back to Project
          </Link>
        </div>
      </nav>

      {/* Gallery Header */}
      <header className="px-6 py-16 border-b border-slate-700">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">{projectTitle}</h1>
          <p className="text-xl text-slate-400">Project Gallery</p>
        </div>
      </header>

      {/* Gallery Content */}
      <main className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          {images.length === 0 ? (
            <div className="flex items-center justify-center py-32">
              <div className="text-center">
                <div className="text-6xl mb-4">📸</div>
                <h2 className="text-3xl font-bold mb-4 text-slate-300">Gallery Coming Soon</h2>
                <p className="text-slate-400 mb-8">
                  Images will appear here as they are added to the project gallery folder.
                </p>
                <Link href={`/projects/${id}`} className="inline-block px-8 py-3 border border-slate-400 rounded-lg font-semibold hover:bg-slate-700 transition">
                  Back to Project Details
                </Link>
              </div>
            </div>
          ) : (
            <div>
              <h2 className="text-3xl font-bold mb-12">Project Images</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {images.map((image) => (
                  <div key={image.name} className="group relative overflow-hidden rounded-xl border border-slate-600 hover:border-blue-400 transition h-64">
                    <Image
                      src={image.path}
                      alt={image.name}
                      fill
                      className="object-cover group-hover:scale-105 transition duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                      <p className="text-white text-center px-4">{image.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
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

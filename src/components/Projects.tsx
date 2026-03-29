import { ArrowUpRight, Code, ChevronLeft, ChevronRight, X, Sparkles, Package, Camera } from 'lucide-react';
import { useState, useEffect } from 'react';

const projects = [
  {
    title: 'AI Speech Guidance Assistant',
    description: 'An AI-powered speech guidance system providing real-time assistance and feedback. Built with cutting-edge speech recognition and processing technology.',
    technologies: ['Python', 'AI/ML', 'Speech Recognition'],
    link: 'https://github.com/Mattdev-cmd/AI-Speech-Guidance-Assistant',
    github: 'https://github.com/Mattdev-cmd/AI-Speech-Guidance-Assistant',
    image: 'https://raw.githubusercontent.com/Mattdev-cmd/AI-Speech-Guidance-Assistant/refs/heads/main/1.jfif',
    gallery: [
      'https://raw.githubusercontent.com/Mattdev-cmd/AI-Speech-Guidance-Assistant/refs/heads/main/1.jfif',
      'https://raw.githubusercontent.com/Mattdev-cmd/AI-Speech-Guidance-Assistant/refs/heads/main/2.jfif',
      'https://raw.githubusercontent.com/Mattdev-cmd/AI-Speech-Guidance-Assistant/refs/heads/main/3.jfif',
      'https://raw.githubusercontent.com/Mattdev-cmd/AI-Speech-Guidance-Assistant/refs/heads/main/4.jfif',
      'https://raw.githubusercontent.com/Mattdev-cmd/AI-Speech-Guidance-Assistant/refs/heads/main/5.jfif',
      'https://raw.githubusercontent.com/Mattdev-cmd/AI-Speech-Guidance-Assistant/refs/heads/main/6.jfif'
    ],
    color: 'from-blue-600 to-cyan-500'
  },
  {
    title: 'Visitor Management System',
    description: 'A comprehensive visitor management application for tracking and managing visitor information with security features and efficient database management.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://github.com/Mattdev-cmd/visitor-management-system',
    github: 'https://github.com/Mattdev-cmd/visitor-management-system',
    image: 'https://raw.githubusercontent.com/Mattdev-cmd/visitor-management-system/refs/heads/main/65c9e550-d280-459e-9e1a-14e8864e8b2e.jfif',
    gallery: [
      'https://raw.githubusercontent.com/Mattdev-cmd/visitor-management-system/refs/heads/main/65c9e550-d280-459e-9e1a-14e8864e8b2e.jfif',
      'https://raw.githubusercontent.com/Mattdev-cmd/visitor-management-system/refs/heads/main/3a8c03a5-1249-4cb2-9aa3-8ee437e2f855.jfif',
      'https://raw.githubusercontent.com/Mattdev-cmd/visitor-management-system/refs/heads/main/ca7c7fe8-b613-4edf-a07f-47ad7c4de389.jfif',
      'https://raw.githubusercontent.com/Mattdev-cmd/visitor-management-system/refs/heads/main/832f263a-e656-47a0-b621-9b56499d9b8c.jfif',
      'https://raw.githubusercontent.com/Mattdev-cmd/visitor-management-system/refs/heads/main/94b5719c-96e6-470c-b57f-8f8a9323378c.jfif',
      'https://raw.githubusercontent.com/Mattdev-cmd/visitor-management-system/refs/heads/main/8a5c85ed-8bd1-46da-8792-19a7e125b626.jfif',
      'https://raw.githubusercontent.com/Mattdev-cmd/visitor-management-system/refs/heads/main/d230e395-15c5-4330-9776-42d5f67135dc.jfif',
      'https://raw.githubusercontent.com/Mattdev-cmd/visitor-management-system/refs/heads/main/3c23cf01-7b15-49bc-b98b-74961618ccdf.jfif'
    ],
    color: 'from-purple-600 to-pink-500'
  },
  {
    title: 'PetFeeder',
    description: 'An intelligent pet feeding automation system that automatically dispenses food at scheduled times with smart monitoring and tracking capabilities.',
    technologies: ['Python', 'IoT', 'Automation'],
    link: 'https://github.com/Mattdev-cmd/PetFeeder',
    github: 'https://github.com/Mattdev-cmd/PetFeeder',
    image: 'https://raw.githubusercontent.com/Mattdev-cmd/PetFeeder/refs/heads/main/ebb284ac-ea06-4bd3-91b8-3839ef590434.jfif',
    gallery: [
      'https://raw.githubusercontent.com/Mattdev-cmd/PetFeeder/refs/heads/main/ebb284ac-ea06-4bd3-91b8-3839ef590434.jfif',
      'https://raw.githubusercontent.com/Mattdev-cmd/PetFeeder/refs/heads/main/f226304c-6de1-40f6-a50e-b8755bdecb47.jfif'
    ],
    color: 'from-emerald-600 to-teal-500'
  },
  {
    title: 'Optical Mark Recognition System',
    description: 'A system for recognizing and processing optical marks from documents with computer vision. Perfect for automated form processing and survey analysis.',
    technologies: ['Dart', 'OpenCV', 'Image Processing'],
    link: 'https://github.com/Mattdev-cmd/Optical-Mark-Recognition-System',
    github: 'https://github.com/Mattdev-cmd/Optical-Mark-Recognition-System',
    image: 'https://raw.githubusercontent.com/Mattdev-cmd/Optical-Mark-Recognition-System/refs/heads/main/1aa205b5-e651-4048-901a-6ca82f2c5a42.jfif',
    gallery: [
      'https://raw.githubusercontent.com/Mattdev-cmd/Optical-Mark-Recognition-System/refs/heads/main/1aa205b5-e651-4048-901a-6ca82f2c5a42.jfif',
      'https://raw.githubusercontent.com/Mattdev-cmd/Optical-Mark-Recognition-System/refs/heads/main/0c8ff9e4-ca78-4cc0-abf5-90b3dce985f4.jfif',
      'https://raw.githubusercontent.com/Mattdev-cmd/Optical-Mark-Recognition-System/refs/heads/main/b447df9f-6626-4636-ac4e-2c1d9828a682.jfif',
      'https://raw.githubusercontent.com/Mattdev-cmd/Optical-Mark-Recognition-System/refs/heads/main/e6dc554d-8391-4583-b4c1-101cccf97acc.jfif',
      'https://raw.githubusercontent.com/Mattdev-cmd/Optical-Mark-Recognition-System/refs/heads/main/ee448c83-506c-497b-a387-bb17e7e762dc.jfif',
      'https://raw.githubusercontent.com/Mattdev-cmd/Optical-Mark-Recognition-System/refs/heads/main/9dda2397-b8d5-4eef-b74a-acc25a5b590c.jfif',
      'https://raw.githubusercontent.com/Mattdev-cmd/Optical-Mark-Recognition-System/refs/heads/main/2d7f2cdd-c378-4003-9ef7-ab26cc62f5cd.jfif'
    ],
    color: 'from-orange-600 to-red-500'
  },
  {
    title: 'HOA Tracker Application',
    description: 'A full-stack application for managing HOA monthly dues, payments, and generating financial reports with real-time database updates.',
    technologies: ['JavaScript', 'Node.js', 'Database'],
    link: 'https://github.com/Mattdev-cmd/HOA-Tracker-Application',
    github: 'https://github.com/Mattdev-cmd/HOA-Tracker-Application',
    image: 'https://raw.githubusercontent.com/Mattdev-cmd/HOA-Tracker-Application/refs/heads/main/11.jfif',
    gallery: [
      'https://raw.githubusercontent.com/Mattdev-cmd/HOA-Tracker-Application/refs/heads/main/11.jfif',
      'https://raw.githubusercontent.com/Mattdev-cmd/HOA-Tracker-Application/refs/heads/main/22.jfif',
      'https://raw.githubusercontent.com/Mattdev-cmd/HOA-Tracker-Application/refs/heads/main/33.jfif',
      'https://raw.githubusercontent.com/Mattdev-cmd/HOA-Tracker-Application/refs/heads/main/44.jfif',
      'https://raw.githubusercontent.com/Mattdev-cmd/HOA-Tracker-Application/refs/heads/main/55.jfif',
      'https://raw.githubusercontent.com/Mattdev-cmd/HOA-Tracker-Application/refs/heads/main/66.jfif',
      'https://raw.githubusercontent.com/Mattdev-cmd/HOA-Tracker-Application/refs/heads/main/77.jfif',
      'https://raw.githubusercontent.com/Mattdev-cmd/HOA-Tracker-Application/refs/heads/main/88.jfif',
      'https://raw.githubusercontent.com/Mattdev-cmd/HOA-Tracker-Application/refs/heads/main/99.jfif'
    ],
    color: 'from-indigo-600 to-blue-500'
  },
  {
    title: 'Intelligent Vehicle Control System',
    description: 'A smart residential vehicle control system with IoT integration and automated features for monitoring and control capabilities.',
    technologies: ['JavaScript', 'IoT', 'Node.js'],
    link: 'https://github.com/Mattdev-cmd/Intelligent-Residential-Vehicle-Control-System',
    github: 'https://github.com/Mattdev-cmd/Intelligent-Residential-Vehicle-Control-System',
    image: 'https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=500&h=500&fit=crop',
    color: 'from-rose-600 to-pink-500'
  },
];

interface GalleryModal {
  isOpen: boolean;
  projectIndex: number;
  currentImageIndex: number;
}

export default function Projects() {
  const [gallery, setGallery] = useState<GalleryModal>({
    isOpen: false,
    projectIndex: 0,
    currentImageIndex: 0
  });

  const openGallery = (projectIndex: number) => {
    setGallery({ isOpen: true, projectIndex, currentImageIndex: 0 });
  };

  const closeGallery = () => {
    setGallery({ ...gallery, isOpen: false });
  };

  const goToNextImage = () => {
    const project = projects[gallery.projectIndex];
    if (project.gallery) {
      setGallery({
        ...gallery,
        currentImageIndex: (gallery.currentImageIndex + 1) % project.gallery.length
      });
    }
  };

  const goToPrevImage = () => {
    const project = projects[gallery.projectIndex];
    if (project.gallery) {
      setGallery({
        ...gallery,
        currentImageIndex: (gallery.currentImageIndex - 1 + project.gallery.length) % project.gallery.length
      });
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!gallery.isOpen) return;

      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        goToPrevImage();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        goToNextImage();
      } else if (e.key === 'Escape') {
        e.preventDefault();
        closeGallery();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [gallery]);

  return (
    <>
      <section id="projects" className="py-20 px-4 sm:px-8 lg:px-16 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 dark:from-black dark:via-purple-950 dark:to-black">
        <div className="max-w-screen-2xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              <Sparkles className="inline w-8 h-8 mr-2" /> My GitHub Projects
            </h2>
            <p className="text-gray-300 text-lg">
              Showcasing my latest repositories and technical projects
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-gray-800/50 backdrop-blur-xl border border-gray-700 rounded-2xl overflow-hidden hover:border-purple-500/50 transition duration-300 hover:shadow-2xl hover:shadow-purple-500/20 flex flex-col"
              >
                <div className={`h-48 shrink-0 overflow-hidden bg-gradient-to-br ${project.color} relative`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500 opacity-80"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/0 transition"></div>
                  <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-white flex items-center gap-1">
                    <Package size={14} className="inline" /> GitHub
                  </div>
                </div>

                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 px-3 py-1 rounded-full text-xs font-medium border border-blue-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-4 border-t border-gray-700">
                    <button
                      onClick={() => project.gallery ? openGallery(index) : window.open(project.link, '_blank')}
                      className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-2 rounded-lg font-semibold transition transform hover:scale-105 text-sm"
                    >
                      View {project.gallery && <Camera size={16} className="inline" />} <ArrowUpRight size={16} />
                    </button>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg font-semibold transition text-sm"
                    >
                      <Code size={16} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Modal */}
      {gallery.isOpen && projects[gallery.projectIndex].gallery && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-[90vw] max-h-[90vh] flex items-center justify-center">
            {/* Close button */}
            <button
              onClick={closeGallery}
              className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition z-10"
            >
              <X size={24} />
            </button>

            {/* Gallery image */}
            <img
              src={projects[gallery.projectIndex].gallery![gallery.currentImageIndex]}
              alt={`${projects[gallery.projectIndex].title} - ${gallery.currentImageIndex + 1}`}
              className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl"
            />

            {/* Navigation buttons */}
            {projects[gallery.projectIndex].gallery!.length > 1 && (
              <>
                <button
                  onClick={goToPrevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={goToNextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition"
                >
                  <ChevronRight size={24} />
                </button>

                {/* Image counter */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-white text-sm font-semibold">
                  {gallery.currentImageIndex + 1} / {projects[gallery.projectIndex].gallery!.length}
                </div>

                {/* Keyboard hints */}
                <div className="absolute bottom-16 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md px-4 py-1 rounded-full text-white text-xs font-medium opacity-75">
                  ← → Arrow Keys • ESC to Close
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}

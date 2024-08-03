const skills = [
  { src: '/images/html_logo.png', alt: 'HTML' },
  { src: '/images/css_logo.png', alt: 'CSS' },
  { src: '/images/bootstrap_logo.png', alt: 'Bootstrap' },
  { src: '/images/tailwind_logo.png', alt: 'Tailwind' },
  { src: '/images/js_logo.png', alt: 'JavaScript' },
  { src: '/images/nodejs_logo.png', alt: 'Node.js' },
  { src: '/images/express_logo.png', alt: 'Express' },
  { src: '/images/react_logo.png', alt: 'React' },
  { src: '/images/nextjs_logo.png', alt: 'Next.js' },
  { src: '/images/vite_logo.png', alt: 'Vite' },
  { src: '/images/firebase_logo.png', alt: 'Firebase' },
  { src: '/images/mongodb_logo.png', alt: 'MongoDB' },
  { src: '/images/github_logo.png', alt: 'GitHub' }
];

const Skills = () => (
  <section id="skills" className="py-10 bg-gray-100" data-aos="fade-up"> {/* Cambié py-20 a py-10 */}
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-semibold text-center mb-6">Habilidades</h2>
      <div className="flex flex-wrap justify-center space-x-4">
        {skills.map((skill, index) => (
          <div key={index} className="h-24 w-24 bg-gray-200 rounded-full flex items-center justify-center">
            <img src={skill.src} alt={skill.alt} />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;

  
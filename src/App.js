function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-950 border-b border-gray-800 px-6 py-4 z-10">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <span className="text-blue-400 font-bold text-xl">Haleluya</span>
          <div className="flex gap-6 text-gray-400 text-sm">
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#skills" className="hover:text-white transition">Skills</a>
            <a href="#projects" className="hover:text-white transition">Projects</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-20">
        <p className="text-blue-400 text-lg mb-3 font-medium">
          Hello, I am
        </p>
        <h1 className="text-5xl font-bold mb-4">
          Haleluya Amde
        </h1>
        <h2 className="text-2xl text-gray-400 mb-6">
          Full Stack Engineer & DevOps Enthusiast
        </h2>
        <p className="text-gray-400 max-w-xl text-lg mb-8 leading-relaxed">
          6 years of teaching web development. Now building 
          production grade software. MSc Software Engineering. 
          Open to remote roles.
        </p>
        <div className="flex gap-4 flex-wrap justify-center">
  <a 
    href="https://github.com/hale15" 
    target="_blank"
    rel="noreferrer"
    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition"
  >
    GitHub
  </a>
  <a 
    href="https://linkedin.com/in/haleluya-amde-b103121a3" 
    target="_blank"
    rel="noreferrer"
    className="border border-gray-600 hover:border-blue-400 text-white px-6 py-3 rounded-lg font-medium transition"
  >
    LinkedIn
  </a>
  <a 
    href="/HaleluyaAmdeCV.pdf"
    download
    className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition"
  >
    Download CV ↓
  </a>
  <a 
    href="#contact"
    className="border border-gray-600 hover:border-blue-400 text-white px-6 py-3 rounded-lg font-medium transition"
  >
    Contact Me
  </a>
</div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            About <span className="text-blue-400">Me</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-gray-400 text-lg leading-relaxed mb-4">
                I am a Full Stack Engineer based in Addis Ababa, Ethiopia 
                with 6 years of experience teaching web development and 
                databases at General Wingate Polytechnic College.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed mb-4">
                I hold a BSc in Electrical and Computer Engineering from 
                Wolkite University and I am currently completing my MSc 
                in Software Engineering.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                My teaching background gives me a unique advantage I do not 
                just write code, I understand it deeply enough to explain it. 
                I am now transitioning into industry to build production-grade 
                software for international remote teams.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-800 rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-blue-400">6+</div>
                <div className="text-gray-400 text-sm mt-1">Years Teaching</div>
              </div>
              <div className="bg-gray-800 rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-blue-400">500+</div>
                <div className="text-gray-400 text-sm mt-1">Students Taught</div>
              </div>
              <div className="bg-gray-800 rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-blue-400">5+</div>
                <div className="text-gray-400 text-sm mt-1">Projects Built</div>
              </div>
              <div className="bg-gray-800 rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-blue-400">MSc</div>
                <div className="text-gray-400 text-sm mt-1">In Progress</div>
              </div>
            </div>
          </div>
        </div>
      </section>
{/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-gray-950">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Tech <span className="text-blue-400">Stack</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="bg-gray-900 rounded-lg p-6">
              <h3 className="text-blue-400 font-semibold text-lg mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {['React', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Next.js'].map(skill => (
                  <span key={skill} className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gray-900 rounded-lg p-6">
              <h3 className="text-blue-400 font-semibold text-lg mb-4">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {['Node.js', 'Express', 'PHP', 'REST APIs', 'JWT Auth', 'Prisma', 'MongoDB'].map(skill => (
                  <span key={skill} className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gray-900 rounded-lg p-6">
              <h3 className="text-blue-400 font-semibold text-lg mb-4">Database & DevOps</h3>
              <div className="flex flex-wrap gap-2">
                {['PostgreSQL', 'MySQL', 'MongoDB', 'Docker', 'GitHub Actions', 'AWS', 'Linux', 'Git'].map(skill => (
                  <span key={skill} className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            My <span className="text-blue-400">Projects</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-blue-400 transition">
              <h3 className="text-xl font-semibold mb-2">Inventory Management System</h3>
              <p className="text-gray-400 text-sm mb-4">
                Database-driven web app for tracking and managing 
                college inventory and stocks.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {['React', 'MongoDB', 'Express', 'Node.js'].map(t => (
                  <span key={t} className="bg-gray-700 text-blue-400 px-2 py-1 rounded text-xs">{t}</span>
                ))}
              </div>
              <a href="https://github.com/hale15" target="_blank" rel="noreferrer"
                className="text-blue-400 text-sm hover:underline">View on GitHub →</a>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-blue-400 transition">
              <h3 className="text-xl font-semibold mb-2">E-Commerce Web Shop</h3>
              <p className="text-gray-400 text-sm mb-4">
                Online store with 6 product categories integrated 
                with Chapa and PayPal payment gateways.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {['WordPress', 'WooCommerce', 'PHP', 'Chapa API'].map(t => (
                  <span key={t} className="bg-gray-700 text-blue-400 px-2 py-1 rounded text-xs">{t}</span>
                ))}
              </div>
              <span className="text-gray-500 text-sm">Live project</span>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-blue-400 transition">
              <h3 className="text-xl font-semibold mb-2">Task Manager App <span className="text-xs text-blue-400 ml-2">In Progress</span></h3>
              <p className="text-gray-400 text-sm mb-4">
                Full-stack task management with JWT auth, 
                role-based access, Docker, and CI/CD pipeline.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {['React', 'Node.js', 'PostgreSQL', 'Docker'].map(t => (
                  <span key={t} className="bg-gray-700 text-blue-400 px-2 py-1 rounded text-xs">{t}</span>
                ))}
              </div>
              <a href="https://github.com/hale15" target="_blank" rel="noreferrer"
                className="text-blue-400 text-sm hover:underline">View on GitHub →</a>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-blue-400 transition">
              <h3 className="text-xl font-semibold mb-2">Quiz Platform <span className="text-xs text-blue-400 ml-2">In Progress</span></h3>
              <p className="text-gray-400 text-sm mb-4">
                EdTech quiz platform for teachers and students 
                with analytics dashboard built with Next.js.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'].map(t => (
                  <span key={t} className="bg-gray-700 text-blue-400 px-2 py-1 rounded text-xs">{t}</span>
                ))}
              </div>
              <span className="text-gray-500 text-sm">Coming soon</span>
            </div>

          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gray-950">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Get In <span className="text-blue-400">Touch</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            I am currently open to remote full stack and DevOps 
            engineer roles. If you have an opportunity or just want 
            to connect my inbox is open.
          </p>
          <a 
            href="mailto:luyaleha@gmail.com"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-medium text-lg transition inline-block mb-8"
          >
            Say Hello 👋
          </a>
          <div className="flex justify-center gap-6 text-gray-400">
            <a href="https://github.com/hale15" target="_blank" rel="noreferrer"
              className="hover:text-white transition">GitHub</a>
            <a href="https://linkedin.com/in/haleluya-amde-b103121a3" target="_blank" rel="noreferrer"
              className="hover:text-white transition">LinkedIn</a>
            <a href="mailto:luyaleha@gmail.com"
              className="hover:text-white transition">Email</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-600 text-sm border-t border-gray-800">
        Designed & Built by Haleluya Amde
      </footer>
    </div>
  );
}

export default App;
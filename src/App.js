function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
        <p className="text-blue-400 text-lg mb-3 font-medium">
          Hello, I'm
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
        <div className="flex gap-4">
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
            href="/HaleluyaAmde-CV.pdf" 
            className="border border-gray-600 hover:border-blue-400 text-white px-6 py-3 rounded-lg font-medium transition"
          >
            Download CV
          </a>
        </div>
      </section>
    </div>
  );
}

export default App;
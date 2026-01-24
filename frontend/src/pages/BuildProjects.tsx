export default function ProjectsPage() {
  const projects = [
    { title: "Your Projects", text: "All your personal and collaborative projects in one place." },
    { title: "Build Together", text: "Work with others and learn by doing." },
    { title: "Showcase Skills", text: "Turn your work into a growing portfolio." }
  ];

  return (
    <div className="gateway-page">
      <div className="gateway-overlay"></div>

      <div className="content-container">
        <section className="hero-section">
          <h1 className="hero-title">
            Build <span className="text-accent">Projects</span>
          </h1>
          <p className="hero-sub">
            Learn by creating real things and sharing your progress with others.
          </p>
        </section>

        <section className="section-block">
          <div className="card-grid">
            {projects.map((p, i) => (
              <div key={i} className="glass-card">
                <h3 className="card-title">{p.title}</h3>
                <p className="card-text">{p.text}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
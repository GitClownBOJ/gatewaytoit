import { useNavigate } from "react-router-dom";
import "../App.css";

export default function GatewayLandingPage() {
  const navigate = useNavigate();
  
  const buttons = [
  { label: "Start Learning", path: "/start-learning" },
  { label: "Build Projects", path: "/build-projects" },
  { label: "Community", path: "/community" }
]; 
  const values = [
    { title: "Shared knowledge", text: "No question is too basic, and every challenge is an opportunity to learn." },
    { title: "Everyone starts somewhere", text: "We celebrate progress, not perfection, and support each other's learning journey." },
    { title: "Truly inclusive", text: "All skill-levels, backgrounds, and learning styles are welcome." },
    { title: "Collaboration over competition", text: "We share resources, provide feedback, and celebrate each other's wins." }
  ];

  const features = [
    { title: "Practice Together", text: "Join coding sessions, educational dialogue, and group projects.", path: "/start-learning" },
    { title: "Showcase Skills", text: "Share projects, track your learning, and build a portfolio.", path: "/build-projects" },
    { title: "Connect", text: "Meet other junior techies and grow your network.", path: "/community" }
  ];

  return (
    <div className="gateway-page">
      <div className="gateway-overlay"></div>

      <div className="content-container">
        {/* Hero */}
        <section className="hero-section">
          <h1 className="hero-title">
            Gateway to <span className="text-accent">IT</span>
          </h1>
          <p className="hero-sub">
            A community where junior techies connect, collaborate, and grow together. Showcase your skills, practice with peers, and build your future in tech.
          </p>

          <div className="button-row">
            {buttons.map((btn, i) => (
              <button 
                key={i} 
                className="glow-button"
                onClick={() => navigate(btn.path)}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </section>

        {/* Values */}
        <section className="section-block">
          <h2 className="section-title">Our Community Values</h2>

          <div className="card-grid">
            {values.map((v, i) => (
              <div key={i} className="glass-card">
                <h3 className="card-title">{v.title}</h3>
                <p className="card-text">{v.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Features */}
        <section className="section-block">
          <h2 className="section-title">What can you do here?</h2>

          <div className="card-grid features-grid">
            {features.map((f, i) => (
              <div 
                key={i} 
                className="glass-card clickable"
                onClick={() => navigate(f.path)}
                style={{ cursor: 'pointer' }}
              >
                <h3 className="card-title">{f.title}</h3>
                <p className="card-text">{f.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="gateway-footer">
          Join our community of aspiring tech professionals
        </footer>
      </div>
    </div>
  );
}

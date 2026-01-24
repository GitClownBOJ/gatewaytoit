export default function CommunityPage() {
  const communityFeatures = [
    { title: "Ask Questions", text: "No question is too small or too basic." },
    { title: "Share Knowledge", text: "Help others and learn along the way." },
    { title: "Grow Together", text: "Connect with junior techies on the same path." }
  ];

  return (
    <div className="gateway-page">
      <div className="gateway-overlay"></div>

      <div className="content-container">
        <section className="hero-section">
          <h1 className="hero-title">
            The <span className="text-accent">Community</span>
          </h1>
          <p className="hero-sub">
            A supportive space to connect, collaborate, and grow together.
          </p>
        </section>

        <section className="section-block">
          <div className="card-grid">
            {communityFeatures.map((c, i) => (
              <div key={i} className="glass-card">
                <h3 className="card-title">{c.title}</h3>
                <p className="card-text">{c.text}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
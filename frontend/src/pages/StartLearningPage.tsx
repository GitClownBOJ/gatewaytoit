
export default function DashboardPage() {
  const stats = [
    { title: "Your Progress", text: "Track what you’ve learned and what’s next." },
    { title: "Active Projects", text: "See what you’re currently working on." },
    { title: "Community Activity", text: "New posts, discussions, and collaborations." }
  ];

  return (
    <div className="gateway-page">
      <div className="gateway-overlay"></div>

      <div className="content-container">
        <section className="hero-section">
          <h1 className="hero-title">
            Your <span className="text-accent">Dashboard</span>
          </h1>
          <p className="hero-sub">
            A quick overview of your learning journey, projects, and community activity.
          </p>
        </section>

        <section className="section-block">
          <div className="card-grid">
            {stats.map((item, i) => (
              <div key={i} className="glass-card">
                <h3 className="card-title">{item.title}</h3>
                <p className="card-text">{item.text}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

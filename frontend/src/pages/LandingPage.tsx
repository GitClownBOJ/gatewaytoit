import { motion } from "framer-motion";

export default function GatewayLandingPage() {
  const buttons = [
    "Start Learning",
    "Build Projects",
    "Community",
  ];

  const values = [
    {
      title: "Shared knowledge",
      text: "No question is too basic, and every challenge is an opportunity to learn.",
    },
    {
      title: "Everyone starts somewhere",
      text: "We celebrate progress, not perfection, and support each other's learning journey.",
    },
    {
      title: "Truly inclusive",
      text: "All skill-levels, backgrounds, and learning styles are welcome.",
    },
    {
      title: "Collaboration over competition",
      text: "We share resources, provide feedback, and celebrate each other's wins.",
    },
  ];

  const features = [
    {
      title: "Practice Together",
      text: "Join coding sessions, educational dialogue, and group projects.",
    },
    {
      title: "Showcase Skills",
      text: "Share projects, track your learning, and build a portfolio.",
    },
    {
      title: "Connect",
      text: "Meet other junior techies and grow your network.",
    },
  ];

  return (
    <div className="min-h-screen bg-black relative overflow-hidden font-goldman">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-80 z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-70 z-10" />
        <img
          src="/gate.jpg"
          alt="Gateway"
          className="w-full h-full object-cover object-center brightness-50"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center space-y-8 mt-24">
          <h1 className="font-doodle text-white text-6xl md:text-7xl mt-10">
            Gateway to <span className="text-blue-400">IT</span>
          </h1>

          <p className="text-white text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
            A community where junior techies connect, collaborate, and grow
            together. Showcase your skills, practice with peers, and build your
            future in tech.
          </p>

          {/* Buttons */}
          <div className="flex gap-6 flex-wrap justify-center mt-24">
            {buttons.map((label, i) => (
              <motion.div
                whileHover={{ y: -6, scale: 1.04 }}
                transition={{ type: "spring", stiffness: 220, damping: 18 }}
                key={i}
                className="relative w-[200px] h-[60px] cursor-pointer group"
              >
                {/* simulated gates */}
                <div className="absolute inset-0 grid grid-cols-2">
                  <motion.div
                    initial={{ x: 0 }}
                    whileHover={{ x: -200 }}
                    transition={{ duration: 0.55, ease: [0.16, 0.84, 0.44, 1] }}
                    className="bg-black/90"
                  />

                  <motion.div
                    initial={{ x: 0 }}
                    whileHover={{ x: 200 }}
                    transition={{ duration: 0.55, ease: [0.16, 0.84, 0.44, 1] }}
                    className="bg-black/90"
                  />
                </div>

                {/* Button container */}
                <div className="relative w-full h-full bg-gradient-to-br from-gray-900 to-gray-700 border-2 border-blue-900 rounded-lg shadow-lg flex items-center justify-center text-white font-bold text-lg overflow-hidden">
                  <span className="transition-colors duration-300 group-hover:text-amber-400 drop-shadow-lg">
                    {label}
                  </span>

                  {/* Glow line */}
                  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Community Values */}
        <div className="mt-32">
          <h2 className="font-doodle text-center text-white text-5xl my-16 pt-8">
            Our Community Values
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <div
                key={i}
                className="bg-black/40 p-8 rounded border border-blue-900 hover:border-blue-600 transition-colors"
              >
                <h3 className="text-2xl font-bold text-blue-100 mb-4">{v.title}</h3>
                <p className="text-blue-300">{v.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Features */}
        <h2 className="font-doodle text-center text-white text-5xl my-16 pt-8">
          What can you do here?
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-32">
          {features.map((f, i) => (
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.2 }}
              key={i}
              className="bg-black/40 p-8 rounded border border-blue-900 hover:border-blue-600 transition-colors cursor-pointer"
            >
              <h3 className="text-2xl font-bold text-blue-100 mb-4">{f.title}</h3>
              <p className="text-blue-300">{f.text}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-32 text-center text-white border-t border-blue-900 py-8">
        <p className="text-sm opacity-90">
          Join our community of aspiring tech professionals
        </p>
      </footer>
    </div>
  );
}

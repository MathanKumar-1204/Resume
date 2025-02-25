import { motion } from "framer-motion";

const timelineData = [
  { title: "SCHOOLING", content: ["Everwin Vidyashram", "HSC: 93%", "SSLC: 95%"] },
  { title: "COLLEGE", content: ["Meenakshi Sundararajan Engineering College","Bachelor Of Technology Information Technology", "CGPA: 9.2"] },
  { title: "INTERNSHIPS", content: ["Elewayte", "Codsoft", "Altruisty", "Simplzone"] },
];

const Timeline = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-300 h-full"></div>
        {timelineData.map((item, index) => (
          <motion.div
            key={index}
            className={`flex items-center w-full mb-10 ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            }`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative w-10 h-10 bg-purple-500 rounded-full z-10"></div>
            <div
              className={`relative w-2/5 p-6 rounded-lg shadow-lg backdrop-blur-lg bg-white/30 ${
                index % 2 === 0 ? "ml-6" : "mr-6"
              }`}
            >
              <h2 className="text-xl font-bold text-gray-800">{item.title}</h2>
              <div className="text-white mt-2">
                {item.content.map((line, idx) => (
                  <p
                    key={idx}
                    className={`${
                      idx === 0 && (item.title === "SCHOOLING" || item.title === "COLLEGE")
                        ? "text-2xl font-bold text-gray-900"
                        : "text-base"
                    }`}
                  >
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;

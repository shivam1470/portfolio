import SectionTitle from "../ui/SectionTitle";
import Card from "../ui/Card";
import { motion } from "framer-motion";

const contactDetails = [
  {
    label: "Email",
    value: "shivammishr16@gmail.com",
    href: "mailto:shivammishr16@gmail.com",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: "Phone",
    value: "+91 6392384273",
    href: "tel:+916392384273",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
];

const socials = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/shivammishra16/",
    color: "#0077b5",
  },
  {
    name: "GitHub",
    url: "https://github.com/shivam1470",
    color: "#333",
  },
  {
    name: "Medium",
    url: "https://shivammishr16.medium.com/",
    color: "#00ab6c",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Get In Touch"
          subtitle="Let's build something amazing together. Reach out via email, phone, or connect with me on social media."
          centered
        />

        <div className="mt-16 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {contactDetails.map((detail, index) => (
              <motion.a
                key={detail.label}
                href={detail.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <Card className="flex items-center gap-6 p-8 h-full hover:border-indigo-500 transition-all duration-300">
                  <div className="w-14 h-14 rounded-2xl bg-indigo-900/20 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform duration-300">
                    {detail.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-1">{detail.label}</h4>
                    <p className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">{detail.value}</p>
                  </div>
                </Card>
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-12"
          >
            <Card className="p-10 text-center border-dashed border-gray-800 bg-indigo-900/5">
              <h3 className="text-2xl font-bold text-white mb-8">Follow My Professional Journey</h3>
              <div className="flex flex-wrap justify-center gap-6">
                {socials.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-3 px-8 py-4 bg-gray-900 rounded-2xl border border-gray-800 hover:border-indigo-500 transition-all"
                  >
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: social.color }} />
                    <span className="font-bold text-white tracking-wide">{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

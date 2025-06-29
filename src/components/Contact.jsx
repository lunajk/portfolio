import { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import phoneIcon from '../assets/icons/telephone.png';
import mailIcon from '../assets/icons/mail.png';
import addressIcon from '../assets/icons/location.png';
import linkedinIcon from '../assets/icons/linkedin.png';
import githubIcon from '../assets/icons/github.png';
import { toast } from 'react-toastify';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  
  try {
    const response = await fetch("https://portfolio-backend-ic9s.onrender.com/api/contact/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

if (response.ok) {
toast.success("✅ Message sent successfully! I’ll get back to you soon.", {
  position: "top-center",
  style: {
    background: "#1f1f1f",
    color: "#eaeaea",
    fontSize: "14px",
    borderRadius: "8px",
    padding: "14px 20px",
    boxShadow: "0 0 10px rgba(0,0,0,0.3)"
  },
});
  setForm({ name: "", email: "", message: "" });
} else {
  const errorData = await response.json();
  console.error("Error:", errorData);
  toast.error("⚠️ Sorry — something went wrong while sending your message. Please try again.", {
    position: "top-center",
    className: "text-[15px] font-medium",
  });
}

  } catch (error) {
    console.error("Error:", error);
    alert("Something went wrong. Please try again.");
  }
};

  return (
    <div className="max-w-4xl mx-auto p-8 font-sans">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      

  <p className="mb-10 text-[15px] text-gray-300 leading-relaxed max-w-3xl">
    Whether you have a project in mind, a question about my experience, or just want to connect — I’d love to hear from you. Reach out through the form or directly via my contact info.
  </p>

      <div className="flex flex-col md:flex-row gap-12">
        {/* Contact Info */}
<motion.div  
  variants={slideIn('left', 'tween', 0.2, 1)}
  className="w-full md:w-[550px] bg-[rgba(30,30,30,0.6)] backdrop-blur-lg p-6 rounded-2xl text-gray-300 shadow-lg border border-[rgba(255,255,255,0.08)] space-y-6"
>
  <h3 className="text-[24px] font-bold border-b border-gray-600 pb-3 flex items-center gap-2">
    📇 Contact Info
  </h3>

  <div className="flex items-start gap-3">
    <img src={addressIcon} alt="address" className="w-5 h-5 object-contain" />
    <div>
      <h4 className="font-semibold text-gray-200">Address</h4>
      <p className="text-gray-400 leading-relaxed">
        Managiri, Karaikudi, Sivaganga<br />
        Tamil Nadu - 630307
      </p>
    </div>
  </div>

  <div className="flex items-start gap-3">
    <img src={phoneIcon} alt="phone" className="w-5 h-5 object-contain" />
    <div>
      <h4 className="font-semibold text-gray-200">Phone</h4>
      <p className="text-gray-400">+91 99528 09549</p>
    </div>
  </div>

  <div className="flex items-start gap-3">
    <img src={mailIcon} alt="mail" className="w-5 h-5 object-contain" />
    <div>
      <h4 className="font-semibold text-gray-200">Email</h4>
      <p className="text-gray-400">vigneshwarisakthivel8@gmail.com</p>
    </div>
  </div>

  <div className="flex items-start gap-3">
    <img src={linkedinIcon} alt="LinkedIn" className="w-5 h-5 object-contain" />
    <a href="https://linkedin.com/in/vigneshwari-sakthivel-584065329/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
      LinkedIn Profile
    </a>
  </div>

  <div className="flex items-start gap-3">
    <img src={githubIcon} alt="GitHub" className="w-5 h-5 object-contain" />
    <a href="https://github.com/lunajk" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
      GitHub Profile
    </a>
  </div>

</motion.div>


            {/* Contact Form */}
    <motion.div
      variants={slideIn('right', 'tween', 0.2, 1)}
  className="w-full md:w-[550px] bg-[rgba(30,30,30,0.6)] backdrop-blur-lg p-6 rounded-2xl text-gray-300 shadow-lg border border-[rgba(255,255,255,0.08)] space-y-6"
    >
      <h2 className="text-[22px] font-semibold text-white mb-5 border-b border-[rgba(255,255,255,0.1)] pb-3">📩 Send a Message</h2>

      <form onSubmit={handleSubmit} className="space-y-5 text-[15px]">
        <div>
          <label className="block text-gray-300 mb-1">Full Name:</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            className="w-full px-4 py-3 bg-eerieBlack text-gray-200 rounded border-none outline-none focus:ring-2 focus:ring-blue-600"
            required
          />
        </div>

        <div>
          <label className="block text-gray-300 mb-1">Email:</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your email"
            className="w-full px-4 py-3 bg-eerieBlack text-gray-200 rounded border-none outline-none focus:ring-2 focus:ring-blue-600"
            required
          />
        </div>

        <div>
          <label className="block text-gray-300 mb-1">Your Message:</label>
          <textarea
            name="message"
            rows="4"
            value={form.message}
            onChange={handleChange}
            placeholder="Type your message..."
            className="w-full px-4 py-3 bg-eerieBlack text-gray-200 rounded border-none outline-none focus:ring-2 focus:ring-blue-600 resize-none"
            required
          />
        </div>
<div className="flex justify-center mt-4">
  <button
    type="submit"
    className="bg-gray-700 text-white min-w-[160px] px-6 py-2 rounded-lg text-[14px] font-medium hover:bg-gray-800 transition"
  >
    Send
  </button>
</div>


      </form>
    </motion.div>
  </div>
</div>
  );
};

export default SectionWrapper(Contact, 'contact');
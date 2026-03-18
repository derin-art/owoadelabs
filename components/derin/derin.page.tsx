"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import derinImage from "../../public/IMG-20260317-WA0002.jpg";

export default function AIProfilePage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white antialiased selection:bg-white selection:text-black">
      {/* Container */}
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-16">
        {/* Top Grid */}
        <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-6 text-sm text-gray-500 tracking-widest uppercase">
              Profile
            </div>

            <h1 className="text-5xl md:text-7xl font-semibold leading-[1.05] tracking-tight mb-8">
              AI Systems
              <br />
              & Software
              <br />
              Engineer
            </h1>

            <p className="text-lg text-gray-400 max-w-xl leading-relaxed mb-10">
              Building practical, real-world AI systems by combining engineering
              thinking with modern software development.
            </p>

            <div className="space-y-4 text-gray-300 text-[15px]">
              {[
                "Mechanical engineer & software engineer (3+ years)",
                "Applied AI, automation, and intelligent systems",
                "Machine learning: object detection & classification",
                "Backend systems & API integration for AI deployment",
                "Focused on simplicity, usability, and real-world impact",
                "Teaching AI in a clear, accessible way",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/60" />
                  <p>{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 hidden items-center gap-6">
              <button className="px-7 py-3 rounded-full bg-white text-black text-sm font-medium hover:opacity-80 transition">
                Get in touch
              </button>

              <span className="text-sm text-gray-500">Available for work</span>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative w-[300px] h-[380px] rounded-[28px] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl">
              <Image
                src={derinImage.src}
                alt="Profile"
                fill
                className="object-cover "
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="my-20 h-px bg-white/10" />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid md:grid-cols-2 gap-12"
        >
          <div>
            <h2 className="text-2xl md:text-3xl font-medium mb-6">What I Do</h2>

            <p className="text-gray-400 leading-relaxed max-w-lg">
              I design and build AI-powered systems that are grounded in real
              use. My work focuses on turning complex ideas into usable tools —
              from automation workflows to intelligent APIs and data-driven
              applications.
            </p>
          </div>

          <div className="space-y-6 text-gray-300 text-sm">
            <div className="flex justify-between border-b border-white/10 pb-3">
              <span>AI Development</span>
              <span className="text-gray-500">Machine Learning</span>
            </div>

            <div className="flex justify-between border-b border-white/10 pb-3">
              <span>Backend Systems</span>
              <span className="text-gray-500">APIs & Architecture</span>
            </div>

            <div className="flex justify-between border-b border-white/10 pb-3">
              <span>Automation</span>
              <span className="text-gray-500">Workflows</span>
            </div>

            <div className="flex justify-between border-b border-white/10 pb-3">
              <span>Teaching</span>
              <span className="text-gray-500">AI Literacy</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

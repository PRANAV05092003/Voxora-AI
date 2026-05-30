'use client';

import { motion } from 'framer-motion';
import { AIOrb } from '@/components/3d/ai-orb';
import { HolographicStatus } from './holographic-status';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

export const HeroSection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-background">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Radial gradient background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/3 rounded-full blur-3xl" />
      </div>

      {/* Main content */}
      <div className="relative z-10">
        {/* 3D Orb Section */}
        <div className="w-full">
          <AIOrb />
        </div>

        {/* Content below orb */}
        <div className="px-4 md:px-8 py-12 md:py-16">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto"
          >
            {/* Headline */}
            <motion.div variants={itemVariants} className="text-center mb-8">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Voice Intelligence
                </span>
                <br />
                <span className="text-white">for the Modern Era</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                Experience conversational AI that understands context, emotion, and intent. 
                Built for applications that demand real-time performance and natural interactions.
              </p>
            </motion.div>

            {/* Holographic Status */}
            <motion.div variants={itemVariants} className="mb-12">
              <div className="flex justify-center">
                <HolographicStatus />
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white border-0 group"
              >
                Start Building
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-blue-500/30 hover:border-blue-500/60 text-slate-300 hover:text-white"
              >
                View Documentation
              </Button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              variants={itemVariants}
              className="mt-16 pt-8 border-t border-slate-800"
            >
              <p className="text-center text-sm text-slate-500 mb-4 uppercase tracking-widest">
                Trusted by leading AI companies
              </p>
              <div className="flex justify-center items-center gap-8 opacity-50 hover:opacity-70 transition-opacity">
                {['OpenAI', 'Anthropic', 'Scale AI', 'ElevenLabs'].map((company) => (
                  <span key={company} className="text-sm font-semibold text-slate-400">
                    {company}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Ambient light lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg className="w-full h-full opacity-5" viewBox="0 0 1200 800">
          <defs>
            <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0066ff" />
              <stop offset="100%" stopColor="#00ff88" />
            </linearGradient>
          </defs>
          <line x1="0" y1="0" x2="1200" y2="800" stroke="url(#line-gradient)" strokeWidth="1" />
          <line x1="1200" y1="0" x2="0" y2="800" stroke="url(#line-gradient)" strokeWidth="1" />
        </svg>
      </div>
    </section>
  );
};

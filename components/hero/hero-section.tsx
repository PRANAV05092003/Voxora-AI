'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Zap, Volume2, Brain } from 'lucide-react'
import { Button, Container, Section } from '@/components/ui'
import { staggerContainer, staggerItem } from '@/lib/motion'
import { AIOrb } from '@/components/3d/ai-orb'

const AnimatedGradientText = ({ children }: { children: React.ReactNode }) => (
  <motion.span
    className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
    animate={{
      backgroundPosition: ['0%', '100%', '0%'],
    }}
    transition={{ duration: 5, repeat: Infinity }}
  >
    {children}
  </motion.span>
)

const FloatingCard = ({ 
  delay, 
  icon: Icon, 
  label, 
  value 
}: { 
  delay: number
  icon: React.ReactNode
  label: string
  value: string
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20, x: -20 }}
    animate={{ opacity: 1, y: 0, x: 0 }}
    transition={{ delay, duration: 0.6 }}
    className="glass rounded-2xl border border-white/10 p-4 backdrop-blur-md hover:border-cyan-400/30 hover:bg-white/5 transition-all duration-300 group"
  >
    <div className="flex items-center gap-3">
      <div className="rounded-lg bg-gradient-to-br from-cyan-400/20 to-blue-500/20 p-2.5 group-hover:from-cyan-400/30 group-hover:to-blue-500/30 transition-all">
        {Icon}
      </div>
      <div>
        <p className="text-xs text-gray-400 uppercase tracking-wider">{label}</p>
        <p className="text-lg font-bold text-white">{value}</p>
      </div>
    </div>
  </motion.div>
)

const TechBadge = ({ text, delay }: { text: string; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay, duration: 0.5 }}
    className="inline-block rounded-full border border-cyan-400/30 bg-cyan-400/5 px-4 py-1.5 text-sm text-cyan-300 backdrop-blur-sm"
  >
    {text}
  </motion.div>
)

export function HeroSection() {
  return (
    <div className="relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient orbs */}
        <div className="absolute top-20 left-1/3 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-1/4 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-1/3 h-96 w-96 rounded-full bg-purple-500/5 blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Grid background */}
        <div className="absolute inset-0 bg-grid-white/5" />
      </div>

      {/* Top badge with notification */}
      <div className="relative pt-8">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12 flex justify-center"
          >
            <div className="flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 backdrop-blur-md">
              <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm text-cyan-300">Live: 50k+ conversations daily</span>
            </div>
          </motion.div>
        </Container>
      </div>

      {/* Main Hero Content */}
      <Section>
        <Container className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex flex-col gap-8"
          >
            {/* Main Headline */}
            <div className="space-y-4">
              <motion.div variants={staggerItem}>
                <TechBadge text="Powered by Advanced AI" delay={0} />
              </motion.div>
              
              <motion.h1
                variants={staggerItem}
                className="text-5xl lg:text-6xl xl:text-7xl font-black leading-tight"
              >
                Transform Conversations
                <br />
                Into <AnimatedGradientText>Intelligence</AnimatedGradientText>
              </motion.h1>
            </div>

            {/* Subheading */}
            <motion.p
              variants={staggerItem}
              className="text-lg text-gray-300 max-w-lg leading-relaxed"
            >
              Enterprise-grade voice AI that understands context, emotion, and intent. 
              Reduce support time by 60%, boost customer satisfaction, and automate at scale.
            </motion.p>

            {/* Stats */}
            <motion.div
              variants={staggerItem}
              className="grid grid-cols-3 gap-4 py-4"
            >
              <div className="space-y-1">
                <p className="text-2xl font-bold text-white">99.9%</p>
                <p className="text-sm text-gray-400">Uptime SLA</p>
              </div>
              <div className="space-y-1">
                <p className="text-2xl font-bold text-white">40ms</p>
                <p className="text-sm text-gray-400">Response Time</p>
              </div>
              <div className="space-y-1">
                <p className="text-2xl font-bold text-white">150+</p>
                <p className="text-sm text-gray-400">Languages</p>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={staggerItem}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Button size="lg" className="gap-2 group">
                Start Free Trial
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="gap-2"
              >
                <Volume2 className="h-4 w-4" />
                Watch Demo
              </Button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              variants={staggerItem}
              className="flex flex-col gap-2 border-t border-white/10 pt-6"
            >
              <p className="text-sm text-gray-400">Trusted by leading companies</p>
              <div className="flex items-center gap-4">
                {['Stripe', 'Vercel', 'Linear', 'Notion'].map((company) => (
                  <span key={company} className="text-sm font-medium text-gray-300 opacity-70">
                    {company}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right side - 3D Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-[500px] lg:h-[600px]">
              {/* Glow effect behind */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 blur-2xl rounded-3xl" />
              
              {/* 3D Orb */}
              <div className="relative h-full rounded-3xl overflow-hidden border border-white/10 backdrop-blur-sm">
                <AIOrb />
              </div>

              {/* Floating stat cards */}
              <div className="absolute -bottom-12 -left-8 space-y-3">
                <FloatingCard 
                  delay={0.4}
                  icon={<Brain className="h-5 w-5 text-cyan-400" />}
                  label="AI Processing"
                  value="5M+ ops/s"
                />
                <FloatingCard 
                  delay={0.6}
                  icon={<Zap className="h-5 w-5 text-blue-400" />}
                  label="Latency"
                  value="< 40ms"
                />
              </div>

              {/* Top right accent */}
              <div className="absolute -top-8 -right-8">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  className="h-24 w-24 rounded-full border border-cyan-400/30 border-t-cyan-400"
                />
              </div>
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* Bottom CTA Section */}
      <div className="relative border-t border-white/10">
        <Container className="py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-6"
          >
            <h2 className="text-3xl font-bold text-white">
              Ready to revolutionize your customer interactions?
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Join thousands of companies automating support at scale. No credit card required.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" className="gap-2">
                Get Started Now
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="lg">
                Schedule Demo
              </Button>
            </div>
          </motion.div>
        </Container>
      </div>
    </div>
  )
}

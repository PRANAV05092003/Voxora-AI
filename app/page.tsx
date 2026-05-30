'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Mic, Brain, Zap, Shield, Globe, Sparkles } from 'lucide-react'
import { Navbar, Footer } from '@/components/layout'
import { Button, Card, CardContent, Badge, Container, Section, Grid } from '@/components/ui'
import { staggerContainer, staggerItem, fadeUp } from '@/lib/motion'
import { HeroSection } from '@/components/hero/hero-section'

const features = [
  {
    icon: Mic,
    title: 'Natural Voice Recognition',
    description: 'Advanced speech-to-text with support for multiple languages and accents.',
  },
  {
    icon: Brain,
    title: 'Intelligent Understanding',
    description: 'Context-aware AI that understands nuance and intent in every conversation.',
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Real-time processing with sub-second response times for seamless interaction.',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'End-to-end encryption and SOC 2 compliance for your peace of mind.',
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Support for 50+ languages with automatic translation capabilities.',
  },
  {
    icon: Sparkles,
    title: 'Continuous Learning',
    description: 'AI that adapts and improves based on your unique communication style.',
  },
]

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <Navbar />
      
      {/* Cinematic Hero Section with 3D AI Orb */}
      <HeroSection />

      {/* Features Section */}
      <Section id="features" className="border-t border-border bg-card/30">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center"
          >
            <Badge variant="outline" className="mb-4">Features</Badge>
            <h2 className="text-balance">
              Everything you need for{' '}
              <span className="text-gradient">intelligent voice AI</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Powerful features designed to transform how you interact with technology through voice.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mt-16"
          >
            <Grid cols={3}>
              {features.map((feature) => (
                <motion.div key={feature.title} variants={staggerItem}>
                  <Card variant="bordered" className="h-full p-6 transition-colors hover:border-primary/50">
                    <CardContent className="p-0">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                        <feature.icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="mt-4 text-lg font-semibold">{feature.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </Grid>
          </motion.div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="border-t border-border">
        <Container>
          <Card variant="glass" className="relative overflow-hidden p-8 text-center md:p-12">
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />
            <Badge variant="default" className="mb-4">Get Started Today</Badge>
            <h2 className="text-balance">Ready to transform your voice experience?</h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Join thousands of users already using VOXORA AI to enhance their productivity and communication.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button size="lg" className="gap-2">
                Start Free Trial
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg">
                Contact Sales
              </Button>
            </div>
          </Card>
        </Container>
      </Section>

      <Footer />
    </main>
  )
}

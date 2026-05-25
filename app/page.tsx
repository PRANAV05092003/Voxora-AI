'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Mic, Brain, Zap, Shield, Globe, Sparkles } from 'lucide-react'
import { Navbar, Footer } from '@/components/layout'
import { Button, Card, CardContent, Badge, Container, Section, Grid } from '@/components/ui'
import { staggerContainer, staggerItem, fadeUp, floatAnimation } from '@/lib/motion'

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
      
      {/* Hero Section */}
      <section className="relative min-h-screen pt-32 pb-20">
        {/* Background Effects */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        </div>

        <Container className="flex flex-col items-center text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex flex-col items-center"
          >
            <motion.div variants={staggerItem}>
              <Badge variant="outline" className="mb-6 px-4 py-1.5">
                <Sparkles className="mr-2 h-3.5 w-3.5" />
                Introducing VOXORA AI
              </Badge>
            </motion.div>

            <motion.h1
              variants={staggerItem}
              className="max-w-4xl text-balance text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
            >
              The Future of{' '}
              <span className="text-gradient">Voice AI</span>{' '}
              is Here
            </motion.h1>

            <motion.p
              variants={staggerItem}
              className="mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl"
            >
              Experience intelligent voice interaction powered by cutting-edge AI. 
              Seamlessly communicate, automate, and innovate with VOXORA.
            </motion.p>

            <motion.div
              variants={staggerItem}
              className="mt-10 flex flex-wrap items-center justify-center gap-4"
            >
              <Button size="lg" className="gap-2">
                Start Free Trial
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg">
                Watch Demo
              </Button>
            </motion.div>

            <motion.div
              variants={staggerItem}
              className="mt-8 flex items-center gap-8 text-sm text-muted-foreground"
            >
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500" />
                No credit card required
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500" />
                14-day free trial
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Visual */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative mt-20 w-full max-w-4xl"
          >
            <div className="glass glow-primary rounded-2xl p-8">
              <motion.div
                animate={floatAnimation}
                className="flex items-center justify-center"
              >
                <div className="relative flex h-32 w-32 items-center justify-center rounded-full bg-primary/20">
                  <div className="absolute inset-0 animate-ping rounded-full bg-primary/20" />
                  <div className="absolute inset-4 rounded-full bg-primary/30" />
                  <Mic className="relative h-12 w-12 text-primary" />
                </div>
              </motion.div>
              <div className="mt-8 space-y-3">
                <div className="h-3 w-full rounded-full bg-muted">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '75%' }}
                    transition={{ duration: 1, delay: 1 }}
                    className="h-full rounded-full bg-primary"
                  />
                </div>
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Listening...</span>
                  <span>AI Processing</span>
                </div>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

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

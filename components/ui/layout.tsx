'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: 'div' | 'section' | 'main' | 'article'
}

export function Container({ 
  className, 
  as: Component = 'div',
  children,
  ...props 
}: ContainerProps) {
  return (
    <Component
      className={cn('mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8', className)}
      {...props}
    >
      {children}
    </Component>
  )
}

interface SectionProps extends Omit<React.HTMLAttributes<HTMLElement>, 'children'> {
  delay?: number
  children?: React.ReactNode
}

export function Section({ className, delay = 0, children, ...props }: SectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay }}
      className={cn('py-16 md:py-24', className)}
    >
      {children}
    </motion.section>
  )
}

interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  cols?: 1 | 2 | 3 | 4
}

const gridColsMap = {
  1: 'grid-cols-1',
  2: 'grid-cols-1 md:grid-cols-2',
  3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
  4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
}

export function Grid({ className, cols = 3, children, ...props }: GridProps) {
  return (
    <div
      className={cn('grid gap-6', gridColsMap[cols], className)}
      {...props}
    >
      {children}
    </div>
  )
}

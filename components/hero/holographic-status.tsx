'use client';

import { motion } from 'framer-motion';
import { Activity, Brain, Zap, Database } from 'lucide-react';

interface HolographicCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  delay: number;
}

const HolographicCard = ({ icon, label, value, delay }: HolographicCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
      className="group relative"
    >
      {/* Glassmorphism background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-lg blur-xl" />
      
      <div className="relative px-4 py-3 rounded-lg border border-blue-500/20 bg-black/20 backdrop-blur-xl hover:border-blue-500/40 transition-colors">
        <div className="flex items-center gap-2 mb-1">
          <div className="text-cyan-400">{icon}</div>
          <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">
            {label}
          </span>
        </div>
        <div className="text-sm font-bold text-white">{value}</div>
        
        {/* Subtle glow on hover */}
        <div className="absolute inset-0 rounded-lg bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
    </motion.div>
  );
};

export const HolographicStatus = () => {
  const statusItems = [
    { icon: <Brain size={16} />, label: 'AI Memory', value: '512MB', delay: 0.2 },
    { icon: <Zap size={16} />, label: 'Voice Latency', value: '45ms', delay: 0.4 },
    { icon: <Activity size={16} />, label: 'Active Agents', value: '8', delay: 0.6 },
    { icon: <Database size={16} />, label: 'Knowledge Base', value: '2.3TB', delay: 0.8 },
  ];

  return (
    <div className="grid grid-cols-2 gap-3">
      {statusItems.map((item, idx) => (
        <HolographicCard key={idx} {...item} />
      ))}
    </div>
  );
};

import { motion } from 'framer-motion';
import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card = ({ children, className = '' }: CardProps) => (
  <motion.div
    className={`card ${className}`}
    whileHover={{ y: -4, transition: { duration: 0.3 } }}
    transition={{ type: "spring", stiffness: 400, damping: 30 }}
  >
    {children}
  </motion.div>
);

interface FeatureItemProps {
  number: string;
  icon: React.ElementType;
  title: string;
  description: string;
}

export const FeatureItem = ({ number, icon: Icon, title, description }: FeatureItemProps) => (
  <div className="feature-item">
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <span className="feature-number">{number}</span>
      <div style={{ 
        width: '40px', 
        height: '40px', 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--text-muted)'
      }}>
        <Icon size={22} strokeWidth={1.5} />
      </div>
    </div>
    <h3 className="heading-lg" style={{ fontSize: '1.1rem' }}>{title}</h3>
    <p className="body" style={{ fontSize: '0.9rem' }}>{description}</p>
  </div>
);

interface StatItemProps {
  value: string;
  label: string;
}

export const StatItem = ({ value, label }: StatItemProps) => (
  <div className="stat-item" style={{ textAlign: 'center' }}>
    <div className="stat-value">{value}</div>
    <div className="stat-label">{label}</div>
  </div>
);

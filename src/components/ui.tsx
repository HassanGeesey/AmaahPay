import { motion } from 'framer-motion';
import React from 'react';

export const AnimatedBg = () => (
  <div className="animated-bg" />
);

export const FloatingShape = ({ className }: { className: string }) => (
  <motion.div
    className={`floating-shape ${className}`}
    animate={{
      scale: [1, 1.1, 0.9, 1],
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  />
);

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const GlassCard = ({ children, className = '', style }: GlassCardProps) => (
  <motion.div
    className={`glass-card ${className}`}
    style={style}
    whileHover={{ y: -8 }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
  >
    {children}
  </motion.div>
);

export const FeatureIcon = ({ icon: Icon, gradient }: { icon: React.ElementType; gradient: string }) => (
  <motion.div
    className="feature-icon"
    style={{
      background: gradient,
    }}
    whileHover={{ scale: 1.1, rotate: 5 }}
    transition={{ type: "spring", stiffness: 400, damping: 10 }}
  >
    <Icon size={28} color="white" />
  </motion.div>
);

export const DownloadCard = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    className="download-card"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  >
    {children}
  </motion.div>
);

export const PhoneMockup = () => (
  <motion.div
    className="phone-mockup"
    initial={{ opacity: 0, x: 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay: 0.2 }}
  >
    <div className="phone-screen">
      <div className="phone-notch" />
      <div style={{ padding: '50px 20px 20px', height: '100%', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div style={{ height: '40px', background: 'linear-gradient(135deg, #ff6b35, #ffb347)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 600, fontSize: '14px' }}>
          Total Sales Today
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
          <div style={{ background: 'rgba(255,255,255,0.1)', padding: '16px', borderRadius: '16px', textAlign: 'center' }}>
            <div style={{ fontSize: '12px', opacity: 0.7 }}>Products</div>
            <div style={{ fontSize: '24px', fontWeight: 700 }}>24</div>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.1)', padding: '16px', borderRadius: '16px', textAlign: 'center' }}>
            <div style={{ fontSize: '12px', opacity: 0.7 }}>Customers</div>
            <div style={{ fontSize: '24px', fontWeight: 700 }}>18</div>
          </div>
        </div>
        <div style={{ flex: 1, background: 'rgba(255,255,255,0.08)', borderRadius: '16px', padding: '16px' }}>
          <div style={{ fontSize: '12px', opacity: 0.7, marginBottom: '8px' }}>Recent Transactions</div>
          {[1, 2, 3].map((i) => (
            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: i === 1 ? '#7dd3c0' : i === 2 ? '#ffb347' : '#ff7f7f', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px' }}>
                  {i === 1 ? 'M' : i === 2 ? 'A' : 'S'}
                </div>
                <div>
                  <div style={{ fontSize: '13px', fontWeight: 500 }}>{i === 1 ? 'Mohamed' : i === 2 ? 'Ayaan' : 'Samira'}</div>
                  <div style={{ fontSize: '11px', opacity: 0.6 }}>{i === 1 ? '3 items' : i === 2 ? '1 item' : '5 items'}</div>
                </div>
              </div>
              <div style={{ fontWeight: 600, color: '#7dd3c0' }}>
                +${(i * 15 + 5).toFixed(2)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </motion.div>
);

import { motion } from 'framer-motion';
import { Download, Users, Wifi, TrendingUp, Shield, Smartphone, ChevronRight, Star, Zap, ShieldCheck } from 'lucide-react';
import { Card, FeatureIcon, PhoneMockup } from './ui';

export const Hero = () => (
  <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
    {/* Background Glow */}
    <div className="bg-glow" />
    
    {/* Floating Cards */}
    <motion.div 
      className="float-card"
      style={{ top: '15%', left: '5%', display: 'none' }}
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5, duration: 0.8 }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div style={{ 
          width: '40px', 
          height: '40px', 
          borderRadius: '50%', 
          background: 'linear-gradient(135deg, #ff6b35, #f7931e)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <Star size={20} color="white" />
        </div>
        <div>
          <div style={{ fontSize: '0.875rem', fontWeight: 600 }}>4.9 Rating</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>2,000+ reviews</div>
        </div>
      </div>
    </motion.div>

    <motion.div 
      className="float-card"
      style={{ top: '25%', right: '8%', display: 'none' }}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.7, duration: 0.8 }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div style={{ 
          width: '40px', 
          height: '40px', 
          borderRadius: '50%', 
          background: 'linear-gradient(135deg, #10b981, #059669)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <Zap size={20} color="white" />
        </div>
        <div>
          <div style={{ fontSize: '0.875rem', fontWeight: 600 }}>Lightning Fast</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>&lt; 1s response</div>
        </div>
      </div>
    </motion.div>
    
    <div className="container" style={{ position: 'relative', zIndex: 1 }}>
      <motion.div
        style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div 
          className="badge badge-blue" 
          style={{ marginBottom: '32px' }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <span style={{ 
            width: '8px', 
            height: '8px', 
            background: '#1D2CF3', 
            borderRadius: '50%',
            boxShadow: '0 0 10px #1D2CF3'
          }} />
          Somalia's #1 Shop Management App
        </motion.div>
        
        <h1 className="heading-xl" style={{ marginBottom: '24px' }}>
          Run Your Shop
          <br />
          <span style={{ color: 'var(--accent-blue)' }}>Like a Pro</span>
        </h1>
        
        <p style={{ 
          fontSize: '1.25rem', 
          color: 'var(--text-secondary)', 
          marginBottom: '40px',
          maxWidth: '600px',
          margin: '0 auto 40px',
          lineHeight: 1.7
        }}>
          Track sales, manage customers, and grow your business with the app 
          trusted by thousands of Somali merchants.
        </p>
        
        <div style={{ 
          display: 'flex', 
          gap: '16px', 
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          <motion.a
            href="/app-debug.apk"
            download
            className="btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Download size={20} />
            Download APK
            <ChevronRight size={18} />
          </motion.a>
          
          <motion.a
            href="#features"
            className="btn-secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Learn More
          </motion.a>
        </div>
      </motion.div>
      
      {/* Phone Mockup */}
      <motion.div
        style={{ 
          display: 'flex', 
          justifyContent: 'center',
          marginTop: '80px'
        }}
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <PhoneMockup />
      </motion.div>
    </div>
  </section>
);

export const Features = () => (
  <section id="features" style={{ background: 'var(--bg-secondary)' }}>
    <div className="container">
      <motion.div
        style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 80px' }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="heading-lg" style={{ marginBottom: '16px' }}>
          Everything You Need
        </h2>
        <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)' }}>
          Powerful features designed specifically for Somali small businesses
        </p>
      </motion.div>
      
      <div className="grid-3">
        {[
          {
            icon: TrendingUp,
            title: 'Track Sales',
            description: 'Monitor daily revenue, view transaction history, and analyze your best-selling products in real-time.',
          },
          {
            icon: Users,
            title: 'Manage Customers',
            description: 'Keep customer records, track credit, and build lasting relationships with detailed profiles.',
          },
          {
            icon: Wifi,
            title: 'Works Offline',
            description: 'No internet? No problem. All features work offline and sync when you reconnect.',
          },
          {
            icon: Shield,
            title: 'Secure Data',
            description: 'Your business data is encrypted and backed up automatically to keep it safe.',
          },
          {
            icon: Smartphone,
            title: 'Mobile First',
            description: 'Designed for mobile from the ground up with an intuitive touch interface.',
          },
          {
            icon: Download,
            title: 'Free Forever',
            description: 'No hidden fees, no subscriptions. AmaahPay is completely free to use forever.',
          },
        ].map((feature, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            <Card>
              <FeatureIcon icon={feature.icon} />
              <h3 className="heading-md" style={{ marginBottom: '12px' }}>{feature.title}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.7 }}>
                {feature.description}
              </p>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export const Stats = () => (
  <section style={{ padding: '80px 0', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
    <div className="container">
      <motion.div
        style={{ 
          display: 'flex', 
          justifyContent: 'center',
          gap: '100px',
          flexWrap: 'wrap',
          textAlign: 'center'
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {[
          { value: '10K+', label: 'Downloads' },
          { value: '5K+', label: 'Active Users' },
          { value: '50M+', label: 'Transactions' },
        ].map((stat, i) => (
          <div key={i}>
            <div className="stat-value" style={{ color: 'var(--accent-blue)' }}>{stat.value}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export const DownloadSection = () => (
  <section style={{ position: 'relative', overflow: 'hidden' }}>
    {/* Background Glow */}
    <div style={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '600px',
      height: '600px',
      background: 'radial-gradient(circle, rgba(29, 44, 243, 0.2) 0%, transparent 70%)',
      pointerEvents: 'none'
    }} />
    
    <div className="container" style={{ position: 'relative', zIndex: 1 }}>
      <motion.div
        style={{ 
          textAlign: 'center', 
          maxWidth: '600px', 
          margin: '0 auto',
          background: 'var(--bg-card)',
          borderRadius: 'var(--radius-xl)',
          padding: '64px 48px',
          border: '1px solid var(--border)'
        }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div style={{
          width: '64px',
          height: '64px',
          borderRadius: '50%',
          background: 'var(--accent-blue)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 24px',
          boxShadow: '0 0 40px rgba(29, 44, 243, 0.4)'
        }}>
          <Download size={28} color="white" />
        </div>
        
        <h2 className="heading-lg" style={{ marginBottom: '16px' }}>
          Ready to Get Started?
        </h2>
        <p style={{ 
          fontSize: '1.125rem', 
          color: 'var(--text-secondary)',
          marginBottom: '32px'
        }}>
          Download AmaahPay today and join thousands of Somali merchants 
          managing their shops smarter.
        </p>
        
        <motion.a
          href="/app-debug.apk"
          download
          className="btn-primary"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          style={{ padding: '16px 36px', fontSize: '1.1rem' }}
        >
          <Download size={20} />
          Download APK
          <ChevronRight size={20} />
        </motion.a>
        
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '32px',
          marginTop: '40px',
          color: 'var(--text-muted)',
          fontSize: '0.9rem',
          flexWrap: 'wrap'
        }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <ShieldCheck size={16} /> Free Forever
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Wifi size={16} /> Works Offline
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Users size={16} /> No Sign-up
          </span>
        </div>
      </motion.div>
    </div>
  </section>
);

export const Footer = () => (
  <footer style={{ 
    background: 'var(--bg-primary)', 
    borderTop: '1px solid var(--border)',
    padding: '48px 0'
  }}>
    <div className="container">
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '24px'
      }}>
        <div>
          <div style={{ 
            fontSize: '1.25rem', 
            fontWeight: 700,
            marginBottom: '4px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <span style={{
              width: '28px',
              height: '28px',
              borderRadius: '6px',
              background: 'var(--accent-blue)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <TrendingUp size={16} color="white" />
            </span>
            AmaahPay
          </div>
          <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
            Shop management for Somali merchants
          </p>
        </div>
        
        <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
          © 2026 AmaahPay. All rights reserved.
        </div>
      </div>
    </div>
  </footer>
);

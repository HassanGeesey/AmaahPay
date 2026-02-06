import { motion } from 'framer-motion';
import { Download, Users, Wifi, TrendingUp, Shield, Smartphone, ChevronRight, ShieldCheck } from 'lucide-react';
import { Card, FeatureIcon, PhoneMockup } from './ui';


export const Hero = () => (
  <section style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden', paddingTop: '20px' }}>
      {/* Background Glow */}
      <div className="bg-glow" />
      
      {/* Mobile Navigation */}
      <div className="mobile-nav">
        <motion.a
          href="/app-debug.zip"
          download
          className="btn-primary"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          style={{ width: '100%', maxWidth: 'none' }}
        >
          <Download size={20} />
          Download APK
        </motion.a>
      </div>
      
      <div className="container" style={{ position: 'relative', zIndex: 1, flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <motion.div
          style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="badge" 
            style={{ marginBottom: '24px' }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <span style={{ 
              width: '6px', 
              height: '6px', 
              background: 'var(--accent-blue)', 
              borderRadius: '50%',
              boxShadow: '0 0 8px var(--accent-blue)'
            }} />
            Somalia's #1 Shop Management
          </motion.div>
          
          <h1 className="heading-xl" style={{ marginBottom: '20px' }}>
            Run Your Shop
            <br />
            <span style={{ color: 'var(--accent-blue)' }}>Like a Pro</span>
          </h1>
          
          <p style={{ 
            fontSize: 'clamp(1rem, 4vw, 1.25rem)', 
            color: 'var(--text-secondary)', 
            marginBottom: '32px',
            maxWidth: '560px',
            margin: '0 auto 32px',
            lineHeight: 1.6,
            padding: '0 10px'
          }}>
            Track sales, manage customers, and grow your business with the app 
            trusted by thousands of Somali merchants.
          </p>
          
          <div style={{ 
            display: 'flex', 
            gap: '12px', 
            justifyContent: 'center',
            flexWrap: 'wrap',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            <motion.a
              href="/app-debug.zip"
              download="AmaahPay.apk"
              className="btn-primary hide-mobile"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Download size={20} />
              Download APK
              <ChevronRight size={18} />
            </motion.a>
            
            <motion.a
              href="#features"
              className="btn-text hide-mobile"
              whileHover={{ x: 4 }}
            >
              Learn more
              <ChevronRight size={16} />
            </motion.a>
          </div>
        </motion.div>
        
        {/* Phone Mockup */}
        <motion.div
          style={{ 
            display: 'flex', 
            justifyContent: 'center',
            marginTop: '40px'
          }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <PhoneMockup />
        </motion.div>
      </div>
    </section>
);

export const Features = () => (
  <section id="features" style={{ background: 'var(--bg-secondary)', paddingTop: '60px' }}>
    <div className="container">
      <motion.div
        style={{ textAlign: 'center', maxWidth: '560px', margin: '0 auto 48px' }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="heading-lg" style={{ marginBottom: '12px' }}>
          Everything You Need
        </h2>
        <p style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>
          Powerful features for Somali businesses
        </p>
      </motion.div>
      
      <div className="grid-3">
        {[
          {
            icon: TrendingUp,
            title: 'Track Sales',
            description: 'Monitor daily revenue and analyze best-selling products.',
          },
          {
            icon: Users,
            title: 'Customers',
            description: 'Manage customer records and track credit.',
          },
          {
            icon: Wifi,
            title: 'Offline Mode',
            description: 'Works without internet and syncs when connected.',
          },
          {
            icon: Shield,
            title: 'Secure',
            description: 'Encrypted data with automatic backups.',
          },
          {
            icon: Smartphone,
            title: 'Mobile First',
            description: 'Designed for mobile with touch interface.',
          },
          {
            icon: Download,
            title: 'Free Forever',
            description: 'No fees, no subscriptions. Completely free.',
          },
        ].map((feature, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            <Card>
              <FeatureIcon icon={feature.icon} />
              <h3 className="heading-md" style={{ marginBottom: '8px' }}>{feature.title}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>
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
  <section style={{ padding: '60px 0', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
    <div className="container">
      <motion.div
        style={{ 
          display: 'flex', 
          justifyContent: 'center',
          gap: 'clamp(40px, 10vw, 80px)',
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
            <div className="stat-value">{stat.value}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export const DownloadSection = () => (
  <section style={{ position: 'relative', overflow: 'hidden', paddingBottom: '100px' }}>
    {/* Background Glow */}
    <div style={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '100%',
      maxWidth: '500px',
      height: '400px',
      background: 'radial-gradient(circle, rgba(37, 99, 235, 0.15) 0%, transparent 70%)',
      pointerEvents: 'none'
    }} />
    
    <div className="container" style={{ position: 'relative', zIndex: 1 }}>
      <motion.div
        className="download-card mx-auto"
        style={{ maxWidth: '560px' }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div style={{
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          background: 'var(--accent-blue)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 20px',
          boxShadow: '0 0 30px rgba(37, 99, 235, 0.4)'
        }}>
          <Download size={24} color="white" />
        </div>
        
        <h2 className="heading-lg" style={{ marginBottom: '12px', textAlign: 'center' }}>
          Ready to Get Started?
        </h2>
        <p style={{ 
          fontSize: '1rem', 
          color: 'var(--text-secondary)',
          marginBottom: '28px',
          textAlign: 'center'
        }}>
          Download AmaahPay and join thousands of Somali merchants.
        </p>
        
        <motion.a
          href="/app-debug.zip"
          download="AmaahPay.apk"
          className="btn-primary mx-auto"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          style={{ display: 'flex' }}
        >
          <Download size={20} />
          Download APK
          <ChevronRight size={20} />
        </motion.a>
        
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '24px',
          marginTop: '28px',
          color: 'var(--text-muted)',
          fontSize: '0.85rem',
          flexWrap: 'wrap'
        }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <ShieldCheck size={14} /> Free Forever
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Wifi size={14} /> Offline Mode
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
    padding: '32px 0',
    marginBottom: '60px'
  }}>
    <div className="container">
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column',
        alignItems: 'center',
        gap: '12px',
        textAlign: 'center'
      }}>
        <div style={{ 
          fontSize: '1.1rem', 
          fontWeight: 700,
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          <span style={{
            width: '24px',
            height: '24px',
            borderRadius: '6px',
            background: 'var(--accent-blue)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <TrendingUp size={14} color="white" />
          </span>
          AmaahPay
        </div>
        <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
          Shop management for Somali merchants
        </p>
        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '8px' }}>
          © 2026 AmaahPay. All rights reserved.
        </div>
      </div>
    </div>
  </footer>
);

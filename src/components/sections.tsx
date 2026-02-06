import { motion } from 'framer-motion';
import { Download, Users, Wifi, TrendingUp, Shield, Smartphone, ArrowRight } from 'lucide-react';
import { Card, FeatureItem, StatItem } from './ui';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const Hero = () => (
  <section style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', paddingTop: 'var(--space-xl)' }}>
    {/* Mobile Nav */}
    <div className="mobile-nav">
      <motion.a
        href="/app-debug.zip"
        download
        className="btn btn-primary"
        style={{ width: '100%' }}
        whileTap={{ scale: 0.98 }}
      >
        <Download size={18} />
        Download
      </motion.a>
    </div>

    <div className="container" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      {/* Logo & Badge */}
      <motion.div
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-md)', marginBottom: 'var(--space-xl)' }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img 
          src="/app_icon.png" 
          alt="AmaahPay" 
          className="app-icon"
        />
        <span className="caption" style={{ color: 'var(--accent)' }}>
          Somalia's #1 Shop Management
        </span>
      </motion.div>

      {/* Main Headline */}
      <motion.div
        style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        <h1 className="display-xl" style={{ marginBottom: 'var(--space-md)' }}>
          Run Your Shop
          <br />
          <span style={{ color: 'var(--accent)' }}>Like a Pro</span>
        </h1>
        
        <p className="body-lg" style={{ maxWidth: '600px', margin: '0 auto var(--space-lg)' }}>
          Track sales, manage customers, and grow your business with the app 
          trusted by thousands of Somali merchants.
        </p>

        <div style={{ 
          display: 'flex', 
          gap: 'var(--space-sm)', 
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          <motion.a
            href="/app-debug.zip"
            download="AmaahPay.apk"
            className="btn btn-primary hide-mobile"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Download size={18} />
            Download APK
            <ArrowRight size={18} />
          </motion.a>

          <motion.a
            href="#features"
            className="btn btn-ghost hide-mobile"
            whileHover={{ x: 4 }}
          >
            Explore Features
            <ArrowRight size={16} />
          </motion.a>
        </div>
      </motion.div>

      {/* Stats Row */}
      <motion.div
        style={{ 
          display: 'flex', 
          justifyContent: 'center',
          gap: 'clamp(2rem, 8vw, 6rem)',
          marginTop: 'var(--space-2xl)',
          flexWrap: 'wrap'
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <StatItem value="10K+" label="Downloads" />
        <StatItem value="5K+" label="Active Users" />
        <StatItem value="50M+" label="Transactions" />
      </motion.div>
    </div>
  </section>
);

export const Features = () => (
  <section id="features" style={{ background: 'var(--bg-secondary)' }}>
    <div className="container">
      {/* Section Header */}
      <motion.div
        style={{ maxWidth: '600px', marginBottom: 'var(--space-xl)' }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="caption" style={{ color: 'var(--accent)', marginBottom: 'var(--space-sm)', display: 'block' }}>
          Features
        </span>
        <h2 className="display-lg" style={{ marginBottom: 'var(--space-sm)' }}>
          Everything you need
        </h2>
        <p className="body">
          Powerful tools designed specifically for Somali small businesses.
        </p>
      </motion.div>

      {/* Features Grid */}
      <motion.div 
        className="grid-3"
        variants={stagger}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        {[
          { num: '01', icon: TrendingUp, title: 'Track Sales', desc: 'Monitor daily revenue and analyze your best-selling products.' },
          { num: '02', icon: Users, title: 'Manage Customers', desc: 'Keep records, track credit, and build customer relationships.' },
          { num: '03', icon: Wifi, title: 'Works Offline', desc: 'All features work without internet and sync when connected.' },
          { num: '04', icon: Shield, title: 'Secure Data', desc: 'Encrypted storage with automatic backups.' },
          { num: '05', icon: Smartphone, title: 'Mobile First', desc: 'Designed for mobile with intuitive touch interface.' },
          { num: '06', icon: Download, title: 'Free Forever', desc: 'No fees, no subscriptions. Completely free.' },
        ].map((feature, i) => (
          <motion.div key={i} variants={fadeIn}>
            <Card>
              <FeatureItem 
                number={feature.num}
                icon={feature.icon}
                title={feature.title}
                description={feature.desc}
              />
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export const DownloadSection = () => (
  <section style={{ position: 'relative' }}>
    <div className="container">
      <motion.div
        style={{ 
          background: 'var(--bg-elevated)',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius-lg)',
          padding: 'clamp(2rem, 5vw, 4rem)',
          textAlign: 'center',
          maxWidth: '700px',
          margin: '0 auto'
        }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <img 
          src="/app_icon.png" 
          alt="AmaahPay" 
          className="app-icon"
          style={{ marginBottom: 'var(--space-md)' }}
        />
        
        <h2 className="display-lg" style={{ marginBottom: 'var(--space-sm)' }}>
          Ready to get started?
        </h2>
        
        <p className="body" style={{ marginBottom: 'var(--space-lg)', maxWidth: '450px', margin: '0 auto var(--space-lg)' }}>
          Join thousands of Somali merchants managing their shops smarter.
        </p>

        <motion.a
          href="/app-debug.zip"
          download="AmaahPay.apk"
          className="btn btn-primary"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Download size={20} />
          Download APK
          <ArrowRight size={20} />
        </motion.a>

        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: 'var(--space-lg)',
          marginTop: 'var(--space-lg)',
          flexWrap: 'wrap'
        }}>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Shield size={14} /> Free Forever
          </span>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Wifi size={14} /> Works Offline
          </span>
        </div>
      </motion.div>
    </div>
  </section>
);

export const Footer = () => (
  <footer style={{ 
    borderTop: '1px solid var(--border)',
    padding: 'var(--space-lg) 0',
    marginBottom: '60px'
  }}>
    <div className="container">
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column',
        alignItems: 'center',
        gap: 'var(--space-sm)',
        textAlign: 'center'
      }}>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '0.75rem',
          fontWeight: 700,
          fontSize: '1.1rem'
        }}>
          <img src="/app_icon.png" alt="" style={{ width: '24px', height: '24px', borderRadius: '4px' }} />
          AmaahPay
        </div>
        <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
          Shop management for Somali merchants
        </p>
        <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
          © 2026 AmaahPay
        </p>
      </div>
    </div>
  </footer>
);

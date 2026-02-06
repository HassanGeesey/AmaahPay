import { motion } from 'framer-motion';
import { Download, Users, Wifi, TrendingUp, Shield, Smartphone, ChevronRight } from 'lucide-react';
import { Card, FeatureIcon, PhoneMockup } from './ui';

export const Hero = () => (
  <section style={{ minHeight: '85vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <div className="container">
      <motion.div
        style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="badge badge-purple" style={{ marginBottom: '32px' }}>
          Somalia's #1 Shop Management
        </div>
        
        <h1 className="heading-xl" style={{ marginBottom: '24px' }}>
          The easiest way to
          <br />
          manage your shop
        </h1>
        
        <p style={{ 
          fontSize: '1.25rem', 
          color: 'var(--text-secondary)', 
          marginBottom: '40px',
          maxWidth: '560px',
          margin: '0 auto 40px'
        }}>
          Track sales, manage customers, and grow your business with the app trusted by thousands of Somali merchants.
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
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Download APK
            <ChevronRight size={18} />
          </motion.a>
          
          <motion.a
            href="#features"
            className="btn-text"
            whileHover={{ x: 4 }}
          >
            Learn more
            <ChevronRight size={16} />
          </motion.a>
        </div>
      </motion.div>
      
      {/* Phone Mockup Below */}
      <motion.div
        style={{ 
          display: 'flex', 
          justifyContent: 'center',
          marginTop: '60px'
        }}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
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
        style={{ textAlign: 'center', maxWidth: '560px', margin: '0 auto 64px' }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="heading-lg" style={{ marginBottom: '16px' }}>
          Everything you need
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
            description: 'Monitor daily revenue, view transaction history, and analyze your best-selling products.',
          },
          {
            icon: Users,
            title: 'Manage Customers',
            description: 'Keep customer records, track credit, and build relationships with detailed profiles.',
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
            description: 'No hidden fees, no subscriptions. AmaahPay is completely free to use.',
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
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6 }}>
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
  <section style={{ padding: '60px 0' }}>
    <div className="container">
      <motion.div
        style={{ 
          display: 'flex', 
          justifyContent: 'center',
          gap: '80px',
          flexWrap: 'wrap',
          textAlign: 'center'
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
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
  <section style={{ background: 'var(--bg-secondary)' }}>
    <div className="container">
      <motion.div
        style={{ textAlign: 'center', maxWidth: '560px', margin: '0 auto' }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="heading-lg" style={{ marginBottom: '16px' }}>
          Ready to get started?
        </h2>
        <p style={{ 
          fontSize: '1.125rem', 
          color: 'var(--text-secondary)',
          marginBottom: '32px'
        }}>
          Download AmaahPay today and join thousands of Somali merchants managing their shops smarter.
        </p>
        
        <motion.a
          href="/app-debug.apk"
          download
          className="btn-primary"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          style={{ padding: '14px 32px', fontSize: '1rem' }}
        >
          <Download size={18} />
          Download APK
          <ChevronRight size={18} />
        </motion.a>
        
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '24px',
          marginTop: '32px',
          color: 'var(--text-muted)',
          fontSize: '0.875rem'
        }}>
          <span>Free Forever</span>
          <span>•</span>
          <span>Works Offline</span>
          <span>•</span>
          <span>No Sign-up</span>
        </div>
      </motion.div>
    </div>
  </section>
);

export const Footer = () => (
  <footer style={{ 
    background: 'var(--bg-primary)', 
    borderTop: '1px solid var(--border)',
    padding: '40px 0'
  }}>
    <div className="container">
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '16px'
      }}>
        <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
          <strong style={{ color: 'var(--text-primary)' }}>AmaahPay</strong> — Shop management for Somali merchants
        </div>
        
        <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
          © 2026 AmaahPay
        </div>
      </div>
    </div>
  </footer>
);

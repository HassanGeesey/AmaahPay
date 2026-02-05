import { motion } from 'framer-motion';
import { Users, Server, Download, TrendingUp, CreditCard } from 'lucide-react';
import { GlassCard, FeatureIcon, DownloadCard, PhoneMockup } from './ui';

export const Hero = () => (
  <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
    <div className="container">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255, 107, 53, 0.15)', padding: '8px 16px', borderRadius: '50px', marginBottom: '24px' }}
          >
            <span style={{ width: '8px', height: '8px', background: '#ff6b35', borderRadius: '50%', animation: 'pulse 2s infinite' }} />
            <span style={{ fontSize: '14px', fontWeight: 500, color: '#ff6b35' }}>Somalia's #1 Shop Management</span>
          </motion.div>
          
          <h1 className="heading-xl" style={{ marginBottom: '24px' }}>
            Run Your Shop <br />
            <span className="text-gradient">Like a Pro</span>
          </h1>
          
          <p style={{ fontSize: '1.25rem', opacity: 0.8, marginBottom: '40px', maxWidth: '500px' }}>
            Track sales, manage customers, and grow your business with the app trusted by Somali merchants.
          </p>
          
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <motion.a
              href="/app-debug.apk"
              download
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '12px' }}
            >
              <Download size={20} />
              Download APK
              <span style={{ fontSize: '12px', opacity: 0.8 }}>11.8 MB</span>
            </motion.a>
          </div>
          
          <motion.div
            style={{ display: 'flex', gap: '40px', marginTop: '60px' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {[
              { value: '10K+', label: 'Downloads' },
              { value: '5K+', label: 'Active Users' },
              { value: '50M+', label: 'Transactions' },
            ].map((stat, i) => (
              <div key={i}>
                <div style={{ fontSize: '2rem', fontWeight: 700, color: '#ff6b35' }}>{stat.value}</div>
                <div style={{ fontSize: '14px', opacity: 0.6 }}>{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <PhoneMockup />
        </motion.div>
      </div>
    </div>
  </section>
);

export const About = () => (
  <section id="about">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{ textAlign: 'center', marginBottom: '80px' }}
      >
        <h2 className="heading-lg" style={{ marginBottom: '24px' }}>
          Everything You Need to <span className="text-gradient">Succeed</span>
        </h2>
        <p style={{ fontSize: '1.2rem', opacity: 0.7, maxWidth: '600px', margin: '0 auto' }}>
          Powerful features designed specifically for Somali small businesses
        </p>
      </motion.div>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '32px' }}>
        {[
          {
            icon: TrendingUp,
            gradient: 'linear-gradient(135deg, #ff6b35, #ffb347)',
            title: 'Track Sales in Real-Time',
            description: 'Monitor daily revenue, view transaction history, and analyze your best-selling products instantly.',
          },
          {
            icon: Users,
            gradient: 'linear-gradient(135deg, #7dd3c0, #34d399)',
            title: 'Manage Customers',
            description: 'Keep customer records, track credit, and build relationships with loyalty programs.',
          },
          {
            icon: Server,
            gradient: 'linear-gradient(135deg, #818cf8, #6366f1)',
            title: 'Works Offline',
            description: 'No internet? No problem. All features work offline and sync when you reconnect.',
          },
        ].map((feature, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
          >
            <GlassCard style={{ padding: '40px', height: '100%' }}>
              <FeatureIcon icon={feature.icon} gradient={feature.gradient} />
              <h3 className="heading-md" style={{ marginBottom: '16px' }}>{feature.title}</h3>
              <p style={{ opacity: 0.7, lineHeight: 1.7 }}>{feature.description}</p>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export const DownloadSection = () => (
  <section id="download">
    <div className="container">
      <DownloadCard>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading-lg" style={{ marginBottom: '16px' }}>
            Get Started with <span className="text-gradient">AmaahPay</span>
          </h2>
          <p style={{ fontSize: '1.1rem', opacity: 0.8, marginBottom: '40px' }}>
            Download the APK and start managing your shop today
          </p>
          
          <div style={{ display: 'flex', gap: '32px', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
            <motion.a
              href="/app-debug.apk"
              download
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              style={{ padding: '24px 48px', fontSize: '1.2rem' }}
            >
              <Download size={24} />
              Download APK
            </motion.a>
            
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '120px', height: '120px', background: 'white', borderRadius: '16px', padding: '10px' }}>
                <svg viewBox="0 0 100 100" style={{ width: '100%', height: '100%' }}>
                  <rect fill="#0a0f1e" width="100" height="100" rx="8" />
                  <text x="50" y="55" textAnchor="middle" fill="white" fontSize="10" fontFamily="monospace">SCAN ME</text>
                  <path d="M15 15h20v5H15zM15 25h20v5H15zM15 35h20v5H15zM15 45h5v20h-5zM35 45h5v20h-5zM50 15h5v5h-5zM60 15h5v5h-5zM50 25h5v5h-5zM60 25h5v5h-5zM70 15h15v15h-15z" fill="white" />
                </svg>
              </div>
              <span style={{ fontSize: '14px', opacity: 0.6 }}>Scan to download</span>
            </div>
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: '32px', marginTop: '48px', flexWrap: 'wrap' }}>
            {[
              { icon: Download, text: 'Free Forever' },
              { icon: Server, text: 'Offline Mode' },
              { icon: CreditCard, text: 'No Card Required' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', opacity: 0.7 }}>
                <item.icon size={18} />
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </DownloadCard>
    </div>
  </section>
);

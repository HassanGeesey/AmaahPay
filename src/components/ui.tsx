import { motion } from 'framer-motion';
import React from 'react';
import { TrendingUp, Users, CreditCard, ShoppingCart } from 'lucide-react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card = ({ children, className = '' }: CardProps) => (
  <motion.div
    className={`card ${className}`}
    whileHover={{ y: -4 }}
    transition={{ type: "spring", stiffness: 400, damping: 25 }}
  >
    {children}
  </motion.div>
);

interface FeatureIconProps {
  icon: React.ElementType;
}

export const FeatureIcon = ({ icon: Icon }: FeatureIconProps) => (
  <div className="feature-icon">
    <Icon size={24} strokeWidth={1.5} />
  </div>
);

export const PhoneMockup = () => (
  <motion.div
    className="phone-mockup"
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.4 }}
  >
    <div className="phone-screen">
      <div className="phone-notch" />
      
      {/* Header */}
      <div style={{ 
        background: 'var(--accent-blue)', 
        borderRadius: '16px',
        padding: '20px',
        color: 'white',
        boxShadow: '0 4px 20px rgba(29, 44, 243, 0.3)'
      }}>
        <div style={{ fontSize: '0.75rem', opacity: 0.8, marginBottom: '4px' }}>
          Today's Sales
        </div>
        <div style={{ fontSize: '1.75rem', fontWeight: 700 }}>
          $2,450.00
        </div>
      </div>
      
      {/* Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
        <div style={{ 
          background: 'var(--bg-card)', 
          borderRadius: '12px',
          padding: '16px',
          border: '1px solid var(--border)'
        }}>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '4px' }}>Products</div>
          <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-primary)' }}>24</div>
        </div>
        <div style={{ 
          background: 'var(--bg-card)', 
          borderRadius: '12px',
          padding: '16px',
          border: '1px solid var(--border)'
        }}>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '4px' }}>Customers</div>
          <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-primary)' }}>18</div>
        </div>
      </div>
      
      {/* Transactions */}
      <div style={{ 
        flex: 1,
        background: 'var(--bg-card)', 
        borderRadius: '16px',
        padding: '16px',
        border: '1px solid var(--border)'
      }}>
        <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '12px' }}>
          Recent Sales
        </div>
        
        {[
          { name: 'Mohamed', items: 3, amount: 45 },
          { name: 'Ayaan', items: 1, amount: 20 },
          { name: 'Samira', items: 5, amount: 75 },
        ].map((tx, i) => (
          <div key={i} style={{ 
            display: 'flex', 
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '10px 0',
            borderBottom: i < 2 ? '1px solid var(--border)' : 'none'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ 
                width: '32px', 
                height: '32px', 
                borderRadius: '50%',
                background: 'var(--bg-secondary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.75rem',
                fontWeight: 600,
                color: 'var(--text-primary)',
                border: '1px solid var(--border)'
              }}>
                {tx.name[0]}
              </div>
              <div>
                <div style={{ fontSize: '0.85rem', fontWeight: 500, color: 'var(--text-primary)' }}>
                  {tx.name}
                </div>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                  {tx.items} items
                </div>
              </div>
            </div>
            <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--accent-blue)' }}>
              +${tx.amount}
            </div>
          </div>
        ))}
      </div>
      
      {/* Nav */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-around',
        padding: '8px 0'
      }}>
        {[TrendingUp, Users, ShoppingCart, CreditCard].map((Icon, i) => (
          <div key={i} style={{ 
            color: i === 0 ? 'var(--accent-blue)' : 'var(--text-muted)'
          }}>
            <Icon size={20} strokeWidth={2} />
          </div>
        ))}
      </div>
    </div>
  </motion.div>
);

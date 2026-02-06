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
    whileHover={{ y: -2 }}
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
    <Icon size={22} strokeWidth={1.5} />
  </div>
);

export const PhoneMockup = () => (
  <motion.div
    className="phone-mockup"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.3 }}
  >
    <div className="phone-screen">
      <div className="phone-notch" />
      
      {/* Header */}
      <div style={{ 
        background: 'var(--text-primary)', 
        borderRadius: '10px',
        padding: '14px',
        color: 'white'
      }}>
        <div style={{ fontSize: '0.65rem', opacity: 0.7, marginBottom: '2px' }}>
          Today's Sales
        </div>
        <div style={{ fontSize: '1.3rem', fontWeight: 600 }}>
          $2,450.00
        </div>
      </div>
      
      {/* Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
        <div style={{ 
          background: 'white', 
          borderRadius: '8px',
          padding: '10px',
          border: '1px solid var(--border)'
        }}>
          <div style={{ fontSize: '0.6rem', color: 'var(--text-muted)' }}>Products</div>
          <div style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-primary)' }}>24</div>
        </div>
        <div style={{ 
          background: 'white', 
          borderRadius: '8px',
          padding: '10px',
          border: '1px solid var(--border)'
        }}>
          <div style={{ fontSize: '0.6rem', color: 'var(--text-muted)' }}>Customers</div>
          <div style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-primary)' }}>18</div>
        </div>
      </div>
      
      {/* Transactions */}
      <div style={{ 
        flex: 1,
        background: 'white', 
        borderRadius: '10px',
        padding: '10px',
        border: '1px solid var(--border)'
      }}>
        <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', marginBottom: '6px' }}>
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
            padding: '6px 0',
            borderBottom: i < 2 ? '1px solid var(--border-light)' : 'none'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ 
                width: '24px', 
                height: '24px', 
                borderRadius: '50%',
                background: 'var(--bg-secondary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.6rem',
                fontWeight: 600,
                color: 'var(--text-secondary)'
              }}>
                {tx.name[0]}
              </div>
              <div>
                <div style={{ fontSize: '0.7rem', fontWeight: 500, color: 'var(--text-primary)' }}>
                  {tx.name}
                </div>
                <div style={{ fontSize: '0.55rem', color: 'var(--text-muted)' }}>
                  {tx.items} items
                </div>
              </div>
            </div>
            <div style={{ fontSize: '0.7rem', fontWeight: 600, color: 'var(--accent-green)' }}>
              +${tx.amount}
            </div>
          </div>
        ))}
      </div>
      
      {/* Nav */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-around',
        padding: '4px 0'
      }}>
        {[TrendingUp, Users, ShoppingCart, CreditCard].map((Icon, i) => (
          <div key={i} style={{ 
            color: i === 0 ? 'var(--text-primary)' : 'var(--text-muted)'
          }}>
            <Icon size={16} strokeWidth={2} />
          </div>
        ))}
      </div>
    </div>
  </motion.div>
);

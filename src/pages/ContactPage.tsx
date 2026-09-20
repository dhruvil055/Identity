import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { SectionHeader } from '../components/common/SectionHeader';
import { Button } from '../components/common/Button';
import { RelatedBridge } from '../components/common/RelatedBridge';
import { Mail, MapPin, CheckCircle2, Clock } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const initialTier = searchParams.get('tier') || '';
  const initialIntent = searchParams.get('intent') || '';

  const [inquiryType, setInquiryType] = useState<string>(
    initialTier ? 'membership' : initialIntent === 'advisory' ? 'advisory' : 'general'
  );

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    location: '',
    currentTransition: '',
    preferredTier: initialTier || 'inner-circle',
    message: '',
  });

  const [submitted, setSubmitted] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (initialTier) {
      setInquiryType('membership');
      setFormData((prev) => ({ ...prev, preferredTier: initialTier }));
    } else if (initialIntent === 'advisory') {
      setInquiryType('advisory');
    }
  }, [initialTier, initialIntent]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate luxury asynchronous submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <main className="site-main page-contact">
      {/* 1. Hero */}
      <section
        style={{
          paddingTop: 'clamp(5rem, 8vw, 7.5rem)',
          paddingBottom: 'clamp(3.5rem, 5vw, 5rem)',
          backgroundColor: '#16191e',
          color: '#ffffff',
          position: 'relative',
        }}
      >
        <div className="identy-container">
          <Breadcrumb items={[{ label: 'Contact & Inquiries' }]} />

          <div style={{ maxWidth: '820px' }}>
            <span
              style={{
                display: 'inline-block',
                fontSize: '0.78rem',
                textTransform: 'uppercase',
                letterSpacing: '0.18em',
                fontWeight: 600,
                color: 'var(--color-brand-gold)',
                marginBottom: '1rem',
              }}
            >
              Direct Communications
            </span>

            <h1
              style={{
                color: '#ffffff',
                fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)',
                fontFamily: 'var(--font-heading)',
                lineHeight: 1.15,
                fontWeight: 400,
                marginBottom: '1.25rem',
              }}
            >
              Begin The Dialogue
            </h1>

            <p
              style={{
                fontSize: 'clamp(1.05rem, 1.8vw, 1.25rem)',
                lineHeight: 1.65,
                color: 'rgba(255, 255, 255, 0.82)',
                fontWeight: 300,
                margin: 0,
              }}
            >
              Whether inquiring about membership eligibility, private 1:1 advisory consultation, or brand partnerships, our team reviews each submission with care and confidentiality.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Contact Form & Details Section */}
      <section
        style={{
          paddingTop: 'clamp(4.5rem, 7vw, 6.5rem)',
          paddingBottom: 'clamp(4.5rem, 7vw, 6.5rem)',
          backgroundColor: '#faf8f5',
        }}
      >
        <div className="identy-container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: 'clamp(3rem, 6vw, 5rem)',
              alignItems: 'start',
            }}
          >
            {/* Left: Communication Channels & Notes */}
            <div>
              <SectionHeader
                eyebrow="Confidential Concierge"
                title="Dedicated Advisory Inquiries"
                subtitle="We prioritize discretion and intentionality. Expect a personal response from our concierge within 24 to 48 business hours."
              />

              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginTop: '2.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(181, 156, 103, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--color-brand-gold)',
                      flexShrink: 0,
                    }}
                  >
                    <Mail size={18} />
                  </div>
                  <div>
                    <span style={{ display: 'block', fontSize: '0.76rem', color: '#767d86', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600 }}>
                      General &amp; Member Concierge
                    </span>
                    <a
                      href="mailto:contact@i-denty.com"
                      style={{ fontSize: '1rem', fontWeight: 600, color: '#16191e', textDecoration: 'none' }}
                    >
                      contact@i-denty.com
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(181, 156, 103, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--color-brand-gold)',
                      flexShrink: 0,
                    }}
                  >
                    <MapPin size={18} />
                  </div>
                  <div>
                    <span style={{ display: 'block', fontSize: '0.76rem', color: '#767d86', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600 }}>
                      International Footprint
                    </span>
                    <p style={{ margin: '0.2rem 0 0 0', fontSize: '0.94rem', color: '#40454d', lineHeight: 1.5 }}>
                      Global Digital Headquarters • Operating Across Europe, Asia &amp; North America
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(181, 156, 103, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--color-brand-gold)',
                      flexShrink: 0,
                    }}
                  >
                    <Clock size={18} />
                  </div>
                  <div>
                    <span style={{ display: 'block', fontSize: '0.76rem', color: '#767d86', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600 }}>
                      Advisory Availability
                    </span>
                    <p style={{ margin: '0.2rem 0 0 0', fontSize: '0.94rem', color: '#40454d', lineHeight: 1.5 }}>
                      Founder 1:1 Advisory slots are currently scheduled across Q2/Q3 2026.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Interactive Form */}
            <div
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid rgba(0,0,0,0.08)',
                padding: 'clamp(2rem, 4vw, 3rem)',
                borderRadius: '2px',
                boxShadow: '0 12px 32px rgba(0,0,0,0.04)',
              }}
            >
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                  <div
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(181, 156, 103, 0.15)',
                      color: 'var(--color-brand-gold)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 1.5rem auto',
                    }}
                  >
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', color: '#16191e', marginBottom: '0.75rem' }}>
                    Inquiry Received
                  </h3>
                  <p style={{ fontSize: '0.98rem', lineHeight: 1.6, color: '#555b64', marginBottom: '2rem' }}>
                    Thank you, {formData.fullName}. Your submission regarding{' '}
                    <strong>
                      {inquiryType === 'membership'
                        ? 'Membership'
                        : inquiryType === 'advisory'
                        ? '1:1 Private Advisory'
                        : 'General Inquiries'}
                    </strong>{' '}
                    has been delivered to our concierge team. We will be in touch shortly.
                  </p>
                  <Button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: '',
                        email: '',
                        phone: '',
                        location: '',
                        currentTransition: '',
                        preferredTier: 'inner-circle',
                        message: '',
                      });
                    }}
                    variant="secondary"
                  >
                    Submit Another Inquiry
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  {/* Inquiry Tabs */}
                  <div style={{ marginBottom: '1.75rem' }}>
                    <span
                      style={{
                        display: 'block',
                        fontSize: '0.74rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.12em',
                        fontWeight: 600,
                        color: '#767d86',
                        marginBottom: '0.65rem',
                      }}
                    >
                      Nature of Inquiry
                    </span>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(110px, 1fr))', gap: '0.5rem' }}>
                      {[
                        { id: 'membership', label: 'Membership' },
                        { id: 'advisory', label: '1:1 Advisory' },
                        { id: 'partnership', label: 'Partnership' },
                        { id: 'general', label: 'General' },
                      ].map((tab) => {
                        const isSelected = inquiryType === tab.id;
                        return (
                          <button
                            key={tab.id}
                            type="button"
                            onClick={() => setInquiryType(tab.id)}
                            style={{
                              padding: '0.55rem 0.5rem',
                              fontSize: '0.8rem',
                              fontWeight: 600,
                              textAlign: 'center',
                              border: isSelected ? '1px solid #16191e' : '1px solid rgba(0,0,0,0.1)',
                              backgroundColor: isSelected ? '#16191e' : '#ffffff',
                              color: isSelected ? '#ffffff' : '#40454d',
                              borderRadius: '2px',
                              cursor: 'pointer',
                              transition: 'all 0.2s ease',
                            }}
                          >
                            {tab.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Form Inputs */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#16191e', marginBottom: '0.4rem' }}>
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Caroline Dubois"
                        style={{
                          width: '100%',
                          padding: '0.75rem 1rem',
                          fontSize: '0.94rem',
                          border: '1px solid rgba(0,0,0,0.15)',
                          borderRadius: '2px',
                          outline: 'none',
                        }}
                      />
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem' }}>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#16191e', marginBottom: '0.4rem' }}>
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="caroline@domain.com"
                          style={{
                            width: '100%',
                            padding: '0.75rem 1rem',
                            fontSize: '0.94rem',
                            border: '1px solid rgba(0,0,0,0.15)',
                            borderRadius: '2px',
                            outline: 'none',
                          }}
                        />
                      </div>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#16191e', marginBottom: '0.4rem' }}>
                          Location / City
                        </label>
                        <input
                          type="text"
                          value={formData.location}
                          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                          placeholder="e.g. Zurich / London"
                          style={{
                            width: '100%',
                            padding: '0.75rem 1rem',
                            fontSize: '0.94rem',
                            border: '1px solid rgba(0,0,0,0.15)',
                            borderRadius: '2px',
                            outline: 'none',
                          }}
                        />
                      </div>
                    </div>

                    {inquiryType === 'membership' && (
                      <div>
                        <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#16191e', marginBottom: '0.4rem' }}>
                          Target Membership Tier
                        </label>
                        <select
                          value={formData.preferredTier}
                          onChange={(e) => setFormData({ ...formData, preferredTier: e.target.value })}
                          style={{
                            width: '100%',
                            padding: '0.75rem 1rem',
                            fontSize: '0.94rem',
                            border: '1px solid rgba(0,0,0,0.15)',
                            borderRadius: '2px',
                            backgroundColor: '#ffffff',
                            outline: 'none',
                          }}
                        >
                          <option value="collective">The Collective ($19/mo)</option>
                          <option value="inner-circle">The Inner Circle ($49/mo) — Recommended</option>
                          <option value="private-member">Private Member ($129/mo)</option>
                        </select>
                      </div>
                    )}

                    <div>
                      <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#16191e', marginBottom: '0.4rem' }}>
                        Your Message / Transition Context *
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Please share a brief reflection on your current inflection point or what you wish to explore..."
                        style={{
                          width: '100%',
                          padding: '0.75rem 1rem',
                          fontSize: '0.94rem',
                          border: '1px solid rgba(0,0,0,0.15)',
                          borderRadius: '2px',
                          outline: 'none',
                          resize: 'vertical',
                        }}
                      />
                    </div>

                    <Button
                      type="submit"
                      variant="primary"
                      disabled={loading}
                      style={{ width: '100%', justifyContent: 'center', marginTop: '0.5rem' }}
                    >
                      {loading ? 'Submitting Inquiry...' : 'Submit Inquiry &rarr;'}
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 3. No Dead Ends Bridge */}
      <RelatedBridge
        currentContext="Contact & Inquiries"
        eyebrow="Explore In The Meantime"
        title="Discover The Core Philosophical Essays"
        description="While awaiting concierge response, immerse yourself in our founding essays on recalibration, spatial alignment, and wardrobe architecture."
        primaryAction={{
          label: 'Explore The Journal',
          href: '/journal',
        }}
        secondaryAction={{
          label: 'Explore The Reinvention Framework',
          href: '/framework',
        }}
      />
    </main>
  );
};

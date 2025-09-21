import { Button } from './ui/Button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/Card';
import { MapPin, MessageCircle, BarChart3, Smartphone, Users, Zap } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';
import type { PageType } from '../App';

interface LandingPageProps {
  onNavigate: (page: PageType) => void;
}

const styles = {
  hero: {
    background: 'linear-gradient(135deg, #1e40af 0%, #1e3a8a 50%, #10b981 100%)',
    color: 'white',
    padding: '3rem 1rem',
    textAlign: 'center' as const
  },
  heroTitle: {
    fontSize: '3rem',
    fontWeight: 'bold',
    marginBottom: '1rem'
  },
  heroSubtitle: {
    fontSize: '1.5rem',
    marginBottom: '2rem',
    opacity: 0.9
  },
  heroDescription: {
    fontSize: '1.125rem',
    marginBottom: '3rem',
    opacity: 0.8,
    maxWidth: '42rem',
    margin: '0 auto 3rem'
  },
  userTypeGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '1.5rem',
    maxWidth: '42rem',
    margin: '0 auto'
  },
  userTypeCard: {
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '1rem',
    cursor: 'pointer',
    transition: 'all 0.2s ease-in-out'
  },
  iconContainer: {
    width: '4rem',
    height: '4rem',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 1rem',
    transition: 'transform 0.2s ease-in-out'
  },
  featuresSection: {
    padding: '4rem 1rem',
    backgroundColor: '#ffffff'
  },
  featuresGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
    maxWidth: '72rem',
    margin: '0 auto'
  },
  featureCard: {
    textAlign: 'center' as const,
    padding: '2rem',
    boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'
  },
  featureIcon: {
    width: '3rem',
    height: '3rem',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 1rem'
  },
  ussdSection: {
    padding: '4rem 1rem',
    backgroundColor: '#f1f5f9',
    textAlign: 'center' as const
  },
  footer: {
    padding: '2rem 1rem',
    backgroundColor: '#1e293b',
    color: 'white',
    textAlign: 'center' as const
  },
  telkomBrand: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    marginBottom: '1rem'
  },
  telkomLogo: {
    width: '2rem',
    height: '2rem',
    background: 'linear-gradient(45deg, #1e40af, #10b981)',
    borderRadius: '0.25rem'
  }
};

export function LandingPage({ onNavigate }: LandingPageProps) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div style={styles.hero}>
        <div className="container">
          <h1 style={styles.heroTitle}>SME Connect</h1>
          <p style={styles.heroSubtitle}>
            Empowering Local Businesses with Visibility and Engagement
          </p>
          <p style={styles.heroDescription}>
            Connect with customers online and offline. Works everywhere in South Africa - 
            from urban centers to rural communities via web, mobile, and USSD/SMS.
          </p>

          {/* User Type Selection */}
          <div style={styles.userTypeGrid}>
            <div 
              style={styles.userTypeCard}
              className="hover:shadow-lg"
              onClick={() => onNavigate('sme-dashboard')}
            >
              <div className="p-6">
                <div style={{...styles.iconContainer, backgroundColor: '#10b981'}}>
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">I'm a Business Owner</h3>
                <p className="text-sm mb-4 opacity-90">
                  Create your digital profile, reach customers, and grow your business
                </p>
                <Button variant="secondary" className="w-full">
                  Start Building My Profile
                </Button>
              </div>
            </div>

            <div 
              style={styles.userTypeCard}
              className="hover:shadow-lg"
              onClick={() => onNavigate('customer-discovery')}
            >
              <div className="p-6">
                <div style={{...styles.iconContainer, backgroundColor: '#1e40af'}}>
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">I'm Looking for Services</h3>
                <p className="text-sm mb-4 opacity-90">
                  Discover trusted local businesses and connect with them easily
                </p>
                <Button variant="primary" className="w-full">
                  Find Local Businesses
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div style={styles.featuresSection}>
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Why Choose SME Connect?</h2>
            <p className="text-muted max-w-2xl mx-auto">
              Built for South African SMEs with affordable, inclusive tools that work everywhere
            </p>
          </div>

          <div style={styles.featuresGrid}>
            <Card style={styles.featureCard}>
              <CardHeader>
                <div style={{...styles.featureIcon, backgroundColor: '#dbeafe'}}>
                  <Smartphone className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Works Online & Offline</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted">
                  Access via web, mobile app, or USSD/SMS - no internet required for basic features
                </p>
              </CardContent>
            </Card>

            <Card style={styles.featureCard}>
              <CardHeader>
                <div style={{...styles.featureIcon, backgroundColor: '#dcfce7'}}>
                  <MessageCircle className="w-6 h-6 text-secondary" />
                </div>
                <CardTitle>Direct Customer Engagement</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted">
                  Chat, SMS campaigns, inquiry forms - connect with customers how they prefer
                </p>
              </CardContent>
            </Card>

            <Card style={styles.featureCard}>
              <CardHeader>
                <div style={{...styles.featureIcon, backgroundColor: '#f3e8ff'}}>
                  <BarChart3 className="w-6 h-6" style={{color: '#8b5cf6'}} />
                </div>
                <CardTitle>Simple Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted">
                  Track profile views, campaign reach, and customer engagement with easy-to-understand charts
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* USSD Demo Section */}
      <div style={styles.ussdSection}>
        <div className="container">
          <h2 className="text-3xl mb-4">Try Our USSD Experience</h2>
          <p className="text-muted mb-8">
            Experience how SME Connect works on any phone - no smartphone or internet required
          </p>
          <Button 
            onClick={() => onNavigate('ussd')}
            variant="secondary"
            size="lg"
          >
            <Zap className="w-5 h-5 mr-2" />
            Demo USSD Flow
          </Button>
        </div>
      </div>

      {/* Footer */}
      <footer style={styles.footer}>
        <div className="container">
          <div style={styles.telkomBrand}>
            <div style={styles.telkomLogo}></div>
            <span className="text-sm opacity-75">Powered by Telkom</span>
          </div>
          <p className="text-sm opacity-60">
            Connecting South African communities through inclusive digital solutions
          </p>
        </div>
      </footer>
    </div>
  );
}
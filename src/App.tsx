import { useState } from 'react';
import { LandingPage } from './components/LandingPage';
import { SMEDashboard } from './components/SMEDashboard';
import { CustomerDiscovery } from './components/CustomerDiscovery';
import { BusinessProfile } from './components/BusinessProfile';
import { EngagementPage } from './components/EngagementPage';
import { AnalyticsDashboard } from './components/AnalyticsDashboard';
import { USSDFlow } from './components/USSDFlow';
import './styles/globals.css';

export type PageType = 'landing' | 'sme-dashboard' | 'customer-discovery' | 'business-profile' | 'engagement' | 'analytics' | 'ussd';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('landing');
  const [selectedBusinessId, setSelectedBusinessId] = useState<string | null>(null);

  const navigateTo = (page: PageType, businessId?: string) => {
    setCurrentPage(page);
    if (businessId) setSelectedBusinessId(businessId);
  };

  return (
    <div className="min-h-screen bg-background">
      {currentPage === 'landing' && <LandingPage onNavigate={navigateTo} />}
      {currentPage === 'sme-dashboard' && <SMEDashboard onNavigate={navigateTo} />}
      {currentPage === 'customer-discovery' && <CustomerDiscovery onNavigate={navigateTo} />}
      {currentPage === 'business-profile' && <BusinessProfile onNavigate={navigateTo} businessId={selectedBusinessId} />}
      {currentPage === 'engagement' && <EngagementPage onNavigate={navigateTo} />}
      {currentPage === 'analytics' && <AnalyticsDashboard onNavigate={navigateTo} />}
      {currentPage === 'ussd' && <USSDFlow onNavigate={navigateTo} />}
    </div>
  );
}
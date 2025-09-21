import { useState } from 'react';
import { Button } from './ui/Button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/Card';
import { Input } from './ui/Input';
import { Label } from './ui/Label';
import { Textarea } from './ui/Textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/Tabs';
import { 
  User, 
  MessageSquare, 
  BarChart3, 
  Send, 
  Eye, 
  Phone, 
  Mail, 
  MapPin,
  Clock,
  ArrowLeft,
  Plus,
  Settings
} from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';
import type { PageType } from '../App';

interface SMEDashboardProps {
  onNavigate: (page: PageType) => void;
}

const styles = {
  header: {
    backgroundColor: '#ffffff',
    borderBottom: '1px solid var(--color-border)',
    boxShadow: '0 1px 2px 0 rgb(0 0 0 / 0.05)'
  },
  main: {
    backgroundColor: '#f8fafc',
    minHeight: 'calc(100vh - 80px)'
  },
  metricCard: {
    padding: '1.5rem',
    display: 'flex',
    alignItems: 'center',
    gap: '1rem'
  },
  metricIcon: {
    padding: '0.75rem',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  imageUpload: {
    border: '2px dashed var(--color-border)',
    borderRadius: 'var(--border-radius)',
    padding: '2rem',
    textAlign: 'center' as const,
    cursor: 'pointer',
    transition: 'border-color 0.2s ease-in-out'
  },
  campaignCard: {
    padding: '1rem',
    border: '1px solid var(--color-border)',
    borderRadius: 'var(--border-radius)',
    marginBottom: '1rem'
  }
};

export function SMEDashboard({ onNavigate }: SMEDashboardProps) {
  const [smsMessage, setSmsMessage] = useState('');
  const [businessName, setBusinessName] = useState('Thabo\'s Auto Repair');
  const [businessDescription, setBusinessDescription] = useState('Professional automotive repair services with 15+ years experience. Specializing in engine diagnostics, brake repairs, and general maintenance.');

  return (
    <div className="min-h-screen bg-muted">
      {/* Header */}
      <header style={styles.header}>
        <div className="px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => onNavigate('landing')}
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
              <div>
                <h1 className="text-xl">SME Dashboard</h1>
                <p className="text-sm text-muted">Manage your business profile and campaigns</p>
              </div>
            </div>
            <Button onClick={() => onNavigate('analytics')}>
              <BarChart3 className="w-4 h-4 mr-2" />
              View Analytics
            </Button>
          </div>
        </div>
      </header>

      <div style={styles.main}>
        <div className="px-4 py-6">
          <div className="container">
            <Tabs defaultValue="profile" className="space-y-6">
              <TabsList className="grid w-full md:grid-cols-3">
                <TabsTrigger value="profile">Business Profile</TabsTrigger>
                <TabsTrigger value="campaigns">SMS Campaigns</TabsTrigger>
                <TabsTrigger value="overview">Quick Overview</TabsTrigger>
              </TabsList>

              {/* Business Profile Tab */}
              <TabsContent value="profile" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <User className="w-5 h-5" />
                      Business Information
                    </CardTitle>
                    <CardDescription>
                      Update your business details to help customers find and connect with you
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="business-name">Business Name</Label>
                          <Input 
                            id="business-name"
                            value={businessName}
                            onChange={(e) => setBusinessName(e.target.value)}
                          />
                        </div>
                        
                        <div>
                          <Label htmlFor="business-desc">Business Description</Label>
                          <Textarea 
                            id="business-desc"
                            value={businessDescription}
                            onChange={(e) => setBusinessDescription(e.target.value)}
                            rows={4}
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="phone">Phone Number</Label>
                            <Input id="phone" placeholder="+27 XX XXX XXXX" />
                          </div>
                          <div>
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" placeholder="your@email.com" />
                          </div>
                        </div>

                        <div>
                          <Label htmlFor="address">Business Address</Label>
                          <Input id="address" placeholder="Street address, City, Province" />
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <Label>Business Logo</Label>
                          <div style={styles.imageUpload}>
                            <ImageWithFallback 
                              src="https://images.unsplash.com/photo-1631720040176-0d789a643a78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvJTIwbWVjaGFuaWMlMjBnYXJhZ2V8ZW58MXx8fHwxNzU4MzczNjY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                              alt="Business"
                              style={{width: '6rem', height: '6rem', borderRadius: 'var(--border-radius)', margin: '0 auto 1rem', objectFit: 'cover'}}
                            />
                            <p className="text-sm text-muted mb-2">
                              Click to upload your business logo
                            </p>
                            <Button variant="outline" size="sm">
                              <Plus className="w-4 h-4 mr-2" />
                              Upload Image
                            </Button>
                          </div>
                        </div>

                        <div>
                          <Label>Business Hours</Label>
                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <Clock className="w-4 h-4 text-muted" />
                              <span className="text-sm">Mon-Fri: 8:00 AM - 6:00 PM</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Clock className="w-4 h-4 text-muted" />
                              <span className="text-sm">Sat: 8:00 AM - 4:00 PM</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Clock className="w-4 h-4 text-muted" />
                              <span className="text-sm">Sun: Closed</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <Button variant="primary">
                        Save Changes
                      </Button>
                      <Button variant="outline">
                        Preview Profile
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* SMS Campaigns Tab */}
              <TabsContent value="campaigns" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MessageSquare className="w-5 h-5" />
                      SMS Campaign Composer
                    </CardTitle>
                    <CardDescription>
                      Send promotional messages to your customers via SMS
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <Label htmlFor="sms-message">Campaign Message</Label>
                      <Textarea 
                        id="sms-message"
                        placeholder="Hi! We're offering 20% off all brake services this week. Book your appointment today at Thabo's Auto Repair. Call 081 XXX XXXX"
                        value={smsMessage}
                        onChange={(e) => setSmsMessage(e.target.value)}
                        rows={4}
                      />
                      <p className="text-sm text-muted mt-2">
                        {smsMessage.length}/160 characters
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label>Target Audience</Label>
                        <div className="space-y-2 mt-2">
                          <div className="flex items-center gap-2">
                            <input type="checkbox" id="all-customers" defaultChecked />
                            <label htmlFor="all-customers" className="text-sm">All customers (248)</label>
                          </div>
                          <div className="flex items-center gap-2">
                            <input type="checkbox" id="recent-customers" />
                            <label htmlFor="recent-customers" className="text-sm">Recent customers (67)</label>
                          </div>
                          <div className="flex items-center gap-2">
                            <input type="checkbox" id="nearby-customers" />
                            <label htmlFor="nearby-customers" className="text-sm">Nearby area (5km radius)</label>
                          </div>
                        </div>
                      </div>

                      <div>
                        <Label>Campaign Schedule</Label>
                        <div className="space-y-2 mt-2">
                          <div className="flex items-center gap-2">
                            <input type="radio" id="send-now" name="schedule" defaultChecked />
                            <label htmlFor="send-now" className="text-sm">Send immediately</label>
                          </div>
                          <div className="flex items-center gap-2">
                            <input type="radio" id="send-later" name="schedule" />
                            <label htmlFor="send-later" className="text-sm">Schedule for later</label>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <Button variant="secondary">
                        <Send className="w-4 h-4 mr-2" />
                        Send Campaign
                      </Button>
                      <Button variant="outline">
                        Save as Draft
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Recent Campaigns */}
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Campaigns</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { message: "Special discount on oil changes - 30% off this week!", sent: "2 days ago", recipients: 248, opens: 156 },
                        { message: "Your car is due for service. Book with us for quality care.", sent: "1 week ago", recipients: 67, opens: 42 },
                        { message: "Thank you for choosing Thabo's Auto Repair! Rate your experience.", sent: "2 weeks ago", recipients: 15, opens: 12 }
                      ].map((campaign, index) => (
                        <div key={index} style={styles.campaignCard}>
                          <p className="mb-2">{campaign.message}</p>
                          <div className="flex gap-4 text-sm text-muted">
                            <span>Sent: {campaign.sent}</span>
                            <span>Recipients: {campaign.recipients}</span>
                            <span>Opens: {campaign.opens}</span>
                            {/* <Badge variant="outline" className="text-secondary">
                              Delivered
                            </Badge> */}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Quick Overview Tab */}
              <TabsContent value="overview" className="space-y-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <Card>
                    <div style={styles.metricCard}>
                      <div style={{...styles.metricIcon, backgroundColor: '#dbeafe'}}>
                        <Eye className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-2xl font-bold">1,247</p>
                        <p className="text-sm text-muted">Profile Views</p>
                      </div>
                    </div>
                  </Card>

                  <Card>
                    <div style={styles.metricCard}>
                      <div style={{...styles.metricIcon, backgroundColor: '#dcfce7'}}>
                        <MessageSquare className="w-6 h-6 text-secondary" />
                      </div>
                      <div>
                        <p className="text-2xl font-bold">89</p>
                        <p className="text-sm text-muted">Customer Inquiries</p>
                      </div>
                    </div>
                  </Card>

                  <Card>
                    <div style={styles.metricCard}>
                      <div style={{...styles.metricIcon, backgroundColor: '#f3e8ff'}}>
                        <Phone className="w-6 h-6" style={{color: '#8b5cf6'}} />
                      </div>
                      <div>
                        <p className="text-2xl font-bold">156</p>
                        <p className="text-sm text-muted">Phone Calls</p>
                      </div>
                    </div>
                  </Card>

                  <Card>
                    <div style={styles.metricCard}>
                      <div style={{...styles.metricIcon, backgroundColor: '#fed7aa'}}>
                        <Mail className="w-6 h-6" style={{color: '#ea580c'}} />
                      </div>
                      <div>
                        <p className="text-2xl font-bold">67</p>
                        <p className="text-sm text-muted">Email Inquiries</p>
                      </div>
                    </div>
                  </Card>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Recent Customer Activity</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {[
                          { name: "Sarah M.", action: "Viewed your profile", time: "5 mins ago" },
                          { name: "John D.", action: "Sent inquiry about brake service", time: "1 hour ago" },
                          { name: "Mary K.", action: "Called your business", time: "2 hours ago" },
                          { name: "Peter L.", action: "Requested quote", time: "3 hours ago" }
                        ].map((activity, index) => (
                          <div key={index} className="flex items-center gap-3">
                            <div style={{
                              width: '2rem',
                              height: '2rem',
                              backgroundColor: '#dbeafe',
                              borderRadius: '50%',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center'
                            }}>
                              <User className="w-4 h-4 text-primary" />
                            </div>
                            <div className="flex-1">
                              <p className="text-sm">{activity.name} {activity.action}</p>
                              <p className="text-xs text-muted">{activity.time}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Quick Actions</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <Button className="w-full justify-start" variant="outline">
                        <MessageSquare className="w-4 h-4 mr-2" />
                        Send SMS Campaign
                      </Button>
                      <Button className="w-full justify-start" variant="outline">
                        <Settings className="w-4 h-4 mr-2" />
                        Edit Business Profile
                      </Button>
                      <Button 
                        className="w-full justify-start" 
                        variant="outline"
                        onClick={() => onNavigate('analytics')}
                      >
                        <BarChart3 className="w-4 h-4 mr-2" />
                        View Detailed Analytics
                      </Button>
                      <Button className="w-full justify-start" variant="outline">
                        <Eye className="w-4 h-4 mr-2" />
                        Preview Customer View
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}
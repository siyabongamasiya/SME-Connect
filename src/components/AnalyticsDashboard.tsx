import { Button } from './ui/Button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/Card';
import { Badge } from './ui/Badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/Tabs';
import { 
  ArrowLeft,
  Eye,
  MessageSquare,
  Phone,
  Mail,
  TrendingUp,
  TrendingDown,
  Calendar,
  Download,
  Filter
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import type { PageType } from '../App';

interface AnalyticsDashboardProps {
  onNavigate: (page: PageType) => void;
}

const profileViewsData = [
  { name: 'Mon', views: 45 },
  { name: 'Tue', views: 52 },
  { name: 'Wed', views: 38 },
  { name: 'Thu', views: 67 },
  { name: 'Fri', views: 89 },
  { name: 'Sat', views: 71 },
  { name: 'Sun', views: 34 }
];

const customerEngagementData = [
  { name: 'Jan', calls: 45, messages: 23, emails: 12 },
  { name: 'Feb', calls: 52, messages: 31, emails: 18 },
  { name: 'Mar', calls: 61, messages: 28, emails: 15 },
  { name: 'Apr', calls: 58, messages: 42, emails: 22 },
  { name: 'May', calls: 67, messages: 38, emails: 19 },
  { name: 'Jun', calls: 73, messages: 45, emails: 25 }
];

const smsPerformanceData = [
  { name: 'Campaign 1', sent: 248, delivered: 245, opened: 156, clicked: 89 },
  { name: 'Campaign 2', sent: 180, delivered: 178, opened: 142, clicked: 67 },
  { name: 'Campaign 3', sent: 320, delivered: 315, opened: 201, clicked: 124 },
  { name: 'Campaign 4', sent: 156, delivered: 153, opened: 98, clicked: 45 }
];

const customerSourceData = [
  { name: 'Direct Search', value: 35, color: '#1e40af' },
  { name: 'SMS Campaign', value: 25, color: '#10b981' },
  { name: 'Word of Mouth', value: 20, color: '#06b6d4' },
  { name: 'Social Media', value: 12, color: '#8b5cf6' },
  { name: 'Other', value: 8, color: '#f59e0b' }
];

export function AnalyticsDashboard({ onNavigate }: AnalyticsDashboardProps) {
  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => onNavigate('sme-dashboard')}
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Dashboard
              </Button>
              <div>
                <h1 className="text-xl">Analytics Dashboard</h1>
                <p className="text-sm text-muted-foreground">Track your business performance and customer engagement</p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="px-4 py-6">
        <div className="max-w-7xl mx-auto">
          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-100 rounded-full">
                    <Eye className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-2xl mb-1">1,247</p>
                    <p className="text-sm text-muted-foreground">Profile Views</p>
                    <div className="flex items-center gap-1 mt-1">
                      <TrendingUp className="w-3 h-3 text-green-600" />
                      <span className="text-xs text-green-600">+12%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-green-100 rounded-full">
                    <MessageSquare className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-2xl mb-1">89</p>
                    <p className="text-sm text-muted-foreground">Messages</p>
                    <div className="flex items-center gap-1 mt-1">
                      <TrendingUp className="w-3 h-3 text-green-600" />
                      <span className="text-xs text-green-600">+8%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-purple-100 rounded-full">
                    <Phone className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-2xl mb-1">156</p>
                    <p className="text-sm text-muted-foreground">Phone Calls</p>
                    <div className="flex items-center gap-1 mt-1">
                      <TrendingDown className="w-3 h-3 text-red-600" />
                      <span className="text-xs text-red-600">-3%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-orange-100 rounded-full">
                    <Mail className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-2xl mb-1">67</p>
                    <p className="text-sm text-muted-foreground">Email Inquiries</p>
                    <div className="flex items-center gap-1 mt-1">
                      <TrendingUp className="w-3 h-3 text-green-600" />
                      <span className="text-xs text-green-600">+18%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="engagement">Customer Engagement</TabsTrigger>
              <TabsTrigger value="campaigns">SMS Campaigns</TabsTrigger>
              <TabsTrigger value="sources">Traffic Sources</TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Profile Views This Week</CardTitle>
                    <CardDescription>
                      Daily views of your business profile
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart data={profileViewsData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="views" fill="#1e40af" radius={[4, 4, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                    <CardDescription>
                      Your latest customer interactions
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { action: "New message received", customer: "Sarah M.", time: "2 hours ago", type: "message" },
                        { action: "Quote request submitted", customer: "John D.", time: "4 hours ago", type: "quote" },
                        { action: "Profile viewed", customer: "Mary K.", time: "6 hours ago", type: "view" },
                        { action: "Phone call made", customer: "Peter L.", time: "1 day ago", type: "call" },
                        { action: "SMS campaign opened", customer: "Lisa R.", time: "1 day ago", type: "sms" }
                      ].map((activity, index) => (
                        <div key={index} className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                          <div className={`w-3 h-3 rounded-full ${
                            activity.type === 'message' ? 'bg-blue-600' :
                            activity.type === 'quote' ? 'bg-green-600' :
                            activity.type === 'view' ? 'bg-purple-600' :
                            activity.type === 'call' ? 'bg-orange-600' : 'bg-cyan-600'
                          }`}></div>
                          <div className="flex-1">
                            <p className="text-sm">{activity.action}</p>
                            <p className="text-xs text-muted-foreground">{activity.customer} • {activity.time}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Performance Summary</CardTitle>
                  <CardDescription>
                    Key metrics compared to last month
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <p className="text-2xl mb-2 text-blue-600">4.8</p>
                      <p className="text-sm text-muted-foreground">Average Rating</p>
                      <Badge variant="outline" className="mt-2 text-blue-600 border-blue-200">
                        127 reviews
                      </Badge>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <p className="text-2xl mb-2 text-green-600">18%</p>
                      <p className="text-sm text-muted-foreground">Response Rate</p>
                      <Badge variant="outline" className="mt-2 text-green-600 border-green-200">
                        Excellent
                      </Badge>
                    </div>
                    <div className="text-center p-4 bg-purple-50 rounded-lg">
                      <p className="text-2xl mb-2 text-purple-600">2.3hrs</p>
                      <p className="text-sm text-muted-foreground">Avg Response Time</p>
                      <Badge variant="outline" className="mt-2 text-purple-600 border-purple-200">
                        Fast
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Customer Engagement Tab */}
            <TabsContent value="engagement" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Customer Engagement Trends</CardTitle>
                  <CardDescription>
                    Track how customers are reaching out to your business
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={400}>
                    <LineChart data={customerEngagementData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="calls" stroke="#1e40af" strokeWidth={3} name="Phone Calls" />
                      <Line type="monotone" dataKey="messages" stroke="#10b981" strokeWidth={3} name="Messages" />
                      <Line type="monotone" dataKey="emails" stroke="#8b5cf6" strokeWidth={3} name="Emails" />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Most Active Hours</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {[
                        { time: "9:00 - 11:00 AM", activity: "High", percentage: 85 },
                        { time: "2:00 - 4:00 PM", activity: "Medium", percentage: 65 },
                        { time: "7:00 - 9:00 PM", activity: "Low", percentage: 35 }
                      ].map((hour, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>{hour.time}</span>
                            <span className="text-muted-foreground">{hour.activity}</span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2">
                            <div 
                              className="bg-blue-600 h-2 rounded-full" 
                              style={{ width: `${hour.percentage}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Popular Services</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {[
                        { service: "Brake Service", inquiries: 45 },
                        { service: "Oil Change", inquiries: 32 },
                        { service: "Engine Diagnostics", inquiries: 28 },
                        { service: "Transmission", inquiries: 19 },
                        { service: "Other", inquiries: 15 }
                      ].map((service, index) => (
                        <div key={index} className="flex justify-between items-center">
                          <span className="text-sm">{service.service}</span>
                          <Badge variant="secondary">{service.inquiries}</Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Customer Satisfaction</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="text-4xl mb-2 text-green-600">4.8</div>
                    <div className="flex justify-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-lg">
                          {i < 4 ? '★' : '☆'}
                        </span>
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">Based on 127 reviews</p>
                    <div className="space-y-2 text-left">
                      {[
                        { stars: 5, count: 89 },
                        { stars: 4, count: 28 },
                        { stars: 3, count: 7 },
                        { stars: 2, count: 2 },
                        { stars: 1, count: 1 }
                      ].map((rating, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <span className="text-xs w-2">{rating.stars}</span>
                          <div className="flex-1 bg-muted rounded h-2">
                            <div 
                              className="bg-yellow-400 h-2 rounded" 
                              style={{ width: `${(rating.count / 127) * 100}%` }}
                            ></div>
                          </div>
                          <span className="text-xs text-muted-foreground w-6">{rating.count}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* SMS Campaigns Tab */}
            <TabsContent value="campaigns" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>SMS Campaign Performance</CardTitle>
                  <CardDescription>
                    Track the success of your SMS marketing campaigns
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={smsPerformanceData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="sent" fill="#e2e8f0" name="Sent" />
                      <Bar dataKey="delivered" fill="#1e40af" name="Delivered" />
                      <Bar dataKey="opened" fill="#10b981" name="Opened" />
                      <Bar dataKey="clicked" fill="#8b5cf6" name="Clicked" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Campaign Summary</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center p-3 bg-blue-50 rounded">
                          <p className="text-xl text-blue-600">904</p>
                          <p className="text-sm text-muted-foreground">Total Sent</p>
                        </div>
                        <div className="text-center p-3 bg-green-50 rounded">
                          <p className="text-xl text-green-600">97.8%</p>
                          <p className="text-sm text-muted-foreground">Delivery Rate</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center p-3 bg-purple-50 rounded">
                          <p className="text-xl text-purple-600">65.5%</p>
                          <p className="text-sm text-muted-foreground">Open Rate</p>
                        </div>
                        <div className="text-center p-3 bg-orange-50 rounded">
                          <p className="text-xl text-orange-600">36.2%</p>
                          <p className="text-sm text-muted-foreground">Click Rate</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Best Performing Messages</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {[
                        { message: "20% off brake services this week!", rate: "68%" },
                        { message: "Your car service is due - book now", rate: "62%" },
                        { message: "Special oil change promotion", rate: "59%" },
                        { message: "Thank you for your business!", rate: "45%" }
                      ].map((msg, index) => (
                        <div key={index} className="p-3 border rounded-lg">
                          <p className="text-sm mb-2 line-clamp-1">{msg.message}</p>
                          <div className="flex justify-between items-center">
                            <span className="text-xs text-muted-foreground">Open Rate</span>
                            <Badge variant="outline" className="text-green-600">
                              {msg.rate}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Traffic Sources Tab */}
            <TabsContent value="sources" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Customer Sources</CardTitle>
                    <CardDescription>
                      How customers discover your business
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <PieChart>
                        <Pie
                          data={customerSourceData}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={120}
                          paddingAngle={5}
                          dataKey="value"
                        >
                          {customerSourceData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip formatter={(value) => [`${value}%`, 'Percentage']} />
                      </PieChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Source Breakdown</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {customerSourceData.map((source, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <div 
                            className="w-4 h-4 rounded-full" 
                            style={{ backgroundColor: source.color }}
                          ></div>
                          <div className="flex-1">
                            <div className="flex justify-between items-center">
                              <span className="text-sm">{source.name}</span>
                              <span className="text-sm">{source.value}%</span>
                            </div>
                            <div className="w-full bg-muted rounded-full h-2 mt-1">
                              <div 
                                className="h-2 rounded-full" 
                                style={{ 
                                  width: `${source.value}%`,
                                  backgroundColor: source.color 
                                }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Geographic Distribution</CardTitle>
                  <CardDescription>
                    Where your customers are located
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-4">
                    {[
                      { area: "Johannesburg Central", customers: 127, percentage: 45 },
                      { area: "Sandton", customers: 89, percentage: 32 },
                      { area: "Randburg", customers: 54, percentage: 19 },
                      { area: "Midrand", customers: 23, percentage: 8 },
                      { area: "Other Areas", customers: 15, percentage: 5 }
                    ].map((area, index) => (
                      <div key={index} className="p-4 border rounded-lg">
                        <h4 className="mb-2">{area.area}</h4>
                        <p className="text-2xl mb-1">{area.customers}</p>
                        <p className="text-sm text-muted-foreground">customers</p>
                        <div className="w-full bg-muted rounded-full h-2 mt-2">
                          <div 
                            className="bg-blue-600 h-2 rounded-full" 
                            style={{ width: `${area.percentage}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
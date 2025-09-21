import { useState } from 'react';
import { Button } from './ui/Button';
import { Input } from './ui/Input';
import { Textarea } from './ui/Textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/Card';
import { Badge } from './ui/Badge';
import { Separator } from './ui/separator';
import { 
  Send, 
  Phone, 
  ArrowLeft,
  MessageSquare,
  Clock,
  CheckCircle,
  User,
  Paperclip,
  Smile
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import type { PageType } from '../App';

interface EngagementPageProps {
  onNavigate: (page: PageType) => void;
}

const chatMessages = [
  {
    id: 1,
    sender: 'business',
    name: 'Thabo (Owner)',
    message: 'Hello! Thank you for reaching out to Thabo\'s Auto Repair. How can I help you today?',
    timestamp: '10:30 AM',
    avatar: 'https://images.unsplash.com/photo-1687422808191-93810cd07ab0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFsbCUyMGJ1c2luZXNzJTIwb3duZXIlMjBhZnJpY2FufGVufDF8fHx8MTc1ODM3MzY2OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 2,
    sender: 'customer',
    name: 'You',
    message: 'Hi! I\'m having some brake issues with my 2018 Toyota Corolla. The brakes feel spongy and make a squeaking noise.',
    timestamp: '10:32 AM'
  },
  {
    id: 3,
    sender: 'business',
    name: 'Thabo (Owner)', 
    message: 'That sounds like it could be worn brake pads or air in the brake lines. I\'d recommend bringing it in for a quick inspection. How soon would you need this looked at?',
    timestamp: '10:35 AM',
    avatar: 'https://images.unsplash.com/photo-1687422808191-93810cd07ab0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFsbCUyMGJ1c2luZXNzJTIwb3duZXIlMjBhZnJpY2FufGVufDF8fHx8MTc1ODM3MzY2OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 4,
    sender: 'customer',
    name: 'You',
    message: 'Ideally this week if possible. What would an inspection cost?',
    timestamp: '10:37 AM'
  },
  {
    id: 5,
    sender: 'business',
    name: 'Thabo (Owner)',
    message: 'Great! The brake inspection is complimentary - no charge. If you need repairs, I\'ll give you a quote before starting any work. I have availability tomorrow at 2 PM or Thursday at 10 AM. Which works better for you?',
    timestamp: '10:40 AM',
    avatar: 'https://images.unsplash.com/photo-1687422808191-93810cd07ab0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFsbCUyMGJ1c2luZXNzJTIwb3duZXIlMjBhZnJpY2FufGVufDF8fHx8MTc1ODM3MzY2OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  }
];

export function EngagementPage({ onNavigate }: EngagementPageProps) {
  const [message, setMessage] = useState('');
  const [showQuoteForm, setShowQuoteForm] = useState(false);

  const handleSendMessage = () => {
    if (message.trim()) {
      // In a real app, this would send the message
      setMessage('');
    }
  };

  const QuoteRequestForm = () => (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MessageSquare className="w-5 h-5" />
          Request a Quote
        </CardTitle>
        <CardDescription>
          Get a detailed quote for your automotive service needs
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-sm text-muted-foreground">Your Name</label>
            <Input placeholder="Enter your name" />
          </div>
          <div>
            <label className="text-sm text-muted-foreground">Phone Number</label>
            <Input placeholder="+27 XX XXX XXXX" />
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-sm text-muted-foreground">Vehicle Make</label>
            <Input placeholder="e.g., Toyota" />
          </div>
          <div>
            <label className="text-sm text-muted-foreground">Vehicle Model</label>
            <Input placeholder="e.g., Corolla" />
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-sm text-muted-foreground">Year</label>
            <Input placeholder="e.g., 2018" />
          </div>
          <div>
            <label className="text-sm text-muted-foreground">Service Type</label>
            <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
              <option>Select service...</option>
              <option>Brake Service</option>
              <option>Engine Diagnostics</option>
              <option>Oil Change</option>
              <option>Transmission Service</option>
              <option>Other</option>
            </select>
          </div>
        </div>
        
        <div>
          <label className="text-sm text-muted-foreground">Describe the Issue</label>
          <Textarea 
            placeholder="Please describe the problem you're experiencing or the service you need..."
            rows={3}
          />
        </div>
        
        <div className="flex gap-3">
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Send className="w-4 h-4 mr-2" />
            Send Quote Request
          </Button>
          <Button variant="outline" onClick={() => setShowQuoteForm(false)}>
            Cancel
          </Button>
        </div>
      </CardContent>
    </Card>
  );

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
                onClick={() => onNavigate('business-profile')}
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Profile
              </Button>
              <div className="flex items-center gap-3">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1631720040176-0d789a643a78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvJTIwbWVjaGFuaWMlMjBnYXJhZ2V8ZW58MXx8fHwxNzU4MzczNjY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Thabo's Auto Repair"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <h1 className="text-lg">Thabo's Auto Repair</h1>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-muted-foreground">Online now</span>
                  </div>
                </div>
              </div>
            </div>
            <Button variant="outline" size="sm">
              <Phone className="w-4 h-4 mr-2" />
              Call
            </Button>
          </div>
        </div>
      </header>

      <div className="px-4 py-6">
        <div className="max-w-4xl mx-auto">
          {showQuoteForm && <QuoteRequestForm />}
          
          {/* Chat Interface */}
          <Card className="h-[600px] flex flex-col">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-lg">Live Chat</CardTitle>
                  <CardDescription>
                    Get instant answers to your questions
                  </CardDescription>
                </div>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => setShowQuoteForm(!showQuoteForm)}
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  {showQuoteForm ? 'Hide' : 'Request'} Quote
                </Button>
              </div>
            </CardHeader>
            
            {/* Chat Messages */}
            <CardContent className="flex-1 overflow-y-auto space-y-4 pb-4">
              {chatMessages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex gap-3 ${
                    msg.sender === 'customer' ? 'flex-row-reverse' : ''
                  }`}
                >
                  {msg.sender === 'business' && (
                    <ImageWithFallback 
                      src={msg.avatar!}
                      alt={msg.name}
                      className="w-8 h-8 rounded-full object-cover flex-shrink-0"
                    />
                  )}
                  {msg.sender === 'customer' && (
                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                      <User className="w-4 h-4 text-white" />
                    </div>
                  )}
                  
                  <div className={`max-w-[70%] ${msg.sender === 'customer' ? 'text-right' : ''}`}>
                    <div className="flex items-center gap-2 mb-1">
                      {msg.sender === 'customer' && (
                        <>
                          <span className="text-xs text-muted-foreground">{msg.timestamp}</span>
                          <span className="text-sm">{msg.name}</span>
                        </>
                      )}
                      {msg.sender === 'business' && (
                        <>
                          <span className="text-sm">{msg.name}</span>
                          <span className="text-xs text-muted-foreground">{msg.timestamp}</span>
                        </>
                      )}
                    </div>
                    <div
                      className={`p-3 rounded-lg ${
                        msg.sender === 'customer'
                          ? 'bg-blue-600 text-white'
                          : 'bg-muted'
                      }`}
                    >
                      <p className="text-sm">{msg.message}</p>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Typing Indicator */}
              <div className="flex gap-3">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1687422808191-93810cd07ab0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFsbCUyMGJ1c2luZXNzJTIwb3duZXIlMjBhZnJpY2FufGVufDF8fHx8MTc1ODM3MzY2OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Thabo"
                  className="w-8 h-8 rounded-full object-cover"
                />
                <div className="bg-muted p-3 rounded-lg">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            </CardContent>
            
            {/* Message Input */}
            <div className="border-t p-4">
              <div className="flex gap-3">
                <div className="flex-1 relative">
                  <Input
                    placeholder="Type your message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    className="pr-20"
                  />
                  <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex gap-1">
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <Paperclip className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <Smile className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <Button 
                  onClick={handleSendMessage}
                  className="bg-blue-600 hover:bg-blue-700"
                  disabled={!message.trim()}
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </Card>

          {/* Quick Actions */}
          <div className="mt-6 grid md:grid-cols-3 gap-4">
            <Card className="cursor-pointer hover:shadow-md transition-shadow">
              <CardContent className="p-4 text-center">
                <Clock className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <h3 className="mb-1">Book Appointment</h3>
                <p className="text-sm text-muted-foreground">Schedule a service visit</p>
              </CardContent>
            </Card>
            
            <Card className="cursor-pointer hover:shadow-md transition-shadow">
              <CardContent className="p-4 text-center">
                <MessageSquare className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <h3 className="mb-1">Quick Quote</h3>
                <p className="text-sm text-muted-foreground">Get instant pricing</p>
              </CardContent>
            </Card>
            
            <Card className="cursor-pointer hover:shadow-md transition-shadow">
              <CardContent className="p-4 text-center">
                <CheckCircle className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                <h3 className="mb-1">Service Status</h3>
                <p className="text-sm text-muted-foreground">Check repair progress</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
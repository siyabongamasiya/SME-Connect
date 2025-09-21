import { useState } from 'react';
import { Button } from './ui/Button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/Card';
import { ArrowLeft, Smartphone, RotateCcw } from 'lucide-react';
import type { PageType } from '../App';

interface USSDFlowProps {
  onNavigate: (page: PageType) => void;
}

type FlowStep = {
  id: string;
  title: string;
  options: { key: string; text: string; next: string }[];
  backTo?: string;
};

const ussdFlow: Record<string, FlowStep> = {
  main: {
    id: 'main',
    title: 'Welcome to SME Connect',
    options: [
      { key: '1', text: 'Find Local Businesses', next: 'find-business' },
      { key: '2', text: 'Register My Business', next: 'register-business' },
      { key: '3', text: 'SMS Promotions', next: 'sms-promo' },
      { key: '0', text: 'Exit', next: 'exit' }
    ]
  },
  'find-business': {
    id: 'find-business',
    title: 'Find Local Businesses',
    options: [
      { key: '1', text: 'Auto Repair', next: 'auto-results' },
      { key: '2', text: 'Restaurants', next: 'restaurant-results' },
      { key: '3', text: 'Hair Salons', next: 'salon-results' },
      { key: '4', text: 'Groceries', next: 'grocery-results' },
      { key: '9', text: 'Back to Main Menu', next: 'main' },
      { key: '0', text: 'Exit', next: 'exit' }
    ],
    backTo: 'main'
  },
  'auto-results': {
    id: 'auto-results',
    title: 'Auto Repair Services',
    options: [
      { key: '1', text: "Thabo's Auto Repair (0.8km)", next: 'thabo-details' },
      { key: '2', text: 'Quick Fix Garage (1.2km)', next: 'quickfix-details' },
      { key: '3', text: 'Pro Auto Service (2.1km)', next: 'pro-details' },
      { key: '9', text: 'Back to Categories', next: 'find-business' },
      { key: '0', text: 'Exit', next: 'exit' }
    ],
    backTo: 'find-business'
  },
  'thabo-details': {
    id: 'thabo-details',
    title: "Thabo's Auto Repair",
    options: [
      { key: '1', text: 'Call: 011 123 4567', next: 'call-action' },
      { key: '2', text: 'Send SMS Inquiry', next: 'sms-inquiry' },
      { key: '3', text: 'Get Directions', next: 'directions' },
      { key: '4', text: 'Business Hours', next: 'hours' },
      { key: '9', text: 'Back to Results', next: 'auto-results' },
      { key: '0', text: 'Exit', next: 'exit' }
    ],
    backTo: 'auto-results'
  },
  'restaurant-results': {
    id: 'restaurant-results',
    title: 'Restaurants Near You',
    options: [
      { key: '1', text: "Mama Zulu's Kitchen (1.2km)", next: 'zulu-details' },
      { key: '2', text: 'Braai Junction (0.9km)', next: 'braai-details' },
      { key: '3', text: 'Spice Route (1.8km)', next: 'spice-details' },
      { key: '9', text: 'Back to Categories', next: 'find-business' },
      { key: '0', text: 'Exit', next: 'exit' }
    ],
    backTo: 'find-business'
  },
  'salon-results': {
    id: 'salon-results',
    title: 'Hair Salons Near You',
    options: [
      { key: '1', text: 'Style & Grace (0.5km)', next: 'style-details' },
      { key: '2', text: 'Crown Beauty (1.1km)', next: 'crown-details' },
      { key: '3', text: 'Trendy Cuts (1.4km)', next: 'trendy-details' },
      { key: '9', text: 'Back to Categories', next: 'find-business' },
      { key: '0', text: 'Exit', next: 'exit' }
    ],
    backTo: 'find-business'
  },
  'grocery-results': {
    id: 'grocery-results',
    title: 'Grocery Stores Near You',
    options: [
      { key: '1', text: 'Fresh Market (2.1km)', next: 'fresh-details' },
      { key: '2', text: 'Corner Shop (0.3km)', next: 'corner-details' },
      { key: '3', text: 'Super Save (1.7km)', next: 'super-details' },
      { key: '9', text: 'Back to Categories', next: 'find-business' },
      { key: '0', text: 'Exit', next: 'exit' }
    ],
    backTo: 'find-business'
  },
  'register-business': {
    id: 'register-business',
    title: 'Register Your Business',
    options: [
      { key: '1', text: 'Start Registration', next: 'reg-start' },
      { key: '2', text: 'Update Existing Profile', next: 'reg-update' },
      { key: '3', text: 'Help & Support', next: 'reg-help' },
      { key: '9', text: 'Back to Main Menu', next: 'main' },
      { key: '0', text: 'Exit', next: 'exit' }
    ],
    backTo: 'main'
  },
  'sms-promo': {
    id: 'sms-promo',
    title: 'SMS Promotions',
    options: [
      { key: '1', text: 'Subscribe to Updates', next: 'sms-subscribe' },
      { key: '2', text: 'View Current Offers', next: 'sms-offers' },
      { key: '3', text: 'Unsubscribe', next: 'sms-unsub' },
      { key: '9', text: 'Back to Main Menu', next: 'main' },
      { key: '0', text: 'Exit', next: 'exit' }
    ],
    backTo: 'main'
  },
  'call-action': {
    id: 'call-action',
    title: 'Calling Business...',
    options: [
      { key: '1', text: 'Call Initiated', next: 'thabo-details' },
      { key: '9', text: 'Back to Business', next: 'thabo-details' },
      { key: '0', text: 'Exit', next: 'exit' }
    ],
    backTo: 'thabo-details'
  },
  'sms-inquiry': {
    id: 'sms-inquiry',
    title: 'SMS Sent Successfully',
    options: [
      { key: '1', text: 'Send Another Message', next: 'sms-inquiry' },
      { key: '2', text: 'Call Instead', next: 'call-action' },
      { key: '9', text: 'Back to Business', next: 'thabo-details' },
      { key: '0', text: 'Exit', next: 'exit' }
    ],
    backTo: 'thabo-details'
  },
  'directions': {
    id: 'directions',
    title: 'Directions to Business',
    options: [
      { key: '1', text: 'Get SMS with Directions', next: 'directions-sms' },
      { key: '2', text: 'Call for Directions', next: 'call-action' },
      { key: '9', text: 'Back to Business', next: 'thabo-details' },
      { key: '0', text: 'Exit', next: 'exit' }
    ],
    backTo: 'thabo-details'
  },
  'hours': {
    id: 'hours',
    title: 'Business Hours',
    options: [
      { key: '1', text: 'Mon-Fri: 8AM-6PM, Sat: 8AM-4PM', next: 'hours' },
      { key: '2', text: 'Call for Appointment', next: 'call-action' },
      { key: '9', text: 'Back to Business', next: 'thabo-details' },
      { key: '0', text: 'Exit', next: 'exit' }
    ],
    backTo: 'thabo-details'
  },
  exit: {
    id: 'exit',
    title: 'Thank You!',
    options: [
      { key: '1', text: 'Visit our website for more', next: 'main' },
      { key: '2', text: 'Restart', next: 'main' },
      { key: '0', text: 'End Session', next: 'exit' }
    ]
  }
};

export function USSDFlow({ onNavigate }: USSDFlowProps) {
  const [currentStep, setCurrentStep] = useState('main');
  const [inputValue, setInputValue] = useState('');
  const [history, setHistory] = useState<string[]>(['main']);

  const handleInput = (key: string) => {
    const current = ussdFlow[currentStep];
    const option = current?.options.find(opt => opt.key === key);
    
    if (option) {
      if (option.next === 'exit' && option.text === 'End Session') {
        // Don't navigate anywhere, just stay on exit
        return;
      }
      
      setHistory(prev => [...prev, option.next]);
      setCurrentStep(option.next);
      setInputValue('');
    }
  };

  const handleReset = () => {
    setCurrentStep('main');
    setHistory(['main']);
    setInputValue('');
  };

  const currentFlow = ussdFlow[currentStep];

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
                onClick={() => onNavigate('landing')}
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
              <div>
                <h1 className="text-xl">USSD Demo</h1>
                <p className="text-sm text-muted-foreground">Experience SME Connect without internet</p>
              </div>
            </div>
            <Button variant="outline" size="sm" onClick={handleReset}>
              <RotateCcw className="w-4 h-4 mr-2" />
              Restart Demo
            </Button>
          </div>
        </div>
      </header>

      <div className="px-4 py-6">
        <div className="max-w-2xl mx-auto">
          {/* Info Card */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Smartphone className="w-5 h-5" />
                USSD Service Demo
              </CardTitle>
              <CardDescription>
                This demonstrates how SME Connect works on any phone via USSD (*123#) - 
                no smartphone or internet connection required. Perfect for reaching customers in rural areas.
              </CardDescription>
            </CardHeader>
          </Card>

          {/* Phone Mockup */}
          <div className="bg-slate-900 rounded-3xl p-6 mx-auto max-w-sm shadow-2xl">
            <div className="bg-green-400 text-black p-4 rounded-lg font-mono text-sm">
              {/* USSD Header */}
              <div className="text-center mb-4">
                <p>*123*SME#</p>
                <hr className="border-black my-2" />
              </div>

              {/* Current Step Content */}
              <div className="mb-4">
                <p className="mb-3">{currentFlow?.title}</p>
                
                {currentStep === 'hours' && currentFlow?.options[0] && (
                  <div className="mb-3 text-xs">
                    <p>{currentFlow.options[0].text}</p>
                  </div>
                )}
                
                {currentStep === 'call-action' && (
                  <div className="mb-3 text-xs">
                    <p>Connecting to +27 11 123 4567...</p>
                  </div>
                )}
                
                {currentStep === 'sms-inquiry' && (
                  <div className="mb-3 text-xs">
                    <p>Message: "Hi, I need brake service for my Toyota Corolla. When is your next availability?"</p>
                    <p>Sent to Thabo's Auto Repair</p>
                  </div>
                )}
                
                {currentStep === 'directions-sms' && (
                  <div className="mb-3 text-xs">
                    <p>Directions sent to your phone:</p>
                    <p>"123 Main St, Johannesburg. From your location: Head south on M1, exit at Main St. 5 min walk from taxi rank."</p>
                  </div>
                )}
                
                {currentStep === 'exit' && (
                  <div className="mb-3 text-xs">
                    <p>Thanks for using SME Connect!</p>
                    <p>SMS us "HELP" to 12345 for support</p>
                  </div>
                )}

                {/* Show business details for specific businesses */}
                {(currentStep.includes('details') && !currentStep.includes('hours') && !currentStep.includes('call') && !currentStep.includes('sms')) && (
                  <div className="mb-3 text-xs">
                    {currentStep === 'thabo-details' && (
                      <>
                        <p>Auto Repair • 4.8★ (127 reviews)</p>
                        <p>123 Main St, JHB • 0.8km away</p>
                        <p>Open: Mon-Fri 8AM-6PM</p>
                      </>
                    )}
                    {currentStep.includes('zulu-details') && (
                      <>
                        <p>Traditional South African cuisine</p>
                        <p>456 Heritage Rd • 1.2km away</p>
                        <p>Open: Daily 11AM-10PM</p>
                      </>
                    )}
                  </div>
                )}
              </div>

              {/* Options */}
              <div className="space-y-1">
                {currentFlow?.options.map((option, index) => (
                  <div key={index} className="text-xs">
                    {option.key}. {option.text}
                  </div>
                ))}
              </div>

              {/* Input prompt */}
              <div className="mt-3 pt-2 border-t border-black">
                <p className="text-xs">Reply: {inputValue}_</p>
              </div>
            </div>

            {/* Phone Keypad */}
            <div className="mt-6">
              <div className="grid grid-cols-3 gap-2">
                {['1', '2', '3', '4', '5', '6', '7', '8', '9', '*', '0', '#'].map((key) => (
                  <Button
                    key={key}
                    variant="outline"
                    className="h-12 bg-slate-800 border-slate-600 text-white hover:bg-slate-700"
                    onClick={() => {
                      if (key === '*' || key === '#') {
                        setInputValue(prev => prev + key);
                      } else {
                        setInputValue(key);
                        handleInput(key);
                      }
                    }}
                  >
                    {key}
                  </Button>
                ))}
              </div>
              
              <div className="mt-4 flex gap-2">
                <Button 
                  className="flex-1 bg-green-600 hover:bg-green-700"
                  onClick={() => {
                    if (inputValue) {
                      handleInput(inputValue);
                    }
                  }}
                >
                  Send
                </Button>
                <Button 
                  variant="outline" 
                  className="bg-red-600 text-white border-red-600 hover:bg-red-700"
                  onClick={() => onNavigate('landing')}
                >
                  End
                </Button>
              </div>
            </div>
          </div>

          {/* Info Footer */}
          <Card className="mt-6">
            <CardContent className="p-4">
              <div className="text-center text-sm text-muted-foreground">
                <p className="mb-2">This USSD interface works on:</p>
                <div className="flex justify-center gap-4 text-xs">
                  <span>• Feature phones</span>
                  <span>• Smartphones</span>
                  <span>• No internet required</span>
                  <span>• Works everywhere</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
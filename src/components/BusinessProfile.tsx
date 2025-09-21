import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import { 
  Star, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare, 
  ArrowLeft,
  Share2,
  Heart,
  Navigation,
  Camera
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import type { PageType } from '../App';

interface BusinessProfileProps {
  onNavigate: (page: PageType) => void;
  businessId: string | null;
}

const businessData = {
  name: "Thabo's Auto Repair",
  category: "Automotive Services",
  description: "Professional automotive repair services with over 15 years of experience. We specialize in engine diagnostics, brake repairs, transmission services, and general maintenance for all vehicle makes and models. Our certified technicians use state-of-the-art equipment to ensure your vehicle runs safely and efficiently.",
  rating: 4.8,
  reviews: 127,
  phone: "+27 11 123 4567",
  email: "info@thabosauto.co.za",
  address: "123 Main Street, Johannesburg, Gauteng 2001",
  hours: {
    "Monday": "8:00 AM - 6:00 PM",
    "Tuesday": "8:00 AM - 6:00 PM", 
    "Wednesday": "8:00 AM - 6:00 PM",
    "Thursday": "8:00 AM - 6:00 PM",
    "Friday": "8:00 AM - 6:00 PM",
    "Saturday": "8:00 AM - 4:00 PM",
    "Sunday": "Closed"
  },
  images: [
    "https://images.unsplash.com/photo-1631720040176-0d789a643a78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvJTIwbWVjaGFuaWMlMjBnYXJhZ2V8ZW58MXx8fHwxNzU4MzczNjY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1687422808191-93810cd07ab0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFsbCUyMGJ1c2luZXNzJTIwb3duZXIlMjBhZnJpY2FufGVufDF8fHx8MTc1ODM3MzY2OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  ],
  services: [
    "Engine Diagnostics & Repair",
    "Brake System Service",
    "Transmission Repair",
    "Oil Changes & Maintenance",
    "Electrical System Repair",
    "Air Conditioning Service",
    "Tire Installation & Balancing",
    "Battery Replacement"
  ],
  isOpen: true,
  distance: "0.8 km"
};

const reviews = [
  {
    name: "Sarah Mitchell",
    rating: 5,
    date: "2 days ago",
    comment: "Excellent service! Thabo diagnosed my engine problem quickly and fixed it at a fair price. Highly recommend!"
  },
  {
    name: "John Davies", 
    rating: 5,
    date: "1 week ago",
    comment: "Professional and honest. They explained everything clearly and didn't try to oversell unnecessary services."
  },
  {
    name: "Mary Kumalo",
    rating: 4,
    date: "2 weeks ago", 
    comment: "Good quality work and reasonable prices. The only thing is they can get quite busy, so book ahead."
  }
];

export function BusinessProfile({ onNavigate, businessId }: BusinessProfileProps) {
  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="px-4 py-4">
          <div className="flex items-center justify-between">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => onNavigate('customer-discovery')}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Search
            </Button>
            <div className="flex gap-2">
              <Button variant="ghost" size="sm">
                <Heart className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Share2 className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="px-4 py-6">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Business Header */}
          <Card>
            <CardContent className="p-0">
              <div className="relative">
                <ImageWithFallback 
                  src={businessData.images[0]}
                  alt={businessData.name}
                  className="w-full h-64 object-cover rounded-t-lg"
                />
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm ${
                  businessData.isOpen ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}>
                  {businessData.isOpen ? 'Open Now' : 'Closed'}
                </div>
                <Button 
                  variant="secondary" 
                  size="sm" 
                  className="absolute bottom-4 right-4"
                >
                  <Camera className="w-4 h-4 mr-2" />
                  View Photos
                </Button>
              </div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h1 className="text-2xl mb-2">{businessData.name}</h1>
                    <Badge variant="outline" className="mb-3">
                      {businessData.category}
                    </Badge>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span>{businessData.rating}</span>
                        <span>({businessData.reviews} reviews)</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Navigation className="w-4 h-4" />
                        <span>{businessData.distance} away</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6">
                  {businessData.description}
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <Button className="bg-blue-600 hover:bg-blue-700" onClick={() => onNavigate('engagement')}>
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                  <Button variant="outline">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Contact Information */}
            <div className="md:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <p>{businessData.phone}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p>{businessData.email}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-muted-foreground mt-1" />
                    <div>
                      <p className="text-sm text-muted-foreground">Address</p>
                      <p>{businessData.address}</p>
                      <Button variant="link" className="h-auto p-0 text-blue-600">
                        Get Directions
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Services */}
              <Card>
                <CardHeader>
                  <CardTitle>Services Offered</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {businessData.services.map((service, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                        <span className="text-sm">{service}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Reviews */}
              <Card>
                <CardHeader>
                  <CardTitle>Customer Reviews</CardTitle>
                  <CardDescription>
                    What customers are saying about {businessData.name}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {reviews.map((review, index) => (
                    <div key={index}>
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <p className="text-sm">{review.name}</p>
                          <p className="text-xs text-muted-foreground">{review.date}</p>
                        </div>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`w-4 h-4 ${
                                i < review.rating 
                                  ? 'fill-yellow-400 text-yellow-400' 
                                  : 'text-gray-300'
                              }`} 
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">{review.comment}</p>
                      {index < reviews.length - 1 && <Separator className="mt-4" />}
                    </div>
                  ))}
                  
                  <Button variant="outline" className="w-full">
                    View All Reviews
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Business Hours */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    Business Hours
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {Object.entries(businessData.hours).map(([day, hours]) => (
                    <div key={day} className="flex justify-between items-center">
                      <span className="text-sm">{day}</span>
                      <span className="text-sm text-muted-foreground">{hours}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full justify-start" variant="outline">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Request Quote
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <Clock className="w-4 h-4 mr-2" />
                    Book Appointment
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <Star className="w-4 h-4 mr-2" />
                    Write Review
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
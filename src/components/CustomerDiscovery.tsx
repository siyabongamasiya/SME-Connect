import { useState } from 'react';
import { Button } from './ui/Button';
import { Input } from './ui/Input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/Card';
import { Badge } from './ui/Badge';
import { 
  Search, 
  MapPin, 
  Filter, 
  Star, 
  Phone, 
  MessageSquare, 
  Clock,
  ArrowLeft,
  Map,
  List,
  Navigation
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import type { PageType } from '../App';

interface CustomerDiscoveryProps {
  onNavigate: (page: PageType, businessId?: string) => void;
}

const sampleBusinesses = [
  {
    id: '1',
    name: "Thabo's Auto Repair",
    category: "Automotive",
    description: "Professional automotive repair services with 15+ years experience",
    rating: 4.8,
    reviews: 127,
    distance: "0.8 km",
    address: "123 Main Street, Johannesburg",
    phone: "+27 11 123 4567",
    hours: "Mon-Fri 8AM-6PM",
    image: "https://images.unsplash.com/photo-1631720040176-0d789a643a78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvJTIwbWVjaGFuaWMlMjBnYXJhZ2V8ZW58MXx8fHwxNzU4MzczNjY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isOpen: true,
    featured: true
  },
  {
    id: '2',
    name: "Mama Zulu's Kitchen",
    category: "Restaurant",
    description: "Authentic South African cuisine with traditional flavors",
    rating: 4.6,
    reviews: 89,
    distance: "1.2 km",
    address: "456 Heritage Road, Johannesburg",
    phone: "+27 11 456 7890",
    hours: "Daily 11AM-10PM",
    image: "https://images.unsplash.com/photo-1711721013667-d233b9181f2e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2NhbCUyMHJlc3RhdXJhbnQlMjBzb3V0aCUyMGFmcmljYXxlbnwxfHx8fDE3NTgzNzM2Njl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isOpen: true,
    featured: false
  },
  {
    id: '3',
    name: "Style & Grace Hair Salon",
    category: "Beauty & Health",
    description: "Modern hair styling and beauty treatments for everyone",
    rating: 4.9,
    reviews: 156,
    distance: "0.5 km",
    address: "789 Fashion Avenue, Johannesburg",
    phone: "+27 11 789 0123",
    hours: "Tue-Sat 9AM-7PM",
    image: "https://images.unsplash.com/photo-1593702295094-aea22597af65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWlyJTIwc2Fsb24lMjBiYXJiZXIlMjBzaG9wfGVufDF8fHx8MTc1ODM3MzY2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isOpen: false,
    featured: true
  },
  {
    id: '4',
    name: "Fresh Market Grocery",
    category: "Grocery",
    description: "Fresh produce and daily essentials for your family",
    rating: 4.4,
    reviews: 203,
    distance: "2.1 km",
    address: "321 Market Street, Johannesburg",
    phone: "+27 11 321 6547",
    hours: "Daily 7AM-9PM",
    image: "https://images.unsplash.com/photo-1644501810962-3a7428e1df93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncm9jZXJ5JTIwc3RvcmUlMjBtYXJrZXR8ZW58MXx8fHwxNzU4MzczNjcwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isOpen: true,
    featured: false
  }
];

const categories = ["All", "Automotive", "Restaurant", "Beauty & Health", "Grocery", "Electronics", "Clothing"];

export function CustomerDiscovery({ onNavigate }: CustomerDiscoveryProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState<'list' | 'map'>('list');

  const filteredBusinesses = sampleBusinesses.filter(business => {
    const matchesSearch = business.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         business.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || business.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const BusinessCard = ({ business }: { business: typeof sampleBusinesses[0] }) => (
    <Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={() => onNavigate('business-profile', business.id)}>
      <div className="relative">
        <ImageWithFallback 
          src={business.image}
          alt={business.name}
          className="w-full h-48 object-cover rounded-t-lg"
        />
        {business.featured && (
          <Badge className="absolute top-3 left-3 bg-green-600 text-white">
            Featured
          </Badge>
        )}
        <div className={`absolute top-3 right-3 px-2 py-1 rounded-full text-xs ${
          business.isOpen ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
        }`}>
          {business.isOpen ? 'Open' : 'Closed'}
        </div>
      </div>
      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h3 className="mb-1">{business.name}</h3>
            <Badge variant="outline" className="text-xs">
              {business.category}
            </Badge>
          </div>
          <div className="text-right text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Navigation className="w-3 h-3" />
              {business.distance}
            </div>
          </div>
        </div>
        
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
          {business.description}
        </p>
        
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm">{business.rating}</span>
          </div>
          <span className="text-sm text-muted-foreground">({business.reviews} reviews)</span>
        </div>
        
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
          <MapPin className="w-4 h-4" />
          <span className="line-clamp-1">{business.address}</span>
        </div>
        
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <Clock className="w-4 h-4" />
          <span>{business.hours}</span>
        </div>
        
        <div className="flex gap-2">
          <Button size="sm" className="flex-1">
            <Phone className="w-4 h-4 mr-2" />
            Call
          </Button>
          <Button size="sm" variant="outline" className="flex-1" onClick={(e) => {
            e.stopPropagation();
            onNavigate('engagement');
          }}>
            <MessageSquare className="w-4 h-4 mr-2" />
            Message
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
                onClick={() => onNavigate('landing')}
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
              <div>
                <h1 className="text-xl">Discover Local Businesses</h1>
                <p className="text-sm text-muted-foreground">Find trusted services in your area</p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button 
                variant={viewMode === 'list' ? 'default' : 'outline'} 
                size="sm"
                onClick={() => setViewMode('list')}
              >
                <List className="w-4 h-4" />
              </Button>
              <Button 
                variant={viewMode === 'map' ? 'default' : 'outline'} 
                size="sm"
                onClick={() => setViewMode('map')}
              >
                <Map className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="px-4 py-6">
        <div className="max-w-6xl mx-auto">
          {/* Search and Filters */}
          <div className="mb-6 space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input 
                placeholder="Search for businesses, services, or products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <div className="flex gap-2 overflow-x-auto pb-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="whitespace-nowrap"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {viewMode === 'list' ? (
            <div className="space-y-6">
              {/* Featured Businesses */}
              {filteredBusinesses.some(b => b.featured) && (
                <div>
                  <h2 className="text-lg mb-4">Featured Businesses</h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredBusinesses
                      .filter(business => business.featured)
                      .map((business) => (
                        <BusinessCard key={business.id} business={business} />
                      ))}
                  </div>
                </div>
              )}

              {/* All Businesses */}
              <div>
                <h2 className="text-lg mb-4">
                  {filteredBusinesses.some(b => b.featured) ? 'All Businesses' : 'Local Businesses'}
                  <span className="text-sm text-muted-foreground ml-2">
                    ({filteredBusinesses.length} found)
                  </span>
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredBusinesses.map((business) => (
                    <BusinessCard key={business.id} business={business} />
                  ))}
                </div>
              </div>

              {filteredBusinesses.length === 0 && (
                <div className="text-center py-12">
                  <Search className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg mb-2">No businesses found</h3>
                  <p className="text-muted-foreground">
                    Try adjusting your search terms or category filters
                  </p>
                </div>
              )}
            </div>
          ) : (
            <Card className="h-96">
              <CardContent className="p-6 h-full flex items-center justify-center">
                <div className="text-center">
                  <Map className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg mb-2">Interactive Map</h3>
                  <p className="text-muted-foreground mb-4">
                    View businesses on a map with real-time locations
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    {filteredBusinesses.slice(0, 4).map((business) => (
                      <div key={business.id} className="p-2 bg-muted rounded flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="truncate">{business.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
import { Link } from 'wouter';
import { useState } from 'react';

const categories = [
  { id: 'all', name: 'All Games', active: true },
  { id: 'adventure', name: 'Adventure', active: false },
  { id: 'puzzle', name: 'Puzzle', active: false },
  { id: 'educational', name: 'Educational', active: false },
];

const games = [
  {
    id: 1,
    title: 'Space Adventure',
    creator: 'Johnson Family',
    image: 'https://images.unsplash.com/photo-1566694271453-390536dd1f0d?auto=format&fit=crop&w=500&h=300',
    category: 'Adventure',
    rating: 4,
    plays: 254
  },
  {
    id: 2,
    title: 'Ocean Explorer',
    creator: 'Martinez Family',
    image: 'https://images.unsplash.com/photo-1560273633-5dfe5c5aede4?auto=format&fit=crop&w=500&h=300',
    category: 'Educational',
    rating: 3.5,
    plays: 178
  },
  {
    id: 3,
    title: 'Math Heroes',
    creator: 'Wilson Family',
    image: 'https://images.unsplash.com/photo-1553481187-be93c21490a9?auto=format&fit=crop&w=500&h=300',
    category: 'Educational',
    rating: 5,
    plays: 342
  },
  {
    id: 4,
    title: 'Forest Maze',
    creator: 'Thompson Family',
    image: 'https://images.unsplash.com/photo-1551103782-8ab07afd45c1?auto=format&fit=crop&w=500&h=300',
    category: 'Puzzle',
    rating: 4,
    plays: 198
  }
];

export default function Discover() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Filter games based on active category and search query
  const filteredGames = games.filter(game => {
    const matchesCategory = activeCategory === 'all' || game.category.toLowerCase() === activeCategory.toLowerCase();
    const matchesSearch = !searchQuery || 
      game.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      game.creator.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });
  
  // Render stars based on rating
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={`full-${i}`} className="ri-star-fill text-secondary text-sm"></i>);
    }
    
    if (hasHalfStar) {
      stars.push(<i key="half" className="ri-star-half-fill text-secondary text-sm"></i>);
    }
    
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<i key={`empty-${i}`} className="ri-star-line text-secondary text-sm"></i>);
    }
    
    return stars;
  };
  
  return (
    <section id="discover" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-fredoka text-3xl md:text-4xl text-primary mb-4">Discover Family Creations</h2>
          <p className="text-dark/70 max-w-2xl mx-auto">Browse through games created by families just like yours.</p>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button 
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full font-nunito font-bold text-sm ${
                  activeCategory === category.id 
                    ? 'bg-primary text-white' 
                    : 'bg-white text-dark border border-gray-200 hover:bg-gray-50'
                } transition-colors`}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          <div className="w-full md:w-auto">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search games..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
              <i className="ri-search-line absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredGames.map(game => (
            <div key={game.id} className="game-card bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all">
              <div className="relative">
                <img 
                  src={game.image} 
                  className="w-full h-48 object-cover" 
                  alt={`${game.title} game`} 
                />
                <div className="game-card-overlay absolute inset-0 bg-primary/60 flex items-center justify-center opacity-0 transition-opacity">
                  <button className="px-4 py-2 bg-white text-primary rounded-full font-nunito font-bold hover:bg-gray-100 transition-colors">
                    Play Now
                  </button>
                </div>
                <div className={`absolute top-3 right-3 ${
                  game.category === 'Adventure' ? 'bg-secondary' : 
                  game.category === 'Educational' ? 'bg-accent' : 
                  'bg-secondary'
                } text-white text-xs px-2 py-1 rounded-full`}>
                  {game.category}
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-nunito font-bold text-lg">{game.title}</h3>
                <p className="text-dark/70 text-sm">By {game.creator}</p>
                <div className="flex justify-between items-center mt-3">
                  <div className="flex">
                    {renderStars(game.rating)}
                  </div>
                  <span className="text-xs text-dark/50">{game.plays} plays</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <Link href="#browse-all" className="px-6 py-3 bg-white text-primary border-2 border-primary rounded-full font-nunito font-bold hover:bg-primary/5 transition-all inline-flex items-center">
            Browse All Games
            <i className="ri-arrow-right-line ml-2"></i>
          </Link>
        </div>
      </div>
    </section>
  );
}

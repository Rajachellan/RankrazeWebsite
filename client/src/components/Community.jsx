import { Link } from 'wouter';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Parent of 3',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150',
    quote: 'GameCraft Kids has become our family favorite weekend activity. We take turns creating levels for each other to solve!'
  },
  {
    id: 2,
    name: 'Michael Rodriguez',
    role: 'Dad & Teacher',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150',
    quote: 'As both a parent and educator, I love how this platform encourages creativity while teaching basic logic and problem-solving.'
  },
  {
    id: 3,
    name: 'Emma Thompson',
    role: 'Mom of twins',
    image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?auto=format&fit=crop&w=150&h=150',
    quote: 'My 8-year-old twins have created the most imaginative games. The interface is so intuitive they hardly needed my help!'
  }
];

export default function Community() {
  return (
    <section id="community" className="py-16 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-fredoka text-3xl md:text-4xl text-primary mb-4">Join Our Community</h2>
          <p className="text-dark/70 max-w-2xl mx-auto">Connect with thousands of families creating and sharing games together.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          {/* Community stats */}
          <div className="bg-white rounded-xl shadow-md p-8">
            <h3 className="font-nunito font-bold text-2xl mb-6 text-primary">Growing Every Day</h3>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="font-fredoka text-4xl text-secondary mb-2">5,000+</div>
                <p className="text-dark/70">Families</p>
              </div>
              <div className="text-center">
                <div className="font-fredoka text-4xl text-secondary mb-2">12,000+</div>
                <p className="text-dark/70">Games Created</p>
              </div>
              <div className="text-center">
                <div className="font-fredoka text-4xl text-accent mb-2">300+</div>
                <p className="text-dark/70">Daily Creations</p>
              </div>
              <div className="text-center">
                <div className="font-fredoka text-4xl text-accent mb-2">98%</div>
                <p className="text-dark/70">Happy Families</p>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="font-nunito font-bold text-lg mb-3">Weekly Online Events</h4>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <i className="ri-calendar-event-line text-primary mr-2"></i>
                  <span>Game Creation Contests</span>
                </li>
                <li className="flex items-center">
                  <i className="ri-calendar-event-line text-primary mr-2"></i>
                  <span>Family Game Nights</span>
                </li>
                <li className="flex items-center">
                  <i className="ri-calendar-event-line text-primary mr-2"></i>
                  <span>Parent Workshops</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Testimonials */}
          <div>
            <h3 className="font-nunito font-bold text-2xl mb-6 text-accent">What Families Say</h3>
            
            <div className="space-y-6">
              {testimonials.map(testimonial => (
                <div key={testimonial.id} className="bg-white p-5 rounded-xl shadow-md relative">
                  <div className="flex items-center mb-4">
                    <img 
                      src={testimonial.image} 
                      className="w-12 h-12 rounded-full mr-4" 
                      alt={`Photo of ${testimonial.name}`} 
                    />
                    <div>
                      <h4 className="font-nunito font-bold">{testimonial.name}</h4>
                      <p className="text-sm text-dark/60">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-dark/80 italic">"{testimonial.quote}"</p>
                  <div className="absolute top-4 right-4 text-accent/20">
                    <i className="ri-double-quotes-r text-4xl"></i>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-16">
          <div className="bg-primary/10 rounded-xl p-8 md:p-12 text-center max-w-4xl mx-auto">
            <h3 className="font-fredoka text-2xl md:text-3xl text-primary mb-4">Ready to Start Creating?</h3>
            <p className="text-dark/70 mb-8 max-w-2xl mx-auto">Join thousands of families making memories through creative game design.</p>
            <Link href="#signup" className="px-8 py-4 bg-primary text-white rounded-full font-nunito font-bold text-lg hover:bg-opacity-90 transform hover:-translate-y-1 transition-all shadow-lg inline-flex items-center">
              <i className="ri-user-add-line mr-2"></i>
              Sign Up - It's Free!
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
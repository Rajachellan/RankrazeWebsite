import { Link } from 'wouter';

const testimonials = [
  {
    id: 1,
    name: 'Anderson Family',
    avatar: 'https://images.unsplash.com/photo-1491013516836-7db643ee125a?auto=format&fit=crop&w=80&h=80',
    rating: 5,
    comment: '"GameCraft Kids has become our family\'s favorite weekend activity. We love creating games together and the kids are learning so much!"'
  },
  {
    id: 2,
    name: 'Garcia Family',
    avatar: 'https://images.unsplash.com/photo-1524503033411-c9566986fc8f?auto=format&fit=crop&w=80&h=80',
    rating: 4.5,
    comment: '"The sound design is amazing! My kids get so excited about adding different music to their games. It\'s educational and creative at the same time."'
  },
  {
    id: 3,
    name: 'Thompson Family',
    avatar: 'https://images.unsplash.com/photo-1596564816563-ccd76ade7f16?auto=format&fit=crop&w=80&h=80',
    rating: 5,
    comment: '"We\'ve connected with families from around the world through GameCraft Kids. Sharing our creations and playing other families\' games has been amazing!"'
  }
];

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

export default function Community() {
  return (
    <section id="community" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-fredoka text-3xl md:text-4xl text-primary mb-4">Join Our Family Community</h2>
          <p className="text-dark/70 max-w-2xl mx-auto">Connect with other families, share your creations, and discover new games together.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="bg-light p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.avatar} 
                  className="w-12 h-12 rounded-full mr-3" 
                  alt={`${testimonial.name} avatar`} 
                />
                <div>
                  <h4 className="font-nunito font-bold">{testimonial.name}</h4>
                  <div className="flex">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
              </div>
              <p className="text-dark/70">{testimonial.comment}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-primary to-accent rounded-2xl overflow-hidden shadow-lg max-w-5xl mx-auto">
          <div className="p-8 md:p-12 flex flex-col md:flex-row items-center">
            <div className="w-full md:w-2/3 mb-8 md:mb-0">
              <h3 className="font-fredoka text-2xl md:text-3xl text-white mb-4">Ready to create with your family?</h3>
              <p className="text-white/80 mb-6">Join thousands of families creating, sharing, and playing together on GameCraft Kids.</p>
              <div className="flex flex-wrap gap-4">
                <Link href="#sign-up" className="px-6 py-3 bg-white text-primary rounded-full font-nunito font-bold hover:bg-gray-100 transition-colors">
                  Sign Up - Free!
                </Link>
                <Link href="#learn-more" className="px-6 py-3 bg-transparent text-white border-2 border-white rounded-full font-nunito font-bold hover:bg-white/10 transition-colors">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="w-full md:w-1/3">
              <img 
                src="https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=400&h=300" 
                className="w-full rounded-lg shadow-md transform rotate-3" 
                alt="Happy family playing together" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Link } from 'wouter';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10 p-4 text-center">
      <div className="mb-8">
        <h1 className="font-fredoka text-7xl text-primary mb-4">Oops!</h1>
        <p className="text-xl text-dark/80 max-w-lg mx-auto">
          We couldn't find the page you're looking for. It might have been moved or doesn't exist.
        </p>
      </div>
      
      <div className="mb-12">
        <img 
          src="https://images.unsplash.com/photo-1595433707802-6b2626ef1c91?auto=format&fit=crop&w=400&h=300" 
          alt="Lost character" 
          className="w-60 h-auto rounded-lg shadow-lg animate-wiggle mx-auto"
        />
      </div>
      
      <Link href="/" className="px-8 py-4 bg-primary text-white rounded-full font-nunito font-bold text-lg hover:bg-opacity-90 transform hover:-translate-y-1 transition-all shadow-lg">
        <i className="ri-home-line mr-2"></i>
        Go back home
      </Link>
    </div>
  );
}
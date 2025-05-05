import { Link } from 'wouter';

const creationTools = [
  {
    icon: "ri-landscape-line",
    title: "Environments",
    description: "Choose from forests, oceans, space and more.",
    bgColor: "bg-primary/10",
    textColor: "text-primary"
  },
  {
    icon: "ri-character-recognition-line",
    title: "Characters",
    description: "Add heroes, animals, and fantasy creatures.",
    bgColor: "bg-secondary/10",
    textColor: "text-secondary"
  },
  {
    icon: "ri-puzzle-line",
    title: "Puzzles",
    description: "Create challenges and problem-solving tasks.",
    bgColor: "bg-accent/10",
    textColor: "text-accent"
  },
  {
    icon: "ri-music-2-line",
    title: "Sounds",
    description: "Add music and sound effects to your game.",
    bgColor: "bg-primary/10",
    textColor: "text-primary"
  }
];

export default function Create() {
  return (
    <section id="create" className="py-16 bg-gradient-to-br from-accent/5 to-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-fredoka text-3xl md:text-4xl text-primary mb-4">Unleash Your Creativity</h2>
          <p className="text-dark/70 max-w-2xl mx-auto">Simple tools that make game creation fun for the whole family.</p>
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          {/* Creation tools */}
          <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
            {creationTools.map((tool, index) => (
              <div 
                key={index}
                className="creation-tool bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <div className={`w-12 h-12 mb-3 ${tool.bgColor} rounded-full flex items-center justify-center ${tool.textColor}`}>
                  <i className={`${tool.icon} text-2xl`}></i>
                </div>
                <h4 className="font-nunito font-bold text-lg mb-1">{tool.title}</h4>
                <p className="text-dark/70 text-sm">{tool.description}</p>
              </div>
            ))}
          </div>
          
          {/* Creation preview */}
          <div className="w-full md:w-1/2">
            <div className="bg-white p-5 rounded-xl shadow-lg max-w-lg mx-auto">
              <div className="rounded-lg bg-gray-50 p-4 border-2 border-dashed border-gray-200 relative overflow-hidden" style={{ height: '300px' }}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <i className="ri-add-circle-line text-5xl text-primary opacity-50"></i>
                    <p className="font-nunito font-bold text-lg mt-2 text-dark/50">Start Building Your Game</p>
                    <p className="text-sm text-dark/40 max-w-xs mx-auto mt-2">Drag and drop elements from the tools menu to create your game world</p>
                  </div>
                </div>
                
                {/* Sample editor elements, positioned absolutely */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-green-400/30 to-transparent"></div>
                <img 
                  src="https://images.unsplash.com/photo-1516222513580-2f416fc4e4f4?auto=format&fit=crop&w=80&h=80" 
                  className="absolute bottom-5 left-10 w-16 h-16 rounded-lg shadow-md cursor-move" 
                  alt="Game character" 
                />
                <div className="absolute top-5 right-5 bg-white/80 backdrop-blur-sm p-2 rounded-lg shadow-sm">
                  <div className="flex space-x-2">
                    <button className="w-8 h-8 flex items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                      <i className="ri-save-line"></i>
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center rounded-full bg-secondary/10 text-secondary hover:bg-secondary/20 transition-colors">
                      <i className="ri-play-fill"></i>
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="mt-5">
                <div className="flex justify-between items-center mb-3">
                  <h4 className="font-nunito font-bold">Sound Settings</h4>
                  <div className="flex space-x-2">
                    <button className="w-8 h-8 flex items-center justify-center rounded-full bg-accent/10 text-accent hover:bg-accent/20 transition-colors">
                      <i className="ri-music-2-line"></i>
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center rounded-full bg-accent/10 text-accent hover:bg-accent/20 transition-colors">
                      <i className="ri-volume-up-line"></i>
                    </button>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-2">
                  <div className="p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors">
                    <div className="text-center">
                      <i className="ri-music-2-line text-lg text-primary"></i>
                      <p className="text-xs mt-1 text-dark/70">Happy</p>
                    </div>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors">
                    <div className="text-center">
                      <i className="ri-music-2-line text-lg text-primary"></i>
                      <p className="text-xs mt-1 text-dark/70">Adventure</p>
                    </div>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors">
                    <div className="text-center">
                      <i className="ri-music-2-line text-lg text-primary"></i>
                      <p className="text-xs mt-1 text-dark/70">Relaxing</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <Link href="#tutorial" className="px-8 py-4 bg-primary text-white rounded-full font-nunito font-bold text-lg hover:bg-opacity-90 transform hover:-translate-y-1 transition-all shadow-lg inline-flex items-center">
            <i className="ri-vidicon-line mr-2"></i>
            Watch Tutorial
          </Link>
        </div>
      </div>
    </section>
  );
}
const HeroSection = () => {
  return (
    <section className="relative h-[600px] flex items-center justify-center">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20" />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl px-4">
        <h1 className="text-5xl font-bold mb-6 text-text-primary">
          Empowering Seniors in the Digital World
        </h1>
        <p className="text-xl text-text-secondary mb-8">
          Simple, safe, and accessible technology learning for seniors
        </p>
        <div className="flex justify-center space-x-4">
          <button className="btn-primary">
            Get Started
          </button>
          <button className="btn-primary bg-transparent border border-primary text-primary hover:bg-primary/10">
            Learn More
          </button>
        </div>
      </div>
    </section>
  )
}

export default HeroSection

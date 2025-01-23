const FeatureCard = ({ icon: Icon, title, description, color }: { icon: React.ElementType, title: string, description: string, color: string }) => {
  return (
    <div className="card p-8 hover:shadow-lg transition-shadow">
      <div className={`w-16 h-16 ${color} mb-6`}>
        <Icon className="w-full h-full" />
      </div>
      <h3 className="text-2xl font-bold text-text-primary mb-4">
        {title}
      </h3>
      <p className="text-text-secondary">
        {description}
      </p>
    </div>
  )
}

export default FeatureCard

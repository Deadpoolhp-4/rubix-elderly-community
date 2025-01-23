import React from 'react'

type GuideCardProps = {
  guide: {
    icon: React.ReactNode;
    title: string;
  };
  isSelected: boolean;
  onClick: () => void;
};

const GuideCard: React.FC<GuideCardProps> = ({ guide, isSelected, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left p-6 rounded-lg transition-colors ${
        isSelected ? 'bg-blue-500 text-white' : 'bg-white hover:bg-blue-100'
      } shadow-lg`}
    >
      <div className="flex items-center space-x-4">
        <span className="text-3xl">{guide.icon}</span>
        <div>
          <h3 className="text-2xl font-semibold">{guide.title}</h3>
        </div>
      </div>
    </button>
  )
}

export default GuideCard

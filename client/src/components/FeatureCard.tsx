import { Link } from 'react-router-dom';

interface FeatureCardProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  color: string;
  link: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description, color, link }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg transition-shadow p-6 flex flex-col justify-between border-l-4 border-transparent hover:border-blue-500 hover:shadow-xl w-full text-left transform hover:scale-105">
      <div className={`flex items-center mb-4 ${color}`}>
        <Icon className="w-10 h-10" />
        <h3 className="text-xl font-bold text-gray-800 ml-4">{title}</h3>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <button onClick={() => { link }} className="btn-primary mt-4">
        Learn More
      </button>
    </div>
  );
};

export default FeatureCard;

import { useEffect, useState } from 'react';
import { db } from '../../firebase';
import { collection, onSnapshot } from 'firebase/firestore';
import DiscussionCard from './components/DiscussionCard';

const ForumsPage = ({ user }: { user: any }) => {
  const [discussions, setDiscussions] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'discussions'), (querySnapshot) => {
      const discussionsData: any[] = [];
      querySnapshot.forEach((doc) => {
        discussionsData.push({ id: doc.id, ...doc.data() });
      });
      setDiscussions(discussionsData as never[]);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="pt-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-text-primary mb-8">Community Discussions</h1>
        <div className="space-y-4">
          {discussions.map((discussion: any) => (
            <DiscussionCard 
              key={discussion.id} 
              discussion={discussion} 
              isAdmin={user?.isAdmin} 
              onDelete={async () => {}} 
              onUpvote={async () => {}}
              onDownvote={async () => {}}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ForumsPage; 
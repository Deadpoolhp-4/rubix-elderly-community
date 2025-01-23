
interface DiscussionCardProps {
  discussion: { id: string; title: string; content: string; author: string; timestamp: Date; upvotes: number; comments: any[]; topic: string };
  isAdmin: boolean;
  onDelete: () => void;
  onUpvote: () => Promise<void>;
  onDownvote: () => Promise<void>;
}

import { useState } from "react";
import { Heart, Repeat2, MessageCircle, Share, BarChart3, BadgeCheck } from "lucide-react";
import type { Post } from "@/lib/mockData";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface PostCardProps {
  post: Post;
}

const formatCount = (n: number) => {
  if (n >= 1000000) return (n / 1000000).toFixed(1) + "M";
  if (n >= 1000) return (n / 1000).toFixed(1) + "K";
  return n.toString();
};

const PostCard = ({ post }: PostCardProps) => {
  const [liked, setLiked] = useState(post.liked);
  const [retweeted, setRetweeted] = useState(post.retweeted);
  const [likeCount, setLikeCount] = useState(post.likes);
  const [retweetCount, setRetweetCount] = useState(post.retweets);

  const toggleLike = () => {
    setLiked(!liked);
    setLikeCount((c) => (liked ? c - 1 : c + 1));
  };

  const toggleRetweet = () => {
    setRetweeted(!retweeted);
    setRetweetCount((c) => (retweeted ? c - 1 : c + 1));
  };

  const actions = [
    {
      icon: MessageCircle,
      count: post.replies,
      active: false,
      onClick: () => {},
      hoverColor: "hover:text-primary hover:bg-primary/10",
      activeColor: "",
    },
    {
      icon: Repeat2,
      count: retweetCount,
      active: retweeted,
      onClick: toggleRetweet,
      hoverColor: "hover:text-success hover:bg-success/10",
      activeColor: "text-success",
    },
    {
      icon: Heart,
      count: likeCount,
      active: liked,
      onClick: toggleLike,
      hoverColor: "hover:text-destructive hover:bg-destructive/10",
      activeColor: "text-destructive",
    },
    {
      icon: BarChart3,
      count: post.views,
      active: false,
      onClick: () => {},
      hoverColor: "hover:text-primary hover:bg-primary/10",
      activeColor: "",
    },
  ];

  return (
    <article className="flex gap-3 border-b border-border px-4 py-3 transition-colors hover:bg-card/50 cursor-pointer">
      <Avatar className="h-10 w-10 shrink-0">
        <AvatarImage src={post.user.avatar} />
        <AvatarFallback>{post.user.name[0]}</AvatarFallback>
      </Avatar>
      <div className="min-w-0 flex-1">
        {/* Header */}
        <div className="flex items-center gap-1 text-sm">
          <span className="truncate font-bold">{post.user.name}</span>
          {post.user.verified && <BadgeCheck className="h-4 w-4 shrink-0 text-primary" />}
          <span className="truncate text-muted-foreground">@{post.user.handle}</span>
          <span className="text-muted-foreground">·</span>
          <span className="shrink-0 text-muted-foreground">{post.timestamp}</span>
        </div>

        {/* Content */}
        <p className="mt-1 whitespace-pre-wrap text-[15px] leading-relaxed">{post.content}</p>

        {/* Actions */}
        <div className="-ml-2 mt-2 flex max-w-md justify-between">
          {actions.map((action, i) => (
            <button
              key={i}
              onClick={(e) => {
                e.stopPropagation();
                action.onClick();
              }}
              className={`group flex items-center gap-1 ${action.active ? action.activeColor : "text-muted-foreground"}`}
            >
              <span className={`rounded-full p-2 transition-colors ${action.hoverColor}`}>
                <action.icon className={`h-[18px] w-[18px] ${action.active && action.icon === Heart ? "fill-current" : ""}`} />
              </span>
              <span className={`text-xs transition-colors ${action.hoverColor.split(" ")[0]}`}>
                {formatCount(action.count)}
              </span>
            </button>
          ))}
          <button className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary">
            <Share className="h-[18px] w-[18px]" />
          </button>
        </div>
      </div>
    </article>
  );
};

export default PostCard;

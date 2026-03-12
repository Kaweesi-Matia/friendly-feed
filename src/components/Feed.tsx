import { useState } from "react";
import { Sparkles } from "lucide-react";
import { posts as initialPosts, currentUser } from "@/lib/mockData";
import type { Post } from "@/lib/mockData";
import ComposeBox from "./ComposeBox";
import PostCard from "./PostCard";

const Feed = () => {
  const [posts, setPosts] = useState<Post[]>(initialPosts);
  const [activeTab, setActiveTab] = useState<"foryou" | "following">("foryou");

  const handlePost = (content: string) => {
    const newPost: Post = {
      id: Date.now().toString(),
      user: currentUser,
      content,
      timestamp: "now",
      likes: 0,
      retweets: 0,
      replies: 0,
      views: 0,
      liked: false,
      retweeted: false,
    };
    setPosts([newPost, ...posts]);
  };

  return (
    <main className="min-h-screen w-[600px] border-x border-border">
      {/* Header */}
      <div className="sticky top-0 z-10 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="flex items-center justify-between px-4 py-3">
          <h1 className="text-xl font-bold">Home</h1>
          <button className="rounded-full p-2 transition-colors hover:bg-secondary">
            <Sparkles className="h-5 w-5" />
          </button>
        </div>
        <div className="flex">
          {(["foryou", "following"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className="relative flex-1 py-3 text-center text-sm font-medium transition-colors hover:bg-secondary"
            >
              <span className={activeTab === tab ? "font-bold" : "text-muted-foreground"}>
                {tab === "foryou" ? "For you" : "Following"}
              </span>
              {activeTab === tab && (
                <span className="absolute bottom-0 left-1/2 h-1 w-14 -translate-x-1/2 rounded-full bg-primary" />
              )}
            </button>
          ))}
        </div>
      </div>

      <ComposeBox onPost={handlePost} />

      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </main>
  );
};

export default Feed;

import { Search, MoreHorizontal } from "lucide-react";
import { trendingTopics, suggestedUsers } from "@/lib/mockData";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const TrendingPanel = () => {
  return (
    <aside className="sticky top-0 h-screen w-[350px] overflow-y-auto px-6 py-4 scrollbar-hide">
      {/* Search */}
      <div className="relative mb-4">
        <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search"
          className="w-full rounded-full bg-secondary py-3 pl-12 pr-4 text-sm placeholder:text-muted-foreground focus:bg-background focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      {/* Trending */}
      <div className="mb-4 overflow-hidden rounded-2xl bg-secondary">
        <h2 className="px-4 py-3 text-xl font-extrabold">Trends for you</h2>
        {trendingTopics.map((trend, i) => (
          <button
            key={i}
            className="flex w-full items-start justify-between px-4 py-3 transition-colors hover:bg-muted"
          >
            <div>
              <p className="text-xs text-muted-foreground">{trend.category}</p>
              <p className="font-bold">{trend.topic}</p>
              <p className="text-xs text-muted-foreground">{trend.posts} posts</p>
            </div>
            <MoreHorizontal className="mt-1 h-4 w-4 text-muted-foreground" />
          </button>
        ))}
        <button className="w-full px-4 py-3 text-left text-sm text-primary transition-colors hover:bg-muted">
          Show more
        </button>
      </div>

      {/* Who to follow */}
      <div className="overflow-hidden rounded-2xl bg-secondary">
        <h2 className="px-4 py-3 text-xl font-extrabold">Who to follow</h2>
        {suggestedUsers.map((user) => (
          <button
            key={user.id}
            className="flex w-full items-center gap-3 px-4 py-3 transition-colors hover:bg-muted"
          >
            <Avatar className="h-10 w-10">
              <AvatarImage src={user.avatar} />
              <AvatarFallback>{user.name[0]}</AvatarFallback>
            </Avatar>
            <div className="flex-1 text-left">
              <p className="text-sm font-bold leading-tight">{user.name}</p>
              <p className="text-sm text-muted-foreground">@{user.handle}</p>
            </div>
            <span className="rounded-full bg-foreground px-4 py-1.5 text-sm font-bold text-background">
              Follow
            </span>
          </button>
        ))}
        <button className="w-full px-4 py-3 text-left text-sm text-primary transition-colors hover:bg-muted">
          Show more
        </button>
      </div>
    </aside>
  );
};

export default TrendingPanel;

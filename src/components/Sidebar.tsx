import { Home, Search, Bell, Mail, Bookmark, User, MoreHorizontal, Feather } from "lucide-react";
import { currentUser } from "@/lib/mockData";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const navItems = [
  { icon: Home, label: "Home", active: true },
  { icon: Search, label: "Explore" },
  { icon: Bell, label: "Notifications" },
  { icon: Mail, label: "Messages" },
  { icon: Bookmark, label: "Bookmarks" },
  { icon: User, label: "Profile" },
  { icon: MoreHorizontal, label: "More" },
];

const Sidebar = () => {
  return (
    <aside className="sticky top-0 flex h-screen w-[275px] flex-col justify-between border-r border-border px-3 py-4">
      {/* Logo */}
      <div>
        <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full transition-colors hover:bg-primary/10">
          <Feather className="h-7 w-7 text-primary" />
        </div>

        {/* Nav */}
        <nav className="mt-1 space-y-1">
          {navItems.map((item) => (
            <button
              key={item.label}
              className={`flex w-full items-center gap-4 rounded-full px-4 py-3 text-lg transition-colors hover:bg-secondary ${
                item.active ? "font-bold" : "font-normal text-foreground/80"
              }`}
            >
              <item.icon className="h-6 w-6" />
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        {/* Post button */}
        <button className="mt-4 w-full rounded-full bg-primary py-3 text-lg font-bold text-primary-foreground transition-opacity hover:opacity-90">
          Post
        </button>
      </div>

      {/* User */}
      <button className="flex items-center gap-3 rounded-full p-3 transition-colors hover:bg-secondary">
        <Avatar className="h-10 w-10">
          <AvatarImage src={currentUser.avatar} />
          <AvatarFallback>{currentUser.name[0]}</AvatarFallback>
        </Avatar>
        <div className="flex-1 text-left">
          <p className="text-sm font-bold leading-tight">{currentUser.name}</p>
          <p className="text-sm text-muted-foreground">@{currentUser.handle}</p>
        </div>
        <MoreHorizontal className="h-5 w-5 text-muted-foreground" />
      </button>
    </aside>
  );
};

export default Sidebar;

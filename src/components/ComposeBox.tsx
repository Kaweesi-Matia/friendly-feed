import { useState } from "react";
import { Image, Smile, CalendarDays, MapPin } from "lucide-react";
import { currentUser } from "@/lib/mockData";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface ComposeBoxProps {
  onPost: (content: string) => void;
}

const ComposeBox = ({ onPost }: ComposeBoxProps) => {
  const [content, setContent] = useState("");

  const handlePost = () => {
    if (content.trim()) {
      onPost(content);
      setContent("");
    }
  };

  return (
    <div className="border-b border-border px-4 py-3">
      <div className="flex gap-3">
        <Avatar className="h-10 w-10 shrink-0">
          <AvatarImage src={currentUser.avatar} />
          <AvatarFallback>{currentUser.name[0]}</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="What's happening?"
            className="min-h-[80px] w-full resize-none bg-transparent text-xl placeholder:text-muted-foreground focus:outline-none"
            maxLength={280}
          />
          <div className="flex items-center justify-between border-t border-border pt-3">
            <div className="flex gap-1">
              {[Image, Smile, CalendarDays, MapPin].map((Icon, i) => (
                <button
                  key={i}
                  className="rounded-full p-2 text-primary transition-colors hover:bg-primary/10"
                >
                  <Icon className="h-5 w-5" />
                </button>
              ))}
            </div>
            <div className="flex items-center gap-3">
              {content.length > 0 && (
                <span className={`text-sm ${content.length > 260 ? "text-destructive" : "text-muted-foreground"}`}>
                  {280 - content.length}
                </span>
              )}
              <button
                onClick={handlePost}
                disabled={!content.trim()}
                className="rounded-full bg-primary px-5 py-2 text-sm font-bold text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-50"
              >
                Post
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComposeBox;

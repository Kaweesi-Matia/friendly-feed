export interface User {
  id: string;
  name: string;
  handle: string;
  avatar: string;
  verified: boolean;
  bio?: string;
  followers: number;
  following: number;
}

export interface Post {
  id: string;
  user: User;
  content: string;
  timestamp: string;
  likes: number;
  retweets: number;
  replies: number;
  views: number;
  liked: boolean;
  retweeted: boolean;
  image?: string;
}

export const currentUser: User = {
  id: "1",
  name: "Jane Developer",
  handle: "janedev",
  avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=jane",
  verified: true,
  bio: "Building cool things with code ✨",
  followers: 1284,
  following: 342,
};

const users: User[] = [
  currentUser,
  {
    id: "2",
    name: "Alex Rivera",
    handle: "alexrivera",
    avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=alex",
    verified: true,
    bio: "Design engineer @somewhere",
    followers: 23400,
    following: 891,
  },
  {
    id: "3",
    name: "Sam Chen",
    handle: "samchen",
    avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=sam",
    verified: false,
    bio: "Open source enthusiast",
    followers: 5600,
    following: 234,
  },
  {
    id: "4",
    name: "Morgan Blake",
    handle: "morganblake",
    avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=morgan",
    verified: true,
    bio: "Tech journalist",
    followers: 89000,
    following: 1200,
  },
  {
    id: "5",
    name: "Taylor Kim",
    handle: "taylork",
    avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=taylor",
    verified: false,
    bio: "Coffee & code",
    followers: 1200,
    following: 560,
  },
];

export const posts: Post[] = [
  {
    id: "1",
    user: users[1],
    content: "Just shipped a new design system that cuts our component library by 40%. Less code, more consistency. The secret? Ruthless constraint. 🎨",
    timestamp: "2h",
    likes: 342,
    retweets: 89,
    replies: 24,
    views: 12400,
    liked: false,
    retweeted: false,
  },
  {
    id: "2",
    user: users[2],
    content: "Hot take: The best code is the code you don't write.\n\nEvery line is a liability. Every abstraction is a bet. Choose wisely.",
    timestamp: "4h",
    likes: 1205,
    retweets: 234,
    replies: 89,
    views: 45000,
    liked: true,
    retweeted: false,
  },
  {
    id: "3",
    user: users[3],
    content: "Breaking: Major tech companies are shifting to edge-first architectures. The cloud is moving closer to users, and the implications for latency-sensitive apps are massive.\n\nThread below 🧵",
    timestamp: "6h",
    likes: 5600,
    retweets: 1200,
    replies: 340,
    views: 230000,
    liked: false,
    retweeted: true,
  },
  {
    id: "4",
    user: users[4],
    content: "Morning routine:\n☕ Coffee\n💻 Open IDE\n🐛 Fix yesterday's bug\n🐛 Create two new bugs\n☕ More coffee\n\nRepeat.",
    timestamp: "8h",
    likes: 890,
    retweets: 156,
    replies: 67,
    views: 18000,
    liked: false,
    retweeted: false,
  },
  {
    id: "5",
    user: users[0],
    content: "Finally figured out that CSS grid bug that's been haunting me for 3 days. The solution? A single line of code. Classic. 😅",
    timestamp: "12h",
    likes: 45,
    retweets: 3,
    replies: 8,
    views: 890,
    liked: false,
    retweeted: false,
  },
  {
    id: "6",
    user: users[1],
    content: "Unpopular opinion: TypeScript's greatest feature isn't type safety—it's autocomplete. Fight me.",
    timestamp: "1d",
    likes: 2300,
    retweets: 445,
    replies: 178,
    views: 89000,
    liked: true,
    retweeted: true,
  },
];

export const trendingTopics = [
  { category: "Technology", topic: "#WebDev", posts: "12.4K" },
  { category: "Programming", topic: "TypeScript 6.0", posts: "8.9K" },
  { category: "Design", topic: "#DesignSystems", posts: "5.2K" },
  { category: "Trending", topic: "Edge Computing", posts: "34.1K" },
  { category: "Technology", topic: "#OpenSource", posts: "15.7K" },
];

export const suggestedUsers = users.slice(1, 4);

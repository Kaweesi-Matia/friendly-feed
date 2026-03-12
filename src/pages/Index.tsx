import Sidebar from "@/components/Sidebar";
import Feed from "@/components/Feed";
import TrendingPanel from "@/components/TrendingPanel";

const Index = () => {
  return (
    <div className="flex min-h-screen justify-center bg-background">
      <Sidebar />
      <Feed />
      <TrendingPanel />
    </div>
  );
};

export default Index;

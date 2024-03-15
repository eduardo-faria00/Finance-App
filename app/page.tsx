import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import { Card, CardDescription } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="w-full grid grid-cols-4 gap-4">
      <Card className="h-52 col-span-2"></Card>
      <Card className="h-52 "></Card>
      <Card className="h-52 "></Card>
    </div>
  );
}

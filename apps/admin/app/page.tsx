import StatsCard from "@/components/stats-card";
import { getProductsCount } from "@/lib/data";
import { Layout } from "lucide-react";

export default function page() {
  const productsCount=getProductsCount();
  return (
    <div className="space-y-4 p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
            <Layout className="h-6 w-6 text-primary" />
          </div>
          <h2 className="text-xl font-bold tracking-tight">Dashboard</h2>
        </div>
      </div>
       <div>  
        <StatsCard  title="Products" value={productsCount} />
       </div>
      {/* <Suspense>
        <RecentProducts />
      </Suspense> */}
    </div>
  );
}

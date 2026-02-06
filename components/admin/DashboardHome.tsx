import { Card } from "../ui/card"
import RecentPayments from "./RecentPayments"

const DashboardHome = () => {
  return (
    <div className="flex flex-col gap-10 ">
      <h1 className="text-2xl mt-5 font-semibold">Admin Dashboard</h1>

      <div>
        <h2 className="text-xl font-medium">Overview</h2>
        <p className="text-sm text-muted-foreground">
          Snapshot of sales, users, and platform activity.
        </p>

        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Card className="p-5 bg-[#E7E6EB]">
            <p className="text-sm font-semibold">Revenue</p>
            <p className="mt-2 text-2xl font-extrabold">$124,320</p>
            <p className="mt-1 text-xs">+12.4% from last month</p>
          </Card>

          <Card className="p-5 bg-[#F9EFC9]">
            <p className="text-sm font-semibold">No. of Shops</p>
            <p className="mt-2 text-2xl font-extrabold">86</p>
            <p className="mt-1 text-xs">+6 new this month</p>
          </Card>

          <Card className="p-5 bg-[#F5E6E2]">
            <p className="text-sm font-semibold">Active Users</p>
            <p className="mt-2 text-2xl font-extrabold">1,342</p>
            <p className="mt-1 text-xs">+3.1% this week</p>
          </Card>

          <Card className="p-5 bg-[#DFE7EB]">
            <p className="text-sm font-semibold">Platform Activity</p>
            <p className="mt-2 text-2xl font-extrabold">78%</p>
            <p className="mt-1 text-xs">Last 24 hours</p>
          </Card>
        </div>

        <div className="mb-20 md:mb-0">
       <RecentPayments/>
        </div>
      </div>
    </div>
  )
}

export default DashboardHome

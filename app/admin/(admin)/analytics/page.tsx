import { ChartAreaStacked } from "@/components/admin/analytics/AreaChart"
import FilterOptions from "@/components/admin/analytics/FilterOptions"
import MainOverview from "@/components/admin/analytics/MainOverview"
import { ChartPieSimple } from "@/components/admin/analytics/PieChart"

const page = () => {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-2xl mt-5 font-semibold">Analytics</h1>

      <FilterOptions />
      <MainOverview />

      <div className="flex flex-col gap-5 lg:flex-row lg:h-[420px] pb-20 md:pb-0">
        <div className="w-full lg:w-[420px] lg:h-full">
          <ChartPieSimple />
        </div>

        <div className=" lg:w-[600px] lg:flex-1 lg:h-full">
          <ChartAreaStacked />
        </div>
      </div>
    </div>
  )
}

export default page

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { TrendingUp, TrendingDown } from "lucide-react"

const stats = [
  {
    label: "Gross Revenue",
    value: "$25,000",
    change: "2.15%",
    isUp: true,
  },
  {
    label: "Avg Order Value",
    value: "$42.80",
    change: "1.02%",
    isUp: true,
  },
  {
    label: "Total Orders",
    value: "1,284",
    change: "0.8%",
    isUp: false,
  },
]

const MainOverview = () => {
  return (
    <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-3">
      {stats.map((item) => (
        <Card key={item.label}>
          <CardContent className="pt-6 pb-2">
            {/* Top row */}
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium">{item.label}</p>
              <div
                className={`flex items-center gap-1 text-xs ${
                  item.isUp ? "text-green-600 bg-green-100 p-1 rounded-sm" : "text-red-600 bg-red-100 p-1 rounded-sm"
                }`}
              >
                {item.isUp ? (
                  <TrendingUp className="h-4 w-4" />
                ) : (
                  <TrendingDown className="h-4 w-4" />
                )}
                {item.change}
              </div>
            </div>

            {/* Value */}
            <p className="text-2xl font-bold mt-2">{item.value}</p>
          </CardContent>

          {/* Footer */}
          <CardFooter className="pb-6">
            <p className="text-xs text-muted-foreground">
              From Jan 01 2026 – March 01 2026
            </p>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

export default MainOverview
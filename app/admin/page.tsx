import AdminSidebar from "@/components/admin/AdminSidebar"
import DashboardHome from "@/components/admin/DashboardHome"

const page = () => {
  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <main className="flex-1 p-6 md:ml-18">
       <DashboardHome/>
      </main>
    </div>
  )
}

export default page

import Link from "next/link";
import { NextPageWithLayout } from "../_app";
import { ReactElement } from "react";
import DashboardLayout from "@/components/layouts/DashboardLayout";

export const Dashboard : NextPageWithLayout = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Welcome to my Dashboard</h1>

      <p className="mb-4">Want to check out the products</p>

      <Link href="/products">Products</Link>
    </div>
  )
}

Dashboard.getLayout = function getLayout(page : ReactElement) {
  return (
    <DashboardLayout>
      {page}
    </DashboardLayout>
  )
}

export default Dashboard;
import Link from "next/link";

export const Dashboard = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Welcome to my Dashboard</h1>

      <p className="mb-4">Want to check out the products</p>

      <Link href="/approuter/products">Products</Link>
    </div>
  )
}

export default Dashboard;
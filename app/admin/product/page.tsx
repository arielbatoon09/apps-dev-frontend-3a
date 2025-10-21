import { columns, Product } from "./columns";
import { DataTable } from "./data-table";

export default function ProductAdminPage() {
  const data = [
    {
      id: "576f4e5a-4ca8-4a5e-b3c5-68dc0eb93d79",
      name: "Product 2",
      description: "Sample Product 2",
      price: 100,
      stock: 100,
      isActive: true,
    }
  ]

  return (
    <section>
      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={data} />
      </div>
    </section>
  )
}
import { columns } from "./columns";
import { DataTable } from "./data-table";

export default async function BlogTablePage() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/post`,
    { cache: "no-store" }
  );

  const data = await res.json();

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data.data} />
    </div>
  );
}

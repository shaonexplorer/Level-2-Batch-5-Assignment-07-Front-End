import { columns } from "./columns";
import { DataTable } from "./data-table";

export default async function BlogTablePage() {
  const data = [
    {
      title: "First Post",
      content:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.",
      image: "image1.jpg",
      author: "Author 1",
    },
    {
      title: "Second Post",
      content: "This is the content of the second post",
      image: "image2.jpg",
      author: "Author 2",
    },
    {
      title: "Third Post",
      content: "This is the content of the third post",
      image: "image3.jpg",
      author: "Author 3",
    },
  ];
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}

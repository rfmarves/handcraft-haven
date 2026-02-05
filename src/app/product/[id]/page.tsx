export default function Page({ params }: { params: { id: string } }) {
  return <h1>Product detail: {params.id}</h1>;
}

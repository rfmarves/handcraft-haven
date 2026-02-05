export default function Page({ params }: { params: { id: string } }) {
  return <h1>Seller profile: {params.id}</h1>;
}

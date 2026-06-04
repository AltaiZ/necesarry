export default function MemberPage({ params }: { params: { slug: string } }) {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold capitalize">{params.slug}</h1>
    </main>
  )
}

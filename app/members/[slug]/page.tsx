import { DEFAULT_MEMBERS } from '@/components/ui/members-data'

export default async function MemberPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const member = DEFAULT_MEMBERS.find(m => m.href === `/members/${slug}`)

  if (!member) {
    return <main className="p-8"><h1>Гишүүн олдсонгүй</h1></main>
  }

  return (
    <main className="p-8">
      <><img src={member.image} alt={member.name} className="w-32 h-32 flex justify-center items-center h-full w-full rounded-full" /></>
      <h1 className="text-2xl font-bold capitalize">{member.name}</h1>
      <p className='text-gray-500'>Role: {member.role}</p>
      <p>Registration: {member.registration}</p>
      <p>Passport Number: {member.passport}</p>
    </main>
  )
}

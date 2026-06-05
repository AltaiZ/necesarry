import Image from 'next/image'
import { DEFAULT_MEMBERS } from '@/components/ui/members-data'

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function MemberPage({ params }: PageProps) {
  const { slug } = await params

  const member = DEFAULT_MEMBERS.find(
    (m) => m.href === `/members/${slug}`
  )

  if (!member) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold">
          Гишүүн олдсонгүй
        </h1>
      </main>
    )
  }

  return (
    <main className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-xl rounded-3xl border bg-white shadow-xl p-8">

        <div className="flex justify-center mb-6">
          <div className="relative w-40 h-40">
            <Image
              src={member.image}
              alt={member.name}
              fill
              priority
              sizes="160px"
              className="rounded-full object-cover border-4 border-gray-200"
            />
          </div>
        </div>

        <div className="text-center">
          <h1 className="text-3xl font-bold mb-2">
            {member.name}
          </h1>

          <p className="text-gray-500 mb-6">
            {member.role}
          </p>
        </div>

        <div className="space-y-4 border-t pt-6">

          <div>
            <p className="text-sm text-gray-500">
              Registration
            </p>
            <p className="font-medium">
              {member.registration}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">
              Passport Number
            </p>
            <p className="font-medium">
              {member.passport}
            </p>
          </div>

        </div>

      </div>
    </main>
  )
}
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import DocumentsDownloadButton from '@/components/ui/documents-download-button'
import { DEFAULT_MEMBERS } from '@/components/ui/members-data'

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function MemberDocumentsPage({ params }: PageProps) {
  const { slug } = await params
  const member = DEFAULT_MEMBERS.find((m) => m.href === `/members/${slug}`)

  if (!member || !member.documents || member.documents.length === 0) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-white px-5 py-8 text-neutral-950">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-medium text-neutral-500">Necessary</p>
            <h1 className="text-3xl font-bold">{member.name}</h1>
          </div>
          <Link
            href={`/members/${slug}`}
            className="rounded-full border border-neutral-200 px-4 py-2 text-sm font-medium text-neutral-700 transition hover:bg-neutral-100"
          >
            Back
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {member.documents.map((doc) => (
            <div
              key={doc.filename}
              className="overflow-hidden rounded-lg border border-neutral-200 bg-neutral-50 shadow-sm"
            >
              <div className="relative aspect-[3/4] bg-neutral-100">
                <Image
                  src={doc.preview}
                  alt={`${member.name} ${doc.filename}`}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="flex items-center justify-between gap-3 px-4 py-3">
                <span className="truncate text-sm font-medium">{doc.filename}</span>

                <div>
                  <a
                    href={doc.file}
                    download={doc.filename}
                    className="text-xs text-neutral-500 hover:text-neutral-900 transition"
                  >
                    Download
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center pt-2">
          <DocumentsDownloadButton documents={member.documents} />
        </div>
      </div>
    </main>
  )
}

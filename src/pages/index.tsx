import Head from 'next/head'

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Home | MSADDI</title>
      </Head>
      <main className="flex flex-col items-center justify-center py-16">
        <h1 className="text-4xl font-bold text-primary">Home</h1>
        <p className="mt-4 text-lg text-gray-600">This page is under construction.</p>
      </main>
    </>
  )
}

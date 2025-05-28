import Head from 'next/head'

export default function Custom1Page() {
  return (
    <>
      <Head>
        <title>Custom Page 1 | MSADDI</title>
      </Head>
      <main className="flex flex-col items-center justify-center py-16">
        <h1 className="text-4xl font-bold text-primary">Custom Page 1</h1>
        <p className="mt-4 text-lg text-gray-600">This page is under construction.</p>
      </main>
    </>
  )
}

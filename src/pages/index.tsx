import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout>
      <section className="flex flex-col items-center justify-center py-20">
        <img src="/logo.png" alt="MSADDI logo" className="h-40 mb-8"/>
        <h1 className="text-4xl font-bold">Welcome to MSADDI</h1>
        <p className="mt-4 text-gray-600">Sheet Metal Fabrication Services</p>
      </section>
    </Layout>
  )
}
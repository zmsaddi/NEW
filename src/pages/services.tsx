import Layout from '../components/Layout'

export default function Services() {
  return (
    <Layout>
      <section className="p-10">
        <h1 className="text-3xl font-bold mb-6">Our Services</h1>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Laser Cutting</li>
          <li>Bending</li>
          <li>Spinning (Dish End)</li>
          <li>Welding</li>
        </ul>
      </section>
    </Layout>
  )
}
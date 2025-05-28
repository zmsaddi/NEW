import Layout from '../components/Layout'

export default function HomePage() {
  return (
    <Layout>
      <main className="p-10 text-center">
        <h1 className="text-3xl font-bold mb-6">الصفحة الرئيسية</h1>
        <img
          src="/logo.png"
          alt="Test logo"
          style={{ height: '120px', border: '2px solid red', display: 'inline-block' }}
        />
        <p className="mt-4 text-gray-500">اختبار ظهور الشعار</p>
      </main>
    </Layout>
  );
}
import { Scale, FileText, Handshake, Building2, Briefcase } from 'lucide-react'

export default function Services() {
  const items = [
    {
      icon: <Scale className="text-blue-600" size={28} />, 
      title: 'Litigasi & Sengketa',
      desc: 'Pendampingan komprehensif untuk perkara perdata, pidana, dan komersial.',
    },
    {
      icon: <FileText className="text-blue-600" size={28} />, 
      title: 'Penyusunan & Review Kontrak',
      desc: 'Menyusun dan meninjau perjanjian agar melindungi kepentingan Anda.',
    },
    {
      icon: <Handshake className="text-blue-600" size={28} />, 
      title: 'Corporate & Compliance',
      desc: 'Layanan kepatuhan, pendirian perusahaan, dan tata kelola yang baik.',
    },
    {
      icon: <Building2 className="text-blue-600" size={28} />, 
      title: 'Properti & Investasi',
      desc: 'Legal due diligence, perizinan, dan transaksi aset dengan aman.',
    },
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Layanan Hukum Utama</h2>
          <p className="mt-3 text-gray-600">Pendampingan strategis untuk kebutuhan personal maupun bisnis.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <div key={item.title} className="p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow bg-white">
              <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
              <p className="mt-2 text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

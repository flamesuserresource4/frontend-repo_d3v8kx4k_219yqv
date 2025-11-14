import { Calculator, ChartPie, BadgeDollarSign, Building, FileSpreadsheet } from 'lucide-react'

export default function OtherServices() {
  const items = [
    {
      icon: <Calculator className="text-emerald-600" size={26} />,
      title: 'Aplikasi Akuntansi UMKM',
      desc: 'Kelola pembukuan, arus kas, dan laporan keuangan harian dengan mudah.',
      tag: 'SaaS'
    },
    {
      icon: <FileSpreadsheet className="text-emerald-600" size={26} />,
      title: 'Sistem Faktur & Inventory',
      desc: 'Buat faktur otomatis, pantau stok, dan rekonsiliasi penjualan.',
      tag: 'Software'
    },
    {
      icon: <BadgeDollarSign className="text-emerald-600" size={26} />,
      title: 'Konsultasi Pajak Bulanan',
      desc: 'Pendampingan pelaporan SPT, PPh, dan PPN dengan konsultan berpengalaman.',
      tag: 'Service'
    },
    {
      icon: <ChartPie className="text-emerald-600" size={26} />,
      title: 'Dashboard Keuangan Bisnis',
      desc: 'Insight keuangan real-time untuk pengambilan keputusan cepat.',
      tag: 'SaaS'
    },
    {
      icon: <Building className="text-emerald-600" size={26} />,
      title: 'Pendirian & Perpajakan Badan Usaha',
      desc: 'Layanan end-to-end dari pendirian hingga kepatuhan pajak perusahaan.',
      tag: 'Paket'
    },
  ]

  return (
    <section id="other-services" className="py-20 bg-gradient-to-b from-white to-emerald-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Other Services</h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">Selain layanan hukum inti, kami juga menyediakan solusi bisnis untuk akuntansi dan perpajakan agar operasional Anda lebih efisien.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div key={item.title} className="group p-6 rounded-xl border border-emerald-200/60 bg-white hover:shadow-xl transition-all">
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 rounded-lg bg-emerald-50 flex items-center justify-center">
                  {item.icon}
                </div>
                <span className="text-xs font-medium px-2 py-1 rounded bg-emerald-100 text-emerald-700">{item.tag}</span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{item.title}</h3>
              <p className="mt-2 text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              <div className="mt-4">
                <a href="#contact" className="text-emerald-700 font-medium hover:underline">Pelajari lebih lanjut →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

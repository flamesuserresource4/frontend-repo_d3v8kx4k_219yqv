export default function Testimonials() {
  const items = [
    { name: 'Budi Santoso', role: 'CEO, PT Maju Jaya', quote: 'Pendampingan hukum yang sangat profesional dan responsif. Sangat direkomendasikan.' },
    { name: 'Sari Wulandari', role: 'Founder, Kopi Kita', quote: 'Kontrak bisnis kami disusun dengan sangat rapi dan mengurangi risiko secara signifikan.' },
    { name: 'Andi Pratama', role: 'Owner, Nusantara Properti', quote: 'Tim yang memahami seluk-beluk transaksi properti dan investasi.' },
  ]

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Apa Kata Klien</h2>
          <p className="mt-3 text-gray-600">Kepercayaan Anda adalah prioritas kami.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((t) => (
            <figure key={t.name} className="p-6 bg-white rounded-xl shadow border border-gray-100">
              <blockquote className="text-gray-700">“{t.quote}”</blockquote>
              <figcaption className="mt-4 text-sm text-gray-500">
                <span className="font-semibold text-gray-900">{t.name}</span> • {t.role}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

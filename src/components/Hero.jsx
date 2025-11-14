import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative pt-28 pb-20 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-blue-200/40 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-indigo-200/40 rounded-full blur-3xl" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
              Solusi Hukum Terpercaya untuk Bisnis dan Pribadi Anda
            </h1>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              Tim advokat berpengalaman siap mendampingi Anda dalam litigasi, kontrak, kepatuhan, dan sengketa bisnis dengan pendekatan strategis dan berintegritas.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors">
                Konsultasi Gratis
                <ArrowRight size={18} />
              </a>
              <a href="#services" className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50">
                Lihat Layanan
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-gray-600">
              <div>
                <span className="font-semibold text-gray-900">10+ tahun</span> pengalaman
              </div>
              <div>
                <span className="font-semibold text-gray-900">300+</span> klien puas
              </div>
              <div>
                <span className="font-semibold text-gray-900">Respons 24/7</span>
              </div>
            </div>
          </div>
          <div className="lg:justify-self-end">
            <div className="bg-white/70 backdrop-blur rounded-xl shadow-xl border border-gray-100 p-6">
              <img src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxMYXclMjBvZmZpY2V8ZW58MHwwfHx8MTc2MzE2MDQ4N3ww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Law office" className="rounded-lg object-cover w-full h-72" />
              <div className="mt-4 grid grid-cols-3 gap-4 text-center">
                <div className="p-3 rounded-lg bg-blue-50">
                  <div className="text-2xl font-bold text-blue-700">99%</div>
                  <div className="text-xs text-gray-600">Kepuasan Klien</div>
                </div>
                <div className="p-3 rounded-lg bg-indigo-50">
                  <div className="text-2xl font-bold text-indigo-700">500+</div>
                  <div className="text-xs text-gray-600">Kasus Ditangani</div>
                </div>
                <div className="p-3 rounded-lg bg-emerald-50">
                  <div className="text-2xl font-bold text-emerald-700">A+</div>
                  <div className="text-xs text-gray-600">Profesionalisme</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

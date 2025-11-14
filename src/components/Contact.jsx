export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Hubungi Kami</h2>
          <p className="mt-3 text-gray-600">Kirim pertanyaan atau jadwalkan konsultasi awal tanpa biaya.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <form className="space-y-4 bg-gray-50 p-6 rounded-xl border border-gray-200">
            <div>
              <label className="block text-sm font-medium text-gray-700">Nama</label>
              <input type="text" className="mt-1 w-full rounded-md border-gray-300 focus:border-blue-600 focus:ring-blue-600" placeholder="Nama Anda" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" className="mt-1 w-full rounded-md border-gray-300 focus:border-blue-600 focus:ring-blue-600" placeholder="email@contoh.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Pesan</label>
              <textarea rows="4" className="mt-1 w-full rounded-md border-gray-300 focus:border-blue-600 focus:ring-blue-600" placeholder="Ceritakan kebutuhan Anda"></textarea>
            </div>
            <button type="button" className="w-full bg-blue-600 text-white rounded-md py-2.5 font-semibold hover:bg-blue-700">Kirim</button>
          </form>
          <div className="space-y-4 text-gray-600">
            <div className="p-6 rounded-xl border bg-white">
              <div className="font-semibold text-gray-900">Alamat Kantor</div>
              <div>Jl. Merdeka No. 123, Jakarta</div>
            </div>
            <div className="p-6 rounded-xl border bg-white">
              <div className="font-semibold text-gray-900">Kontak</div>
              <div>Telp: (021) 123-4567</div>
              <div>Email: info@kantorhukum.id</div>
            </div>
            <div className="p-6 rounded-xl border bg-white">
              <div className="font-semibold text-gray-900">Jam Operasional</div>
              <div>Senin - Jumat, 09.00 - 18.00 WIB</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

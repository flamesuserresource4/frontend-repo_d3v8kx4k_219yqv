export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <img src="https://images.unsplash.com/photo-1532619187608-e5375cab36aa?q=80&w=1200&auto=format&fit=crop" alt="Team" className="rounded-xl shadow object-cover w-full h-72" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Tentang Kami</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Kami adalah firma hukum yang berkomitmen pada integritas, keunggulan, dan hasil nyata. Dengan pengalaman lintas sektor, kami memahami dinamika bisnis modern dan kebutuhan hukum yang kompleks.
            </p>
            <ul className="mt-6 space-y-3 text-gray-700">
              <li>• Berorientasi solusi dan mitigasi risiko</li>
              <li>• Komunikasi jelas dan transparan</li>
              <li>• Jaringan kolaborasi dengan notaris, konsultan pajak, dan auditor</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

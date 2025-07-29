// /frontend/app/page.js
export default function Home() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Encabezado */}
      <header className="fixed top-0 w-full bg-gray-900 border-b border-yellow-600 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-yellow-600">BarberHub</h1>
          <nav className="space-x-4">
            <button className="border border-yellow-600 text-yellow-600 px-4 py-2 rounded hover:bg-yellow-600 hover:text-black">
              Iniciar Sesión
            </button>
            <button className="bg-yellow-600 text-black px-4 py-2 rounded hover:bg-yellow-700">
              Registrarse
            </button>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="h-screen flex items-center justify-center bg-[url('/images/barber-bg.jpg')] bg-cover bg-opacity-50">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Reserva con los mejores barberos de Antofagasta
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-6">
            Descubre top barberos y agenda tu cita en segundos
          </p>
          <button className="bg-yellow-600 text-black px-6 py-3 rounded-lg text-lg hover:bg-yellow-700">
            Encuentra un barbero
          </button>
        </div>
      </section>

      {/* Rankings */}
      <section className="container mx-auto py-12">
        <h3 className="text-3xl font-bold text-center mb-8">Top Barberos en Antofagasta</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-800 p-4 rounded-lg">
            <img src="/images/barber1.jpg" alt="Barbero" className="w-full h-48 object-cover rounded" />
            <h4 className="text-xl font-semibold mt-4">#1 Juan’s Barber Shop</h4>
            <p className="text-gray-300">Antofagasta, 4.8 estrellas, 50 citas</p>
            <button className="mt-4 border border-yellow-600 text-yellow-600 px-4 py-2 rounded hover:bg-yellow-600 hover:text-black">
              Ver perfil
            </button>
          </div>
          {/* Más barberos se añadirán dinámicamente con el backend */}
        </div>
        <div className="text-center mt-8">
          <button className="border border-yellow-600 text-yellow-600 px-6 py-3 rounded hover:bg-yellow-600 hover:text-black">
            Ver todos los rankings
          </button>
        </div>
      </section>

      {/* Cómo Funciona */}
      <section className="bg-gray-800 py-12">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold mb-8">Corta con estilo en 3 pasos</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="text-4xl mb-4">🔍</div>
              <h4 className="text-xl font-semibold">Busca</h4>
              <p className="text-gray-300">Elige tu barbero en Antofagasta</p>
            </div>
            <div>
              <div className="text-4xl mb-4">📅</div>
              <h4 className="text-xl font-semibold">Reserva</h4>
              <p className="text-gray-300">Selecciona servicio y hora</p>
            </div>
            <div>
              <div className="text-4xl mb-4">✂️</div>
              <h4 className="text-xl font-semibold">Disfruta</h4>
              <p className="text-gray-300">Recibe un corte de calidad</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pie de página */}
      <footer className="bg-gray-900 py-6 border-t border-gray-700">
        <div className="container mx-auto text-center text-gray-300">
          <p className="mb-4">
            <a href="/about" className="hover:text-yellow-600">Acerca de BarberHub</a> | 
            <a href="/contact" className="hover:text-yellow-600"> Contacto</a> | 
            <a href="/terms" className="hover:text-yellow-600"> Términos</a>
          </p>
          <p>© 2025 BarberHub. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
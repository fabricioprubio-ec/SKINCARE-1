
import React, { useState, useEffect } from 'react';
import { 
  CheckCircle, 
  Clock, 
  ShieldCheck, 
  Zap, 
  ArrowRight, 
  Star, 
  Package, 
  Truck, 
  MessageCircle,
  AlertCircle,
  Loader2,
  TrendingDown,
  Eye,
  Sparkles,
  Hourglass
} from 'lucide-react';
import { generateImage } from './src/services/geminiService';

// --- AI Image Component ---
const AIProductImage: React.FC<{ prompt: string; alt: string; fallbackUrl: string }> = ({ prompt, alt, fallbackUrl }) => {
  const [imageUrl, setImageUrl] = useState<string>(fallbackUrl);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const url = await generateImage(prompt);
        setImageUrl(url);
      } catch (err) {
        console.error("Failed to generate AI image:", err);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchImage();
  }, [prompt]);

  return (
    <div className="relative w-full h-full min-h-[300px] bg-emerald-50/50 flex items-center justify-center overflow-hidden rounded-2xl">
      {isLoading && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-white/80 backdrop-blur-sm">
          <Loader2 className="animate-spin text-emerald-600 mb-2" size={32} />
          <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-600">Generando Imagen...</p>
        </div>
      )}
      <img 
        src={imageUrl} 
        alt={alt} 
        className={`w-full h-full object-cover transition-opacity duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
      />
      {error && !isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-emerald-50 text-emerald-600 p-4 text-center text-xs font-bold">
          Error al generar. Usando imagen de respaldo.
        </div>
      )}
    </div>
  );
};

// --- Types ---
interface Testimonial {
  name: string;
  age: number;
  comment: string;
  rating: number;
}

// --- Components ---

const Header: React.FC = () => (
  <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-emerald-100">
    <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center text-white">
          <Zap size={18} />
        </div>
        <span className="font-bold text-xl tracking-tight">BELLA<span className="text-emerald-600">LIFT</span></span>
      </div>
      <div className="hidden md:flex items-center gap-2 text-emerald-600 font-semibold animate-pulse">
        <Clock size={16} />
        <span className="text-sm">Oferta de Lanzamiento: 50% OFF Hoy</span>
      </div>
      <a 
        href="#oferta" 
        className="bg-emerald-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg hover:scale-105 transition-transform"
      >
        LO QUIERO YA
      </a>
    </div>
  </header>
);

const Hero: React.FC = () => (
  <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50 to-white py-12 md:py-24">
    <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
      <div className="order-2 md:order-1 space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-bold uppercase tracking-wider">
          <Star size={14} /> El secreto mejor guardado de las celebridades
        </div>
        <h1 className="text-4xl md:text-6xl font-black leading-tight text-gray-900">
          Transforma tu rostro con el <span className="text-emerald-600 italic">Método Lifting Frío</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
          Recupera la firmeza, elimina la papada y reduce la inflamación en casa. Un ritual de 10 minutos para un rostro visiblemente más joven y radiante.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a 
            href="https://wa.me/593983888235?text=Hola!%20Quiero%20comprar%20el%20combo%20de%20crioterapia%20y%20electroestimulación!"
            className="flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl text-lg font-bold shadow-xl shadow-green-200 transition-all hover:-translate-y-1"
          >
            <MessageCircle size={24} />
            PEDIR POR WHATSAPP
          </a>
        </div>
        <p className="text-sm text-gray-500 flex items-center gap-2">
          <Truck size={16} /> Pago Contra Entrega en todo el país
        </p>
      </div>
      <div className="order-1 md:order-2 relative">
        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-emerald-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-4 pt-8">
            <div className="bg-white p-2 rounded-3xl shadow-2xl border border-emerald-50 overflow-hidden transform rotate-2">
              <img 
                src="https://image2url.com/r2/default/images/1771806235651-f1fe38a6-d0b7-4eac-b2c0-dd070f3e0c93.jpeg" 
                alt="Kit BellaLift Profesional" 
                className="rounded-2xl object-cover aspect-[3/4]"
              />
            </div>
          </div>
          <div className="space-y-4">
             <div className="bg-white p-2 rounded-3xl shadow-2xl border border-emerald-50 overflow-hidden transform -rotate-2">
              <img 
                src="https://image2url.com/r2/default/images/1771806429163-e92df520-f977-4b12-92ce-daab51769818.jpeg" 
                alt="Crioterapia Facial BellaLift" 
                className="rounded-2xl object-cover aspect-[3/4]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Problem: React.FC = () => (
  <section className="py-20 bg-white">
    <div className="max-w-4xl mx-auto px-4 text-center space-y-12">
      <h2 className="text-3xl md:text-4xl font-bold">¿Te miras al espejo y sientes que tu rostro ha perdido su luz?</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { icon: Hourglass, title: "Flacidez y Papada", desc: "La gravedad y el tiempo empiezan a marcar el contorno facial." },
          { icon: Eye, title: "Inflamación Matutina", desc: "Despiertas con bolsas en los ojos y facciones hinchadas." },
          { icon: Sparkles, title: "Textura Opaca", desc: "Sientes que las cremas ya no se absorben ni hacen el mismo efecto." }
        ].map((item, idx) => (
          <div key={idx} className="p-6 rounded-2xl bg-emerald-50/50 border border-emerald-100 flex flex-col items-center gap-4">
            <item.icon className="text-emerald-600" size={32} />
            <h3 className="text-xl font-bold">{item.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
      <p className="text-xl italic text-gray-500 font-medium">
        "No necesitas procedimientos invasivos ni gastos mensuales eternos..."
      </p>
    </div>
  </section>
);

const Method: React.FC = () => (
  <section className="py-20 bg-gray-50 overflow-hidden">
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">El Método Lifting 2 Fases</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">Combinamos la ciencia milenaria de la crioterapia con la tecnología moderna de electroestimulación.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div className="flex gap-6 items-start">
            <div className="bg-blue-100 text-blue-600 w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center font-bold text-xl border-4 border-white shadow-md">1</div>
            <div className="space-y-3">
              <h3 className="text-2xl font-bold text-blue-600">FASE 1: Crioterapia (Frío Extremo)</h3>
              <p className="text-gray-600">Usando nuestro molde de hielo especializado, desinflamas instantáneamente, cierras poros y activas la microcirculación. Es el "despertar" que tu piel necesita.</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm font-medium"><CheckCircle size={16} className="text-blue-500" /> Reduce bolsas y ojeras</li>
                <li className="flex items-center gap-2 text-sm font-medium"><CheckCircle size={16} className="text-blue-500" /> Tensa los poros abiertos</li>
              </ul>
            </div>
          </div>

          <div className="flex gap-6 items-start">
            <div className="bg-emerald-100 text-emerald-600 w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center font-bold text-xl border-4 border-white shadow-md">2</div>
            <div className="space-y-3">
              <h3 className="text-2xl font-bold text-emerald-600">FASE 2: Estimulación EMS + Calor</h3>
              <p className="text-gray-600">Nuestro masajeador de 7 modos utiliza micro-corrientes para "ejercitar" los músculos faciales. Levanta los pómulos, redefine la mandíbula y estimula el colágeno natural.</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm font-medium"><CheckCircle size={16} className="text-emerald-600" /> Define el contorno mandibular</li>
                <li className="flex items-center gap-2 text-sm font-medium"><CheckCircle size={16} className="text-emerald-600" /> Atenúa líneas de expresión</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="bg-white p-4 rounded-[40px] shadow-3xl border-8 border-emerald-50 relative z-10">
             <img 
              src="https://image2url.com/r2/default/images/1771806954775-5336e609-70e1-4496-a86a-f49f10a56fe9.jpeg" 
              alt="Resultados Pro" 
              className="rounded-[30px] w-full"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-emerald-600 text-white p-6 rounded-2xl shadow-xl z-20 max-w-[200px] transform -rotate-3">
            <p className="text-sm font-bold">"Sientes la firmeza desde la primera aplicación"</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Benefits: React.FC = () => (
  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-16">¿Por qué es diferente a todo lo que has probado?</h2>
      <div className="grid md:grid-cols-5 gap-8">
        {[
          { title: "7 Modos en 1", desc: "Desde limpieza profunda hasta terapia de luz LED para manchas.", icon: <Zap /> },
          { title: "Efecto Flash", desc: "Ideal para usar antes de un evento o maquillaje importante.", icon: <Clock /> },
          { title: "Material Premium", desc: "Silicona grado médico e hipoalergénico para pieles sensibles.", icon: <ShieldCheck /> },
          { title: "Ahorro Real", desc: "Un solo pago, beneficios para toda la vida en casa.", icon: <Star /> },
          { title: "Guía Experta", desc: "E-Book incluido con recetas y mejores serums.", icon: <Sparkles /> }
        ].map((item, idx) => (
          <div key={idx} className="text-center space-y-4">
            <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto">
              {React.cloneElement(item.icon as React.ReactElement, { size: 32 })}
            </div>
            <h3 className="text-xl font-bold">{item.title}</h3>
            <p className="text-gray-500 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Pricing: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(15 * 60 + 34); // 15:34 initial

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <section id="oferta" className="py-20 bg-emerald-600 text-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 text-center space-y-8 relative z-10">
        <div className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-bold backdrop-blur-sm animate-bounce">
          ¡PROMOCIÓN VALIDA HASTA AGOTAR STOCK! 🔥
        </div>
        <h2 className="text-4xl md:text-5xl font-black">Oferta Especial</h2>
        <p className="text-xl opacity-90">Lleva el Kit Completo (Masajeador 7 Modos + Molde Crioterapia + E-Book de Regalo)</p>
        
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 max-w-2xl mx-auto flex flex-col md:flex-row items-center gap-6 text-left">
          <div className="w-40 md:w-48 flex-shrink-0 shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform rounded-lg overflow-hidden">
            <img 
              src="https://image2url.com/r2/default/images/1771809975058-18cbe07a-00d8-4261-82de-e7cb7e44f99c.jpg" 
              alt="E-Book Ritual BellaLift"
              className="w-full h-auto block"
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
              <Sparkles className="text-yellow-300" size={20} />
              BONO EXCLUSIVO: E-Book "Ritual BellaLift"
            </h3>
            <p className="text-sm opacity-80 leading-relaxed">
              Aprende las mejores recetas para tu molde de frío y descubre qué serums potencian los resultados de tu electroestimulador para un efecto lifting profesional.
            </p>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 py-8">
          <div className="text-center">
            <p className="text-lg line-through opacity-60">Antes: $52</p>
            <p className="text-6xl font-black mt-2">$39,99</p>
            <p className="text-sm mt-2 font-bold tracking-widest uppercase">Envío Gratis Incluido</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
            <p className="text-xs uppercase font-bold mb-2">La oferta termina en:</p>
            <div className="flex gap-4 text-3xl font-black">
              <div>{minutes.toString().padStart(2, '0')}<span className="block text-[10px] font-normal uppercase">Min</span></div>
              <div className="animate-pulse">:</div>
              <div>{seconds.toString().padStart(2, '0')}<span className="block text-[10px] font-normal uppercase">Seg</span></div>
            </div>
          </div>
        </div>

        <div className="max-w-md mx-auto space-y-6">
          <a 
            href="https://wa.me/593983888235?text=Hola!%20Quiero%20comprar%20el%20combo%20de%20crioterapia%20y%20electroestimulación!"
            className="group flex items-center justify-center gap-3 bg-white text-emerald-600 px-10 py-6 rounded-2xl text-2xl font-black shadow-2xl transition-all hover:scale-105 active:scale-95"
          >
            <MessageCircle size={28} />
            COMPRAR AHORA
            <ArrowRight className="group-hover:translate-x-2 transition-transform" />
          </a>
          <div className="flex items-center justify-center gap-4 text-sm font-bold">
            <span className="flex items-center gap-1"><Truck size={16}/> PAGO CONTRA ENTREGA</span>
            <span className="opacity-40">|</span>
            <span className="flex items-center gap-1"><ShieldCheck size={16}/> 30 DÍAS DE GARANTÍA</span>
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQ: React.FC = () => (
  <section className="py-20 bg-white">
    <div className="max-w-3xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Preguntas Frecuentes</h2>
      <div className="space-y-6">
        {[
          { q: "¿En cuánto tiempo veo resultados?", a: "La desinflamación es inmediata. Para un efecto lifting duradero, recomendamos usar el método diariamente durante al menos 2 semanas." },
          { q: "¿Cómo se limpia?", a: "El molde de hielo es de silicona y se lava con agua. El masajeador se limpia con un paño húmedo tras cada uso." },
          { q: "¿Es seguro para piel sensible?", a: "¡Sí! El frío de la crioterapia calma la irritación y el masajeador tiene intensidades ajustables." },
          { q: "¿Tienen envíos a todo el país?", a: "Sí, cubrimos todo el territorio nacional con pago contra entrega para tu total seguridad." }
        ].map((item, idx) => (
          <div key={idx} className="border-b border-gray-100 pb-4">
            <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
              <span className="text-emerald-600">Q:</span> {item.q}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">{item.a}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Footer: React.FC = () => (
  <footer className="bg-gray-900 text-gray-400 py-12">
    <div className="max-w-7xl mx-auto px-4 text-center space-y-6">
      <div className="flex items-center justify-center gap-2 text-white">
        <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center">
          <Zap size={18} />
        </div>
        <span className="font-bold text-xl">BELLA<span className="text-emerald-600">LIFT</span></span>
      </div>
      <p className="text-xs max-w-lg mx-auto leading-relaxed">
        Este producto no reemplaza tratamientos médicos. Los resultados pueden variar de persona a persona. 
        Promovemos una rutina de cuidado personal saludable y constante.
      </p>
      <div className="pt-6 border-t border-gray-800 text-xs flex flex-col md:flex-row justify-center gap-4">
        <span>© 2024 BellaLift - Todos los derechos reservados</span>
        <a href="#" className="hover:text-white">Términos y Condiciones</a>
        <a href="#" className="hover:text-white">Política de Privacidad</a>
      </div>
    </div>
  </footer>
);

const StickyCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) setIsVisible(true);
      else setIsVisible(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/90 backdrop-blur-md border-t border-emerald-100 z-[100] md:hidden animate-slide-up">
      <a 
        href="https://wa.me/593983888235?text=Hola!%20Quiero%20comprar%20el%20combo%20de%20crioterapia%20y%20electroestimulación!"
        className="flex items-center justify-center gap-2 bg-green-500 text-white p-4 rounded-xl font-bold shadow-lg"
      >
        <MessageCircle size={20} />
        PEDIR AHORA (CONTRA ENTREGA)
      </a>
    </div>
  );
};

// --- App Wrapper ---

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Problem />
      <Method />
      <Benefits />
      
      {/* Social Proof - Quick Testimonials */}
      <section className="bg-emerald-50 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-10">Lo que dicen nuestras clientas</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Adriana M.", age: 34, comment: "Mi cara se ve mucho más despierta en las mañanas. El molde de hielo es un antes y un después.", rating: 5 },
              { name: "Lucía V.", age: 42, comment: "El masajeador ayuda un montón con la papada. Lo uso viendo tele y es súper relajante.", rating: 5 },
              { name: "Elena R.", age: 29, comment: "Mejor inversión que botox. Sientes como la piel se estira de forma natural.", rating: 5 }
            ].map((t, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm text-left">
                <div className="flex text-yellow-400 mb-2">
                  {[...Array(t.rating)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <p className="text-gray-600 text-sm italic mb-4">"{t.comment}"</p>
                <p className="font-bold text-xs">{t.name}, {t.age} años</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Pricing />
      
      <FAQ />
      <Footer />
      <StickyCTA />

      <style>{`
        @keyframes slide-up {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
        }
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default App;

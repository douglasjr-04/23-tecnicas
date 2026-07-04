import { createFileRoute } from "@tanstack/react-router";
import { memo, useEffect, useRef, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Secretos del Toque — 23 Técnicas Prohibidas" },
      {
        name: "description",
        content:
          "Aprende hoy las 23 técnicas sexuales prohibidas que hacen que cualquier mujer llegue al clímax sin control.",
      },
      { property: "og:title", content: "Secretos del Toque — 23 Técnicas Prohibidas" },
      {
        property: "og:description",
        content:
          "Descubre el método secreto para llevar a tu pareja al éxtasis total, incluso si nunca lo has hecho antes.",
      },
    ],
    scripts: [
      {
        children:
          "!function(i,n){i._plt=i._plt||(n&&n.timeOrigin?n.timeOrigin+n.now():Date.now())}(window,performance);",
      },
    ],
    links: [
      {
        rel: "preload",
        href: "https://scripts.converteai.net/de722e53-c16b-41db-816f-0d70e83ce9c1/players/6a48b32f2a42658b1bd2bd83/v4/player.js",
        as: "script",
      },
      {
        rel: "preload",
        href: "https://scripts.converteai.net/lib/js/smartplayer-wc/v4/smartplayer.js",
        as: "script",
      },
      {
        rel: "preload",
        href: "https://cdn.converteai.net/de722e53-c16b-41db-816f-0d70e83ce9c1/6a48b31e9fcf9591281f3f5c/main.m3u8",
        as: "fetch",
      },
      { rel: "dns-prefetch", href: "https://cdn.converteai.net" },
      { rel: "dns-prefetch", href: "https://scripts.converteai.net" },
      { rel: "dns-prefetch", href: "https://images.converteai.net" },
      { rel: "dns-prefetch", href: "https://license.vturb.com" },
    ],
  }),
  component: Index,
});

const CHECKOUT_URL = "#planes";
const VTURB_PLAYER_SRC =
  "https://scripts.converteai.net/de722e53-c16b-41db-816f-0d70e83ce9c1/players/6a48b32f2a42658b1bd2bd83/v4/player.js";
const VTURB_PLAYER_ID = "vid-6a48b32f2a42658b1bd2bd83";

function useCountdown(seconds: number) {
  const [t, setT] = useState(seconds);
  useEffect(() => {
    const i = setInterval(() => setT((s) => (s > 0 ? s - 1 : 0)), 1000);
    return () => clearInterval(i);
  }, []);
  const m = String(Math.floor(t / 60)).padStart(2, "0");
  const s = String(t % 60).padStart(2, "0");
  return `${m}:${s}`;
}

const VslPlayer = memo(function VslPlayer() {
  const hostRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host || host.querySelector("vturb-smartplayer")) return;

    const player = document.createElement("vturb-smartplayer");
    player.id = VTURB_PLAYER_ID;
    player.setAttribute("style", "display: block; margin: 0 auto; width: 100%; max-width: 400px;");

    const placeholder = document.createElement("div");
    placeholder.className = "vturb-player-placeholder";
    placeholder.setAttribute(
      "style",
      "position: relative; width: 100%; padding: 177.77777777777777% 0 0; z-index: 0; background-color: black;",
    );

    player.appendChild(placeholder);
    host.replaceChildren(player);
  }, []);

  return <div ref={hostRef} suppressHydrationWarning className="w-full max-w-[400px] mx-auto min-h-[711px]" />;
});

function Index() {
  const time = useCountdown(15 * 60);

  useEffect(() => {
    const existingScript = document.querySelector<HTMLScriptElement>(`script[data-vturb-player="${VTURB_PLAYER_ID}"]`);
    if (existingScript) return;

    const script = document.createElement("script");
    script.src = VTURB_PLAYER_SRC;
    script.async = true;
    script.dataset.vturbPlayer = VTURB_PLAYER_ID;
    document.head.appendChild(script);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground text-center text-sm font-semibold py-2 px-4">
        Oferta válida hasta el miércoles, 3 de junio de 2026
      </div>

      {/* Hero */}
      <section className="px-4 py-16 md:py-24 max-w-5xl mx-auto text-center">
        <h1 className="text-3xl md:text-6xl font-black leading-tight tracking-tight">
          APRENDE <span className="text-primary">LAS 23 TÉCNICAS TÁNTRICAS</span> QUE HACEN QUE ELLA ALCANCE{" "}
          <span className="text-primary">ORGASMOS INTENSOS</span> Y{" "}
          <span className="text-primary">PIERDA EL CONTROL EN LA CAMA</span>
        </h1>
        <p className="mt-6 text-base md:text-lg text-muted-foreground italic max-w-2xl mx-auto">
          Descubre el método secreto para dejar a tu pareja en éxtasis total… aunque nunca antes lo hayas hecho.
        </p>
        <a
          href={CHECKOUT_URL}
          className="mt-10 inline-block bg-primary text-primary-foreground font-bold text-lg md:text-xl px-8 py-4 rounded-lg shadow-[0_10px_40px_-10px_var(--primary)] hover:brightness-110 transition"
        >
          🔥 QUIERO COMENZAR AHORA
        </a>
        <p className="mt-3 text-xs text-muted-foreground">Acceso inmediato y 100% discreto.</p>
      </section>

      {/* Video area */}
      <section className="px-4 pb-16 max-w-4xl mx-auto">
        <div className="rounded-2xl overflow-hidden border-2 border-primary shadow-[0_20px_60px_-20px_var(--primary)] bg-black p-2 md:p-4">
          <VslPlayer />
        </div>
      </section>

      {/* Problem / Solution */}
      <section className="px-4 py-16 bg-card">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-black text-center">
            <span className="text-primary">79%</span> DE LAS MUJERES FINGEN EL ORGASMO
          </h2>
          <p className="text-center mt-4 text-muted-foreground max-w-2xl mx-auto">
            ¿Sabías que el <b className="text-foreground">79% de las mujeres NUNCA</b> han llegado a un{" "}
            <b className="text-foreground">orgasmo verdadero</b>? Y no es culpa de ellas. Es la falta de las técnicas correctas lo que impide el placer.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <div className="rounded-xl border border-border p-6 bg-background">
              <h3 className="font-bold text-lg mb-4">Lo que pasa ahora</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>❌ Ella finge orgasmos solo para no herirte</li>
                <li>❌ Ella pierde el interés en el sexo poco a poco</li>
                <li>❌ Te sientes inseguro y frustrado con tu desempeño</li>
              </ul>
            </div>
            <div className="rounded-xl border border-primary p-6 bg-background">
              <h3 className="font-bold text-lg mb-4 text-primary">Lo que tú quieres</h3>
              <ul className="space-y-3">
                <li>✅ Ella suplicándote por más cada noche</li>
                <li>✅ Ella teniendo orgasmos múltiples y reales</li>
                <li>✅ Tú 100% seguro de tu poder en la cama</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What you get */}
      <section className="px-4 py-16 max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-black text-center">A LO QUE TENDRÁS ACCESO AHORA</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {[
            {
              t: "Videos en Alta Calidad",
              d: "Demostraciones con modelo real mostrando exactamente dónde y cómo tocar.",
            },
            {
              t: "Técnicas 100% Organizadas",
              d: "Contenido directo al grano. Sin rodeos. Mira y aplícalo esa misma noche.",
            },
            {
              t: "Acceso desde el Celular",
              d: "Mira desde donde quieras, de forma discreta y segura. Acceso inmediato.",
            },
          ].map((c) => (
            <div key={c.t} className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-bold text-lg text-primary">{c.t}</h3>
              <p className="mt-3 text-muted-foreground text-sm">{c.d}</p>
            </div>
          ))}
        </div>
        <p className="text-center mt-10 text-muted-foreground max-w-2xl mx-auto">
          Videos con modelo real, técnicas paso a paso, ejercicios prácticos, guías y estrategias que van a{" "}
          <b className="text-foreground">transformar tu confianza en la cama.</b>
        </p>
      </section>

      {/* Sample techniques / Demo */}
      <section className="px-4 py-16 bg-card">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-black text-center">
            DEMOSTRACIÓN DE LO QUE VAS A <span className="text-primary">APRENDER EN EL CURSO</span>
          </h2>
          <p className="text-center mt-3 text-muted-foreground">
            Estas son solo algunas de las 23 técnicas poderosas que vas a dominar por completo:
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {[
              {
                t: "Encendiendo la Hoguera",
                lvl: "Principiante",
                img: "/demo/demo-1.gif",
                d: "Con los bordes externos de las manos, sujeta los labios interno y externo y frótalos suavemente uno contra el otro.",
              },
              {
                t: "Masaje en los Labios Mayores",
                lvl: "Avanzado",
                img: "/demo/demo-2.gif",
                d: "Con el pulgar, masajea los labios externos y frótalos suavemente hasta encender el deseo.",
              },
              {
                t: "Masaje en los Labios Menores",
                lvl: "Secreto",
                img: "/demo/demo-3.gif",
                d: "Con el dedo, masajea los labios internos y frótalos suavemente hasta llevarla a la locura.",
              },
            ].map((c) => (
              <div key={c.t} className="rounded-xl border border-border bg-background p-4 flex flex-col">
                <h3 className="font-bold text-lg text-primary text-center">{c.t}</h3>
                <div className="mt-3 aspect-[4/3] w-full rounded-lg overflow-hidden bg-muted border border-border flex items-center justify-center">
                  <img
                    src={c.img}
                    alt={c.t}
                    loading="lazy"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const el = e.currentTarget as HTMLImageElement;
                      el.style.display = "none";
                      const parent = el.parentElement;
                      if (parent && !parent.querySelector(".ph")) {
                        const ph = document.createElement("div");
                        ph.className = "ph text-xs text-muted-foreground text-center px-3";
                        ph.textContent = "Espacio para GIF / imagen";
                        parent.appendChild(ph);
                      }
                    }}
                  />
                </div>
                <span className="mt-3 inline-block text-xs font-bold uppercase tracking-wider text-primary text-center">
                  Nivel: {c.lvl}
                </span>
                <p className="mt-3 text-muted-foreground text-sm italic text-center">{c.d}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 mx-auto max-w-3xl rounded-xl overflow-hidden border-2 border-primary bg-background">
            <div className="aspect-video w-full flex items-center justify-center">
              <img
                src="/demo/demo-hero.gif"
                alt="Demostración principal del curso"
                loading="lazy"
                className="w-full h-full object-cover"
                onError={(e) => {
                  const el = e.currentTarget as HTMLImageElement;
                  el.style.display = "none";
                  const parent = el.parentElement;
                  if (parent && !parent.querySelector(".ph")) {
                    const ph = document.createElement("div");
                    ph.className = "ph text-sm text-muted-foreground text-center px-4";
                    ph.textContent = "Espacio para GIF / imagen destacada";
                    parent.appendChild(ph);
                  }
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Author */}
      <section className="px-4 py-16 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-black">¿Y quién soy yo para enseñarte esto?</h2>
        <div className="mt-8 w-32 h-32 rounded-full mx-auto bg-gradient-to-br from-primary to-card border-4 border-primary flex items-center justify-center text-4xl font-black">
          IS
        </div>
        <h3 className="mt-6 text-2xl font-bold">Isabela Santos</h3>
        <p className="text-primary text-sm font-semibold tracking-widest mt-1">
          ESPECIALISTA EN PLACER FEMENINO · CERTIFICADA
        </p>
        <p className="mt-6 text-lg italic text-muted-foreground">
          “Todo hombre puede aprender a dar orgasmos inolvidables. Solo necesita las técnicas correctas.”
        </p>
        <p className="mt-6 text-muted-foreground">
          Soy Isabela Santos, terapeuta sexual y especialista en placer femenino con{" "}
          <b className="text-foreground">más de 8 años transformando la vida íntima de las parejas.</b> Ya
          he ayudado a <b className="text-foreground">más de 10.000 hombres</b> a descubrir los secretos que
          hacen que una mujer tenga orgasmos verdaderos e intensos.
        </p>

        <div className="grid grid-cols-3 gap-4 mt-10">
          <Stat icon="🏆" v="+10.000" l="Hombres Transformados" />
          <Stat icon="⭐" v="98%" l="Tasa de Satisfacción" />
          <Stat icon="📚" v="8+ Años" l="de Experiencia" />
        </div>
      </section>

      {/* Bonuses */}
      <section className="px-4 py-16 bg-card">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-black text-center">
            VAS A RECIBIR TODO ESTO HOY, <span className="text-primary">¡SIN PAGAR UN CENTAVO MÁS!</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mt-10">
            {[
              {
                t: "MEJORES Posiciones para Hacerla Acabar",
                v: "USD 19,90",
                d: "Con las posiciones correctas haces que tu pene parezca más grande, alcanzas el punto SKENE con mayor precisión y provocas squirts intensos, incluso en mujeres que nunca acaban con penetración.",
              },
              {
                t: "Técnicas Secretas del Squirt",
                v: "USD 24,90",
                d: "Aprende a llevarla al éxtasis con métodos certeros, posiciones explosivas y estímulos que liberan el squirt sin falla. Solo para los que quieren dominar de verdad.",
              },
              {
                t: "GUÍA DEFINITIVA: SEXO ORAL PERFECTO",
                v: "USD 14,90",
                d: "Con los estímulos correctos en el punto exacto, dominarás el arte del oral y la llevarás a orgasmos intensos e incontrolables, incluso si nunca antes había llegado por esta vía.",
              },
              {
                t: "Posiciones Secretas del Kamasutra Tántrico",
                v: "USD 17,90",
                d: "Las posiciones prohibidas que aumentan 3 veces las probabilidades de un orgasmo múltiple.",
              },
            ].map((b) => (
              <div key={b.t} className="rounded-xl border border-border bg-background p-6 relative">
                <span className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded">
                  GRATIS
                </span>
                <h3 className="font-bold text-lg pr-16">{b.t}</h3>
                <p className="mt-3 text-muted-foreground text-sm">{b.d}</p>
                <p className="mt-4 text-xs text-muted-foreground line-through">Valor real: {b.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="planes" className="px-4 py-16">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-primary font-bold tracking-widest text-sm">¡ATENCIÓN!</p>
          <h2 className="text-2xl md:text-4xl font-black mt-2">ELIGE TU PLAN Y COMIENZA AHORA</h2>
          <p className="mt-4 text-muted-foreground">
            La oferta expira en: <span className="font-mono text-primary font-bold">{time}</span>
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-10 text-left">
            <div className="rounded-2xl border border-border bg-card p-8">
              <h3 className="text-xl font-bold">Plan Inicial</h3>
              <p className="text-sm text-muted-foreground mt-1">Ideal para empezar con lo esencial</p>
              <p className="mt-6 text-sm text-muted-foreground line-through">De USD 39,90</p>
              <p className="text-5xl font-black">
                USD <span className="text-primary">7,90</span>
              </p>
              <p className="text-xs text-muted-foreground">pago único</p>
              <ul className="mt-6 space-y-2 text-sm">
                <li>✅ 10 técnicas paso a paso</li>
                <li>✅ Videos demostrativos</li>
                <li>✅ Acceso inmediato</li>
                <li>✅ Acceso desde el celular</li>
                <li>✅ Garantía de 7 días</li>
                <li className="text-muted-foreground">❌ Acceso a las 23 técnicas completas</li>
                <li className="text-muted-foreground">❌ Bonos incluidos</li>
              </ul>
              <a
                href={CHECKOUT_URL}
                className="mt-6 block text-center bg-secondary text-secondary-foreground font-bold py-3 rounded-lg hover:brightness-125 transition"
              >
                QUIERO EL INICIAL
              </a>
            </div>

            <div className="rounded-2xl border-2 border-primary bg-card p-8 relative shadow-[0_20px_60px_-20px_var(--primary)]">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                🔥 EL MÁS ELEGIDO
              </span>
              <h3 className="text-xl font-bold">Plan Pro</h3>
              <p className="text-sm text-muted-foreground mt-1">Las 23 técnicas + 1 bono especial</p>
              <p className="mt-6 text-sm text-muted-foreground line-through">De USD 79,90</p>
              <p className="text-5xl font-black">
                USD <span className="text-primary">9,90</span>
              </p>
              <p className="text-xs text-muted-foreground">pago único</p>
              <ul className="mt-6 space-y-2 text-sm">
                <li>✅ 23 técnicas paso a paso</li>
                <li>✅ Videos demostrativos</li>
                <li>✅ Acceso inmediato</li>
                <li>✅ Acceso desde el celular</li>
                <li>✅ Garantía de 7 días</li>
                <li>✅ <b>1 bono: Posiciones para hacerla acabar</b></li>
                <li className="text-muted-foreground">❌ Acceso completo a todos los bonos</li>
              </ul>
              <a
                href={CHECKOUT_URL}
                className="mt-6 block text-center bg-primary text-primary-foreground font-bold py-3 rounded-lg hover:brightness-110 transition"
              >
                QUIERO EL PLAN PRO
              </a>
            </div>

            <div className="rounded-2xl border border-border bg-card p-8">
              <h3 className="text-xl font-bold">Acceso Completo</h3>
              <p className="text-sm text-muted-foreground mt-1">Curso completo + todos los bonos visibles</p>
              <p className="mt-6 text-sm text-muted-foreground line-through">De USD 129,90</p>
              <p className="text-5xl font-black">
                USD <span className="text-primary">14,90</span>
              </p>
              <p className="text-xs text-muted-foreground">pago único · acceso total</p>
              <ul className="mt-6 space-y-2 text-sm">
                <li>✅ 23 técnicas paso a paso</li>
                <li>✅ Videos demostrativos</li>
                <li>✅ Acceso inmediato</li>
                <li>✅ Acceso desde el celular</li>
                <li>✅ Garantía de 7 días</li>
                <li>✅ <b>Todos los bonos incluidos</b></li>
                <li>✅ Posiciones para hacerla acabar</li>
                <li>✅ Técnicas Secretas del Squirt</li>
                <li>✅ Guía Oral Perfecto</li>
                <li>✅ Kamasutra Tántrico</li>
              </ul>
              <a
                href={CHECKOUT_URL}
                className="mt-6 block text-center bg-secondary text-secondary-foreground font-bold py-3 rounded-lg hover:brightness-125 transition"
              >
                QUIERO EL ACCESO COMPLETO
              </a>
            </div>
          </div>

          <p className="mt-8 text-sm text-muted-foreground">
            Contenido 100% discreto y seguro. Acceso inmediato tras el pago.
          </p>
        </div>
      </section>

      {/* Guarantee */}
      <section className="px-4 py-16 bg-card">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-24 h-24 mx-auto rounded-full border-4 border-primary flex items-center justify-center text-primary font-black text-xl">
            7 DÍAS
          </div>
          <h2 className="text-2xl md:text-3xl font-black mt-6">GARANTÍA DE 7 DÍAS</h2>
          <p className="mt-4 text-muted-foreground">
            Ten total tranquilidad. Ofrecemos garantía incondicional de 7 días. Si no quedas 100% satisfecho con el
            contenido por cualquier motivo, solicita el reembolso dentro de ese plazo y te devolvemos el 100% de tu
            inversión, sin preguntas.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16 max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-black text-center">¿Todavía tienes dudas? Las respondemos.</h2>
        <div className="mt-10 space-y-4">
          {[
            {
              q: "¿La compra es segura?",
              a: "Sí, tu compra es 100% segura. Usamos sistemas de cifrado de última generación y procesadores de pago certificados para proteger tus datos bancarios. Recibirás acceso inmediato al contenido en cuanto se confirme el pago.",
            },
            {
              q: "¿Y si realmente no soy bueno en la cama? ¿Va a funcionar para mí?",
              a: "Sí. El curso fue creado exactamente para hombres comunes que quieren mejorar su desempeño y darle más placer a su pareja. Aunque nunca hayas estudiado nada sobre sexualidad, las técnicas son fáciles de aplicar, con instrucciones totalmente visuales y paso a paso.",
            },
            {
              q: "¿Mi pareja va a pensar que es raro que tome este curso?",
              a: "Todo lo contrario. La mayoría de las mujeres admira cuando su pareja busca evolucionar y preocuparse por su placer. Además, todo puede hacerse de forma discreta: tú aprendes y aplicas. Lo que importa son los resultados.",
            },
            {
              q: "¿Es seguro comprar? ¿Nadie sabrá que compré este curso?",
              a: "Totalmente seguro y discreto. La plataforma de pago está protegida y el nombre del curso no aparece de forma explícita en el estado de cuenta de tu tarjeta. Acceso inmediato, privacidad garantizada.",
            },
            {
              q: "¿Cómo se hacen las demostraciones de las técnicas?",
              a: "Las demostraciones se realizan con una modelo real, con videos detallados y explicativos que muestran exactamente dónde y cómo aplicar cada técnica. Verás todos los movimientos con claridad (presión correcta, ritmo, etc.).",
            },
            {
              q: "¿Y si no me gusta? ¿Tengo alguna garantía?",
              a: "¡Sí! Ofrecemos garantía incondicional de 7 días. Si no quedas satisfecho con el contenido por cualquier motivo, solicita el reembolso dentro de ese plazo y te devolvemos el 100% de tu inversión, sin letras pequeñas.",
            },
          ].map((f) => (
            <details
              key={f.q}
              className="rounded-xl border border-border bg-card p-5 group [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="cursor-pointer font-semibold flex justify-between items-center">
                {f.q}
                <span className="text-primary transition group-open:rotate-45 text-xl">+</span>
              </summary>
              <p className="mt-4 text-muted-foreground text-sm">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 py-16 bg-card text-center">
        <h2 className="text-2xl md:text-4xl font-black max-w-3xl mx-auto">
          Última oportunidad para asegurar tu acceso con el precio especial antes de que termine la oferta.
        </h2>
        <a
          href={CHECKOUT_URL}
          className="mt-8 inline-block bg-primary text-primary-foreground font-bold text-lg px-8 py-4 rounded-lg hover:brightness-110 transition"
        >
          ¡QUIERO HACERLA ACABAR SIN CONTROL!
        </a>
        <p className="mt-4 text-sm text-muted-foreground">
          Recíbelo todo ahora mismo. Privado, seguro y totalmente discreto.
        </p>
        <p className="mt-6 text-xs text-muted-foreground max-w-xl mx-auto">
          ATENCIÓN: Hay muchos accesos en este momento. Asegura el tuyo antes de que se acabe.
        </p>
      </section>

      <footer className="px-4 py-8 text-center text-xs text-muted-foreground border-t border-border">
        🔒 Sitio 100% Seguro · Contenido protegido por derechos de autor.
      </footer>
    </div>
  );
}

function Stat({ icon, v, l }: { icon: string; v: string; l: string }) {
  return (
    <div className="rounded-xl border border-border bg-card p-4">
      <div className="text-2xl">{icon}</div>
      <div className="font-black text-lg md:text-xl text-primary mt-1">{v}</div>
      <div className="text-xs text-muted-foreground mt-1">{l}</div>
    </div>
  );
}

import { useEffect, useRef, useState } from 'react';
import {
  ArrowDown, ArrowRight, ArrowUpRight, AudioLines, Check,
  Clock3, Cpu, MapPin, Menu, Microwave, Phone, ShieldCheck,
  Tv, Wrench, X
} from 'lucide-react';

const WHATSAPP = '5513955380693';
const whatsappLink = (message = 'Olá! Gostaria de solicitar um orçamento.') =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;

function BrandMark() {
  return (
    <a href="#inicio" className="flex items-center gap-3" aria-label="Eletrônica Cavallini, início">
      <span className="grid h-11 w-11 place-items-center rounded-2xl bg-orange text-white shadow-lg shadow-orange/20">
        <Cpu size={23} strokeWidth={1.8}  aria-hidden="true" />
      </span>
      <span className="leading-tight">
        <span className="block font-display text-[15px] font-extrabold tracking-[-.04em] text-ink">CAVALLINI</span>
        <span className="mt-0.5 block text-[9px] font-bold tracking-[.19em] text-slate-500">ELETRÔNICA DESDE 1963</span>
      </span>
    </a>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef(null);
  const links = [['Marcas', '#marcas'], ['Serviços', '#servicos'], ['Sobre', '#sobre'], ['Contato', '#contato']];
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl" onKeyDown={(event) => {
      if (event.key === 'Escape' && open) {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    }}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 lg:px-8">
        <BrandMark />
        <nav className="hidden items-center gap-8 md:flex" aria-label="Navegação principal">
          {links.map(([label, href]) => <a key={href} className="nav-link" href={href}>{label}</a>)}
        </nav>
        <a href={whatsappLink()} target="_blank" rel="noreferrer" className="hidden items-center gap-2 rounded-full bg-orange px-5 py-3 text-sm font-bold text-white shadow-sm shadow-orange/20 transition hover:bg-orange-700 sm:flex">
          <span>Fale com um técnico</span><ArrowUpRight size={16}  aria-hidden="true" />
        </a>
        <button ref={menuButtonRef} className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 text-ink md:hidden" onClick={() => setOpen(!open)} aria-label={open ? 'Fechar menu' : 'Abrir menu'} aria-expanded={open} aria-controls="mobile-navigation">
          {open ? <X size={20}  aria-hidden="true" /> : <Menu size={20}  aria-hidden="true" />}
        </button>
      </div>
      <nav id="mobile-navigation" hidden={!open} className="border-t border-slate-100 bg-white px-5 py-3 md:hidden" aria-label="Navegação móvel">
        {links.map(([label, href]) => <a key={href} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-3 font-semibold text-ink hover:bg-mist" href={href}>{label}</a>)}
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-[#fbfcfa]">
      <div className="hero-grid absolute inset-0 opacity-50" />
      <div className="absolute -right-40 -top-52 h-[600px] w-[600px] rounded-full bg-orange/5 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 pb-16 pt-14 sm:pt-20 lg:grid-cols-[1.03fr_.97fr] lg:px-8 lg:pb-24 lg:pt-24">
        <div className="max-w-2xl">
          <h1 className="font-display text-[2.75rem] font-extrabold leading-[1.08] tracking-[-.055em] text-ink sm:text-6xl lg:text-[4.15rem]">
            <span className="text-orange">Há mais de 60 anos,</span> seu aparelho está em boas mãos.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Assistência técnica especializada para TVs, micro-ondas, áudio e eletroportáteis. Diagnóstico claro e orçamento sem compromisso.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-orange px-7 text-sm font-bold text-white shadow-lg shadow-orange/20 transition hover:-translate-y-0.5 hover:bg-orange-700" href={whatsappLink()} target="_blank" rel="noreferrer">
              Solicite um orçamento via WhatsApp <ArrowRight size={17}  aria-hidden="true" />
            </a>
            <a href="#servicos" className="inline-flex min-h-12 items-center justify-center gap-2 px-5 text-sm font-bold text-ink transition hover:text-orange">
              Conheça nossos serviços <ArrowDown size={15}  aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-[540px]">
          <div className="absolute -left-4 top-14 h-40 w-40 rounded-full bg-orange/10 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-[#f5f6f3] p-5 shadow-soft sm:p-7">
            <div className="absolute -right-16 -top-20 h-64 w-64 rounded-full border border-slate-300/70" />
            <div className="absolute -right-5 -top-9 h-44 w-44 rounded-full border border-slate-300/70" />
            <div className="relative">
              <div>
                <div className="text-[10px] font-extrabold uppercase tracking-[.2em] text-orange-700">Excelência em cada detalhe</div>
                <div className="mt-2 font-display text-xl font-bold text-ink sm:text-2xl">Tecnologia com confiança.</div>
              </div>
            </div>
            <div className="relative mt-7 overflow-hidden rounded-[1.4rem] border border-slate-300 bg-slate-200 shadow-2xl">
              <img src={`${import.meta.env.BASE_URL}fachada-cavallini.jpeg`} alt="Fachada da Eletrônica Cavallini em Santos" className="aspect-[1.25] w-full object-cover sm:aspect-[1.45]" fetchPriority="high" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#1b2026]/90 via-[#1b2026]/45 to-transparent px-5 pb-5 pt-16 sm:px-6 sm:pb-6">
                <div className="font-display text-sm font-extrabold tracking-wide text-white sm:text-base">Reparo especializado</div>
                <div className="mt-1 text-xs font-medium text-white/90">Da avaliação ao teste final</div>
              </div>
            </div>
            <div className="relative mt-5 flex items-center justify-between text-sm text-slate-600">
              <span className="inline-flex items-center gap-2"><MapPin size={15}  aria-hidden="true" /> Santos e Baixada Santista</span>
              <span className="font-bold text-ink">Desde 1963</span>
            </div>
          </div>
        </div>
      </div>
      <a href="#marcas" aria-label="Role para ver mais conteúdo" className="absolute bottom-4 left-1/2 grid h-9 w-9 -translate-x-1/2 place-items-center rounded-full border border-slate-300/70 text-slate-500 transition hover:border-orange hover:text-orange" >
        <ArrowDown size={16} aria-hidden="true" />
      </a>
    </section>
  );
}

const services = [
  { icon: Tv, title: 'Televisores', text: 'Diagnóstico e reparo de TVs LED, LCD e Smart TVs.' },
  { icon: Microwave, title: 'Micro-ondas', text: 'Manutenção segura para seu aparelho voltar à rotina.' },
  { icon: AudioLines, title: 'Caixas de som', text: 'Reparo de equipamentos de áudio e caixas amplificadas.' },
  { icon: Wrench, title: 'Eletroportáteis', text: 'Assistência para pequenos aparelhos do dia a dia.' }
];

function SectionHeading({ eyebrow, title, description, centered = false }) {
  return <div className={`${centered ? 'mx-auto text-center' : ''} max-w-2xl`}>
    <div className="mb-3 text-xs font-extrabold uppercase tracking-[.18em] text-orange">{eyebrow}</div>
    <h2 className="font-display text-3xl font-extrabold leading-tight tracking-[-.045em] text-ink sm:text-4xl">{title}</h2>
    {description && <p className="mt-4 text-base leading-7 text-slate-600">{description}</p>}
  </div>;
}

function Services() {
  return <section id="servicos" className="scroll-mt-20 bg-white py-20 sm:py-24">
    <div className="mx-auto max-w-7xl px-5 lg:px-8">
      <SectionHeading eyebrow="Como podemos ajudar" title="Conserto especializado, do jeito que deve ser." description="Conte com orientação técnica e um atendimento próximo para encontrar a solução certa para o seu equipamento." />
      <div className="mt-11 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {services.map(({ icon: Icon, title, text }, index) => <article key={title} className="service-card group rounded-3xl border border-slate-200/80 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-orange/20 hover:shadow-soft">
          <div className="flex items-start justify-between"><span className="grid h-12 w-12 place-items-center rounded-2xl bg-orange-50 text-orange transition group-hover:bg-orange group-hover:text-white"><Icon size={22} strokeWidth={1.8} aria-hidden="true" /></span><span className="text-xs font-bold text-slate-500">0{index + 1}</span></div>
          <h3 className="mt-6 font-display text-lg font-extrabold tracking-[-.025em] text-ink">{title}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-500">{text}</p>
          <div className="mt-5 h-px w-full bg-slate-100" />
          <p className="mt-4 text-xs font-bold text-orange">Avaliação técnica cuidadosa</p>
        </article>)}
      </div>
      <p className="mt-7 text-center text-sm text-slate-500">Tem outro equipamento? <a className="font-bold text-orange hover:underline" href={whatsappLink('Olá! Gostaria de consultar sobre um equipamento.') } target="_blank" rel="noreferrer">Consulte nossa equipe.</a></p>
    </div>
  </section>;
}

function Brands() {
  const authorized = ['Philco', 'Britânia', 'Aiwa', 'Mondial', 'Toshiba'];
  const specialized = ['Samsung', 'LG', 'Sony', 'e outras marcas'];
  return <section id="marcas" className="scroll-mt-20 bg-mist py-20 sm:py-24">
    <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[.82fr_1.18fr] lg:items-center lg:px-8">
      <SectionHeading eyebrow="Experiência que faz diferença" title="Conhecimento para várias marcas." description="Somos assistência autorizada para marcas selecionadas e também trabalhamos com outras fabricantes. Consulte a disponibilidade para o seu modelo." />
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-3xl bg-white p-6 shadow-card sm:p-7">
          <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-[.16em] text-orange"><ShieldCheck size={16}  aria-hidden="true" /> Autorizada</div>
          <div className="mt-5 flex flex-wrap gap-2">{authorized.map(brand => <span key={brand} className="brand-pill">{brand}</span>)}</div>
          <p className="mt-5 text-xs leading-5 text-slate-500">Confirme conosco a cobertura de assistência para seu produto.</p>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-[#f5f6f3] p-6 text-ink shadow-card sm:p-7">
          <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-[.16em] text-orange"><Cpu size={16}  aria-hidden="true" /> Especializada</div>
          <div className="mt-5 flex flex-wrap gap-2">{specialized.map(brand => <span key={brand} className="brand-pill">{brand}</span>)}</div>
          <p className="mt-5 text-xs leading-5 text-slate-600">Atendimento técnico mediante avaliação do equipamento e do modelo.</p>
        </div>
      </div>
    </div>
  </section>;
}

function About() {
  const facts = [{ value: '1963', label: 'início da nossa história' }, { value: '60+', label: 'anos de tradição' }, { value: 'Santos', label: 'nossa casa' }];
  return <section id="sobre" className="scroll-mt-20 bg-white py-20 sm:py-24">
    <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-8">
      <div className="relative rounded-[2rem] bg-orange-50 p-7 sm:p-10">
        <div className="absolute right-8 top-8 h-24 w-24 rounded-full border border-orange/10" />
        <div className="relative">
          <div className="text-xs font-extrabold uppercase tracking-[.18em] text-orange">Uma história construída com confiança</div>
          <p className="mt-5 font-display text-2xl font-extrabold leading-snug tracking-[-.04em] text-ink sm:text-3xl">Por gerações, a Cavallini cuida da tecnologia que faz parte da sua casa.</p>
          <div className="mt-9 grid grid-cols-3 gap-3 border-t border-orange/10 pt-6">
            {facts.map(({ value, label }) => <div key={value}><div className="font-display text-xl font-extrabold tracking-[-.04em] text-orange sm:text-2xl">{value}</div><div className="mt-1 text-[10px] leading-4 text-slate-600 sm:text-xs">{label}</div></div>)}
          </div>
        </div>
      </div>
      <div>
        <SectionHeading eyebrow="Sobre a Cavallini" title="Tradição, cuidado e transparência em cada reparo." description="Desde 1963, unimos experiência técnica e atendimento próximo para ajudar você a aproveitar seus equipamentos por mais tempo." />
        <div className="mt-7 space-y-4">
          {[
            ['Diagnóstico responsável', 'Entendemos o problema antes de recomendar qualquer serviço.'],
            ['Orçamento claro', 'Você conhece as condições e aprova o reparo antes de começarmos.'],
            ['Atendimento regional', 'Atendemos todos os bairros de Santos e região da Baixada Santista, com retirada e entrega em domicílio.']
          ].map(([title, body]) => <div key={title} className="flex gap-3"><span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-mint text-emerald-700"><Check size={14} strokeWidth={3}  aria-hidden="true" /></span><div><h3 className="text-sm font-bold text-ink">{title}</h3><p className="mt-1 text-sm leading-6 text-slate-500">{body}</p></div></div>)}
        </div>
      </div>
    </div>
  </section>;
}

function Contact() {
  const phones = [{ label: 'Telefone fixo', display: '(13) 3234-8008', href: 'tel:+551332348008' }, { label: 'Telefone fixo', display: '(13) 3234-7833', href: 'tel:+551332347833' }];
  const address = 'Av. Washington Luís, 178 - Vila Matias, Santos - SP, 11050-200';
  const mapLink = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(address);
  const mapEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(address)}&z=16&output=embed`;
  return <section id="contato" className="scroll-mt-20 bg-[#fbfcfa] py-20 sm:py-24">
    <div className="mx-auto max-w-7xl px-5 lg:px-8">
      <div className="grid overflow-hidden rounded-[2rem] bg-white shadow-soft lg:grid-cols-[1fr_.92fr]">
        <div className="p-7 sm:p-10 lg:p-12">
          <SectionHeading eyebrow="Estamos por aqui" title="Vamos conversar sobre o seu aparelho?" description="Fale com nossa equipe, conte o que aconteceu e receba orientação para os próximos passos." />
          <div className="mt-8 space-y-5">
            <div className="flex gap-4"><span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-orange-50 text-orange"><Phone size={19}  aria-hidden="true" /></span><div><div className="text-xs font-bold text-slate-600">TELEFONES FIXOS</div><div className="mt-1 flex flex-wrap gap-x-4 gap-y-1">{phones.map(phone => <a key={phone.href} href={phone.href} className="text-sm font-bold text-ink hover:text-orange">{phone.display}</a>)}</div></div></div>
            <div className="flex gap-4"><span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-mint text-emerald-700"><MapPin size={19}  aria-hidden="true" /></span><div><div className="text-xs font-bold text-slate-600">ENDEREÇO</div><a href={mapLink} target="_blank" rel="noreferrer" className="mt-1 block max-w-sm text-sm font-bold leading-6 text-ink hover:text-orange">{address}<span className="ml-1 inline-block align-middle"><ArrowUpRight size={14}  aria-hidden="true" /></span></a></div></div>
            <div className="flex gap-4"><span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-amber-100 text-amber-700"><Clock3 size={19}  aria-hidden="true" /></span><div><div className="text-xs font-bold text-slate-600">HORÁRIO DE FUNCIONAMENTO</div><p className="mt-1 text-sm leading-6 text-slate-600">De Segunda a Sexta-feira, das 09:00 às 18:00h</p></div></div>
          </div>
        </div>
        <div className="min-h-[350px] overflow-hidden bg-slate-100 sm:min-h-[460px] lg:min-h-[520px]">
          <iframe
            src={mapEmbedUrl}
            title="Mapa da localização da Eletrônica Cavallini em Santos"
            className="h-full min-h-[350px] w-full border-0 sm:min-h-[460px] lg:min-h-[520px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  </section>;
}

function Footer() {
  return <footer className="bg-slate-100 text-ink">
    <div className="mx-auto flex max-w-7xl flex-col gap-7 px-5 py-8 sm:flex-row sm:items-center sm:justify-between lg:px-8">
      <div className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-xl bg-orange text-white"><Cpu size={20} aria-hidden="true" /></span><div><div className="font-display text-sm font-extrabold tracking-wide">ELETRÔNICA CAVALLINI</div><div className="mt-1 text-[10px] text-slate-600">Tradição desde 1963 · Santos, SP</div></div></div>
      <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-semibold text-slate-700"><a href="tel:+551332348008" className="transition hover:text-orange">(13) 3234-8008</a><a href="tel:+551332347833" className="transition hover:text-orange">(13) 3234-7833</a><a href={whatsappLink()} target="_blank" rel="noreferrer" className="transition hover:text-orange">WhatsApp (13) 95538-0693</a></div>
      <div className="text-[10px] text-slate-600">© {new Date().getFullYear()} Eletrônica Cavallini</div>
    </div>
  </footer>;
}

function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById('inicio');
    if (!hero || !('IntersectionObserver' in window)) {
      setVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(([entry]) => setVisible(!entry.isIntersecting), { threshold: 0.01 });
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  if (!visible) return null;

  return <a href={whatsappLink()} target="_blank" rel="noreferrer" aria-label="Conversar com a Eletrônica Cavallini pelo WhatsApp" className="floating-wa group fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#20c875] text-[#07351d] shadow-xl shadow-emerald-900/20 transition hover:-translate-y-1 hover:scale-105 sm:bottom-7 sm:right-7">
    <Phone size={23} strokeWidth={2.4}  aria-hidden="true" />
    <span className="pointer-events-none absolute right-[calc(100%+12px)] whitespace-nowrap rounded-xl bg-ink px-3 py-2 text-xs font-bold text-white opacity-0 shadow-lg transition group-hover:opacity-100">Fale pelo WhatsApp</span>
  </a>;
}

export default function App() {
  return <>
    <a className="skip-link" href="#main-content">Pular para o conteúdo principal</a>
    <Header />
    <main id="main-content" tabIndex="-1"><Hero /><Brands /><Services /><About /><Contact /></main>
    <Footer />
    <FloatingWhatsApp />
  </>;
}

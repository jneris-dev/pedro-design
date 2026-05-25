import { useState } from 'react'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    { name: 'Inicio', href: '/' },
    { name: 'Sobre', href: '/#about' },
    { name: 'Projetos', href: '/#projects' },
    { name: 'Contato', href: '/#contact' },
  ]

  return (
    <main className="w-full h-auto relative">
      <header className="w-full h-16 bg-white/50 border-b border-slate-100 sticky top-0 z-50 backdrop-blur-md">
        <nav className="w-full h-full flex items-center justify-between px-4 mx-auto max-w-7xl">
          <div className="flex items-center justify-between w-full">
            <a href="/" className="text-indigo-600 text-xl font-bold">Pedro Design</a>
            <div className={`
              absolute left-0 top-16 w-full overflow-hidden
              border-b border-slate-100 bg-white/95 backdrop-blur-md
              transition-all duration-300 md:static md:w-auto
              md:border-0 md:bg-transparent md:backdrop-blur-none
              ${
                menuOpen
                  ? 'max-h-96 opacity-100'
                  : 'max-h-0 opacity-0 md:max-h-none md:opacity-100'
              }
            `}>
              <ul className="flex flex-col py-4 md:flex-row md:items-center md:gap-10 md:py-0">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="block px-4 py-3 font-light transition hover:bg-slate-50 hover:text-indigo-500 md:p-0 md:hover:bg-transparent"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="rounded p-2 focus:outline-none focus:ring-1 focus:ring-indigo-500 md:hidden"
            >
              <svg
                viewBox="0 0 24 18"
                width={24}
                height={18}
                className="fill-none stroke-indigo-500 stroke-2"
              >
                <path d="M3 6H21" strokeLinecap="round"/>
                <path d="M3 12H21" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
        </nav>
      </header>

      <section className="w-full h-auto flex flex-col items-center justify-center pt-24 pb-10 gap-20" id="about">
        <div className="w-full h-auto px-4 mx-auto max-w-5xl flex flex-col items-center justify-center gap-8">
          <h2 className="text-5xl">Sobre</h2>
          <div className="w-full h-auto flex flex-col items-start justify-start gap-4 text-slate-600 text-start">
            <p>Sou designer e programador. Especializado em branding, design e comunicação digital. Sempre buscando ideias criativas e inovadoras, que gerem resultados tangíveis.</p>
            <p>Com uma trajetória de 7 anos no mercado, atuando como designer e programador para grandes marcas como LG, Unimed, Cummins, Doremus entre outras onde pude ampliar meu conhecimento e criatividade garantindo a qualidade na entrega e satisfação do cliente.</p>
            <p>Me aperfeiçoei em Criação de Site, Lojas Virtual (E-commerce), Identidade Visual, Design Gráfico e Comunicação Visual. Minhas criações seguem sólidos conceitos do design, gestalt e teoria da cor sempre levando em consideração o tipo de negócio, concorrentes e melhor forma de impacto para disseminação da marca. Desenvolvo sites modernos, de fácil navegação e facilmente atualizáveis, com excelente visibilidade junto aos buscadores.</p>
          </div>
          <div className="w-full h-auto flex items-center justify-center gap-4">
            <div className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center group hover:bg-indigo-500 transition cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="fill-indigo-500 group-hover:fill-white"><path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"/></svg>
            </div>
            <div className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center group hover:bg-indigo-500 transition cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="fill-indigo-500 group-hover:fill-white"><path d="M12 0c-6.628 0-12 5.373-12 12s5.372 12 12 12 12-5.373 12-12-5.372-12-12-12zm9.885 11.441c-2.575-.422-4.943-.445-7.103-.073-.244-.563-.497-1.125-.767-1.68 2.31-1 4.165-2.358 5.548-4.082 1.35 1.594 2.197 3.619 2.322 5.835zm-3.842-7.282c-1.205 1.554-2.868 2.783-4.986 3.68-1.016-1.861-2.178-3.676-3.488-5.438.779-.197 1.591-.314 2.431-.314 2.275 0 4.368.779 6.043 2.072zm-10.516-.993c1.331 1.742 2.511 3.538 3.537 5.381-2.43.715-5.331 1.082-8.684 1.105.692-2.835 2.601-5.193 5.147-6.486zm-5.44 8.834l.013-.256c3.849-.005 7.169-.448 9.95-1.322.233.475.456.952.67 1.432-3.38 1.057-6.165 3.222-8.337 6.48-1.432-1.719-2.296-3.927-2.296-6.334zm3.829 7.81c1.969-3.088 4.482-5.098 7.598-6.027.928 2.42 1.609 4.91 2.043 7.46-3.349 1.291-6.953.666-9.641-1.433zm11.586.43c-.438-2.353-1.08-4.653-1.92-6.897 1.876-.265 3.94-.196 6.199.196-.437 2.786-2.028 5.192-4.279 6.701z"/></svg>
            </div>
          </div>
        </div>        
        <div className="w-full max-w-7xl flex overflow-hidden mx-auto">
          <div className="group flex gap-8 flex-[0_0_100%] will-change-transform px-4 animate-marquee">
            <div className="flex w-auto h-auto flex-1">
              <img src="/tools/figma.svg" className="md:h-7 h-10 max-w-fit w-auto opacity-25 grayscale transition hover:opacity-100 hover:grayscale-0" alt="figma" title="figma" />
            </div>
            <div className="flex w-auto h-auto flex-1">
              <img src="/tools/photoshop.svg" className="md:h-7 h-10 max-w-fit w-auto opacity-25 grayscale transition hover:opacity-100 hover:grayscale-0" alt="photoshop" title="photoshop" />
            </div>
            <div className="flex w-auto h-auto flex-1">
              <img src="/tools/illustrator.svg" className="md:h-7 h-10 max-w-fit w-auto opacity-25 grayscale transition hover:opacity-100 hover:grayscale-0" alt="illustrator" title="illustrator" />
            </div>
            <div className="flex w-auto h-auto flex-1">
              <img src="/tools/indesign.svg" className="md:h-7 h-10 max-w-fit w-auto opacity-25 grayscale transition hover:opacity-100 hover:grayscale-0" alt="indesign" title="indesign" />
            </div>
            <div className="flex w-auto h-auto flex-1">
              <img src="/tools/notion.svg" className="md:h-7 h-10 max-w-fit w-auto opacity-25 grayscale transition hover:opacity-100 hover:grayscale-0" alt="notion" title="notion" />
            </div>
            <div className="flex w-auto h-auto flex-1">
              <img src="/tools/openai.svg" className="md:h-7 h-10 max-w-fit w-auto opacity-25 grayscale transition hover:opacity-100 hover:grayscale-0" alt="openai" title="openai" />
            </div>
            <div className="flex w-auto h-auto flex-1">
              <img src="/tools/protopie.svg" className="md:h-7 h-10 max-w-fit w-auto opacity-25 grayscale transition hover:opacity-100 hover:grayscale-0" alt="protopie" title="protopie" />
            </div>
            <div className="flex w-auto h-auto flex-1">
              <img src="/tools/capcut.svg" className="md:h-7 h-10 max-w-fit w-auto opacity-25 grayscale transition hover:opacity-100 hover:grayscale-0" alt="capcut" title="capcut" />
            </div>
            <div className="flex w-auto h-auto flex-1">
              <img src="/tools/canva.svg" className="md:h-7 h-10 max-w-fit w-auto opacity-25 grayscale transition hover:opacity-100 hover:grayscale-0" alt="canva" title="canva" />
            </div>
          </div>
          <div className="group flex gap-8 flex-[0_0_100%] will-change-transform px-4 animate-marquee" aria-hidden="true">
            <div className="flex w-auto h-auto flex-1">
              <img src="/tools/figma.svg" className="md:h-7 h-10 max-w-fit w-auto opacity-25 grayscale transition hover:opacity-100 hover:grayscale-0" alt="figma" title="figma" />
            </div>
            <div className="flex w-auto h-auto flex-1">
              <img src="/tools/photoshop.svg" className="md:h-7 h-10 max-w-fit w-auto opacity-25 grayscale transition hover:opacity-100 hover:grayscale-0" alt="photoshop" title="photoshop" />
            </div>
            <div className="flex w-auto h-auto flex-1">
              <img src="/tools/illustrator.svg" className="md:h-7 h-10 max-w-fit w-auto opacity-25 grayscale transition hover:opacity-100 hover:grayscale-0" alt="illustrator" title="illustrator" />
            </div>
            <div className="flex w-auto h-auto flex-1">
              <img src="/tools/indesign.svg" className="md:h-7 h-10 max-w-fit w-auto opacity-25 grayscale transition hover:opacity-100 hover:grayscale-0" alt="indesign" title="indesign" />
            </div>
            <div className="flex w-auto h-auto flex-1">
              <img src="/tools/notion.svg" className="md:h-7 h-10 max-w-fit w-auto opacity-25 grayscale transition hover:opacity-100 hover:grayscale-0" alt="notion" title="notion" />
            </div>
            <div className="flex w-auto h-auto flex-1">
              <img src="/tools/openai.svg" className="md:h-7 h-10 max-w-fit w-auto opacity-25 grayscale transition hover:opacity-100 hover:grayscale-0" alt="openai" title="openai" />
            </div>
            <div className="flex w-auto h-auto flex-1">
              <img src="/tools/protopie.svg" className="md:h-7 h-10 max-w-fit w-auto opacity-25 grayscale transition hover:opacity-100 hover:grayscale-0" alt="protopie" title="protopie" />
            </div>
            <div className="flex w-auto h-auto flex-1">
              <img src="/tools/capcut.svg" className="md:h-7 h-10 max-w-fit w-auto opacity-25 grayscale transition hover:opacity-100 hover:grayscale-0" alt="capcut" title="capcut" />
            </div>
            <div className="flex w-auto h-auto flex-1">
              <img src="/tools/canva.svg" className="md:h-7 h-10 max-w-fit w-auto opacity-25 grayscale transition hover:opacity-100 hover:grayscale-0" alt="canva" title="canva" />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full h-auto flex items-center justify-center py-24 bg-white">
        <div className="w-full h-auto mx-auto md:px-12 px-4 flex flex-col items-center justify-center gap-8">
          <h2 className="text-5xl font-light">Atuação</h2>
          <div className="flex flex-row flex-wrap pt-5 gap-y-12 md:divide-x divide-slate-200">
            <div className="md:w-1/2 w-full md:px-8">
              <div className="flex flex-col items-center justify-center text-center gap-4">
                <div>
                  <svg version="1.1" id="Uploaded to svgrepo.com" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
                    width="52" height="52" viewBox="0 0 32 32" xmlSpace="preserve">
                  <path d="M29,4H3C1.343,4,0,5.343,0,7v16c0,1.657,1.343,3,3,3h9v3h-1.5c-0.276,0-0.5,0.224-0.5,0.5l0,0
                    c0,0.276,0.224,0.5,0.5,0.5h11c0.276,0,0.5-0.224,0.5-0.5l0,0c0-0.276-0.224-0.5-0.5-0.5H20v-3h9c1.657,0,3-1.343,3-3V7
                    C32,5.343,30.657,4,29,4z M19,29h-6v-3h6V29z M31,23c0,1.105-0.895,2-2,2H3c-1.105,0-2-0.895-2-2V7c0-1.105,0.895-2,2-2h26
                    c1.105,0,2,0.895,2,2V23z M25.805,9.03c-0.782-0.154-1.475,0.3-1.713,0.97H18V9h-4v1H7.908C7.67,9.33,6.976,8.876,6.195,9.03
                    c-0.573,0.113-1.04,0.572-1.16,1.144C4.83,11.145,5.565,12,6.5,12c0.652,0,1.202-0.419,1.408-1H14v0.224
                    c-4.388,0.897-7.745,4.658-7.986,9.246C5.999,20.757,6.227,21,6.515,21h0c0.263,0,0.484-0.204,0.497-0.467
                    c0.209-4.065,3.134-7.41,6.988-8.289V13h4v-0.757c3.854,0.88,6.779,4.225,6.988,8.289C25.002,20.796,25.222,21,25.485,21h0
                    c0.288,0,0.516-0.243,0.501-0.53c-0.241-4.588-3.598-8.349-7.986-9.246V11h6.092c0.207,0.581,0.756,1,1.408,1
                    c0.935,0,1.67-0.855,1.466-1.826C26.845,9.602,26.378,9.143,25.805,9.03z M6.5,11C6.224,11,6,10.776,6,10.5S6.224,10,6.5,10
                    S7,10.224,7,10.5S6.776,11,6.5,11z M17,12h-2v-2h2V12z M25.5,11c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5
                    S25.776,11,25.5,11z"/>
                  </svg>
                </div>
                <strong className="text-lg">Design Digital</strong>
                <p className="text-sm text-slate-600">Criação e produção de layouts usuais e acessíveis, acompanhando as tecnologias e tendências do mercado. Site Institucional, Loja Virtual (E-commerce), Portais, Landing page, E-mail Marketing e todos materiais digitais.</p>
              </div>
            </div>
            <div className="md:w-1/2 w-full md:px-8">
              <div className="flex flex-col items-center justify-center text-center gap-4">
                <div>
                  <svg version="1.1" id="Uploaded to svgrepo.com" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="52" height="52" viewBox="0 0 32 32" xmlSpace="preserve">
                    <path d="M19,0h-6c-1.657,0-3,1.343-3,3v22c0,0.552,0.448,1,1,1l4,4v0.957c0,0.522,0.382,0.989,0.902,1.038
                    C16.498,32.052,17,31.585,17,31v-1l4-4c0.552,0,1-0.448,1-1V3C22,1.343,20.657,0,19,0z M16.586,29h-1.171l-3-3h7.172L16.586,29z
                    M21,25H11V11h1v4c0,1.105,0.895,2,2,2s2-0.895,2-2v-4h5V25z M21,10h-6v5c0,0.551-0.449,1-1,1s-1-0.449-1-1v-5h-2V3
                    c0-1.105,0.895-2,2-2h6c1.105,0,2,0.895,2,2V10z"/>
                  </svg>
                </div>
                <strong className="text-lg">Identidade Visual</strong>
                <p className="text-sm text-slate-600">Criação de identidade visual, incluindo manual de aplicação personalizado da marca, em diversos formatos, tipos e estilos para publicações e orientações, juntamente com a criação do material de papelaria.</p>
              </div>
            </div>
          </div>
          <div className="flex flex-row flex-wrap pt-5 gap-y-12 md:divide-x divide-slate-200">
            <div className="md:w-1/2 w-full md:px-8">
              <div className="flex flex-col items-center justify-center text-center gap-4">
                <div>
                  <svg version="1.1" id="Uploaded to svgrepo.com" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
                    width="52" height="52" viewBox="0 0 32 32" xmlSpace="preserve">
                  <path d="M19.5,12.5c0,0.276-0.224,0.5-0.5,0.5h-6c-0.276,0-0.5-0.224-0.5-0.5S12.724,12,13,12h6
                    C19.276,12,19.5,12.224,19.5,12.5z M19.5,14.5c0,0.276-0.224,0.5-0.5,0.5h-6c-0.276,0-0.5-0.224-0.5-0.5S12.724,14,13,14h6
                    C19.276,14,19.5,14.224,19.5,14.5z M19.5,16.5c0,0.276-0.224,0.5-0.5,0.5h-6c-0.276,0-0.5-0.224-0.5-0.5S12.724,16,13,16h6
                    C19.276,16,19.5,16.224,19.5,16.5z M27,5h-7c0-1.657-1.343-3-3-3h-2c-1.657,0-3,1.343-3,3H5C3.343,5,2,6.343,2,8v13
                    c0,1.657,1.343,3,3,3h6.117l-2.546,4.243c-0.143,0.237-0.065,0.544,0.172,0.686C8.823,28.977,8.912,29,9,29
                    c0.169,0,0.335-0.086,0.429-0.243L12.283,24H15.5v4.5c0,0.276,0.224,0.5,0.5,0.5s0.5-0.224,0.5-0.5V24h3.217l2.854,4.757
                    C22.665,28.914,22.831,29,23,29c0.088,0,0.177-0.023,0.257-0.071c0.237-0.142,0.314-0.449,0.172-0.686L20.883,24H27
                    c1.657,0,3-1.343,3-3V8C30,6.343,28.657,5,27,5z M13,5c0-1.103,0.897-2,2-2h2c1.103,0,2,0.897,2,2v1h-6V5z M29,21
                    c0,1.103-0.897,2-2,2H5c-1.103,0-2-0.897-2-2V8c0-1.103,0.897-2,2-2h7c0,0.552,0.448,1,1,1h6c0.552,0,1-0.448,1-1h7
                    c1.103,0,2,0.897,2,2V21z"/>
                  </svg>
                </div>
                <strong className="text-lg">Apresentações</strong>
                <p className="text-sm text-slate-600">Criação de identidades visuais para apresentações para empresas. Apresentações simples de entender, objetivas, visualmente impactantes e que prendem a atenção da audiência.</p>
              </div>
            </div>
            <div className="md:w-1/2 w-full md:px-8">
              <div className="flex flex-col items-center justify-center text-center gap-4">
                <div>
                  <svg version="1.1" id="Uploaded to svgrepo.com" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="52" height="52" viewBox="0 0 32 32" xmlSpace="preserve">
                    <path d="M16,1C9.373,1,5,6.373,5,13c0,5.773,4.761,10.185,6.43,11.555c0.213,0.175,0.461,0.294,0.723,0.366
                      l0.568,3.408C12.882,29.293,13.717,30,14.694,30L15,30c0,0.552,0.448,1,1,1h0c0.552,0,1-0.448,1-1l0.306,0
                      c0.978,0,1.812-0.707,1.973-1.671l0.568-3.408c0.262-0.072,0.51-0.191,0.723-0.366C22.239,23.185,27,18.773,27,13
                      C27,6.373,22.627,1,16,1z M17.306,29h-2.612c-0.489,0-0.906-0.353-0.986-0.836L13.18,25h5.639l-0.527,3.164
                      C18.212,28.646,17.795,29,17.306,29z M19.936,23.782C19.764,23.923,19.543,24,19.312,24h-6.624c-0.231,0-0.452-0.077-0.623-0.218
                      C10.642,22.615,6,18.387,6,13C6,6.626,10.206,2,16,2s10,4.626,10,11C26,18.387,21.358,22.615,19.936,23.782z M19,17
                      c-0.415,0-0.8,0.126-1.12,0.343C17.608,16.563,16.873,16,16,16s-1.608,0.563-1.88,1.343C13.8,17.126,13.415,17,13,17
                      c-1.105,0-2,0.895-2,2c0,1.105,0.895,2,2,2c0.366,0,0.705-0.106,1-0.277V24h1v-4.278C15.295,19.894,15.634,20,16,20
                      s0.705-0.106,1-0.277V24h1v-3.277C18.295,20.894,18.634,21,19,21c1.105,0,2-0.895,2-2C21,17.895,20.105,17,19,17z M13,20
                      c-0.551,0-1-0.449-1-1s0.449-1,1-1s1,0.449,1,1S13.551,20,13,20z M16,19c-0.551,0-1-0.449-1-1s0.449-1,1-1s1,0.449,1,1
                      S16.552,19,16,19z M19,20c-0.551,0-1-0.449-1-1s0.449-1,1-1c0.551,0,1,0.449,1,1S19.552,20,19,20z"/>
                  </svg>
                </div>
                <strong className="text-lg">Design Gráfico</strong>
                <p className="text-sm text-slate-600">Criação de projetos gráficos, trabalhos exclusivos para o público determinado. Folders, cartão de visita, pastas, folhetos, flyers, catálogos, informativos, anúncios para jornal entre outros tipos de materiais gráficos.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full h-auto flex items-center justify-center py-24" id="projects">
        <div className="w-full h-auto px-4 mx-auto max-w-5xl flex flex-col items-center justify-center gap-8">
          <h2 className="text-5xl">Projetos</h2>
          <div className="w-full h-auto flex flex-col items-start justify-start gap-8 divide-y divide-slate-200 mt-5">
            <div className="w-full h-auto flex flex-col items-start justify-start gap-4 pb-8">
              <figure>
                <img src="/projects/penina.png" alt="" />
              </figure>
              <div className="flex flex-col items-start justify-start gap-2 text-slate-700 leading-relaxed">
                <p>Desenvolvimento visual e estratégico do feed para a Penina, criando uma identidade moderna, consistente e alinhada ao posicionamento da marca. O projeto foi pensado para fortalecer a presença digital da empresa através de peças criativas, comunicação visual atrativa e conteúdos voltados para engajamento e reconhecimento da marca nas redes sociais.&nbsp;<a href="https://www.instagram.com/peninabrasil/" target="_blank" rel="noreferrer noopener" className="text-indigo-700 hover:underline font-medium transition">Confira aqui</a>.</p>
              </div>
            </div>
            <div className="w-full h-auto flex flex-col items-start justify-start gap-4 pb-8">
              <figure>
                <img src="/projects/dm-vet.png" alt="" />
              </figure>
              <div className="flex flex-col items-start justify-start gap-2 text-slate-700 leading-relaxed">
                <p>Projeto desenvolvido para a clínica veterinária DMVet, envolvendo todo o processo criativo e técnico — desde a criação do layout até o desenvolvimento completo do site. O objetivo foi construir uma presença digital moderna, profissional e acolhedora, transmitindo confiança e credibilidade para os clientes da clínica.</p>
                <p>O site foi planejado com foco em experiência do usuário, responsividade e fácil navegação, valorizando os serviços, a identidade visual da marca e facilitando o contato com a clínica em diferentes dispositivos.&nbsp;<a href="https://www.dmvet.com.br/" target="_blank" rel="noreferrer noopener" className="text-indigo-700 hover:underline font-medium transition">Confira aqui</a>.</p>
              </div>
            </div>
            <div className="w-full h-auto flex flex-col items-start justify-start gap-4 pb-8">
              <figure>
                <img src="/projects/dubai-cafe.png" alt="" />
              </figure>
              <div className="flex flex-col items-start justify-start gap-2 text-slate-700">
                <p>Projeto de rebranding desenvolvido para a Dubai Café & Bistrô, com foco na modernização da identidade visual da marca e no fortalecimento da sua presença digital. O trabalho buscou transmitir uma estética mais sofisticada, aconchegante e alinhada à proposta da cafeteria, valorizando sua personalidade e experiência oferecida aos clientes.</p>
                <p>O processo envolveu a reconstrução visual da marca, definição de elementos gráficos, tipografia, paleta de cores e aplicações visuais, criando uma identidade mais consistente, memorável e preparada para diferentes pontos de contato, tanto no ambiente físico quanto no digital.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="w-full h-auto flex items-center justify-center pt-12 pb-8 bg-white" id="contact">
        <div className="w-full h-auto px-4 mx-auto max-w-5xl flex flex-col items-center justify-center gap-8">
          <img src="/illustration.gif" className="max-w-full h-auto w-40" alt="" />
          <h3 className="text-3xl font-light text-center">Vamos trabalhar juntos?</h3>
          <div className="w-full h-auto flex sm:flex-row flex-col items-center justify-center gap-4">
              <a href="mailto:jneris.wd@gmail.com" className="text-slate-600 hover:text-indigo-500 hover:underline underline-offset-2 flex items-center justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="fill-indigo-500"><path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/></svg>
                jneris.wd@gmail.com
              </a>
              <a href="https://wa.me/5511981542925?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento" className="text-slate-600 hover:text-indigo-500 hover:underline underline-offset-2 flex items-center justify-center gap-2" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="fill-indigo-500"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                +55 (11) 98154-2925
              </a>
          </div>
          <hr className="w-full border-slate-200 my-0" />
          <p className="text-sm text-slate-600 text-center">&copy; 2026 <b className="text-indigo-500">Pedro Design</b>. Todos os direitos reservados.</p>
        </div>
      </footer>
    </main>
  )
}

export default App

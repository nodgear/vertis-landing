export default function AboutUs() {
  return (
    <section className="bg-[url(/about_bg.png)] bg-cover bg-center py-24">
      <div className="mx-auto px-6 lg:px-25 max-w-480">
        <div className="flex md:flex-row flex-col items-stretch gap-12 md:gap-20">
          {/*  Content  */}
          <div className="flex flex-col justify-center items-start w-full md:w-1/3">
            <p className="mb-8 text-white/70 text-sm uppercase tracking-widest">
              VERTIS INCORPORADORA
            </p>

            <h2 className="mb-8 font-display font-bold text-white text-3xl md:text-4xl lg:text-5xl leading-tight">
              CUIDADO DE PERTO.
            </h2>

            <p className="mb-8 text-white text-xl md:text-2xl">
              CONTROLE DE <span className="font-semibold">PONTA A PONTA.</span>
            </p>

            <p className="mb-8 text-white/90 text-base leading-6.5">
              Cada projeto segue um processo firme:{" "}
              <span className="font-semibold text-[#B3D335]">
                leitura do entorno, concepção bem resolvida e execução com
                controle técnico.
              </span>
              <br />A Vertis reúne profissionais com mais de duas décadas em
              projetos de grande porte e atua ao lado de parceiros altamente
              exigentes, de arquitetos e engenheiros a consultores e
              fornecedores. Resultado: qualidade indiscutível e confiança na
              entrega.
            </p>

            <a
              href="#sobre"
              className="inline-block bg-[#4a4a4a] bg-button-gradient hover:bg-[#333] px-9 py-4 rounded-lg text-white tracking-wider transition-colors"
            >
              CONHECER A VERTIS
            </a>
          </div>

          {/*  Image  Placeholder  */}
          <div className="lg:ml-auto w-full md:w-1/2">
            <div className="bg-[url(/about_us_display.png)] bg-cover bg-no-repeat bg-center rounded-4xl w-full aspect-[612/590]"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

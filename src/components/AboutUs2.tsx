export default function AboutUs2() {
  return (
    <section id="sobre" className="py-20 md:py-28">
      <div className="mx-auto px-6 lg:px-25 max-w-480">
        <div className="flex md:flex-row flex-col items-center gap-12 md:gap-20">
          {/*  Image  Placeholder  */}
          <div className="w-full md:w-1/2">
            <div className="bg-[url(/aboutus_2_display.png)] bg-contain bg-no-repeat bg-center rounded-3xl w-full aspect-4/3"></div>
          </div>

          {/*  Content  */}
          <div className="w-full md:w-1/2">
            <div className="mb-14">
              <p className="mb-4 text-white/70 text-sm uppercase tracking-widest">
                VERTIS INCORPORADORA
              </p>
              <div className="bg-card-gradient w-1/4 h-0.5"></div>
            </div>

            <h2 className="mb-14 font-display font-medium text-brown text-3xl md:text-4xl lg:text-5xl">
              O QUE NÓS
              <br />
              <span className="inline-block text-gradient">CONSTRUÍMOS</span>
              <br />
              VAI ALÉM.
            </h2>

            <p className="text-black text-base md:text-lg leading-relaxed">
              <span className="font-semibold">Um bom empreendimento</span> não
              nasce por acaso.
              <br />
              Ele nasce quando existe{" "}
              <span className="font-semibold">intenção, critério e uma</span>
              <br />
              <span className="font-semibold">
                equipe que trata o detalhe como responsabilidade.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

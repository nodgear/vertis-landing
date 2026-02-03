import Navbar from "./Navbar";

export default function Hero() {
  return (
    <section
      className="relative flex flex-col bg-cover bg-no-repeat bg-top-left min-h-screen"
      style={{
        backgroundImage: "url('/hero_bg.png')",
      }}
    >
      <Navbar />

      <div className="flex flex-1 items-center">
        <div className="mx-auto px-6 lg:px-25 pt-20 w-full max-w-480">
          <div className="w-full lg:max-w-1/2">
            <h1 className="mb-8 text-white text-4xl md:text-5xl leading-tight">
              INCORPORADORA
              <br />
              COM <span className="font-bold">GOVERNANÇA,</span>
              <br />
              <span className="font-bold">DISCIPLINA FINANCEIRA</span>
              <br />
              <span className="font-bold">E EXECUÇÃO COMPROVADA.</span>
            </h1>

            <p className="text-white/90 text-base md:text-lg leading-relaxed">
              Planejamos cada etapa com rigor, estrutura jurídica sólida
              <br className="hidden md:block" />
              e controle preciso dos custos, para criar empreendimentos
              <br className="hidden md:block" />
              que inspiram, conectam e preservam valor no longo prazo.
            </p>

            <p className="mb-10 font-semibold text-white text-base md:text-lg leading-relaxed">
              <span className="text-white/80">
                Uma marca nova, sustentada por uma equipe experiente
              </span>
              <br className="hidden md:block" />
              <span className="text-white/80">
                e projetos com VGV estimado superior a R$ 1 bilhão.
              </span>
            </p>

            <div className="flex sm:flex-row flex-col gap-4">
              {/* <a
                href="#empreendimentos"
                className="bg-button-gradient hover:bg-white/30 backdrop-blur-xs px-8 py-4 rounded-lg font-bold text-white text-sm text-center tracking-wider transition-colors"
              >
                VER EMPREENDIMENTOS
              </a> */}
              <a
                href="#contato"
                className="flex justify-center items-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-xs px-8 py-4 rounded-lg text-white text-sm tracking-wider transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                FALAR COM A VERTIS
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

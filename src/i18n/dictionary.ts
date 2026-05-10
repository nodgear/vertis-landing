export type Locale = "pt-BR" | "en";

export const LOCALES: Locale[] = ["pt-BR", "en"];
export const FALLBACK_LOCALE: Locale = "en";

export const LOCALE_LABELS: Record<Locale, string> = {
  "pt-BR": "PT",
  en: "EN",
};

const ptBR = {
  htmlLang: "pt-BR",
  nav: {
    home: "HOME",
    about: "SOBRE",
    contact: "CONTATO",
    cta: "FALE CONOSCO!",
    languageMenuLabel: "Selecionar idioma",
  },
  hero: {
    title: {
      line1: "INCORPORADORA",
      line2Pre: "COM ",
      line2Bold: "GOVERNANÇA, DISCIPLINA",
      line3: "FINANCEIRA",
      line3Bold1: "E EXECUÇÃO",
      line3Bold2: "COMPROVADA.",
    },
    paragraph1Part1:
      "Planejamos cada etapa com rigor, estrutura jurídica sólida e controle preciso dos custos,",
    paragraph1Part2:
      "para criar empreendimentos que inspiram, conectam e preservam valor no longo prazo.",
    paragraph2Part1: "Uma marca nova, sustentada por uma equipe experiente",
    paragraph2Part2Line1: "e projetos com VGV",
    paragraph2Part2Line2: "estimado superior a R$ 1 bilhão.",
    whatsappCta: "FALAR COM A VERTIS",
  },
  aboutUs2: {
    kicker: "VERTIS INCORPORADORA",
    titleLine1: "O QUE NÓS",
    titleLine2: "CONSTRUÍMOS",
    titleLine3: "VAI ALÉM.",
    bodyBoldStart: "Um bom empreendimento",
    bodyAfterBoldStart: " não nasce por acaso.",
    bodyMiddle: "Ele nasce quando existe ",
    bodyBoldEndMobile:
      "intenção, critério e uma equipe que trata o detalhe como responsabilidade.",
    bodyBoldEndDesktopLine1: "intenção, critério e uma",
    bodyBoldEndDesktopLine2:
      "equipe que trata o detalhe como responsabilidade.",
  },
  facility: {
    cards: [
      {
        title: "Visão de longo prazo",
        description:
          "A Vertis não faz por tendência ou impulso. Construímos pensando no que faz sentido hoje e fará daqui muitos anos.",
      },
      {
        title: "Detalhe com verdade",
        description:
          "O que parece pequeno é o que muda tudo. Trabalhamos para que cada escolha tenha propósito e não só aparência.",
      },
      {
        title: "Confiança na entrega",
        description:
          "Clareza, cuidado e gestão firme em cada etapa. Porque confiança não se promete, se constrói.",
      },
    ],
  },
  itaparica: {
    badge: "Novidade!",
    title: "ITAPARICA",
    subtitlePre: "Um lugar para ",
    subtitleBold1: "contemplar",
    subtitleComma: ",",
    subtitleBold2: "investir",
    subtitleConnector: "e",
    subtitleBold3: "pertencer.",
    cta: "Cadastre-se e descubra sua ilha.",
  },
  aboutUs: {
    kicker: "VERTIS INCORPORADORA",
    title: "CUIDADO DE PERTO.",
    subtitlePre: "CONTROLE DE ",
    subtitleBold: "PONTA A PONTA.",
    bodyPre: "Cada projeto segue um processo firme: ",
    bodyHighlight:
      "leitura do entorno, concepção bem resolvida e execução com controle técnico.",
    bodyAfter:
      "A Vertis reúne profissionais com mais de duas décadas em projetos de grande porte e atua ao lado de parceiros altamente exigentes, de arquitetos e engenheiros a consultores e fornecedores. Resultado: qualidade indiscutível e confiança na entrega.",
    cta: "CONHECER A VERTIS",
  },
  contactUs: {
    titlePre: "VAMOS ",
    titleBold: "CONVERSAR!",
    body:
      "Se você quer entender melhor os empreendimentos, falar sobre oportunidades ou construir uma parceria com a Vertis, a porta está aberta!",
    cta: "ENTRE EM CONTATO",
  },
  footer: {
    legalName: "Vertis Incorporadora e Participações Ltda.",
    quickLinks: "Links rápidos",
    followUs: "Siga-nos",
    followUsBody: "Siga as nossas redes sociais",
    copyright: "TODOS OS DIREITOS RESERVADOS",
  },
  aboutHero: {
    kicker: "NOSSO PROPÓSITO",
    titleBold:
      "CRIAR EMPREENDIMENTOS QUE INSPIRAM, CONECTAM E ATRAEM AS PESSOAS.",
    titleAfter:
      "CADA PROJETO NASCE A PARTIR DE UM OLHAR ARTESANAL E ATENÇÃO A CADA DETALHE.",
    body:
      "Somos uma incorporadora especializada em empreendimentos de médio e alto padrão. Transformamos endereços em histórias marcantes, com projetos bem pensados e construídos com paixão, comprometimento e energia, pensados nos detalhes e executados com precisão para entregar valor perene.",
  },
  vision: {
    kicker: "NOSSA VISÃO",
    heading:
      "RESSIGNIFICAMOS OPORTUNIDADES PROMISSORAS, ELEVANDO-AS A UM NOVO PATAMAR DE QUALIDADE, SOFISTICAÇÃO E FUNCIONALIDADE.",
    body:
      "Nosso foco é entregar produtos cuidadosamente trabalhados, com compromisso de criar empreendimentos que inspiram e valorizam o entorno e geram resultados consistentes para clientes e investidores.",
  },
  values: {
    title: "NOSSOS VALORES",
    items: [
      {
        title: "Transparência",
        description: "Relações claras e próximas em todas as etapas.",
      },
      {
        title: "Solidez",
        description:
          "Decisões responsáveis, visão de longo prazo e gestão rigorosa.",
      },
      {
        title: "Inovação",
        description:
          "Soluções inteligentes, design autoral e tecnologia a serviço do conforto.",
      },
      {
        title: "Confiança",
        description:
          "Compromisso com prazos, qualidade e respeito ao investidor, ao cliente e à vizinhança.",
      },
    ],
  },
  team: {
    firstName: "TALES",
    lastName: "PENS",
    role: "Diretor",
    bio:
      "Engenheiro civil formado pela Ulbra e pós-graduado pela Fundação Getúlio Vargas, é especialista em obras de grande porte, incluindo shoppings, indústrias, prédios corporativos e empreendimentos residenciais.",
    bioHighlight:
      "Nos últimos 10 anos, foi engenheiro-líder de mais de 20, e em toda sua carreira já entregou mais de 5.340 unidades, totalizando 580.150 m² de obras.",
  },
  process: {
    title: "COMO FAZEMOS",
    steps: [
      {
        label: "PESQUISA\n& VISÃO",
        description: "Entendemos vocações do entorno e tendências urbanas.",
      },
      {
        label: "CONCEPÇÃO",
        description:
          "Projetos que aliam estética, funcionalidade e valor perene.",
      },
      {
        label: "ENGENHARIA\n& QUALIDADE",
        description:
          "Métodos rigorosos, fornecedores homologados e controle de desempenho.",
      },
      {
        label: "SUSTENTABILIDADE\n& EFICIÊNCIA",
        description:
          "Materiais responsáveis, tecnologia construtiva e gestão de recursos.",
      },
      {
        label: "ENTREGA\n& PÓS OBRA",
        description:
          "Projetos que aliam estética, funcionalidade e valor perene.",
      },
    ],
  },
  contact: {
    title: "VAMOS CONVERSAR!",
    placeholders: {
      name: "NOME COMPLETO",
      email: "E-MAIL",
      phone: "TELEFONE / WHATSAPP",
      subject: "ASSUNTO:",
      message: "MENSAGEM",
    },
    submit: {
      loading: "ENVIANDO...",
      idleBold1: "QUERO FALAR",
      idleMiddle: " COM A ",
      idleBold2: "VERTIS",
    },
    feedback: {
      success: "Mensagem enviada com sucesso! Entraremos em contato em breve.",
      error: "Algo deu errado. Por favor, tente novamente.",
    },
    emailSubject: "Nova mensagem - Site Vertis",
    bodyLabels: {
      name: "Nome",
      email: "E-mail",
      phone: "Telefone / WhatsApp",
      subject: "Assunto",
      message: "Mensagem",
    },
  },
};

const en: typeof ptBR = {
  htmlLang: "en",
  nav: {
    home: "HOME",
    about: "ABOUT",
    contact: "CONTACT",
    cta: "GET IN TOUCH!",
    languageMenuLabel: "Select language",
  },
  hero: {
    title: {
      line1: "A DEVELOPER",
      line2Pre: "WITH ",
      line2Bold: "GOVERNANCE, DISCIPLINE",
      line3: "FINANCIAL",
      line3Bold1: "AND PROVEN",
      line3Bold2: "EXECUTION.",
    },
    paragraph1Part1:
      "We plan every step with rigor, a solid legal structure and precise cost control,",
    paragraph1Part2:
      "to create developments that inspire, connect and preserve value over the long term.",
    paragraph2Part1: "A new brand, backed by an experienced team",
    paragraph2Part2Line1: "and projects with estimated GSV",
    paragraph2Part2Line2: "exceeding R$ 1 billion.",
    whatsappCta: "TALK TO VERTIS",
  },
  aboutUs2: {
    kicker: "VERTIS INCORPORADORA",
    titleLine1: "WHAT WE",
    titleLine2: "BUILD",
    titleLine3: "GOES FURTHER.",
    bodyBoldStart: "A great development",
    bodyAfterBoldStart: " doesn't happen by chance.",
    bodyMiddle: "It's born when there's ",
    bodyBoldEndMobile:
      "intent, judgment and a team that treats every detail as a responsibility.",
    bodyBoldEndDesktopLine1: "intent, judgment and a team",
    bodyBoldEndDesktopLine2: "that treats every detail as a responsibility.",
  },
  facility: {
    cards: [
      {
        title: "Long-term vision",
        description:
          "Vertis doesn't act on trend or impulse. We build with what makes sense today — and will still make sense many years from now.",
      },
      {
        title: "Detail with intent",
        description:
          "What looks small is what changes everything. We make sure every choice has purpose, not just appearance.",
      },
      {
        title: "Confidence on delivery",
        description:
          "Clarity, care and firm management at every stage. Because trust isn't promised — it's built.",
      },
    ],
  },
  itaparica: {
    badge: "New!",
    title: "ITAPARICA",
    subtitlePre: "A place to ",
    subtitleBold1: "contemplate",
    subtitleComma: ",",
    subtitleBold2: "invest",
    subtitleConnector: "and",
    subtitleBold3: "belong.",
    cta: "Sign up and discover your island.",
  },
  aboutUs: {
    kicker: "VERTIS INCORPORADORA",
    title: "CARE UP CLOSE.",
    subtitlePre: "END-TO-END ",
    subtitleBold: "CONTROL.",
    bodyPre: "Every project follows a firm process: ",
    bodyHighlight:
      "reading the surroundings, well-resolved design and execution with technical control.",
    bodyAfter:
      "Vertis brings together professionals with more than two decades in large-scale projects and works alongside highly demanding partners — from architects and engineers to consultants and suppliers. The result: undeniable quality and confidence on delivery.",
    cta: "DISCOVER VERTIS",
  },
  contactUs: {
    titlePre: "LET'S ",
    titleBold: "TALK!",
    body:
      "If you want to understand our developments better, talk about opportunities or build a partnership with Vertis, the door is open!",
    cta: "GET IN TOUCH",
  },
  footer: {
    legalName: "Vertis Incorporadora e Participações Ltda.",
    quickLinks: "Quick links",
    followUs: "Follow us",
    followUsBody: "Follow our social networks",
    copyright: "ALL RIGHTS RESERVED",
  },
  aboutHero: {
    kicker: "OUR PURPOSE",
    titleBold:
      "TO CREATE DEVELOPMENTS THAT INSPIRE, CONNECT AND DRAW PEOPLE IN.",
    titleAfter:
      "EVERY PROJECT IS BORN FROM AN ARTISANAL EYE AND ATTENTION TO EVERY DETAIL.",
    body:
      "We are a developer specialized in mid- and high-end projects. We turn addresses into memorable stories, with carefully designed projects built with passion, commitment and energy — thought through in the details and executed with precision to deliver lasting value.",
  },
  vision: {
    kicker: "OUR VISION",
    heading:
      "WE REIMAGINE PROMISING OPPORTUNITIES, RAISING THEM TO A NEW LEVEL OF QUALITY, SOPHISTICATION AND FUNCTIONALITY.",
    body:
      "Our focus is on delivering carefully crafted products, with a commitment to creating developments that inspire, enhance their surroundings and generate consistent results for clients and investors.",
  },
  values: {
    title: "OUR VALUES",
    items: [
      {
        title: "Transparency",
        description: "Clear, close relationships at every stage.",
      },
      {
        title: "Solidity",
        description:
          "Responsible decisions, long-term vision and rigorous management.",
      },
      {
        title: "Innovation",
        description:
          "Smart solutions, signature design and technology in service of comfort.",
      },
      {
        title: "Trust",
        description:
          "Commitment to deadlines, quality and respect for the investor, the client and the neighborhood.",
      },
    ],
  },
  team: {
    firstName: "TALES",
    lastName: "PENS",
    role: "Director",
    bio:
      "A civil engineer trained at Ulbra and post-graduated at Fundação Getúlio Vargas, he specializes in large-scale works including malls, industrial facilities, corporate buildings and residential developments.",
    bioHighlight:
      "Over the past 10 years, he has been lead engineer on more than 20 projects, and across his career has delivered over 5,340 units totaling 580,150 m² of construction.",
  },
  process: {
    title: "HOW WE DO IT",
    steps: [
      {
        label: "RESEARCH\n& VISION",
        description: "We read local potential and urban trends.",
      },
      {
        label: "DESIGN",
        description:
          "Projects that combine aesthetics, function and lasting value.",
      },
      {
        label: "ENGINEERING\n& QUALITY",
        description:
          "Rigorous methods, vetted suppliers and performance control.",
      },
      {
        label: "SUSTAINABILITY\n& EFFICIENCY",
        description:
          "Responsible materials, construction technology and resource management.",
      },
      {
        label: "DELIVERY\n& AFTER-CARE",
        description:
          "Projects that combine aesthetics, function and lasting value.",
      },
    ],
  },
  contact: {
    title: "LET'S TALK!",
    placeholders: {
      name: "FULL NAME",
      email: "EMAIL",
      phone: "PHONE / WHATSAPP",
      subject: "SUBJECT:",
      message: "MESSAGE",
    },
    submit: {
      loading: "SENDING...",
      idleBold1: "I WANT TO TALK",
      idleMiddle: " WITH ",
      idleBold2: "VERTIS",
    },
    feedback: {
      success: "Message sent successfully! We'll get back to you soon.",
      error: "Something went wrong. Please try again.",
    },
    emailSubject: "New message - Vertis Site",
    bodyLabels: {
      name: "Name",
      email: "Email",
      phone: "Phone / WhatsApp",
      subject: "Subject",
      message: "Message",
    },
  },
};

export type Dictionary = typeof ptBR;

export const dictionaries: Record<Locale, Dictionary> = {
  "pt-BR": ptBR,
  en,
};

export function resolveLocale(candidate: string | null | undefined): Locale {
  if (!candidate) return FALLBACK_LOCALE;
  const lower = candidate.toLowerCase();
  if (lower === "pt-br" || lower.startsWith("pt")) return "pt-BR";
  if (lower.startsWith("en")) return "en";
  return FALLBACK_LOCALE;
}

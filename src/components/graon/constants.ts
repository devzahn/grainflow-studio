import { ClipboardCheck, Gauge, GraduationCap, Ruler, Warehouse } from "lucide-react";

export const CONTACT = {
  address: "Rua Silveira Martins, 334 — CEP 99700-092 — Erechim/RS",
  phones: ["(54) 99106-4230", "(54) 99645-3977"],
  whatsapp: "5554991064230",
  email: "graonpc@gmail.com",
  instagram: "@graonposcolheita",
  facebook: "GRÃON Pós-Colheita",
};

export const NAV_ITEMS = [
  ["Início", "inicio"], ["Serviços", "servicos"], ["Processo", "processo"],
  ["Sobre", "sobre"], ["Contato", "contato"],
] as const;

export const STATS = [
  { value: 9, prefix: "+", suffix: " anos", label: "de experiência no setor" },
  { value: null, prefix: "", suffix: "", label: "unidades atendidas" },
  { value: null, prefix: "", suffix: "", label: "mil toneladas sob consultoria" },
  { value: null, display: "RS, SC e PR", label: "área de atuação" },
] as const;

export const JOURNEY = [
  { title: "Recebimento", detail: "amostragem, classificação e fluxo de descarga" },
  { title: "Secagem", detail: "temperatura de massa e taxa de remoção de umidade" },
  { title: "Aeração", detail: "frentes de resfriamento e horas de ventilador" },
  { title: "Armazenagem", detail: "termometria, praga e quebra técnica" },
  { title: "Expedição", detail: "padrão comercial, peso e rastreabilidade" },
] as const;

export const SERVICES = [
  { title: "Consultoria", Icon: Gauge, description: "Diagnóstico e melhoria de cada etapa do processo pós-colheita, do recebimento à expedição, com orientação técnica aplicada à realidade da sua unidade." },
  { title: "Gestão da Qualidade", Icon: ClipboardCheck, description: "Práticas e rotinas para manter o grão dentro do padrão comercial, do controle de umidade ao monitoramento de massa armazenada." },
  { title: "Serviço de Cubagem", Icon: Ruler, description: "Levantamento volumétrico do estoque com medição in loco e desenho posterior em software, para manter o estoque físico atualizado." },
  { title: "Capacitações", Icon: GraduationCap, description: "Treinamento de equipe operacional focado em reduzir perda, padronizar rotina e elevar a qualidade do produto armazenado." },
  { title: "Suporte a Projetos", Icon: Warehouse, description: "Acompanhamento técnico em projetos de ampliação, adequação e implantação de unidades armazenadoras." },
] as const;

export const DIFFERENTIALS = [
  { number: "01", title: "Excelência", description: "Atendimento técnico com solução dimensionada para a necessidade real da unidade, não para um pacote padrão." },
  { number: "02", title: "Profissionalismo", description: "Serviço executado com método, prazo e entrega documentada." },
  { number: "03", title: "Conhecimento Específico", description: "Mais de 9 anos dedicados a pós-colheita de grãos, com vivência de operação, não só de teoria." },
] as const;

export const FAQ = [
  ["A consultoria atende unidades de qual porte?", "O escopo é dimensionado conforme capacidade, fluxo e complexidade operacional. Atendemos produtores estruturados, cerealistas, cooperativas, indústrias e tradings."],
  ["Como funciona o serviço de cubagem?", "A equipe realiza a medição in loco, registra a geometria e processa o desenho em software. O resultado apoia a atualização do estoque físico na data do levantamento."],
  ["Vocês atendem em todo o Brasil?", "Sim. Atendemos produtores, cooperativas e unidades armazenadoras em todo o território nacional, com diagnósticos técnicos presenciais in loco e acompanhamento remoto contínuo."],
  ["As capacitações são presenciais ou online?", "Podem ser presenciais ou online, conforme o conteúdo e a necessidade da equipe. Treinamentos operacionais que dependem da instalação são priorizados no local."],
  ["Como é feito o primeiro diagnóstico?", "Começamos pelo contexto da unidade, dados disponíveis e principais desvios percebidos. A visita técnica e o plano de trabalho são definidos após esse levantamento inicial."],
] as const;

export const WHATSAPP_URL = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent("Olá, gostaria de solicitar um diagnóstico pós-colheita.")}`;

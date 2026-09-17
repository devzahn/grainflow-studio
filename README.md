# GrainFlow Studio

Crie um site institucional one-page (navegação por âncoras) para a GRÃON PÓS-COLHEITA, uma consultoria especializada em pós-colheita de grãos sediada em Erechim/RS, Brasil.

Referência do que NÃO quero: o site atual é um Google Sites genérico, estático e sem identidade. Quero o oposto — um site com cara de engenharia, com movimento contínuo e autoridade técnica, que pareça feito por quem entende de armazenagem de grãos.

Público-alvo: gerentes de unidades armazenadoras, cooperativas, cerealistas, produtores de médio e grande porte, indústrias de esmagamento e tradings. Tom: técnico, direto, confiante. Nada de "soluções inovadoras que transformam desafios em oportunidades".

=== 1. STACK E REGRAS GERAIS ===
- React + TypeScript + Tailwind CSS + Framer Motion + lucide-react.
- Todo o conteúdo em português do Brasil.
- Mobile-first, 100 por cento responsivo. Validar em 375px, 768px, 1280px e 1920px.
- Respeitar prefers-reduced-motion: desligar parallax e animações contínuas, manter apenas fades curtos.
- Zero lorem ipsum: usar exatamente os textos da seção 6.
- Evitar fotos de banco de imagem genéricas de "agro sorridente". Priorizar gráficos SVG autorais, gradientes e texturas. Se usar foto, que seja silo, armazém, termometria ou grão em macro, sempre com overlay azul petróleo e alto contraste.

=== 2. IDENTIDADE VISUAL (usar exatamente) ===
Cores:
- Azul petróleo (base escura): #123C4A
- Azul profundo (fundo alternativo): #0B2833
- Laranja GRÃON (acento e CTA): #FF9025
- Off-white (fundo claro e texto sobre escuro): #FCFBF9
- Teal técnico (linhas, bordas, detalhes): #1E5A6E
- Cinza texto secundário: #8FA3AB

Regras de cor: laranja é acento, nunca fundo de seção inteira; no máximo 10 por cento da tela. As seções alternam entre blocos escuros (#123C4A e #0B2833) e blocos claros (#FCFBF9). Muito respiro entre blocos (padding vertical de 96px no desktop, 64px no mobile).

Tipografia:
- Títulos: fonte Sora, peso 600/700, letter-spacing -0.02em nos tamanhos grandes.
- Corpo: fonte Inter, peso 400/500, 16px a 17px, cor #C7D4D9 sobre escuro e #123C4A sobre claro.
- Labels e legendas: Inter, 11px, UPPERCASE, letter-spacing 0.18em, cor laranja ou teal. Esse detalhe replica o "PÓS — COLHEITA" do logo e deve aparecer acima de cada título de seção.

Linguagem gráfica (importante para o site ter cara de marca, não de template):
- O ícone do logo é um telhado hexagonal de silo com um símbolo de "power" dentro. Use o hexágono como motivo recorrente: marca d'água hexagonal gigante no fundo das seções escuras com 3 por cento de opacidade, bullets em forma de hexágono, numeradores de etapa dentro de hexágonos.
- Cards com canto superior direito chanfrado (clip-path), borda de 1px em #1E5A6E a 40 por cento, fundo levemente translúcido. Sem sombras difusas estilo bootstrap; usar borda + glow laranja discreto no hover.
- Textura de chapa corrugada nos blocos escuros: listras verticais de 1px com 3 por cento de opacidade, referência à parede do silo.
- Linhas de "desenho técnico": réguas finas, marcações de medida e coordenadas discretas nas bordas das seções.

Logo: vou subir os arquivos. Use a versão horizontal laranja+petróleo sobre fundo claro e a versão off-white+laranja sobre fundo escuro. O ícone isolado vira favicon e aparece no preloader. Nunca distorcer nem recolorir.

=== 3. ESTRUTURA DE SEÇÕES ===

0) PRELOADER (2 segundos no máximo)
Ícone do logo centralizado; o anel do símbolo de power se desenha em 360 graus como um stroke laranja; ao completar, a tela se divide horizontalmente e revela o hero.

1) HEADER fixo, transparente sobre o hero, que ganha fundo #0B2833 com blur e borda inferior teal ao rolar 80px. Logo à esquerda; menu: Início, Serviços, Processo, Sobre, Contato; botão laranja "Falar no WhatsApp". No mobile, menu fullscreen com itens entrando em stagger.

2) HERO (tela cheia, fundo #123C4A)
Título: "Cada ponto de umidade tem um preço." Subtítulo com o texto da seção 6. Dois botões: "Solicitar diagnóstico" (laranja) e "Ver serviços" (contorno).
INTERATIVO: fundo com um campo de partículas em canvas representando grãos em suspensão — pontos pequenos em tons de off-white e laranja com movimento lento de queda; o cursor cria um campo de repulsão suave num raio de 120px, empurrando os grãos como se a mão passasse pelo grão. No mobile, o movimento é autônomo e mais lento. À direita, silhueta SVG de um silo em linha fina que enche gradualmente de grão enquanto a página carrega.

3) BARRA DE NÚMEROS (fundo #0B2833, faixa estreita)
Quatro contadores que animam de 0 até o valor quando entram na viewport: "+9 anos de experiência no setor", "[CONFIRMAR] unidades atendidas", "[CONFIRMAR] mil toneladas sob consultoria", "RS, SC e PR" como área de atuação. Separadores verticais em teal. Deixe os valores em constantes fáceis de editar no topo do arquivo.

4) A JORNADA DO GRÃO — seção assinatura, precisa ser o destaque do site (fundo #FCFBF9)
Linha do tempo horizontal com 5 etapas: Recebimento, Secagem, Aeração, Armazenagem, Expedição.
INTERATIVO: conforme o usuário rola a página, um grão estilizado (SVG) percorre a linha da esquerda para a direita; cada etapa que ele alcança acende — o ícone ganha cor laranja, o hexágono se preenche e o texto daquela etapa aparece com fade + slide. Uma barra de progresso laranja acompanha o trajeto. No desktop, a seção fica pinada (scroll horizontal controlado pelo scroll vertical, tipo sticky scroll); no mobile vira uma linha do tempo vertical com a mesma lógica de acender por etapa.
Cada etapa mostra um dado técnico curto: por exemplo, em Secagem "temperatura de massa e taxa de remoção de umidade"; em Aeração "frentes de resfriamento e horas de ventilador"; em Armazenagem "termometria, praga e quebra técnica". Mantenha o texto curto, 1 linha por etapa.

5) SERVIÇOS (fundo #123C4A) — grid de 5 cards
Consultoria, Gestão da Qualidade, Serviço de Cubagem, Capacitações, Suporte a Projetos.
Cada card: ícone lucide em contorno fino laranja, título em Sora, descrição curta (textos na seção 6).
INTERATIVO: efeito spotlight — um brilho radial suave segue o cursor por cima do grid, iluminando o card sob o mouse e revelando o padrão hexagonal de fundo dentro dele. Borda do card acende em laranja e o canto chanfrado aumenta levemente. No mobile, o card ativo é o que está centralizado na tela.

6) CALCULADORA DE PERDA (fundo #FCFBF9) — segundo destaque, é o que gera contato
Título: "Quanto sua quebra técnica custa por safra?"
Três controles (sliders com valor numérico editável):
- Volume armazenado por safra, em toneladas (50 a 200.000, padrão 20.000)
- Preço da saca de 60 kg, em reais (padrão R$ 130,00)
- Perda atual estimada, em por cento (0,5 a 5, padrão 2,0)
Saída animada em tempo real, número grande em laranja com contador que transita suavemente: valor perdido por safra em reais. Abaixo, uma linha de impacto: "Reduzir 0,5 ponto percentual devolve R$ X por safra."
Visual: um silo em SVG ao lado, onde a fatia de perda é destacada em laranja proporcionalmente ao slider — quanto maior a perda, maior a faixa laranja no topo da massa de grãos.
Texto legal pequeno embaixo: "Estimativa para fins ilustrativos, baseada em volume, preço e perda informados. Não substitui diagnóstico técnico."
Abaixo, CTA: "Quero reduzir essa perda" levando ao WhatsApp.

7) POR QUE A GRÃON (fundo #0B2833) — 3 colunas
Excelência, Profissionalismo, Conhecimento Específico. Números grandes 01, 02, 03 em outline atrás de cada título. Entrada em stagger ao aparecer na viewport.

8) ÁREA DE ATUAÇÃO (fundo #123C4A)
Mapa SVG simplificado dos três estados do Sul, em linha fina teal. INTERATIVO: pontos pulsantes laranja nas praças principais e um traço luminoso que percorre o contorno dos estados em loop lento. Erechim/RS marcado como sede com um hexágono maior. Sem dados falsos de clientes — apenas cobertura geográfica.

9) SOBRE (fundo #FCFBF9)
Bloco sobre o sócio fundador, 9 anos de setor. Espaço reservado para foto em moldura hexagonal chanfrada com placeholder marcado "[FOTO DO FUNDADOR]". Ao lado, missão e visão em dois cards verticais com barra lateral laranja.

10) FAQ (fundo #0B2833) — accordion de 5 perguntas
"A consultoria atende unidades de qual porte?", "Como funciona o serviço de cubagem?", "Vocês atendem fora do Rio Grande do Sul?", "As capacitações são presenciais ou online?", "Como é feito o primeiro diagnóstico?". Respostas curtas, 2 a 3 linhas, escritas de forma técnica e honesta, sem promessa de resultado.

11) CONTATO (fundo #123C4A)
Formulário: nome, empresa, cidade/UF, telefone, tipo de necessidade (select com os 5 serviços), mensagem. Validação inline, estados de foco com borda laranja, botão com estado de loading e mensagem de sucesso. Ao lado, bloco com endereço, dois WhatsApps, e-mail e um mapa embed discreto em tom escuro.

12) FOOTER (fundo #0B2833)
Logo em off-white, dados de contato, links das seções, Instagram e Facebook, linha de copyright. Marca d'água hexagonal gigante cortada pela borda inferior.

13) BOTÃO FLUTUANTE de WhatsApp no canto inferior direito, com pulso laranja sutil a cada 6 segundos. Aparece após o usuário rolar 40 por cento da página.

=== 4. MICROINTERAÇÕES GLOBAIS ===
- Barra de progresso de leitura laranja de 2px fixa no topo.
- Todas as seções entram com fade + translateY de 24px, em stagger de 80ms, disparado por IntersectionObserver e apenas uma vez.
- Títulos grandes revelam palavra por palavra com clip vertical.
- Botões com efeito magnético leve: deslocam até 6px na direção do cursor quando ele chega perto.
- Links do menu com sublinhado laranja que cresce da esquerda.
- Cursor customizado opcional no desktop: um hexágono pequeno em contorno laranja que aumenta sobre elementos interativos. Se atrapalhar a usabilidade, descarte.
- Scroll suave entre âncoras com offset do header.

=== 5. TÉCNICO ===
- SEO: title "GRÃON Pós-Colheita | Consultoria em armazenagem de grãos em Erechim/RS", meta description, Open Graph com imagem, dados estruturados JSON-LD do tipo LocalBusiness com endereço, telefone e área de atuação.
- Acessibilidade: contraste AA, foco visível, alt em todas as imagens, aria-label nos ícones, navegação por teclado no accordion e nos sliders.
- Performance: lazy load nas imagens, canvas de partículas pausado quando fora da viewport, fontes com display swap, sem bibliotecas pesadas de animação além do Framer Motion.
- Código organizado em componentes separados por seção, com um arquivo de constantes contendo textos, números e dados de contato para edição fácil.

=== 6. TEXTOS DEFINITIVOS ===
Hero
Título: Cada ponto de umidade tem um preço.
Subtítulo: Consultoria especializada em pós-colheita de grãos. Recebimento, secagem, aeração, armazenagem e expedição — com processo medido, padrão definido e perda sob controle.

Serviços
Consultoria — Diagnóstico e melhoria de cada etapa do processo pós-colheita, do recebimento à expedição, com orientação técnica aplicada à realidade da sua unidade.
Gestão da Qualidade — Práticas e rotinas para manter o grão dentro do padrão comercial, do controle de umidade ao monitoramento de massa armazenada.
Serviço de Cubagem — Levantamento volumétrico do estoque com medição in loco e desenho posterior em software, para manter o estoque físico atualizado.
Capacitações — Treinamento de equipe operacional focado em reduzir perda, padronizar rotina e elevar a qualidade do produto armazenado.
Suporte a Projetos — Acompanhamento técnico em projetos de ampliação, adequação e implantação de unidades armazenadoras.

Por que a GRÃON
Excelência — Atendimento técnico com solução dimensionada para a necessidade real da unidade, não para um pacote padrão.
Profissionalismo — Serviço executado com método, prazo e entrega documentada.
Conhecimento Específico — Mais de 9 anos dedicados a pós-colheita de grãos, com vivência de operação, não só de teoria.

Missão: Proporcionar soluções personalizadas para as necessidades específicas de cada cliente na área de pós-colheita de grãos.
Visão: Ser referência em gestão pós-colheita eficiente, impulsionando o resultado de nossos parceiros.

Contato
Rua Silveira Martins, 334 — CEP 99700-092 — Erechim/RS
WhatsApp: (54) 99106-4230 e (54) 99645-3977
E-mail: graonpc@gmail.com
Instagram: @graonposcolheita
Facebook: GRÃON Pós-Colheita

=== 7. PRIORIDADE ===
Se precisar simplificar algo por complexidade, mantenha obrigatoriamente: a Jornada do Grão, a Calculadora de Perda e o campo de partículas do hero. São esses três elementos que diferenciam o site.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/03605e26-7515-448f-8ccb-d1746f37acdb).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

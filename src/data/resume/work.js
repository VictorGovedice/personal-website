/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'RM Farma',
    position: 'Desenvolvedor Front-end',
    url: 'https://rmfarma.com.br/',
    startDate: '09-10-2023 - 01-02-2024',
    summary: `Nos últimos quatro meses, desempenhei um papel crucial na revitalização do site e dos sistemas da empresa. Fui responsável por modernizar o layout, atualizar plugins, desenvolver Landing Pages e implementar novas funcionalidades, incluindo sistemas de login e cadastro para usuários, bem como uma área exclusiva para funcionários. Para isso, empreguei React no desenvolvimento do front-end, Node.js no back-end e MongoDB para gerenciamento de dados, garantindo uma plataforma sólida e eficaz na validação de dados. Além disso, introduzi o Tooljet, uma ferramenta avançada que simplificou o desenvolvimento de aplicações complexas, com destaque para o "Painel de análise de vendas". Essa adoção tecnológica não apenas acelerou o processo de desenvolvimento, mas também ampliou a funcionalidade e a interatividade do site.
    Em resumo, minha contribuição focou na implementação de inovações tecnológicas e na melhoria de processos, culminando em um site renovado, mais funcional e perfeitamente ajustado às demandas da empresa.`,
    highlights: [
      'Implementação do Tooljet para facilitar o desenvolvimento de aplicações complexas, destacando-se o "Painel de análise de vendas".',
      'Contribuição marcada pela inovação tecnológica e otimização de processos.',
      'Resultado: site renovado, mais funcional e alinhado às necessidades da empresa.',
      'Modernização de layout, atualização de plugins, desenvolvimento de Landing Pages.Implementação de novas funcionalidades, incluindo sistemas de login/cadastro para usuários e área exclusiva para funcionários.',
    ],
  },
  {
    name: 'Intercâmbio',
    position: 'Morando no exterior',
    url: 'https://www.gov.uk/',
    startDate: '25/11/2022 - 15/07/2023',
    summary: `Durante minha estadia no exterior, dediquei-me ao estudo intensivo do inglês, além de acumular
    experiência profissional em diversas funções. Trabalhei como garçom em um pub conhecido como 'The Jolly
    Garden', onde pude aprimorar minhas habilidades de comunicação e atendimento ao cliente em um
    ambiente dinâmico. Paralelamente, atuei como motorista e entregador, o que me permitiu explorar a
    região, melhorar minha capacidade de navegação e gestão do tempo, além de interagir com uma ampla
    gama de pessoas. Essas experiências enriqueceram meu intercâmbio cultural e contribuíram
    significativamente para o meu desenvolvimento pessoal e profissional.`,
    highlights: [
      'Aprendendo novas culturas e costumes.',
      'Focando muito no meu aprendizado em Inglês.',
    ],
  },
  {
    name: 'SiplanControl-M',
    position: 'Desenvolvedor Front-end e UX/UI Designer',
    url: 'https://spcm.com.br/',
    startDate: '2021-01-27',
    endDate: '2022-11-18',
    summary: `Durante minha experiência de trabalho, concentrei meus esforços na atuação como desenvolvedor front e
    back end, desempenhando um papel essencial na concepção, prototipagem e desenvolvimento de soluções
    inovadoras para websites de cartórios no Brasil. No contexto do desenvolvimento back end, minha expertise
    se concentrou principalmente na utilização de tecnologias como Node.js para criar APIs REST, empregando
    bancos de dados como MongoDB e implementando autenticação JWT. Além disso, fui responsável pela
    configuração e integração de ferramentas como Express e Axios, contribuindo para a eficácia e robustez das
    aplicações desenvolvidas.
    Destaco minha responsabilidade na definição e implementação de layouts, assumindo o compromisso de
    garantir a otimização da usabilidade dos softwares e sites. No âmbito do front-end, minha atuação abrangeu
    linguagens como JavaScript, c#, linguagem de estilização (css/sass), de marcarção (html, cshtml), visando
    aprimorar a experiência do usuário e seguir os melhores padrões de desenvolvimento. Na implementação do
    front-end, utilizei amplamente as bibliotecas React e Angular, explorando a integração de APIs REST (JSON)
    para proporcionar uma interação dinâmica e eficaz.
    Destaco também minha habilidade na criação de tabelas para usuários, desenvolvimento de painéis de login
    e cadastro, sempre aderindo aos mais elevados critérios de qualidade e eficiência. Meu comprometimento
    centralizou-se na garantia de que cada projeto atendesse aos requisitos funcionais e estéticos
    estabelecidos, assegurando assim a satisfação do cliente e a excelência do produto final.
    `,
    highlights: [
      'Atuação como desenvolvedor front-end e back-end em soluções para websites de cartórios no Brasil.',
      'Especialização em Node.js para criação de APIs REST.',
      "Emprego de JavaScript, C#, CSS/SASS, HTML, CSHTML para otimizar usabilidade.",
      "Integração de APIs REST (JSON) para interação dinâmica.",
      'Uso extensivo de bibliotecas como React e Angular.',
    ],
  },
  {
    name: 'Agência Guver',
    position: 'Web designer e Organizador de Eventos',
    url: 'https://guver.com.br/',
    startDate: '2020-06-01',
    endDate: '2020-10-01',
    summary: `Encarregado da criação de protótipos de websites por meio de ferramentas como Figma, Adobe Photoshope
    Adobe Illustrator, assumo também a responsabilidade pela modernização e inovação de websites já
    existentes, empregando tecnologias como HTML, CSS, JavaScript, WordPress e Elementor. Além disso,
    destaco minha habilidade na elaboração de layouts para feeds e stories no Instagram e Facebook, assim
    como no design e análise de dados para campanhas de e-mail marketing. Minha atuação busca não apenasa
    estética visual, mas também a eficácia e atualização constante das plataformas digitais.
    `,
    highlights: [
      'Responsável pela criação de protótipos de websites usando: Figma, Adobe Photoshop, Adobe Illustrator',
      'Foco na estética visual, eficácia e atualização contínua de plataformas digitais.',
      'Encarregado da modernização e inovação de websites existentes, utilizando: html, css, javascript, wordpress, elementor',
    ],
  },
  {
    name: 'Valcucine',
    position: 'Editor de vídeo, Designer Gráfico',
    url: 'https://habitatnaturale.com.br/',
    startDate: '2019-08-01',
    endDate: '2020-06-01',
    summary: `Experiência consolidada na produção e edição de vídeos, execução de campanhas de e-mail marketing,
    elaboração de materiais publicitários para meios impressos e digitais, gestão eficiente das redes sociais e
    manutenção atualizada do website da empresa através de HTML5 e CSS3. Minha atuação abrange diversas frentes,
    unindo habilidades criativas e técnicas para potencializar a presença digital e a comunicação visual da
    organização.`,
    highlights: [
      'Execução de campanhas de e-mail marketing.',
      'Manutenção atualizada do website da empresa utilizando: Html, css, javascript',
    ],
  },
  {
    name: 'Prefeitura de Osasco',
    position: 'UI/UX Designer',
    url: 'https://osasco.sp.gov.br/',
    startDate: '2018-03-01',
    endDate: '2019-08-01',
    summary: `Exerci a função de UX/UI designer, dedicando-me à prototipagem de novos sites e aplicativos, nos quais
    assumi a responsabilidade de aprimorar a interação do usuário com o sistema, tanto em projetos recémcriados quanto na otimização de sistemas já existentes. Além disso, desempenhei um papel crucial na
    atualização do front-end de diversos sites, aplicando tecnologias avançadas como HTML5, CSS3 e
    JavaScript. Minha abordagem visava não apenas a estética, mas também a eficiência e aprimoramento da
    experiência do usuário em todas as interfaces desenvolvidas.`,
    highlights: [
      'Responsável por aprimorar a interação do usuário com sistemas, prototipagem de novos sites e aplicativos.',
    ],
  },
  {
    name: 'Logos e Artes',
    position: 'Designer Web e Gráfico -',
    url: 'https://logoseartes.com.br/',
    startDate: '2017-01-01',
    endDate: '2017-12-01',
    summary: `Desenvolvimento de layouts inovadores para aplicativos e websites, com especialização na atualização de
    plataformas por meio de tecnologias como HTML, CSS, WordPress e Elementor. Adicionalmente, destaco
    minha habilidade na concepção de layouts para sistemas internos e na criação de identidades visuais
    personalizadas para diversas empresas. Além disso, minha expertise se estende à elaboração de artes para
    materiais impressos, tais como flyers, folders, banners e cartões comerciais, utilizando ferramentas
    avançadas como Adobe Photoshop, Adobe Illustrator, Adobe XD, Figma e Corel Draw. Minha abordagem
    integrada busca não apenas a estética apurada, mas também a funcionalidade e a coesão visual em todas as
    criações.
    `,
    highlights: [
      'Desenvolvimento de layouts inovadores para aplicativos e websites.',
      'Habilidade em conceber layouts para sistemas internos.',
      'Criação de identidades visuais personalizadas para empresas.',
    ],
  },
];

export default work;

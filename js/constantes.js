const APIKey = '0de440ba54e6508dc14e6475784d3c6a';

const token = '91f423c958d2a819f90a871bfb54bcd87a128b7c5612ef2014097947b2f110b9';

const idBoardGestaoDemandasNatura = '5b688404339eca3b994948c1';
const idBoardQuadroTestesDashboardNatura = '5beb929f5c13a07903fd5df0';

const templateURLBoardActions = 'https://api.trello.com/1/boards/[BOARD_ID]/actions/?key=' + APIKey + '&token=' + token;
const templateURLCardActions = 'https://api.trello.com/1/cards/[CARD_ID]/actions?limit=1000&key=' + APIKey + '&token=' + token;
const templateURLBoardCamposPersonalizados = 'https://api.trello.com/1/boards/[BOARD_ID]/customFields?key=' + APIKey + '&token=' + token;
const templateURLCards = 'https://api.trello.com/1/boards/[BOARD_ID]/cards?customFieldItems=true&attachments=true&actions=all&key=' + APIKey + '&token=' + token;
const templateURLListas = 'https://api.trello.com/1/boards/[BOARD_ID]/lists?cards=all&card_fields=all&filter=open&fields=all&key=' + APIKey + '&token=' + token;
const templateURLCamposPersonalizadosCard = 'https://api.trello.com/1/card/[CARD_ID]/?fields=name&customFieldItems=true&key=' + APIKey + '&token=' + token;
const templateURLAnexosCard = 'https://api.trello.com/1/cards/[CARD_ID]/attachments?key=' + APIKey + '&token=' + token;

const tipoReqAjaxGet = 'get';

const tipoDadoAjaxJSON = 'json';

const intervaloTempoEntreRequisicoesAssincronas = 5000;  // Milissegundos;

const nomeLabelCCM = 'CCM';
const nomeLabelDebug = 'Debug';
const nomeLabelFD = 'FD';
const nomeLabelSmallEnhancement = 'Small Enhancement';
const nomeLabelEstimativa = 'Estimativa';
const nomeLabelSIRFM = 'SIR FM';
const nomeLabelFM = 'FM';
const nomeLabelSIRErro = 'SIR ERRO';

const nomeCardTicketExemplo = 'Ticket Exemplo';
const nomeCardSIRExemplo = 'SIR-[NXX] - WPYY';

const inicioNomeAnexoEF = 'EF_';

const nomeListaBacklogDemandas = 'Backlog Demandas';
const nomeListaBacklogSIR = 'Backlog SIR';
const nomeListaEmAtendimento = 'Em Atendimento';
const nomeListaPendenciasReprovados = 'Pendências / Reprovados';
const nomeListaEmRevisao = 'Em Revisão';
const nomeListaEntregue = 'Entregue';

const nomeCampoPersonalizadoFimConstrucao = 'Fim Construção';
const nomeCampoPersonalizadoDataEF = 'Data EF';
const nomeCampoPersonalizadoABAP = 'ABAP';
const nomeCampoPersonalizadoHorasABAP = 'Horas ABAP';
const nomeCampoPersonalizadoProjeto = 'Projeto';

const tipoActionUpdateCard = 'updateCard';

const tipoContext2D = '2d';

const tipoGraficoBar = 'bar';
const tipoGraficoDoughnut = 'doughnut';
const tipoGraficoPie = 'pie';

const tituloGraficoPercentualCartoesPorFase = 'Percentual de Cartões em cada fase';
const tituloGraficoPercentualCartoesPorEtiqueta = 'Percentual de Cartões de cada Etiqueta';

const coresGraficoPercentualCartoesPorFase =
[
	'rgb(255,   0,   0)', // Vermelho
	'rgb(  0, 255,   0)', // Verde
	'rgb(  0,   0, 255)', // Azul
	'rgb(255, 255,   0)', // Amarelo
	'rgb(  0, 255, 255)', // 
	'rgb(255,   0, 255)'  // 
];
const coresGraficoPercentualCartoesPorEtiqueta =
[
	'rgb(97,  189,  79)', // 
	'rgb(242, 214,   0)', // 
	'rgb(255, 159,  26)', // 
	'rgb(235,  90,  70)', // 
	'rgb(195, 119, 224)', // 
	'rgb(  0, 121, 191)', // 
	'rgb(  0, 194, 224)', // 
	'rgb( 53,  82,  99)'  // 
];

const posicaoLegendaGraficoTop = 'top';
const posicaoLegendaGraficoEsquerda = 'left';

const opcaoFiltroProjetoTodos = 'Todos';

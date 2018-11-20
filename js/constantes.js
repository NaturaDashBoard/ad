const APIKey = '0de440ba54e6508dc14e6475784d3c6a';

const token = '91f423c958d2a819f90a871bfb54bcd87a128b7c5612ef2014097947b2f110b9';

const idBoardGestaoDemandasNatura = '5b688404339eca3b994948c1';
const idBoardQuadroTestesDashboardNatura = '5beb929f5c13a07903fd5df0';

//const idCampoPersonalizadoFimConstrucao = '5beb41aa92136c4118d48c74';
//const idCampoPersonalizadoDataEF = '5b9f00fe75a64442fd56b18b';
//const idCampoPersonalizadoABAP = '5bd8babe1b3d55114fda750a';

const templateURLBoardActions = 'https://api.trello.com/1/boards/[BOARD_ID]/actions/?key=' + APIKey + '&token=' + token;
const templateURLCardActions = 'https://api.trello.com/1/cards/[CARD_ID]/actions?limit=1000&key=' + APIKey + '&token=' + token;
const templateURLBoardCamposPersonalizados = 'https://api.trello.com/1/boards/[BOARD_ID]/customFields?key=' + APIKey + '&token=' + token;
const templateURLCards = 'https://api.trello.com/1/boards/[BOARD_ID]/cards/?key=' + APIKey + '&token=' + token;
const templateURLListas = 'https://api.trello.com/1/boards/[BOARD_ID]/lists?cards=all&card_fields=all&filter=open&fields=all&key=' + APIKey + '&token=' + token;
const templateURLCamposPersonalizadosCard = 'https://api.trello.com/1/card/[CARD_ID]/?fields=name&customFieldItems=true&key=' + APIKey + '&token=' + token;
const templateURLAnexosCard = 'https://api.trello.com/1/cards/[CARD_ID]/attachments?key=' + APIKey + '&token=' + token;

const tipoReqAjaxGet = 'get';

const tipoDadoAjaxJSON = 'json';

const nomeLabelFD = 'FD';
const nomeLabelFM = 'FM';
const nomeLabelSIRErro = 'SIR ERRO';
const nomeLabelSIRFM = 'SIR FM';

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

const tipoActionUpdateCard = 'updateCard';

const tipoContext2D = '2d';

const tipoGraficoPie = 'pie';

const tituloGraficoPercentualCartoesPorFase = 'Percentual de Cartões em cada fase'; 

const coresGraficoPercentualCartoesPorFase =
[
	'rgb(255,   0,   0)', // Vermelho
	'rgb(  0, 255,   0)', // Verde
	'rgb(  0,   0, 255)', // Azul
	'rgb(255, 255,   0)', // Amarelo
	'rgb(  0, 255, 255)', // 
	'rgb(255,   0, 255)'  // 
];

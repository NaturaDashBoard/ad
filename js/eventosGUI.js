function atualizarElementosTela()
{
	atualizarFTRABAP();
	atualizarOTDABAP();
	atualizarFTRFUNC();
	atualizarOTDFUNC();
	atualizarQuantidadeSIRs();
	atualizarDisponibilidadeTimeABAP();
	atualizarPercentualCartoesPorFase();
	atualizarTotalHorasABAPEntregue();
	atualizarTotalHorasABAPBacklog();
	atualizarPercentualCartoesPorEtiqueta();
	atualizarFiltroProjeto();
	
	carregarAssincDadosTrello();
}

/*
function inicializarBotoes()
{
	buttonAtualizarDados.click( atualizarElementosTela );
}
*/

/*
function inicializarInputs()
{
	inicializarBotoes();
}
*/

function carregarAssincDadosTrello()
{
	//carregarAssincCamposPersonalizadosGestaoDemandasNatura();
	carregarAssincCamposPersonalizadosQuadroTestesDashboardNatura();
	
	//carregarAssincCardsGestaoDemandasNatura();
	carregarAssincCardsQuadroTestesDashboardNatura();
	
	//carregarAssincListasGestaoDemandasNatura();
	carregarAssincListasQuadroTestesDashboardNatura();
	
	setTimeout( atualizarElementosTela, intervaloTempoEntreRequisicoesAssincronas );
}

function documentReady()
{
	//inicializarInputs();
	
	carregarAssincDadosTrello()
}

$( document ).ready( documentReady );

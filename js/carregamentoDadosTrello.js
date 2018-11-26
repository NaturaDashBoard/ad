/* CARREGAMENTOS DE DADOS DE FORMA SÍNCRONA */

// Gestão Demandas Natura

function carregarSincCardsGestaoDemandasNatura()
{
	$.ajax( configsReqSincGetCardsGestaoDemandasNatura )
		.done( doneGetCardsGestaoDemandasNatura )
		.fail( failGetCardsGestaoDemandasNatura );
}

// Quadro de Testes para Dashboard da Natura

function carregarSincCardActionsQuadroTestesDashboardNatura( idCard )
{
	$.ajax( obterConfigsReqSincGetCardActions( idCard ) )
		.done( doneGetCardActionsQuadroTestesDashboardNatura )
		.fail( failGetCardActionsQuadroTestesDashboardNatura );
}

// Outros

function carregarSincCamposPersonalizadosCard( idCard )
{
	$.ajax( obterConfigsReqSincGetCamposPersonalizadosCard( idCard ) )
		.done( doneGetCamposPersonalizadosCard )
		.fail( failGetCamposPersonalizadosCard );
}

function carregarSincAnexosCard( idCard )
{
	$.ajax( obterConfigsReqSincGetAnexosCard( idCard ) )
		.done( doneGetAnexosCard )
		.fail( failGetAnexosCard );
}

/* CARREGAMENTOS DE DADOS DE FORMA ASSÍNCRONA */

// Gestão Demandas Natura

function carregarAssincBoardActionsGestaoDemandasNatura()
{
	$.ajax( configsReqAssincGetBoardActionsGestaoDemandasNatura )
		.done( doneGetBoardActionsGestaoDemandasNatura )
		.fail( failGetBoardActionsGestaoDemandasNatura );
}

function carregarAssincCamposPersonalizadosGestaoDemandasNatura()
{
	$.ajax( configsReqAssincGetCamposPersonalizadosGestaoDemandasNatura )
		.done( doneGetCamposPersonalizadosGestaoDemandasNatura )
		.fail( failGetCamposPersonalizadosGestaoDemandasNatura );	
}

function carregarAssincCardsGestaoDemandasNatura()
{
	$.ajax( configsReqAssincGetCardsGestaoDemandasNatura )
		.done( doneGetCardsGestaoDemandasNatura )
		.fail( failGetCardsGestaoDemandasNatura );
}

function carregarAssincListasGestaoDemandasNatura()
{
	$.ajax( configsReqAssincGetListasGestaoDemandasNatura )
		.done( doneGetListasGestaoDemandasNatura )
		.fail( failGetListasGestaoDemandasNatura );
}

// Quadro de Testes para Dashboard da Natura

function carregarAssincBoardActionsQuadroTestesDashboardNatura()
{
	$.ajax( configsReqAssincGetBoardActionsQuadroTestesDashboardNatura )
		.done( doneGetBoardActionsQuadroTestesDashboardNatura )
		.fail( failGetBoardActionsQuadroTestesDashboardNatura );
}

function carregarAssincCamposPersonalizadosQuadroTestesDashboardNatura()
{
	$.ajax( configsReqAssincGetCamposPersonalizadosQuadroTestesDashboardNatura )
		.done( doneGetCamposPersonalizadosQuadroTestesDashboardNatura )
		.fail( failGetCamposPersonalizadosQuadroTestesDashboardNatura );	
}

function carregarAssincCardsQuadroTestesDashboardNatura()
{
	$.ajax( configsReqAssincGetCardsQuadroTestesDashboardNatura )
		.done( doneGetCardsQuadroTestesDashboardNatura)
		.fail( failGetCardsQuadroTestesDashboardNatura );
}

function carregarAssincListasQuadroTestesDashboardNatura()
{
	$.ajax( configsReqAssincGetListasQuadroTestesDashboardNatura )
		.done( doneGetListasQuadroTestesDashboardNatura )
		.fail( failGetListasQuadroTestesDashboardNatura );
}

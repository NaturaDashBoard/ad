/* CONFIGURAÇÕES DE REQUISIÇÕES SÍNCRONAS */

var configsReqSincGetCardsGestaoDemandasNatura =
{
	async: false,
	url: obterURLCardsComBoardID( idBoardGestaoDemandasNatura ),
	type: tipoReqAjaxGet,
	dataType: tipoDadoAjaxJSON,
	beforeSend: beforeSendGetCardsGestaoDemandasNatura
};

function obterConfigsReqSincGetCardActions( idCard )
{
	var configsReqGetCardActions =
	{
		async: false,
		url: obterURLCardActions( idCard ),
		type: tipoReqAjaxGet,
		dataType: tipoDadoAjaxJSON,
		beforeSend: beforeSendGetCardActionsQuadroTestesDashboardNatura
	};
	
	return configsReqGetCardActions;
}

function obterConfigsReqSincGetCamposPersonalizadosCard( idCard )
{
	var configsReqGetCamposPersonalizadosCard =
	{
		async: false,
		url: obterURLCamposPersonalizadosCard( idCard ),
		type: tipoReqAjaxGet,
		dataType: tipoDadoAjaxJSON,
		beforeSend: beforeSendGetCamposPersonalizadosCard
	};
	
	return configsReqGetCamposPersonalizadosCard;	
}

function obterConfigsReqSincGetAnexosCard( idCard )
{
	var configsReqGetAnexosCard =
	{
		async: false,
		url: obterURLAnexosCard( idCard ),
		type: tipoReqAjaxGet,
		dataType: tipoDadoAjaxJSON,
		beforeSend: beforeSendGetAnexosCard
	};
	
	return configsReqGetAnexosCard;	
}

/* CONFIGURAÇÕES DE REQUISIÇÕES ASSÍNCRONAS */

// Gestão Demandas Natura

var configsReqAssincGetBoardActionsGestaoDemandasNatura =
{
	url: obterURLBoardActions( idBoardGestaoDemandasNatura ),
	type: tipoReqAjaxGet,
	dataType: tipoDadoAjaxJSON,
	beforeSend: beforeSendGetBoardActionsGestaoDemandasNatura
};

var configsReqAssincGetCamposPersonalizadosGestaoDemandasNatura =
{
	url: obterURLCamposPersonalizadosComBoardID( idBoardGestaoDemandasNatura ),
	type: tipoReqAjaxGet,
	dataType: tipoDadoAjaxJSON,
	beforeSend: beforeSendGetCamposPersonalizadosGestaoDemandasNatura
};

var configsReqAssincGetCardsGestaoDemandasNatura =
{
	url: obterURLCardsComBoardID( idBoardGestaoDemandasNatura ),
	type: tipoReqAjaxGet,
	dataType: tipoDadoAjaxJSON,
	beforeSend: beforeSendGetCardsGestaoDemandasNatura
};

var configsReqAssincGetListasGestaoDemandasNatura =
{
	url: obterURLListasComBoardID( idBoardGestaoDemandasNatura ),
	type: tipoReqAjaxGet,
	dataType: tipoDadoAjaxJSON,
	beforeSend: beforeSendGetListasGestaoDemandasNatura
};

// Quadro de Testes para Dashboard da Natura

var configsReqAssincGetBoardActionsQuadroTestesDashboardNatura =
{
	url: obterURLBoardActions( idBoardQuadroTestesDashboardNatura ),
	type: tipoReqAjaxGet,
	dataType: tipoDadoAjaxJSON,
	beforeSend: beforeSendGetBoardActionsQuadroTestesDashboardNatura
};

var configsReqAssincGetCamposPersonalizadosQuadroTestesDashboardNatura =
{
	url: obterURLCamposPersonalizadosComBoardID( idBoardQuadroTestesDashboardNatura ),
	type: tipoReqAjaxGet,
	dataType: tipoDadoAjaxJSON,
	beforeSend: beforeSendGetCamposPersonalizadosQuadroTestesDashboardNatura
};

var configsReqAssincGetCardsQuadroTestesDashboardNatura =
{
	url: obterURLCardsComBoardID( idBoardQuadroTestesDashboardNatura ),
	type: tipoReqAjaxGet,
	dataType: tipoDadoAjaxJSON,
	beforeSend: beforeSendGetCardsQuadroTestesDashboardNatura
};

var configsReqAssincGetListasQuadroTestesDashboardNatura =
{
	url: obterURLListasComBoardID( idBoardQuadroTestesDashboardNatura ),
	type: tipoReqAjaxGet,
	dataType: tipoDadoAjaxJSON,
	beforeSend: beforeSendGetListasQuadroTestesDashboardNatura
};

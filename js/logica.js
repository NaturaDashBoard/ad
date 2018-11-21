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

/* ATUALIZAÇÃO DE ELEMENTOS DE TELA */

function atualizarFTRABAP()
{
	var idListaEntregue = obterIDLista( nomeListaEntregue, listasQuadroTestesDashboardNatura );
	
	var quantidadeTicketsFDFMListaEntregue = obterQuantidadeTicketsFDFMLista( idListaEntregue, cardsQuadroTestesDashboardNatura );
	
	var quantidadeTicketsFTRABAPListaEntregue = obterQuantidadeTicketsFTRABAPLista( idListaEntregue, cardsQuadroTestesDashboardNatura );
	
	var percentualTicketsFTRABAPListaEntregue = obterPercentual( quantidadeTicketsFTRABAPListaEntregue, quantidadeTicketsFDFMListaEntregue );
	
	var percentualTicketsFTRABAPListaEntregueArredondado = roundNumber( percentualTicketsFTRABAPListaEntregue, 2 );
	
	ftrABAP.html( percentualTicketsFTRABAPListaEntregueArredondado.toString() + '%' );
}

function atualizarOTDABAP()
{
	var idListaEntregue = obterIDLista( nomeListaEntregue, listasQuadroTestesDashboardNatura );
	
	var quantidadeTicketsFDFMListaEntregue = obterQuantidadeTicketsFDFMLista( idListaEntregue, cardsQuadroTestesDashboardNatura );
	
	var quantidadeTicketsOTDABAPListaEntregue = obterQuantidadeTicketsOTDABAPLista( idListaEntregue, cardsQuadroTestesDashboardNatura, camposPersonalizadosQuadroTestesDashboardNatura );
	
	var percentualTicketsOTDABAPListaEntregue = obterPercentual( quantidadeTicketsOTDABAPListaEntregue, quantidadeTicketsFDFMListaEntregue );
	
	var percentualTicketsOTDABAPListaEntregueArredondado = roundNumber( percentualTicketsOTDABAPListaEntregue, 2 );
	
	otdABAP.html( percentualTicketsOTDABAPListaEntregueArredondado.toString() + '%' );
}

function atualizarFTRFUNC()
{
	var idListaEntregue = obterIDLista( nomeListaEntregue, listasQuadroTestesDashboardNatura );
	
	var quantidadeTicketsFDFMListaEntregue = obterQuantidadeTicketsFDFMLista( idListaEntregue, cardsQuadroTestesDashboardNatura );
	
	var quantidadeTicketsFTRFUNCListaEntregue = obterQuantidadeTicketsFTRFUNCLista( idListaEntregue, cardsQuadroTestesDashboardNatura );
	
	var percentualTicketsFTRFUNCListaEntregue = obterPercentual( quantidadeTicketsFTRFUNCListaEntregue, quantidadeTicketsFDFMListaEntregue );
	
	var percentualTicketsFTRFUNCListaEntregueArredondado = roundNumber( percentualTicketsFTRFUNCListaEntregue, 2 );
	
	ftrFUNC.html( percentualTicketsFTRFUNCListaEntregueArredondado.toString() + '%' );		
}

function atualizarOTDFUNC()
{
	var idListaEntregue = obterIDLista( nomeListaEntregue, listasQuadroTestesDashboardNatura );
	
	var quantidadeTicketsFDFMListaEntregue = obterQuantidadeTicketsFDFMLista( idListaEntregue, cardsQuadroTestesDashboardNatura );
	
	var quantidadeTicketsOTDFUNCListaEntregue = obterQuantidadeTicketsOTDFUNCLista( idListaEntregue, cardsQuadroTestesDashboardNatura, camposPersonalizadosQuadroTestesDashboardNatura );
	
	var percentualTicketsOTDFUNCListaEntregue = obterPercentual( quantidadeTicketsOTDFUNCListaEntregue, quantidadeTicketsFDFMListaEntregue );
	
	var percentualTicketsOTDFUNCListaEntregueArredondado = roundNumber( percentualTicketsOTDFUNCListaEntregue, 2 );
	
	otdFUNC.html( percentualTicketsOTDFUNCListaEntregueArredondado.toString() + '%' );		
}

function atualizarQuantidadeSIRsErro()
{
	var quantidadeSIRsErro = obterQuantidadeSIRsErro( cardsQuadroTestesDashboardNatura );
	
	sirErro.html( quantidadeSIRsErro );
}

function atualizarQuantidadeSIRsFM()
{
	var quantidadeSIRsFM = obterQuantidadeSIRsFM( cardsQuadroTestesDashboardNatura );
	
	sirFM.html( quantidadeSIRsFM );	
}

function atualizarQuantidadeSIRs()
{
	atualizarQuantidadeSIRsErro();
	atualizarQuantidadeSIRsFM();
}

function atualizarDisponibilidadeTimeABAP()
{
	disponibilidadeTimeABAP.html
	(
		obterTimelineDisponibilidadeTimeABAP
		(
			cardsQuadroTestesDashboardNatura,
			camposPersonalizadosQuadroTestesDashboardNatura,
			listasQuadroTestesDashboardNatura
		)
	);
}

function atualizarPercentualCartoesPorFase()
{
	var percentualCardsListaBacklogDemandas = obterPercentualCardsLista( nomeListaBacklogDemandas, listasQuadroTestesDashboardNatura, cardsQuadroTestesDashboardNatura );
	
	var percentualCardsListaBacklogSIR = obterPercentualCardsLista( nomeListaBacklogSIR, listasQuadroTestesDashboardNatura, cardsQuadroTestesDashboardNatura );
	
	var percentualCardsListaEmAtendimento = obterPercentualCardsLista( nomeListaEmAtendimento, listasQuadroTestesDashboardNatura, cardsQuadroTestesDashboardNatura );
	
	var percentualCardsListaPendenciasReprovados = obterPercentualCardsLista( nomeListaPendenciasReprovados, listasQuadroTestesDashboardNatura, cardsQuadroTestesDashboardNatura );
	
	var percentualCardsListaEmRevisao = obterPercentualCardsLista( nomeListaEmRevisao, listasQuadroTestesDashboardNatura, cardsQuadroTestesDashboardNatura );
	
	var percentualCardsListaEntregue = obterPercentualCardsLista( nomeListaEntregue, listasQuadroTestesDashboardNatura, cardsQuadroTestesDashboardNatura );
	
	var dadosDataSetGrafico =
	[
		roundNumber( percentualCardsListaBacklogDemandas, 2 ),
		roundNumber( percentualCardsListaBacklogSIR, 2 ),
		roundNumber( percentualCardsListaEmAtendimento, 2 ),
		roundNumber( percentualCardsListaPendenciasReprovados, 2 ),
		roundNumber( percentualCardsListaEmRevisao, 2 ),
		roundNumber( percentualCardsListaEntregue, 2 )
	];
	
	if( graficoPercentualCartoesPorFase == undefined )
	{
		var labelsGrafico = 
		[
			nomeListaBacklogDemandas,
			nomeListaBacklogSIR,
			nomeListaEmAtendimento,
			nomeListaPendenciasReprovados,
			nomeListaEmRevisao,
			nomeListaEntregue
		];
		
		var dadosGrafico =
		{
			datasets: 
			[
				{
					data: dadosDataSetGrafico,
					backgroundColor: coresGraficoPercentualCartoesPorFase,
					label: tituloGraficoPercentualCartoesPorFase
				}
			],
			labels: labelsGrafico
		};
		
		var opcoesGrafico = 
		{
			title:
			{
				display: true,
				text: tituloGraficoPercentualCartoesPorFase
			},
			legend:
			{
				position: posicaoLegendaGraficoEsquerda,
			},
			responsive: true
		};
		
		var configsGrafico =
		{
			type: tipoGraficoDoughnut,
			data: dadosGrafico,
			options: opcoesGrafico
		};

		var contextGrafico = grafPercentualCartoesPorFase.get(0).getContext( tipoContext2D );
		
		graficoPercentualCartoesPorFase = new Chart( contextGrafico, configsGrafico );
	}
	else
	{
		graficoPercentualCartoesPorFase.config.data.datasets[0].data = dadosDataSetGrafico;
		
		graficoPercentualCartoesPorFase.update();
	}
}

function atualizarTotalHorasABAPEntregue()
{
	totalHorasABAPEntregue.html
	(
		obterQuantidadeHorasEntregueTicketsFDFM
		(
			cardsQuadroTestesDashboardNatura,
			camposPersonalizadosQuadroTestesDashboardNatura,
			listasQuadroTestesDashboardNatura
		)
	);
}

function atualizarTotalHorasABAPBacklog()
{
	totalHorasABAPBacklog.html
	(
		obterQuantidadeHorasBacklogTicketsFDFM
		(
			cardsQuadroTestesDashboardNatura,
			camposPersonalizadosQuadroTestesDashboardNatura,
			listasQuadroTestesDashboardNatura
		)
	);
}

function atualizarPercentualCartoesPorEtiqueta()
{
	var percentualCardsEtiquetaCCM = obterPercentualCardsPorEtiqueta( nomeLabelCCM, cardsQuadroTestesDashboardNatura );
	
	var percentualCardsEtiquetaDebug = obterPercentualCardsPorEtiqueta( nomeLabelDebug, cardsQuadroTestesDashboardNatura );
	
	var percentualCardsEtiquetaFD = obterPercentualCardsPorEtiqueta( nomeLabelFD, cardsQuadroTestesDashboardNatura );
	
	var percentualCardsEtiquetaSmallEnhancement = obterPercentualCardsPorEtiqueta( nomeLabelSmallEnhancement, cardsQuadroTestesDashboardNatura );
	
	var percentualCardsEtiquetaEstimativa = obterPercentualCardsPorEtiqueta( nomeLabelEstimativa, cardsQuadroTestesDashboardNatura );
	
	var percentualCardsEtiquetaSIRFM = obterPercentualCardsPorEtiqueta( nomeLabelSIRFM, cardsQuadroTestesDashboardNatura );

	var percentualCardsEtiquetaFM = obterPercentualCardsPorEtiqueta( nomeLabelFM, cardsQuadroTestesDashboardNatura );
	
	var percentualCardsEtiquetaSIRERRO = obterPercentualCardsPorEtiqueta( nomeLabelSIRErro, cardsQuadroTestesDashboardNatura );
	
	var dadosDataSetGrafico =
	[
		roundNumber( percentualCardsEtiquetaCCM, 2 ),
		roundNumber( percentualCardsEtiquetaDebug, 2 ),
		roundNumber( percentualCardsEtiquetaFD, 2 ),
		roundNumber( percentualCardsEtiquetaSmallEnhancement, 2 ),
		roundNumber( percentualCardsEtiquetaEstimativa, 2 ),
		roundNumber( percentualCardsEtiquetaSIRFM, 2 ),
		roundNumber( percentualCardsEtiquetaFM, 2 ),
		roundNumber( percentualCardsEtiquetaSIRERRO, 2 )
	];
	
	if( graficoPercentualCartoesPorEtiqueta == undefined )
	{
		var labelsGrafico = 
		[
			nomeLabelCCM,
			nomeLabelDebug,
			nomeLabelFD,
			nomeLabelSmallEnhancement,
			nomeLabelEstimativa,
			nomeLabelSIRFM,
			nomeLabelFM,
			nomeLabelSIRErro
		];
		
		var dadosGrafico =
		{
			datasets: 
			[
				{
					data: dadosDataSetGrafico,
					backgroundColor: coresGraficoPercentualCartoesPorEtiqueta,
					label: tituloGraficoPercentualCartoesPorEtiqueta
				}
			],
			labels: labelsGrafico
		};
		
		var opcoesGrafico = 
		{
			title:
			{
				display: true,
				text: tituloGraficoPercentualCartoesPorEtiqueta
			},
			legend:
			{
				position: posicaoLegendaGraficoTop,
			},
			responsive: true
		};
		
		var configsGrafico =
		{
			type: tipoGraficoBar,
			data: dadosGrafico,
			options: opcoesGrafico
		};

		var contextGrafico = grafPercentualCartoesPorEtiqueta.get(0).getContext( tipoContext2D );
		
		graficoPercentualCartoesPorEtiqueta = new Chart( contextGrafico, configsGrafico );
	}
	else
	{
		graficoPercentualCartoesPorEtiqueta.config.data.datasets[0].data = dadosDataSetGrafico;
		
		graficoPercentualCartoesPorEtiqueta.update();
	}
}

function atualizarFiltroProjeto()
{
	var valorSelecionado = selectProjeto.val();
	
	selectProjeto.html( obterProjetosParaFiltro( camposPersonalizadosQuadroTestesDashboardNatura ) );
	
	selectProjeto.val( valorSelecionado );
}

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

function atualizarFTRABAP( nomeProjeto, dataRelease )
{	
	var cards = obterCardsPorProjeto( nomeProjeto, cardsQuadroTestesDashboardNatura, camposPersonalizadosQuadroTestesDashboardNatura );
	
	cards = obterCardsPorRelease( dataRelease, cards, camposPersonalizadosQuadroTestesDashboardNatura );

	var idListaEntregue = obterIDLista( nomeListaEntregue, listasQuadroTestesDashboardNatura );
	
	var quantidadeTicketsFDFMListaEntregue = obterQuantidadeTicketsFDFMLista( idListaEntregue, cards );
	
	var quantidadeTicketsFTRABAPListaEntregue = obterQuantidadeTicketsFTRABAPLista( idListaEntregue, cards );
	
	var percentualTicketsFTRABAPListaEntregue = obterPercentual( quantidadeTicketsFTRABAPListaEntregue, quantidadeTicketsFDFMListaEntregue );
	
	var percentualTicketsFTRABAPListaEntregueArredondado = roundNumber( percentualTicketsFTRABAPListaEntregue, 2 );
	
	ftrABAP.html( percentualTicketsFTRABAPListaEntregueArredondado.toString() + '%' );
}

function atualizarOTDABAP( nomeProjeto, dataRelease )
{
	var cards = obterCardsPorProjeto( nomeProjeto, cardsQuadroTestesDashboardNatura, camposPersonalizadosQuadroTestesDashboardNatura );
	
	cards = obterCardsPorRelease( dataRelease, cards, camposPersonalizadosQuadroTestesDashboardNatura );
	
	var idListaEntregue = obterIDLista( nomeListaEntregue, listasQuadroTestesDashboardNatura );
	
	var quantidadeTicketsFDFMListaEntregue = obterQuantidadeTicketsFDFMLista( idListaEntregue, cards );
	
	var quantidadeTicketsOTDABAPListaEntregue = obterQuantidadeTicketsOTDABAPLista( idListaEntregue, cards, camposPersonalizadosQuadroTestesDashboardNatura );
	
	var percentualTicketsOTDABAPListaEntregue = obterPercentual( quantidadeTicketsOTDABAPListaEntregue, quantidadeTicketsFDFMListaEntregue );
	
	var percentualTicketsOTDABAPListaEntregueArredondado = roundNumber( percentualTicketsOTDABAPListaEntregue, 2 );
	
	otdABAP.html( percentualTicketsOTDABAPListaEntregueArredondado.toString() + '%' );
}

function atualizarFTRFUNC( nomeProjeto, dataRelease )
{
	var cards = obterCardsPorProjeto( nomeProjeto, cardsQuadroTestesDashboardNatura, camposPersonalizadosQuadroTestesDashboardNatura );
	
	cards = obterCardsPorRelease( dataRelease, cards, camposPersonalizadosQuadroTestesDashboardNatura );
	
	var idListaEntregue = obterIDLista( nomeListaEntregue, listasQuadroTestesDashboardNatura );
	
	var quantidadeTicketsFDFMListaEntregue = obterQuantidadeTicketsFDFMLista( idListaEntregue, cards );
	
	var quantidadeTicketsFTRFUNCListaEntregue = obterQuantidadeTicketsFTRFUNCLista( idListaEntregue, cards );
	
	var percentualTicketsFTRFUNCListaEntregue = obterPercentual( quantidadeTicketsFTRFUNCListaEntregue, quantidadeTicketsFDFMListaEntregue );
	
	var percentualTicketsFTRFUNCListaEntregueArredondado = roundNumber( percentualTicketsFTRFUNCListaEntregue, 2 );
	
	ftrFUNC.html( percentualTicketsFTRFUNCListaEntregueArredondado.toString() + '%' );		
}

function atualizarOTDFUNC( nomeProjeto, dataRelease )
{
	var cards = obterCardsPorProjeto( nomeProjeto, cardsQuadroTestesDashboardNatura, camposPersonalizadosQuadroTestesDashboardNatura );
	
	cards = obterCardsPorRelease( dataRelease, cards, camposPersonalizadosQuadroTestesDashboardNatura );
	
	var idListaEntregue = obterIDLista( nomeListaEntregue, listasQuadroTestesDashboardNatura );
	
	var quantidadeTicketsFDFMListaEntregue = obterQuantidadeTicketsFDFMLista( idListaEntregue, cards );
	
	var quantidadeTicketsOTDFUNCListaEntregue = obterQuantidadeTicketsOTDFUNCLista( idListaEntregue, cards, camposPersonalizadosQuadroTestesDashboardNatura );
	
	var percentualTicketsOTDFUNCListaEntregue = obterPercentual( quantidadeTicketsOTDFUNCListaEntregue, quantidadeTicketsFDFMListaEntregue );
	
	var percentualTicketsOTDFUNCListaEntregueArredondado = roundNumber( percentualTicketsOTDFUNCListaEntregue, 2 );
	
	otdFUNC.html( percentualTicketsOTDFUNCListaEntregueArredondado.toString() + '%' );		
}

function atualizarQuantidadeSIRsErro( cards )
{
	var quantidadeSIRsErro = obterQuantidadeSIRsErro( cards );
	
	sirErro.html( quantidadeSIRsErro );
}

function atualizarQuantidadeSIRsFM( cards )
{
	var quantidadeSIRsFM = obterQuantidadeSIRsFM( cards );
	
	sirFM.html( quantidadeSIRsFM );	
}

function atualizarQuantidadeSIRs( nomeProjeto, dataRelease )
{
	var cards = obterCardsPorProjeto( nomeProjeto, cardsQuadroTestesDashboardNatura, camposPersonalizadosQuadroTestesDashboardNatura );
	
	cards = obterCardsPorRelease( dataRelease, cards, camposPersonalizadosQuadroTestesDashboardNatura );
	
	atualizarQuantidadeSIRsErro( cards );
	atualizarQuantidadeSIRsFM( cards );
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

function atualizarPercentualCartoesPorFase( nomeProjeto, dataRelease )
{
	var cards = obterCardsPorProjeto( nomeProjeto, cardsQuadroTestesDashboardNatura, camposPersonalizadosQuadroTestesDashboardNatura );
	
	cards = obterCardsPorRelease( dataRelease, cards, camposPersonalizadosQuadroTestesDashboardNatura );
	
	var percentualCardsListaBacklogDemandas = obterPercentualCardsLista( nomeListaBacklogDemandas, listasQuadroTestesDashboardNatura, cards );
	
	var percentualCardsListaBacklogSIR = obterPercentualCardsLista( nomeListaBacklogSIR, listasQuadroTestesDashboardNatura, cards );
	
	var percentualCardsListaEmAtendimento = obterPercentualCardsLista( nomeListaEmAtendimento, listasQuadroTestesDashboardNatura, cards );
	
	var percentualCardsListaPendenciasReprovados = obterPercentualCardsLista( nomeListaPendenciasReprovados, listasQuadroTestesDashboardNatura, cards );
	
	var percentualCardsListaEmRevisao = obterPercentualCardsLista( nomeListaEmRevisao, listasQuadroTestesDashboardNatura, cards );
	
	var percentualCardsListaEntregue = obterPercentualCardsLista( nomeListaEntregue, listasQuadroTestesDashboardNatura, cards );
	
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

function atualizarTotalHorasABAPEntregue( nomeProjeto, dataRelease )
{
	var cards = obterCardsPorProjeto( nomeProjeto, cardsQuadroTestesDashboardNatura, camposPersonalizadosQuadroTestesDashboardNatura );
	
	cards = obterCardsPorRelease( dataRelease, cards, camposPersonalizadosQuadroTestesDashboardNatura );
	
	totalHorasABAPEntregue.html
	(
		obterQuantidadeHorasEntregueTicketsFDFM
		(
			cards,
			camposPersonalizadosQuadroTestesDashboardNatura,
			listasQuadroTestesDashboardNatura
		)
	);
}

function atualizarTotalHorasABAPBacklog( nomeProjeto, dataRelease )
{
	var cards = obterCardsPorProjeto( nomeProjeto, cardsQuadroTestesDashboardNatura, camposPersonalizadosQuadroTestesDashboardNatura );
	
	cards = obterCardsPorRelease( dataRelease, cards, camposPersonalizadosQuadroTestesDashboardNatura );
	
	totalHorasABAPBacklog.html
	(
		obterQuantidadeHorasBacklogTicketsFDFM
		(
			cards,
			camposPersonalizadosQuadroTestesDashboardNatura,
			listasQuadroTestesDashboardNatura
		)
	);
}

function atualizarPercentualCartoesPorEtiqueta( nomeProjeto, dataRelease )
{
	var cards = obterCardsPorProjeto( nomeProjeto, cardsQuadroTestesDashboardNatura, camposPersonalizadosQuadroTestesDashboardNatura );
	
	cards = obterCardsPorRelease( dataRelease, cards, camposPersonalizadosQuadroTestesDashboardNatura );
	
	var percentualCardsEtiquetaCCM = obterPercentualCardsPorEtiqueta( nomeLabelCCM, cards );
	
	var percentualCardsEtiquetaDebug = obterPercentualCardsPorEtiqueta( nomeLabelDebug, cards );
	
	var percentualCardsEtiquetaFD = obterPercentualCardsPorEtiqueta( nomeLabelFD, cards );
	
	var percentualCardsEtiquetaSmallEnhancement = obterPercentualCardsPorEtiqueta( nomeLabelSmallEnhancement, cards );
	
	var percentualCardsEtiquetaEstimativa = obterPercentualCardsPorEtiqueta( nomeLabelEstimativa, cards );
	
	var percentualCardsEtiquetaSIRFM = obterPercentualCardsPorEtiqueta( nomeLabelSIRFM, cards );

	var percentualCardsEtiquetaFM = obterPercentualCardsPorEtiqueta( nomeLabelFM, cards );
	
	var percentualCardsEtiquetaSIRERRO = obterPercentualCardsPorEtiqueta( nomeLabelSIRErro, cards );
	
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

function atualizarFiltroRelease()
{
	var valorSelecionado = selectRelease.val();
	
	selectRelease.html
	(
		obterReleasesParaFiltro
		(
			cardsQuadroTestesDashboardNatura,
			camposPersonalizadosQuadroTestesDashboardNatura
		)
	);
	
	selectRelease.val( valorSelecionado );
}

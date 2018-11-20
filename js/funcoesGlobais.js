function obterURLBoardActions( idBoard )
{
	return templateURLBoardActions.replace( '[BOARD_ID]', idBoard );
}

function obterURLCardsComBoardID( idBoard )
{
	return templateURLCards.replace( '[BOARD_ID]', idBoard );
}

function obterURLCamposPersonalizadosComBoardID( idBoard )
{
	return templateURLBoardCamposPersonalizados.replace( '[BOARD_ID]', idBoard );
}

function obterURLCardActions( idCard )
{
	return templateURLCardActions.replace( '[CARD_ID]', idCard );
}

function obterURLListasComBoardID( idBoard )
{
	return templateURLListas.replace( '[BOARD_ID]', idBoard );
}

function obterURLCamposPersonalizadosCard( idCard )
{
	return templateURLCamposPersonalizadosCard.replace( '[CARD_ID]', idCard );
}

function obterURLAnexosCard( idCard )
{
	return templateURLAnexosCard.replace( '[CARD_ID]', idCard );
}

function obterQuantidadeSIRsErro( cards )
{
	var quantidadeSIRsErro = 0;
	
	for( indiceCard = 0; indiceCard < cards.length; ++indiceCard )
	{
		if( cards[indiceCard]['name'] != nomeCardSIRExemplo )
		{
			var labels = cards[indiceCard]['labels'];
			
			for( indiceLabel = 0; indiceLabel < labels.length; ++indiceLabel )
			{
				if( labels[indiceLabel]['name'] == nomeLabelSIRErro )
				{
					++quantidadeSIRsErro;
				}
			}
		}
	}
	
	return quantidadeSIRsErro;
}

function obterQuantidadeSIRsFM( cards )
{
	var quantidadeSIRsFM = 0;
	
	for( indiceCard = 0; indiceCard < cards.length; ++indiceCard )
	{
		if( cards[indiceCard]['name'] != nomeCardSIRExemplo )
		{
			var labels = cards[indiceCard]['labels'];
			
			for( indiceLabel = 0; indiceLabel < labels.length; ++indiceLabel )
			{
				if( labels[indiceLabel]['name'] == nomeLabelSIRFM )
				{
					++quantidadeSIRsFM;
				}
			}
		}
	}
	
	return quantidadeSIRsFM;
}

function obterIDLista( nomeLista, listas )
{
	var idLista = undefined;
	
	for( indiceLista = 0; indiceLista < listas.length; ++indiceLista )
	{
		if( listas[indiceLista]['name'] == nomeLista )
		{
			idLista = listas[indiceLista]['id'];
			
			break;
		}
	}
	
	return idLista;
}

function obterQuantidadeCardsLista( idLista, cards )
{
	var quantidadeCards = 0;
	
	for( indiceCard = 0; indiceCard < cards.length; ++indiceCard )
	{
		var card = cards[indiceCard];
		
		if
		(
			card['idList'] == idLista
			&& card['name'] != nomeCardTicketExemplo
			&& card['name'] != nomeCardSIRExemplo
		)
		{
			++quantidadeCards;
		}
	}
	
	return quantidadeCards;
}

function obterPercentual( quantidade, total )
{
	return ( quantidade / total ) * 100;
}

function obterPercentualCards( quantidadeCards, cards )
{
	var totalCard = 0;
	
	for( indiceCard = 0; indiceCard < cards.length; ++indiceCard )
	{
		var card = cards[indiceCard];
		
		if
		(
			card['name'] != nomeCardTicketExemplo
			&& card['name'] != nomeCardSIRExemplo
		)
		{
			++totalCard;
		}
	}
	
	return obterPercentual( quantidadeCards, totalCard );
}

function roundNumber( num, scale )
{
	if( !( '' + num ).includes( 'e' ) )
	{
		return +( Math.round( num + 'e+' + scale )  + 'e-' + scale );
	}
	
	var arr = ( '' + num ).split( 'e' );
	var sig = '';
	if( +arr[1] + scale > 0 )
	{
		sig = '+';
	}
	
    return +( Math.round( +arr[0] + 'e' + sig + ( +arr[1] + scale ) ) + 'e-' + scale );
}

function obterPercentualCardsLista( nomeLista, listas, cards )
{
	var idLista = obterIDLista( nomeLista, listas );
	
	var quantidadeCardsLista = obterQuantidadeCardsLista( idLista, cards );
	
	var percentualCardsLista = obterPercentualCards( quantidadeCardsLista, cards );
	
	return percentualCardsLista;
}

function validarCardTicket( card )
{
	var labels = card['labels'];
			
	if( labels != null )
	{
		var ticketValido = true;
		
		for( indiceLabel = 0; indiceLabel < labels.length; ++indiceLabel )
		{
			var nomeLabel = labels[indiceLabel]['name'];
			
			if
			(
				nomeLabel == nomeLabelSIRErro
				|| nomeLabel == nomeLabelSIRFM
			)
			{
				ticketValido = false;
				
				break;
			}
		}
		
		if
		(
			labels.length > 0
			&& ticketValido
		)
		{
			return ticketValido;
		}
	}
	
	return false;
}

function obterQuantidadeTicketsLista( idLista, cards )
{
	var quantidadeTickets = 0;
	
	for( indiceCard = 0; indiceCard < cards.length; ++indiceCard )
	{
		var card = cards[indiceCard]; 
		
		if
		(
			card['idList'] == idLista
			&& card['name'] != nomeCardTicketExemplo
			&& validarCardTicket( card )
		)
		{
			++quantidadeTickets;
		}
	}
	
	return quantidadeTickets;
}

function validarCardTicketFDFM( card )
{
	var labels = card['labels'];
			
	if( labels != null )
	{
		var ticketFDFMValido = true;
		
		for( indiceLabel = 0; indiceLabel < labels.length; ++indiceLabel )
		{
			var nomeLabel = labels[indiceLabel]['name'];
			
			if
			(
				nomeLabel != nomeLabelFD
				&& nomeLabel != nomeLabelFM
			)
			{
				ticketFDFMValido = false;
				
				break;
			}
		}
		
		if
		(
			labels.length > 0
			&& ticketFDFMValido
		)
		{
			return ticketFDFMValido;
		}				
	}
	
	return false;
}

function obterQuantidadeTicketsFDFMLista( idLista, cards )
{
	var quantidadeTicketsFDFM = 0;
	
	for( indiceCard = 0; indiceCard < cards.length; ++indiceCard )
	{
		var card = cards[indiceCard]; 
		
		if
		(
			card['idList'] == idLista
			&& card['name'] != nomeCardTicketExemplo
			&& validarCardTicketFDFM( card )
		)
		{
			++quantidadeTicketsFDFM;
		}
	}
	
	return quantidadeTicketsFDFM;
}

function obterCardsTicketLista( idLista, cards )
{
	var cardsTicket = [];
	
	for( indiceCard = 0; indiceCard < cards.length; ++indiceCard )
	{
		var card = cards[indiceCard]; 
		
		if
		(
			card['idList'] == idLista
			&& validarCardTicket( card )
		)
		{
			cardsTicket.push( card );
		}
	}
	
	return cardsTicket;
}

function obterCardsTicketFDFMLista( idLista, cards )
{
	var cardsTicketFDFM = [];
	
	var cardsTicketLista = obterCardsTicketLista( idLista, cards );
	
	for( indiceCardTicket = 0; indiceCardTicket < cardsTicketLista.length; ++indiceCardTicket )
	{
		var cardTicket = cardsTicketLista[indiceCardTicket];
		
		if( validarCardTicketFDFM( cardTicket ) )
		{
			cardsTicketFDFM.push( cardTicket );
		}
	}
	
	return cardsTicketFDFM;
}

function validarCardSIR( card )
{
	var labels = card['labels'];
			
	if( labels != null )
	{
		var SIRValida = true;
		
		for( indiceLabel = 0; indiceLabel < labels.length; ++indiceLabel )
		{
			var nomeLabel = labels[indiceLabel]['name'];
			
			if
			(
				nomeLabel != nomeLabelSIRErro
				&& nomeLabel != nomeLabelSIRFM
			)
			{
				SIRValida = false;
				
				break;
			}
		}
		
		if
		(
			labels.length > 0
			&& SIRValida
		)
		{
			return SIRValida;
		}				
	}
	
	return false;
}

function obterNumeroTicketDaSIR( cardSIR )
{
	var nomeCardSIR = cardSIR['name'];
	
	if( nomeCardSIR != null )
	{
		var indicePrimeiroDigitoNumeroSIR = nomeCardSIR.indexOf( '[N' ) + 2;
		var indiceAposUltimoDigitoNumeroSIR = nomeCardSIR.indexOf( ']' );
		
		if( indicePrimeiroDigitoNumeroSIR < indiceAposUltimoDigitoNumeroSIR )
		{
			var numeroTicketDaSIRString = '';
		
			for( indiceCaractere = indicePrimeiroDigitoNumeroSIR; indiceCaractere < indiceAposUltimoDigitoNumeroSIR; ++indiceCaractere )
			{
				numeroTicketDaSIRString += nomeCardSIR[indiceCaractere];
			}
			
			var numeroTicketDaSIR = Number( numeroTicketDaSIRString );
			
			if( !isNaN( numeroTicketDaSIR ) )
			{
				return numeroTicketDaSIR;
			}
		}
	}
	
	return -1;
}

function obterQuantidadeTicketsComSIRLista( idLista, cards )
{
	var quantidadeTicketsComSIR = 0;
	
	var cardsTicketFDFM = obterCardsTicketFDFMLista( idLista, cards );
	
	for( indiceCardTicket = 0; indiceCardTicket < cardsTicketFDFM.length; ++indiceCardTicket )
	{
		var numeroTicket = cardsTicketFDFM[indiceCardTicket]['idShort'];
		
		for( indiceCard = 0; indiceCard < cards.length; ++indiceCard )
		{
			var card = cards[indiceCard];
			
			if
			(
				validarCardSIR( card )
				&& numeroTicket == obterNumeroTicketDaSIR( card )
			)
			{
				++quantidadeTicketsComSIR;
				
				break;
			}
		}
	}
	
	return quantidadeTicketsComSIR;
}

function obterQuantidadeTicketsFTRABAPLista( idLista, cards )
{
	var quantidadeTicketsFDFMLista = obterQuantidadeTicketsFDFMLista( idLista, cards );
	
	var quantidadeTicketsComSIRLista = obterQuantidadeTicketsComSIRLista( idLista, cards );
	
	var quantidadeTicketsFTRABAPLista = quantidadeTicketsFDFMLista - quantidadeTicketsComSIRLista;
	
	return quantidadeTicketsFTRABAPLista;
}

function validarTicketSemFTRFUNC( card )
{
	var idCard = card['id'];
	
	carregarSincCardActionsQuadroTestesDashboardNatura( idCard );
	
	for( indiceCardAction = 0; indiceCardAction < cardActionsQuadroTestesDashboardNatura.length; ++indiceCardAction )
	{
		var cardAction = cardActionsQuadroTestesDashboardNatura[indiceCardAction];
		
		if
		(
			cardAction['type'] == tipoActionUpdateCard
			&& cardAction['data']['listAfter']['name'] == nomeListaPendenciasReprovados
		)
		{
			return true;
		}
	}
	return false;
}

function obterQuantidadeTicketsSemFTRFUNCLista( idLista, cards )
{
	var quantidadeTicketsSemFTRFUNC = 0;
	
	var cardsTicketFDFM = obterCardsTicketFDFMLista( idLista, cards );
	
	for( indiceCardTicket = 0; indiceCardTicket < cardsTicketFDFM.length; ++indiceCardTicket )
	{
		var card = cardsTicketFDFM[indiceCardTicket];
		
		if( validarTicketSemFTRFUNC( card ) )
		{
			++quantidadeTicketsSemFTRFUNC;
		}
	}
	
	return quantidadeTicketsSemFTRFUNC;
}

function obterQuantidadeTicketsFTRFUNCLista( idLista, cards )
{
	var quantidadeTicketsFDFMLista = obterQuantidadeTicketsFDFMLista( idLista, cards );
	
	var quantidadeTicketsSemFTRFUNCLista = obterQuantidadeTicketsSemFTRFUNCLista( idLista, cards );
	
	var quantidadeTicketsFTRFUNCLista = quantidadeTicketsFDFMLista - quantidadeTicketsSemFTRFUNCLista;
	
	return quantidadeTicketsFTRFUNCLista;
}

function obterIDCampoPersonalizado( nomeCampoPersonalizado, camposPersonalizados )
{
	var idCampoPersonalizado = undefined;
	
	for( indiceCampoPersonalizado = 0; indiceCampoPersonalizado < camposPersonalizados.length; ++indiceCampoPersonalizado )
	{
		var campoPersonalizado = camposPersonalizados[indiceCampoPersonalizado];
		
		if( campoPersonalizado['name'] == nomeCampoPersonalizado )
		{
			idCampoPersonalizado = campoPersonalizado['id'];
			
			break;
		}
	}
	
	return idCampoPersonalizado;
}

function obterValorCampoPersonalizadoCard( idCampoPersonalizado, itemsCamposPersonalizadosCard, camposPersonalizadosBoard )
{
	var valorCampoPersonalizado = undefined;
	
	for( indiceCampoPersonalizado = 0; indiceCampoPersonalizado < itemsCamposPersonalizadosCard.length; ++indiceCampoPersonalizado )
	{
		var campoPersonalizado = itemsCamposPersonalizadosCard[indiceCampoPersonalizado];
		
		if( campoPersonalizado['idCustomField'] == idCampoPersonalizado )
		{
			valorCampoPersonalizado = campoPersonalizado['value'];
			
			if( valorCampoPersonalizado == undefined )
			{
				var idValorCampoPersonalizado = campoPersonalizado['idValue'];
				
				var opcoesCampoPersonalizadoBoard = obterCampoPersonalizadoPeloID( idCampoPersonalizado, camposPersonalizadosBoard )['options'];
				
				for( indiceOpcaoCampoPersonalizadoBoard = 0; indiceOpcaoCampoPersonalizadoBoard < opcoesCampoPersonalizadoBoard.length; ++indiceOpcaoCampoPersonalizadoBoard )
				{
					var opcaoCampoPersonalizadoBoard = opcoesCampoPersonalizadoBoard[indiceOpcaoCampoPersonalizadoBoard];
					
					if( opcaoCampoPersonalizadoBoard['id'] == idValorCampoPersonalizado )
					{
						valorCampoPersonalizado = opcaoCampoPersonalizadoBoard['value'];
						
						break;
					}
				}
			}
			
			break;
		}
	}
	
	return valorCampoPersonalizado;
}

function validarTicketSemOTDABAP( card, camposPersonalizadosBoard )
{
	var idCard = card['id'];
	
	var idCampoPersonalizadoFimConstrucao = obterIDCampoPersonalizado( nomeCampoPersonalizadoFimConstrucao, camposPersonalizadosBoard );
	
	carregarSincCardActionsQuadroTestesDashboardNatura( idCard );
	
	for( indiceCardAction = 0; indiceCardAction < cardActionsQuadroTestesDashboardNatura.length; ++indiceCardAction )
	{
		var cardAction = cardActionsQuadroTestesDashboardNatura[indiceCardAction];
		
		if
		(
			cardAction['type'] == tipoActionUpdateCard
			&& cardAction['data']['listAfter']['name'] == nomeListaEntregue
		)
		{
			carregarSincCamposPersonalizadosCard( idCard );
			
			var valorCampoPersonalizadoFimConstrucao = obterValorCampoPersonalizadoCard( idCampoPersonalizadoFimConstrucao, camposPersonalizadosCard['customFieldItems'], camposPersonalizadosBoard );
			
			if( valorCampoPersonalizadoFimConstrucao['date'] < cardAction['date'] )
			{
				return true;
			}
		}
	}
	return false;
}

function obterQuantidadeTicketsSemOTDABAPLista( idLista, cards, camposPersonalizadosBoard )
{
	var quantidadeTicketsSemOTDABAP = 0;
	
	var cardsTicketFDFM = obterCardsTicketFDFMLista( idLista, cards );
	
	for( indiceCardTicket = 0; indiceCardTicket < cardsTicketFDFM.length; ++indiceCardTicket )
	{
		var card = cardsTicketFDFM[indiceCardTicket];
		
		if( validarTicketSemOTDABAP( card, camposPersonalizadosBoard ) )
		{
			++quantidadeTicketsSemOTDABAP;
		}
	}
	
	return quantidadeTicketsSemOTDABAP;
}

function obterQuantidadeTicketsOTDABAPLista( idLista, cards, camposPersonalizadosBoard )
{
	var quantidadeTicketsFDFMLista = obterQuantidadeTicketsFDFMLista( idLista, cards );
	
	var quantidadeTicketsSemOTDABAPLista = obterQuantidadeTicketsSemOTDABAPLista( idLista, cards, camposPersonalizadosBoard );
	
	var quantidadeTicketsOTDABAPLista = quantidadeTicketsFDFMLista - quantidadeTicketsSemOTDABAPLista;
	
	return quantidadeTicketsOTDABAPLista;	
}

function validarTicketSemOTDFUNC( card, camposPersonalizadosBoard )
{
	var resultadoValidacao = false;
	
	var idCard = card['id'];
	
	carregarSincAnexosCard( idCard );
	
	if
	(
		anexosCard == undefined ||
		anexosCard.length == 0
	)
	{
		resultadoValidacao = true;
		
		return resultadoValidacao;
	}
	
	var idCampoPersonalizadoDataEF = obterIDCampoPersonalizado( nomeCampoPersonalizadoDataEF, camposPersonalizadosBoard );
	
	carregarSincCamposPersonalizadosCard( idCard );
	
	var valorCampoPersonalizadoDataEF = obterValorCampoPersonalizadoCard( idCampoPersonalizadoDataEF, camposPersonalizadosCard['customFieldItems'], camposPersonalizadosBoard );
	
	for( indiceAnexo = 0; indiceAnexo < anexosCard.length; ++indiceAnexo )
	{
		var anexo = anexosCard[indiceAnexo];
		
		if( anexo['name'].startsWith( inicioNomeAnexoEF ) )
		{
			if( valorCampoPersonalizadoDataEF['date'] < anexo['date'] )
			{
				resultadoValidacao = true;
			}
			
			break;
		}
	}
	
	return resultadoValidacao;
}

function obterQuantidadeTicketsSemOTDFUNCLista( idLista, cards, camposPersonalizadosBoard )
{
	var quantidadeTicketsSemOTDFUNC = 0;
	
	var cardsTicketFDFM = obterCardsTicketFDFMLista( idLista, cards );
	
	for( indiceCardTicket = 0; indiceCardTicket < cardsTicketFDFM.length; ++indiceCardTicket )
	{
		var card = cardsTicketFDFM[indiceCardTicket];
		
		if( validarTicketSemOTDFUNC( card, camposPersonalizadosBoard ) )
		{
			++quantidadeTicketsSemOTDFUNC;
		}
	}
	
	return quantidadeTicketsSemOTDFUNC;
}

function obterQuantidadeTicketsOTDFUNCLista( idLista, cards, camposPersonalizadosBoard )
{
	var quantidadeTicketsFDFMLista = obterQuantidadeTicketsFDFMLista( idLista, cards );
	
	var quantidadeTicketsSemOTDFUNCLista = obterQuantidadeTicketsSemOTDFUNCLista( idLista, cards, camposPersonalizadosBoard );
	
	var quantidadeTicketsOTDFUNCLista = quantidadeTicketsFDFMLista - quantidadeTicketsSemOTDFUNCLista;
	
	return quantidadeTicketsOTDFUNCLista;		
}

function obterCampoPersonalizadoPeloID( idCampoPersonalizado, camposPersonalizadosBoard )
{
	var campoPersonalizado = undefined;
	
	for( indiceCampoPersonalizado = 0; indiceCampoPersonalizado < camposPersonalizadosBoard.length; ++indiceCampoPersonalizado )
	{
		var campoPersonalizadoBoard = camposPersonalizadosBoard[indiceCampoPersonalizado];
		
		if( campoPersonalizadoBoard['id'] == idCampoPersonalizado )
		{
			campoPersonalizado = campoPersonalizadoBoard;
			
			break;
		}
	}
	
	return campoPersonalizado;
}

function obterValoresOpcoesCampoPersonalizadoABAP( camposPersonalizadosBoard )
{
	var valoresOpcoesCampoPersonalizadoABAP = [];
	
	var idCampoPersonalizadoABAP = obterIDCampoPersonalizado( nomeCampoPersonalizadoABAP, camposPersonalizadosBoard );
	
	var campoPersonalizadoABAP = obterCampoPersonalizadoPeloID( idCampoPersonalizadoABAP, camposPersonalizadosBoard );
	
	var opcoesCampoPersonalizadoABAP = campoPersonalizadoABAP['options'];
	
	for( indiceOpcaoCampoPersonalizado = 0; indiceOpcaoCampoPersonalizado < opcoesCampoPersonalizadoABAP.length; ++indiceOpcaoCampoPersonalizado )
	{
		var opcaoCampoPersonalizadoABAP = opcoesCampoPersonalizadoABAP[indiceOpcaoCampoPersonalizado];
		
		valoresOpcoesCampoPersonalizadoABAP.push( opcaoCampoPersonalizadoABAP['value']['text'] );
	}
	
	return valoresOpcoesCampoPersonalizadoABAP;
}

function addDays( date, days )
{
	var result = new Date( date.valueOf() );
	
	result.setDate( result.getDate() + days );
	
	return result;
}

function obterProximaDataDisponibilidadeABAP( nomeABAP, cards, camposPersonalizadosBoard )
{
	var proximaDataDisponibilidadeABAP = { ABAP: nomeABAP, proximaDataDisponibilidade: '' };
	
	var idCampoPersonalizadoFimConstrucao = obterIDCampoPersonalizado( nomeCampoPersonalizadoFimConstrucao, camposPersonalizadosBoard );
	var idCampoPersonalizadoABAP = obterIDCampoPersonalizado( nomeCampoPersonalizadoABAP, camposPersonalizadosBoard );
	
	for( indiceCard = 0; indiceCard < cards.length; ++indiceCard )
	{
		var card = cards[indiceCard];
		
		var nomeCard = card['name'];
		
		if
		(
			nomeCard != nomeCardTicketExemplo
			&& nomeCard != nomeCardSIRExemplo
		)
		{
			var idCard = card['id'];
		
			carregarSincCamposPersonalizadosCard( idCard );
			
			var valorCampoPersonalizadoABAP = obterValorCampoPersonalizadoCard( idCampoPersonalizadoABAP, camposPersonalizadosCard['customFieldItems'], camposPersonalizadosBoard );
			
			if
			(
				valorCampoPersonalizadoABAP != undefined
				&& valorCampoPersonalizadoABAP['text'] == nomeABAP
			)
			{
				var valorCampoPersonalizadoFimConstrucao = obterValorCampoPersonalizadoCard( idCampoPersonalizadoFimConstrucao, camposPersonalizadosCard['customFieldItems'], camposPersonalizadosBoard );
				
				var dataFimConstrucao = new Date( valorCampoPersonalizadoFimConstrucao['date'] );
				
				var umDiaAposDataFimConstrucao = addDays( dataFimConstrucao, 1 );
				
				if
				(
					proximaDataDisponibilidadeABAP.proximaDataDisponibilidade == ''
					|| proximaDataDisponibilidadeABAP.proximaDataDisponibilidade < umDiaAposDataFimConstrucao
				)
				{
					proximaDataDisponibilidadeABAP.proximaDataDisponibilidade = umDiaAposDataFimConstrucao;
				}
			}
		}
	}
	
	if( proximaDataDisponibilidadeABAP.proximaDataDisponibilidade == '' )
	{
		proximaDataDisponibilidadeABAP.proximaDataDisponibilidade = new Date();
	}
	
	return proximaDataDisponibilidadeABAP;
}

function obterProximaDataDisponibilidadeABAPs( nomesABAP, cards, camposPersonalizadosBoard )
{
	var proximaDataDisponibilidadeABAPs = [];
	
	for( indiceNomeABAP = 0; indiceNomeABAP < nomesABAP.length; ++indiceNomeABAP )
	{
		var nomeABAP = nomesABAP[indiceNomeABAP];
		
		proximaDataDisponibilidadeABAPs.push( obterProximaDataDisponibilidadeABAP( nomeABAP, cards, camposPersonalizadosBoard ) );
	}
	
	return proximaDataDisponibilidadeABAPs;
}

function obterTextoDisponibilidadeTimeABAP( cards, camposPersonalizadosBoard )
{
	var textoDisponibilidadeABAP = '';
	
	var nomesABAP = obterValoresOpcoesCampoPersonalizadoABAP( camposPersonalizadosBoard );
	
	var proximaDataDisponibilidadeABAPs = obterProximaDataDisponibilidadeABAPs( nomesABAP, cards, camposPersonalizadosBoard );
	
	for( indiceProximaDataDisponibilidade = 0; indiceProximaDataDisponibilidade < proximaDataDisponibilidadeABAPs.length; ++indiceProximaDataDisponibilidade )
	{
		var proximaDataDisponibilidadeABAP = proximaDataDisponibilidadeABAPs[indiceProximaDataDisponibilidade];
		
		var diaDataDisponibilidadeABAP = proximaDataDisponibilidadeABAP.proximaDataDisponibilidade.getDate();
		var mesDataDisponibilidadeABAP = proximaDataDisponibilidadeABAP.proximaDataDisponibilidade.getMonth() + 1;
		var anoDataDisponibilidadeABAP = proximaDataDisponibilidadeABAP.proximaDataDisponibilidade.getFullYear();
		
		textoDisponibilidadeABAP += '<tr><th scope="row">' + proximaDataDisponibilidadeABAP.ABAP + ':</th><td>a partir de '
									+ diaDataDisponibilidadeABAP + '/' + mesDataDisponibilidadeABAP + '/' + anoDataDisponibilidadeABAP + '</td></tr>';
	}
	
	return textoDisponibilidadeABAP;
}

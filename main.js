function partidas(vitorias, derrotas) {
    let resultado = vitorias - derrotas
    return resultado
  }
  
  function rankeamento() {
    let numeroDeVitorias = partidas(121, 20)
    let nivel = ""
    if (numeroDeVitorias <= 10) {
      nivel = "Ferro"
    } else if (numeroDeVitorias <= 20) {
      nivel = "Bronze"
    } else if (numeroDeVitorias <= 50) {
      nivel = "Prata"
    } else if (numeroDeVitorias <= 80) {
      nivel = "Ouro"
    } else if (numeroDeVitorias <= 90) {
      nivel = "Diamante"
    } else if (numeroDeVitorias <= 100) {
      nivel = "Lendário"
    } else if (numeroDeVitorias >= 100) {
      nivel = "Imortal"
    }
    return `O Herói tem de saldo de ${numeroDeVitorias} e está no nível de ${nivel}`
  }
  
  console.log(rankeamento())
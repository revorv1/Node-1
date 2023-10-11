function calcularGasto(distancia, tipoCombustivel) {
      let kmPorLitro = 0;
      if(tipoCombustivel == "gasolina") {
            kmPorLitro = distancia / 16
      }
      if(tipoCombustivel == "etanol") {
            kmPorLitro = distancia / 11
      }
      console.log(kmPorLitro)
     return kmPorLitro
      
  }calcularGasto(1000, "gasolina")
  module.exports = {calcularGasto}


function generarCodigoMixto() {
    // Obtener un número aleatorio entre 0 y 999
    const numeroAleatorio = Math.floor(Math.random() * 1000);
    // Formatear el número con ceros a la izquierda si es necesario
    const numeroFormateado = parseInt(numeroAleatorio.toString().padStart(3, '0'))

    // Obtener tres letras aleatorias del alfabeto
    const alfabeto = 'abcdefghijklmnopqrstuvwxyz';
    const primeraLetra = alfabeto[Math.floor(Math.random() * 26)];
    const segundaLetra = alfabeto[Math.floor(Math.random() * 26)];
    const terceraLetra = alfabeto[Math.floor(Math.random() * 26)];

    // Combinar el número formateado y las letras para obtener el código mixto
    const codigoMixto = primeraLetra + segundaLetra + terceraLetra +numeroFormateado;
    return codigoMixto;
}

// Ejemplo de uso:
const codigoGenerado = generarCodigoMixto();
module.exports= generarCodigoMixto()
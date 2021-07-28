let peca = "torre";

switch (peca){
    case "bispo":
        console.log("Bispo => Diagonais.");
            break;
    case "peao":
        console.log("Peão => Anda para frente.");
            break;
    case "rainha":
        console.log("Rainha => Anda em qualquer direção e quantas casas quiser.");
            break;
    case "rei":
        console.log("Rei => Anda em qualquer direção, mas apenas 1 casa.");
            break;
    case "cavalo":
        console.log("Cavalo => Anda no formato de 'L'.")
            break;
    case "torre":
        console.log("Torre => Anda sempre na vertical ou horizontal e anda quantas casas quiser.")
            break;
    default:
        console.log("Esta peça não existe.")
}
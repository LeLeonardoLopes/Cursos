<?php 

echo "Bem vindo ao screen Match!\n";

$nomeFilme = "Top Gun - Maverick";
$anoLancamento = $argv[1] ?? 2022;

$somaDeNotas = 9 ;
$somaDeNotas += 6;
$somaDeNotas += 8;
$somaDeNotas += 7.5;
$somaDeNotas += 5; 

$notaFilme = $somaDeNotas/ 5;
$planoPrime = true;
$incluidoNoPlano = $planoPrime || $anoLancamento < 2020;

echo "Nome do filme: " .$nomeFilme ."\n"; 
echo "Nota do filme: " .$notaFilme ."\n";
echo "Ano de lançamento: " .$anoLancamento ."\n";

$textoIncluido = $incluidoNoPlano ? "Sim" : "Não";
echo "Incluído no plano: $textoIncluido\n";

if ($anoLancamento >= 2022) {
    echo "Esse filme é um lançamento.\n";
} else {
    echo "Esse filme não é um lançamento.\n";
}

echo str_repeat("-", 50 ), "\n";

Esercizio 1

Obiettivo: Leggere il contenuto di un file con l'uso di fs e Promise

La libreria 'fs' fornisce una serie di metodi per l'interazione con il file system e i file che vi sono dentro.

Per leggere il contenuto di un file è necessario, anzitutto importare la libreria con il seguente codice:

const fs = require('fs');

E successivamente usare il seguente metodo:

fs.readFile('nome o percorso del file', 'utf8', (err, data) => {
Operazioni varie
});

Attenzione! La lettura di un file non è immediata e comporta un delay più o meno grande in base alla grandezza del suo contenuto.

Si richiedere l'utilizzo di una Promise che permetta di gestire liberamente la lettura di un file.

Il parametro 'utf8' indica la codifica del file (maggiori info: https://it.wikipedia.org/wiki/Codifica_di_caratteri)

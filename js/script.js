
$(document).ready(function() {


// Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome ed età.

var student = {
  'nome': 'Giana',
  'cognome': 'Pinguino',
  'eta': '35',
};

// Stampare a schermo attraverso il for in tutte le proprietà.

for (var key in student) {
  $('#studente').append(key + ' : ' + student[key] + '</br>');
}

// Creare un array di oggetti di studenti.

var students = [
  {
    'nome': 'Mia',
    'cognome': 'Rossi',
    'eta': '25',
  },
  {
    'nome': 'Ciccio',
    'cognome': 'Dolo',
    'eta': '28',
  },
  {
    'nome': 'Giana',
    'cognome': 'Pinguino',
    'eta': '35',
  },
];

// Ciclare su tutti gli studenti e stampare per ognuno nome e cognome.

//----Prova senza if----
// for (var i = 0; i < students.length; i++) {
//   for (var key in students[i]) {
//     console.log(students[key].nome + ' ' + students[key].cognome);
//     // $('#studenti').append(key + ' : ' + students[i][key] + '</br>');
//     // $('#studenti').append(students[key].nome + ' ' + students[key].cognome + '</br>');
//   }
// }


for (var i = 0; i < students.length; i++){
    for (var key in students[i]){
        if (key == 'nome' || key == 'cognome') {
            $('#studenti').append(key + ': ' + students[i][key] + '</br>');
        }
    }
};

// Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

var nome = prompt('Inserisci il tuo nome');
var cognome = prompt('Inserisci il tuo cognome');
var eta = parseInt(prompt('Inserisci la tua età'));

students.push({
    'nome': nome,
    'cognome': cognome,
    'eta': eta,
});

// Ciclo per lista con solo nomi e cognomi

// for (var i = 0; i < students.length; i++){
//     for (var key in students[i]){
//         if (key == 'nome' || key == 'cognome') {
//             $('#studentiUp').append(key + ': ' + students[i][key] + '</br>');
//             console.log(key + ': ' + students[i][key]);
//         }
//     }
// };

//Ciclo per lista oggetti completa

for (var i = 0; i < students.length; i++){
    for (var key in students[i]){
            $('#studentiUp').append(key + ': ' + students[i][key] + '</br>');
    }
};

});

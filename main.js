// Con una chiamata ajax, recuperare i dischi musicali restituiti dall'api:
// https://flynn.boolean.careers/exercises/api/array/music
// Ciclare quindi i dischi e ottenuti e per ognuno di essi disegnare in pagina una card utilizzando handlebars.
// BONUS: creare una select con i generi dei dischi musicali (pop, rock, metal, jazz), tramite la quale si possono filtrare i dischi visualizzati (ad esempio: se nella tendina si seleziona il genere "metal", nella pagina saranno mostrati solo i dischi con il genere "metal").


$(document).ready(function() {

    $.ajax ({
        'url': 'https://flynn.boolean.careers/exercises/api/array/music',
        'method': 'GET',
        'success': function (data) {
            var response = data.response;

            var source = $("#disc-template").html();
            var template = Handlebars.compile(source);


// ************** si può fare il ciclo ''for in''??? DA PROVARE!!!

            for (var i = 0; i < response.length; i++) {
                var titolo = response[i]['title'];
                var copertina = response[i]['poster'];
                var genere = response[i]['genre'];
                var anno = response[i]['year'];
                var autore = response[i]['author'];

                var single_disc = {
                    'poster': copertina,
                    'title': titolo,
                    'author': autore,
                    'year': anno,
                    'genre': genere
                };

                var cd = template(single_disc);

                $('.cds-container').append(cd);
            }

        },

        'error': function () {
            console.log('Errore!');
        }
    });


});

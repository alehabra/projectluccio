(function() {

    const cella = document.getElementById("cella");
    
    //funzione apertura occhi inizio livello
    aperturaOcchi();


    function aperturaOcchi(){
        /*animazione apertura occhi*/  
        var svg = document.getElementById("occhio-sopra");
        var s = Snap(svg);
        /*variabili occhio sopra*/
        var occhioAperto = Snap.select('#aperto-sopra');
        var occhioChiuso = Snap.select('#chiuso-sopra');
        var occhioChiusoPoints = occhioChiuso.node.getAttribute('d');
        var occhioApertoPoints = occhioAperto.node.getAttribute('d');

        /*variabili occhio sotto*/
        var sottoAperto = Snap.select('#aperto-sotto');
        var sottoChiuso = Snap.select('#chiuso-sotto');
        var occhioSotChiusoPoints = sottoChiuso.node.getAttribute('d');
        var occhioSotApertoPoints = sottoAperto.node.getAttribute('d');

        var occhioChiusoAnim = function(){
            cella.classList.add("focus");
                occhioChiuso.animate({ d: occhioApertoPoints }, 1000, mina.backout, occhioApertoAnim); 
                sottoChiuso.animate({ d: occhioSotApertoPoints }, 1000, mina.backout, occhioApertoAnim);
        }

        var occhioApertoAnim = function(){
            cella.classList.remove("focus");
                occhioChiuso.animate({ d: occhioChiusoPoints }, 300, mina.backout, occhioChiusoAnim2);
                sottoChiuso.animate({ d: occhioSotChiusoPoints }, 300, mina.backout, occhioChiusoAnim2); 
        }
        var occhioChiusoAnim2 = function(){
            cella.classList.add("focus");
                occhioChiuso.animate({ d: occhioApertoPoints }, 1000, mina.backout, occhioApertoAnim2); 
                sottoChiuso.animate({ d: occhioSotApertoPoints }, 1000, mina.backout, occhioApertoAnim2);
        }
        var occhioApertoAnim2 = function(){
            cella.classList.remove("focus");
            occhioChiuso.animate({ d: occhioChiusoPoints }, 1000, mina.backout,);
            sottoChiuso.animate({ d: occhioSotChiusoPoints }, 1000, mina.backout, removeEyes);
        }
        
        /*animazione rimozione occhi*/
        var removeEyes = function(){
            cella.classList.add("focus");
            svg.classList.add("occhio-rimosso");
        }

        //inizializzazione funzione
        occhioChiusoAnim();


    }

})()
(function() {

    const cella = document.getElementById("cella");

    /*animazione apertura occhi*/  
    var svg = document.getElementById("demo-svg");
    var s = Snap(svg);
    var simpleCup = Snap.select('#chiuso-sopra');
    var fancyCup = Snap.select('#aperto-sopra');
    var simpleCupPoints = simpleCup.node.getAttribute('d');
    var fancyCupPoints = fancyCup.node.getAttribute('d');

      var toFancy = function(){
        cella.classList.add("focus");
        simpleCup.animate({ d: fancyCupPoints }, 1000, mina.backout, toSimple);  
      }
      var toSimple = function(){
        cella.classList.remove("focus");
        simpleCup.animate({ d: simpleCupPoints }, 1000, mina.backout, toFancy); 
      }
            
      toSimple();
    /*animazione apertura occhi*/  

})()
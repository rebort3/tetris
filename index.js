<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <title>TODO supply a title</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    </head>
    <body>
        <div id="mapa">mapa</div>

      <p>Puntuacio:<div id="punts"> </div> </p>

    </body>

<script>
  const jugador = {
    
    punts: 0,
    peces: 0,
    nivell: 1,
};

var Peça = function(forma, color, x, y)
        { this.forma = forma;
          this.color = color;
          this.x = x;  
          this.y = y;
          };

        function GeneraPecaAleatoria()
         { var peces = [
                 [[[0,0,0,0],[0,1,1,0],[0,1,1,0],[0,0,0,0]],"groc"],
                 [[[0,1,0,0],[0,1,0,0],[0,1,0,0],[0,1,0,0]],"lila"],
                 [[[0,0,0,0],[0,1,1,0],[1,1,0,0],[0,0,0,0]],"verd"],
                 [[[0,0,0,0],[0,1,1,0],[0,0,1,1],[0,0,0,0]],"roig"],
                 [[[0,1,0,0],[0,1,0,0],[0,1,1,0],[0,0,0,0]],"blau"],
                 [[[0,1,1,0],[0,1,0,0],[0,1,0,0],[0,0,0,0]],"taronga"],
                 [[[0,0,0,0],[1,1,1,0],[0,1,0,0],[0,0,0,0]],"morat"] ]
           var numeroAleatori = Math.round(Math.random()*6);                      
           return peces[numeroAleatori];     
       }


       function mapa()
         { var resultat = "<table border='1'>";
         var tauler = new Array();
         
           for (var i = 0; i < 25;i++)
          
            { resultat = resultat + "<tr>"

                tauler[i] = new Array();
                for (var j = 0; j<10;j++) 
                 { resultat = resultat + "<td id=0>";
                  
                    resultat = resultat + "0";
                    tauler[i][j] = new Array();
                   resultat = resultat + "</td>";
                   }
              resultat = resultat + "</tr>";
              }
            resultat = resultat + "</table>";

            return resultat;
           };                      
         

         

document.getElementById("mapa").innerHTML = mapa();
       
         function posarpunts() {
           
          document.getElementById('punts').innerText = jugador.punts;
}


 

                   

      
         
            </script>
            </html>

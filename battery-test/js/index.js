
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {        
        document.getElementById('button_iteraciones').addEventListener('click', this.onButtonIteracionesClick);
    },

    onButtonIteracionesClick: function(){

        var inicio = new Date().getTime();

        var serie = 0;

        for ( var j=1; j <= 5; j++ ){
            for ( var k=1; k <= 500000; k++ ){
                serie = serie + ( Math.log(k)/Math.LN2 ) + (3*k/2*j) + Math.sqrt(k) + Math.pow(k, j-1);
            }
        }

        var fin = new Date().getTime();
        var tiempo = fin - inicio;

        document.getElementById('resultado').innerHTML = tiempo + ' -> ' + serie;      
    }
};

app.initialize();
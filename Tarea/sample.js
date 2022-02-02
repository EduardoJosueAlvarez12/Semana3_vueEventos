const vueInstance = new Vue({
    el:"#app",
    data:{
        actColor:'#FFFFFF',
        inputText:''
    },
    methods:
    {
        tipoDeEntrada: function(event)
        {
            //obtenemos el valor de la entrada
            var character = event.key;

            

            //cambiamos el color dependiendo del tipo de caracter
            if(isNumeric(character)){
                //alert('La entrada ' + character + ' es un número');
                this.actColor='#BF0000';
            } else if(isLetter(character)){
                //alert('La entrada ' +  character + ' es una letra');
                this.actColor="#71FD8E";
            } else {
                //alert('La entrada ' +  character + ' es de otro tipo');
                this.actColor="#FCF76D";
            }

            //limpiamos el input
            this.inputText=''
        }
    }
});

//verifica que sea un número y que no sea un espacio
function isNumeric(chr) {
    return !isNaN(chr) && !isNaN(parseFloat(chr));
  }

//verifica si es una letra
function isLetter(str) {
    return str.length === 1 && str.match(/[a-z]/i);
}
    // Crea una lista de números pares del 2 al 20 utilizando un bucle while.
     var listas=[];
    var i=0;
    while(i<=20){
        listas.push(i);
        i=i + 2;
    }
    console.log("lista de numeros"+ listas);

    // Crea una lista de números impares del 1 al 19 utilizando un bucle for.
    var listaImpar=[];
    for(var index=1; index<=19;index++){
        if(index % 2==1);
       listaImpar.push(index);
    }
    console.log("Lista de numeros impares: "+ listaImpar);
   
    // Crea una lista de comida.
  var comida=["pizza", "tortilla", "macarrones"];
    console.log("Lista de comida: "+ comida);

    // Agrega un elemento al principio de la lista de comida que creaste en el ejercicio anterior.
    comida.unshift("aceitunas");
    console.log("Lista de comida editada: " +comida)
    // Accede al segundo elemento de la lista de comida y cambia su valor por otro diferente.
     comida[1]= "patatas";
    console.log(comida
    // Recorre la lista de comida utilizando un bucle while y muestra cada elemento en la consola.
    var i= 0
    while(i< comida.length){
        console.log(comida[i]);
        i= i+ 1
    }
    // Crea una función que reciba una lista como parámetro y devuelva el último elemento de la lista.
    function verUltimoEnLaLista(lista){
        return num1+ num2;
    }
 var numeros = [1,3,4,5,6,7,9];
    
    //Crea una función que reciba una lista de números 
    /**y un número y nos tiene que devolver
     *  si aparece el elemento en la lista o no */
    function ListaQueDevuelveNumeros(lista,numero){
        for(var i=0; i<lista.lenght; i++){
           if(lista[index]== numero){
            return true;
           }
        }
        return false;
    }
   
    // Crea una función que reciba una lista y un elemento como parámetros y agregue el elemento a la lista si no se encuentra en ella.
    
    // Crea una función que reciba una lista como parámetro y devuelva una nueva lista con los elementos de la lista original en orden inverso.
    
    // Crea una función que reciba una lista de números como parámetro y devuelva la suma de todos los números de la lista.
    
    // Crea una función que reciba una lista de números como parámetro y devuelva la media de todos los números de la lista.

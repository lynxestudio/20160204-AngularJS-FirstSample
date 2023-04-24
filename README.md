# Entiendo Angular: Un primer acercamiento

AngularJS es un framework open source escrito en JavaScript que sirve para implantar el patrón MVC del lado del cliente, lo que permite que puedan contruirse aplicaciones Web del tipo AJAX, por su poder expresivo se utiliza en la mayoría de proyectos SPA (Single Page Application).

Qué es SPA?
SPA (Single page Application) es una aplicación en la cual se tiene una página principal como contenedor y varias vistas contenidas dentro este contenedor que pueden refrescarse independientemente de la página principal evitando así hacer una petición de toda la página completa, lo que ayuda a hacer eficiente el ancho de banda sobretodo en aplicaciones móviles.

Las ventajas de Angular son:

Proporciona la capacidad de crear SPA de una manera clara y mantenible
Le proporciona una capacidad de data binding al HTML, lo que proporciona una experiencia responsiva al usuario.
El código hecho con Angular se puede probar mediante pruebas unitarias (Unit Testing)
Utiliza la inyección de dependencias para la separación de responsabilidades.
Proporciona componentes reutilizables ya que las vistas son páginas HTML y la lógica de procesamiento se lleva a cabo por los controllers (controladores) escritos en JavaScript.
Angular es compatible entre la mayoría de las plataformas (Android, IOS) y navegadores.
Puede combinarse con otras bibliotecas para JavaScript por ejemplo: Kendo UI y Jquery.
Hay dos conceptos básicos para empezar con Angular, uno es el $scope y el otro es la utilización de directives (directivas), para ejemplificar su uso, mostraré una página que despliega un lista de filósofos de cada país la cual es posible filtrar al escribir el nombre en un control INPUT.

¿Qué es el scope?
Una buena separación de aspectos no permite que la lógica de negocio se mezcle con la vista, así que todo el procesamiento se realiza mediante el controlador el cuál es el que enlaza los datos hacia la vista. Una parte integral para trabajar con angular es el llamado scope que en realidad es un alias para el ViewModel es decir el componente que permite que se comuniquen la vista y el controlador.

Aquí el código fuente del archivo MenuAngular.js el cuál contiene el JSON y la declaración del controller.



Aquí el código fuente de la página HTML:


¿Qué son las directives?
Son atributos HTML que llaman funciones pertenecientes al framework para extender de manera dinámica la funcionalidad del elemento HTML al cual pertenecen, esta es la manera básica de crear elementos HTML específicos para la aplicación, encapsular estructuras DOM complejas o manipular las hojas de estilo.

A continuación una breve descripción de las directivas que se utilizaron en el ejemplo:

ng-app: Esta directiva sirve para incluir e iniciar AngularJS y que se pueda utilizar en un página HTML. Generalmente esta directiva va en la etiqueta BODY o en HTML.
          <!doctype html>
<html ng-app="App">
        
ng-controller: Esta directiva indica que controlador se va a utilizar en esa página o vista. Angular nos permite tener múltiples instancias de el mismo controlador en la aplicación, permitiéndonos reutilizar un montón de código.
    <body ng-controller="SimpleCtrl">      
        
ng-repeat: Con esta directiva se puede enumerar o iterar en una lista de objetos similar a recorrer un de un arreglo con la instrucción foreach de algunos lenguajes de programación. Adicionalmente a esta directiva le agrego la directiva filter:Name la cuál establece el filtro de búsqueda dentro del arreglo, en este caso el filtro es el valor de la variable enlazada con ng-model.
          <ul>
                    <li ng-repeat="menu in menus">{{menu.Name}}
                    <ul ng-repeat="submenu in menu.Children | filter:Name">
                        <li>{{ submenu.Name }}</li>
                    </ul>
                    </li>
                </ul>
        
ng-model: Esta directiva sirva para enlazar el valor de una variable a un control HTML, generalmente se utiliza con los controles INPUT.
          <td><label for="inputSearch" class="control-label">Search:</label></td>
                <td><input type="text" id="inputSearch" class="field-value" ng-model="Name"/></td>
        
Las siguientes imágenes muestran la página en su ejecución.
Fig 1 La página HTML en ejecución.



Fig 2 Ejemplo de una búsqueda con una coincidencia.



Fig 3 Una búsqueda con dos coincidencias.

# Proyecto final: Hooks y Estado Global

Este proyecto demuestra el uso de tres técnicas diferentes para manejar la lógica de una aplicación en React:

1. useRouter: Un enrutador manual para entender el funcionamiento de las SPAs.
2. useContext: Uso de la API nativa de React para compartir información de usuario.
3. Zustand: Integración de una tienda de estado global externa.


Actividad 10%
Christian Perez Vega
Universidad de la Costa. Barranquilla, (Colombia) cperez73@cuc.edu.co  

Desarrollo web Full Satck – Presencial – 17287
 
Hook usecontext: El useContext es un Hook de React que permite compartir datos entre múltiples componentes sin tener que pasar props manualmente en cada nivel (lo que se conoce como prop drilling). Pertenece a la librería React y se usa junto con la Context API.

¿Qué hace?
Es la forma nativa de React para gestionar un estado global simple. Permite pasar datos a través del árbol de componentes sin tener que pasar "props" manualmente en cada nivel (evita el prop drilling).

¿Cómo funciona?
•	Creas un Contexto: Usando createContext().
•	Proveer el Contexto: Enuelves a los componentes hijos en un <Context.Provider>.
•	Consumir el Contexto: Usas el hook useContext en cualquier componente hijo para acceder a los datos.


Hook useRouter: es una de las herramientas más fundamentales en Next.js. Básicamente, es el control remoto que te permite manipular la navegación y acceder a la información de la URL de forma programática.

¿Qué hace?
Su función principal es darte acceso al objeto router dentro de componentes funcionales. Con él puedes:
•	Navegar a otras páginas sin recargar el navegador.
•	Regresar a la página anterior (back).
•	Refrescar la página actual (refresh).	
•	Pre-cargar rutas para que la transición sea instantánea (prefetch).

¿Cómo funciona?
Cuando invocas el hook, Next.js te devuelve un objeto con métodos específicos. Internamente, este hook se comunica con el framework para manejar el historial del navegador (History API) de manera eficiente, optimizando la carga de componentes.


Zustand: es una librería de gestión de estado global. Hace lo mismo que useContext + useReducer, pero de una forma mucho más simple, rápida y con menos código (menos "boilerplate").

¿Qué hace?
Menos renders innecesarios: En Context, si un valor cambia, todos los componentes que consumen ese context se re-renderizan. Zustand 
•	es más inteligente: solo se actualiza el componente que usa la propiedad específica que cambió.
•	Sin Providers: No necesitas envolver toda tu app en mil capas de Providers en main.jsx.
•	Sencillez: No necesitas crear archivos complejos; creas un "store" y lo usas donde quieras.

¿Cómo funciona?
Se basa en un Store (una tienda de datos). Es un objeto que contiene el estado y las funciones para modificarlo.

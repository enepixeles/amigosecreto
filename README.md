# Challenge "Amigo Secreto" - Oracle One Next Education G9

Este proyecto es parte del **Challenge "Amigo Secreto"** del curso **Oracle One Next Education, Grupo 9**. Se trata de una aplicación web sencilla que permite a los usuarios ingresar nombres de amigos y luego realizar un sorteo aleatorio para seleccionar uno de ellos.

## 🚀 Tecnologías Utilizadas

*   **HTML5**: Estructura base de la aplicación.
*   **CSS3**: Estilos y diseño responsivo para una experiencia de usuario agradable.
*   **JavaScript**: Lógica principal para agregar amigos, realizar el sorteo y manipular el DOM.

## ✨ Características Principales

*   **Entrada de Nombres**: Permite al usuario añadir amigos a una lista dinámica a través de un campo de texto.
*   **Validación de Entrada**:
    *   Verifica que el campo de nombre no esté vacío.
    *   Evita la adición de nombres duplicados.
*   **Sorteo Aleatorio**: Selecciona un nombre al azar de la lista de amigos ingresados.
*   **Visualización de Resultados**: Muestra claramente el amigo que ha sido sorteado.
*   **Interfaz Intuitiva**: Diseño limpio y funcional.

## 🎯 Objetivo del Challenge

El objetivo principal de este desafío fue **fortalecer las habilidades en lógica de programación y manipulación del DOM (Document Object Model)** utilizando JavaScript puro. Se puso énfasis en:

*   Gestión de arrays (`push`, `includes`, `length`).
*   Funciones y control de flujo (`if/else`, `return`).
*   Generación de números aleatorios (`Math.random()`, `Math.floor()`).
*   Interacción con el HTML y CSS desde JavaScript (`getElementById`, `createElement`, `textContent`, `appendChild`, `innerHTML`).

## 🛠️ Cómo Usar (Instrucciones Básicas)

1.  **Clonar el repositorio**:
    ```bash
    git clone [URL_DE_TU_REPOSITORIO]
    ```
2.  **Abrir `index.html`**:
    Navega hasta la carpeta del proyecto y abre el archivo `index.html` en tu navegador web preferido.

### Interacción con la aplicación:

1.  **Añadir Amigos**: Escribe el nombre de un amigo en el campo de texto y haz clic en el botón "Añadir". Los nombres aparecerán en la lista debajo.
2.  **Sortear Amigo**: Una vez que hayas agregado a tus amigos, haz clic en el botón "Sortear Amigo". La aplicación seleccionará y mostrará un amigo al azar.

## 📝 Consideraciones Importantes (Reflexiones del Desarrollador)

*   **Simplicidad del Sorteo**: Para cumplir con los objetivos del curso y las herramientas enseñadas, el sorteo actual selecciona **un único amigo al azar** de la lista. No implementa un sistema de "Amigo Secreto" donde cada persona regala a otra sin auto-asignarse (un ciclo de regalos), lo cual implicaría algoritmos de barajado más complejos (como Fisher-Yates con validación de auto-asignación) que exceden el alcance actual de este desafío. El enfoque se centró en la generación de un índice aleatorio y la extracción de un elemento.
*   **Interacción con el DOM**: Se ha priorizado la manipulación directa del DOM para agregar y mostrar elementos, lo que refuerza los conceptos de JavaScript básico para interactuar con la interfaz de usuario.
*   **Reusabilidad y Mantenibilidad**: El código está estructurado en funciones claras (`agregarAmigo`, `sortearAmigo`) para facilitar su lectura y posible extensión futura.

## 🚀 Próximos Pasos (Posibles Mejoras Futuras)

*   Implementar una función para "Reiniciar" el juego (vaciar listas y arrays).
*   Permitir eliminar amigos de la lista.
*   Mejorar la interfaz de usuario con animaciones o transiciones.
*   Considerar un algoritmo de sorteo de "Amigo Secreto" más avanzado si se introducen nuevas herramientas.

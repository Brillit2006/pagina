const preguntas = [
        {"pregunta": "Que animal dice 'muu'?", "opciones": ["Vaca", "Cerdo", "Cabra", "Oveja"]},
        {"pregunta": "Que animal pone huevos?", "opciones": ["Gallina", "Vaca", "Perro", "Gato"]},
        {"pregunta": "Cual de estos vive en el agua?", "opciones": ["Pez", "Conejo", "Aguila", "Caballo"]},
        {"pregunta": "Que animal tiene una gran melena?", "opciones": ["Leon", "Tigre", "Elefante", "Jirafa"]},
        {"pregunta": "Cual de estos animales puede volar?", "opciones": ["Pajaro", "Perro", "Gato", "Rana"]},
        {"pregunta": "Que animal es muy lento?", "opciones": ["Tortuga", "Guepardo", "Liebre", "Delfin"]},
        {"pregunta": "Que animal tiene rayas blancas y negras?", "opciones": ["Cebra", "Jirafa", "Leon", "Elefante"]},
        {"pregunta": "Cual de estos es un insecto?", "opciones": ["Hormiga", "Raton", "Serpiente", "Pez"]},
        {"pregunta": "Que animal tiene una trompa larga?", "opciones": ["Elefante", "Jirafa", "Caballo", "Tigre"]},
        {"pregunta": "Que animal vive en la granja y nos da lana?", "opciones": ["Oveja", "Vaca", "Gallina", "Cerdo"]},
        {"pregunta": "Cual es un animal que salta y tiene una bolsa?", "opciones": ["Canguro", "Conejo", "Rana", "Ardilla"]},
        {"pregunta": "Que animal vive bajo tierra y es muy pequeno?", "opciones": ["Topo", "Elefante", "Jirafa", "Delfin"]},
        {"pregunta": "Cual de estos animales es un mamifero marino?", "opciones": ["Ballena", "Tiburon", "Pulpo", "Cangrejo"]},
        {"pregunta": "Que animal es famoso por su caparazon?", "opciones": ["Tortuga", "Elefante", "Jirafa", "Leon"]},
        {"pregunta": "Que animal hace 'cuac cuac'?", "opciones": ["Pato", "Gallina", "Vaca", "Perro"]},
        {"pregunta": "Que animal tiene plumas y pico?", "opciones": ["Pajaro", "Pez", "Serpiente", "Rana"]},
        {"pregunta": "Cual de estos animales vive en el Polo Norte?", "opciones": ["Oso polar", "Leon", "Mono", "Cocodrilo"]},
        {"pregunta": "Que animal tiene cuello muy largo?", "opciones": ["Jirafa", "Elefante", "Tigre", "Koala"]},
        {"pregunta": "Que animal vive en la selva y salta entre los arboles?", "opciones": ["Mono", "Vaca", "Caballo", "Pinguino"]},
        {"pregunta": "Que animal es muy astuto y tiene cola larga?", "opciones": ["Zorro", "Elefante", "Caballo", "Gallina"]},
        {"pregunta": "Que animal es muy grande y tiene colmillos?", "opciones": ["Elefante", "Raton", "Conejo", "Pez"]},
        {"pregunta": "Que animal vive en el mar y tiene tentaculos?", "opciones": ["Pulpo", "Delfin", "Tiburon", "Ballena"]},
        {"pregunta": "Cual de estos es un animal domestico?", "opciones": ["Perro", "Leon", "Cocodrilo", "Lobo"]},
        {"pregunta": "Que animal vive en el agua y respira con branquias?", "opciones": ["Pez", "Delfin", "Pulpo", "Tortuga"]},
        {"pregunta": "Que animal tiene escamas?", "opciones": ["Serpiente", "Conejo", "Elefante", "Caballo"]},
        {"pregunta": "Que animal hace 'guau guau'?", "opciones": ["Perro", "Gato", "Vaca", "Pato"]},
        {"pregunta": "Cual de estos animales es un reptil?", "opciones": ["Lagarto", "Raton", "Perro", "Caballo"]},
        {"pregunta": "Que animal pone huevos y nada en el agua?", "opciones": ["Pato", "Vaca", "Conejo", "Perro"]},
        {"pregunta": "Cual de estos animales es muy ruidoso en la manana?", "opciones": ["Gallo", "Tortuga", "Pez", "Hormiga"]},
        {"pregunta": "Que animal tiene orejas largas y come zanahorias?", "opciones": ["Conejo", "Elefante", "Pato", "Caballo"]},
        {"pregunta": "Que animal vive en la selva y ruge fuerte?", "opciones": ["Leon", "Pato", "Oveja", "Gato"]},
        {"pregunta": "Que animal vive en el bosque y come miel?", "opciones": ["Oso", "Raton", "Caballo", "Pez"]},
        {"pregunta": "Cual de estos tiene alas pero no vuela?", "opciones": ["Pinguino", "Aguila", "Colibri", "Murcielago"]},
        {"pregunta": "Que animal vive en los arboles y come hojas?", "opciones": ["Koala", "Pez", "Serpiente", "Vaca"]},
        {"pregunta": "Que animal puede nadar y caminar?", "opciones": ["Cocodrilo", "Pez", "Ballena", "Serpiente"]},
        {"pregunta": "Que animal tiene manchas negras y corre muy rapido?", "opciones": ["Guepardo", "Tortuga", "Caracol", "Elefante"]},
        {"pregunta": "Cual de estos animales es venenoso?", "opciones": ["Serpiente", "Oveja", "Jirafa", "Caballo"]},
        {"pregunta": "Que animal vive en la casa y le gusta el sol?", "opciones": ["Gato", "Ballena", "Tigre", "Oso"]},
        {"pregunta": "Cual de estos tiene pico y repite sonidos?", "opciones": ["Loro", "Pez", "Perro", "Caballo"]},
        {"pregunta": "Que animal tiene un caparazon duro y es lento?", "opciones": ["Tortuga", "Conejo", "Delfin", "Elefante"]},
        {"pregunta": "Cual de estos animales canta en la manana?", "opciones": ["Gallo", "Pez", "Serpiente", "Jirafa"]},
        {"pregunta": "Que animal es muy pequeno y tiene seis patas?", "opciones": ["Hormiga", "Pajaro", "Perro", "Delfin"]},
        {"pregunta": "Que animal vive en la selva y se balancea?", "opciones": ["Mono", "Vaca", "Pinguino", "Tiburon"]},
        {"pregunta": "Que animal tiene dientes grandes y vive en el agua?", "opciones": ["Cocodrilo", "Conejo", "Caballo", "Oveja"]},
        {"pregunta": "Que animal tiene alas muy coloridas?", "opciones": ["Mariposa", "Gato", "Pez", "Rana"]},
        {"pregunta": "Que animal vive en la granja y dice 'oink'?", "opciones": ["Cerdo", "Caballo", "Oveja", "Gallina"]},
        {"pregunta": "Cual de estos animales vive en manadas?", "opciones": ["Lobo", "Arana", "Serpiente", "Tortuga"]},
        {"pregunta": "Que animal tiene la lengua larga y pegajosa?", "opciones": ["Camaleon", "Pez", "Caballo", "Conejo"]},
        {"pregunta": "Que animal hace 'miau'?", "opciones": ["Gato", "Perro", "Vaca", "Oveja"]},
        {"pregunta": "Cual de estos vive en madrigueras?", "opciones": ["Conejo", "Jirafa", "Ballena", "Aguila"]}
      ];

      const formulario = document.getElementById("quizForm");
      const totalPreguntas = preguntas.length;
      const valorPorPregunta = 10 / totalPreguntas;
      
      // Crear las preguntas con opciones múltiples e imágenes
      preguntas.forEach((pregunta, index) => {
        const div = document.createElement("div");
        div.className = "question";
        
        // Crear el título de la pregunta
        const titulo = document.createElement("p");
        titulo.textContent = `${index + 1}. ${pregunta.pregunta}`;
        div.appendChild(titulo);
        
        // Añadir imagen si existe
        if (pregunta.imagen) {
          const imagen = document.createElement("img");
          imagen.src = pregunta.imagen;
          imagen.alt = `Imagen para pregunta ${index + 1}`;
          imagen.className = "question-image";
          div.appendChild(imagen);
        }
        
        // Crear las opciones
        pregunta.opciones.forEach((opcion, opcionIndex) => {
          const opcionDiv = document.createElement("div");
          opcionDiv.className = "option";
          
          const input = document.createElement("input");
          input.type = "radio";
          input.id = `pregunta${index + 1}_opcion${opcionIndex + 1}`;
          input.name = `pregunta${index + 1}`;
          input.value = opcion;
          
          const label = document.createElement("label");
          label.htmlFor = `pregunta${index + 1}_opcion${opcionIndex + 1}`;
          label.textContent = opcion;
          
          opcionDiv.appendChild(input);
          opcionDiv.appendChild(label);
          div.appendChild(opcionDiv);
        });
        
        formulario.appendChild(div);
      });
      
      let tiempoRestante = 30 * 60;
      let timer;
      
      function iniciarTemporizador() {
        const temporizadorElemento = document.getElementById("temporizador");
        timer = setInterval(() => {
          const minutos = Math.floor(tiempoRestante / 60);
          const segundos = tiempoRestante % 60;
          temporizadorElemento.textContent = ` ${minutos}:${segundos.toString().padStart(2, "0")}`;
      
          if (tiempoRestante <= 0) {
            clearInterval(timer);
            mostrarResultados();
          }
      
          tiempoRestante--;
        }, 1000);
      }
      
      function mostrarResultados() {
        clearInterval(timer);
        
        // Recopilamos las respuestas seleccionadas
        const respuestas = [];
        let respuestasCorrectas = 0;
        
        preguntas.forEach((pregunta, index) => {
          const seleccionadas = document.querySelectorAll(`input[name="pregunta${index + 1}"]:checked`);
          let respuestaSeleccionada = "";
          
          if (seleccionadas.length > 0) {
            respuestaSeleccionada = seleccionadas[0].value;
            if (respuestaSeleccionada === pregunta.respuestaCorrecta) {
              respuestasCorrectas++;
            }
          }
          
          respuestas.push(respuestaSeleccionada);
        });
        
        const incompletas = respuestas.filter(resp => resp === "").length;
      
        if (incompletas > 0) {
          document.getElementById("resultados").textContent = `Te faltan ${incompletas} preguntas por responder.`;
        } else {
          const calificacion = (respuestasCorrectas * valorPorPregunta).toFixed(2);
          
          let resultadoHTML = `
            <p>Muy bien! Has completado todas las preguntas.</p>
            <p><strong>Tu calificacion es:</strong> ${calificacion} / 10</p>
            <p><strong>Respuestas correctas:</strong> ${respuestasCorrectas} de ${totalPreguntas}</p>
            <p><strong>Tus respuestas:</strong></p>
            <ul>`;
            
          preguntas.forEach((pregunta, index) => {
            const respuestaUsuario = respuestas[index];
            const esCorrecta = respuestaUsuario === pregunta.respuestaCorrecta;
            const estilo = esCorrecta ? "color: green;" : "color: red;";
            
            resultadoHTML += `
              <li style="${estilo}">
                <strong>${index + 1}. ${pregunta.pregunta}</strong><br>
                <img src="${pregunta.imagen}" alt="Imagen pregunta ${index + 1}" class="result-image"><br>
                Tu respuesta: ${respuestaUsuario || "No respondida"}<br>
                Respuesta correcta: ${pregunta.respuestaCorrecta}<br>
                ${esCorrecta ? "✓ Correcto" : "✗ Incorrecto"}
              </li>`;
          });
          
          resultadoHTML += "</ul>";
          document.getElementById("resultados").innerHTML = resultadoHTML;
        }
      }
      
      function iniciarSesion() {
        const usuario = document.getElementById("usuario").value.trim().toLowerCase();
        const contrasena = document.getElementById("contrasena").value;
      
        if (usuario === "scarlet" && contrasena === "1517") {
          document.getElementById("loginContainer").classList.add("oculto");
          document.getElementById("cuestionarioContainer").classList.remove("oculto");
          iniciarTemporizador(); 
        } else {
          document.getElementById("loginError").textContent = "Usuario o contrasena incorrectos.";
        }
      }
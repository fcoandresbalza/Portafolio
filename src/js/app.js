
document.addEventListener('DOMContentLoaded', function(){
    App();
})

function App(){
    navScroll();
    barraFija();
    mostrarElementos();
    seleccionado();
    btnPrincipal();
    btncontacto();
    ventanaModal();
}

function seleccionado(){
    const about = document.querySelector('.about');
    const proyectos = document.querySelector('.proyectos');

    window.addEventListener('scroll', function() {
        const posicion1 = about.getBoundingClientRect().top;
        const posicion2 = proyectos.getBoundingClientRect().top;
        const posicion3 = proyectos.getBoundingClientRect().bottom;
        const enlace1 = document.getElementById('enlace1');
        const enlace2 = document.getElementById('enlace2');
        const enlace3 = document.getElementById('enlace3');

        if(posicion1 <= 80 && posicion2 > 0 && posicion3 > 0){
            enlace1.classList.add('seleccionado');
            enlace2.classList.remove('seleccionado');
            enlace3.classList.remove('seleccionado');
        }
        if(posicion1 < 0 && posicion2 <= 80 && posicion3 > 0){
            enlace1.classList.remove('seleccionado');
            enlace2.classList.add('seleccionado');
            enlace3.classList.remove('seleccionado');
        }
        if(posicion1 < 0 && posicion2 < 0 && posicion3 <= 80){
            enlace1.classList.remove('seleccionado');
            enlace2.classList.remove('seleccionado');
            enlace3.classList.add('seleccionado');
        }
    })
}

function navScroll(){
    const enlaces = document.querySelectorAll('.navegacion-principal a');

    enlaces.forEach( enlace => {
        enlace.addEventListener('click', function(e){
            e.preventDefault();

            const ubicacion = e.target.attributes.href.value;
            const seccion = document.querySelector(ubicacion)
            seccion.scrollIntoView({behavior: "smooth"})

        })
    })
}

function btnPrincipal(){
    const btn = document.querySelector('#btn-principal');
 
    btn.addEventListener('click', function(e){
        e.preventDefault();

        const ubicacion = e.target.attributes.href.value;
        const seccion = document.querySelector(ubicacion)
        seccion.scrollIntoView({behavior: "smooth"})

    })
}

function btncontacto(){
    const btn = document.querySelector('#btn-contacto');
 
    btn.addEventListener('click', function(e){
        e.preventDefault();

        const ubicacion = e.target.attributes.href.value;
        const seccion = document.querySelector(ubicacion)
        seccion.scrollIntoView({behavior: "smooth"})

    })
}

function barraFija(){
    const header = document.querySelector('header');
    const barra = document.querySelector('.navegacion-principal');

    window.addEventListener('scroll', function(){
        const posicion = header.getBoundingClientRect().bottom
        if(posicion < 0){
            barra.classList.add('fijo');
        header.classList.add('espacio');
        } else {
            barra.classList.remove('fijo');
            header.classList.remove('espacio');
        }
    })
}

function mostrarElementos(){
    const about = document.querySelector('.about');
    const proyectos = document.querySelector('.proyectos');
    const contacto = document.querySelector('.contacto');

    window.addEventListener('scroll', function(){
        const posicion = about.getBoundingClientRect().top
        if(posicion < 300){
            about.style.opacity = '1';
            about.style.transition = 'all 0.8s ease';
        }
        if(posicion < -230){
            proyectos.style.opacity = '1';
            proyectos.style.transition = 'all 0.8s ease';
        }
        if(posicion < -850){
            contacto.style.opacity = '1';
            contacto.style.transition = 'all 0.8s ease';
        }
    })
}

function ventanaModal(){
    const proyectos = document.querySelector('.trabajos');

    proyectos.addEventListener('click', function(e){
        e.preventDefault();

        const link = e.target.parentElement
        console.log(link.firstElementChild.nextElementSibling.nextElementSibling.firstChild.textContent);

        const ventana = document.createElement('DIV');
        ventana.innerHTML = `
            <div class="contenedor">
                <img src="${link.firstElementChild.src}" alt="imagen proyecto">
                <h2>${link.firstElementChild.nextElementSibling.textContent}</h2>
                <p class"descripcion-visible">${link.firstElementChild.nextElementSibling.nextElementSibling.firstChild.textContent}</p>
                <a href="${link.href}" class="btn" target="_blank" rel="noreferrer noopener">Ver</a>
            </div>
        `;
        ventana.classList.add('modal');

        ventana.onclick = function(){
            const body = document.querySelector ('body');
            body.classList.remove('modal');
            body.classList.remove('fijar-body');
            ventana.remove();
        };

        const body = document.querySelector ('body');
        body.classList.add('fijar-body');
        body.appendChild(ventana);

    })
}

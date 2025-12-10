
// script.js
document.addEventListener('DOMContentLoaded', () => {
    let currentLang = 'es';

    const translations = {
        es: {
            title: 'Mi Portafolio',
            'nav-about': 'Sobre Mí',
            'nav-projects': 'Proyectos',
            'nav-skills': 'Habilidades',
            'nav-contact': 'Contacto',
            'name': 'Agustín Román',
            'portfolio': 'Portafolio',

            // SOBRE MÍ
            'about-title': 'Sobre Mí',
            'about-desc': `
                Busco mejores oportunidades de trabajo online a través de Freelancer para adquirir experiencia y crecer profesionalmente.<br>
                Tengo la disponibilidad necesaria para concentrarme plenamente en mi primer trabajo y una buena organización para afrontar futuros proyectos con la misma energía y compromiso.<br>
                Tengo experiencia en la enseñanza y el uso de herramientas de Microsoft Office (Word, Excel, Publisher, etc.), así como conocimientos de organización digital y gestión de archivos.<br>
                Si te interesa lo que ves aquí, hablemos y veamos si podemos hacer algo.
            `,

            // PROYECTOS
            'projects-title': 'Proyectos',

            'project1-title': 'Dashboar EN',
            'project1-desc': 'Este dashboard interactivo ofrece una visión integral del rendimiento de ventas de calzado, centrándose especialmente en el análisis del diferencial de precios a lo largo del tiempo y entre diferentes modelos. Permite a los usuarios explorar datos de ventas por región, año y modelo, identificando tendencias y patrones significativos.',
            'project1-view': 'Ver Más',
            'project1-download': 'Descargar',

            'project2-title': 'Goals',
            'project2-desc': 'Este proyecto de Excel permite visualizar datos y comparar el rendimiento frente a metas, usando gráficos y formato condicional para facilitar el análisis. El archivo contiene tres hojas:',
            'project2-list': `
                <li>Metas variables: Compara ventas reales vs. proyecciones por departamento.</li>
                <li>Goal x2: Muestra el rendimiento por vendedor frente a metas mínima y óptima, con cambio de color según resultados.</li>
                <li>Deliveries: Grafica los tiempos de entrega por ciudad, destacando los que superan el límite.</li>
            `,
            'project2-view': 'Ver Más',
            'project2-download': 'Descargar',

            'project3-title': 'Dashboard ES',
            'project3-desc': `
                Este archivo de Excel contiene un dashboard dinámico que permite analizar el rendimiento de ventas desde distintas perspectivas. 
                Está compuesto por gráficos visuales y segmentadores interactivos que facilitan el filtrado de datos por fecha, provincia, categoría y vendedor.
            `,
            'project3-view': 'Ver Más',
            'project3-download': 'Descargar',

            'project4-title': 'Comisiones',
            'project4-desc': 'Este proyecto de Excel está diseñado para calcular y asignar comisiones a vendedores, utilizando tanto tablas normales como tablas dinámicas (campo calculado).',
            'project4-view': 'Ver Más',
            'project4-download': 'Descargar',

            'project5-title': 'Formulario de registro de usuario',
            'project5-desc': `
                En este proyecto te presento un formulario de registro de usuario en Excel creado usando VBA (Módulos, UserForm y validación de datos en algunos campos).
                El formulario se inicia al presionar el botón y luego de rellenar el formulario presionar SAVE para enviar los datos a la tabla registro de la hoja DATA 
                (todos los campos son obligatorios excepto Phone Number en este caso).
            `,
            'project5-view': 'Ver Más',
            'project5-download': 'Descargar',

            // HABILIDADES
            'skills-title': 'Habilidades',
            'skills-desc': 'Voz, Audio, Vídeo e Imagen a texto - Texto a voz',
            'skills-strong': 'Fuertes',
            'skills-beginner': 'Principiante',
            'skills-other': 'Otros',

            // EXPERIENCIA
            'experience-title': 'Experiencia laboral',
            'experience-role-2': 'Técnico Electricista + Electrónicos + Informática',
            'experience-text-2': `2023 – 2025<br> Instalaciones y reparaciones eléctricas a particulares.<br> Reparación y mantenimiento de sistemas eléctricos.<br> Mantenimiento de PC, instalación de programas, configuración de sistemas.<br> Soporte técnico general.`,
            'experience-role-3': 'Profesor de informática',
            'experience-text-3': `2020 – 2023<br>
                Clases personalizadas para adultos y jóvenes, adaptadas al nivel de conocimiento inicial.<br>
                Enseñanza práctica de herramientas como Microsoft Word, Excel, PowerPoint y gestión de archivos.
            `,

            // CONTACTO
            'contact-title': 'Contacto'
        },
        en: {
            title: 'My Portfolio',
            'nav-about': 'About Me',
            'nav-projects': 'Projects',
            'nav-skills': 'Skills',
            'nav-contact': 'Contact',
            'name': 'Agustín Román',
            'portfolio': 'Portfolio',

            // ABOUT ME
            'about-title': 'About Me',
            'about-desc': `
                I'm looking for better opportunities in online work through Upwork, aiming to add experience and grow professionally.<br>
                I have the necessary availability to focus fully on the first job, and good organization to face future projects with the same energy and commitment.<br>
                I have experience teaching and using Microsoft Office tools (Word, Excel, Publisher, etc.) as well as knowledge of digital organization and file management.<br>
                If you are interested in what you see here, let's talk and see if we can achieve something together.
            `,

            // PROJECTS
            'projects-title': 'Projects',

            'project1-title': 'Dashboard EN',
            'project1-desc': 'This interactive dashboard provides an overview of footwear sales performance, focusing on price differential analysis over time and across models. Users can explore sales data by region, year, and model, identifying key trends.',
            'project1-view': 'View More',
            'project1-download': 'Download',

            'project2-title': 'Goals',
            'project2-desc': 'This Excel project allows users to view and compare performance against goals using charts and conditional formatting. It contains three sheets:',
            'project2-list': `
                <li>Variable Goals: Compares real sales vs. projections by department.</li>
                <li>Goal x2: Shows seller performance against minimum and optimal goals, with color changes depending on results.</li>
                <li>Deliveries: Graphs delivery times by city, highlighting those above the limit.</li>
            `,
            'project2-view': 'View More',
            'project2-download': 'Download',

            'project3-title': 'Dashboard ES',
            'project3-desc': `
                This Excel file includes a dynamic dashboard for analyzing sales performance from different perspectives. 
                It contains charts and slicers to filter by date, province, category, and seller.
            `,
            'project3-view': 'View More',
            'project3-download': 'Download',

            'project4-title': 'Commissions',
            'project4-desc': 'This Excel project calculates and assigns commissions using both regular and pivot tables (calculated field).',
            'project4-view': 'View More',
            'project4-download': 'Download',

            'project5-title': 'User Registration Form',
            'project5-desc': `
                In this project, I present a user registration form in Excel created using VBA (Modules, UserForm, and data validation in some fields).
                The form is launched by pressing a button, and after filling it out, clicking SAVE sends the data to the "registro" table in the DATA sheet 
                (all fields are required except for Phone Number in this case).
            `,
            'project5-view': 'View More',
            'project5-download': 'Download',

            // SKILLS
            'skills-title': 'Skills',
            'skills-desc': 'Speech, Audio, Video and Image to Text - Text to Speech',
            'skills-strong': 'Strong',
            'skills-beginner': 'Beginner',
            'skills-other': 'Others',

            // EXPERIENCE
            'experience-title': 'Work Experience',
            'experience-role-2': "Electrician Technician + Electronics + IT",
            'experience-text-2': `2023 – 2025<br> Electrical installations and repairs for private clients.<br> Repair and maintenance of electrical systems.<br> PC maintenance, software installation, system configuration.<br> General technical support.`,
            'experience-role-3': 'IT Instructor – Office Software and Administrative Secretarial Skills',
            'experience-text-3': `
                2020 – 2023 <br>
                Personalized classes for adults and youths, tailored to their beginner's level of knowledge.<br> 
                Practical teaching of tools such as Microsoft Word, Excel, PowerPoint and file management.
            `,

            // CONTACT
            'contact-title': 'Contact'
        }
    };

    const langToggle = document.getElementById('lang-toggle');

    if (!langToggle) return; // seguridad por si no encuentra el botón

    langToggle.addEventListener('click', () => {
        // Cambiar idioma
        currentLang = currentLang === 'es' ? 'en' : 'es';
        const texts = translations[currentLang];

        // Recorrer todas las claves y actualizar el DOM
        Object.keys(texts).forEach(id => {
            const element = document.getElementById(id);
            if (element) {
                // Usar innerHTML cuando hay <br>, <li>, etc.
                if (['project2-list', 'about-desc'].includes(id) || id.startsWith('experience-text')) {
                    element.innerHTML = texts[id];
                } else {
                    element.textContent = texts[id];
                }
            }
        });

        // Cambiar texto del botón
        langToggle.textContent = currentLang === 'es' ? 'English' : 'Español';
    });
});



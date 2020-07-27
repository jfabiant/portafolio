const fs = require('fs');
const path = require('path');

/**
 * GET /detalle-proyecto/:project_id
 */
exports.getDetalleProyecto = async (req, res) => {
    try {
        const project_id = req.params.project_id;

        let value = null;

        if (project_id == 1) {
            console.log("Proyecto 1");
            value = {
                projectName: "Desarrollador Backend",
                projectInfo: "Diseño e implementación de servicios RPA",
                projectImg: "b10.png",
                projectDescription: "Diseño e implementación de servicios RPA con la finalidad de extraer datos de la plataforma de mayoristas entel Perú automatizando el proceso de envio de datos al servicio de análisis empresarial Power BI generando un gran ahorro de tiempo para el sector de Business Intelligence.",
                projectRating: 4,
                projectClient: "Tawa Consulting s.a.c",
                projectWebsite: "https://www.entel.pe/",
                projectCompleted: "4 de Abril del 2020"
            }
        } else if (project_id == 2) {
            console.log("Proyecto 2");
            value = {
                projectName: "Desarrollador FullStack",
                projectInfo: "Diseño e implementación de un sistema",
                projectImg: "b9.png",
                projectDescription: "Diseño e implementación de un sistema capaz de evaluar a postulantes para puestos de trabajo, automatizando el proceso de pre-selección de candidatos, utilizando el framework ReactJS y Spring Boot en Amazon Web Services.",
                projectRating: 5,
                projectClient: "TECSUP",
                projectWebsite: "https://www.tecsup.edu.pe/",
                projectCompleted: "5 de Febrero del 2020"
            }
        } else if (project_id == 3) {
            console.log("Proyecto 3");
            value = {
                projectName: "Desarrollador Backend",
                projectInfo: "Diseño e implementación de servicios autónomos",
                projectImg: "b7.png",
                projectDescription: "Diseño e implementación de servicios autónomos orientados a la arquitectura de microservicios para mejorar elrendimiento y desempeño de aplicativos webs y móviles de la empresa, utilizando el entorno NodeJS.",
                projectRating: 4,
                projectClient: "Acceso Corp",
                projectWebsite: "https://acceso.com.pe/",
                projectCompleted: "14 de Marzo del 2019"
            }
        } else {
            console.log("Proyecto 4");
            value = {
                projectName: "Desarrollador Backend",
                projectInfo: "Diseño e implementación de la plataforma e-Learning",
                projectImg: "b8.png",
                projectDescription: "Diseño e implementación de la plataforma e-Learning PlayTec Edu para ofrecer clases y juegos virtuales a colegios socios de la empresa, utilizando el entorno NodeJS.",
                projectRating: 5,
                projectClient: "PlayTec S.A.C",
                projectWebsite: "https://www.app.playtecedu.com/",
                projectCompleted: "6 de Agosto del 2019"
            }
        }

        console.log(value);
        res.render('detalle-proyecto', { value: value });

    } catch (e) {
        console.log(e);
        res.status(500).send(e);
    }
};

/**
 * GET /detalle-noticia/:xid
 */
exports.getDetalleNoticia = async (req, res) => {
    try {

        const id = parseInt(req.params.xid);

        let value = null;

        switch (id) {
            case 1:

                value = {
                    id: 1,
                    "noticiaName": "Estados Unidos ya está desarrollando un Internet Cuántico que será imposible de hackear",
                    "noticiaInfo": "Llevamos casi 30 años usando Internet a nivel doméstico, y en esencia no ha cambiado demasiado. Pero la revolución está cerca. La Internet Cuántica ya está en marcha.",
                    "noticiaDescription1": `Últimamente hemos hablado mucho de avances tecnológicos que están en boca de todos, con la inteligencia artificial, los coches autónomos o los viajes a Marte. Pero existe otra revolución que puede ser incluso más importante: la informática cuántica. Estados Unidos ya está trabajando en un Internet Cuántico que será imposible de hackear.

        El Departamento de Energía de Estados Unidos anunció este viernes en la Universidad de Chicago que ha iniciado el desarrollo de una Internet Cuántica, que revolucionará las comunicaciones. La computación cuántica utiliza fotones de luz para transmitir información a nivel atómico, y una nueva unidad de información llamada qubit o cúbit, que sustituye al bit.
        
        La informática clásica se basa en la lógica binaria. La mínima unidad de información es el bit, que puede ser un 0 o un 1. La informática cuántica utiliza los estados del átomo para hacer funcionar los ordenadores. El cúbit, que sustituye al bit, puede ser al mismo tiempo 0 y 1, debido a las leyes de la mecánica cuántica aplicada a los átomos. Es lo que se llama superposición.`,
                    "noticiaDescription2": `En un supuesto Internet Cuántico los datos se manipulan a escala atómica, y se envían a través de fotones de luz. Estos fotones son tan rápidos y escurridizos, que son imposibles de interceptar por un supuesto hacker.

        La experiencia nos dice que nada es imposible de hackear, pero de momento la teoría es la que manda. Aún habrá que esperar para que esta Internet Cuántica se convierta en realidad. Según el Departamente de Energía, "el primer prototipo estará listo en unos diez años". Primero se usará en banca y salud, así como en agencias de seguridad y comunicación aérea.
        
        Puede que esta red ultrarrápida y ultrasegura tarde en llegar, pero la informática cuántica ya está funcionando en bancos y otras grandes empresas, gracias al primer ordenador cuántico comercial, el IBM Q System One. Y ya se utiliza para cosas como detectar fraudes en las tarjetas de crédito.`,
                    "noticiaCategory": "Technology",
                    "noticiaPhrase": `“Los grandes logros del hombre son el resultado de la transmisión de ideas y del entusiasmo”.`,
                    "noticiaAuthor": "Juan Antonio Pascual"
                }
                break;
            case 2:
                console.log("caso 2");
                value = {
                    id: 2,
                    "noticiaName": "Microsoft trabaja en 'aplicaciones innovadoras' para su nueva Surface Duo",
                    "noticiaInfo": "Microsoft se encuentra trabajando en distintas aplicaciones innovadoras totalmente optimizadas para la Surface Duo, para asegurarse un buen conjunto de aplicaciones para cuando el dispositivo se lance al mercado durante las próximas semanas.",
                    "noticiaDescription1": `Es cuestión de tiempo de que se acabe lanzando al mercado la esperada Surface Duo de Microsoft, un teléfono móvil de doble pantalla con Android que hará las delicias de aquellos amantes de la multitarea y la productividad.

        Al tratarse de un dispositivo enfocado a un nicho de mercado completamente nuevo, Microsoft se encuentra reclutando ingenieros y programadores para trabajar en aplicaciones innovadoras que puedan sacar el máximo provecho de esta tecnología. Y es que además de una optimización adecuada de aplicaciones propias como OneNote,  Outlook y Office, otras aplicaciones van a tener que adaptarse de manera adecuada para sacar el máximo provecho de la funcionalidad de doble pantalla del dispositivo.
        
        Los de Redmond están ahora mismo buscando un “ingeniero de desarrollo de software senior” para trabajar en aplicaciones y ecosistemas de Android para la Surface Duo. El seleccionado, trabajará con el equipo actual "para crear y construir aplicaciones innovadoras de Android que muestren la experiencia de doble pantalla de la Surface Duo”.`,
                    "noticiaDescription2": `A esto hay que unir que los de Redmond tienen activa una hoja de ruta de software para seguir la evolución del ecosistema Android e impulsarlo con nuevas aplicaciones y tecnologías móviles.

        Para ello también se encuentran reclutando otro tipo de ingenieros que van a optimizar esta experiencia para asegurarse que durante la vida útil del dispositivo, el usuario se encuentre con una gran cantidad de aplicaciones totalmente optimizadas.`,
                    "noticiaCategory": "Technology, Software",
                    "noticiaPhrase": `“Los grandes logros del hombre son el resultado de la transmisión de ideas y del entusiasmo”.`,
                    "noticiaAuthor": "David Hernández"
                }
                break;
            case 3:
                console.log("caso 3");
                value = {
                    id: 3,
                    "noticiaName": "This is what the new Windows 10 disk partition management tool looks like",
                    "noticiaInfo": "Microsoft is working on a new disk management tool for Windows 10 that will not only allow us to change the letters of the drives that we have available, but also to create or delete partitions in a very simple way.",
                    "noticiaDescription1": `Microsoft is working on a new disk management tool for Windows 10 that will be released in a next version of the operating system, and that will allow us to better manage disks to resize, format partitions or even change the letters of the drives. . Currently there is a storage space management tool in Windows 10, but it is hidden and does not have very efficient functions. That is why Redmond's are now working on a new, more modern disk partition management tool for the operating system, to be incorporated in a future update. This is demonstrated by the Build 20175 version of Windows 10, which is available to insider users, which already includes this new modern disk management tool as standard. The option is available through Windows 10 configuration, System, Storage and Management of disks and volumes. When accessing it, we are shown a list of the disks and volumes that we have available and also the partitions. When selecting some of the volumes we will see the options of "explore" and "properties". In "explore" we simply open the partition in the file explorer, while the "properties" option will allow us to manage the selected volume. There we can change the drive letter that is made by selecting the volume, open "properties" and simply clicking on "change drive letter". The page will also show us a graphic representation of the volume and available storage space. In it we can also select the option "change size", in case we want to reduce the volume when we do not have enough free space.`,
                    "noticiaDescription2": `When accessing it, we are shown a list of the disks and volumes that we have available and also the partitions. When selecting some of the volumes we will see the options of "explore" and "properties". In "explore" we simply open the partition in the file explorer, while the "properties" option will allow us to manage the selected volume. There we can change the drive letter that is made by selecting the volume, open "properties" and simply clicking on "change drive letter". The page will also show us a graphic representation of the volume and available storage space. In it we can also select the option "change size", in case we want to reduce the volume when we do not have enough free space.`,
                    "noticiaCategory": "Technology, Software",
                    "noticiaPhrase": `“Los grandes logros del hombre son el resultado de la transmisión de ideas y del entusiasmo”.`,
                    "noticiaAuthor": "David Hernández"
                }
                break;
        }

        res.render('detalle-noticia', { value: value });

    } catch (e) {
        console.log(e);
        res.status(500).send(e);
    }
};
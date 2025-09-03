export const projects = [
    {
        name: 'Manejo Administrativo de Cine FullStack',
        brand: 'Campuslands',
        description: 'Autorización y autenticación de sistema funcional de cine, El cual permite a través de el rol correcto gestionar peliculas, funciones, salas y sucursales de cine almacenados en base de datos gestionada con MongoDB. Incluye Verificación de solapamiento, uso de data transfer objects, modelo vista controlador. El desarrollo del Frontend fue incluido con HTML puro con modelo single web application.',
        tech: ['nodejs', 'expressjs', 'mongodb', 'css', "html", 'jwt', 'git'],
        repository: '',
        preview: 'images/acme_movies.png'
    },
    {
        name: 'Gestión de grupos de trabajo CLI',
        brand: 'Campuslands',
        description: "Gestión y reporte de grupos de trabajo con implementación de usuarios y tareas asignables. Guardado y extraxión en base de datos gestionada con MongoDB. incluye modulo que permite al usuario generar un reporte sobre los grupos de trabajo y sus usuarios y tareas asignadas. Inquirer fue usado para simular una aplicación CLI usando patrón de diseño Factory method.",
        tech: ["nodejs", 'mongodb', 'inquirer', 'bcrypt'],
        repository: 'https://github.com/sovm-Campuslands/Workspaces_Manager.git',
        preview: 'images/workspace_manager.png'
    }

]
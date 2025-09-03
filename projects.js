export const projects = [
    {
        name: 'Manejo Administrativo de Cine FullStack',
        brand: 'Campuslands',
        description: 'Autorización y autenticación de sistema funcional de cine, el cual permite, a través del rol correcto, gestionar películas, funciones, salas y sucursales de cine almacenadas en una base de datos gestionada con MongoDB. Incluye verificación de solapamiento, uso de Data Transfer Objects y modelo vista-controlador. El desarrollo del frontend fue realizado con HTML puro bajo el modelo de Single Web Application.',
        tech: ['nodejs', 'expressjs', 'mongodb', 'css', "html", 'jwt', 'git'],
        repository: '',
        preview: 'images/acme_movies.png'
    },
    {
        name: 'Gestión de grupos de trabajo CLI',
        brand: 'Campuslands',
        description: "Gestión y reporte de grupos de trabajo con implementación de usuarios y tareas asignables. Guardado y extracción en base de datos gestionada con MongoDB. Incluye módulo que permite al usuario generar un reporte sobre los grupos de trabajo, sus usuarios y tareas asignadas. Inquirer fue usado para simular una aplicación CLI utilizando el patrón de diseño Factory Method.",
        tech: ["nodejs", 'mongodb', 'inquirer', 'bcrypt'],
        repository: 'https://github.com/sovm-Campuslands/Workspaces_Manager.git',
        preview: 'images/workspace_manager.png'
    }

]
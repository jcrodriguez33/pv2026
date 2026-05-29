const usuarios = [
    {id:100, nombre: "Mariana Peres", fechaNacimiento:"2000-12-12" },
    {id:101, nombre: "Carlos Mamani", fechaNacimiento:"2003-11-22" },
    {id:102, nombre: "Mariana Garcia", fechaNacimiento:"2011-02-15" },
    {id:103, nombre: "Carla Perez", fechaNacimiento:"2001-02-21" },
    {id:104, nombre: "Carlos Ramos", fechaNacimiento:"2001-02-21" },
    {id:105, nombre: "Lorenzo Ramos", fechaNacimiento:"2001-02-21" },
    {id:106, nombre: "Liliana Cruz", fechaNacimiento:"2001-02-21" },
    {id:107, nombre: "Agustina Lamas", fechaNacimiento:"2001-02-21" },
    /* {id:108, nombre: "Cristan Flores", fechaNacimiento:"2001-02-21" },
    {id:109, nombre: "Dany", fechaNacimiento:"2001-02-21" }, */

];

export const obtenerUsuarios = () => usuarios;

export const eliminarUsuario = (id) => {    
    console.log(`Se eliminara el usuario con id ${id}`);
    usuarios.splice(usuarios.findIndex(u => u.id === id), 1);       
}
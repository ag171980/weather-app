let datos = JSON.parse(JSON.stringify(employees));//Convierto clientes.js en objeto
let tabla_empleados = document.getElementById("datos-empleados")//selecciono div con id = "datos-empleados"

function llenarEmpleados(datos) {
    for (let i = 0; i < datos.employees.length; i++) {
        tabla_empleados.innerHTML += `
        <tr>
        <td>${datos.employees[i].name}</td>
        <td>${datos.employees[i].age}</td>
        <td class="mx-5">${datos.employees[i].birthday}</td>
        <td>${datos.employees[i].telephone}</td>
        <td>${datos.employees[i].email}</td>
        <td>${datos.employees[i].area}</td>
        </tr>`;
    }
}
//llamada de funciones
llenarEmpleados(datos)//creo el contenido del <tbody> recorriendo lo que hay en el objeto

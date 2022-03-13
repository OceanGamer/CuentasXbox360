/*
Esta es una base de datos de prueba,
en un caso real, esto no se estructura así,
se usa un protocolo más estricto con la seguridad,
esto debería estar en la parte del servidor y no del cliente,
pero es un bosquejo para que ustedes sepan cómo es el algoritmo
*/


let link = document.createElement("link");
document.getElementsByTagName("head")[0].appendChild(link);

baseDeDatosLogin = JSON.parse(localStorage.getItem("sistema-de-login"));

let usuarioLogueado


if (!baseDeDatosLogin) {
  cargarDatosInicialesDeLaBaseDeDatosLogin();
}

function guardarDatosDeLaBaseDeDatosLogin() {
  localStorage.setItem("sistema-de-login", JSON.stringify(baseDeDatosLogin));
}

function cargarDatosInicialesDeLaBaseDeDatosLogin() {
  baseDeDatosLogin = {
    OceanGamer: {
      //Aquí se ponen los elementos por defecto del usuario
      contraseña: "Mods1008",
      puntaje: 0,
    },
    "0987654321": {
      //Aquí se ponen los elementos por defecto del usuario
      contraseña: "def",
      puntaje: 0,
    },
    98765434567: {
      //Aquí se ponen los elementos por defecto del usuario
      contraseña: "ghi",
      puntaje: 0,
    },
  };
}


async function mostrarUsuariosPorTabla(...propiedades) {
  if(!usuarioLogueado){
    return
  }
  let html = `
  <table class="table table-light table-striped">
    <theader>
    <th>
      Usuario
    </th>
  `;
  if (propiedades[0] == "*") {
    for (const usuario in baseDeDatosLogin) {
      for (const propiedad in baseDeDatosLogin[usuario]) {
        html += "<th>";
        html += propiedad;
        html += "</th>";
      }
      break;
    }
  } else {
    for (const propiedad of propiedades) {
      html += "<th>";
      html += propiedad;
      html += "</th>";
    }
  }
  html += "</theader><tbody>";
  for (const usuario in baseDeDatosLogin) {
    html += "<tr>";
    html += "<td>";
    html += usuario;
    html += "</td>";
    if (propiedades[0] == "*") {
      for (const propiedad in baseDeDatosLogin[usuario]) {
        html += "<td>";
        html += baseDeDatosLogin[usuario][propiedad];
        html += "</td>";
      }
    } else {
      for (const propiedad of propiedades) {
        html += "<td>";
        html += baseDeDatosLogin[usuario][propiedad];
        html += "</td>";
      }
    }

    html += "</tr>";
  }
  await swal.fire({
    text: "Usuarios",
    confirmButtonText: "Cerrar",
    html,
  });
}

async function login() {
    preConfirm: () => {
      let usuario = document.getElementById("user").value;
      let contraseña = document.getElementById("password").value;
      if (!usuario) {
        window.location.href = "https://nohayusuario.com";
        return false;
      }
      if (!contraseña) {
        window.location.href = "https://nohaycontraseña.com";
        return false;
      }
      let datos = baseDeDatosLogin[usuario];
      if (!datos) {
        window.location.href = "https://usuarioinexistente.com";
        return false;
      }
      if (datos.contraseña != contraseña) {
        window.location.href = "https://contraseñaincorrecta.com";
        return false;
      }
      usuarioLogueado = datos
      window.location.href = "https://continuar!.com";
      return true;
    },
  });
}

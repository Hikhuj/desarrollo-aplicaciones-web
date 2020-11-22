# desarrollo-aplicaciones-web
Curso de desarrollo de aplicaciones

### Clase 9 y 10
Para la clase de semana 10 el profe instaló axios en Windows. Esto se realiza ingresando a la carpeta del proyecto: ./wk09/wk09/ y hacer click derecho en la carpeta `ClientApp` y elegir la opcion de abrir con VS Code, luego ir a la terminal para poder instalar paquetes que se necesiten, esto es más fácil de este modo que el dolor de cabeza desde Visual Studio 2019.

Se instala el paquete `axios` por medio de `npm`

```console
  npm i bootstrap reactstrap axios
```

Una vez hecho esto se puede continuar con el proyecto.

### Base de Datos Comercio
Se debe tener instalado en MSMSS la base datos Comercio para que pueda funcionar con su respectivo string de conexion.
 - Abrir el archivo del proyecto `appstettings.json`
 - Agregar la siguiente línea de JSON al archivo para crear la conexión. Agregar al final del archivo dentro de la estructura JSON.
 - Sustituya `DESKTOP-VGVS681\\SQLEXPRESS` por el nombre de instancia que provee MSMSS al final de la instalación (puede verse haciendo click derecho en la conexión y luego propiedades (el primer row será el nombre conexión, en mi caso es esta)).

```json
  "ConnectionStrings": {
    // En este caso al ser un diseño local, se debe usar el nombre completo del servidor local y no usar "localhost"
    "Conexion": "Server= DESKTOP-VGVS681\\SQLEXPRESS; Database= Comercio; Integrated Security = SSPI;"
  }
```

Archivo completo

```json
  {
  "Logging": {
      "LogLevel": {
      "Default": "Information",
      "Microsoft": "Warning",
      "Microsoft.Hosting.Lifetime": "Information"
      }
    },
  "AllowedHosts": "*",
  "ConnectionStrings": {
    // En este caso al ser un diseño local, se debe usar el nombre completo del servidor local y no usar "localhost"
    "Conexion": "Server= DESKTOP-VGVS681\\SQLEXPRESS; Database= Comercio; Integrated Security = SSPI;"
  }
}
```

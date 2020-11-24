using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace wk09.Models
{
    public class Proveedores
    {
        /*
         * El primer atributo va a ser por lo general el PK de la base de datos
         * O bien el PRimary Key. Para identificarlo, podemos usar las propieades
         * de Data Annotations que nos permite usar ciertos tipos de tags para identificar mejor las cosas
         * Se debe usar importando la siguiente libreria:
         * using System.ComponentModel.DataAnnotations;
         * Existen otro tipo de palabras claves para usar pero deben leerse.
         */
        /* podemos usar la palabra clave [key] que nos ayuda a definir quien es la llave principal del proyecto*/
        [Key]
        public int Cod_Proveedor { get; set; }
        public string Nombre_Proveedor { get; set; }
        public string Telefono { get; set; }
        public string Direccion { get; set; }
    }
}

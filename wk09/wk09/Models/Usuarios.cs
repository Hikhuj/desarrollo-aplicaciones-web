using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace wk09.Models
{
    public class Usuarios
    {
        /* 
         * Creando lista de usuarios del modelo
         */
        [Key]
        [Required]
        public int Cod_Usuario { get; set; }
        [StringLength(100)]
        public string Nombre { get; set; }
        [StringLength(100)]
        public string Pri_Ape { get; set; }
        [StringLength(100)]
        public string Seg_Ape { get; set; }
        [Required]
        [StringLength(100)]
        public string Login { get; set; }
        [Required]
        [StringLength(100)]
        public string Pass { get; set; }
        [Required]
        [StringLength(9)]
        public string Confirmar_Pass { get; set; }
        public string Telefono1 { get; set; }
        [StringLength(9)]
        public string Telefono2 { get; set; }
        public Boolean Admin_Seg { get; set; }
        public Boolean Admin_Ad { get; set; }

}
}

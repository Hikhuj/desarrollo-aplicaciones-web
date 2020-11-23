using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using wk09.Context;
using wk09.Models;


// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace wk09.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProveedoresController : Controller
    {

        private readonly AppDbContext context;

        public ProveedoresController(AppDbContext context)
        {
            this.context = context;
        }

        // GET: api/<ProveedorController>
        [HttpGet]
        public ActionResult Get()
        {
            try
            {
                return Ok(context.Proveedores.ToList());
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        /* GET api/<ProveedorController>/5
         * Uno puede darle rutas diferentes a los Gets
         * Veamos la siguiente linea de codigo
         * Estamos sobreeescribiendo como el nombre de Get para obtener el valor, como enrutado.
         * [HttpGet("{id}", Name = "/ObtenerProveedor")]
         */
        [HttpGet("{id}", Name ="ObtenerProveedor")]
        public ActionResult Get(int id)
        {
            try
            {
                // La variable "r" es indiferente en lo que pongamos de nombre
                // Esto que sigue es un tipo de expresion que se puede llamar Blanda
                var proveedor = context.Proveedores.FirstOrDefault(r => r.Cod_Proveedor == id);
                return Ok(proveedor);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        /*
         * Los metodos POST son los metodos para enviar nueva informacion a la DB
         * Cuando se haga un INSERT en el POST, hacemos que el POST lo reciba como tal
         * Cuando no tenga problema, redireccionamos el metodo y retorna el mae que se esta insertando en la DB
         */
        // POST api/<ProveedorController>
        [HttpPost]
        public ActionResult Post([FromBody] Proveedores prov)
        {
            try
            {
                context.Proveedores.Add(prov);
                context.SaveChanges();
                return CreatedAtRoute("ObtenerProveedor", new{ id = prov.Cod_Proveedor}, prov);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // PUT api/<ProveedorController>/5
        [HttpPut("{id}")]
        public ActionResult Put(int id, [FromBody] Proveedores proveedor)
        {
            try
            {
                if (proveedor.Cod_Proveedor == id)
                {
                    context.Entry(proveedor).State = EntityState.Modified;
                    context.SaveChanges();
                    return CreatedAtRoute("ObtenerProveedor", new { id = proveedor.Cod_Proveedor }, proveedor);
                }
                else
                {
                    return BadRequest();
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // DELETE api/<ProveedorController>/5
        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            try
            {
                var proveedor = context.Proveedores.FirstOrDefault(r => r.Cod_Proveedor == id);
                if (proveedor != null)
                {
                    context.Proveedores.Remove(proveedor);
                    context.SaveChanges();
                    return Ok(id);
                }
                else
                {
                    return BadRequest();
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}

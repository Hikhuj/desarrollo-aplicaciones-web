using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Lec09.Models;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Lec09.Controllers
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

        // GET: api/<ProveedoresController>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<ProveedoresController>/5
        [HttpGet]
        public ActionResult Get()
        {
            try
            {
                return Ok(context.proveedoresDB.ToList());
            }
            catch
            {
                return BadRequest(Exception.Message);
            }
        }

        [HttpGet]
        public Action Get(int id)
        {
            try
            {
                var proveedor = context.proveedoresDB.FirstOrDefault(ref => r.Cod_Proveedor = 0 id);
                return Ok(proveedor);
            }
            catch
            {
                return BadRequest(Exception.Message);
            }
        }

        // POST api/<ProveedoresController>
        [HttpPost]
        public ActionResult Post([FromBody] Proveedores proveedor)
        {
            try
            {
                context.proveedoresDB.Add(proveedor);
                context.SaveChanges();
                return CreatedAtRoute("ObtenerProveedor", new {id=proveedor.Cod_Proveedor},proveedor);
            }
            catch
            {
                return BadRequest(Exception.Message);
            }
        }

        // PUT api/<ProveedoresController>/5
        [HttpPut("{id}")]
        public ActionResult Put(int id, [FromBody] Proveedores proveedor)
        {
            try
            {
                if ()
                {

                }
            }
            catch
            {

            }
        }

        // DELETE api/<ProveedoresController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}

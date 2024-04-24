import ListHeder from "../../components/ListHeader"
import { Link,useNavigate } from "react-router-dom"
import { api } from "../../utils/api";

const VendedoresCreate=()=>{
    const navigate=useNavigate();
    function handleSubmit(e){
        e.preventDefault();
        const {nombre,apellido,edad,correo_electronico,activo}=e.target
        const data={
            nombre: nombre.value ,
            apellido: apellido.value ,
            edad: edad.value ,
            correo_electronico: correo_electronico.value ,
            activo:activo.value
        }
        api.post("/vendedor",data,{
            headers:{
                "Content-Type":"application/json"
            }

        })
        .then((response)=>{
            console.log(response)
            setTimeout(()=>{
                navigate("/vendedor")
            },2000)
        })
        .catch((error)=>{

        })
    }
    return(
        <div>
            <div className="card w-100">
                <ListHeder listName={"Vendedor"} pageTitle={"Crear"} linkButton={{ "to": "/vendedor", "text": "Ir a vendedores" }} />
                <div className="card-body">
                    <form className="form" id="vendedores_filter"  onSubmit={handleSubmit}>
                        <div className="row">
                            
                            <div className="col-12 col-md-4 form-box">
                                <input
                                    className="form-control"
                                    type="search"
                                    placeholder="Nombre"
                                    name="nombre"
                                    aria-label="nombre"
                                    required
                                />
                            </div>
                            <div className="col-12 col-md-4 form-box">
                                <input
                                    className="form-control"
                                    type="search"
                                    placeholder="Apellido"
                                    name="apellido"
                                    aria-label="apelldo"
                                    required
                                />
                            </div>
                            <div className="col-12 col-md-4 form-box">
                                <input
                                    className="form-control"
                                    type="number"
                                    placeholder="Edad"
                                    name="edad"
                                    aria-label="edad"
                                    required
                                />
                            </div>
                            <div className="col-12 col-md-4 form-box">
                                <input
                                    className="form-control"
                                    type="text"
                                    placeholder="Correro Electronico"
                                    name="correo_electronico"
                                    aria-label="correo_electronico"
                                    required
                                />
                            </div>
                            <div className="col-12 col-md-4 form-box">
                                <select name="activo" id="activo" required>                                    
                                    <option
                                        value="true"
                                    >
                                        Activo
                                    </option>
                                    <option
                                        value="false"
                                    >
                                        Inactivo
                                    </option>
                                </select>
                            </div>
                        </div>
                        <br />
                        <input
                            className="btn btn-outline-success my-2 my-sm-0"
                            type="submit"
                            value="Guardar"
                        />
                        <Link to={"/vendedor"}>
                        <button type="button" className="btn btn-outline-danger my-2 my-sm-0" 
                        >Cancelar</button>
                        </Link> 
                    </form>
                </div>

                
            </div>
        </div>
    )
}
export default VendedoresCreate
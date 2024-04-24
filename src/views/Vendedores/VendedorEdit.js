import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import { Link,useNavigate } from "react-router-dom";
import { api } from "../../utils/api";
import Loading from "../../components/Loading";
import ListHeder from "../../components/ListHeader";
const VendedoresEdit = () => {
    const { id } = useParams();
    const navigate=useNavigate();

    const [loading, setLoading] = useState(true);
    const [fields, setFields] = useState({
        _id: 0,
        nombre: '',
        apellido: '',
        edad: '',
        correo_electronico: '',
        activo: '',

    });
    function handleSubmit(e) {
        e.preventDefault()        
        
        api.put("/vendedor/"+id,fields,{
            withCredentials:true,
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
            console.log(error)
        })
    }
    useEffect(() => {
        async function fetchVendedor() {
            let vendedorApi = await api.get("/vendedor/" + id, {
                data: {},
                headers: {
                    "Content-Type": "application/json"
                }
            })

            
            setFields({
                 _id: vendedorApi["data"]["_id"], nombre: vendedorApi["data"]["nombre"], apellido: vendedorApi["data"]["apellido"], edad: vendedorApi["data"]["edad"],
                correo_electronico: vendedorApi["data"]["correo_electronico"], activo: vendedorApi["data"]["activo"]
            })            
            setLoading(false)
        }
        fetchVendedor()
        
    }, [id])
    
    return (
        <>
            {loading ? <Loading /> :
                (<div>
                    <div className="card w-100">
                        <ListHeder listName={"Vendedor"} pageTitle={"Editar"} linkButton={{ "to": "/vendedor", "text": "Ir a vendedores" }} />
                        <div className="card-body">
                            <form className="form" id="vendedores_filter" onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-12 col-md-4 form-box">
                                        <input
                                            className="form-control"
                                            type="number"
                                            placeholder="ID"
                                            name="_id"
                                            aria-label="nombre"
                                            disabled
                                            value={fields["_id"]}
                                            
                                        />
                                    </div>
                                    <div className="col-12 col-md-4 form-box">
                                        <input
                                            className="form-control"
                                            type="search"
                                            placeholder="Nombre"
                                            name="nombre"
                                            aria-label="nombre"
                                            required
                                            value={fields["nombre"]}
                                            onChange={(e)=>{
                                                const newValue=e.target.value
                                                setFields({...fields,nombre:newValue})
                                            }}
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
                                            value={fields["apellido"]}
                                            onChange={(e)=>{
                                                const newValue=e.target.value
                                                setFields({...fields,apellido:newValue})
                                            }}
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
                                            value={fields["edad"]}
                                            onChange={(e)=>{
                                                const newValue=e.target.value
                                                setFields({...fields,edad:newValue})
                                            }}
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
                                            value={fields["correo_electronico"]}
                                            onChange={(e)=>{
                                                const newValue=e.target.value
                                                setFields({...fields,correo_electronico:newValue})
                                            }}
                                        />
                                    </div>
                                    <div className="col-12 col-md-4 form-box">
                                        <select name="activo" id="activo" 
                                        value={fields["activo"]}
                                        onChange={(e)=>{
                                            const newValue=e.target.value==="true"
                                            setFields({...fields,activo:newValue})
                                        }}
                                        >
                                            
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
                </div>)
            }
        </>

    )
}
export default VendedoresEdit
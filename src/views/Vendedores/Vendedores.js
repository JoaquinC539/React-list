import { Link} from "react-router-dom";
import ListHeder from "../../components/ListHeader";
import { useEffect, useState } from "react";
import { api } from "../../utils/api";
import Loading from "../../components/Loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePen } from "@fortawesome/free-solid-svg-icons/faSquarePen";
import Paginator from "../../components/Paginator/Paginator";

const Vendedores = () => {
    
    const [vendedores, setVendedores] = useState([]);
    const [count, setCount] = useState(null);
    const [loading, setLoading] = useState(true);
    const [filters, setFilters] = useState({
        _id: '',
        nombre: '',
        apellido: '',
        edad: '',
        correo_electronico: '',
        activo: '',
        max: 10, 
        offset: 0,
      });
    
    


    useEffect(() => {
        const fetchVendedores = async () => {
            try {
                const urlFetchParams=new URLSearchParams(filters)
                let url = "/vendedor?" + urlFetchParams.toString();
    
                const vendedores = await api.get(url, {
                    withCredentials: true,
                    data: {}
                });
                setCount(vendedores.data.count);
                setVendedores(vendedores.data.data);
    
                setLoading(false);
            } catch(error) {
                console.log(error)
            }
    
        }
        fetchVendedores()
    }, [ filters])
        
    function handleFilterSubmit(e) {
        e.preventDefault();     
        const {_id,nombre,apellido,edad,correo_electronico,activo}=e.target
        setFilters({
            ...filters,
            _id: _id.value || '',
            nombre: nombre.value || '',
            apellido: apellido.value || '',
            edad: edad.value || '',
            correo_electronico: correo_electronico.value || '',
            activo: activo.value || ''            
          });
    }
    function removeFormFilter(){
        window.location.reload();
          
    }
    return (
        <div>
            <div className="card w-100">
                <ListHeder listName={"Vendedor"} pageTitle={"Index"} linkButton={{ "to": "/vendedor/create", "text": "Nuevo Vendedor" }} />
                <div className="card-body">
                    <form className="form" id="vendedores_filter" onSubmit={handleFilterSubmit}  >
                        <div className="row">
                            <div className="col-12 col-md-4 form-box">
                                <input
                                    className="form-control"
                                    type="number"
                                    placeholder="ID"
                                    name="_id"
                                    aria-label="nombre"
                                    
                                />
                            </div>
                            <div className="col-12 col-md-4 form-box">
                                <input
                                    className="form-control"
                                    type="search"
                                    placeholder="Nombre"
                                    name="nombre"
                                    aria-label="nombre"
                                />
                            </div>
                            <div className="col-12 col-md-4 form-box">
                                <input
                                    className="form-control"
                                    type="search"
                                    placeholder="Apellido"
                                    name="apellido"
                                    aria-label="apelldo"
                                />
                            </div>
                            <div className="col-12 col-md-4 form-box">
                                <input
                                    className="form-control"
                                    type="number"
                                    placeholder="Edad"
                                    name="edad"
                                    aria-label="edad"
                                />
                            </div>
                            <div className="col-12 col-md-4 form-box">
                                <input
                                    className="form-control"
                                    type="text"
                                    placeholder="Correro Electronico"
                                    name="correo_electronico"
                                    aria-label="correo_electronico"
                                />
                            </div>
                            <div className="col-12 col-md-4 form-box">
                                <select name="activo" id="activo">
                                    <option value="">Selecciona una opcion</option>
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
                            value="Filtrar"
                        />
                        <button type="button" className="btn btn-outline-danger my-2 my-sm-0" onClick={removeFormFilter}
                        >Remover filtros</button>
                    </form>
                </div>

                <div className="card-body table-responsive">
                    {loading ? <Loading /> :
                        (
                            <>
                                <table className="table align middle table-stripped" id="app-table">
                                    <thead>
                                        <tr>
                                            <th className="text-center">Acciones</th>
                                            <th className="text-center">ID</th>
                                            <th className="text-center">Nombre</th>
                                            <th className="text-center">Apellido</th>
                                            <th className="text-center">Edad</th>
                                            <th className="text-center">Correo Electronico</th>
                                            <th className="text-center">Activo</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {vendedores.map((vendedor, index) => (
                                            <tr key={index}>
                                                <td className="text-truncate text-center">
                                                    <Link to={"/vendedor/" + vendedor._id}>
                                                        <FontAwesomeIcon icon={faSquarePen} style={{ color: "#74C0FC", fontSize: "1.3em" }} />
                                                    </Link>
                                                </td>
                                                <td
                                                    className="text-truncate text-center"

                                                >{vendedor._id}</td>
                                                <td
                                                    className="text-truncate text-center"

                                                >{vendedor.nombre}</td>
                                                <td
                                                    className="text-truncate text-center"

                                                >{vendedor.apellido}</td>
                                                <td
                                                    className="text-truncate text-center"

                                                >{vendedor.edad}</td>
                                                <td
                                                    className="text-truncate text-center"

                                                >{vendedor.correo_electronico}</td>
                                                <td
                                                    className="text-truncate text-center"

                                                >{vendedor.activo ? 'Activo' : 'Inactivo'}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                <Paginator count={count} filters={filters} setFilters={setFilters} />
                            </>
                        )
                    }
                </div>
            </div>
        </div>
    );
}
export default Vendedores;
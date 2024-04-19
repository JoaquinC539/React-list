import { Link } from "react-router-dom";
import ListHeder from "../../components/ListHeader";
import { useEffect, useState } from "react";
import { api } from "../../utils/api";
import Loading from "../../components/Loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePen } from "@fortawesome/free-solid-svg-icons/faSquarePen";

const Vendedores = () => {
    const [vendedores, setVendedores] = useState([]);
    const [count, setCount] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchVendedores = async (params = null) => {
            let url = "/vendedor?"
            if (params !== null) {
                const urlParams = new URLSearchParams(params);
                url += "?" + urlParams
            }
            const vendedores = await api.get(url, {
                withCredentials:true,
                data: {}
            });
            setCount(vendedores.data.count);
            setVendedores(vendedores.data.data);
            console.log(vendedores)
            setLoading(false);
        }
        fetchVendedores();
    }, [])
    function handleFilterSubmit(e) {
        e.preventDefault();
        console.log("filter")
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
                        <Link className="btn btn-outline-danger my-2 my-sm-0" to={"/vendedor"}
                        >Remover filtros</Link>
                    </form>
                </div>

                <div className="card-body table-responsive">
                    {loading ? <Loading /> :
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
                                {
                                    vendedores.map((vendedor, index) => (
                                        <tr key={index}>
                                            <td className="text-truncate text-center" >
                                                <Link to={"/vendedor/edit/" + vendedor._id}>
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
                                    ))
                                }
                            </tbody>
                        </table>
                    }
                </div>
            </div>
        </div>
    );
}
export default Vendedores;
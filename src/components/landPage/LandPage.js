import '../../App.css'
import LinksNav from '../LinksNav'
const LandPage = (props) => {
    const title = "Java/Spring/React Project"

    const {links}=props

    
    
    return (
        <div>
            <div className='card'>
                <div className="card-title text-center mb-2">
                    <h1>{title}</h1>
                </div>
                <div className="card-body mb-2 text-body-secondary text-center">
                    <p>Este es un proyecto enfocado en el uso de Java Spring y react, donde:</p>
                    <p>Spring es un framework de aplicación web con una sintaxis expresiva y elegante para crear aplicaciones full-stack.
                        Spring promueve las siguientes características:</p>
                    <ul>
                        <li className="list-group-item">Motor de enrutamiento simple y rápido.</li>
                        <li className="list-group-item">Contenedor de inyección de dependencias potente.</li>
                        <li className="list-group-item">Múltiples almacenes para sesiones y caché.</li>
                        <li className="list-group-item">ORM de base de datos expresivo e intuitivo.</li>
                        <li className="list-group-item">Migraciones de esquema independientes de la base de datos.</li>
                    </ul>
                    <h2>Routes to the other dummy models: </h2>

                    <LinksNav links={links}></LinksNav>
                    
                </div>
            </div>
        </div>
    )
}
export default LandPage
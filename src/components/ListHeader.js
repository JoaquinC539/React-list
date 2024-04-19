import { Link } from "react-router-dom";

const ListHeder=({listName,pageTitle,linkButton})=>{
return(
    <>
    <div className="card-subtitle text-center mb-2">{listName}</div>
    <div className="card-subtitle  mb-2 text-body-secondary text-center">{pageTitle}</div>
    <div className="card-subtitle">
        <div className="d-flex justify-content-center">

            <Link className="btn btn-primary" type="button" to={linkButton["to"]}>{linkButton["text"]}</Link>
        </div>
    </div>
    <br/>
    </>
)
    
}
export default ListHeder;
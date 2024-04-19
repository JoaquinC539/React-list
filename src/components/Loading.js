import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons/faSpinner";

const Loading=()=>{
    return(
        <div className="d-flex justify-content-center">
                    <FontAwesomeIcon icon={faSpinner} spinPulse style={{color: "#B197FC",fontSize:"2em"}} />
                    </div>
    )
}
export default Loading;
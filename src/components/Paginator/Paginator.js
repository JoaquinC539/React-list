import { useEffect, useState } from 'react';

const Paginator=({count,filters,setFilters})=>{
    const [selectedPage,setSelectedPage]=useState(1);
    const [totalPages,setTotalPages]=useState(1)
    const [elementsArray,setElementsArray]=useState([]);
    const [localMax,setLocalMax]=useState(10)
    let timeoutId = null;
    
    
    useEffect(()=>{
        if(filters["max"]===0 || filters["max"]===""){
            setFilters({...filters,max:1})
        }
        setTotalPages(Math.ceil(count / filters["max"]));
        setElementsArray(Array.from({length:totalPages},(_,index)=>index+1))
        
    },[count,filters,totalPages,setFilters]);
    
    function handlePageChange(page){
        setSelectedPage(page)
        const offset=(page-1)*filters["max"];
        setFilters({...filters,offset:offset})
    }
    function handlePageSizeChange(event){
        clearTimeout(timeoutId);       
        const newValue = event.target.value;
        let validatedValue = isNaN(newValue) || newValue < 0 ? 1 : Number(newValue);
        setLocalMax(validatedValue)
        
        timeoutId=setTimeout(()=>{
            if(validatedValue===0){
                validatedValue=1;
            }
            setFilters({...filters,max:validatedValue,offset:0})
        },1000)
    }
    
    return(
        <div className='paginator' id='paginator'>
            {
             elementsArray.map((item,index)=>(
                <button type='button' key={index}
                className={`relative inline-flex items-center px-4 py-2 -ml-px text-sm font-medium text-gray-500  border border-gray-300 cursor-default leading-5 dark:bg-gray-800 dark:border-gray-600 active-page
                ${item===selectedPage ? 'bg-primary white-text':''} `}
                onClick={()=>handlePageChange(item)} >{item}</button>
             ))  
            }
            <input  type='number' className='form-control w-25' placeholder='Registros por pagina'  value={localMax} onChange={handlePageSizeChange} />
        </div>
    )

}
export default Paginator
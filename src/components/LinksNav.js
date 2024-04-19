import { Link } from 'react-router-dom'
const LinksNav=(props)=>{
    
    const {links}=props
    const maxLinksPerNav=6;
    const numNavBars = Math.ceil(links.length / maxLinksPerNav);
    return(
        <>        
        {Array.from({length:numNavBars}).map((_,navIndex)=>(
            <nav className="navbar bg-body-tertiary" key={navIndex}>
                <div className="container-fluid">
                    {links.slice(navIndex*maxLinksPerNav,(navIndex+1)*maxLinksPerNav).map((link,linkIndex)=>(
                        <Link key={linkIndex} className='navbar-brand navbar-link' to={link.to}>{link.label}</Link>
                    ))}
                </div>
            </nav>
        ))}
        </>
    )
}
export default LinksNav
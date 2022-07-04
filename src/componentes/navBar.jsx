  const Lista = () => { //componente 1
    return(
        <div style={{fontSize : 18 , margin : 0, lineHeight: 5 , padding:0}}>
            <ul type= "circle" style={{justifyContent: "space-evenly", display:"flex"}}>
                <li style={{padding: 10}}><a href="#">Inicio</a></li>
                <li style={{padding: 10 }}><a href="#">Nosotros</a></li>
                <li style={{padding : 10}}><a href="https://www.instagram.com/sicko.ind/">Contacto</a></li>
            </ul>
        </div>
    )
}

const Logo = () => { //componente 2 (el cual no puedo exportar con el logo --> Sicko JPG.jpg)
    return(
        <div style={{}}>
            <img src="" alt="logo" />
        </div>
    )
    }
        
export default Lista
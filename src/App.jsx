import logo from './logo.svg'
import './App.css'
import Lista from './componentes/navBar'
import Menu from './componentes/navBar'

function App() {
   
  const styleApp = {backgroundColor: 'beige', fontFamily: 'Arial'}

  const saludo = () => {
    alert('Bienvenidos al sitio web de SickoIndumentaria')
  }

  return (

    <div 
      className="App"
      style={styleApp}
    >

      <div style={{fontSize: 40, backgroundColor: 'black', color : 'white' }}>
        ''Bienvenido a la tienda virtual de Sicko Indumentaria''
      </div>

      <div style={{textAlign:'left'}}>
        *logo png que no logre colocar*
      </div>
        <Lista />

        

    </div>
  
  )
}

export default App

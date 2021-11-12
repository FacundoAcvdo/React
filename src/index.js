//1_ Importar libreria React
import React from 'react'
//2_ Importar libreria ReactDOM
import ReactDOM from 'react-dom'
//3_ Importar componente
import App from './App'
import './css/estilos.css'

//4_Renderizar componente
ReactDOM.render(
    <App />,
    document.getElementById('root')
)
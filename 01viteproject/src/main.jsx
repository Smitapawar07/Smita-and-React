import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

function MyApp() {
  return(
    <div>
      <h1>hijio!  </h1>
    </div>
  )
  
}
// const anotherElement=(
//   <a href="https://google.com" target ="-blank">visit me</a>
// )


const reactElement = React.createElement(
  'a',
  {href :'https://google.com' , target: '_blank'},
  'click me'
)
ReactDOM.createRoot(document.getElementById('root')).render(
 <App />
)

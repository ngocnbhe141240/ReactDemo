import React from 'react' // nạp thư viện react
import ReactDOM from 'react-dom' // nạp thư viện react-dom
import FuntionComponent from './components/FunctionComponent'
// Tạo component App
function App() {
    return (
        <div className=''>
            <FuntionComponent />
        </div>
    )
}

// Render component App vào #root element
ReactDOM.render(<App />, document.getElementById('root'))


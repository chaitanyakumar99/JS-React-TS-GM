import React from 'react'
import Message from './Message/Message'
import {Provider} from 'react-redux'
import {store} from './redux/store'
import Product from './Product/Product'
const App = () => {
  return (
    <div>
       <Provider store={store}>
        <h2>App Component</h2>
        <Product/>

        </Provider>
    </div>
  )
}

export default App
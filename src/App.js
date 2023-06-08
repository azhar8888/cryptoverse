
import './App.css';
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd'

import { Navbar, Exchanges, Homepage, Cryptocurrencies, News, CryptoDetails } from './components'

function App() {

  return (
    <div className='app'>
      <div className='navbar'>
        <Navbar />

      </div>

      <div className='main'>
        <Layout>

          <div className='routes'>




            <Routes>
              <Route exact path='/' element={<Homepage />} />


              <Route exact path='/exchnages' element={<Exchanges />} />


              <Route exact path='/cryptocurrencies' element={<Cryptocurrencies />} />


              <Route exact path='/crypto/:coinId' element={<CryptoDetails />} />


              <Route exact path='/news' element={<News />} />
            </Routes>


           



          </div>

        </Layout>
        <div className='footer' >
          <Typography.Title level={5} style={{color:'white' ,  textAlign:'center'}}>
            Cryptoverse <br></br>
            All Right Reserved

          </Typography.Title>
         
      </div>



      </div>



    </div>
  );
}

export default App;

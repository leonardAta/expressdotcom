import React from 'react'
import './Home.css'
import Commodity from './Commodity'

const Home = () => {
  return (
    <div className='home'>
      <div className='home_container'>
        <img className='home_image' 
        // src='https://images.unsplash.com/photo-1514607996448-c10684beaaee?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c2FuJTIwZnJhbmNpc2NvJTIwc2hvcHBpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
        src='https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2021/journeys/MzBiNjIyYjgt/MzBiNjIyYjgt-NzY0NTFiMGYt-w3000._CB665430291_.jpg'
        alt='' 
        />
        <div className='home_row'>
          <Commodity 
            id='099873'
            title='Express X Fourlaps Logo Signature Fleece Crewneck'
            price={33.99}
            rating={5}
            image='https://images.express.com/is/image/expressfashion/0022_05321077_0904?cache=on&wid=361&fmt=jpeg&qlt=75,1&resmode=sharp2&op_usm=1,1,5,0&defaultImage=Photo-Coming-Soon'         
          />
          <Commodity 
            id='088340'
            title='Express X Fourlaps Logo Signature Tee'
            price={48.00}
            rating={5}
            image='https://images.express.com/is/image/expressfashion/0022_04771023_0086?cache=on&wid=361&fmt=jpeg&qlt=75,1&resmode=sharp2&op_usm=1,1,5,0&defaultImage=Photo-Coming-Soon'
          />
          <Commodity 
            id='077560'
            title='Express X Fourlaps Smash Tee'
            price={54.00}
            rating={5}
            image='https://images.express.com/is/image/expressfashion/0022_04771022_0904?cache=on&wid=361&fmt=jpeg&qlt=75,1&resmode=sharp2&op_usm=1,1,5,0&defaultImage=Photo-Coming-Soon'
          />
          {/* <Commodity 
            id='055123'
            title='Express X Fourlaps Command Training Short'
            price={68.00}
            rating={5}
            image='https://images.express.com/is/image/expressfashion/0026_03532679_0086?cache=on&wid=361&fmt=jpeg&qlt=75,1&resmode=sharp2&op_usm=1,1,5,0&defaultImage=Photo-Coming-Soon'
          />
          <Commodity 
            id='044123'
            title='Express X Fourlaps Rush Hoodie'
            price={98.00}
            rating={5}
            image='https://images.express.com/is/image/expressfashion/0022_05321034_0086?cache=on&wid=361&fmt=jpeg&qlt=75,1&resmode=sharp2&op_usm=1,1,5,0&defaultImage=Photo-Coming-Soon'
          />
          <Commodity 
            id='033890'
            title='Express X Fourlaps Rush Jogger'
            price={88.00}
            rating={5}
            image='https://images.express.com/is/image/expressfashion/0025_03042680_0086?cache=on&wid=361&fmt=jpeg&qlt=75,1&resmode=sharp2&op_usm=1,1,5,0&defaultImage=Photo-Coming-Soon'
          /> */}
        </div>

      </div>
    </div>
  )
}

export default Home

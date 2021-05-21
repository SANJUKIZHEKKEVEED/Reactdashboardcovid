import React, { useEffect , useState } from 'react'
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardGroup from 'react-bootstrap/CardGroup';
import CardColumns from 'react-bootstrap/CardColumns';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';
import './App.css';
import images from './images/flag.png';

function App() {


 
  const [data,setData] = useState([]);
  const [data1,setData1] = useState([]);
  const [data2,setData2] = useState([]);
  const [data3,setData3] = useState([]);
  const [data4,setData4] = useState([]);
  const [data5,setData5] = useState([]);
  const [data6,setData6] = useState([]);
  const [data7,setData7] = useState([]);
  const [data8,setData8] = useState([]);
  const [data9,setData9] = useState([]);
  
  const getConvidData = async () =>

  {

      try 
      {
        const res = await fetch('https://api.covid19india.org/data.json');
        const actualdata = await res.json();
        setData(actualdata.statewise[0]);
        setData2(actualdata.statewise[16]);
        setData1(actualdata.statewise[17]);
        setData3(actualdata.statewise[32]);
        setData4(actualdata.statewise[2]);
        setData5(actualdata.statewise[21]);
        setData6(actualdata.statewise[9]);
        setData7(actualdata.statewise[35]);
        setData8(actualdata.statewise[7]);
        setData9(actualdata.statewise[20]);
        
      }

      catch (err)
      {
              console.error(err);
      }
    
  }


 
 

  useEffect(() => {
   
    getConvidData();

}, []);




  return (
   
<div>

   <CardGroup >
           
   <Card bg = "warning" border="success" style={{ width: '18rem' }} className="text-center" style={{margin: "8px"}}>
    <img src={'myGov.jpg'}  /> 
      {/* <Card.Img variant="top" src="https://camo.githubusercontent.com/2546957f2e3fe70025be6d9ac31e04e0d3495cab60003b412e2ae9ef15265bae/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f342f34312f466c61675f6f665f496e6469612e737667" fluid />  */}
     
      <Card.Body>
        <Card.Title >#IndiaFightsCorona </Card.Title>
        <Card.Text>
         
        </Card.Text>

      </Card.Body>
    </Card>
  </CardGroup >



    
    
    
    <CardGroup >
           
  <Card bg = "info" text="white" className="text-center" style={{margin: "10px"}}>
   
    <Card.Body>
      <Card.Title>Total Active Cases</Card.Title>
      <Card.Text>
      {data.active}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small >{data.lastupdatedtime}</small>
    </Card.Footer>
  </Card>
  <Card bg = "success" text="white" className="text-center" style={{margin: "10px"}}>
    
    <Card.Body>
      <Card.Title>Total Recovered</Card.Title>
      <Card.Text>
      {data.recovered}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <medium >{data.lastupdatedtime}</medium>
    </Card.Footer>
  </Card>
  <Card bg = "danger" text="white" className="text-center" style={{margin: "10px"}}>
  
    <Card.Body>
    <Card.Title>Total Death</Card.Title>
      <Card.Text>
      {data.deaths}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small >{data.lastupdatedtime}</small>
    </Card.Footer>
  </Card>

</CardGroup>

{/* SECODN LINE */}
<CardGroup>
  <Card className="text-center" style={{margin: "10px"}}> 
   
    <Card.Body>
    {/* <Card.Header bg = "success">{data1.state}</Card.Header> */}
    <Card.Title style={{ color: 'blue' }}>{data1.state}</Card.Title>
      <Card.Text>
      <ListGroup variant="flush">
   
    <ListGroup.Item style={{ color: 'red' }}>Total Active {data1.active}</ListGroup.Item>
    <ListGroup.Item>Total Recovered {data1.recovered}</ListGroup.Item>
    <ListGroup.Item>Total Deaths {data1.deaths}</ListGroup.Item>
  </ListGroup>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small >{data1.lastupdatedtime}</small>
    </Card.Footer>
  </Card>
  <Card className="text-center" style={{margin: "10px"}}> 
   
    <Card.Body>
      <Card.Title style={{ color: 'blue' }} >{data2.state}</Card.Title>
      <Card.Text>
      <ListGroup variant="flush">
   
   <ListGroup.Item style={{ color: 'red' }} >Total Active {data2.active}</ListGroup.Item>
   <ListGroup.Item>Total Recovered {data2.recovered}</ListGroup.Item>
   <ListGroup.Item>Total Deaths {data2.deaths}</ListGroup.Item>
 </ListGroup>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small >{data2.lastupdatedtime}</small>
    </Card.Footer>
  </Card>
  <Card className="text-center" style={{margin: "10px"}}> 
   
    <Card.Body>
      <Card.Title style={{ color: 'blue' }}>{data3.state}</Card.Title>
      <Card.Text>
      <ListGroup.Item style={{ color: 'red' }}>Total Active {data3.active}</ListGroup.Item>
   <ListGroup.Item>Total Recovered {data3.recovered}</ListGroup.Item>
   <ListGroup.Item>Total Deaths {data3.deaths}</ListGroup.Item>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small >{data3.lastupdatedtime}</small>
    </Card.Footer>
  </Card>
</CardGroup>

{/* 
ThirD LinE */}

<CardGroup>
  <Card className="text-center" style={{margin: "10px"}}> 
   
    <Card.Body>
    {/* <Card.Header bg = "success">{data4.state}</Card.Header> */}
    <Card.Title style={{ color: 'maroon' }}>{data4.state}</Card.Title>
      <Card.Text>
      <ListGroup variant="flush">
   
    <ListGroup.Item  style={{ color: 'red' }}>Total Active {data4.active}</ListGroup.Item>
    <ListGroup.Item>Total Recovered {data4.recovered}</ListGroup.Item>
    <ListGroup.Item>Total Deaths {data4.deaths}</ListGroup.Item>
  </ListGroup>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small >{data4.lastupdatedtime}</small>
    </Card.Footer>
  </Card>
  <Card className="text-center" style={{margin: "10px"}}> 
   
    <Card.Body>
      <Card.Title style={{ color: 'maroon' }}>{data5.state}</Card.Title>
      <Card.Text>
      <ListGroup variant="flush">
   
   <ListGroup.Item  style={{ color: 'red' }}>Total Active {data5.active}</ListGroup.Item>
   <ListGroup.Item>Total Recovered {data5.recovered}</ListGroup.Item>
   <ListGroup.Item>Total Deaths {data5.deaths}</ListGroup.Item>
 </ListGroup>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small >{data5.lastupdatedtime}</small>
    </Card.Footer>
  </Card>
  <Card className="text-center" style={{margin: "10px"}}> 
   
    <Card.Body>
      <Card.Title style={{ color: 'maroon' }}>{data6.state}</Card.Title>
      <Card.Text>
      <ListGroup.Item  style={{ color: 'red' }}>Total Active {data6.active}</ListGroup.Item>
   <ListGroup.Item>Total Recovered {data6.recovered}</ListGroup.Item>
   <ListGroup.Item>Total Deaths {data6.deaths}</ListGroup.Item>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small >{data6.lastupdatedtime}</small>
    </Card.Footer>
  </Card>
</CardGroup>


{/* 
FourtH LinE */}
<CardGroup>
  <Card className="text-center" style={{margin: "10px"}}> 
   
    <Card.Body>
    {/* <Card.Header bg = "success">{data4.state}</Card.Header> */}
    <Card.Title style={{ color: 'teal' }}>{data7.state}</Card.Title>
      <Card.Text>
      <ListGroup variant="flush">
   
    <ListGroup.Item style={{ color: 'red' }}>Total Active {data7.active}</ListGroup.Item>
    <ListGroup.Item>Total Recovered {data7.recovered}</ListGroup.Item>
    <ListGroup.Item>Total Deaths {data7.deaths}</ListGroup.Item>
  </ListGroup>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small >{data7.lastupdatedtime}</small>
    </Card.Footer>
  </Card>
  <Card className="text-center" style={{margin: "10px"}}> 
   
    <Card.Body>
      <Card.Title style={{ color: 'teal' }}>{data8.state}</Card.Title>
      <Card.Text>
      <ListGroup variant="flush">
   
   <ListGroup.Item style={{ color: 'red' }}>Total Active {data8.active}</ListGroup.Item>
   <ListGroup.Item>Total Recovered {data8.recovered}</ListGroup.Item>
   <ListGroup.Item>Total Deaths {data8.deaths}</ListGroup.Item>
 </ListGroup>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small >{data8.lastupdatedtime}</small>
    </Card.Footer>
  </Card>
  <Card className="text-center" style={{margin: "10px"}}> 
   
    <Card.Body>
      <Card.Title style={{ color: 'teal' }}>{data9.state}</Card.Title>
      <Card.Text>
      <ListGroup.Item style={{ color: 'red' }}>Total Active {data9.active}</ListGroup.Item>
   <ListGroup.Item>Total Recovered {data9.recovered}</ListGroup.Item>
   <ListGroup.Item>Total Deaths {data9.deaths}</ListGroup.Item>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small >{data9.lastupdatedtime}</small>
    </Card.Footer>
  </Card>
</CardGroup>

</div>



  );
}

export default App;

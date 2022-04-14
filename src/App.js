import { useState,useEffect } from 'react';
import './App.css';

function App() {
  const date = new Date();
  const date2= new Date(date.toISOString().split('T')[0]);
  console.log(date2);
  const [sday,setSday]= useState(date2.getTime()/1000 - 9*60*60);
  const [url,setUrl] = useState(`https://dgucoop.dongguk.edu/mobile/menu.html?code=5&sday=${sday}`);

  const handleDateChange = (event)=>{
    const newDate = new Date(event.target.value);
    setSday(newDate.getTime()/1000 - 9*60*60);
  }

  useEffect(()=>{
    setUrl((pre)=>pre.slice(0,57)+sday);
  },[sday])
  
  return (
    <div className="App">
      <div style={{'height':'500px'}}>
        <iframe
          title='menu'
          src={url}
          scrolling='no'
          style={{
            'position':'absolute',
            'top':-45,
            'left': '50%',
            'width':'390px',
            'height': '500px',
            'transform': 'translate(-50%)'
          }}
        />
      </div>

      <input 
        type='date'
        defaultValue={date.toISOString().split('T')[0]} 
        onChange={handleDateChange}
        style={{
          'display':'block',
          'boxSizing':'border-box',
          'width':'390px',
          'height':'40px',
          'fontSize' : '20px',
          'fontWeight' : 600,
          'textAlign':'center',
          'padding':'5px',
          'color':'#333333',
          'verticalAlign':'middle'
        }}
        />
        
    </div>
  );
}

export default App;
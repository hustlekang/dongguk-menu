import { useState,useEffect } from 'react';
import './App.css';

function App() {
  const date = new Date();
  const ymd = date.toLocaleDateString().split('.');
  ymd.pop();
  const yymmdd = ymd.map(x=>x.slice(0,1)===' '?'0'+x.slice(1):x).join('-');
  let date2 = new Date(yymmdd);
  const [sday,setSday]= useState(date2.getTime()/1000-32400); 
  const [url,setUrl] = useState(`https://dgucoop.dongguk.edu/mobile/menu.html?code=5&sday=${sday}`);
  
  let differ = 0;
  let maxDate = '';
  switch (date.getDay()) {
    case 0:
      differ = 13;
      break;
    case 1:
      differ = 12;
      break;
    case 2:
      differ = 11;
      break;
    case 3:
      differ = 10;
      break;
    case 4:
      differ = 9;
      break;
    case 5:
      differ = 8;
      break;
    case 6:
      differ = 7;
      break;
    default:
      break;
  }
  let maxDay = Number(date.toISOString().split('T')[0].split('-')[2])+differ;
  if(maxDay>31){
    maxDay -= 31;
    maxDate = `${date.toISOString().split('T')[0].split('-')[0]}-${date.toISOString().split('T')[0].split('-')[1]+1}-${maxDay}`;
  }
  else{
    maxDate=`${date.toISOString().split('T')[0].split('-')[0]}-${date.toISOString().split('T')[0].split('-')[1]}-${maxDay}`;
  }
  
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
      <label htmlFor='datepicker'>날짜를 선택하세요</label> 
      <input
        id='datepicker' 
        type='date'
        max={maxDate}
        defaultValue={yymmdd} 
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
          'verticalAlign':'bottom',
          'margin':'10px 0',
          
        }}
        />
      <label htmlFor='datepicker' style={{'color':'#cccccc'}}>2010년 ~ 차주까지 가능</label>
    </div>
  );
}

export default App;
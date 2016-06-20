export default function fetchData(terminal, address, TSA){
  Promise.all(fetchTSA(), fetchGoogle(address)).then(function(value){
    sortData(value, terminal, TSA);
  });
};

function fetchTSA(){
    fetch('/tsa', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }}).then(response => {
      return response.json();
    }).then(responseJSON => {
     return responseJSON;
    }).catch(err => console.log(err));
};

function fetchGoogle(address){
  fetch('/google', {
    method: 'POST',
    headers: {
      'Accept': 'text',
      'Content-Type': 'text',
    },
    body: address
  }).then(response => {
    return response.json();
  }).then(responseJSON => {
   return responseJSON;
  }).catch(err => console.log(err));
};

function sortData(data, terminal, TSA){
  console.log('data is', data);
  var waitTimes= data[0].WaitTimes;
  for (var i= 0; i< waitTimes.length; i++){
    if (TSA[String(waitTimes[i].CheckpointIndex)] === terminal){
      this.setState({tsaTime: ((parseInt(waitTimes[i].WaitTimeIndex, 10) -1) * 10) +' Minutes'});
       break;
     }
     else if (i === waitTimes.length -1){
       this.setState({tsaTime: 20});
     }
   }
   var data= JSON.parse(data[1]);
   this.setState({driveTime: parseInt(data.routes[0].legs[0].duration.text, 10) +' Minutes'});
   this.setState({totalTime: (parseInt(this.state.driveTime, 10) + parseInt(this.state.tsaTime,10)) + ' Minutes'});

};

export const TSA = {
  '1': 'TBIT',
  '2': '4',
  '4': '7',
  '5': '3',
  '6': '2',
  '7': '8',
  '8': '1',
  '9': '5',
 '10': '6'
  };
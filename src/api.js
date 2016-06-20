export default function fetchData(param){
  return function (terminal, address){
    Promise.all([fetch('http://localhost:3000/tsa', {
        method: 'GET',
      }).then(response => {
        return response.json();
      }), fetch('http://localhost:3000/google', {
      method: 'POST',
      headers: {
        'Accept': 'text',
        'Content-Type': 'text',
      },
      body: address
    }).then(response => {
      return response.json();
    })]).then(function(value){
      sortData(value, terminal, param);
    });
  };
};


function sortData(data, terminal, param){
  const TSA = {
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
  var waitTimes= data[0].WaitTimes;
  for (var i= 0; i< waitTimes.length; i++){
    if (TSA[String(waitTimes[i].CheckpointIndex)] === terminal){
      param.setState({tsaTime: ((parseInt(waitTimes[i].WaitTimeIndex, 10) -1) * 10) +' Minutes'});
       break;
     }
     else if (i === waitTimes.length -1){
       param.setState({tsaTime: 20});
     }
   }
   var data= data[1];
   param.setState({driveTime: parseInt(data.routes[0].legs[0].duration.text, 10) +' Minutes'});
   param.setState({totalTime: (parseInt(param.state.driveTime, 10) + parseInt(param.state.tsaTime,10)) + ' Minutes'});

};


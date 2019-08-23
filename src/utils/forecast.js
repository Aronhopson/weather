const request = require("request")

const forecast = (latitude, longitude , callback) => {
    const url ="https://api.darksky.net/forecast/49e3539394ebd085bf528bd03e4d2102/" + latitude +  ","  + longitude

request({url, json:true}, (err, {body}) =>{
    if(err){
        callback("unable to fetch data forcatse" , undefined)
    }else if(body.error) {
         callback("unable to fecth location forecaste", undefined)
    }else { 
        callback(undefined, "Temp  " + body.daily.data[0].summary)

    }
  })
}

module.exports= forecast;
const request = require("request")

const geocode = (address , callback) => {
    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/"+ address + ".json?access_token=pk.eyJ1IjoiaG9wc29uMTExIiwiYSI6ImNqemp5eXhncjBlNGQzb285c2tweG8yMTkifQ.YvUyCSW2U3yv0kzntdqfqQ"

request({url, json:true}, (err, {body}) =>{
    if(err){
        callback("unable to fetch data geocode", undefined)
    }else if(body.features.length === 0) {
         callback("unable to fecth location geocode", undefined)
    }else { 
        callback(undefined,{
            latitude : body.features[0].center[1],
            longitude :body.features[0].center[0],
            location : body.features[0].place_name
        })

    }
  })
}

module.exports= geocode;
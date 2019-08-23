console.log("oh this is client page")
console.log("git bash")
    

//selecting the document inside index, grabbing by name
 const weatherForm = document.querySelector("form")
const search = document.querySelector("input")
const messageOne = document.querySelector('.message-1')
const messageTwo = document.querySelector(".message-2")



 //manipulate the code and SUBMIT
  weatherForm.addEventListener("submit", (e) => {
          e.preventDefault()

 //TTHEN IT FETCH  VALUE        
const location = search.value
messageOne.textContent =" loading...."
messageTwo.textContent =" "

 //fetching weather forcaste
fetch("http://localhost:3000/weather?address=" + location )
.then(response => response.json())
.then((data) =>{
    if(data.error){
        console.log(data.error)
    }else {
        messageOne.textContent = data.location
        messageTwo.textContent = data.forecast
    }
})
  })


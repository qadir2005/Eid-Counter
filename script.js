const days = document.querySelector("#days")
const hours = document.querySelector("#hours")
const minutes = document.querySelector("#mint")
const seconds = document.querySelector("#sec")
const eidDate = "30 march 2025 7:00 pm"


const eidCounter = ()=>{
// using Date concept and Formula 
const end = new Date(eidDate)
const now = new Date()
const diff = end - now

// abhi sec days hours waghera nikal rhe hai formula ke use se
const displaySeconds = Math.round((diff / 1000)  ) 
const displayminutes = Math.round(displaySeconds / 60)
const displayHours = Math.round(displayminutes/60)
const displayDays = Math.round(displayHours/24)

if (diff===0){
return
}
    days.innerText = (displayDays) % 60
    hours.innerText= (displayHours) % 60
    minutes.innerText= (displayminutes) %60 
    seconds.innerText = (displaySeconds) %60
    // console.log( displayDays);
    
}
eidCounter()

setInterval(()=>{
    eidCounter()
}    , 1000);

// AlhamDullilah chota sa project tha complete ho gya






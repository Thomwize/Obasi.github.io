function addZero(x, n) { 
     while (x.toString().length < n) { 
         x = "0" + x; 
     } 
     return x; 
 } 
  
 function updateTime() { 
     const d = new Date(); 
     let h = addZero(d.getHours(), 2); 
             let m = addZero(d.getMinutes(), 2); 
             let s = addZero(d.getSeconds(), 2); 
             let ms = addZero(d.getMilliseconds(), 3); 
             let time = `${h}:${m}:${s}.${ms}`; 
             document.getElementById("currentUTCTime").textContent = `Current UTC Time: ${time}`; 
         } 
  
         // Call updateTime() to set the initial time 
         updateTime(); 
  
         // click event listener to update time on click 
         const currentDateElement = document.querySelector('[data-testid="currentDate"]'); 
         currentDateElement.addEventListener('click', function () { 
             updateTime(); 
         }); 
  
         // Update time every 100 milliseconds to keep it real-time 
         setInterval(updateTime, 100);
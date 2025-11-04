/* 1) new Date() returns new date
 2) .getDate() retuns date 1 to 31 
 3) .getMonth()+1 gets current month 
 4) .getFullYear() returns nyear
 5) .getHours() getting month
 6).getMinutes() getting minutes 
 7) console.log(date.toISOString());
// 👉 "2025-04-25T14:30:05.123Z"
8) console.log(date.toString());
// 👉 "Fri Apr 25 2025 17:30:05 GMT+0300 (East Africa Time)"
9)console.log(date.toLocaleDateString());
// 👉 "4/25/2025" (in US English)
 7) element.addEventListener("change", () => {  }); is used  when changed html 
 8)switch (e.target.value) {
case "nickname":
setPlayerCards(players.filter((player) => player.nickname !== null));
break;
}
 9) Object.freeze() is freezes cant change
 10)const greeting = (name = "Anonymous") => {
  return "Hello " + name;
} 
console.log(greeting("John")); // Hello John
console.log(greeting()); // Hello Anonymous
 11) toggle add if not delete if present
element.classList.toggle("class-to-toggle");
 12)<dialog> html creating modals. is blocks site until press button 
const myModal = document.getElementById("myModal");
myModal.showModal().close();
 13) array.splice(start, deleteCount, item1, item2, ...)
 14) localStorage.setItem("key", "value") saves localStorage.getItem("key") reads 
localStorage.removeItem("key") delete one thing localStorage.clear() remove all thing 
JSON.parse(all thing) read ; JSON.stringify((value)) save
 15)!class means class is falsy 
 16) parseInt() returns only from string to int or NaN takes only one parameter
 17) String(class) is makes all thibgs to string
 18)setTimeout(() => {
  console.log("Hello, world!");
}, 3000); consoles after 3 seconds*/ 

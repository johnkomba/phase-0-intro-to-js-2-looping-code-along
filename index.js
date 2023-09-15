// Code your solutions in this file
function countDown(number) {
    for (let i = number; i >= 0; i--) {
      console.log(i);
    }
  }
  countDown(10);
  function writeCards(names, eventName) {
    let messages = [];
  
    for (let i = 0; i < names.length; i++) {
      let message = `Dear ${names[i]}, thank you for coming to the ${eventName} event!`;
      messages.push(message);
    }
  
    return messages;
  }
  
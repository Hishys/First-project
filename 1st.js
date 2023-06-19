function generateRandomNumber(num) {
    // Gets # from 0 -> num - 1
    return Math.floor(Math.random() * num)
  }

  const motivation = {
    indivisuals: ["Davis Goggins", "Naruto Uzamaki", "Asta", "Yami"],
    Quote: ["They dont know Me Son", "You will be the Hokage", "This is where I will surpass my limits", "Surpass your limits"],
    Show: ["Real life", "Nauruto", "Black Clover", "Black Clover"]


  }

  let speech = [];

for(let prop in motivation) {
    let optionIdx = generateRandomNumber(motivation[prop].length);

    switch(prop) {
        case 'indivisuals':
          speech.push(`Your mentor is "${motivation[prop][optionIdx]}".`)
          break
        case 'fortuneOutput':
          speech.push(`They are telling you, "${motivation[prop][optionIdx]}".`)
          break
        case 'advice':
          speech.push(`He is from "${motivation[prop][optionIdx]}".`)
          break
        default:
          speech.push('There is not enough info.')
      }


}

function format(moti) {
    
    const formatted = speech.join('\n')
    console.log(formatted)
  }
  
  format(speech);

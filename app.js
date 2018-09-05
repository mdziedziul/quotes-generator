// document.querySelector('.get-jokes').addEventListener('click', getJokes);

// function getJokes(e) {
//   const number = document.querySelector('input[type="number"]').value;
//   //console.log(number);

//   const xhr = new XMLHttpRequest();

//   xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

//   xhr.onload = function() {
//     if(this.status === 200) {
//       const response = JSON.parse(this.responseText);
//       console.log(response);
//       let output = '';

//       if(number > 0) {
//       if (response.type === 'success') {
//         response.value.forEach(function(joke) {
//           output += `<li>${joke.joke}</li>`;
//           document.querySelector('.jokes').style.color = 'black';
//         });
//       } else {
//         output += 'Something went wrong.';
//       } 
//       } else {
//         output = 'You must fill in a number bigger than 0. Please try again.';
//         document.querySelector('.jokes').style.color = 'red';
//       }

//       document.querySelector('.jokes').innerHTML = output;
//     } 
//   }

//   xhr.send();

//   e.preventDefault();
// }

document.querySelector('.get-quotes').addEventListener('click', getQuotes);
function getQuotes(e) {
  const number = document.querySelector('#quote').value;
  //console.log(number);

  const xhr = new XMLHttpRequest();

  xhr.open('GET', `http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=${number}`, true);

  xhr.onload = function() {
    if(this.status === 200) {
      const response = JSON.parse(this.responseText);
      console.log(response);
      let output = '';

      if(number > 0) {
        response.forEach(function(quote) {
          output += `<span>${quote.content} - ${quote.title}</span>`;
          document.querySelector('#quotes').style.color = 'black';
        });
      } else {
        output = 'You must fill in a number bigger than 0. Please try again.';
        document.querySelector('#quotes').style.color = 'red';
      }
      document.querySelector('#quotes').innerHTML = output;
    } 
  }

  xhr.send();

  e.preventDefault();
}

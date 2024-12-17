
let tagsubHeading = document.getElementsByClassName('tag-subHeading');
let tagcontent = document.getElementsByClassName('tag-content');

function opentag(event, tagname) {
    for (let tagsub of tagsubHeading) {
        tagsub.classList.remove('active-subHeading');
    }
    
    for (let content of tagcontent) {
        content.classList.remove('active-content');
        content.style.display = 'none';
    }

    event.currentTarget.classList.add('active-subHeading');
    
    let activeContent = document.getElementById(tagname);
    activeContent.classList.add('active-content');
    activeContent.style.display = 'block';
}

// automatically test change by using below code 



  const textArray = ["Front End Developer", "Software Engineer"];
  let i = 0; // current word index
  let j = 0; // current character index
  let currentText = ''; // current text being typed
  let isDeleting = false; // flag to check if the text is being deleted
  const typingSpeed = 220; // typing speed in ms
  const backSpeed = 100; // backspace speed in ms
  const container = document.querySelector('.typing-container');
  
  function typeText() {
    if (i < textArray.length) {
      if (!isDeleting) {
        // Typing the word
        if (j < textArray[i].length) {
          currentText += textArray[i].charAt(j);
          j++;
          container.innerHTML = currentText;
          setTimeout(typeText, typingSpeed);
        } else {
          // Once the word is fully typed, wait for 1.5 seconds before starting to delete
          setTimeout(() => {
            isDeleting = true;
            typeText();
          }, 2000);
        }
      } else {
        // Deleting the word
        if (j > 0) {
          currentText = currentText.substring(0, j - 1);
          j--;
          container.innerHTML = currentText;
          setTimeout(typeText, backSpeed);
        } else {
          // Once the word is completely deleted, move to the next word
          isDeleting = false;
          i++;
          setTimeout(typeText, 500); // delay before typing next word
        }
      }
    } else {
      // Once all words are typed and deleted, start from the beginning
      i = 0;
      setTimeout(typeText, 2000);
    }
  }

  typeText(); // start the typing effect




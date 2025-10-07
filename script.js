     console.log('script loaded');
     
    const menuIcon = document.getElementById('menu');
    const navList = document.querySelector('.main-nav ul');
    const navLinks = document.querySelectorAll('.main-nav ul li a'); 

//     const forms = document.querySelector('form[name="submit-to-google-sheet"]')
//     const submitBtn = document.querySelector('.btn')

//       forms.addEventListener('submit', (e) => {
//          e.preventDefault() 
    
//         const inputAreas = document.querySelectorAll('.input-area')
//         let hasEmpty = false
    
//         Array.from(inputAreas).forEach(input => {
//            if(!input.value.trim()) {
//               input.classList.add('shake')
//               setTimeout(() => {
//                  input.classList.remove('shake')   
//               }, 600)
//               hasEmpty = true
//            }
//        })
    
//        if(hasEmpty) {
//           return 
//      }

//     const originalText = submitBtn.value
//     submitBtn.value = 'Sent! ✓'
//     submitBtn.style.background = '#a78bfa'
//     submitBtn.style.color = '#000'
    
//     form.reset()

//     setTimeout(() => {
//         submitBtn.value = originalText
//         submitBtn.style.background = ''
//         submitBtn.style.color = ''
//     }, 2000)
    
//     //  console.log('Form is valid, submitting...')
//     //  forms.reset();
//     //  alert('messages sent sucessfully')
// })


    menuIcon.onclick = (e) => {
        e.stopPropagation(); 
        menuIcon.classList.toggle('fa-x');
        navList.classList.toggle('active')
    };

    
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuIcon.classList.remove('fa-x')
            navList.classList.remove('active');
        });
    });



    let sections = document.querySelectorAll('#header, #about, #Services, #portfolio, #contact'); 
    let navlinkElements = document.querySelectorAll('nav ul li a'); 

    window.onscroll = () => {
        sections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 150; 
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if (top >= offset && top < offset + height) {
                navlinkElements.forEach(link => {
                    link.classList.remove('active');
                });
                document.querySelector('nav ul li a[href*=' + id + ']').classList.add('active');
            }
        });

        // Sticky navbar logic
        let header = document.querySelector('.main-nav');
        header.classList.toggle('sticky', window.scrollY > 100);
    }


    // scroll reveal 

     ScrollReveal({ 
        reset: true ,
        distance:'80px',
        duration:2000,
        delay:200
    });

    ScrollReveal().reveal('.header-text,sub-title,.heading', { origin: 'top' });
    ScrollReveal().reveal('.services-container,.portfolio-box,.contact form', { origin: 'bottom' });
    ScrollReveal().reveal('.img-col,.header-text p,.social-media', { origin: 'left' });
    ScrollReveal().reveal('.about-col-1 h3,.about-col-1  p', { origin: 'right' });




    //contact-form


//     const scriptURL='https://script.google.com/macros/s/AKfycbyflO4w4-twyPhz6ohcGQ3qI5DV7mDF0nvK8mb4FajfJSxeCJZWmSxZDCJR4tjA3MY1cw/exec'
//     const form = document.forms['submit-to-google-sheet']



//    form.addEventListener('submit', e => {
//   e.preventDefault();

// const inputAreas = document.querySelectorAll('.input-area')
//         let hasEmpty = false
    
//         Array.from(inputAreas).forEach(input => {
//            if(!input.value.trim()) {
//               input.classList.add('shake')
//               setTimeout(() => {
//                  input.classList.remove('shake')   
//               }, 600)
//               hasEmpty = true
//            }
//        })
    
//        if(hasEmpty) {
//           return 
//      }
//      const submitBtn = document.querySelector('.btn')
//     const originalText = submitBtn.value
//     submitBtn.value = 'Sent! ✓'
//     submitBtn.style.background = '#a78bfa'
//     submitBtn.style.color = '#000'
    
//     form.reset()

//     setTimeout(() => {
//         submitBtn.value = originalText
//         submitBtn.style.background = ''
//         submitBtn.style.color = ''
//     }, 2000)
    

//    //////////contact form//////////////////////

//   const formData = new FormData(form);

//   // Log what's actually inside
//   for (let [key, value] of formData.entries()) {
//     console.log(key, value);    
//   }

//   fetch(scriptURL, { 
//     method: 'POST', 
//     body: formData 
//   })
//   .then(response => console.log('Success!', response))
//   .catch(error => console.error('Error!', error.message));
// });

const forms = document.querySelector('form[name="submit-to-google-sheet"]')
const submitBtn = document.querySelector('.btn')

forms.addEventListener('submit', (e) => {
   e.preventDefault() 

   const inputAreas = document.querySelectorAll('.input-area')
   let hasEmpty = false

   Array.from(inputAreas).forEach(input => {
      if(!input.value.trim()) {
         input.classList.add('shake')
         setTimeout(() => {
            input.classList.remove('shake')   
         }, 600)
         hasEmpty = true
      }
   })

   if(hasEmpty) return

   const originalText = submitBtn.value
   submitBtn.value = 'Sent! ✓'
   submitBtn.style.background = '#a78bfa'
   submitBtn.style.color = '#000'

   // ⛔ removed form.reset() from here
   // it was clearing the data too early

   setTimeout(() => {
      submitBtn.value = originalText
      submitBtn.style.background = ''
      submitBtn.style.color = ''
   }, 2000)
})

// ------------------ CONTACT FORM FETCH ------------------

const scriptURL = 'https://script.google.com/macros/s/AKfycbx9YoaiL59-GevFht2M1R1QO7qLlGHRJXHp4js3j-T15CaLyn-ddpPsJjz7JP-HhVEygg/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()

  const formData = new FormData(form)

  console.log('Form Data:')
  for (let [key, value] of formData.entries()) {
    console.log(key, value)
  }

  fetch(scriptURL, { method: 'POST', body: formData })
    .then(response => {
      console.log('Success!', response)
      form.reset() // ✅ reset only after successful send
    })
    .catch(error => console.error('Error!', error.message))
})

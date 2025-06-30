 // ======== Select DOM Elements ========
 const productImage = document.querySelector('.product-image img');
 const optionButtons = document.querySelectorAll('[data-choice]');
 const questionSection = document.getElementById('question-section');
 const resultSection = document.getElementById('result-section');
 const restartBtn = document.getElementById('restart-btn');

 // Result placeholders
 const archetype = document.querySelector('.archetype');
 const productName = document.querySelector('.product-name');
 const description = document.querySelector('.description');
 const fabricTag = document.querySelector('.fabric-tag');

 // ======== Mock Result Data ========
 const productResults = {
     grounding: {
         archetype: 'The Rooted One',
         product: 'Embrace Bodysuit',
         desc: 'A form-fitting suit that grounds you in calm confidence.',
         fabric: 'Cooling Mesh',
         image: 'https://images.pexels.com/photos/2908175/pexels-photo-2908175.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=500'

     },
     softness: {
         archetype: 'The Gentle Soul',
         product: 'Cloud Touch Bralette',
         desc: 'Light support and barely-there feel for pure softness.',
         fabric: 'TENCEL Soft',
         image: 'https://images.pexels.com/photos/4098360/pexels-photo-4098360.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=500'
     },
     energy: {
         archetype: 'The Radiant Spark',
         product: 'Vibe Tank',
         desc: 'Bold cuts and flexible fit that moves with your energy.',
         fabric: 'Organic Stretch Cotton',
         image: 'https://images.pexels.com/photos/9004278/pexels-photo-9004278.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=500'
     },
     freedom: {
         archetype: 'The Unbound Spirit',
         product: 'Flow Shorts',
         desc: 'Breezy, flowing design to let you move freely.',
         fabric: 'Eco Rayon',
         image: 'https://images.pexels.com/photos/1030895/pexels-photo-1030895.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=500'
     }
 };

 // ======== Show Result Function ========
 function showResult(choice) {
     const result = productResults[choice];

     if (!result) return;

     archetype.textContent = result.archetype;
     productName.textContent = result.product;
     description.textContent = result.desc;
     fabricTag.textContent = `Fabric: ${result.fabric}`;
     productImage.src = result.image;

     questionSection.style.display = 'none';
     resultSection.style.display = 'block';
     resultSection.classList.add('fade-in');

     // Optional: Save to localStorage
     localStorage.setItem('lastChoice', choice);
 }



 // ======== Reset Function ========
 function resetView() {
     questionSection.style.display = 'block';
     resultSection.style.display = 'none';
     resultSection.classList.remove('fade-in');


     // This is Optional: Clear saved choIce
     localStorage.removeItem('lastChoice');
 }

 // ======== Event listeners ========
 optionButtons.forEach(button => {
     button.addEventListener('click', () => {
         const choice = button.dataset.choice;
         showResult(choice);
     });
 });

 restartBtn.addEventListener('click', resetView);

 // ======== On Load: Welcome Back Feature (The Bonus stuff) ========
 window.addEventListener('DOMContentLoaded', () => {
     const savedChoice = localStorage.getItem('lastChoice');
     if (savedChoice) {
         showResult(savedChoice);
         // To Add a subtle welcome message (optional also)
         const welcome = document.createElement('p');
         welcome.textContent = 'Welcome back!';
         welcome.style.color = '#888';
         welcome.style.marginBottom = '1rem';
         resultSection.querySelector('.result-content').prepend(welcome);
     }
 });
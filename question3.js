// 3. (4p) Hämta posts med fetch från denna url: https://jsonplaceholder.typicode.com/posts
// Visa title och body från varje post på sidan inuti: <div id="posts"></div> (skapa HTML-elementet med JavaScript eller lägg till dem i HTML-filen)
// Visa endast posts från användaren med userId: 1
// Använd async/await med felhantering. Använd dig av filter samt forEach eller map.


// Din kod här

async function fetchAndDisplay() {
    const todoListElement = document.getElementById('post');

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }

      const responsePost = await response.json();
      console.log(responsePost);

    
      const completedPost = responsePost.filter(post => post.userId=== 1);

    
      completedPost.forEach(todo => {
        const li = document.createElement('li');
        li.textContent = todo.title;
        todoListElement.appendChild(li);
      });
    } catch (error) {
      console.error('Error fetching or displaying todos:', error.message);
    }
  }
  fetchAndDisplay();


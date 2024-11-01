document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
  
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    const emaill = 'm@main.ru';
    const kod = '1';
  
    if (email === emaill && password === kod) {
      window.location.href =  "home.html" ; 
    } else {
      document.getElementById('error').classList.remove('hidden');
    }
  });
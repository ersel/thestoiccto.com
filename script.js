function submitForm(event) {
    var btn = document.getElementById("subscribe-btn");
    var scriptURL = 'https://script.google.com/macros/s/AKfycbxyLLdg8nAcmq8CHiYzwvWXOUxMbVv2I9igMHnwzcm8-2cLofVN/exec';
    event.preventDefault(); 
    var form = document.forms["email-form"];
    btn.disabled = true;
    btn.innerText = "Subscribing..."
        
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(function(response) {
        console.log(response)
        btn.disabled = true;
        btn.innerText = "Thanks for subscribing."
    })
    .catch(function(error) {
        btn.disabled = false;
        btn.innerText = "Subscribe"
        alert('Sorry, something went wrong please try again.')
    })
}
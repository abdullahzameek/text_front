function getSummary() {
    var monkeys = document.getElementById('monkeys');
    monkeys.innerText = "Hang on, our code monkeys are working really hard right now!"
    var resultElement = document.getElementById('resultingText');
    var source = document.getElementById('payload').value;
    console.log(source)
    resultElement.innerHTML = '';
    var payloadJson = {
        "text":source
    }
    axios.post(`https://summarizeruwu.herokuapp.com/summarize`,payloadJson)
    .then(response => {
        console.log(response)
        console.log(response.data)
        resultElement.value = response.data
        monkeys.innerText = "";
    })
    .catch(error => {
        console.log("ERROR in Category loading ", error)
    })   
  }

function toggleColors() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    var btn = document.getElementById('summary')
    var btn2 = document.getElementById('clippy')

    if(btn2.className == 'btn btn-outline-dark'){
        console.log('dark to light');
        btn2.className = 'btn btn-outline-light'
        console.log(btn.className);
    }
    else if(btn2.className == 'btn btn-outline-light'){
        console.log('light to dark')
        btn2.className = 'btn btn-outline-dark'
        console.log(btn.className)
    }

    if(btn.className == 'btn btn-outline-dark'){
        console.log('dark to light');
        btn.className = 'btn btn-outline-light'
        console.log(btn.className);
    }
    else if(btn.className == 'btn btn-outline-light'){
        console.log('light to dark')
        btn.className = 'btn btn-outline-dark'
        console.log(btn.className)
    }
  } 

function copy() {
    /* Get the text field */
    var copyText = document.getElementById("resultingText");
  
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
  
    /* Copy the text inside the text field */
    document.execCommand("copy");
  
    /* Alert the copied text */
    alert("Text Copied to Clipboard!");
  } 


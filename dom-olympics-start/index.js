//qualifier
const h1 = document.createElement("h1");
h1.textContent = "JavaScript made this!!";
h1.className = "heading";
document.getElementById("header").appendChild(h1);
var h2 = document.createElement('h2');
var span = document.createElement('span')
h2.innerHTML = `<span class = 'name'>Blair </span>wrote the JavaScript`
h1.appendChild(h2);
//bronze
const messages = document.getElementsByClassName("messages")[0].children;
messages[0].textContent = "Hello Blair.";
messages[1].textContent = "Salutations and Good Morning Johnson.";
messages[2].textContent = "How's business today?";
messages[3].textContent = "Who cares I'm in bed, bring me breakfast!";
//silver
var clearButton = document.getElementById("clear-button")
clearButton.addEventListener("click" , (e)=>{
    clearMessages()
})


function clearMessages(){
    messages[0].textContent = '';
    messages[1].textContent = '';
    messages[2].textContent = '';
    messages[3].textContent = '';
}

const dropdown = document.getElementById('themeDropDown');
dropdown.addEventListener('change' , changeTheme)
function changeTheme(){
    let theme = dropdown.value 
    if (theme === 'themeOne'){
        let messagesLeft = document.getElementsByClassName("messagesLeft")
        for(let i = 0; i < messagesLeft.length; i ++){
            messagesLeft[i].style.backgroundColor = 'blue';
        }
        let messagesRight = document.getElementsByClassName('messagesRight')
        for(let i = 0; i < messagesRight.length; i ++){
            messagesRight[i].style.backgroundColor = 'brown';
        }
    }else if (theme === 'themeTwo'){
        let messagesLeft = document.getElementsByClassName("messagesLeft")
        for(let i = 0; i < messagesLeft.length; i ++){
            messagesLeft[i].style.backgroundColor = 'red';
        }
        let messagesRight = document.getElementsByClassName('messagesRight')
        for(let i = 0; i < messagesRight.length; i ++){
            messagesRight[i].style.backgroundColor = 'lightgrey';
        }
    }else if (theme === 'themeThree'){
         let messagesLeft = document.getElementsByClassName("messagesLeft")
        for(let i = 0; i < messagesLeft.length; i ++){
        messagesLeft[i].style.backgroundColor = 'pink';
    }
        let messagesRight = document.getElementsByClassName('messagesRight')
        for(let i = 0; i < messagesRight.length; i ++){
        messagesRight[i].style.backgroundColor = 'green';
    }
    }else if (theme === 'themeFour'){
        let messagesLeft = document.getElementsByClassName("messagesLeft")
        for(let i = 0; i < messagesLeft.length; i ++){
        messagesLeft[i].style.backgroundColor = 'purple';
    }
        let messagesRight = document.getElementsByClassName('messagesRight')
        for(let i = 0; i < messagesRight.length; i ++){
        messagesRight[i].style.backgroundColor = 'yellow';
    }
    }
}
//Gold
    <div>
        <form name="message">
            <input id="input" value="Thanks! Goodbye"/>
            <button>Send</button>
        </form>
    </div>
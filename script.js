const registerButton = document.getElementById('register')
const loginButton = document.getElementById('login')
const container = document.getElementById('container')

registerButton.onclick = function(){
	 container.className = 'active'
}
loginButton.onclick = function(){
		container.className = 'close'
}
 

const email = document.getElementById('email')
const pass = document.getElementById('pass')
const btn = document.getElementById('btn')

btn.onclick = function(){
    container.className = 'active'
}
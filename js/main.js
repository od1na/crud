const elMain = document.getElementById('main');
const nameInp = document.getElementById('nameInput');
const emailInp = document.getElementById('emailInput');
const telInp = document.getElementById('telInput');
const elBtn = document.getElementById('addBtn');

let arr = [
    { id: 1, Name: 'Your name', Email: '@gmail.com', tel: '+998911111111' },
    { id: 2, Name: 'Your name', Email: '@gmail.com', tel: '+998911111111' },
    { id: 3, Name: 'Your name', Email: '@gmail.com', tel: '+998911111111' },
    { id: 4, Name: 'Your name', Email: '@gmail.com', tel: '+998911111111' }
]

function getUser() {
    let user = ''
    user += arr.map((v, i, arr) => `
    <div class='wrap'>
        <p class='wrap__fristValue'>${i + 1}</p>
        <p class='wrap__value'>${v.Name}</p>
        <p class='wrap__value'>${v.Email}</p>
        <p class='wrap__value'>${v.tel}</p>
        <button class="btn" onclick={delUser(${v.id})} >Delete</button>
    </div>
    `).join('')
    elMain.innerHTML = user
}
getUser()

function delUser(id) {
    arr = arr.filter((v) => v.id != id)
    getUser()
}

function addUser() {
    if (nameInp.value !== "" && emailInp.value !== "" && telInp.value !== "" ) {
        return new Promise((res, rej) => {
            arr = [...arr, { id: arr.length + 1, Name: nameInp.value, Email: emailInp.value, tel: telInp.value }]
            nameInp.value = ''
            emailInp.value = ''
            telInp.value = ''
            res()

        })
    }
}

elBtn.addEventListener('click', async () => {
    await addUser()
    getUser()
})
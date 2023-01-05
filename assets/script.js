

let selectedGames= []
let totalValue = 0

const games = [{
    id:'PS40',
    name:'The Last of Us Part II',
    image:'https://image.api.playstation.com/vulcan/img/rnd/202010/2618/itbSm3suGHSSHIpmu9CCPBRy.jpg',
    price:199.99,
    amount: 1
},
{
    id:'PS41',
    name:'Bloodborne',
    image:'https://image.api.playstation.com/vulcan/img/rnd/202010/2614/KKLEVc2SIIgrFVjsZChZJk1d.jpg',
    price:99.99,
    amount: 1
},
{
    id:'PS42',
    name:'Infamous Second Son',
    image:'https://image.api.playstation.com/vulcan/img/rnd/202010/2821/Uaa2dGP7cIf8tDPn6borubcx.jpg',
    price:89.99,
    amount: 1
},
{
    id:'PS43',
    name:'Horizon Zero Dawn',
    image:'https://cdn1.epicgames.com/3328b08ac1c14540aa265a1a85c07839/offer/hzd_wide-2560x1440-bd312be05c49cf339097777c493cb899.jpg',
    price:299.99,
    amount: 1
},
{
    id:'PS44',
    name:'Spider Man',
    image:'https://i.ytimg.com/vi/5YPMjO7a1IE/maxresdefault.jpg',
    price:249.99,
    amount: 1
},
{
    id:'PS50',
    name:'God of War Ragnarok',
    image:'https://image.api.playstation.com/vulcan/ap/rnd/202109/2821/a0DyIs2SEHrYpciM1ideU1wv.jpg',
    price:299.99,
    amount: 1
},
{
    id:'PS51',
    name:'Returnal',
    image:'https://image.api.playstation.com/vulcan/ap/rnd/202011/1621/nnvaURoYxPIoqqF7hO5JIatg.jpg',
    price:299.99,
    amount: 1
},
{
    id:'PS52',
    name:'Demon Souls',
    image:'https://bunnygaming.com/wp-content/uploads/2020/12/DS-FI.jpg',
    price:299.99,
    amount: 1
},
{
    id:'PS53',
    name:'Ratch and Clank Another Dimension',
    image:'https://image.api.playstation.com/vulcan/ap/rnd/202101/2921/mFlyD4mzhwjefBTxvytjTTP7.jpg',
    price:299.99,
    amount: 1
},
{
    id:'PS54',
    name:'Star Ocean The Divine Force',
    image:'https://image.api.playstation.com/vulcan/ap/rnd/202206/1306/s8hF2XJPLOEF5OoxvgTTerfm.jpg',
    price:299.99,
    amount: 1
},
{
    id:'XBOXSERIESXS0',
    name:'Forza Horizon 5',
    image:'https://i0.wp.com/sergiereviews.com/wp-content/uploads/2021/12/wp-1638979426973.jpg?fit=2400%2C1350&ssl=1',
    price:299.99,
    amount: 1
},
{
    id:'XBOXSERIESXS1',
    name:'Halo Infinite',
    image:'https://compass-ssl.xbox.com/assets/9c/94/9c944d9c-7ef1-4b46-9f68-9b02966d3993.jpg?n=Halo-Infinite_GLP-Page-Hero-0_1083x609.jpg',
    price:299.99,
    amount: 1
},
{
    id:'XBOXSERIESXS2',
    name:'Microsoft Flight Simulator',
    image:'https://cdn.cloudflare.steamstatic.com/steam/apps/1250410/capsule_616x353.jpg?t=1661185064',
    price:299.99,
    amount: 1
},
{
    id:'XBOXSERIESXS3',
    name:'Tunic',
    image:'https://cdn1.epicgames.com/offer/b6faa05b8b594ec39944ff71dbdfdfc1/EGS_TUNIC_ISOMETRICORPGamesLtd_S1_2560x1440-3951494846c8ed2b0705d85e7fd550d4',
    price:299.99,
    amount: 1
},
{
    id:'SWITCH0',
    name:'Mario Odissey',
    image:'https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/pt_BR/games/switch/s/super-mario-odyssey-switch/hero',
    price:299.99,
    amount: 1
},
{
    id:'SWITCH1',
    name:'Kirby and The Forgotten Lands',
    image:'https://blogger.googleusercontent.com/img/a/AVvXsEg4eGWsORw1IENWBAC7rTcYDkaWP1Bfm1uvz77-LJzRgidvBCkmVWCXzAeysLVWAKjfVSpNYtpZ7WfGz1so9t-4stUknBaWmVUs0Q4eWreH07vYLSowK4EzZj_TC87TynWYexkLmHU3S7sCKI3I0OeL-jHc66ZY5D2ICsqtx69n7P8R9oxt6Aq0djfXKA=s967',
    price:299.99,
    amount: 1
},
{
    id:'SWITCH2',
    name:'The Legend of Zelda Breath of The Wild',
    image:'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_2.625/c_scale,w_500/ncom/pt_BR/games/switch/t/the-legend-of-zelda-breath-of-the-wild-switch/hero',
    price:299.99,
    amount: 1
},
{
    id:'SWITCH3',
    name:'Astral Chain',
    image:'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_2.625/c_scale,w_500/ncom/pt_BR/games/switch/a/astral-chain-switch/hero',
    price:299.99,
    amount: 1
}
]




/* Games Sliders Starts*/

const sliderPS4 = document.getElementById('sliderPS4')
const leftPS4Button = document.getElementById('leftPS4')
const rightPS4Button = document.getElementById('rightPS4')
const PS4games = document.querySelectorAll('#ps4 .slide')
const menu = document.querySelector('#menu')

const sliderPS5 = document.getElementById('sliderPS5')
const leftPS5Button = document.getElementById('leftPS5')
const rightPS5Button = document.getElementById('rightPS5')
const PS5games = document.querySelectorAll('#ps5 .slide')

const sliderXboxSeriesXS = document.getElementById('sliderXboxSeriesXS')
const leftXboxSeriesXSButton = document.getElementById('leftXboxSeriesXS')
const rightXboxSeriesXSButton = document.getElementById('rightXboxSeriesXS')
const xboxSeriesXSGames = document.querySelectorAll('#xboxSeriesXS .slide')

const sliderSwitch = document.getElementById('sliderSwitch')
const leftSwitchButton = document.getElementById('leftSwitch')
const rightSwitchButton = document.getElementById('rightSwitch')
const switchGames = document.querySelectorAll('#switch .slide')

/* Games Sliders Ends*/


/* Alter between Dark and Light Mode Starts */ 

    const theme = document.getElementById('theme')
    theme.addEventListener('click',()=>changeTheme())

    const changeTheme = ()=>{

        const root = document.querySelector('html')
        root.classList.toggle('light-theme')
  
    }

/* Alter between Dark and Light Mode Ends */ 

/* Change Header Color Starts */

    const header = document.querySelector('#header')
    window.scrollY > 0 ? header.style.backgroundColor='var(--secondary-color)' : header.style.backgroundColor=''
    window.addEventListener('scroll',()=>checkScroll())


    const checkScroll = ()=>{

        if(window.scrollY > 0){
            header.style.backgroundColor='var(--secondary-color)'
        }
        else{
            header.style.backgroundColor=''
        }

    }

/* Change Header Color Ends */


/* Activate Mobile Menu Starts */ 

    const toggleMobileMenu = ()=>{
        console.log('oi')
        menu.classList.toggle('active-mobile-menu')
        mobileFade.classList.toggle('hide')
        
        if(boughtItems.classList.contains('visible')){
            boughtItems.classList.remove('visible')
        }
    }
    const mobileMenu = document.querySelector('#mobile-menu')
    const mobileMenuAlternative = document.querySelector('#mobile-menu-alternative')
    const mobileFade = document.querySelector('#mobile-fade')
    mobileMenu.addEventListener('click',()=>toggleMobileMenu())
    mobileMenuAlternative.addEventListener('click',()=>toggleMobileMenu())
    mobileFade.addEventListener('click',()=>toggleMobileMenu())

/* Activate Mobile Menu Ends */ 



/* PS4 Slider Starts */  

let movePS4 = 0
let movePS5 = 0
let moveXboxSeriesXS = 0
let moveSwitch = 0

let interval = ''

counterPS4 = 1
const moveSliderFowardPS4 = ()=>{
    if(counterPS4 + 1 == PS4games.length) {
        rightPS4Button.style.opacity = .4
    }
    else if(counterPS4 == PS4games.length){
        return
    }
    else{
        rightPS4Button.style.opacity = 1
        leftPS4Button.style.opacity = 1
    }
    counterPS4++
    if(counterPS4 >= 3){
        movePS4-= sliderPS4.offsetWidth;
    }
    else{
    movePS4-= sliderPS4.offsetWidth -(50);
    }
    sliderPS4.style.transform = `translateX(${movePS4
}px)`
}

const moveSliderBackwardPS4 = ()=>{
    
    if(counterPS4 - 1 == 1) {
        leftPS4Button.style.opacity = .4
    }
    else if(counterPS4 == 1){
        return
    }
    else{
        leftPS4Button.style.opacity = 1
        rightPS4Button.style.opacity = 1

    }
    counterPS4--
    movePS4 += sliderPS4.offsetWidth;
    sliderPS4.style.transform = `translateX(${movePS4
}px)`

    if(counterPS4 == 1){
    movePS4 -= 50
    }
}



rightPS4Button.addEventListener('mousedown',()=>moveSliderFowardPS4())
leftPS4Button.addEventListener('mousedown',()=>moveSliderBackwardPS4())

/* PS4 Slider Ends */  

/* PS5 Slider Starts */  

counterPS5 = 1
const moveSliderFowardPS5 = ()=>{
    if(counterPS5 + 1 == PS5games.length) {
        rightPS5Button.style.opacity = .4
    }
    else if(counterPS5 == PS5games.length){
        return
    }
    else{
        rightPS5Button.style.opacity = 1
        leftPS5Button.style.opacity = 1
    }
    counterPS5++

    if(counterPS5 >= 3){
        movePS5-= sliderPS5.offsetWidth;
    }
    else{
    movePS5-= sliderPS5.offsetWidth -(50);
    }

    sliderPS5.style.transform = `translateX(${movePS5
}px)`
}

const moveSliderBackwardPS5 = ()=>{
    if(counterPS5 - 1 == 1) {
        leftPS5Button.style.opacity = .4
    }
    else if(counterPS5 == 1){
        return
    }
    else{
        leftPS5Button.style.opacity = 1
        rightPS5Button.style.opacity = 1

    }
    counterPS5--
    movePS5 += sliderPS5.offsetWidth;
    sliderPS5.style.transform = `translateX(${movePS5
}px)`

    if(counterPS5 == 1){
        movePS5 -= 50
    }
}



rightPS5Button.addEventListener('mousedown',()=>moveSliderFowardPS5())
leftPS5Button.addEventListener('mousedown',()=>moveSliderBackwardPS5())

/* PS5 Slider Ends */  

/*Xbox Series X/5 Slider Starts*/

counterXboxSeriesXS = 1
const moveSliderFowardXboxSeriesXS = ()=>{
    if(counterXboxSeriesXS + 1 == xboxSeriesXSGames.length) {
        rightXboxSeriesXSButton.style.opacity = .4
    }
    else if(counterXboxSeriesXS == xboxSeriesXSGames.length){
        return
    }
    else{
        rightXboxSeriesXSButton.style.opacity = 1
        leftXboxSeriesXSButton.style.opacity = 1
    }
    counterXboxSeriesXS++

    if(counterXboxSeriesXS >= 3){
        moveXboxSeriesXS-= sliderXboxSeriesXS.offsetWidth;
    }
    else{
    moveXboxSeriesXS-= sliderXboxSeriesXS.offsetWidth -(50);
    }
    
    sliderXboxSeriesXS.style.transform = `translateX(${moveXboxSeriesXS
}px)`
}

const moveSliderBackwardXboxSeriesXS = ()=>{
    if(counterXboxSeriesXS - 1 == 1) {
        leftXboxSeriesXSButton.style.opacity = .4
    }
    else if(counterXboxSeriesXS == 1){
        return
    }
    else{
        leftXboxSeriesXSButton.style.opacity = 1
        rightXboxSeriesXSButton.style.opacity = 1

    }
    counterXboxSeriesXS--
    moveXboxSeriesXS += sliderXboxSeriesXS.offsetWidth;
    sliderXboxSeriesXS.style.transform = `translateX(${moveXboxSeriesXS
}px)`

    if(counterXboxSeriesXS == 1){
        moveXboxSeriesXS -= 50
    }
}



rightXboxSeriesXSButton.addEventListener('mousedown',()=>moveSliderFowardXboxSeriesXS())
leftXboxSeriesXSButton.addEventListener('mousedown',()=>moveSliderBackwardXboxSeriesXS())

/*Xbox Series X/5 Slider Ends*/

/*Switch Slider Starts*/

counterSwitch = 1
const moveSliderFowardSwitch = ()=>{
    if(counterSwitch + 1 == switchGames.length) {
        rightSwitchButton.style.opacity = .4
    }
    else if(counterSwitch == switchGames.length){
        return
    }
    else{
        rightSwitchButton.style.opacity = 1
        leftSwitchButton.style.opacity = 1
    }
    counterSwitch++

    if(counterSwitch >= 3){
        moveSwitch-= sliderSwitch.offsetWidth;
    }
    else{
    moveSwitch-= sliderSwitch.offsetWidth -(50);
    }

    sliderSwitch.style.transform = `translateX(${moveSwitch
}px)`
}

const moveSliderBackwardSwitch = ()=>{
    if(counterSwitch - 1 == 1) {
        leftSwitchButton.style.opacity = .4
    }
    else if(counterSwitch == 1){
        return
    }
    else{
        leftSwitchButton.style.opacity = 1
        rightSwitchButton.style.opacity = 1

    }
    counterSwitch--
    moveSwitch += sliderSwitch.offsetWidth;
    sliderSwitch.style.transform = `translateX(${moveSwitch
}px)`

    if(counterSwitch == 1){
        moveSwitch -= 50
    }
}



rightSwitchButton.addEventListener('mousedown',()=>moveSliderFowardSwitch())
leftSwitchButton.addEventListener('mousedown',()=>moveSliderBackwardSwitch())

/*Switch Slider Ends*/



/* Add Game to Kart Starts */ 

const buttons = document.querySelectorAll('.slide button')
buttons.forEach(item=>item.addEventListener('click',addToKart))

function addToKart(){
    let stop = false
        
        if(selectedGames.length > 0){
            selectedGames.map(item=>{
                if(item.id == this.id){
                    item.amount++;
                    totalValue+= item.price;
                    stop = true
                    updateBoughtItems()
                    return
                }
            })
        }
        

    if(stop == true) return

     games.map(item=>{
        
        if(item.id == this.id){
            selectedGames.push(item)
            totalValue+= item.price
            updateBoughtItems()
        }
     })
}

/* Add Game to Kart Ends */ 


/* Show Kart Items Starts */ 

const kart = document.querySelector('#kart')
const boughtItems = document.querySelector('#bought-items')

if (window.innerWidth > 500){

boughtItems.style.top = `${header.offsetHeight}px`

}
else{
    console.log('oi')
    const menuList = document.querySelector('.menu ul')
    boughtItems.style.top = `${menuList.offsetHeight + 80}px`

}

//Number of itens in kart
const kartCounter = document.querySelector('#kart-counter')


function updateBoughtItems(){
    boughtItems.innerHTML = ''
    const list = document.createElement('ul')
    list.style.display = 'flex'
    list.style.flexDirection = 'column'
    list.style.justifyContent = 'center'
    list.style.alignItems = 'center'
    if(selectedGames.length == 0){
        boughtItems.innerHTML = '<h2 style="text-align: center;font-size:3rem;">Você ainda não comprou nenhum jogo</h2>'
        return
    }

        selectedGames.map(item=>{
            list.innerHTML += `<li class="item"><span class="removeButton" id="${item.id}remove">X</span><img src="${item.image}"><div class="item--info"><span>${item.name}</span><span>R$${item.price.toString().replace('.',',') }${item.amount> 1 ? `(${item.amount}X)` : ''}</span></div></li>` 
        })


    boughtItems.appendChild(list)
    boughtItems.innerHTML += '<button id="finish">Finalizar</button>'
    const finish = document.getElementById('finish')
    finish.addEventListener('click',buy)

    const removeButton = document.querySelectorAll('.removeButton')
    removeButton.forEach(item=>{
        item.addEventListener('click',remove)
    })

    if(selectedGames.length == 0) kart.style.display = 'none'
    else kartCounter.style.display = 'block'

    kartCounter.innerHTML = `<span>${selectedGames.length}</span>`
    

}

/* Show Kart Items Ends */ 

/* Remove Kart Items Starts */

function remove(){
    let abort = false
    selectedGames.map(item=>{
        if(this.id.includes(item.id) && item.amount > 1){
           item.amount--
           totalValue-= item.price
           updateBoughtItems()
           abort = true
            return
        }

    })

    if (abort == true) return

    selectedGames.map(item=>{
        if(this.id.includes(item.id)){
           selectedGames = selectedGames.filter(item2=> item2.id != item.id)
           totalValue-= item.price
        }
        if(selectedGames.length == 0) kartCounter.style.display = 'none'
        else kartCounter.style.display = 'block'
        updateBoughtItems()

    })
    
}

/* Remove Kart Items Ends */

/* Finish and Buy Starts */ 

function buy(){
       
    modal.classList.toggle('hide')
    fade.classList.toggle('hide')
    modal.innerHTML = `<h3>Valor Total:</h3><span>R$${totalValue.toFixed(2).toString().replace('.',',')}</span>`
}

const modal = document.querySelector('#modal')
const fade = document.querySelector('#fade')
kart.addEventListener('click',updateBoughtItems)
kart.addEventListener('click',()=>boughtItems.classList.toggle('visible'))
fade.addEventListener('click',buy)

/* Finish and Buy Ends */ 
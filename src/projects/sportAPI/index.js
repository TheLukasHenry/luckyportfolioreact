

const btnMain = document.querySelector('#btn-main')
const input = document.querySelector('#input')
const card = document.querySelector('#card')
let name = document.querySelector('#card__info__name')
let dob = document.querySelector('#card__info__dob')
let nationality = document.querySelector('#card__info__nationality')
let height = document.querySelector('#card__info__height')
let athleteh1 = document.querySelector('.athlete-h1')
let pic = document.querySelector('#card__pic')
let sport = document.querySelector('#card__info__sport')
let aboutBtn = document.querySelector('#about__btn')
let aboutInfo = document.querySelector('#card__about__info')
let choice = document.querySelector('#choice')
let highlights = document.querySelector('#highlights')
let videosList = document.querySelectorAll('#highlights iframe')
let videoYt = document.querySelector('#highlights iframe')
let titles = document.querySelectorAll('#highlights__item__title')
let dates = document.querySelectorAll('#highlights__item__date')
let highlightsTitle = document.querySelector('#highlights__title')
let highlightsItem = document.querySelector('#highlights__item')
let videoPlaying = document.querySelector('.video--clicked iframe')
let mediaQuery = window.matchMedia("(min-width: 550px)")
const score = document.querySelector('#score')
let scoresTitle = document.querySelector('#score-title')
let scoresTitleHome = document.querySelectorAll('#score-location-flex__home')
let scoresTitleAway = document.querySelectorAll('#score-location-flex__away')
let homePics = document.querySelectorAll('#home-pic')
let homeNames = document.querySelectorAll('#home-name')
let homeScores = document.querySelectorAll('#home-score')
let awayPics = document.querySelectorAll('#away-pic')
let awayNames = document.querySelectorAll('#away-name')
let awayScores = document.querySelectorAll('#away-score')
let scoresItems = document.querySelectorAll('#score-item-grid')


const APIKEY = 40130162
const baseAPI = `https://www.thesportsdb.com/api/v1/json/${APIKEY}`
const v2BaseAPI = `https://www.thesportsdb.com/api/v2/json/${APIKEY}`
let inputValue = ''



async function getData(){
    try{
        const req = await fetch(`${baseAPI}/eventshighlights.php?s=${inputValue}`)
        const req2 = await fetch(`${baseAPI}/eventshighlights.php?l=${inputValue}`)
        const req3 = await fetch(`${baseAPI}/searchplayers.php?p=${inputValue}`)
        const req4 = await fetch(`${v2BaseAPI}/livescore.php?s=${inputValue}`)

        const res = await req.json()
        const res2 = await req2.json()
        const res3 = await req3.json()
        const res4 = await req4.json()
        
        

        // Highlights + score
        let dataHighlights = [res, res2, res4].filter(res => res.tvhighlights!=null || res.events!=null)
        
        if (dataHighlights.length > 0){

            highlights.style.display = 'flex'

            let highlightsHeading = `
            <h1 class="highlights__title" id="highlights__title">${input.value.toUpperCase()}'s highlights</h1>
            `
            
            highlights.innerHTML = highlightsHeading
            let j = dataHighlights[0].tvhighlights.length > 5 ? 5 : dataHighlights[0].tvhighlights.length
            let i = 0
            let k = false
            while(i <= j){
                const elem = document.createElement('div')
                elem.classList.add('highlights__item')
                elem.id = 'highlights__item'
                elem.innerHTML = `
                
                <div class="highlights__item__title" id="highlights__item__title">${dataHighlights[0].tvhighlights[i].strEvent}</div>
                <div class="highlights__item__date" id="highlights__item__date">Date of event: ${dataHighlights[0].tvhighlights[i].dateEvent}</div>
                <div class="videoWrapper">
                    <iframe class="highlights__item__video" id="highlights__item__video ytVideo" width="200" height="150" src="https://www.youtube.com/embed/${dataHighlights[0].tvhighlights[i].strVideo.substr(32).split('&')[0]}?autoplay=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
        
                `
                highlights.append(elem)
                i === j ? k=true : k=false
                i++
            }

            function videoClick(){
                if (k) {
                    let highlightsItems = document.querySelectorAll('#highlights #highlights__item')
                   
                    highlightsItems.forEach(item => {           
                    
                        item.classList.remove('video--clicked')
                        item.addEventListener('click', () => {
                            highlightsItems.forEach(it => {
                                console.log(`Multiple classes removed`);
                                it.classList.remove('video--clicked')
                                it.querySelector('iframe').src = it.querySelector('iframe').src.slice(0, -1)+'0'
                            })
                            console.log(`single class added`);
                            item.classList.add('video--clicked')
                            item.querySelector('iframe').src = item.querySelector('iframe').src.slice(0, -1)+'1'
                        })
                    })                                       
                }
            }

            videoClick()

            // Score
            if (dataHighlights[1]){
                score.style.display = 'flex'
                let scoreHeading = `
                <h1 class="score-title" id="score-title">${inputValue.toUpperCase()}'s latest scores</h1>
            <div class="score-location-flex" id="score-location-flex">
                <h2 class="score-location-flex__home" id="score-location-flex__home">HOME</h2>
                <span>vs.</span>
                <h2 class="score-location-flex__away" id="score-location-flex__away">AWAY</h2>
            </div>
                `
                score.innerHTML = scoreHeading
                let a = 0
                let b = dataHighlights[1].events.length > 10 ? 10 : dataHighlights[1].events.length
                while(a < b){
                    const elem = document.createElement('div')
                    elem.classList.add('score-item-grid')
                    elem.id = 'score-item-grid'

                    elem.innerHTML = `       
                <div class="home" id="home">
                    <img src="${dataHighlights[1].events[a].strHomeTeamBadge}/tiny" alt="" class="home-pic" id="home-pic">
                    <h3 class="home-name" id="home-name">${dataHighlights[1].events[a].strHomeTeam}</h3>
                    <div class="home-score" id="home-score">${dataHighlights[1].events[a].intHomeScore}</div>
                </div>
            
                <div class="away" id="away">
                    <img src="${dataHighlights[1].events[a].strAwayTeamBadge}/tiny" alt="" class="away-pic" id="away-pic">
                    <h3 class="away-name" id="away-name">${dataHighlights[1].events[a].strAwayTeam}</h3>
                    <div class="away-score" id="away-score">${dataHighlights[1].events[a].intAwayScore}</div>
                </div>
            
                    `

                    score.append(elem)
                    a++            
                    
                }
            }
            
            
            highlights.style.display = 'flex'
            card.innerHTML = ''
            card.style.display = 'none'
            card.style.gridTemplate = '0 / 0'
            score.style.display = 'flex'
           
            athleteh1.style.display = 'none'
            mediaQueryFunction(mediaQuery)

        }
           
        else if (res3.player[0] !== null){

            athleteh1.innerHTML = `${input.value.toUpperCase()}`
            
            card.innerHTML = `
            <img class="card__pic" id="card__pic" src="${res3.player[0].strCutout}/preview" alt="" srcset="">
        <div class="card__info">
            <div class="card__info__name" id="card__info__name">${input.value.toUpperCase()}</div>
            <div class="card__info__sport" id="card__info__sport">Sport: ${res3.player[0].strSport}</div>
            <div class="card__info__dob" id="card__info__dob">DOB: ${res3.player[0].dateBorn}</div>
            <div class="card__info__nationality" id="card__info__nationality">Nationalinty: ${res3.player[0].strNationality}</div>
            <div class="card__info__height" id="card__info__height">Height: ${res3.player[0].strHeight}</div>
            <a class="card__info--facebook" id="card__info__facebook" href="https://${res3.player[0].strFacebook}" target='_blank'>
                <i class="fab fa-facebook"></i>
            </a>
            <a class="card__info__instagram" id="card__info__instagram" href="https://${res3.player[0].strInstagram}" target='_blank'>
                <i class="fab fa-instagram"></i>
            </a>
       
        </div>
        <p class="card__about__info" id="card__about__info">${res3.player[0].strDescriptionEN}</p>
            `

            let facebook = document.querySelector('#card__info__facebook')
            let instagram = document.querySelector('#card__info__instagram')

            if (`${res3.player[0].strFacebook}` === ""){
                facebook.style.display = "none"
            } else {
                facebook.style.display = "inline-block"

            }


            if (`${res3.player[0].strInstagram}` === ""){
                instagram.style.display = "none"
            } else {
                instagram.style.display = "inline-block"
            }

            card.style.gridTemplate = '200px auto / 200px auto'
            card.style.gridTemplateAreas = '"img about" "info about"'
            highlights.style.display = 'none'
            highlights.innerHTML = ''
            score.style.display = 'none'
            score.innerHTML = ''
                 
            mediaQueryFunction(mediaQuery)
            
        
        }
        document.querySelector('.description').style.display = 'none'

    } catch(err) {
        console.log(err.message);
    }
}

function mediaQueryFunction(mediaQuery){
    if (card.querySelectorAll('*').length > 3 && mediaQuery.matches){
        card.style.display = 'grid'
    }
    else if (card.querySelectorAll('*').length > 3 && !mediaQuery.matches){
        card.style.display = 'flex'
    }
    
      
      if (mediaQuery.matches) {
        console.log('added animation classes');
        card.classList.add('animation')
        score.classList.add('animation')
        highlights.classList.add('animation')

      } else if (!mediaQuery.matches){
        card.classList.remove('animation')
        score.classList.remove('animation')
        highlights.classList.remove('animation')
      }

    VanillaTilt.init(document.querySelectorAll(".animation .highlights__item"), {
        max: 15,
        speed: 400,
        glare: true,
        "max-glare": 0.5,
        scale: 1.05,
    });

    VanillaTilt.init(document.querySelectorAll(".animation .score-item-grid"), {
        max: 15,
        speed: 400,
        glare: true,
        scale: 1.1,
    });
    VanillaTilt.init(document.querySelector(".card.animation"), {
        max: 10,
        speed: 600,
        transition: true,
        perspective: 2000,
        easing: "cubic-bezier(.03,.98,.52,.99)",
        axis: 'x',
        glare: true,
        "glare-prerender": false,
        "max-glare": 0.5,
    });
}


mediaQuery.addListener(mediaQueryFunction)



btnMain.addEventListener('click', () => {
    inputValue = input.value.replace(" ", "_")
    getData()
})

input.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        inputValue = input.value.replace(" ", "_")
        getData()
    }
})

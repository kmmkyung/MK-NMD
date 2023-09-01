// 장바구니
const basketStarterEl = document.querySelector('.basket-starter')
const basketEl = basketStarterEl.querySelector('.basket')

function showBasket(){
  basketEl.classList.add('show')
}

function hideBasket(){
  basketEl.classList.remove('show')
}

basketStarterEl.addEventListener('click', function(event){
  // 이벤트 버블링 막기
  event.stopPropagation()
  // contains = 있으면 true / 없으면 false
  if(basketEl.classList.contains('show')){
    hideBasket()
  }
  else{
    showBasket()
  }
})

basketEl.addEventListener('click', function(event){
  event.stopPropagation()
})

window.addEventListener('click',function(){
  hideBasket()
})


// 검색
const headerEl = document.querySelector('header');
const headerMenuEls = [...headerEl.querySelectorAll('ul.menu > li')]
const searchWrapEl = headerEl.querySelector('.search-wrap');
const searchStarterEl = headerEl.querySelector('.search-starter');
const searchCloserEl = searchWrapEl.querySelector('.search-closer');
const searchshadowEl = searchWrapEl.querySelector('.shadow');
const searchInputEl = searchWrapEl.querySelector('input');
const searchDelayEls = [...searchWrapEl.querySelectorAll('li')]

searchStarterEl.addEventListener('click',showSearch)
searchCloserEl.addEventListener('click',hideSearch)
searchshadowEl.addEventListener('click',hideSearch)

function showSearch(){
  headerEl.classList.add('searching')
  document.documentElement.classList.add('fixed')
  headerMenuEls.reverse().forEach(function(v,i){
    // 0.4초 안으로 12개가 다 사라지게
    v.style.transitionDelay = i * .4 / headerMenuEls.length +'s'
  })
  searchDelayEls.forEach(function(v,i){
    v.style.transitionDelay = i * .4 / searchDelayEls.length +'s'
  })
  setTimeout(function(){
    searchInputEl.focus()
  },600)
}
function hideSearch(){
  headerEl.classList.remove('searching')
  document.documentElement.classList.remove('fixed')
  headerMenuEls.reverse().forEach(function(v,i){
    // 0.4초 안으로 12개가 다 사라지게
    v.style.transitionDelay = i * .4 / headerMenuEls.length +'s'
  })
  searchDelayEls.reverse().forEach(function(v,i){
    v.style.transitionDelay = i * .4 / searchDelayEls.length +'s'
  })
  searchDelayEls.reverse()
  searchInputEl.value=''
}
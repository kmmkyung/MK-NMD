window.addEventListener('DOMContentLoaded',function(){
  const badgeEl = document.querySelector('.badges')
  window.addEventListener('scroll',_.throttle(function(){
    console.log(window.scrollY);
    if(window.scrollY > 500){
      // gsap.to(요소,지속시간,옵션(객체))
      gsap.to(badgeEl, 0.6,{
        opacity:0,
        display:'none'
      })
    }
    else{
      gsap.to(badgeEl, 0.6,{
        opacity:1,
        display:'block'
      })
    }
  },300))
  
  const fadeEls = document.querySelectorAll('.fade-in')
  fadeEls.forEach(function(v,i){
    gsap.to(v,1,{
      opacity:1,
      delay:(i+1)*.7
    })
  })

  new Swiper('.notice-line .swiper',{
    direction:'vertical',
    autoplay: true,
    loop: true
  });
})
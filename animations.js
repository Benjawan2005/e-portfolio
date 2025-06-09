document.addEventListener("DOMContentLoaded",function(){
    const animate = document.querySelectorAll('.animate');
    const BgProfile = document.querySelectorAll('.BgProfile');
    const BgContact = document.querySelectorAll('.BgContact1');
    const edulevel = document.querySelectorAll('.edu-level');
    const eduani = document.querySelectorAll('.edu-ani');
    const btn = document.querySelectorAll('.btn');
    
    const screenFirstTL = gsap.timeline();
  
  screenFirstTL.from([animate,btn], {
    duration: 0.8,
    opacity: 0,
    ease: "power4.out",
    y: 100,
    stagger: 0.1
  });
  screenFirstTL.from([BgProfile,BgContact,edulevel,eduani], {
    duration: 0.3,
    opacity: 0,
    ease: "power4.out",
    y: -100,
    stagger: 0.1
  });
  




})
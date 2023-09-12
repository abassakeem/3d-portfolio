import { gsap } from "gsap";
import React from 'react'

export const scrollAnimation = (position,target,isMobile,onUpdate) => {
 const tl = gsap.timeline();
 
 tl.to(position, {
 
    x : !isMobile ? 3.88: -7.57,
    y: !isMobile ? 6.69 : 0.3,
    z: !isMobile ? 1.15: 1.57,

    scrollTrigger:{
      trigger: ".sound-section",
      start: "top bottom",
      end: "top top",
      scrub: 2 ,
      immediateRender: false
  },
  onUpdate
 })
 .to(target, {

    x : !isMobile ? -11.5 : 1.0,
    y: !isMobile ? -18: 0,
    z: !isMobile ? 0: 0.7, 
    scrollTrigger: {
    trigger: ".sound-section",
    start: "top bottom",
    end: "top top",
    scrub: 2 ,
    immediateRender: false
  },
  
 })
 .to(".jumbotron-section", {
    opacity:0,
 
    scrollTrigger: {
    trigger: ".sound-section",
    start: "top bottom",
    end: "top top",
    scrub: 2 ,
    immediateRender: false
  },
  
 })
 .to(".sound-section-content", {
    opacity:1,
 
    scrollTrigger: {
    trigger: ".sound-section",
    start: "top bottom",
    end: "top top",
    scrub: 2 ,
    immediateRender: false
  },
  
 })
 .to(position, {
 
  x : !isMobile ? -10.94: 9.36,
  y: !isMobile ? 0.28: 10.95,
  z: !isMobile ? -14.41: 0.09,

  scrollTrigger:{
    trigger: ".works-section",
    start: "top bottom",
    end: "top top",
    scrub: 2 ,
    immediateRender: false
},
onUpdate
})
.to(target, {

  x : !isMobile ? -3.3: -1.62,
  y: !isMobile ? 0: 0.02,
  z: !isMobile ? 0.0: 0.06, 
  scrollTrigger: {
  trigger: ".works-section",
  start: "top bottom",
  end: "top top",
  scrub: 2 ,
  immediateRender: false
},
})
 .to(position, {
 
  x : !isMobile ? 6.35: 7.73,
  y: !isMobile ? 2.38: -0.35,
  z: !isMobile ? 5.84: -0.17,

  scrollTrigger:{
    trigger: ".contact-section",
    start: "top bottom",
    end: "top top",
    scrub: 2 ,
    immediateRender: false
},
onUpdate
})
.to(target, {

  x : !isMobile ? -2.: 1.0,
  y: !isMobile ? 0.0: 0.0,
  z: !isMobile ? 0.0: 0.7, 
  scrollTrigger: {
  trigger: ".contact-section",
  start: "top bottom",
  end: "top top",
  scrub: 2 ,
  immediateRender: false
},
})
 .to(position, {
 
  x : !isMobile ? 0.13: 0.01,
  y: !isMobile ? 4.892: 7.61,
  z: !isMobile ? 2.12: 3.15,

  scrollTrigger:{
    trigger: ".display-section",
    start: "top bottom",
    end: "top top",
    scrub: 2 ,
    immediateRender: false
},
onUpdate
})
.to(target, {

  x : !isMobile ? 0: 0,
  y: !isMobile ? 1.5: 1.22,
  z: !isMobile ? 0.0: 0.06, 
  scrollTrigger: {
  trigger: ".display-section",
  start: "top bottom",
  end: "top top",
  scrub: 2 ,
  immediateRender: false
},
})
.to(".display-section", {
  opacity:1,

  scrollTrigger: {
  trigger: ".display-section",
  start: "top bottom",
  end: "top top",
  scrub: 2 ,
  immediateRender: false
},

})
}

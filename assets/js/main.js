     //All variables
     let wagon = document.querySelector('.horn__wagon')   
     let loaderContainer = document.querySelector('.loader') 
     let times = document.querySelectorAll('.time')
     let allDesc = document.querySelectorAll('.desc')
     let allCircle = document.querySelectorAll('.bottom-circle')
     let mode = document.querySelector('.light__dark-mode');
     let sun = document.querySelector('.light-mode')
     let moon = document.querySelector('.dark-mode')
     let cssRoot = document.querySelector(':root')
     
     setInterval(()=>{
       let h = new Date().getHours();
       let m = new Date().getMinutes();
       let s = new Date().getSeconds();
       times.forEach(time=>time.innerHTML = `${h}:${m}:${s}`);
       
     },1000)



    //  toggel menu

    let toggle = document.querySelector("#menu-btn");
    toggle.addEventListener('click', ()=>{
        document.querySelector('#menu-btn').classList.toggle('fa-times');
        document.querySelector('.navbar').classList.toggle('active');
    })

    let btncloseToggle = document.querySelector(".navbar button");
    btncloseToggle.addEventListener('click',()=>{
        document.querySelector('.navbar').classList.remove('active');
    })


    //LOADING ANIMATION
     window.addEventListener('DOMContentLoaded',()=>{
        wagon.classList.add('fade');
        setTimeout(()=>{
        wagon.style.display = "none"

        var l1 = document.querySelector('.l1')
            l1.classList.add('test')
            var l2 = document.querySelector('.l2')
            l2.classList.add('test')
            var l3 = document.querySelector('.l3')
            l3.classList.add('test')
            var l4 = document.querySelector('.l4')
            l4.classList.add('test')
            var l5 = document.querySelector('.l5')
            l5.classList.add('test')
            var l6 = document.querySelector('.l6')
            l6.classList.add('test')
            var l7 = document.querySelector('.l7')
            l7.classList.add('test')
            document.querySelector('.loading').classList.add('test1')
        },300)

        setTimeout(()=>{
           loaderContainer.style.display = "none";
        },1500)
     })
     
     

     for(let i=0;i<allCircle.length;i++){
        console.log(allCircle[i])
        allCircle[i].addEventListener('mouseover',()=>{
            for(let j=0;j<allDesc.length;j++){
                
                if(i===j){
                    console.log(allDesc[j])
                    allDesc[j].classList.add('show');
                }
            }
        })
     }

     for(let i=0;i<allCircle.length;i++){
        console.log(allCircle[i])
        allCircle[i].addEventListener('mouseleave',()=>{
            for(let j=0;j<allDesc.length;j++){
              allDesc[j].classList.remove('show');
            }
        })
     }



    /********* CAROUSEL **********/

      $('.owl-carousel').owlCarousel({
            loop:true,
            margin:20,
            nav:false,
            dots:true,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplaySpeed: 1000,
            autoplayHoverPause:true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                900:{
                    items:1
                },
                1200:{
                    items:1
                }
            }
        })


        //DARK & LIGHT MODE

        mode.addEventListener('click',()=>{
            if(sun.classList.contains('active')){
                sun.classList.add('inactive')
                sun.classList.remove('active')
                if(moon.classList.contains('inactive')){
                    moon.classList.add('active')
                    moon.classList.remove('inactive')
                }
                cssRoot.style.setProperty('--bg-color','#000000')
                cssRoot.style.setProperty('--txt-color','#ffffff')
                cssRoot.style.setProperty('--header-bg','#0d0742')
                cssRoot.style.setProperty('--logo-style','#FF6400')
                cssRoot.style.setProperty('--header-icons','#ffffff')
                cssRoot.style.setProperty('--right-bg','#0d0742')
                cssRoot.style.setProperty('--bright','#bdbdbd')
            }else{
                sun.classList.add('active')
                sun.classList.remove('inactive')
                if(moon.classList.contains('active')){
                    moon.classList.add('inactive')
                    moon.classList.remove('active')
                }
                cssRoot.style.setProperty('--bg-color','#ffffff') 
                cssRoot.style.setProperty('--txt-color','#000000')
                cssRoot.style.setProperty('--header-bg','#F7F5F6')
                cssRoot.style.setProperty('--logo-style','#000000')
                cssRoot.style.setProperty('--header-icons','#636363')
                cssRoot.style.setProperty('--right-bg','#ffffff')
                cssRoot.style.setProperty('--bright','#626262')
            }
        })
        
            
            
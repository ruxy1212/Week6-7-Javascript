let currentItem = 0, card = document.querySelector(".card"),
    allItems = document.querySelectorAll(".carousel"), 
    btnCover = document.querySelectorAll(".highlighter"),
    prevBtn = document.querySelector(".btn.prev"),
    nextBtn = document.querySelector(".btn.next");

    card.addEventListener("mouseover", function(){
        prevBtn.classList.remove("unsee");
        nextBtn.classList.remove("unsee");
    });
    card.addEventListener("mouseout", function(){
        prevBtn.classList.add("unsee");
        nextBtn.classList.add("unsee");
    });

    prevBtn.addEventListener("mouseover", function(){
        btnCover[0].classList.remove("unbg");
    });
    nextBtn.addEventListener("mouseover", function(){
        btnCover[1].classList.remove("unbg");
    });
    prevBtn.addEventListener("mouseout", function(){
        btnCover[0].classList.add("unbg");
    });
    nextBtn.addEventListener("mouseout", function(){
        btnCover[1].classList.add("unbg");
    });
      

    function hideAll() {
        for (let i = 0; i < allItems.length; i++) {
            allItems[i].classList.add("unsee");
        }
    }      
    function startSlide(){
        hideAll();
        allItems[0].classList.remove("unsee");
    }
    function slideLeft(){
        hideAll();
        allItems[currentItem - 1].classList.remove("unsee");
        currentItem--;
    }   
    function slideRight(){
        hideAll();
        allItems[currentItem + 1].classList.remove("unsee");
        currentItem++;
    }
      
      prevBtn.addEventListener("click", function() {
        if (currentItem === 0) {
          currentItem = allItems.length;
        }
        slideLeft();
      });
      
      nextBtn.addEventListener("click", function() {
        if (currentItem === allItems.length - 1) {
          currentItem = -1;
        }
        slideRight();
      });
      
      startSlide();
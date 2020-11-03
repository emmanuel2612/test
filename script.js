window.onload = () => {


    const header = document.getElementById('header');
    const logo = document.getElementById('logo');
    const headerLink = document.getElementsByClassName('header-link');
    const mobileMenu = document.getElementById('mobile-menu');

    document.body.onscroll = () => {  

        if (document.documentElement.scrollTop > 10) {                    
            header.style.backgroundColor = "white";   
            logo.style.color = "#191919"; 
            mobileMenu.style.color = "#191919"; 
            
            for (let i = 0; i < headerLink.length; i++) {
                headerLink[i].style.color = "#191919";
            }
        }

        else {
            header.style.backgroundColor = "transparent";
            logo.style.color = "white"; 
            mobileMenu.style.color = "white"; 

            for (let i = 0; i < headerLink.length; i++) {
                headerLink[i].style.color = "white";
            }
        }
    }


    console.log("hey");






}

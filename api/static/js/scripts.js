// get the close btn
var alert_button = document.getElementsByClassName("alert-btn-close");

// looping into all alert close btns
for (let i = 0; i < alert_button.length; i++) {
    const btn = alert_button[i];

    btn.addEventListener('click' , function(){
        var dad = this.parentNode;
        dad.classList.add('animated' , 'fadeOut');
        setTimeout(() => {
            dad.remove();
        }, 1000);
    });
    
}
// check if the page have dropdwon menu
var dropdown = document.getElementsByClassName('dropdown');

if (dropdown.length >= 1) {
    
    for (let i = 0; i < dropdown.length; i++) {
        const item = dropdown[i];

        var menu,btn,overflow;
        
        item.addEventListener('click' , function(){            

            for (let i = 0; i < this.children.length; i++) {
                const e = this.children[i];

                if (e.classList.contains('menu')) {
                    menu = e;                  
                }else if (e.classList.contains('menu-btn')) {
                    btn = e;
                }else if (e.classList.contains('menu-overflow')) {
                    overflow = e;
                }
                              
            }
            
            if (menu.classList.contains('hidden')) {
                // show the menu
                showMenu();
            }else{
                // hide the menu
                hideMenu()
            }      


        });        
        

        var showMenu = function(){
            menu.classList.remove('hidden');
            menu.classList.add('fadeIn');
            overflow.classList.remove('hidden');            
        };

        var hideMenu = function(){
            menu.classList.add('hidden');
            overflow.classList.add('hidden');            
            menu.classList.remove('fadeIn');            
        };
        
                
        
    }    
    
};


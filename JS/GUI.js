var style = { 
    font: "32px Arial",
    fill: "#ff0044", 
    wordWrap: true, 
    align: "center"};


function UserInterface(game,x,y){
	ui = this;
	
    this.Menu = game.add.sprite(x,y,'fundoMenu');// background 
		this.Menu.scale.setTo(fillW,fillH);    
        this.Menu.anchor.setTo(0.5);
        this.Menu.fixedToCamera = true; 
		
	// fechar o inventario
	btnClose = (game.add.button(10-(this.Menu.width/2),10-(this.Menu.height/2),'btnClose',ui.closeMenu,this,0,0,1));  
            btnClose.anchor.setTo(0.5);
            btnClose.scale.setTo(fillW,fillH);
            btnClose.fixedToCamera = true; 
		this.Menu.addChild(btnClose);
	
	//Title
	menuName = game.add.text(0,10-(this.Menu.height/2),"Inventary",style);
            menuName.anchor.set(0.5);
            menuName.fixedToCamera =true;
		this.Menu.addChild(menuName);
	
	
	
	
	this.Menu.kill();
    this.menuisClose = true;

};

UserInterface.prototype.constructor = UserInterface;

UserInterface.prototype.open = function(Itens)
{  
    if(this.menuisClose){
       
		this.Menu.revive();   		
        
        // itens   
        var x = -260,y = -200;
        
        for( var c = 0;c < 25 ; c++ )
        {
            
            x += 60; 
            if(c%5 == 0 && c > 0)// Quebra de linha
            {
               x = -200;
               y += 60;
            }


            slot = game.add.sprite(x,y,'slot');// slot            
            slot.anchor.setTo(0.5); 
            slot.scale.setTo(fillW,fillH); 
            slot.fixedToCamera = true;     
            
			if(c < Itens.length){
				btnicon = Itens[c].btn(game,0,0,'itens');     
				btnicon.anchor.setTo(0.5); 
					slot.addChild(btnicon);	
			}	
		this.Menu.addChild(slot);
            
       
        }
        this.menuisClose = false;
	}
};


UserInterface.prototype.closeMenu = function()
{
    this.Menu.kill();
    this.menuisClose = true;
};
var fillW = window.innerWidth / 1330;
var fillH = window.innerHeight / 800;    


var game = new Phaser.Game(window.innerWidth,window.innerHeight, Phaser.AUTO);

var start = 
{
    preload: function()
    {	
		game.load.image('fundoMenu','assets/GUI/fundo.png');
		game.load.spritesheet('btnClose','assets/GUI/btnClose.png',68,70,2);
		game.load.spritesheet('btnOpen','assets/GUI/abrir.png',94,92,2);
		game.load.image('slot','assets/GUI/slot.png'); 
        game.load.spritesheet('itens','assets/GUI/itens.png',34, 34,210);
		
    },
    create: function()
    {
        
        this.world.setBounds(0, 0,window.innerWidth, window.innerHeight);
		
		this.openMenu = game.add.button(game.world.centerX,game.world.centerY,'btnOpen',this.open, this,0,1,1);
		this.openMenu.anchor.setTo(0.5);
		
		this.UI = new UserInterface(game,game.world.centerX,game.world.centerY);
        
		this.itens= 
		[
			new Item("item1 ","consumivel",0,0,10),
			new Item("item2 ","consumivel",0,0,11)
		]
		
		
		
    },
	
	
	
	open:function()
	{
		this.UI.open(this.itens);
	}
};
game.state.add('start',start);
game.state.start('start');
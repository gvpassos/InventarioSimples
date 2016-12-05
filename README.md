# InventarioSimples
Um inventario simples usando o phaserJS

A classe Item herda de Phaser.Button a adiciona os seguintes atributos

   name = nome do item   
   tipo = tipo do item (ex: arma, armadura, pocao )   
   damage = se o item da dano e quanto   
   resitencia = defesa do item se ele tiver   
   icone = numero do icone no spritesheet
    
e as seguinte funcoes:

> btn(game,x,y,sprite)  cria um botao Phaser com o icone do item
   . game é uma variavel Phaser.game para se referir ao jogo
   . x posicao no eixo X
   . y posicao no eixo Y
   .sprite nome da sprite sheet que contem o icone 
   
A classe UserInterface e a classe que monta os objetos na tela possui as seguinte funcoes 

>open(Itens)abre o inventario 
   . Array de Items que estao no inventario

>close() fecha o inventario
    

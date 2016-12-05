# InventarioSimples
Um inventario simples usando o phaserJS

A classe Item herda de Phaser.Button a adiciona os seguintes atributos

   name = nome do item   
   tipo = tipo do item (ex: arma, armadura, pocao )   
   damage = se o item da dano e quanto   
   resitencia = defesa do item se ele tiver   
   icone = numero do icone no spritesheet
    <br>
e as seguinte funcoes:
<br>
> btn(game,x,y,sprite)  cria um botao Phaser com o icone do item<br>
   . game é uma variavel Phaser.game para se referir ao jogo<br>
   . x posicao no eixo X<br>
   . y posicao no eixo Y<br>
   .sprite nome da sprite sheet que contem o icone <br>



A classe UserInterface e a classe que monta os objetos na tela possui as seguinte funcoes 
<br>
>open(Itens)abre o inventario <br>
   . Array de Items que estao no inventario<br>
<br>
>close() fecha o inventario
    

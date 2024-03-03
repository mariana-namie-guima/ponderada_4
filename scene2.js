//declaração das variaveis
var placar;
var pontuacao = 0;
var maca;
var player;
var raio1;
var raio2;
var barreira;

class scene2 extends Phaser.Scene{
    constructor(){
        super({key: 'scene2'})
    }


    //carregamento prévio das imagens
    preload() {
        this.load.spritesheet('player', 'assets/passaro.png', {frameWidth: 114, frameHeight: 90});
        this.load.image('maca', 'assets/maca.png');
        this.load.image('bg', 'assets/bg.jpeg');
        this.load.image('raio', 'assets/raio.png');
        this.load.image('barreira', 'assets/predio.jpeg');
    }


    create() {
        console.log('cena 2');
        //criar background
        this.add.image(0, 0, 'bg').setOrigin(0, 0);

        //criar player, sua animacao e colisão com os limites do mundo
        player = this.physics.add.sprite(80, 300, 'player');
        player.setCollideWorldBounds(true);
        this.anims.create({
            key: 'voar',
            frameRate: 16,
            frames: this.anims.generateFrameNumbers('player', {start: 0, end: 15}),
            repeat: -1,
        })
        player.anims.play('voar').setFlip(true);

        //criar barreira
        barreira = this.physics.add.staticImage(300, 500, 'barreira');
        this.physics.add.collider(player, barreira);


        //adicionar teclado
        this.cursors = this.input.keyboard.createCursorKeys();

        //adicionar placar
        placar = this.add.text(730, 50, 'Pontos:'+ pontuacao, {fill: '#000000', fontSize: '30px'});

        //adicionar maca
        maca = this.physics.add.sprite(540, 300, 'maca');

        //quando o player enconsta na maca, um ponto é adicionado ao placar e a maca muda de posição
        this.physics.add.overlap(player, maca, function() {
            maca.setVisible(false);
            var posicaoMaca_Y = Phaser.Math.RND.between(30, 570);
            var posicaoMaca_X = Phaser.Math.RND.between(30, 870);
            maca.setPosition(posicaoMaca_X, posicaoMaca_Y);
            pontuacao += 1;
            placar.setText('Pontos:'+ pontuacao);
            maca.setVisible(true);
        })

        //adicionar raios
        raio1 = this.physics.add.sprite(Phaser.Math.RND.between(250, 850), Phaser.Math.RND.between(50, 550),'raio');
        raio2 = this.physics.add.sprite(Phaser.Math.RND.between(250, 850), Phaser.Math.RND.between(50, 550),'raio');

        //colisão entre player e raios leva a game over
        this.physics.add.collider(player, raio1, () =>{
            this.scene.stop('scene2'),
            this.scene.start('scene3');
        });

        this.physics.add.collider(player, raio2, () =>{
            this.scene.stop('scene2'),
            this.scene.start('scene3');
        });
    }

    update() {
        player.setVelocityX(0);        //quando nenhuma tecla eh pressionada, o player para
        player.setVelocityY(0);
        if (this.cursors.left.isDown){       //movimenta para a esquerda quando a seta do teclado eh apertada
            console.log("esquerda");            
            player.setFlipX(false);     
            player.setVelocityX(-200);
        } else if (this.cursors.right.isDown){       //movimenta para a direita
            console.log("direita");            
            player.setFlipX(true);  //inverte a sprite da posicao de lado do personagem
            player.setVelocityX(200);      
        }
        
        if (this.cursors.up.isDown){      //movimenta para cima
            console.log("sobe");
            player.setVelocityY(-200);
        } else if (this.cursors.down.isDown){        //movimenta para baixo
            console.log("desce");
            player.setVelocityY(200);
        }

        //player ganha quando atinge 10 pontos
        while (pontuacao >= 10) {
            //mudar para a cena de parabéns
            pontuacao = 0
            this.scene.stop('scene2'),
            this.scene.start('scene4');
        }
    }
}
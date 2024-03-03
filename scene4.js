class scene4 extends Phaser.Scene{

    constructor() {
        super({key: "scene4"})
    }

    create() {
        console.log('cena 4');
        this.add.text(170, 200, "PARABÉNS!", {fill: '#000000', fontSize:'100px'});
        this.add.text(200, 350, "clique para jogar novamente", {fill: '#000000', fontSize: '30px'});
        this.input.on('pointerdown', () => {

            //mudar da cena de parabèns para a tela inicial
            this.scene.stop('scene4'),
            this.scene.start('scene0');
        })
    }
}
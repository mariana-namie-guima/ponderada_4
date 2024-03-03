class scene3 extends Phaser.Scene{

    constructor() {
        super({key: "scene3"})
    }

    create() {
        console.log('cena 3');
        this.add.text(320, 200, "GAME \nOVER", {fill: '#000000', fontSize:'100px'});
        this.add.text(200, 400, "clique para tentar novamente", {fill: '#000000', fontSize: '30px'});
        this.input.on('pointerdown', () => {
            //mudar da cena de game over para a cena do jogo
            this.scene.stop('scene3'),
            this.scene.start('scene2');
        })
    }
}
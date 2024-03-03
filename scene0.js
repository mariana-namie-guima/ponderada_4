class scene0 extends Phaser.Scene{

    constructor() {
        super({key: "scene0"})
    }

    create() {
        console.log('cena 0');
        this.add.text(150, 250, "Seja bem vindo ao Flying!", {fill: '#000000', fontSize:'40px'});
        this.add.text(290, 325, "clique para começar", {fill: '#000000', fontSize: '30px'});
        this.input.on('pointerdown', () => {
            this.scene.stop('scene0'),
            this.scene.start('scene1');
        })
    }
}
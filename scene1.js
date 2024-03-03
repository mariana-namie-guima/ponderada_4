class scene1 extends Phaser.Scene{

    constructor() {
        super({key: "scene1"})
    }

    create() {
        console.log('cena 1');
        this.add.text(50, 100, "OBJETIVO", {fill: '#FFFFFF', fontSize:'40px'});
        this.add.text(50, 150, "O passáro deve recolher 10 maçãs e evitar \nos raios", {fill: '#000000', fontSize:'30px'});
        this.add.text(50, 250, "CONTROLES", {fill: '#FFFFFF', fontSize:'40px'});
        this.add.text(50, 300, "Seta direita: move para frente \nSeta esquerda: move para trás \nSeta cima: sobe \nSeta baixo: desce", {fill: '#000000', fontSize: '30px'});
        this.add.text(600, 500, "clique para continuar", {fill: '#000000', fontSize: '20px'});
        this.input.on('pointerdown', () => {
            this.scene.stop('scene1'),
            this.scene.start('scene2');
        })
    }
}
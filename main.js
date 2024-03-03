window.onload = function(){

    const config = {
        type: Phaser.AUTO,
        width: 900,
        height: 600,
        backgroundColor: "77ddf5",
        physics: {
            default: "arcade",
            arcade: {
                gravity: {y: 0},
                debug: false,
            }
        },
        scene: [scene0, scene1, scene2, scene3, scene4],
    }
    let game = new Phaser.Game(config)
}
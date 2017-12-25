class Game {
    constructor() {
        this.width = 500
        this.height = 500
        this.gridSize = 25

        this.girdCanvas = document.querySelector('#grid')
        this.gridContext = this.girdCanvas.getContext('2d')

        this.grid = new Grid(
            this.width/this.gridSize,
            this.height/this.gridSize,
            this.gridSize,
            this.gridContext
        )

        this.setup()
    }

    setup() {
        this.gridContext.strokeStyle = "#12610f"
        this.gridContext.fillStyle = "#FFA500"
    }

    listen() {
        this.girdCanvas.addEventListener('click', (e) => {
            let i = Math.floor(e.offsetX / this.gridSize)
            let j = Math.floor(e.offsetY / this.gridSize)
            // log(i + ', ' + j)
            this.grid.explore(i, j)
        })
    }

    update() {
    }

    draw() {
        this.grid.draw()
    }

    start() {
        this.listen()
        this.draw()
    }
}

let game = new Game()
game.start()

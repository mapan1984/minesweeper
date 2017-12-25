class Cell {
    constructor(x, y, width, context) {
        this.x = x
        this.y = y
        this.width = width
        this.context = context
        this.content = null
        this.revealed = false
    }

    draw() {
        this.context.strokeRect(
            this.x * this.width,
            this.y * this.width,
            this.width,
            this.width
        )
        this.context.fillRect(
            this.x * this.width,
            this.y * this.width,
            this.width-2,
            this.width-2
        )
    }

    reveal() {
        this.revealed = true
        this.context.clearRect(
            this.x * this.width,
            this.y * this.width,
            this.width-2,
            this.width-2
        )
        this.context.fillText(
            this.content,
            this.x * this.width + this.width*0.5,
            this.y * this.width + this.width*0.5,
            this.width
        )
    }
}

class Cell {
    constructor(x, y, width, context) {
        this.x = x
        this.y = y
        this.width = width
        this.context = context
        this.content = null
    }

    draw() {
        this.context.strokeRect(
            this.x * this.width,
            this.y * this.width,
            this.width,
            this.width
        )
    }

    reveal() {
        if (this.content == -1) {
            this.context.beginPath()
            let radius = this.width / 2
            this.context.arc(
                this.x * this.width + this.width / 2,
                this.y * this.width + this.width / 2,
                this.width / 2 - 3,
                0,
                Math.PI*2
            )
            this.context.fill()
        } else {
            this.context.fillText(
                this.content,
                this.x * this.width + this.width*0.5,
                this.y * this.width + this.width*0.75,
                this.width / 2
            )
        }
    }
}

class Grid {
    constructor(ncols, nrows, gridSize, context) {
        this.ncols = ncols
        this.nrows = nrows
        this.gridSize = gridSize
        this.context = context
        this.cells = []
        this.mines = []
        this.generateCells()
        this.setContentOfCells()
    }

    generateCells() {
        for (let i = 0; i < this.ncols; i++) {
            let col = []
            for (let j = 0; j < this.nrows; j++) {
                let cell = new Cell(i, j, this.gridSize, this.context)
                if (probability(1, 10)) {
                    cell.content = -1
                    this.mines.push(cell)
                }
                col.push(cell)
            }
            this.cells.push(col)
        }
    }

    setContentOfCells() {
        for (let col of this.cells) {
            for (let cell of col) {
                if (!cell.content) {
                    cell.content = this.countAdjacentMines(cell)
                }
            }
        }
    }

    countAdjacentMines(cell) {
        let sum = 0
        for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
                let x = cell.x + i
                let y = cell.y + j
                if (x < 0 || x >= this.ncols || y < 0 || y >= this.nrows) {
                    continue
                } else {
                    if (this.cells[x][y].content == -1) {
                        sum++
                    }
                }
            }
        }
        return sum
    }

    draw() {
        for (let col of this.cells) {
            for (let cell of col) {
                cell.draw(this.context)
            }
        }
    }

    explore(x, y) {
        let cell = this.cells[x][y]
        if (cell.revealed) {
            return
        }
        if (cell.content === -1) {
            cell.reveal()
            for (let mine of this.mines) {
                mine.reveal()
            }
            alert('Boom!!!')
        } else if (cell.content === 0) {
            cell.reveal()
            for (let i = -1; i <= 1; i++) {
                for (let j = -1; j <= 1; j++) {
                    let n = cell.x + i
                    let m = cell.y + j
                    if (n < 0 || n >= this.ncols || m < 0 || m >= this.nrows) {
                        continue
                    } else {
                        this.explore(n, m)
                    }
                }
            }
        } else {
            cell.reveal()
        }
    }
}

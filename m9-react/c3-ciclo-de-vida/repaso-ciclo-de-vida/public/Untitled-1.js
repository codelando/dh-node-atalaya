/* Molde */
class dosDimensiones {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    
}

class tresDimensiones extends dosDimensiones {
    constructor(x, y, z) {
        super(x, y);
        this.z = z;
    }
}

/* Instancia / Objeto */
let mis2d = new dosDimensiones(10, 10);
let misOtras2d = new dosDimensiones(30, 20);

let mis3d = new tresDimensiones(7,8,213);
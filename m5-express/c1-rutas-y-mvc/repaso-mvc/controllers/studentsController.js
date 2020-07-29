const fs = require('fs');
const students = JSON.parse(fs.readFileSync(__dirname + '/../data/students.json', 'utf-8'));

module.exports = {
    index: (req, res) => {
        res.send('Página general de estudiantes');
    },
    getByGroup: (req, res) => {

        if(req.params.id >= 1 && req.params.id <= 12) {
            res.send(students.filter(student => student.group == req.params.id))
        } else {
            res.send('El número de grupo es inválido');
        }
    },
    getByName: (req, res) => {

        if(req.params.name) {
            res.send(students.filter(student => student.name.toLowerCase().includes(req.params.name.toLowerCase())))
        } else {
            res.send('El nombre de grupo es obligatorio');
        }
    }
}
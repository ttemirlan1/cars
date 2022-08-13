const db = require('../db')

class CarController {
    async createCar(req, res) {
        const {name, surname}  = req.body;
        const newCar  = await db.query(`INSERT INTO person (name, surname) VALUES ($1, $2) RETURNING *`, [name, surname])
        res.json(newCar[0])
    }
    async getCars(req, res) {
        const users = await db.query('SELECT * FROM person')
        res.json(users.rows)
    }
    async getOneCar(req, res) {
        const id = req.params.id
        const user = await db.query('SELECT * FROM person WHERE id = $1', [id])
        res.json(user.rows[0])
    }
    async updateCar(req, res) {
        
    }
    async deleteCar(req, res) {
        
    }
}

module.exports = new CarController()
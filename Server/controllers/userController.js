class UserController{
    async registration(req, res) {

    }

    async login(req, res) {

    }

    async check(req, res) {
        res.json({message: 'KY'})
    }
}

module.exports = new UserController()
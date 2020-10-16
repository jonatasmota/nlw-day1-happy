//const orphanages = require('./database/fakedata');
const { catch } = require('./database/db');
const Database = require('./database/db');
const saveOrphanage = require('./database/saveOrphanage');

module.exports = {

    index(request, response) {
        return response.render('index')
    },

    orphanage(request, response) {
        return response.render('orphanage')
    },

    async orphanages(request, response) {
        try {
            const db = await Database;
            const orphanages = await d b.all("SELECT * FROM orphanages")
            return response.render('orphanages', {orphanages})
        } catch (error) {
            console.log(error)
            return response.send('Erro no banco de dados!')
        }
    },

    createOrphanage(request, response) {
        return response.render('create-orphanage')
    }

}
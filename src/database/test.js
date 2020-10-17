const Database = require('./db.js');
const saveOrphanage = require('./saveOrphanage')

Database.then(async db => {
    //Inserir dados na tabela
    await saveOrphanage(db, {
        lat: "-27.222633",
        lng: "-49.6555874",
        name: "Casa Lar",
        about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        whatsapp: "5654899",
        images: [
            "https://images.unsplash.com/photo-1540479859555-17af45c78602?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",

            "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
        ].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar",
        opening_hours: "Horário das visitas Das 08hs as 18hs",
        open_on_weekends: "0"
    })

    //consultar dados da tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages) 

    // consultar somente 1 orfanato pelo id
    const orphanage = await db.all('SELECT * FROM orphanages WHERE  id = "3"')
    console.log(orphanage)

    // deletar dado da tabela 
    /*console.log(await db.run('DELETE FROM orphanages WHERE id = "4"'))
    console.log(await db.run('DELETE FROM orphanages WHERE id = "5"'))
    console.log(await db.run('DELETE FROM orphanages WHERE id = "6"'))
    */
})
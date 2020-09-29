const { group } = require('../../database/models');

module.exports = {
    index: (req, res) => {
        // let groups = groupsModel.all()
        // res.render('groups/index',  { groups });

        group.findAll({ include: 'category' })
            .then(groups => {
                if(groups.length) {
                    let response = {
                        meta: {
                            url: req.originalUrl,
                            status: 200,
                            count: groups.length
                        },
                        data: groups
                    }

                    return res.json(response);
                } else {
                    return res.status(404).json( {error: 'No results found'} );
                }
            })
            .catch(error => {
                console.log(error);
                return res.status(500).json( { error: 'Could not connect to database' } );;
            })

    }
}
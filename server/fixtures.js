if (Deals.find().count() === 0) {

    Deals.insert({

        title: 'The Last Of Us',
        url: 'http://game.co.uk',
        price: '9.99',
        retailer: 'Game.co.uk',
        details: 'Never played this and I know its last gen but fancied it for a while. ' +
        'The prices always seemed to hover around 12-15 territory so imagine my surprise when I walked into game today. ' +
        'This price is brand new not pre owned.',
        user: 'Chris Maher',
        postedDate: '09/09/2015'

    })


}
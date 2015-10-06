Deals = new Mongo.Collection('deals');
Deals.attachSchema(new SimpleSchema({

    title: {
        type: String,
        max: 200
    }, link: {
        type: String,

    },
    details: {
        type: String

    },
    retailer: {
        type: String,
        trim: true
    },
    price: {
        type: Number,
        min: 0

    },
    image: {
        type: String,
        autoform: {
            afFieldInput: {
                type: 'cloudinary'
            }
        }
    },
    urlimage: {
        type: String
    },
    tags: {
        type: String
    },
    startdate: {
        type: Date,
        optional: true

    },
    enddate: {
        type: Date,
        optional: true
    },
    votes: {
        type: Number
    }
    ,
    created: {
        type: Date
    }

}));



var Images;
Images = new FS.Collection("images", {
    stores: [new FS.Store.GridFS("images", {})]
});

Deals = new Mongo.Collection('deals');
Deals.attachSchema(new SimpleSchema({

    title: {
        type: String,
        max: 200
    }, link: {
        type: String
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
        min: 0.0,
        decimal: true

    },
    file: {
        type: String,
        label: 'Profile Picture',
        autoform: {
            afFieldInput: {
                type: 'fileUpload',
                collection: 'images'
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
        type: Number,
        optional: true
    }
    ,
    created: {
        type: Date,
        optional: true
    }

}));




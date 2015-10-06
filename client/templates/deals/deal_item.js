/**
 * Created by Chris on 05/10/2015.
 */

Template.dealItem.helpers({
    domain: function () {
        var a = document.createElement('a');
        a.href = this.url;
        return a.hostname;
    }
});


Handlebars.registerHelper('formatDate', function(dateString) {
    var date = new Date(dateString);
    var formattedDate = date.toISOString().split('T')[0];    
    return formattedDate;
});
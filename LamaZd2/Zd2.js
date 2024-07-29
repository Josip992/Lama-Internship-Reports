function checkOvjeraSudionikStatus(PkOvjeraSudionikStatus) {
    if (PkOvjeraSudionikStatus === 3) {
        return false;
    }
    return PkOvjeraSudionikStatus === 2;
}

Handlebars.registerHelper('formatDate', function(dateString) {
    const originalDate = new Date(dateString);
    const day = originalDate.getDate() < 10 ? '0' + originalDate.getDate() : originalDate.getDate();
    const month = (originalDate.getMonth() + 1) < 10 ? '0' + (originalDate.getMonth() + 1) : (originalDate.getMonth() + 1);
    const formattedDate = `${day}.${month}.${originalDate.getFullYear()}`;
    return formattedDate;
});

Handlebars.registerHelper('splitText', function(text) {
    var index = text.indexOf("pa");
    var part1 = text.substring(0, index + 2);
    var part2 = text.substring(index + 2);
    return new Handlebars.SafeString(part1 + "<br>" + part2);
});
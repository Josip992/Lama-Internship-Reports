
Handlebars.registerHelper('formatDate', function(dateString) {
    const originalDate = new Date(dateString);
    const day = originalDate.getDate() < 10 ? '0' + originalDate.getDate() : originalDate.getDate();
    const month = (originalDate.getMonth() + 1) < 10 ? '0' + (originalDate.getMonth() + 1) : (originalDate.getMonth() + 1);
    const formattedDate = `${day}.${month}.${originalDate.getFullYear()}`;
    return formattedDate;
});

function checkOvjeraSudionikStatus(NazivOvjeraSudionikStatus) {
    if (NazivOvjeraSudionikStatus === "Odbijen") {
        return false;
    }
    return NazivOvjeraSudionikStatus === "Za ovjeru";
}

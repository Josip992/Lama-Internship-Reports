Handlebars.registerHelper('formatDate', function(dateString) {
    let date = new Date(dateString);
    let formattedDate = date.toISOString().split('T')[0];    
    return formattedDate;
});


function getPageNumber (pageIndex) {
    if (pageIndex == null) {
        return ''
    }
    
    const pageNumber = pageIndex + 1
    
    return pageNumber
}

function getTotalPages (pages) {
    if (!pages) {
        return ''
    }
    
    return pages.length
}

Handlebars.registerHelper('toggleCheckbox', function(value) {
  return value ? '?' : '?';
});

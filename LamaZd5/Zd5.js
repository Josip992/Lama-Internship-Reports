Handlebars.registerHelper('add', function() {
    var sum = 0, i = 0, args = arguments, l = args.length-1;
    while (i < l) {
        sum += parseFloat(args[i++]);
    }
    return sum.toFixed(2);
});

Handlebars.registerHelper('subtract', function() {
    var difference = parseFloat(arguments[0]);
    var i = 1, args = arguments, l = args.length - 1;
    while (i < l) {
        difference -= parseFloat(args[i++]);
    }
    var result = (difference < 0) ? Math.abs(difference) : -Math.abs(difference);
    return result.toFixed(2);
});

Handlebars.registerHelper('sum', function(items, ...fields) {
  return items.reduce((total, item) => {
    fields.forEach(field => {
      total += parseFloat(item[field] || 0); 
    });
    return parseFloat(total.toFixed(2));
  }, 0).toFixed(2);
});

Handlebars.registerHelper('grandSum', function(items, studijArrayName, podaciName, ...fieldNames) {
  let total = 0;

  items.forEach(item => {
    if (item.hasOwnProperty(studijArrayName)) {
      item[studijArrayName].forEach(studij => {
        if (studij.hasOwnProperty(podaciName)) {
          studij[podaciName].forEach(podaci => {
            fieldNames.forEach(fieldName => {
              total += parseFloat(podaci[fieldName] || 0);
            });
          });
        }
      });
    }
  });
  
  return total.toFixed(2);
});



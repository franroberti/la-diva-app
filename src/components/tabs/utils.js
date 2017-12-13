function removeDuplicatesFromList(a,property) {
    var seen = {};
    var out = [];
    var len = a.length;
    var j = 0;
    for(var i = 0; i < len; i++) {
        var item = a[i][property].toString().toUpperCase().replace(/ /g,'');
        if(seen[item] !== 1) {
            seen[item] = 1;
            out[j++] = item;
        }
    }
    return out;
}

function getTotalPrice(list,labelPropery,label,valuesProperty){
    var totalPrice = 0;
    for(var i=0;i<list.length;i++){
        if(list[i][labelPropery].toString().toUpperCase().replace(/ /g,'') === label.toUpperCase().replace(/ /g,'')){
            totalPrice += list[i][valuesProperty]
        }
    }
    return totalPrice;
}

function getValuesFromList(list,labelProperty,labels,valuesProperty){
    var values = [];
    for(var i= 0; i < labels.length; i++){
        values.push(getTotalPrice(list,labelProperty,labels[i],valuesProperty));
    }
    return values;
}

export function listToLabelAndValues(list,labelProperty,valuesProperty){
    var result = {};
    const labels = removeDuplicatesFromList(list,labelProperty);
    result.labels = labels;

    const values = getValuesFromList(list,labelProperty,labels,valuesProperty);
    result.values = values;
    return result
}
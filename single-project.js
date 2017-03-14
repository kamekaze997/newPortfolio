
 //get the HASH from the URL
 var hashString = document.location.hash;
 //remove the #
 hashString = hashString.substr(1,hashString.length-1);
console.log(hashString);
console.log(parseParms(hashString));
//For example: str = ‘paramA=34&paramB=23&…’ 
function parseParms(str) {
    if(typeof(str)=='undefined' || str=='')
    {
        return {};
    }
    var pieces = str.split('&')
    var data = {};
    var parts = [];
    // process each query pair 
    for (var i = 0; i < pieces.length; i++) {
        parts = pieces[i].split('=');
        if (parts.length < 2) {
        parts.push('');
    }
    data[decodeURIComponent(parts[0])] = decodeURIComponent(parts[1]);
    }
    return data;
}
/*
$(document).ready(function(){
    var project = $.url(document.location).fparam("project");
    alert(project);
});*/
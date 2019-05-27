function array_generator(type, start, num) {
    var arr = [];

    for (var i = start; i < start + num; i++) {
        if (type === "number") arr.push(i.toString());
        else arr.push(String.fromCharCode(i));
    }
}

function num_order(start, num) {
    var result = [];
    for (var i = start; i < start + num; i++) {
        result.push(i.toString());
    }
    return result;
}

function alpha_order_long(start, num, prev = -1) {
    var result = [];
    var code_start = start.charCodeAt(0);
    var total = code_start + num;
    var pass = total > 90 ? total - 91 : 0;
    var range = pass > 0 ? 91 : code_start + num;

    for (var i = code_start; i < range; i++) {
        var head = prev > -1 ? String.fromCharCode(65 + prev) : "";
        result.push(head + String.fromCharCode(i));
    }

    if (pass > 0) {
        var preResult = alpha_order_long("A", pass, ++prev);
        result.push(...preResult);
    }

    return result;
}

function alpha_order(start, num) {
    var result = [];
    var code_start = start.charCodeAt(0);
    for (var i = code_start; i < code_start + num; i++) {
        result.push(String.fromCharCode(i));
    }
    return result;
}

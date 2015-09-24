
exports.dom = function(html){
	var doc = new document.constructor();
	var div = doc.createElement("div");
	div.innerHTML = html;

	return div.firstChild;
};

exports.traverse = function(node, callback){
	var cur = node.firstChild;

	while(cur) {
		callback(cur);
		exports.traverse(cur, callback);
		cur = cur.nextSibling;
	}
};

exports.text = function(node){
	var text = "";
	exports.traverse(node, function(node){
		if(node.nodeType === 3) {
			text += node.nodeValue;
		}
	});
	return text;
};

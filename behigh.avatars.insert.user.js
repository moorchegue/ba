// ==UserScript==
// @name          Behigh avatars insertion.
// @author        murchik <mixturchik@gmail.com>
// @description   Avatar support for old crappy IPB forum engine.
// @homepage      http://behigh.org/
// @match         *://*.behigh.org/inv/*
// @version       1.0.2
// ==/UserScript==

function getJosephID(joseph) {
	return joseph.lastChild.previousSibling.textContent.slice(1).replace(/\s/g,'');
}

function getAvatar(joseph_id) {
	return location.protocol + '//' + location.host + '/inv/uploads/profile/photo-thumb-' + joseph_id + '.jpg';
}

function fixFloatation(joseph) {
	br = document.createElement("div");
	br.setAttribute("style", "clear:both");
	joseph.parentNode.parentNode.appendChild(br);
}

function insertAvatar(joseph) {
	joseph_id = getJosephID(joseph);

	avatar = document.createElement("img");
	avatar.setAttribute("src", getAvatar(joseph_id));
	avatar.setAttribute("onerror", 'this.parentNode.removeChild(this);');

	avatar_node = document.createElement("li");
	avatar_node.appendChild(avatar);
	joseph.insertBefore(avatar_node, joseph.firstChild);

	// HACK awful markup fix
	fixFloatation(joseph);
}

function install() {
	josephs = document.querySelectorAll("ul.user_details");

	for (var i = 0; i < josephs.length; i++) {
		insertAvatar(josephs[i]);
	}
}

function test() {
	console.log("OK");
}

if (this.window) {
	install();
} else {
	test();
}

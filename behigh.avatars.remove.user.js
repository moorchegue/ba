// ==UserScript==
// @name          Behigh avatars wiping out.
// @author        murchik <mixturchik@gmail.com>
// @description   Avatar support downgrade for old crappy IPB forum engine.
// @homepage      http://behigh.org/
// @match         *://*.behigh.org/inv/*
// @version       1.0
// ==/UserScript==

function removeAvatar(avatar) {
	if (avatar.src.match(/.*\/inv\/uploads\/profile\/photo-thumb-.+$/)) {
		avatar.parentNode.removeChild(avatar);
	}
}

function install() {
	avatars = document.querySelectorAll("h2.secondary img");

	for (var i = 0; i < avatars.length; i++) {
		removeAvatar(avatars[i]);
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

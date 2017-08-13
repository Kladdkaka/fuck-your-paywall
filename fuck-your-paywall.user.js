// ==UserScript==
// @name          	Fuck Your Paywall
// @description     yeah, fuck your shitty paywall
//
// @author			Kladdkaka
// @namespace       http://github.com/Kladdkaka
// @downloadURL		https://raw.github.com/Kladdkaka/fuck-your-paywall/master/fuck-your-paywall.user.js
//
//
// @include         http://*
// @include         https://*
//
// @require         https://code.jquery.com/jquery-3.2.1.min.js
//
// @version         1.0
// @updateURL		https://raw.github.com/Kladdkaka/fuck-your-paywall/master/fuck-your-paywall.user.js
//
// ==/UserScript==

var Debug = false;

const debug = (msg) => {
    if (Debug) console.log(msg);
}

const rules = {
    dn_se: {
        host: ['dn.se'],
        do: () => {
            $('#serviceplusPaywall').remove();
        }
    }
};

const url = new URL(window.location.href).hostname.replace('www.', '');

debug(url);

Object.keys(rules).forEach((key) => {
    if (rules[key].host.includes(url)) {
        rules[key].do();
    }
});
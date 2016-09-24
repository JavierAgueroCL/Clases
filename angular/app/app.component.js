"use strict";
var hero_1 = require('./hero');
var Super = (function () {
    function Super() {
    }
    return Super;
}());
exports.Super = Super;
var AppComponent = (function () {
    function AppComponent() {
        this.nicks = [
            new hero_1.heroe(1, 'AlphaFrag'),
            new hero_1.heroe(2, 'Letal'),
            new hero_1.heroe(3, 'Header'),
            new hero_1.heroe(4, 'RagFurioso'),
            new hero_1.heroe(5, 'LostSoul')
        ];
        this.supra = {
            id: 1,
            nombre: 'Cacaman'
        };
        this.nick = supra.name;
    }
    return AppComponent;
}());
exports.AppComponent = AppComponent;

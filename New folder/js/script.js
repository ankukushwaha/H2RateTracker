var irr = document.getElementById("irr");
var area = document.getElementById("area");
var time = document.getElementById("tm");
var electrolysis_effi = document.getElementById("el");
var power = document.getElementById("pr");
var energy = document.getElementById("en");
var H2_production_rate = document.getElementById("hp");

let Solar_panel_effi = 0.2;
let molar_mass_of_H2 = 2;   // in g/mol
let Faraday_constant = 96485;  // in c/mol

irr.addEventListener("input", function(){
    let i = this.value;
    let p = i * area.value * Solar_panel_effi;
    power.value = p;

    let e = p * time.value;
    energy.value = e;

    let H2 = (e* electrolysis_effi.value * 3600)/(molar_mass_of_H2 * Faraday_constant * 1000 );
    H2_production_rate.value = H2;
})

area.addEventListener("input", function(){
    let a = this.value;
    let p = irr.value * a * Solar_panel_effi;
    power.value = p;

    let e = p * time.value;
    energy.value = e;

    let H2 = (e* electrolysis_effi.value * 3600)/(molar_mass_of_H2 * Faraday_constant * 1000 );
    H2_production_rate.value = H2;
})

time.addEventListener("input", function(){
    let t = this.value;
    let e = power.value * t ;
    energy.value = e;

    let H2 = (e* electrolysis_effi.value * 3600)/(molar_mass_of_H2 * Faraday_constant * 1000 );
    H2_production_rate.value = H2;
})
electrolysis_effi.addEventListener("input", function(){
    let ef = this.value;

    let H2 = (energy.value * ef * 3600)/(molar_mass_of_H2 * Faraday_constant * 1000 );
    H2_production_rate.value = H2;
})
power.addEventListener("input", function(){
    let p = this.value;
    let e = p * time.value;
    energy.value = e;

    let H2 = (e* electrolysis_effi.value * 3600)/(molar_mass_of_H2 * Faraday_constant * 1000 );
    H2_production_rate.value = H2;
})

energy.addEventListener("input", function(){
    let e = this.value;
    let H2 = (e* electrolysis_effi.value * 3600)/(molar_mass_of_H2 * Faraday_constant * 1000 );

    H2_production_rate.value = H2;
})

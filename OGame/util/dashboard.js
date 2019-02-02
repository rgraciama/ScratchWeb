var resources = new Object();
resources.metal = $('#resources_metal').text();
resources.crystal = $('#resources_crystal').text();
resources.duty = $('#resources_deuterium').text();
resources.energy = $('#resources_energy').text();

var pages = new Object();
pages.resources = "resources";
pages.station = "station";
pages.trader = "traderOverview";
pages.research = "research";
pages.shipyard = "shipyard";
pages.defense = "defense";
pages.fleet = "fleet";
pages.galaxy = "galaxy";
//pages.empire = "empire";
pages.alliance = "alliance";



//Switch between planets
function switchPlanetToNumber(number) {
    $($('#planetList div img').get(number)).click();
}


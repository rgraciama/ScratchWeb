var resources = new Object();
resources.metal = $('#resources_metal').text();
resources.crystal = $('#resources_crystal').text();
resources.duty = $('#resources_deuterium').text();
resources.energy = $('#resources_energy').text();

var pages = ["resources", "station", "tradeOverview", "station", "research", "shipyard", "defense", "fleet", "galaxy", "alliance"];

var pagesNames = new Object();
pagesNames.resources = "resources";
pagesNames.station = "station";
pagesNames.trader = "traderOverview";
pagesNames.research = "research";
pagesNames.shipyard = "shipyard";
pagesNames.defense = "defense";
pagesNames.fleet = "fleet";
pagesNames.galaxy = "galaxy";
pagesNames.empire = "empire";
pagesNames.alliance = "alliance";

//Switch between planets
function switchPlanetToNumber(number) {
    $($('#planetList div img').get(number)).click();
}

function goToMenuOption(number) {
    window.location.href = "https://s158-es.ogame.gameforge.com/game/index.php?page="+pages[number];
}
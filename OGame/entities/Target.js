class Target {
    constructor (planet = 0, what=0, which=0) {
        this.planet = planet;
        this.what = what;
        this.which = which;
    }

    static staticMethod () {
        return 'Static method has been called.';
    }
 
    toString () {
        return `${this.planet} ${this.what} ${this.which}`;
    }

    doTarget() {
        goToPlanet(this.planet);
        goToWhat(this.what);
        //goToWhich(this.which);
    };
}

function goToPlanet(planet) {
    var planetSelected = $('#planetList div a').get(planet);
    if (!planetSelected.className.includes("active")) {
        switchPlanetToNumber(planet);
    }
}

function goToWhat(what) {
    if (!window.location.href.includes(pages[t1.what])) {
        goToMenuOption(t1.what);
    }
}
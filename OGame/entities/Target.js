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
        //Go to planet - Only if its not activated
        var planetSelected = $('#planetList div a').get(this.planet);
        if (planetSelected.className.includes("active")) {
            switchPlanetToNumber(this.planet);
        }
    };
}
define([
],function() {

    /**
     * Class representing a 2d vector. This class is used for various
     * purposes: vectors, vertices, velocity, acceleration
     * @param x horizontal displacement
     * @param y vertical displacement
     * @constructor
     */
    function Vec2(x,y) {

        this.x = x || 0;
        this.y = y || 0;

        // Used to track the number of Vec2 instances
        Vec2.count++;

        /**
         * Return string representation. Used for debugging.
         * @returns {string}
         */
        this.toString = function() {
            return "Vec2(x=" + this.x + ",y=" + this.y + ")";
        }

    }

    // Initialize Vec2 instance count to 0
    Vec2.count = 0;

    // Return Vec2 class
    return Vec2;

});
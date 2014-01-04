define([
    "./vec2"
],function(Vec2) {

    /**
     * Class representing a camera
     * @param x1 top left x coordinate
     * @param y1 top left y coordinate
     * @param x2 bottom right x coordinate
     * @param y2 bottom right y coordinate
     * @constructor
     */
    function Camera(x1,y1,x2,y2) {

        /**
         * Top left coordinate of the camera
         * @type {Vec2}
         */
        this.top = new Vec2(x1,y1);

        /**
         * Bottom right coordinate of the camera
         * @type {Vec2}
         */
        this.bottom = new Vec2(x2,y2);

    }

    // Return the Camera class
    return Camera;

});
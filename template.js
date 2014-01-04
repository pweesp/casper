require(["src/vec2","src/camera"],function(Vec2,Camera) {
    var camera = new Camera(-1,1,1,-1);
    console.log("Vec2 instance count:" + Vec2.count);
});
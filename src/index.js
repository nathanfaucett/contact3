var vec3 = require("vec3"),
    createPool = require("create_pool");


var Contact3Prototype;


module.exports = Contact3;


function Contact3() {
    this.normal = vec3.create(0, 0, 1);
    this.point = vec3.create(0, 0, 0);
    this.depth = 0;
    this.data = null;
}
createPool(Contact3);
Contact3Prototype = Contact3.prototype;

Contact3.create = function() {
    return Contact3.getPooled();
};

Contact3Prototype.destroy = function() {
    return Contact3.release(this);
};

Contact3Prototype.destructor = function() {
    vec3.set(this.normal, 0, 0, 1);
    vec3.set(this.point, 0, 0, 0);
    this.depth = 0;
    this.data = null;
    return this;
};

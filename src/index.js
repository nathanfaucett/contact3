var vec3 = require("vec3"),
    createPool = require("create_pool");


module.exports = Contact3;


function Contact3() {
    this.normal = vec3.create();
    this.point = vec3.create();
    this.depth = 0;
}
createPool(Contact3);

Contact3.create = function() {
    return Contact3.getPooled();
};

Contact3.prototype.destroy = function() {
    return Contact3.release(this);
};

Contact3.prototype.destructor = function() {
    vec3.set(this.normal, 0, 0, 1);
    vec3.set(this.point, 0, 0, 0);
    this.depth = 0;
};

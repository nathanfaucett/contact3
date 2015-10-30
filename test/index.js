var tape = require("tape"),
    vec3 = require("vec3"),
    Contact3 = require("..");


tape("Contact3", function(assert) {
    assert.deepEqual(Contact3.create(), {
        normal: vec3.create(0, 0, 1),
        point: vec3.create(0, 0, 0),
        depth: 0,
        data: null
    });
    assert.end();
});

let Nuimo = require("../nuimo.js"),
    nuimo = new Nuimo();

nuimo.on("discover", (device) => {

    console.log(`Discovered Nuimo (${device.uuid})`);

    device.on("connect", () => {
        console.log("Nuimo connected");
    });

    device.on("press", () => {
        console.log("Button pressed");
    });

    device.on("release", () => {
        console.log("Button released");
    });

    device.on("swipe", (direction) => {
        switch (direction) {
            case (Direction.LEFT):
                console.log("Swiped left"); break;
            case (Direction.RIGHT):
                console.log("Swiped right"); break;
            case (Direction.UP):
                console.log("Swiped up"); break;
            case (Direction.DOWN):
                console.log("Swiped down"); break;
        }
    });

    device.on("rotate", (amount) => {
        console.log(`Rotated by ${amount}`);
    });

    device.on("fly", (direction, speed) => {
        switch (direction) {
            case (Direction.LEFT):
                console.log(`Flew left by speed ${speed}`); break;
            case (Direction.RIGHT):
                console.log(`Flew right by speed ${speed}`); break;
        }
    });

    device.on("detect", (distance) => {
        console.log(`Detected hand at distance ${distance}`);
    });

    device.connect();

});

nuimo.scan();

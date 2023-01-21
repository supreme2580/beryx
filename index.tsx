const Beryx = require("@zondax/beryx");

async function bery() {

    try {

        const jwt = process.env.JWT_TOKEN || "";

        const client = new Beryx.Beryx.Filecoin({ jwt, network: "wallaby" });
    
        const response1 = await client.data.getTipset(1);
        const response2 = await client.tools.convertHash("bafy2bzacecktivolqszdw4m6p2l4xd46bypkaqfcuw354vo5emoplwupvhsl6", "fil");
        console.log(response2)
        
    } catch (error) {
        console.log(error)
    }

}

bery()
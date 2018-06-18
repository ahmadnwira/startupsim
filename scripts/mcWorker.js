let step = (params) => {
    const rand = Math.random();
    if (rand <= params.makeMoney) {
        params.fund += 500;
    }
    else if (rand <= params.loseMoney) {
        params.fund -= 500;
    }
    if (params.days % 30 === 0) {
        params.fund -= params.rent;
    }
    if (params.days % 365 === 0) {
        params.rent += params.rent * params.inflation;
        params.getFunded += .01;
    }
    if (Math.random <= params.getFunded) {
        params.fund += 100000;
    };
};

let mcStep = params => {
    while (params.fund > 0) {
        step(params);
        params.days++;
    }
    return params.days;
};

self.onmessage = e => {

    const trials = e.data.trials;

    let exp = [];
    for (let i = 0; i <= trials; i++) {
        exp.push(mcStep({...e.data}));
    }

    self.postMessage(exp);
}
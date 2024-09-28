function showInputs() {
    const vehicle = document.getElementById("vehicle").value;
    document.getElementById("inputs").style.display = "block";
    document.getElementById("car-inputs").style.display = vehicle === "car" ? "block" : "none";
    document.getElementById("two-wheeler-inputs").style.display = vehicle === "two-wheeler" ? "block" : "none";
    document.getElementById("aircraft-inputs").style.display = vehicle === "aircraft" ? "block" : "none";
    document.getElementById("result").innerHTML = "";
}

function calculateCarFootprint() {
    const distance = document.getElementById("distance").value;
    const fuel = document.getElementById("fuel").value;
    let carbonFootprint;

    if (fuel === "diesel") {
        carbonFootprint = distance * 0.25;
    } else if (fuel === "petrol") {
        carbonFootprint = distance * 0.21;
    } else {
        carbonFootprint = distance * 0.12;
    }

    document.getElementById("result").innerHTML = `${carbonFootprint.toFixed(2)} kg of carbon is released by your car travelling ${distance} km.`;
}

function calculateTwoWheelerFootprint() {
    const distance = document.getElementById("distance2").value;
    const engine = document.getElementById("engine").value;
    let carbonFootprint;

    if (engine < 150) {
        carbonFootprint = distance * 0.07;
    } else {
        carbonFootprint = distance * 0.1;
    }

    document.getElementById("result").innerHTML = `${carbonFootprint.toFixed(2)} kg of carbon is released by your two wheeler for travelling ${distance} km.`;
}

function calculateAircraftFootprint() {
    const place = document.getElementById("place").value.toLowerCase();
    const distances = {
        mumbai: 980,
        cochin: 524,
        kolkata: 1559,
        hyderabad: 576,
        ahmedabad: 1905,
        delhi: 1707,
        chennai: 346,
        goa: 575
    };

    if (distances[place] !== undefined) {
        const carbonFootprint = distances[place] * 0.15; // Flat rate for simplicity
        document.getElementById("result").innerHTML = `${carbonFootprint.toFixed(2)} kg of carbon is released by the aircraft for travelling to ${place}.`;
    } else {
        document.getElementById("result").innerHTML = "Invalid place name entered.";
    }
}

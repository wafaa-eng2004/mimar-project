function validateMimarInput(text) {
    if (!text || text.trim().length < 3) return false;
    return true;
}

function calculateConstructionCost(area, price) {
    if (area <= 0 || price <= 0) return 0;
    return area * price;
}

module.exports = { validateMimarInput, calculateConstructionCost };

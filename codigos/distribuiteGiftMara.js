
function distributeGiftsMara(reindeers, _packOfGifts) {

    const totalWeight = reindeers.reduce((sum, reno) => sum + reno.length, 0);
    const numOfGiftBoxes = Math.ceil(totalWeight / 6);
    return numOfGiftBoxes;
}


test('Calculates the number of gift boxes based on reindeer names', () => {

    const reindeers = ['Reno1', 'Reno2', 'Reno3'];

    const packOfGifts = [8, 12, 4];

    expect(distributeGiftsWithYourInitials(packOfGifts, reindeers)).toBe(1);
  });
  
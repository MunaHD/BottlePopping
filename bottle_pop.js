const bottlePop = function(argv) {
  let startBottles = argv / 2;
  let remainingBottles = startBottles;
  let remainingCaps = startBottles;
  // hold the tally of bottles and get from recycling bottles or caps
  let totalCaps = 0;
  let totalBottles = 0;

  while (remainingCaps > 3 || remainingBottles > 1) {
    if (remainingCaps > 3) {
      // for every 4 caps we get 1 bottle
      let newBottles = Math.floor(remainingCaps / 4);
      //add the new bottle to total bottles
      remainingBottles += newBottles;
      // add new bottles to tally
      totalCaps += newBottles;
      // take away the caps we used and add the  caps from redeeemd bottles
      remainingCaps += newBottles - (newBottles * 4);
    }

    if (remainingBottles > 1) {
      // for every 2 bottles we get 1 bottle
      let newBottles = Math.floor(remainingBottles / 2);
      //take away the bottles we new -> we had 4  and got 2 so we end up with half what we used to redeem the bottles
      remainingBottles -= newBottles;
      // add the caps of new bottles
      remainingCaps += newBottles;
      // add new bottles to tally
      totalBottles += newBottles;
    }
  }
  const redeemedBottles = totalBottles + totalCaps;
  const message = `
  TOTAL BOTTLES: ${redeemedBottles + startBottles}
  REMAINING BOTTLES: ${remainingBottles}
  REMAINING CAPS: ${remainingCaps}
  TOTAL EARNED:
    BOTTLES: ${totalBottles}
    CAPS: ${totalCaps}`;

  return message;
};

console.log(bottlePop(40));
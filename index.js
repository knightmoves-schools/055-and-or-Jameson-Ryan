function taxable(state, taxExempt) {
  if (state == 'IA' && taxExempt == false) {
    return 'is taxable';
  }
}
function isVehicle(hasWheels, canFly, canSwim) {
  if (hasWheels == false && canFly == false && canSwim == false) {
    return;
  } else {
    return 'is vehicle';
  }
}

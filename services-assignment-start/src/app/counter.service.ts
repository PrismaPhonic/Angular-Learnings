export class CounterService {
  activeToInactiveCount = 0;
  inactiveToActiveCount = 0;
  constructor( ) { }

  incrementActiveToInactive() {
    this.activeToInactiveCount++;
    console.log(`Active to Inactive Count: ${this.activeToInactiveCount}`);
  }

  incrementInactiveToActive() {
    this.inactiveToActiveCount++;
    console.log(`Inactive to Active Count: ${this.inactiveToActiveCount}`);
  }

}

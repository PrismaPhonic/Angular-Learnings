import { Account } from './account.model';

export class AccountsService {
  accounts: Account[] = [
    new Account('Master Account', 'active'),
    new Account('Testaccount', 'inactive'),
    new Account('Hidden Account', 'unknown'),
  ];

  constructor() { }

  addAccount(name: string, status: string) {
    this.accounts.push({
      name,
      status,
    });
  }

  updateStatus(id: number, status: string) {
    this.accounts[id].status = status;
  }
}

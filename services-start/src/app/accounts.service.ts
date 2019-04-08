import { Account } from './account.model';
import {LoggingService} from './logging.service';
import {EventEmitter, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {
  accounts: Account[] = [
    new Account('Master Account', 'active'),
    new Account('Testaccount', 'inactive'),
    new Account('Hidden Account', 'unknown'),
  ];

  statusUpdated = new EventEmitter<string>();

  constructor(private loggingService: LoggingService) { }

  addAccount(name: string, status: string) {
    this.accounts.push({
      name,
      status,
    });

    this.loggingService.logStatusChange(status);
  }

  updateStatus(id: number, status: string) {
    this.accounts[id].status = status;
    this.loggingService.logStatusChange(status);
  }
}

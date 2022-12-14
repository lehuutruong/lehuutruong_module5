package vn.sprint_2.service.account;

import vn.sprint_2.model.account.Account;
import vn.sprint_2.service.IGeneralService;

public interface IAccountService {

    Account findAccountByUsername(String username);

    Account findAccountByEmail(String email);

}

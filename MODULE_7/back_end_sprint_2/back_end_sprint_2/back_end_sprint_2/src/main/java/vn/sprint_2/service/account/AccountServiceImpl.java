package vn.sprint_2.service.account;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import vn.sprint_2.model.account.Account;
import vn.sprint_2.repository.IAccountRepository;

import java.util.Optional;

@Service
public class AccountServiceImpl implements IAccountService {

    @Autowired
    private IAccountRepository accountRepository;

    @Override
    public Account findAccountByUsername(String username) {
        return accountRepository.findAccountByUsername(username);
    }

    @Override
    public Account findAccountByEmail(String email) {
        return null;
    }
}
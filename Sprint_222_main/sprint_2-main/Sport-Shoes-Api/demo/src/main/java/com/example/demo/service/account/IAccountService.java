package com.example.demo.service.account;

import com.example.demo.model.account.Account;

import java.util.Optional;

public interface IAccountService {
    Optional<Account> findByUsername(String username);

}

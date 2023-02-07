package com.example.demo.security.user_detail;

import com.example.demo.model.account.Account;
import com.example.demo.service.account.IAccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class MyUserDetailService implements UserDetailsService {
    @Autowired
    private IAccountService accountService;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<Account> accountOptional = accountService.findByUsername(username);
        if (!accountOptional.isPresent()) {
            throw new UsernameNotFoundException("Username not found!");
        }
        return new MyUserDetail(accountOptional.get());
    }
}

package vn.sprint_2.sercurity.user_detail;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import vn.sprint_2.model.account.Account;
import vn.sprint_2.service.account.IAccountService;

@Service
public class MyUserDetailService implements UserDetailsService {

    @Autowired
    private IAccountService accountService;
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Account account = accountService.findAccountByUsername(username);
        if (account == null) {
            throw new UsernameNotFoundException(username);
        }
        return new MyUserDetail(account);
    }
}
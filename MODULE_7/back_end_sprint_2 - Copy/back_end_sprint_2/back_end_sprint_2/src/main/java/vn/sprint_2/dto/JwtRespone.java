package vn.sprint_2.dto;

import org.springframework.security.core.GrantedAuthority;
import vn.sprint_2.model.account.Account;
import vn.sprint_2.model.users.User;

import java.util.Collection;

public class JwtRespone {

    private String token;
    private String type = "Bearer";
    private Account account;
    private User user;
    private Collection<? extends GrantedAuthority> roles;

    public JwtRespone(String token, String type, Account account, String firstName,
                      Collection<? extends GrantedAuthority> roles) {
        this.token = token;
        this.type = type;
        this.account = account;
        this.roles = roles;
    }

    public JwtRespone() {
    }


    public JwtRespone(String token, Collection<? extends GrantedAuthority> authorities, Account account, User user) { this.token = token;
        this.type = type;
        this.roles = authorities;
        this.account = account;
        this.user = user;
    }

    public JwtRespone(String token, Collection<? extends GrantedAuthority> authorities, Account account) {
        this.type = type;
        this.roles = authorities;
        this.account = account;
    }

    public JwtRespone(String token, User user, Account account, Collection<? extends GrantedAuthority> authorities) {
        this.token=token;
        this.account=account;
        this.user=user;
        this.roles=authorities;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }


    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Account getAccount() {
        return account;
    }

    public void setAccount(Account account) {
        this.account = account;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Collection<? extends GrantedAuthority> getRoles() {
        return roles;
    }

    public void setRoles(Collection<? extends GrantedAuthority> roles) {
        this.roles = roles;
    }
}
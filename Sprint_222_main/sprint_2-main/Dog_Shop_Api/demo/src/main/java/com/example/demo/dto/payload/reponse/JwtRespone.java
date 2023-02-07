package com.example.demo.dto.payload.reponse;

import com.example.demo.model.user.User;
import org.springframework.security.core.GrantedAuthority;

import java.util.Collection;

public class JwtRespone {
    private String token;
    private String username;
    private boolean lockStatus;
    private Collection<? extends GrantedAuthority> roles;
    private User user;

    public JwtRespone(String token, String username, boolean lockStatus, Collection<? extends GrantedAuthority> roles, User user) {
        this.token = token;
        this.username = username;
        this.lockStatus = lockStatus;
        this.roles = roles;
        this.user = user;
    }

    public JwtRespone() {
    }


    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public Collection<? extends GrantedAuthority> getRoles() {
        return roles;
    }

    public void setRoles(Collection<? extends GrantedAuthority> roles) {
        this.roles = roles;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public boolean isLockStatus() {
        return lockStatus;
    }

    public void setLockStatus(boolean lockStatus) {
        this.lockStatus = lockStatus;
    }
}

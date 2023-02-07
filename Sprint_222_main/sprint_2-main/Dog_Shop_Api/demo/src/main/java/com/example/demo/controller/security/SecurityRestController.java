package com.example.demo.controller.security;

import com.example.demo.dto.payload.reponse.JwtRespone;
import com.example.demo.dto.payload.reponse.MessageRespone;
import com.example.demo.dto.payload.request.LoginForm;
import com.example.demo.model.account.Account;
import com.example.demo.security.jwt.JwtProvider;
import com.example.demo.security.user_detail.MyUserDetail;
import com.example.demo.service.account.IAccountService;
import com.example.demo.service.account_role.IAccountRoleService;
import com.example.demo.service.role.IRoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/auth")
public class SecurityRestController {

    @Autowired
    private IAccountService accountService;
    @Autowired
    private JwtProvider jwtProvider;
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private IRoleService roleService;
    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private IAccountRoleService accountRoleService;

    @PostMapping("/login")
    public ResponseEntity<?> login(@Validated @RequestBody LoginForm loginForm,
                                   BindingResult bindingResult) {

        if (bindingResult.hasErrors()) {
            return new ResponseEntity<>(bindingResult.getFieldError(), HttpStatus.NOT_ACCEPTABLE);
        }

        Optional<Account> accountOptional = accountService.findByUsername(loginForm.getUsername());

        if (!accountOptional.isPresent()) {
            return new ResponseEntity<>(new MessageRespone("username not found"), HttpStatus.NOT_FOUND);
        }

        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginForm.getUsername(), loginForm.getPassword()));

        MyUserDetail myUserDetail = (MyUserDetail) authentication.getPrincipal();

        SecurityContextHolder.getContext().setAuthentication(authentication);

        String token = jwtProvider.createToken(authentication);

        return new ResponseEntity<>(new JwtRespone(token, myUserDetail.getAccount().getUsername(), myUserDetail.getAccount().isLockStatus(), myUserDetail.getAuthorities(), myUserDetail.getAccount().getUser()), HttpStatus.OK);
    }
}

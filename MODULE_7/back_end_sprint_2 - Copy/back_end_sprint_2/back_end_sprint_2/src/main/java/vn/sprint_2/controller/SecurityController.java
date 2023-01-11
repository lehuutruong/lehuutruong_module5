package vn.sprint_2.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import vn.sprint_2.dto.JwtRespone;
import vn.sprint_2.dto.MessageRespone;
import vn.sprint_2.dto.SignInForm;
import vn.sprint_2.model.account.Account;
import vn.sprint_2.sercurity.jwt.JwtProvider;
import vn.sprint_2.sercurity.user_detail.MyUserDetail;
import vn.sprint_2.service.account.IAccountService;

@CrossOrigin("*")
@RequestMapping("/api/auth")
@RestController
public class SecurityController {
    @Autowired
    private IAccountService accountService;

    @Autowired
    private JwtProvider jwtProvider;

    @Autowired
    private AuthenticationManager authenticationManager;
    @PostMapping("/signin")
    public ResponseEntity<?> login(@Validated @RequestBody SignInForm signInForm) {


        Account accountValidate = accountService.findAccountByUsername(signInForm.getUsername());

        if (accountValidate == null) {
            return new ResponseEntity<>(new MessageRespone("username not found"), HttpStatus.NOT_FOUND);
        }

        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(signInForm.getUsername(), signInForm.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);

        String token = jwtProvider.createToken(authentication);

        MyUserDetail myUserDetail = (MyUserDetail) authentication.getPrincipal();

        JwtRespone respone = new JwtRespone(token,
                myUserDetail.getAccount().getUser(),
                myUserDetail.getAccount(),
                myUserDetail.getAuthorities());


        return ResponseEntity.ok(respone);
    }
}
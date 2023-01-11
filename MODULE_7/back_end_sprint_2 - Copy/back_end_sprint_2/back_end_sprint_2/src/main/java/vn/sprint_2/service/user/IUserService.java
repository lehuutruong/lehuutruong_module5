package vn.sprint_2.service.user;

import vn.sprint_2.model.users.User;
import vn.sprint_2.service.IGeneralService;

public interface IUserService extends IGeneralService<User> {

    User getUserByEmail(String email);

}
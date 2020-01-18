import { Router } from "express";
import mobileUserController from "../controllers/mobile.user.controller";
import { tokenValidation } from "../middlewares/verifyToken";

class UserRoutes {
  router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  routes() {
    this.router.get("/", tokenValidation, mobileUserController.getUsers);
    this.router.get(
      "/:username",
      tokenValidation,
      mobileUserController.getUser
    );
    this.router.post("/", tokenValidation, mobileUserController.createUser);
    this.router.put(
      "/:username",
      tokenValidation,
      mobileUserController.updateUser
    );
    this.router.delete(
      "/:username",
      tokenValidation,
      mobileUserController.deleteUser
    );
  }
}

const userRoutes = new UserRoutes();
export default userRoutes.router;

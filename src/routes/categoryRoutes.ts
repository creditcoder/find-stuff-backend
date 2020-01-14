import { Router } from "express";
import categoryController from "../controllers/category.controller";

class CategoryRoutes {
  router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  routes() {
    this.router.get("/", categoryController.getItems);
    this.router.get("/:url", categoryController.getItem);
    this.router.post("/", categoryController.createItem);
    this.router.put("/:url", categoryController.updateItem);
    this.router.delete("/:url", categoryController.deleteItem);
  }
}

const itemRoutes = new CategoryRoutes();
export default itemRoutes.router;

import express from "express";
import reviewsController from "../controllers/reviewsController.js";

const router = express.Router();

router.route("/")
.get(reviewsController.getReviews)
.post(reviewsController.insertReviews);

router.route("/:id")
.put(reviewsController.updateReview)
.delete(reviewsController.deleteReviews);

export default router;  
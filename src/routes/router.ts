import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.json({message: "Hello express-typescript-serverless-deploy-aws-by-container"})
})

export default router
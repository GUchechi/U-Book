import express from "express";

const router = express.Router();

router.post("/", createdChat);

export default router;

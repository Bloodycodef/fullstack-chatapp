import jwt from "jsonwebtoken";

export const generateToken = (userId, res) => {
  try {
    const token = jwt.sign({ id: userId }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // Pastikan ini benar
      sameSite: "strict",
      maxAge: 24 * 60 * 60 * 1000, // 1 day
    });

    console.log("Token created:", token);
  } catch (error) {
    console.error("Error in generateToken:", error);
    throw new Error("Token generation failed");
  }
};

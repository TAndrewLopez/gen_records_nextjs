import cookie from "cookie";

const handler = async (req, res) => {
  try {
    res.setHeader(
      "Set-Cookie",
      cookie.serialize("genRecords", null, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development",
        sameSite: "strict",
        maxAge: -1,
        path: "/",
      })
    );
    return res
      .status(201)
      .json({ success: true, message: "Logout successful." });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "An error has occurred. Unable to log user out.",
    });
  }
};

export default handler;

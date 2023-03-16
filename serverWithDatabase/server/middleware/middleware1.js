const middleware = (req, res, next) => {
  const email = req.body.email;
  const number = req.body.number;
  const emailRegex = /^\w+([/.-]?\w+)*@\w+([/.-]?\w+)*(\.\w{2,3})+$/;
  const numberRegex = /^((\+91)?|91)?[6789][0-9]{9}/;

  if (!email.match(emailRegex) || !number.match(numberRegex)) {
     console.log("email or number  is not valid");
     res.body();
  } else {
    next();
  }
};
module.exports = middleware;

const stripe = require("stripe")(
  "pk_test_51K3phHFxJDEAlW3luq9EaYUXfCMGcckv0UqEQ89KxkRlyFMDFvCyWHeDJNtK93Y5TlXvvgHVOiFTF4WKieLqmiTi00f4n8yM5U"
);

async function postCharge(req, res) {
  try {
    const { amount, source, receipt_email } = req.body;

    const charge = await stripe.charges.create({
      amount,
      currency: "usd",
      source,
      receipt_email,
    });

    if (!charge) throw new Error("charge unsuccessful");

    res.status(200).json({
      charge,
      message: "charge posted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

module.exports = postCharge;

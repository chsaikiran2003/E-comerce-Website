const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "AVoRH0WiwTNPkq6vOtgMShoKKsrxn_6OugMR10HR9BGszuuBCAAIO9TlTwV9xw2t89SNQEVCbIEzdlfa",
  client_secret: "EIYj3kMSCL-XOfmwKUu7PfJyv7-AcC18UmmbBYBXtakxGIoyp7wJGz8v4-2hNip8ptVeK_agtB4Juxkh",
});

module.exports = paypal;

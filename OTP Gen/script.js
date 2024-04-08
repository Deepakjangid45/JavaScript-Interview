let gernateOTP = () => {
  const otpLength = 6;
  //gernate the random OTP
  const otp = Math.floor(Math.random() * Math.pow(10, otpLength));

  // display genrate
  document.getElementById("OtpDisplay").innerText = otp;
};

document.getElementById("generatarOtp").addEventListener("click", gernateOTP);

window.addEventListener("load", gernateOTP);

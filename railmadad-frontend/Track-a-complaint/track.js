function setStatus(button) {
    const allButtons = document.querySelectorAll('.status-boxes .status-pill');
    allButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
  }

let generatedOTP = "";

  // Handle Get OTP
  document.querySelector(".mini-btn").addEventListener("click", function (e) {
    e.preventDefault();

    const mobileInput = document.querySelector("input[placeholder='Enter your number ']");
    const mobile = mobileInput.value.trim();

    if (!/^\d{10}$/.test(mobile)) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }

    // Generate 6-digit OTP
    generatedOTP = Math.floor(100000 + Math.random() * 900000).toString();
    alert("Your OTP is: " + generatedOTP);  // Show OTP to user
  });

  // Handle Submit OTP
  document.querySelector(".otp-actions .mini-btn").addEventListener("click", function (e) {
    e.preventDefault();

    const enteredOTP = document.querySelector("input[placeholder='Enter OTP']").value.trim();

    if (enteredOTP === generatedOTP && generatedOTP !== "") {
      alert("✅ OTP verified successfully!");
    } else {
      alert("❌ OTP verification failed!");
    }
  });

  // OPTIONAL: Handle "Resend OTP"
document.querySelector(".resend").addEventListener("click", function (e) {
  e.preventDefault();

  generatedOTP = Math.floor(100000 + Math.random() * 900000).toString();
  alert("🔁 New OTP is: " + generatedOTP); // Again, for testing only
});




async function trackComplaint() {
  const id = document.getElementById("complaintIdInput").value.trim();

  if (!id) {
    alert("❌ Please enter your complaint ID");
    return;
  }

  try {
    const res = await fetch(`http://localhost:3000/track/${id}`);
    const result = await res.json();

    if (!result.success) {
      alert("⚠️ " + result.message);
      return;
    }

    const data = result.data;

    // Fill form with response data
    document.querySelector("input[placeholder='Enter your number ']").value = data.mobile_number;
    document.querySelector("input[placeholder='Enter OTP']").value = "Verified";
    document.querySelector("input[placeholder='Enter your PNR number']").value = data.pnr_number || '';
    document.querySelector("textarea").value = data.description || '';

    // Set complaint status visually
    const statusPills = document.querySelectorAll(".status-pill");
    statusPills.forEach(pill => {
      if (pill.textContent.toLowerCase().includes(data.status.toLowerCase())) {
        pill.classList.add("bg-green-500", "text-white");
      } else {
        pill.classList.remove("bg-green-500", "text-white");
      }
    });

    alert("✅ Complaint status loaded.");
  } catch (error) {
    console.error("❌ Error:", error);
    alert("Server error. Please try again later.");
  }
}

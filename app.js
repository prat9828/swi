let verificationCode = '';

        // Function to send verification code
        function sendVerificationCode() {
            const email = document.getElementById('email').value;
            const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

            // Validate email format
            if (!emailPattern.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }

            // Generate and display a fake verification code
            verificationCode = Math.floor(100000 + Math.random() * 900000); // 6-digit code
            alert(`Verification code sent to ${email}: ${verificationCode}`);
        }

        // Function to validate form fields
        function validateForm() {
            const enteredOtp = document.getElementById('otp').value;
            const password = document.getElementById('pass').value;
            const confirmPassword = document.getElementById('pass2').value;

            // Check if email is valid
            const email = document.getElementById('email').value;
            const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (!emailPattern.test(email)) {
                alert('Please enter a valid email address.');
                return false;
            }

            // Check if OTP matches the generated code
            if (enteredOtp !== verificationCode.toString()) {
                alert('Invalid verification code.');
                return false;
            }

            // Check if password and confirm password fields are not empty
            if (!password || !confirmPassword) {
                alert('Please fill in both password fields.');
                return false;
            }

            // Check if password and confirm password match
            if (password !== confirmPassword) {
                alert('Passwords do not match.');
                return false;
            }

            // If all checks pass, redirect to another page
            alert('Account created successfully!');
            window.location.href = "welcome.html"; // Replace with your desired page
            return true;
        }
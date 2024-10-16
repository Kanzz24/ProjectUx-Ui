document.addEventListener("DOMContentLoaded", function() {
    const loginButton = document.querySelector('.login-btn');
    const githubButton = document.querySelector('.github-btn'); // ปุ่ม GitHub
    const gmailButton = document.querySelector('.gmail-btn'); // ปุ่ม Gmail
    const safariButton = document.querySelector('.safari-btn'); // ปุ่ม Safari
    const forgetPasswordButton = document.querySelector('.forget-password'); // ปุ่ม Forget Password
    const togglePasswordButton = document.querySelector('.toggle-password'); // ปุ่มเปิด/ปิดรหัสผ่าน
    const passwordInput = document.querySelector('.input-box1'); // ช่องกรอกรหัสผ่าน

    loginButton.addEventListener('click', function(event) {
        event.preventDefault();

        const username = document.querySelector('.input-box').value;
        const password = passwordInput.value;

        if (username === '' || password === '') {
            alert('กรุณากรอกข้อมูลให้ครบถ้วน');
        } else {
            alert(`เข้าสู่ระบบด้วยชื่อผู้ใช้: ${username}`);
        }
    });

    githubButton.addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = "https://github.com/login"; 
    });

    gmailButton.addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = "https://accounts.google.com/"; 
    });

    safariButton.addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = "https://appleid.apple.com/"; 
    });

    forgetPasswordButton.addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = "https://example.com/forgot-password"; 
    });

    // เปิด/ปิดรหัสผ่าน
    togglePasswordButton.addEventListener('click', function() {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        togglePasswordButton.textContent = type === 'password' ? 'Show' : 'Hide'; // เปลี่ยนข้อความปุ่ม
    });
});


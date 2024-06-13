document.getElementById('telButton').addEventListener('click', function (e) {
    e.preventDefault();

    const tel = document.getElementById("phoneNumber").value;

    const telPattern = /^010\d{8}$/;
    if (!telPattern.test(tel)) {
        alert("올바른 전화번호를 입력해 주세요.");
        return;
    } else {
    }

    const data = { tel: tel };

    fetch("/login/sendAuthNum", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            if (response.ok) {
                console.log("전화번호가 전송되었습니다.");
                alert("입력하신 전화번호로 인증번호가 전송되었습니다.");

                document.getElementById("verificationForm").style.display = "block";
            } else {
                console.error("전화번호 전송에 실패했습니다.");
            }
        })
        .catch(error => {
            console.error("네트워크 오류:", error);
        });
});

document.getElementById('authButton').addEventListener('click', function (e) {
    e.preventDefault();

    const code = document.getElementById("authCode").value;
    const phoneNumber = document.getElementById("phoneNumber").value;

    const authData = { code: code, tel: phoneNumber };

    fetch("/login/authNum", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(authData)
    })
        .then(response => response.json())
        .then(data => {
            if (data.redirectUrl) {
                window.location.href = data.redirectUrl;
            } else {
                console.error("리다이렉트 URL이 없습니다.");
            }
        })
        .catch(error => {
            console.error("네트워크 오류:", error);
        });
});

document.getElementById('authCode').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        document.getElementById('authButton').click();
    }
});
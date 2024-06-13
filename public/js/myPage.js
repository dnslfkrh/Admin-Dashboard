document.addEventListener('DOMContentLoaded', async function () {
    await loadMyPage();
});

async function loadMyPage() {
    try {
        const response = await fetch('/user/myInfo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({})
        });

        if (!response.ok) {
            throw new Error('서버 응답이 올바르지 않습니다.');
        }

        const me = await response.json();
        renderMyPage(me);
    } catch (error) {
        console.error('오류:', error);
    }
};

function renderMyPage(me) {
    const userInfoDiv = document.getElementById('userInfo');

    userInfoDiv.innerHTML = '';

    const userInfoHTML = `
<p><strong>이름:</strong> ${me.user.name}</p>
<p><strong>전화번호:</strong> ${me.user.tel}</p>
<p><strong>수업:</strong> ${me.user.className}</p>
<p><strong>수업 요일:</strong> ${me.user.classDayOfWeek}</p>
`;
    userInfoDiv.innerHTML = userInfoHTML;
}

document.getElementById('logout').addEventListener('submit', function (e) {
    e.preventDefault();

    fetch('/login/logout', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({})
    })
    .then(response => {
        if (response.ok) {
            window.location.href = '/login';
        } else {
            alert('로그아웃에 실패했습니다.');
        }
    })
    .catch(error => {
        console.error('네트워크 오류:', error);
        alert('네트워크 오류가 발생했습니다.');
    });
});
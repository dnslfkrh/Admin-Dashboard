document.addEventListener('DOMContentLoaded', async function() {
    await loadUser();
});

async function loadUser() {
    try {
        const response = await fetch('/admin/loadUser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({})
        });

        if (!response.ok) {
            throw new Error('서버 응답이 올바르지 않습니다.');
        }

        const users = await response.json();
        renderUserList(users);
    } catch (error) {
        console.error('오류:', error);
    }
}

function renderUserList(users) {
    const userListDiv = document.getElementById('userList');

    userListDiv.innerHTML = '';

    users.forEach(user => {
        const userDiv = document.createElement('div');
        userDiv.classList.add('user');

        const userInfoHTML = `
            <p><strong>이름:</strong> ${user.name}</p>
            <p><strong>전화번호:</strong> ${user.tel}</p>
            <p><strong>수업:</strong> ${user.className}</p>
            <p><strong>수업 요일:</strong> ${user.classDayOfWeek}</p>
        `;

        userDiv.innerHTML = userInfoHTML;
        userListDiv.appendChild(userDiv);
    });
}

function showSection(section) {
    document.getElementById('registerSection').classList.add('hidden');
    document.getElementById('editSection').classList.add('hidden');
    document.getElementById('deleteSection').classList.add('hidden');


    if (section === 'register') {
        document.getElementById('registerSection').classList.remove('hidden');
    } else if (section === 'edit') {
        document.getElementById('editSection').classList.remove('hidden');
    } else if (section === 'delete') {
        document.getElementById('deleteSection').classList.remove('hidden');
    }
};

document.getElementById('registerForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('registerName').value;
    const phone = document.getElementById('registerPhone').value;
    const className = document.getElementById('registerClass').value;
    const classDayOfWeek = document.getElementById('registerClassDayOfWeek').value;

    const userData = {
        name: name,
        phone: phone,
        class: className,
        classDayOfWeek: classDayOfWeek
    };

    fetch('/admin/addUser', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
        .then(response => {
            if (response.ok) {
                alert('회원 등록이 완료되었습니다.');
                window.location.reload();
                document.getElementById('registerForm').reset();
            } else {
                alert('회원 등록에 실패했습니다.');
            }
        })
        .catch(error => {
            console.error('네트워크 오류:', error);
            alert('네트워크 오류가 발생했습니다.');
        });
});

document.getElementById('editForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('editName').value;
    const phone = document.getElementById('editPhone').value;
    const className = document.getElementById('editClass').value;
    const classDayOfWeek = document.getElementById('editClassDayOfWeek').value;

    const userData = {
        name: name,
        phone: phone,
        class: className,
        classDayOfWeek: classDayOfWeek
    };

    fetch('/admin/editUser', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
        .then(response => {
            if (response.ok) {
                alert('회원 정보가 수정되었습니다.');
                window.location.reload();
                document.getElementById('editForm').reset();
            } else {
                alert('회원 정보 수정에 실패했습니다.');
            }
        })
        .catch(error => {
            console.error('네트워크 오류:', error);
            alert('네트워크 오류가 발생했습니다.');
        });
});

document.getElementById('deleteForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('deleteName').value;
    const phone = document.getElementById('deletePhone').value;

    const userData = {
        name: name,
        phone: phone,
    };

    fetch('/admin/deleteUser', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
        .then(response => {
            if (response.ok) {
                alert('회원 정보가 삭제되었습니다.');
                window.location.reload();
                document.getElementById('editForm').reset();
            } else {
                alert('회원 정보 삭제에 실패했습니다.');
            }
        })
        .catch(error => {
            console.error('네트워크 오류:', error);
            alert('네트워크 오류가 발생했습니다.');
        });
});

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
    })
});
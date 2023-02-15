window.onload = function () {

    let inputFullName = document.getElementById('fullName'); // Получаем input для Full Name
    let inputUserName = document.getElementById('userName'); // Получаем input для User Name
    let inputEmail = document.getElementById('email'); // Получаем input для Email
    let inputPassword = document.getElementById('password'); // Получаем input для Password
    let inputRepeatPassword = document.getElementById('repeatPassword'); // Получаем input по проверке Password
    let checkbox = document.getElementById('checkbox'); // Получаем checkbox
    let accountEntry = document.getElementsByClassName('account__link')[0]; // Получаем вход через уже зарег аккаунт

    // ==== № 2 ====

    inputFullName.addEventListener('input', function (e) {
        e.target.value = e.target.value.replace(/[0-9]/g, '');

        console.log(e.target.value)
    }) // запрет на ввод цифр

    // ==== № 3 ====

    inputUserName.addEventListener('input', function (e) {
        e.target.value = e.target.value.replace(/[. ,]/g, '');
    }) // запрет на ввод точек и запятых

    // ==== № 4 ====

    checkbox.onclick = () => {
        if (checkbox.checked) {
            console.log('Согласен');
        } else {
            console.log('Не согласен');
        }
    }

    // ==== № 5 ====

    let button = document.getElementById('button');

    button.onclick = function (e) {
        e.preventDefault();

        if (!inputFullName.value) {
            alert('Заполните поле Full Name');
            return;
        }

        if (!inputUserName.value) {
            alert('Заполните поле User Name');
            return;
        }

        if (!inputEmail.value) {
            alert('Заполните поле E-mail');
            return;
        }

        if (!inputPassword.value) {
            alert('Заполните поле Password');
            return;
        }

        if (inputPassword.value.length <= 7) {
            alert('Пароль должен содержать не менее 8 символов');
            return;
        }

        if (!inputRepeatPassword.value) {
            alert('Заполните поле Repeat Password');
            return;
        }

        if (inputPassword.value !== inputRepeatPassword.value) {
            alert('Заполните одинаковые данные в полях Password и Repeat Password');
            return;
        }

        if (!checkbox.checked) {
            alert('Подтвердите своё согласие на наши условия работы и политику конфиденциальности');
            return;
        }

        // POPUP
        let popup_container = document.getElementsByClassName("popup-container")[0];
        let close_btn = document.getElementsByClassName('close-btn')[0];

        popup_container.style = "display: block;";

        close_btn.addEventListener("click", (e) => {
            popup_container.style = "display: none;";
            document.getElementById('form').reset();
            entryToAccount(e);
        });
    }

    // ==== № 6 ====

    function entryToAccount() {
        document.getElementById('form').reset();
        document.getElementsByTagName('h1')[0].innerText = "Log in to the system";
        document.getElementById('form__label-fullName').remove();
        document.getElementById('form__label-email').remove();
        document.getElementById('form__label-repeatPassword').remove();
        document.getElementsByClassName('form__label-checkbox')[0].remove();
        button.innerText = 'Sign In';
        accountEntry.remove();

        button.onclick = function (e) {
            e.preventDefault();
            if (!inputUserName.value) {
                alert('Заполните поле User Name');
                return;
            }

            if (!inputPassword.value) {
                alert('Заполните поле Password');
                return;
            }

            alert(`Добро пожаловать, ${inputUserName.value}!`)
        }
    }

    accountEntry.addEventListener('click', (e) => {
        entryToAccount();
    })
}
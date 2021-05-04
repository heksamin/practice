var useId = document.querySelector("#user-id");
var pw1 = document.querySelector("#user-pw1");
var pw2 = document.querySelector("#user-pw2");

useId.onchange = checkId;
pw1.onchage = checkPw;
pw2.onchage = comparePw;

function checkId() {
    if (useId.value.length < 4 || useId.value.length > 15) {
        alert("4~5자리의 영문과 숫자를 사용하세요.");
        useId.select();
    }
}

function checkPw() {
    if (pw1.value.length < 8) {
        alert("비밀번호는 8자리 이상이어야 합니다.");
        pw1.value = "";
        pw1.focus();
    }
}

function comparePw() {
    if (pw1.value != pw2.value) {
        alert("암호가 다릅니다. 다시 입력하세요.");
        pw2.value = "";
        pw2.focus();
    }
}

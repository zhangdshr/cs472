window.onload = function () {
    document.getElementById("create-account").onclick = createAccount;
}

var accList = [];

function createAccount() {

    var accountInfo = (
        function () {
            let accName = document.getElementById("account-name").value;
            let depositBalance = document.getElementById("deposit-balance").value;
            return {'acc': accName, 'deposit': depositBalance};
        }
    )();

    accList.push(accountInfo);
    console.log(accList);

    let accListStr = '';

    for (let i = 0; i < accList.length; i++) {
        accListStr += 'Account name:' + accList[i].acc + ' and deposit balance:' + accList[i].deposit + '\n';
    }

    document.getElementById("text-area").value = accListStr;
}
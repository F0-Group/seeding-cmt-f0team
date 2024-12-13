
let originalComments = [
    "-mã đơn- 1 -đơn vị- ",
    "-mã đơn- 2 -đơn vị- 09383727****",
    "2 -đơn vị- 093837***",
    "cho e 2-đơn vị- -mã đơn- 0378*****",
    "cho cô -mã đơn-  2-đơn vị-  03**********",
    "cô lấy -mã đơn-  4-đơn vị-  07*********",
    "cô mua thêm -mã đơn- 2 -đơn vị-  07*********",
    "cô dồn đơn cũ với -mã đơn-  2 -đơn vị-  09********",    
    
    
    
    "Lấy chị 1 -đơn vị- -mã đơn- ",
    "2 -đơn vị- -mã đơn- ***********",
    "3 -đơn vị- -mã đơn- cho chị ************",
    " lấy 1 -đơn vị- -mã đơn- cho em ***********",
    " -mã đơn-/ 0983737*****",
    "09********/-mã đơn- -đơn vị-",
    "09********* 2-đơn vị-/-mã đơn-",
    "Cô mua -mã đơn-h 1 -đơn vị- ************",
    " ************ -mã đơn-",
    " -mã đơn- dồn đơn ************",
    " dồn đơn -mã đơn- ************",
    "Cô chốt 1 -đơn vị- -mã đơn- nha Thu",
    "Anh 1 -đơn vị- -mã đơn- nha Thu",
    "C cần mã -mã đơn-, 1 -đơn vị- nha em",
    "Anh lấy mã -mã đơn-, 1 -đơn vị- nha",
    "Anh cần 1 -đơn vị- mã -mã đơn- nhé Thu",
    "Thu ơi, chốt giùm E 1 -đơn vị- -mã đơn-",
    "-mã đơn- /3-mã đơn-",
    "-mã đơn- 3/-đơn vị-",
    "-mã đơn- 1 -đơn vị- nha e",
    "Cô cần 1 -đơn vị- mã -mã đơn- nha em",
    "Mình lấy -đơn vị- -mã đơn- nha bạn ***********",
    "-mã đơn- 2-đơn vị- sdt ***********",
    "Thu, lấy cho chị 1 -đơn vị- -mã đơn-",
    "E ơi, chốt mã -mã đơn- cho C, 1 -đơn vị-",
    "Cho co -mã đơn- sdt ***********",
    "Cho cô -mã đơn- 1 -đơn vị-",
    "cho chị 1 -đơn vị- mã -mã đơn-",
    "-mã đơn- 1 -đơn vị-",
    "lấy luôn cho e mã -mã đơn-",
    "mã -mã đơn- 1 -đơn vị-",
    "mã -mã đơn- sđt ***********",
    "Mã -mã đơn- -đơn vị- Sđt ***********",
    "cho chị -mã đơn-",
    "lấy chị -mã đơn-",
    "cho chị mã -mã đơn- ",
    "chốt chị mã -mã đơn- ",
    "chị mua -mã đơn- nhé",
    "cho cô mã -mã đơn- ",
    "cho dì mã -mã đơn- ",
    "chế lấy -mã đơn- 3-đơn vị-",
    "bác muốn mua mã -mã đơn- 5 -đơn vị-",
    "cô mua thêm -mã đơn- 4-đơn vị- nha con",
    " -mã đơn- shop ơi",
    "mua hàng nhà chị nhiều quá rồi mà ưng lắm lấy e thêm mã -mã đơn- nha",
    "chốt chị mã -mã đơn- ",
    "cho chị 1 -đơn vị- mã -mã đơn-",
    "-mã đơn- 1 -mã đơn- *************",
    "lấy luôn cho e mã -mã đơn-",
    "mã -mã đơn- 1 -đơn vị-",
    "nhà em xài hoài luôn, lấy e -mã đơn-  thêm nha ",
    "lấy anh -mã đơn- -mã đơn-",
    "cho chị mã -mã đơn- ",
    "chốt chị mã-mã đơn- sdt ************* ",
    "em mua -mã đơn- nhé",
    " -mã đơn- shop ơi",
    "1 mã -mã đơn- nhé shop",
];

let comments = [...originalComments];

function updateAndCopyComments() {
    const newCode = document.getElementById('newCode').value;
    const newUnit = document.getElementById('newUnit').value || "chai";
    comments = originalComments.map(comment => comment
        .replace(/-mã đơn-/g, newCode)
        .replace(/-đơn vị-/g, newUnit));
    displayComments();
    copyCommentsToClipboard();
    showNotification("Submit", "green-100", "green-500", "green");
}

function refreshComments() {
    document.getElementById('newCode').value = '';
    document.getElementById('newUnit').value = '';
    comments = [...originalComments];
    displayComments();
    showNotification("Refresh", "blue-100", "blue-500", "blue");
}

function copyAllComments() {
    copyCommentsToClipboard();
    showNotification("Copy All Comments", "orange-100", "orange-500", "orange");
}

function showNotification(message, background, border, color) {
    const notification = document.createElement('div');
    notification.innerHTML = `
    <div class="py-6 absolute top-[100px] notification">
        <div class="bg-${background} w-[400px] border-t-4 border-${border} rounded-b text-${color}-900 px-4 py-3 shadow-md" role="alert">
            <div class="flex">
                <div class="py-1"><svg class="fill-current h-6 w-6 text-${color}-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg></div>
                <div>
                    <p class="font-bold text-${color}-500 text-base">${message}</p>
                    <p class="text-sm text-${color}-500 font-semibold">Make sure you know how these changes affect you.</p>
                </div>
            </div>
        </div>
    </div>
`;
    document.body.appendChild(notification);

    setTimeout(() => {
        document.body.removeChild(notification);
    }, 1000);
}

function displayComments() {
    const commentsList = document.getElementById('commentsList');
    commentsList.innerHTML = '';
    comments.forEach(comment => {
        const li = document.createElement('li');
        li.textContent = comment;
        commentsList.appendChild(li);
    });
}

function copyCommentsToClipboard() {
    const commentsText = comments.join('\n');
    navigator.clipboard.writeText(commentsText)
        .then(() => console.log('Comments copied to clipboard'))
        .catch(err => console.error('Unable to copy comments to clipboard', err));
}

displayComments();



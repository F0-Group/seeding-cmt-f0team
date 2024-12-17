
let originalComments = [
    "-mã đơn- 1-đơn vị- ",
    "-mã đơn- 2-đơn vị- 093837273",
    "2-đơn vị- 093837273",
    "cho e 2-đơn vị- -mã đơn- 037872372",
    "cho cô -mã đơn-  2-đơn vị-  03**********",
    "cô lấy -mã đơn-  4-đơn vị-  07**********",
    "cô mua thêm -mã đơn-  2-đơn vị-  07**********",
    "cô dồn đơn cũ với -mã đơn-  2-đơn vị-  07**********",    
    "cho chị -mã đơn- 3-đơn vị- ***********",
    "chị đặt -mã đơn- 2-đơn vị- 09*********",
    "a lấy -mã đơn- 5-đơn vị- **********",
    "cho em thêm -mã đơn- 1-đơn vị- 08**********",
    "chị gom chung -mã đơn- 4-đơn vị- ************",
    "lấy cho cô -mã đơn- 6-đơn vị- 07********",
    "em chốt -mã đơn- 2-đơn vị- ************",
    "chị mua -mã đơn- 1-đơn vị- 09**********",
    "bác lấy thêm -mã đơn- 3-đơn vị- ***********",
    "dồn giúp chị -mã đơn- 2-đơn vị- 07**********",
    "chốt lại cho chị -mã đơn- 4-đơn vị- ***********",
    "em thêm vào -mã đơn- 3-đơn vị- **********",
    "cho tôi -mã đơn- 7-đơn vị- ************",
    "lấy chị 2 -đơn vị- -mã đơn- **********",
    "chốt 1 -đơn vị- -mã đơn- 09**********",
    "chị gom chung -mã đơn- 5-đơn vị- ***********",
    "cho em lại -mã đơn- 2-đơn vị- **********",
    "chị đặt thêm -mã đơn- 3-đơn vị- **********",
    "em lấy -mã đơn- 4-đơn vị- ************",
    "gộp luôn -mã đơn- 3-đơn vị- 08*********",
    "chị chốt đơn -mã đơn- 2-đơn vị- ***********",
    "em lấy thêm -mã đơn- 5-đơn vị- ************",
    "cho chị 3 -đơn vị- -mã đơn- ***********",
    "lấy -mã đơn- 6-đơn vị- ***********",
    "gom lại -mã đơn- 4-đơn vị- ************",
    "lấy giúp chị -mã đơn- 3-đơn vị- ***********",
    "cô lấy thêm -mã đơn- 2-đơn vị- ************",
    "Bác đặt thêm -mã đơn- 7-đơn vị- 08*********",
    "chị mua thêm -mã đơn- 1-đơn vị- **********",
    "lấy cho em -mã đơn- 4-đơn vị- ************",
    
    
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
    " dồn đơn -mã đơn- *************",
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
    "chốt chị mã-mã đơn- sdt ************** ",
    "em mua -mã đơn- nhé",
    " -mã đơn- shop ơi",
    "1 mã -mã đơn- nhé shop",
];

// let comments = [...originalComments];

// function updateAndCopyComments() {
//     const newCode = document.getElementById('newCode').value;
//     const newUnit = document.getElementById('newUnit').value || "chai";
//     comments = originalComments.map(comment => comment
//         .replace(/-mã đơn-/g, newCode)
//         .replace(/-đơn vị-/g, newUnit));
//     displayComments();
//     copyCommentsToClipboard();
//     showNotification("Submit", "green-100", "green-500", "green");
// }

// function refreshComments() {
//     document.getElementById('newCode').value = '';
//     document.getElementById('newUnit').value = '';
//     comments = [...originalComments];
//     displayComments();
//     showNotification("Refresh", "blue-100", "blue-500", "blue");
// }

// // function copyAllComments() {
// //     copyCommentsToClipboard();
// //     showNotification("Copy All Comments", "orange-100", "orange-500", "orange");
// // }

// function copyAllComments() {
//     const commentsList = document.getElementById('commentsList');
//     const commentItems = commentsList.querySelectorAll('li');
//     const commentText = Array.from(commentItems).map(item => item.textContent).join('\n');

//     // Copy all comments to clipboard
//     navigator.clipboard.writeText(commentText)
//         .then(() => {
//             // Show success notification
//             showNotification("All comments copied to clipboard!", "orange-100", "orange-500", "orange");
//         })
//         .catch(err => {
//             // Show error notification if copying fails
//             console.error('Unable to copy comments to clipboard', err);
//             showNotification("Failed to copy comments", "red-100", "red-500", "red");
//         });
// }

// function showNotification(message, background, border, color) {
//     const notification = document.createElement('div');
//     notification.innerHTML = `
//     <div class="py-6 absolute top-[100px] notification">
//         <div class="bg-${background} w-[400px] border-t-4 border-${border} rounded-b text-${color}-900 px-4 py-3 shadow-md" role="alert">
//             <div class="flex">
//                 <div class="py-1"><svg class="fill-current h-6 w-6 text-${color}-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg></div>
//                 <div>
//                     <p class="font-bold text-${color}-500 text-base">${message}</p>
//                     <p class="text-sm text-${color}-500 font-semibold">Make sure you know how these changes affect you.</p>
//                 </div>
//             </div>
//         </div>
//     </div>
// `;
//     document.body.appendChild(notification);

//     setTimeout(() => {
//         document.body.removeChild(notification);
//     }, 1000);
// }


// function displayComments() {
//     const commentsList = document.getElementById('commentsList');
//     commentsList.innerHTML = ''; // Clear the list before adding new comments

//     comments.forEach(comment => {
//         const li = document.createElement('li');
//         li.textContent = comment;

//         // Add class 'symbol' to the <li> for styling
//         li.classList.add('symbol');

//         // Add click event to each <li> to copy the text and show border effect
//         li.onclick = function(event) {
//             copyToClipboard(comment, event); // Call the copy function
//             li.style.border = "2px solid rgb(174, 255, 174)"; // Add green border for visual feedback

//             // Reset the border color after 2 seconds
//             setTimeout(() => {
//                 li.style.border = ""; // Reset border after 2 seconds
//             }, 2000);
//         };

//         commentsList.appendChild(li); // Append the list item to the <ul>
//     });
// }

// function copyToClipboard(text, event) {
//     // Create a temporary input element to hold the text
//     const tempInput = document.createElement("input");
//     tempInput.value = text;
//     document.body.appendChild(tempInput);

//     // Select the text inside the temporary input
//     tempInput.select();
//     tempInput.setSelectionRange(0, 99999); // For mobile devices

//     // Execute the copy command
//     document.execCommand("copy");

//     // Remove the temporary input element from the DOM
//     document.body.removeChild(tempInput);

//     // Change the border color to green for visual feedback
//     const symbol = event.target;
//     symbol.style.border = "2px solid  rgb(174, 255, 174)"; // Green border for feedback

//     // Reset the border color after 2 seconds
//     setTimeout(function() {
//         symbol.style.border = ""; // Reset to original border color
//     }, 1500);
// }

// displayComments();
let comments = [...originalComments];

function updateAndCopyComments() {
    // Cập nhật và sao chép các comment
    const newCode = document.getElementById('newCode').value;
    const newUnit = document.getElementById('newUnit').value || "chai";
    comments = originalComments.map(comment => comment
        .replace(/-mã đơn-/g, newCode)
        .replace(/-đơn vị-/g, newUnit));
    
    // Hiển thị danh sách comment mới
    displayComments();

    // Sao chép toàn bộ comment mới
    const updatedText = comments.join('\n');
    navigator.clipboard.writeText(updatedText)
        .then(() => {
            showNotification("Comments updated and copied to clipboard!", "green-100", "green-500", "green");
        })
        .catch(err => {
            console.error("Failed to copy comments:", err);
            showNotification("Failed to copy comments", "red-100", "red-500", "red");
        });
}


function refreshComments() {
    document.getElementById('newCode').value = '';
    document.getElementById('newUnit').value = '';
    comments = [...originalComments]; // Reset comments
    displayComments(); // Refresh list
    showNotification("Comments refreshed!", "blue-100", "blue-500", "blue");
}

function displayComments() {
    const commentsList = document.getElementById('commentsList');
    commentsList.innerHTML = ''; // Clear existing list

    comments.forEach(comment => {
        const li = document.createElement('li');
        li.classList.add('symbol');
        li.textContent = comment;

        // Add click-to-copy functionality
        li.onclick = function (event) {
            copyToClipboard(comment, event);
        };

        commentsList.appendChild(li); // Append each comment
    });
}

function copyToClipboard(text, event) {
    const tempInput = document.createElement("input");
    tempInput.value = text;
    document.body.appendChild(tempInput);

    tempInput.select();
    tempInput.setSelectionRange(0, 99999);
    document.execCommand("copy");

    document.body.removeChild(tempInput);

    // Visual feedback: green border
    const symbol = event.target;
    symbol.style.border = "2px solid rgb(174, 255, 174)";

    setTimeout(() => {
        symbol.style.border = "";
    }, 1500);
}

function copyAllComments() {
    const countInput = document.getElementById('commentCount').value;
    const count = parseInt(countInput, 10);

    if (isNaN(count) || count <= 0) {
        showNotification("Vui lòng nhập số lượng hợp lệ!", "red-100", "red-500", "red");
        return;
    }

    const allComments = Array.from(document.querySelectorAll('#commentsList li')).map(item => item.textContent);

    if (count > allComments.length) {
        showNotification("Số lượng vượt quá số comment hiện có!", "red-100", "red-500", "red");
        return;
    }

    const randomComments = [];
    const usedIndices = new Set();

    while (randomComments.length < count) {
        const randomIndex = Math.floor(Math.random() * allComments.length);
        if (!usedIndices.has(randomIndex)) {
            randomComments.push(allComments[randomIndex]);
            usedIndices.add(randomIndex);
        }
    }

    const commentsText = randomComments.join('\n');
    navigator.clipboard.writeText(commentsText)
        .then(() => {
            showNotification("Random comments copied to clipboard!", "orange-100", "orange-500", "orange");
        })
        .catch(err => {
            console.error("Failed to copy comments:", err);
            showNotification("Failed to copy comments", "red-100", "red-500", "red");
        });
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
    }, 1500);
}

function triggerSubmit(event) {
    // Kiểm tra nếu người dùng nhấn phím Enter
    if (event.key === "Enter") {
        // const countInput = document.getElementById('commentCount').value;
        // const count = parseInt(countInput, 10);

        // // Kiểm tra nếu countInput trống hoặc không phải là số hợp lệ
        // if (!countInput) {
        //     showNotification("Vui lòng nhập số lượng comment hợp lệ!", "red-100", "red-500", "red");
        //     return; // Nếu không hợp lệ, ngừng thực hiện
        // }

        updateAndCopyComments();
    }
}

function moveFocus(event, nextFieldId) {
    if (event.key === 'Enter') {
      event.preventDefault(); // Prevent default Enter action (like form submission)
      document.getElementById(nextFieldId).focus(); // Move focus to the next input field
    }
  }



displayComments(); // Initialize comments

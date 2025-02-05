
let originalComments = [
    "-mã đơn- -số lượng- -đơn vị- ***********",
    "-mã đơn- -đơn vị- -số lượng- ***********",
    "-mã đơn- -số lượng- -đơn vị- sđt ***********",
    " -mã đơn- -số lượng- -đơn vị- sdt ***********",
    " -mã đơn- -số lượng- -đơn vị- -mã đơn- sdt ***********",
    "  -mã đơn- -số lượng- -đơn vị- ***********",
    "  -mã đơn- -số lượng- -đơn vị- ***********",
    " -mã đơn- -số lượng- -đơn vị- sdt ***********",
    " đặt -mã đơn- -số lượng- -đơn vị- sdt ***********",
    " -mã đơn- -số lượng- -đơn vị- ***********",
    "  -mã đơn- -số lượng- -đơn vị- ***********",
    "-mã đơn- -số lượng- 37 QL13, Thủ Đức ***********",
    "-mã đơn- -số lượng- 399/3 Tôn Đức Thắng, Đà Nẵng ***********",
    "-mã đơn- -số lượng- 287 Đường 30/04, Trà Vinh ***********",
    "-mã đơn- -số lượng- 192 Nguyễn Công Trứ, Cần Thơ ***********",
    " mã -mã đơn- ***********",
    " mã -mã đơn- ***********",
    "  -mã đơn- ***********",
    " -số lượng- -đơn vị- mã -mã đơn- ***********",
    " -mã đơn- -số lượng- -đơn vị- sdt ***********",
    " -số lượng- -đơn vị- mã -mã đơn- ***********",
    "  -mã đơn- -số lượng- -đơn vị- sdt ***********",
    " -mã đơn- ***********",
    " -mã đơn- -số lượng- -đơn vị- ***********",
    " mã -mã đơn- sdt ***********",
    " -mã đơn- sdt ***********",
    "-mã đơn-  ***********",
    " mã -mã đơn- ***********",
    " -số lượng- -đơn vị- -mã đơn- ***********",
    "  -mã đơn- -số lượng- -đơn vị- ***********",
    "  -mã đơn- -số lượng- -đơn vị- ***********",
    "-mã đơn-   -số lượng- -đơn vị- ***********",
    " mã -mã đơn-   -số lượng- -đơn vị- ***********",
    " mã -mã đơn-   -số lượng- -đơn vị- ***********",
    "   -mã đơn-  -số lượng- -đơn vị- ***********",
    "-mã đơn- -số lượng- -đơn vị- Tân Phú ***********",
    "  -mã đơn- -số lượng- -đơn vị- ***********",
    "  mã -mã đơn- -số lượng- -đơn vị- ***********",
    " mã -mã đơn- -số lượng- -đơn vị- ***********",
    " -mã đơn- -số lượng- -đơn vị- Đà Nẵng ***********",
    " -mã đơn-  -số lượng- -đơn vị-  ***********",
    "  -mã đơn-  -số lượng- -đơn vị- ***********",
    " -mã đơn- -số lượng- -đơn vị- sdt ***********",
    " mã -mã đơn- -số lượng-  ***********",
    " mã -mã đơn- -số lượng-  ***********",
    "   -mã đơn- -số lượng-  ***********",
    "  -mã đơn- -số lượng- -đơn vị-   ***********",
    " -mã đơn-  sdt ***********",
    "-mã đơn- -số lượng-  sdt ***********",
    " -mã đơn-  Đà Nẵng ***********",
    "  -mã đơn- -số lượng-  ***********",
    " -mã đơn- -số lượng-  ***********",
    "  -mã đơn-  sdt ***********",
    "  -mã đơn- sđt  ***********",
    " -mã đơn- -số lượng-  ***********",
    "  mã -mã đơn- -số lượng-  ***********",
    "  -mã đơn-  ***********",
    " -mã đơn- -số lượng-  ***********",
    "  -mã đơn- -số lượng-  ***********",
    " mã -mã đơn-  ***********",
    " -mã đơn- -số lượng- -đơn vị-  ***********",
    " -mã đơn- -số lượng-  ***********",
    " -mã đơn-  sdt ***********",
    "  -mã đơn-  ***********",
    " -mã đơn-  ***********",
    "  -mã đơn-  ***********",
    "  -mã đơn- -số lượng- ***********",
    "  -mã đơn- -số lượng- ***********",
    " -mã đơn- -số lượng-  ***********",
    " mã -mã đơn-  ***********",
    " mã -mã đơn-  ***********",
    "  mã -mã đơn-  ***********",
    "  -mã đơn- -số lượng-  ***********",
    " -mã đơn-  sdt ***********",
    "  -mã đơn- -số lượng-  ***********",
    " mã -mã đơn-  sdt ***********",
    "   -mã đơn-  ***********",
    " -mã đơn-  sdt ***********",
    " -mã đơn-  ***********",
    "  -mã đơn-  ***********",
    " -mã đơn-   ***********",
    " mã -mã đơn-  ***********",
    "  mã -mã đơn-  ***********",
    "  -mã đơn-  ***********",
    " bạn mã -mã đơn-  ***********",
    "   -mã đơn-  ***********",
    "  mã -mã đơn-  ***********",
    "  -mã đơn-  ***********",
    "  -mã đơn- -số lượng- ***********",
    " mã -mã đơn- -số lượng- ***********",
    "  -mã đơn- -số lượng- -đơn vị-   ***********",
    "-mã đơn- -số lượng-  ***********",
    " -mã đơn-  ***********",
    " -mã đơn- -số lượng-  ***********",
    " -mã đơn-  sdt ***********"
];
const icons = ["🌹", "👏", "💐", "🌟", "🎉", "✨", "❤️"];

let comments = [...originalComments];


function updateAndCopyComments() {
    // Lấy dữ liệu từ input
    const newCode = document.getElementById('newCode').value.trim();
    const newUnit = document.getElementById('newUnit').value.trim() || "chai";
    const quantityInput = parseInt(document.getElementById('quantity').value) || 1;
    const randomCheckbox = document.getElementById('randomCheckbox').checked;

    // Kiểm tra đầu vào
    if (!newCode) {
        showNotification("Vui lòng nhập mã đơn!", "red-100", "red-500", "red");
        return;
    }

    // Danh sách icon
    const icons = ["🌹", "👏", "💐", "🌟", "🎉", "✨", "❤️"];

    // Cập nhật comment
    comments = originalComments.map((comment) => {
        let quantity = quantityInput; // Giá trị mặc định là input nhập vào

        // Nếu checkbox được chọn, thêm random hoặc tăng +1
        if (randomCheckbox) {
            const randomIncrement = Math.floor(Math.random() * 5) + 1; // +1 đến +5
            quantity += randomIncrement;
        }

        // Thay thế placeholder trong comment
        let updatedComment = comment
            .replace(/-mã đơn-/g, newCode)
            .replace(/-đơn vị-/g, newUnit)
            .replace(/-số lượng-/g, quantity);

          // Thay thế icon nếu có
          if (updatedComment.includes("-icon-")) {
            const randomIcon = icons[Math.floor(Math.random() * icons.length)];
            updatedComment = updatedComment.replace(/-icon-/g, randomIcon);
        }

        return updatedComment;
    });


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

          document.getElementById('generate').addEventListener('click', () => {
            const quantityInput = document.getElementById('quantity').value;
            const randomize = document.getElementById('randomize').checked;
            const output = document.getElementById('output');

            let quantity = parseInt(quantityInput);
            if (isNaN(quantity) || quantity <= 0) {
                alert('Vui lòng nhập số lượng hợp lệ!');
                return;
            }

            // Mẫu chuỗi
            const templates = [
                "chốt 1 -đơn vị- -mã đơn- **********",
                "chị gom chung -mã đơn- -số lượng- -đơn vị- **********",
                "cho em lại -mã đơn- -số lượng- -đơn vị- **********"
            ];

            // Kết quả cuối cùng
            const results = [];

            for (let i = 0; i < templates.length; i++) {
                let amount = quantity;

                if (randomize) {
                    // Random từ +1 đến +4
                    const randomIncrement = Math.floor(Math.random() * 4) + 1;
                    amount += randomIncrement;
                }

                // Thay thế placeholder trong chuỗi
                const result = templates[i]
                    .replace('-số lượng-', amount)
                    .replace('-mã đơn-', '09**********');

                results.push(result);
            }

            // Hiển thị kết quả
            output.value = results.join('\n');
        });

        // test số lượng 
  
        
displayComments(); // Initialize comments

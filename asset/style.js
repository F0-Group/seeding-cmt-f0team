
let originalComments = [
    "cho em lại -mã đơn- -số lượng- -đơn vị- **********",

  " -mã đơn- -đơn vị- -số lượng- **********",
" -mã đơn- -số lượng- -đơn vị- ************ sđt  ",
"-số lượng- -đơn vị- sdt **********",
"cho e -số lượng- -đơn vị- -mã đơn- sdt ********** ",
"cho cô -mã đơn- -số lượng- -đơn vị- **********",
"cô lấy -mã đơn- -số lượng- -đơn vị-  **********",
"cô mua thêm -mã đơn-  -số lượng- -đơn vị- **********",
"cô dồn đơn cũ với -mã đơn- -số lượng- -đơn vị- sdt **********",
"cho chị -mã đơn- -số lượng- -đơn vị- sdt *********** ",
"chị đặt -mã đơn- -số lượng- -đơn vị- sdt *********",
"a lấy -mã đơn- -số lượng- -đơn vị- **********",
"cho em thêm -mã đơn- -số lượng- -đơn vị- ********** ",
"chị gom chung -mã đơn- -số lượng- -đơn vị- ************",
"lấy cho cô -mã đơn- -đơn vị- -số lượng-********",
"em chốt -mã đơn- -số lượng- -đơn vị- ************",
"chị mua -mã đơn- -số lượng- -đơn vị- **********",
"bác lấy thêm -mã đơn- -số lượng- -đơn vị- *********** ",
"dồn giúp chị -mã đơn- -số lượng- -đơn vị- **********",
"chốt lại cho chị -mã đơn- -số lượng--đơn vị- ***********",
"em thêm vào -mã đơn- -số lượng- -đơn vị- **********",
"cho tôi -mã đơn- -số lượng- -đơn vị- ************",
"lấy chị -số lượng- -đơn vị- -mã đơn- **********",
"chốt -số lượng- -đơn vị- -mã đơn- -**********",
"chị gom chung -mã đơn- -số lượng- -đơn vị- ***********",
"cho em lại -mã đơn- -số lượng- -đơn vị- **********",
"chị đặt thêm -mã đơn- -số lượng- -đơn vị- **********",
"em lấy -mã đơn- -số lượng- -đơn vị- ************",
"gộp luôn -mã đơn- -số lượng- -đơn vị- *********",
"chị chốt đơn -mã đơn- -số lượng- -đơn vị- ***********",
"em lấy thêm -mã đơn- -số lượng- -đơn vị- ************",
"cho chị -số lượng- -đơn vị- -mã đơn- ***********",
"lấy -mã đơn- -số lượng- -đơn vị- ***********",
"gom lại -mã đơn- -số lượng- -đơn vị- ************",
"lấy giúp chị -mã đơn- -số lượng- -đơn vị- sdt *********** ",
"cô lấy thêm -mã đơn- -số lượng- -đơn vị- sdt ************",
"Bác đặt thêm -mã đơn- -số lượng- -đơn vị- sdt *********",
"chị mua thêm -mã đơn- -số lượng- -đơn vị- sdt **********",
"lấy cho em -mã đơn- -số lượng- -đơn vị- ************",
"-mã đơn- -đơn vị- -số lượng- 37 Quốc Lộ 13, Hiệp Bình Phước, Thủ Đức gửi về chỗ cũ đi",
"-mã đơn- -đơn vị- -số lượng- 399/3 Tôn Đức Thắng, Ngũ Hành Sơn, Đà Nẵng, về địa chỉ cũ ",
"-mã đơn- -đơn vị- -số lượng- 287 Đường 30/04, P8, Trà Vinh, giao tới chỗ cũ",
"-mã đơn- -đơn vị- -số lượng- 192/37/32 Nguyễn Công Trứ Cái Khế Ninh Kiều Cần Thơ cứ ship đến chỗ cũ",
"-mã đơn- -đơn vị- -số lượng- 33/2 Võ Văn Tần, Q3, TP.HCM, lấy giúp nhé sđt **************",
"-mã đơn- -đơn vị- sđt ************** 47/3/57 Lê Đại Hành, P5, Bạc Liêu, cứ gửi về chỗ cũ nha",
"-mã đơn- -đơn vị- -số lượng- 10 Trần Phú, Cà Mau sđt ************** giao đúng địa cũ là được",
"-mã đơn- -đơn vị- -số lượng- 120/38 Hoàng Diệu, P5, Cần Thơ  ship như mọi khi nhé sđt **************",
"-mã đơn- -đơn vị- -số lượng- 388 Võ Thị Sáu, Biên Hòa, Đồng Nai cứ theo địa cũ giao nha Thu sđt **************",
"-mã đơn- -đơn vị- -số lượng- 238/76/3 Phạm Văn Đồng, Vĩnh Hòa, Nha Trang, giao nhanh theo địa cũ nhé",
"-mã đơn- -đơn vị- -số lượng- 38 Lý Tự Trọng, Hải Châu, Đà Nẵng, gửi luôn đi, đừng gọi",
"-mã đơn- -đơn vị- -số lượng- 303 Nguyễn Đình Chiểu, Đà Lạt, cứ địa cũ mà giao",
"-mã đơn- -đơn vị- -số lượng- 102 Nguyễn An Ninh, Pleiku, Gia Lai, gọi không cần, sđt ************",
"-mã đơn- -đơn vị- -số lượng- 14 Phan Bội Châu, Hội An, Quảng Nam SDT *************** ship tới như cũ",
"-mã đơn- -đơn vị- -số lượng- 187 Hoàng Văn Thụ, Nam Định, gửi tới đúng địa cũ là được SDT *************** ",
"-mã đơn- -đơn vị- -số lượng- 52/3 Nguyễn Thị Minh Khai, Q1, TP.HCM, giao lại địa cũ nhé SDT *************** ",
"-mã đơn- -đơn vị- SDT ***************  -số lượng- 122/8/1 Trường Chinh, Bình Tân, TP.HCM giao về chỗ cũ của cô nha con",
"SDT ***************  -mã đơn- -đơn vị- -số lượng- 93 Nguyễn Huệ, P2, Quy Nhơn ship tới chỗ cũ nha",
"-mã đơn- -đơn vị- -số lượng- 27 Lê Hồng Phong, P3, Bến Tre SDT ***************  cứ gửi về địa cũ cho nhanh",
"-mã đơn- -đơn vị- -số lượng- 127/31 Lê Duẩn, Ba Đình, Hà Nội, không cần gọi ",
"SDT ***************  -mã đơn- -đơn vị- -số lượng- 87/32 Nguyễn Văn Cừ, An Hòa, Ninh Kiều, Cần Thơ, giao đúng địa chỉ cũ",
"-mã đơn- -đơn vị- -số lượng- 28 Hoàng Hoa Thám, Nghĩa Lộ, Quảng Ngãi, ship về nhanh đi",
"-mã đơn- -đơn vị- -số lượng- 93/28 Lê Lợi, P4, Vũng Tàu, địa cũ nhé SDT *************** ",
"-mã đơn- -đơn vị- -số lượng- 81/32/3 Nguyễn Thị Định, Đông Ba, Huế, giao như cũ nha",
"-mã đơn- -đơn vị- -số lượng-  1328 Phan Văn Trị, Gò Vấp, TP.HCM, giao luôn không cần gọi",
"Lấy chị -số lượng- -đơn vị- -mã đơn- ",
"-số lượng- -đơn vị- -mã đơn- ***********",
"-số lượng- -đơn vị- -mã đơn- cho chị ************",
" lấy -số lượng- -đơn vị- -mã đơn- cho em ***********",
" -mã đơn-/ -số lượng-*****",
"-số lượng-********/-mã đơn- -đơn vị-",
"-số lượng-********* -đơn vị-/-mã đơn-",
"Cô mua -mã đơn-h -số lượng- -đơn vị- ************",
" ************ -mã đơn-",
" -mã đơn- dồn đơn ************",
" dồn đơn -mã đơn- *************",
"Cô chốt -số lượng- -đơn vị- -mã đơn- nha Thu *************",
"Anh -số lượng- -đơn vị- -mã đơn- nha Thu *************",
"C cần mã -mã đơn-, -số lượng- -đơn vị- nha em *************",
"Anh lấy mã -mã đơn-, -số lượng- -đơn vị- nha *************",
"Anh cần -số lượng- -đơn vị- mã -mã đơn- nhé Thu *************",
"Thu ơi, chốt giùm E -số lượng- -đơn vị- -mã đơn- *************",
"-mã đơn- /-số lượng- -mã đơn-  *************",
"-mã đơn- -số lượng-/ -đơn vị- *************",
"-mã đơn- -số lượng- -đơn vị- nha e *************",


"Cô cần -số lượng- -đơn vị- mã -mã đơn- nha em",
"Mình lấy -đơn vị- -mã đơn- nha bạn ***********",
"-mã đơn- -số lượng--đơn vị- sdt ***********",
"Thu, lấy cho chị -số lượng- -đơn vị- -mã đơn-",
"E ơi, chốt mã -mã đơn- cho C, -số lượng- -đơn vị-",
"Cho co -mã đơn- sdt ***********",
"Cho cô -mã đơn- -số lượng- -đơn vị-",
"cho chị -số lượng- -đơn vị- mã -mã đơn-",
"-mã đơn- -số lượng- -đơn vị- nhé ",
"lấy luôn cho e mã -mã đơn-",
"mã -mã đơn- -số lượng- -đơn vị-",
"mã -mã đơn- sđt ***********",
"Mã -mã đơn- -đơn vị- Sđt ***********",
"cho chị -mã đơn- *************",
"lấy chị -mã đơn- *************",
"cho chị mã -mã đơn-  *************",
"chốt chị mã -mã đơn- ************* ",
"chị mua -mã đơn- nhé",
"cho cô mã -mã đơn- ************ ",
 "cho dì mã -mã đơn- ",
"chế lấy -mã đơn- -số lượng--đơn vị- *************",
"bác muốn mua mã -mã đơn- -số lượng- -đơn vị- *************",
"cô mua thêm -mã đơn- -số lượng--đơn vị- nha con",
" -mã đơn- shop ơi",
"mua hàng nhà chị nhiều quá rồi mà ưng lắm lấy e thêm mã -mã đơn- nha",
"chốt chị mã -mã đơn- ",
"cho chị -số lượng- -đơn vị- mã -mã đơn-",
"-mã đơn- -số lượng- -mã đơn- *************",
"lấy luôn cho e mã -mã đơn-",
"mã -mã đơn- -số lượng- -đơn vị-",
"nhà em xài hoài luôn, lấy e -mã đơn-  thêm nha ",
"lấy anh -mã đơn- -mã đơn-",
"cho chị mã -mã đơn- ",
"chốt chị mã-mã đơn- sdt ************** ",
"em mua -mã đơn- nhé",
" -mã đơn- shop ơi",
"-số lượng- mã -mã đơn- nhé shop",

"Lấy chị -số lượng- -đơn vị- -mã đơn-  ",

"-số lượng- -đơn vị- -mã đơn- *********** ",
"-số lượng- -đơn vị- -mã đơn- cho chị ************",
" lấy -số lượng- -đơn vị- -mã đơn- cho em ***********",
" -mã đơn-/ -số lượng-***** ",
"-số lượng-********/-mã đơn- -đơn vị- ",
"-số lượng-********* -số lượng--đơn vị-/-mã đơn-",
"Cô mua -mã đơn-h -số lượng- -đơn vị- ************",
" ************ -mã đơn-",
" -mã đơn- dồn đơn ************",
" dồn đơn -mã đơn- *************",
"Cô chốt -số lượng- -đơn vị- -mã đơn- nha Thu",
"Cô cần -số lượng- -đơn vị- mã -mã đơn- nha em *************",
"Mình lấy -đơn vị- -mã đơn- nha bạn  *************",
"-mã đơn- -số lượng--đơn vị- sdt *************",
"Thu, lấy cho chị -số lượng- -đơn vị- -mã đơn- *************",
"E ơi, chốt mã -mã đơn- cho C, -số lượng- -đơn vị- *************",
"Cho co -mã đơn- sdt  *************",
"Cho cô -mã đơn- -số lượng- -đơn vị- *************",
"cho chị -số lượng- -đơn vị- mã -mã đơn- *************",
"-mã đơn- -số lượng- -đơn vị- nhé  *************",
"lấy luôn cho e mã -mã đơn- *************",
"mã -mã đơn- -số lượng- -đơn vị- *************",
"mã -mã đơn- sđt *********** *************",
"Mã -mã đơn- -đơn vị- Sđt *********** *************",
"cho chị -mã đơn- *************",
"lấy chị -mã đơn- *************",
"cho chị mã -mã đơn-  *************",
"chốt chị mã -mã đơn-  *************",
"chị mua -mã đơn- nhé *************",
"cho cô mã -mã đơn-  *************",
"cho dì mã -mã đơn-  *************",
"chế lấy -mã đơn- -số lượng--đơn vị- *************",
"bác muốn mua mã -mã đơn- -số lượng- -đơn vị- *************",
"cô mua thêm -mã đơn- -số lượng--đơn vị- nha con *************",
" -mã đơn- shop ơi *************",
"mua hàng nhà chị nhiều quá rồi mà ưng lắm lấy e thêm mã -mã đơn- nha *************",
"chốt chị mã -mã đơn-  *************",
"cho chị -số lượng- -đơn vị- mã -mã đơn- *************",
"-mã đơn- -số lượng- -mã đơn-  *************",
"lấy luôn cho e mã -mã đơn- *************",
"mã -mã đơn- -số lượng- -đơn vị- *************",
"nhà em xài hoài luôn, lấy e -mã đơn-  thêm nha  *************",
"lấy anh -mã đơn- -mã đơn- *************",
"cho chị mã -mã đơn-  *************",
"chốt chị mã-mã đơn- sdt  *************",
"em mua -mã đơn- nhé *************",
" -mã đơn- shop ơi *************",
"-số lượng- mã -mã đơn- nhé shop *************",
" *************",
"Lấy chị -số lượng- -đơn vị- -mã đơn-   *************",
" *************",
"-số lượng- -đơn vị- -mã đơn- ***********  *************",
"-số lượng- -đơn vị- -mã đơn- cho chị ************ *************",
" lấy -số lượng- -đơn vị- -mã đơn- cho em *********** *************",
" -mã đơn-/ -số lượng-*****  *************",
"-số lượng-********/-mã đơn- -đơn vị-  *************",
"-số lượng-********* -đơn vị-/-mã đơn- *************",
"Cô mua -mã đơn-h -số lượng- -đơn vị- ************ *************",
" ************ -mã đơn- *************",
" -mã đơn- dồn đơn ************ *************",
" dồn đơn -mã đơn- ************* *************",
"Cô chốt -số lượng- -đơn vị- -mã đơn- nha Thu *************",
"Anh -số lượng- -đơn vị- -mã đơn- nha Thu *************",
"C cần mã -mã đơn-, -số lượng- -đơn vị- nha em  *************",
"Anh lấy mã -mã đơn-, -số lượng- -đơn vị- nha  *************",
"-mã đơn- *************",
"Anh cần -số lượng- -đơn vị- mã -mã đơn- nhé Thu  *************",
"Thu ơi, chốt giùm E -số lượng- -đơn vị- -mã đơn-  *************",
"-mã đơn- /-số lượng--mã đơn- *************",
"-mã đơn- -số lượng-/-đơn vị- *************",
"-mã đơn- -số lượng- -đơn vị- nha e *************",
"Cô cần -số lượng- -đơn vị- mã -mã đơn- nha em *************",
"Mình lấy -đơn vị- -mã đơn- nha bạn *********** *************",
"-mã đơn- -số lượng--đơn vị- sdt *********** *************",
"Thu, lấy cho chị -số lượng- -đơn vị- -mã đơn- *************",
"E ơi, chốt mã -mã đơn- cho C, -số lượng- -đơn vị- *************",
"Cho co -mã đơn- sdt *********** *************",
"Cho cô -mã đơn- -số lượng- -đơn vị- *************",
"cho chị -số lượng- -đơn vị- mã -mã đơn- *************",
" ************* -mã đơn-",
" ************* -mã đơn-",
"-mã đơn- -số lượng- -đơn vị- *************",
"lấy luôn cho e mã -mã đơn- *************",
"mã -mã đơn- -số lượng- -đơn vị-  *************",
"mã -mã đơn- sđt ************",
"Mã -mã đơn- -đơn vị- Sđt *************",
"cho chị -mã đơn- *************",
" *************",
"lấy chị -mã đơn- *************",
" *************  -mã đơn-",
" ************* -mã đơn-",
"cho chị mã -mã đơn-  *************",
"chốt chị mã -mã đơn-  *************",
" ************* -mã đơn-",
"chị mua -mã đơn- nhé *************",
" *************",
"cho cô mã -mã đơn-  *************",
" ************* -mã đơn-",
"cho dì mã -mã đơn-  *************",
"chế lấy -mã đơn- -số lượng--đơn vị- *************",
"bác muốn mua mã -mã đơn- -số lượng- -đơn vị- *************",
" *************",
"cô mua thêm -mã đơn- -số lượng--đơn vị- nha con *************",
" -mã đơn- shop ơi *************",
"mua hàng nhà chị nhiều quá rồi mà ưng lắm lấy e thêm mã -mã đơn- nha *************",
"chốt chị mã -mã đơn-  *************",
"cho chị -số lượng- -đơn vị- mã -mã đơn-  *************",
"-mã đơn- -số lượng- -mã đơn-  *************",
"lấy luôn cho e mã -mã đơn-   *************",
" *************",
"mã -mã đơn- -số lượng- -đơn vị- *************",
"nhà em xài hoài luôn, lấy e -mã đơn-  thêm nha  *************",
"lấy anh -mã đơn- -mã đơn- *************",
"cho chị mã -mã đơn-  *************",
" *************",
"chốt chị mã-mã đơn- sdt ************** ",
"em mua -mã đơn- nhé  *************",
" -mã đơn- shop ơi  *************",
" ************* -mã đơn-",
"-số lượng- mã -mã đơn- nhé shop *************",
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
        if (updatedComment.includes("")) {
            const randomIcon = icons[Math.floor(Math.random() * icons.length)];
            updatedComment = updatedComment.replace(//g, randomIcon);
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

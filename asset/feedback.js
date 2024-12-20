
const categories = {
    "am-sieu-toc": [
        "[A] này đun nước nhanh lắm, rất tiện lợi mỗi sáng",
        "[A] rất tiện nước sôi chỉ trong tích tắc",
        "[A] này rất bền, dùng lâu mà không hư hỏng, thích lắm",
        "nước nóng nhanh dùng lâu bền [A] rất đáng để mua",
        "[A] này bền quá cho chị mau thêm 2 cái nha",
        "nhà ngoại em có 2 cái [A] hiệu này sài 6 năm rồi chưa thấy hư luôn á"
    ],
    "noi-com": [
        "[A] này không chỉ nấu cơm ngon mà còn giữ ấm rất lâu, cơm luôn nóng hổi khi ăn",
        "Chị rất thích chức năng hẹn giờ của [A] , buổi sáng chỉ cần chuẩn bị gạo, chiều về đã có cơm nóng sẵn sàng",
        "Thiết kế [A] rất đẹp, gọn gàng, phù hợp với căn bếp nhỏ của tôi",
        "[A] này nấu cơm rất mềm, thơm ngon, gia đình tôi rất thích",
        "Mua [A] này đúng là quyết định sáng suốt, nấu cơm vừa nhanh vừa ngon",
        "[A] này dễ dùng, cơm không bị cháy, rất tiện lợi",
        "Từ khi mua [A]  này, tôi không còn phải lo cơm sống hay khê nữa, cực kỳ hài lòng",
        "Lòng [A]  chống dính rất tốt, vệ sinh dễ dàng, không tốn nhiều thời gian",
        "Đọc các đánh giá thấy mọi người đều khen [A] này, chắc chắn mình cũng phải mua một chiếc về dùng thử",
        "Thấy nhiều người khuyên dùng, mình rất háo hức muốn mua ngay [A]  để nấu thử",
        "Sắp tới chuyển nhà mới, mình đang cân nhắc sắm chiếc [A] này để tiện nấu ăn hàng ngày",

    ],
    "noi-chien-khong-dau": [
        "Dùng [A] này mà món ăn vẫn giòn rụm, rất ngon và ít dầu mỡ",
        "Món ăn giòn ngon mà không sợ béo, thích lắm",
        "[A] này giúp chị làm đồ ăn nhanh gọn mà vẫn giữ được hương vị",
        "Dùng [A] này mà món ăn vẫn giòn rụm, rất ngon và ít dầu mỡ",
        "Món ăn giòn ngon mà không sợ béo, thích lắm",
        "[A] này giúp cô làm đồ ăn nhanh gọn mà vẫn giữ được hương vị",
        "Thiết kế [A] hiện đại, dễ vệ sinh, thực sự rất tiện lợi cho gia đình bận rộn",
        "[A]  này không chỉ nấu ăn ngon mà còn giảm lượng dầu đáng kể, tốt cho cả người lớn tuổi và trẻ nhỏ",
        "Lòng [A] chống dính cực tốt, không lo thức ăn bị dính, dọn dẹp nhanh chóng",
        "Không cần dầu mỡ nhưng món ăn vẫn thơm ngon, bảo vệ sức khỏe cả nhà",
        "Lựa chọn [A] là quyết định đúng đắn, giờ đây cả nhà đều ăn uống lành mạnh hơn",
        "Tuyệt vời cho những ai đang ăn kiêng, món nào cũng ngon mà không bị ngấy",
        "Bạn em đã dùng và khen nhiều, chắc chắn em sẽ mua hộ chị để thử làm các món chiên nướng tại nhà",
        "Đang tìm một chiếc [A] phù hợp, thấy [A] này nhiều người khen, chắc phải đặt ngay",
        "Thích ăn đồ chiên nhưng sợ béo, hy vọng [A] này sẽ là giải pháp tuyệt vời cho chị bạn"
    ],
    "cai-thien-suc-khoe": [
        "[A] giúp anh cảm thấy khỏe khoắn hơn mỗi ngày, đặc biệt phù hợp với người thường xuyên mệt mỏi",
        "Dùng [A] một thời gian, mẹ em thấy cơ thể dẻo dai hơn, ít căng thẳng và có giấc ngủ sâu hơn luôn á",
        "Từ khi dùng [A] sức đề kháng của em cải thiện đáng kể, ít bị ốm vặt dù thời tiết thay đổi",
        "Mỗi ngày đều cảm thấy tràn đầy năng lượng không còn uể oải như trước, nhờ em uống [A] đều đặn mỗi ngày",
        "[A] này không chỉ giúp cơ thể khỏe mạnh mà còn tăng cường sự tập trung và tỉnh táo nha bà con",
        "[A] rất phù hợp cho người làm việc văn phòng hay thức khuya, giúp tinh thần thoải mái và luôn tràn đầy năng lượng",
        "Sau một ngày dài làm việc, dùng [A] này thư giãn cả cơ thể lẫn tinh thần",
        "Dùng [A] là một cách chăm sóc sức khỏe tự nhiên, vừa dễ sử dụng vừa mang lại hiệu quả rõ rệt",
        "Cơ thể em cảm thấy nhẹ nhàng, khỏe mạnh hơn nhờ uống [A]",
        "Cô đã sử dụng [A] trong thời gian dài, và hiệu quả mang lại vượt ngoài mong đợi da dẻ sáng hơn, sức khỏe cải thiện rõ rệt",
        "[A] giúp bác không chỉ khỏe mạnh mà còn tăng cường năng lượng, đặc biệt phù hợp cho người trung niên",
        "Mua [A] cho cha mẹ dùng, thấy ông bà khỏe hơn, ăn uống ngon miệng và ngủ sâu giấc hơn",
        "Từ khi sử dụng [A] ba mẹ tôi ít than đau nhức xương khớp hơn, sức khỏe cải thiện rõ rệt",
        "[A]là món quà ý nghĩa để chăm sóc sức khỏe cha mẹ, giúp ông bà sống vui và khỏe mạnh mỗi ngày",
        "Cha mẹ tôi rất thích bảo là cơ thể nhẹ nhàng, không còn mệt mỏi như trước, nghe vậy tôi vui lắm",
        "Mỗi ngày làm [A] 1 ly cho bố mẹ uống, thấy ông bà tràn đầy năng lượng và vui vẻ hơn hẳn",
    ],
    "do-an": [
        "[A] vừa ngon vừa hợp túi tiền, ăn là ghiền luôn",
        "[A] ăn một lần là nhớ mãi",
        "đám con em nó thèm [A] của chị lắm cứ phải đòi mau cho được",
        "mẹ em thích ăn [A] của nhà chị lắm á",
        "[A] này ngon tuyệt, vị vừa phải",
        "Thơm ngon, rất dễ ăn",
        "Vị [A] ngọt vừa, rất hợp khẩu vị",
        "[A] mềm, ngon miệng, ăn là mê",
        "Ăn [A] này rồi, không thể ngừng lại",
        "[A] tươi ngon, thích hợp cho bữa sáng",
        "[A] này ăn vừa miệng, rất hợp khẩu vị",
        "Lớp vỏ giòn, nhân ngọt vừa phải",
        "Mình cực kỳ thích vị [A] này",
        "[A] thơm ngon, ăn hoài không chán",
        "Vị [A] ngọt nhẹ, rất ngon",
        "Món [A] này làm mình ăn mãi không ngừng",
        "[A] mềm và dễ ăn, ai cũng thích",
        "Thích ăn [A] này cùng trà",
        "[A] rất ngon, thích hợp cho các buổi tiệc",
        "[A] ngọt vừa đủ, không bị ngấy",
        "Ngon từng miếng, [A] mềm xốp",
        "[A] này rất thơm, ai ăn cũng thích",
        "[A] ngọt nhẹ, thích hợp cho buổi xế chiều",
        "[A] tuyệt vời, ăn mãi không thấy ngán",
        "[A] này chắc chắn sẽ khiến bạn hài lòng",
        "Ăn [A] này thấy ngon miệng cả ngày",
        "Hương vị [A] tuyệt vời, không thể chối từ",
        "[A] này làm mình nhớ mãi",
    ],
    "ao": [
        "[A] đẹp, dáng chuẩn, rất thích",
        "Vải mềm mại, mặc rất thoải mái",
        "[A] này làm mình trông rất sang trọng",
        "Mặc váy này rất tôn dáng",
        "Chất vải rất đẹp và thoáng mái",
        "[A] mặc rất dễ chịu, phù hợp mọi lễ, đi đám",
        "[A] rất xinh, thích hợp mặc đi chơi",
        "Chất vải mềm mại, thoải mái cả ngày",
        "[A] này rất tôn dáng, mặc lên rất đẹp",
        "Mặc váy này tự tin hơn hẳn",
        "[A] đẹp, mặc vào là tỏa sáng luôn",
        "Chất vải rất mát mẻ, thích hợp cho mùa hè",
        "[A] này dễ mặc, vừa vặn, rất thoải mái",
        "Mặc váy này cảm thấy rất dễ chịu",
        "Dáng váy đẹp, dễ dàng phối đồ",
        "[A] này tạo cảm giác thoải mái và xinh đẹp",
        "[A] có màu sắc rất đẹp, rất dễ mặc",
        "[A] này giúp tôi cảm thấy tự tin hơn",
        "Rất yêu thích chiếc váy này, mặc rất đẹp",
        "[A] này đẹp và thanh lịch, rất thích hợp cho tiệc tùng",
        "Chất vải mềm, rất dễ chịu khi mặc",
        "[A] này rất thoải mái, mặc cả ngày không mệt",
        "Dáng váy đẹp, phù hợp với nhiều kiểu dáng người",
        "[A] mặc vào rất tôn dáng, tôi rất thích",
        "[A] này mặc vào vừa đẹp, vừa thoải mái",
    ],
    "sua": [
        "[A] thơm ngon, uống rất mịn",
        "Uống sữa hạt mỗi sáng, cơ thể khỏe mạnh",
        "[A] này cực kỳ bổ dưỡng, ai cũng thích",
        "Thích sữa hạt này, ngọt tự nhiên, không ngấy",
        "Uống sữa hạt giúp da dẻ mịn màng hơn",
        "[A] thơm ngon, vị tự nhiên rất dễ uống",
        "Tốt cho sức khỏe, uống sữa hạt mỗi ngày",
        "Hương vị sữa hạt này rất tuyệt vời",
        "[A] này giúp cơ thể khỏe mạnh và năng động",
        "Thích sữa hạt này vì độ mịn màng và thơm ngon",
        "[A] là thức uống tuyệt vời cho cả gia đình",
        "Uống xong cảm thấy nhẹ nhàng, không bức bí",
        "Mình dùng sữa hạt mỗi sáng, rất tốt cho sức khỏe",
        "Cảm giác cơ thể khỏe khoắn hơn khi uống sữa hạt này",
        "Vị sữa rất thanh, uống rất dễ chịu",
        "Hương sữa nhẹ nhàng, dễ uống, không quá ngọt",
        "Uống sữa hạt này giúp giảm căng thẳng, thư giãn",
        "Mỗi ngày một ly sữa hạt giúp bổ sung dinh dưỡng",
        "[A] này rất dễ uống, cho cơ thể dẻo dai",
        "Không thể thiếu sữa hạt trong chế độ ăn của mình",
        "Rất thích uống sữa hạt này, bổ sung năng lượng tuyệt vời",
        "[A] giúp bổ sung vitamin và khoáng chất cho cơ thể",
        "Hương vị tự nhiên, rất tốt cho sức khỏe",
        "Chắc chắn sẽ mua lại sữa hạt này",
        "[A] bổ dưỡng, một sự lựa chọn tuyệt vời",
    ],
    "thuoc-men": [
        "[A] cực kỳ hiệu quả, mẹ chị uống vài ngày đã thấy đỡ đau",
        "Sản phẩm tốt, giúp hỗ trợ điều trị đau nhức xương khớp rất rõ rệt",
        "Đã dùng thử nhiều loại, nhưng chỉ có [A] bên shop là hiệu quả nhất",
        "Chồng chị bị khớp mãn tính, uống [A] này thấy đỡ đau rõ rệt luôn",
        "[A] dễ uống, không gây tác dụng phụ, rất an tâm khi sử dụng",
        "Cảm ơn shop, [A] bên em hỗ trợ xương khớp rất tốt, mẹ chị khen lắm",
        "Nhà mình dùng [A] này thấy hiệu quả rõ ràng, sẽ tiếp tục ủng hộ shop",
        "Nhận được hàng đúng mẫu mã, chất lượng tuyệt vời, cảm ơn shop",
        "Sẽ giới thiệu bạn bè dùng thử, [A] này thật sự hiệu quả",
        "[A] cực kỳ hiệu quả, mẹ chị uống vài ngày đã thấy đỡ đau",
        "Sản phẩm tốt, giúp hỗ trợ điều trị đau nhức xương khớp rất rõ rệt",
        "Đã dùng thử nhiều loại, nhưng chỉ có [A] bên shop là hiệu quả nhất",
        "Chồng chị bị khớp mãn tính, uống [A] này thấy đỡ đau rõ rệt luôn",
        "[A] dễ uống, không gây tác dụng phụ, rất an tâm khi sử dụng",
        "Cảm ơn shop, [A] bên em hỗ trợ xương khớp rất tốt, mẹ chị khen lắm",
        "Nhà mình dùng [A] này thấy hiệu quả rõ ràng, sẽ tiếp tục ủng hộ shop",
        "Nhận được hàng đúng mẫu mã, chất lượng tuyệt vời, cảm ơn shop",
        "Sẽ giới thiệu bạn bè dùng thử, [A] này thật sự hiệu quả",
    ],
    "quan": [
        "[A] rất dễ mặc và dễ phối đồ",
        "Chất liệu vải mềm [A] thoáng mát và dễ chịu",
        "[A] này giữ form rất tốt sau khi giặt",
        "Kiểu dáng đẹp mặc [A] phù hợp với môi trường công sở",
        "Mặc [A] này, tôi cảm thấy tự tin và lịch sự",
        "[A] vừa vặn, không gây khó chịu khi di chuyển",
        "Thích hợp cho cả đi làm và đi chơi cho tôi thêm 5 [A] này",
        "Chất liệu bền, mặc [A] lâu không lo bị mòn",
        "Thiết kế nhìn đơn giản [A] giá rẻ vẫn rất thời trang",
        "Mặc [A] này cảm giác rất thanh thoát",
        "[A] đẹp, ôm dáng rất vừa vặn",
        "Chất vải nhẹ nhàng và thoáng khí nên mua [A] nha các chị",
        "[A] phù hợp với nhiều phong cách thời trang",
        "Mặc [A] này, bạn sẽ luôn trông gọn gàng và lịch sự",
        "[A] này rất dễ giặt và nhanh khô",
        "[A] này có thể mặc đi làm hoặc dạo phố đều rất hợp",
        "[A] rất bền, thích hợp cho công việc hàng ngày",
        "[A] này là lựa chọn tuyệt vời cho những ai yêu thích sự thoải mái",
        "[A] thoải mái, dễ dàng vận động",
        "Chất liệu co giãn tốt, giúp tôi tập luyện thoải mái",
        "[A] vừa vặn, không bị tuột khi chạy",
        "[A] này có khả năng thấm hút mồ hôi tốt",
        "Dễ dàng di chuyển và không bị cản trở khi tập",
        "Thiết kế đẹp mắt, thoải mái cho mọi hoạt động",
        "Chất vải nhẹ nhàng, không bí bách",
        "[A] rất bền, giặt nhiều lần không bị hư",
        "Đặc biệt thích hợp cho các buổi tập gym",
        "Dễ dàng phối hợp với các loại áo thể thao",
        "[A] ôm dáng mà không chật, rất thoải mái",
        "Mặc lâu không cảm thấy ngứa hay khó chịu",
        "Chất liệu thấm mồ hôi rất tốt, không bị ướt",
        "[A] này rất thoáng khí, phù hợp mùa hè",
        "[A] vừa vặn, giúp tôi thoải mái trong mọi động tác",
        "Mặc [A] này, tôi cảm thấy tự tin hơn khi tập",
        "Rất phù hợp cho những buổi sáng tập thể dục ngoài trời",
        "Sản phẩm chất lượng tốt, rất đáng mua",
        "[A] này giúp tôi tập luyện dễ dàng hơn",
        "Chất liệu siêu nhẹ, hoàn hảo cho những ngày tập luyện dài",

    ],
    "lan-da": [
        "[A] rất hiệu quả, da sáng mịn lên rõ rệt",
        "[A] này tuyệt vời quá xài mấy ngày da căng bóng mà không nhờn",
        "[A] thích hợp cho mọi loại da, dưỡng ẩm cực kỳ tốt",
        "[A] giúp giảm nhăn rất rõ căng bóng mịn mà",
        "Mùi hương nhẹ nhàng, không gây kích ứng",
        "Sau khi dùng [A] da trở nên săn chắc và mịn màng hơn",
        "[A] thẩm thấu vào da, không gây bí da",
        "[A] này sài không bết rít còn mát da nữa",
        "[A]  này dùng lâu dài giúp da tươi sáng hơn",
        "[A] dưỡng da rất tốt, giúp phục hồi các vùng da bị nhăn",
        "[A] chất lượng, da khỏe mạnh và mịn màng",
        "Kết quả rõ rệt chỉ sau một thời gian ngắn dùng [A]",
        "Mỗi lần dùng thấy làn da trở nên mềm mại hơn",
        "Da mặt tôi sáng lên sau khi dùng [A] này",
        "[A]  rất dễ dùng, hiệu quả ngay sau vài lần",
        "Cảm thấy làn da khỏe hơn và không bị khô sau khi dùng",
        "Làm mờ nếp nhăn, da trở nên trẻ trung hơn chị em mua [A] dùng đi",
        "[A] này làm da mịn màng hơn mỗi ngày",
        "Từ ngày mua [A] hiệu quả rất nhanh da có độ đàn hồi tốt",
        "Chất [A] nhẹ nhàng, thẩm thấu nhanh vào da",
        "[A] giúp da tôi sáng đều màu hơn",
        "[A] này sài 2 tuần nâng tone sáng bóng ai cũng hỏi mua ở đâu sài [A] gì haha",
        "Làn da mềm mại và mịn màng hơn chỉ sau vài lần sử dụng [A] em rất hài lòng",
        "Dùng [A] da lúc nào cũng căng mướt, đủ ẩm mà không bị nhờn rít",
        "Da Chị trước đây hay khô ráp, nhưng từ khi [A] da mềm mại hơn rất nhiều em",
        "Cảm giác làn da được cấp ẩm sâu, mịn màng ngay sau khi dùng [A] được 10 ngày ",
        "theo cảm nhận khi đã dùng qua [A] làn da sạch sâu nhưng không bị mất độ ẩm tự nhiên",
        "Da không chỉ sạch mà còn sáng lên rõ rệt nên mua [A]",
        "Cảm giác da mịn mới hoàn toàn, rất sảng khoái và dễ chịu",
        "Sau khi sử dụng [A] da không chỉ mịn mà còn lưu lại hương thơm dễ chịu suốt cả ngày",
        "[A] này giúp Chị thư giãn cả cơ thể lẫn tinh thần, làn da mịn màng hơn sau mỗi lần sử dụng",
        "Cảm giác như da được chăm sóc ở spa, vừa sạch vừa mềm mại và thơm lâu mà thực ra là tui sài [A] hahaa",
        "Dùng [A] lâu dài, Chị thấy da trở nên mềm mượt hơn, không còn khô hay sần sùi ở những vùng như khuỷu tay hay đầu gối",
        "[A] không chỉ giúp làm sạch mà còn dưỡng da, da Chị cải thiện rất nhiều chỉ sau vài tuần",
        "Làn da chị trở nên mềm mịn và khỏe khoắn hơn, không còn tình trạng khô nứt khi trời lạnh, chị cảm ơn em đã giới thiệu [A] cho chị",
    ],
    "dau-goi": [
        "Dùng [A] này, tóc cô khỏe hẳn lên, không còn rụng nhiều như trước",
        "Mùi hương rất dễ chịu, lưu lại trên tóc lâu, ai cũng hỏi chị dùng loại nào",
        "[A] tạo bọt mềm mịn, làm sạch tóc mà không khiến tóc bị xơ hay rít",
        "Tóc em trước đây khô xơ, nhưng sau khi dùng sản phẩm này, tóc mềm mượt hơn rõ rệt",
        "Dùng [A] này tóc chị mềm hơn rất nhiều, cảm giác mượt mà suốt cả ngày",
        "Tóc không chỉ suôn mượt mà còn giảm rụng đáng kể sau vài tuần sử dụng",
        "Rất phù hợp với tóc khô và hư tổn, giúp tóc con phục hồi nhanh chóng và khỏe mạnh hơn",
        "Rất phù hợp cho da đầu nhạy cảm, không gây kích ứng hay ngứa rát",
        "Tóc chị ngày càng chắc khỏe hơn, không bị gàu hay dầu thừa như trước",
        "[A] này còn giúp giảm tóc gãy rụng, mỗi lần chải tóc không thấy tóc rụng nhiều nữa",
        "Da đầu em khỏe hơn nhiều, không bị nhờn hay bết, cảm giác tóc luôn sạch và nhẹ nhàng",
        "Da đầu em trước đây hay ngứa, nhưng từ khi dùng [A] này thì không còn vấn đề đó nữa",
        "[A] này không làm tóc bết dính, da đầu thông thoáng và rất dễ chịu",
        "Cảm giác nhẹ nhàng, không gây kích ứng, phù hợp với cả da đầu nhạy cảm",
        "Mình đã dùng qua nhiều loại [A], nhưng đây là sản phẩm ưng ý nhất vì tóc vừa mềm vừa không bị xơ",
        "Đã dùng một thời gian và em thấy tóc mọc dày hơn, có sức sống hơn trước",
        "Cả gia đình em đều dùng loại này, ai cũng khen tóc bóng mượt và khỏe hơn",
        "Lần đầu sử dụng đã cảm nhận được tóc suôn mượt, không cần dùng thêm dầu xả mà vẫn mềm",
        "Sau khi dùng [A] này, tóc em ít bị rối hơn, không cần dùng thêm dầu xả mà vẫn mượt mà",
        "[A] này giúp tóc em khỏe hơn từ chân tóc, ít gãy rụng khi chải hoặc tạo kiểu",
        "Chỉ sau vài lần gội, tóc đã bóng khỏe hơn, không còn cảm giác xơ rối như trước",
        "Một sản phẩm rất đáng để thử, phù hợp với mọi loại tóc, đặc biệt là tóc yếu và dễ gãy",
        "Bạn em đã giới thiệu, và quả thật đây là loại [A] tốt nhất em từng dùng",
        "Mình rất hài lòng, chắc chắn sẽ tiếp tục mua lại và giới thiệu cho bạn bè",
        "Đây là lựa chọn hoàn hảo cho cả nam và nữ, đặc biệt là những ai có tóc khô và hư tổn",
        "Thích hợp cho tóc nhuộm vì không làm phai màu mà còn giúp tóc mềm hơn",
        "Chị mua cho cả nhà dùng thử, ai cũng hài lòng vì [A] vừa thơm, vừa giúp tóc khỏe",
    ]
};
const productSuggestions = ["sữa hạt", "sữa khớp", "sữa bột", "nồi chiên không dầu", "nồi lẩu", "Nồi chiên không dầu", "quần tây", "quần thể thao", "quần kaki", "tinh dầu thông đỏ", "nấm linh chi",
    "kem nmn", "kem c", "hắc sâm lát", " đông trùng hạ thảo", "táo đỏ", "bộ nồi cao cấp", "mặt nạ b5", "nước sâm", " nước collagen ", " yến", " nước hồng sâm", 
    " viên an cung ngưu", " tinh chất sâm", " sâm củi", "rong biển", " viên an cung ngưu", " viên hồng sâm"
];



function checkEnter(event) {
    if (event.key === "Enter") {  // Kiểm tra nếu phím được nhấn là Enter
        generateFeedback(); // Gọi hàm generateFeedback khi nhấn Enter
    }
}

function generateFeedback() {
    const productName = document.getElementById('productName').value;
    const category = document.getElementById('category').value;
    const count = parseInt(document.getElementById('feedCount').value);
    const feedbackList = document.getElementById('feedbackList');

    // Kiểm tra xem người dùng đã điền đầy đủ thông tin chưa
    if (!productName || !category || isNaN(count) || count < 1) {
        showNotification("Vui lòng điền đầy đủ thông tin!", "red-100", "red-500", "red");
        return; // Ngừng hàm nếu có bất kỳ trường nào thiếu
    }

    feedbackList.innerHTML = ""; // Clear previous feedback

    // Kiểm tra nếu category có trong đối tượng categories
    if (category in categories) {
        // Lấy dữ liệu feedback từ categories và thay thế [A] bằng tên sản phẩm
        const feedback = getRandomItems(categories[category], count).map(sentence => sentence.replace("[A]", productName));

        // Cập nhật danh sách feedback vào phần tử feedbackList
        feedbackList.innerHTML = feedback.map(item => 
            `<li class="symbol" onclick="copyToClipboard('${item}', event)">${item}</li>`
        ).join("");

        showNotification("Cập nhật thành công", "green-100", "green-500", "green");
    } else {
        // Thông báo khi thể loại không hợp lệ
        feedbackList.innerHTML = "<li>Thể loại không hợp lệ!</li>";
        showNotification("Thể loại không hợp lệ!", "red-100", "red-500", "red");
    }
}

// Hàm lấy các phần tử ngẫu nhiên từ mảng
function getRandomItems(arr, count) {
    const shuffled = arr.slice(0); // Tạo bản sao của mảng gốc
    let i = arr.length, t, j;

    // Xáo trộn mảng
    while (i) {
        j = Math.floor(Math.random() * i--);
        t = shuffled[i];
        shuffled[i] = shuffled[j];
        shuffled[j] = t;
    }

    return shuffled.slice(0, count); // Trả về một mảng mới với count phần tử ngẫu nhiên
}


function showSuggestions() {
    const input = document.getElementById('productName').value.toLowerCase();
    const dataList = document.getElementById('productSuggestions');

    dataList.innerHTML = ""; // Xóa gợi ý cũ

    if (input) {
        const filteredSuggestions = productSuggestions.filter(product => product.toLowerCase().includes(input));
        if (filteredSuggestions.length > 0) {
            filteredSuggestions.forEach(product => {
                const option = document.createElement('option');
                option.value = product;
                dataList.appendChild(option);
            });
           
        } else {
            // Hiển thị thông báo khi không tìm thấy gợi ý
            showNotification("Không có trong danh sách gợi ý", "yellow-100", "yellow-500", "yellow");
        }
    } else {
        // Hiển thị thông báo khi không có đầu vào
        showNotification("Nhập cái gì vô đó đi! Bitch!","red-100", "red-500", "red");
    }
}


function refreshPage() {
    // Làm mới nội dung bình luận (hoặc bất kỳ nội dung nào cần làm mới)
    comments = [...originalComments]; // Đặt lại bình luận về trạng thái ban đầu
    displayComments(); // Hiển thị lại bình luận mới

    // Hiển thị thông báo làm mới
    showNotification("Refresh", "blue-100", "blue-500", "blue");
}

function copyFeedback() {
    const feedbackList = document.getElementById('feedbackList');
    const feedbackItems = feedbackList.querySelectorAll('li');
    const feedbackText = Array.from(feedbackItems).map(item => item.textContent).join('\n');

    // Sao chép phản hồi vào clipboard
    navigator.clipboard.writeText(feedbackText)
        .then(() => {
            // Thông báo sao chép thành công
            showNotification("Feedback copied to clipboard!", "green-100", "green-500", "green");
        })
        .catch(err => {
            // Thông báo nếu không sao chép được
            console.error('Unable to copy feedback to clipboard', err);
            showNotification("Failed to copy feedback", "red-100", "red-500", "red");
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
                    <p class="text-sm text-${color}-500 font-semibold">F0 thông báo</p>
                </div>
            </div>
        </div>
    </div>
`;
    document.body.appendChild(notification);

    // Đặt thời gian hiển thị là 3000ms (3 giây)
    setTimeout(() => {
        document.body.removeChild(notification);
    }, 3000);
}




function copyToClipboard(text, event) {
    // Create a temporary input element to hold the text
    var tempInput = document.createElement("input");
    tempInput.value = text;
    document.body.appendChild(tempInput);

    // Select the text inside the temporary input
    tempInput.select();
    tempInput.setSelectionRange(0, 99999); // For mobile devices

    // Execute the copy command
    document.execCommand("copy");

    // Remove the temporary input element from the DOM
    document.body.removeChild(tempInput);

    // Change the border color to green for visual feedback
    var symbol = event.target;
    symbol.style.border = "2px solid  rgb(174, 255, 174)";

    // Reset the border color after 2 seconds
    setTimeout(function() {
        symbol.style.border = "1px #ccc"; // Reset to original border color
    }, 2000);
}



$(document).ready(function () {
    var fixedText = "Comment Seeding Live";
    var randomText = "abcdefghijklmnopqrstuvwxyz0123456789$#@%&<>,?/+~!\;,{*}"; // the randomtext you want
    var clickDisable = true;
    var startTime, largestDuration;
    var h1 = $('h1');
  
    function ani() {
      h1[0].classList.add('ani-button');
    }
  
    function frames() {
      function intGet(multiplier) {
        return Math.floor(Math.random() * multiplier);
      }
      var animationDuration = intGet(2500) + 500; //0-(range) + constant = 500-3000ms
      var timeBetweenFrames = intGet(100) + 50; //0-(range) + constant = 50-150ms
      var totalFrames = Math.floor(animationDuration / timeBetweenFrames);
      return [timeBetweenFrames, totalFrames, animationDuration]; // frameAttr[0,1,2]
    }
  
    function start() {
      largestDuration = 0;
      var frameAttr = frames();
  
      if (frameAttr[2] > largestDuration) {
        largestDuration = frameAttr[2];
      }
      function timeout() {
        setTimeout(function () {
          if (frameAttr[1]--, frameAttr[1] != 0) {
            h1[0].innerHTML = randomText.charAt(Math.floor(Math.random() * randomText.length));
            timeout();
          } else {
            h1[0].innerHTML = fixedText;
          }
        }, frameAttr[0]);
      }
      timeout();
      startTime = Date.now();
      setTimeout(function () {
        clickDisable = false;
        h1[0].classList.remove('ani-button');
      }, largestDuration);
    }
  
    // Automatically start every 10 seconds
    setInterval(function () {
      start();
      ani();
    }, 10000); // Start the effect every 10 seconds
  
    // Start the effect initially
    start();
    ani();
  });
  

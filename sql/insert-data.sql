USE flashcard_webapp;

SET FOREIGN_KEY_CHECKS = 0;

INSERT INTO `user`(`NAME`, EMAIL, PASSWORD, ROLE)
VALUE ("USER01", "user01@gmail.com", "123", "USER");

INSERT INTO `flashcard`(`NAME`, `DESCRIPTION`, USER_ID)
VALUE ("Từ điển Tiếng Pháp", "Tiếng Pháp cơ bản", "52"),
("Từ điển Tiếng Pháp", "Tiếng Pháp nâng cao 1", "52"),
("Từ điển Tiếng Pháp", "Tiếng Pháp nâng cao 2", "52"),
("Từ điển Tiếng Hàn", "Tiếng Hàn cơ bản", "52"),
("Từ điển Tiếng Hàn", "Tiếng Hàn nâng cao 2", "53"),
("Từ điển Tiếng Trung", "Tiếng Trung cơ bản", "53"),
("Từ điển Tiếng Trung", "Tiếng Pháp nâng cao", "53");


INSERT INTO `card`(`NAME`, `DEFINATION`, FLASHCARD_ID)
VALUE ("Bonjour", "Xin chào", "2"),
("Bonsoir", "Chào buổi tối", "2"),
("Au revoir", "Tạm biệt", "2"),
("la politique", "Chính trị", "3"),
("l’éducation", "Giáo dục", "3"),
("l’environnement", "Môi trường", "3"),
("la mode", "Thời trang", "4"),
("l’économie et le commerce", "Kinh tế và thương mại", "4"),
("한시간", "Một tiếng đồng hồ", "4"),
("운전사", "Tài xế", "5"),
("액자", "Khung ảnh", "5"),
("차고", "Nhà xe", "5"),
("벽난로 선반", "	Kệ trên lò sưởi", "5"),
("벽", "	Tường", "6"),
("빵과 버터 플레이트", "	Đĩa đựng bánh mì và bơ", "6"),
("프라이팬", "Đĩa đựng bánh mì và bơ", "6"),
("如果", "Nếu", "7"),
("這麼", "Như vậy", "7"),
("公司", "Công ty", "7"),
("看來", "Xem ra", "7"),
("正在", "Đang", "8"),
("調查", "Điều tra", "8"),
("約會", "Hẹn hò", "8");

SET FOREIGN_KEY_CHECKS = 1; 
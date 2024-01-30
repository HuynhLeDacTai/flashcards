USE flashcard_webapp;

SET FOREIGN_KEY_CHECKS = 0;

INSERT INTO `user`(`ID`, `NAME`, EMAIL, PASSWORD, ROLE, ADDRESS)
    VALUE ("1","USER01", "user01@gmail.com", "123", "USER", "Da Nang");

INSERT INTO `flashcard`(`ID`, `TITLE`, `DESCRIPTION`, USER_ID)
    VALUE ("1","Từ điển Tiếng Pháp", "Tiếng Pháp cơ bản", "52"),
("2","Từ điển Tiếng Pháp", "Tiếng Pháp nâng cao 1", "52"),
("3","Từ điển Tiếng Pháp", "Tiếng Pháp nâng cao 2", "52"),
("4","Từ điển Tiếng Hàn", "Tiếng Hàn cơ bản", "52"),
("5","Từ điển Tiếng Hàn", "Tiếng Hàn nâng cao 2", "53"),
("6","Từ điển Tiếng Trung", "Tiếng Trung cơ bản", "53"),
("7","Từ điển Tiếng Trung", "Tiếng Pháp nâng cao", "53");


INSERT INTO `card`(`ID`, `NAME`, `DEFINITION`, FLASHCARD_ID)
    VALUE ("1","Bonjour", "Xin chào", "2"),
("2","Bonsoir", "Chào buổi tối", "2"),
("3","Au revoir", "Tạm biệt", "2"),
("4","la politique", "Chính trị", "3"),
("5","l’éducation", "Giáo dục", "3"),
("6","l’environnement", "Môi trường", "3"),
("7","la mode", "Thời trang", "4"),
("8","l’économie et le commerce", "Kinh tế và thương mại", "4"),
("9","한시간", "Một tiếng đồng hồ", "4"),
("10","운전사", "Tài xế", "5"),
("11","액자", "Khung ảnh", "5"),
("12","차고", "Nhà xe", "5"),
("13","벽난로 선반", "	Kệ trên lò sưởi", "5"),
("14","벽", "	Tường", "6"),
("15","빵과 버터 플레이트", "	Đĩa đựng bánh mì và bơ", "6"),
("16","프라이팬", "Đĩa đựng bánh mì và bơ", "6"),
("17","如果", "Nếu", "7"),
("18","這麼", "Như vậy", "7"),
("19","公司", "Công ty", "7"),
("20","看來", "Xem ra", "7"),
("21","正在", "Đang", "8"),
("22","調查", "Điều tra", "8"),
("23","約會", "Hẹn hò", "8");

INSERT INTO TEST (`ID`,`NAME`, `TYPE`, TIMING, AMOUNT_OF_QUESTION)
    VALUE  	("1","Trắc nghiệm 100 câu cơ bản 1", "TOEIC", 100, 100),
		("2","Trắc nghiệm 25 câu bộ 1", "TOEIC", 30, 25),
		("3","Trắc nghiệm 25 câu bộ 2", "TOEIC", 30, 25),
		("4","Trắc nghiệm 25 câu bộ 3", "TOEIC", 30, 25),
		("5","Trắc nghiệm 25 câu bộ 4", "TOEIC", 30, 25),
		("6","Trắc nghiệm 25 câu bộ 5", "TOEIC", 30, 25),
		("7","Trắc nghiệm 100 câu cơ bản 2", "TOEIC", 60, 100),
		("8","Trắc nghiệm 100 câu cơ bản 3", "TOEIC", 60, 100),
		("9","Trắc nghiệm 100 câu nâng cao 3", "TOEIC", 60, 100),
		("10","Trắc nghiệm 100 câu nâng cao 1", "TOEIC", 60, 100),
		("11","Trắc nghiệm 100 câu nâng cao 2", "TOEIC", 60, 100),
		("12","Bộ luyện đề IELTS nâng cao 2", "IELTS", 60, 100),
		("13","Thực chiến IELTS", "IELTS", 60, 60),
		("14","Luyện thi cấp tốc IELTS", "IELTS", 60, 60);


SET FOREIGN_KEY_CHECKS = 1;
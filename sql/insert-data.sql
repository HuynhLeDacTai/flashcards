USE flashcard_webapp;

SET FOREIGN_KEY_CHECKS = 0;

INSERT INTO `user`(`NAME`, EMAIL, PASSWORD, ROLE)
VALUE ("USER01", "user01@gmail.com", "123", "USER");

SET FOREIGN_KEY_CHECKS = 1; 
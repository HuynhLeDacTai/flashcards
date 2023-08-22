CREATE SCHEMA flashcard_webapp CHAR SET utf8mb4;
USE flashcard_webapp;

DROP TABLE IF EXISTS `USER`;
CREATE TABLE `USER`
(
  ID 			BIGINT 			AUTO_INCREMENT 		PRIMARY KEY,
  `NAME` 		VARCHAR(255)	NOT NULL,
  EMAIL 		VARCHAR(255) 	NOT NULL,
  `PASSWORD` 	VARCHAR(255) 	NOT NULL,
  `ROLE` 		VARCHAR(50) 	NOT NULL
);

DROP TABLE IF EXISTS `FLASHCARD`;
CREATE TABLE `FLASHCARD`
(
  ID 				BIGINT 			AUTO_INCREMENT 		PRIMARY KEY,
  `NAME` 			VARCHAR(255) 	NOT NULL,
  `DESCRIPTION` 	TEXT,
  USER_ID 			BIGINT
);
ALTER TABLE `FLASHCARD`
ADD CONSTRAINT FK_FLASHCARD_USER 	FOREIGN KEY (USER_ID) 	REFERENCES `USER`(ID);

DROP TABLE IF EXISTS `CARD`;
CREATE TABLE `CARD`
(
  ID 			BIGINT 			AUTO_INCREMENT PRIMARY KEY,
  `NAME` 		VARCHAR(255) 	NOT NULL,
  `DEFINATION` 	TEXT,
  FLASHCARD_ID	BIGINT
);
ALTER TABLE `CARD`
ADD CONSTRAINT FK_CARD_LASHCARD	FOREIGN KEY (FLASHCARD_ID) 	REFERENCES `FLASHCARD`(ID);

DROP TABLE IF EXISTS `TOKEN`;
CREATE TABLE `TOKEN`
(
    ID 				BIGINT 			AUTO_INCREMENT PRIMARY KEY,
    TOKEN 			VARCHAR(255) UNIQUE,
    TOKEN_TYPE 		VARCHAR(50),
    REVOKED 		BOOLEAN,
    EXPIRED 		BOOLEAN,
    USER_ID 		BIGINT
);
ALTER TABLE `TOKEN`
ADD CONSTRAINT FK_TOKEN_USER FOREIGN KEY (USER_ID) 	REFERENCES `USER`(ID);

DROP TABLE IF EXISTS `TEST`;
CREATE TABLE `TEST`
(
    ID 							BIGINT 			AUTO_INCREMENT PRIMARY KEY,
    `NAME` 						VARCHAR(255) ,
    `TYPE` 						VARCHAR(50),
    TIMING 						INT,
    AMOUNT_OF_QUESTION 			INT
);

DROP TABLE IF EXISTS `QUESTION`;
CREATE TABLE `QUESTION`
(
    ID 							BIGINT 			AUTO_INCREMENT PRIMARY KEY,
    `CONTENT` 					VARCHAR(255),
    CHOICE_1					VARCHAR(50),
    CHOICE_2					VARCHAR(50),
    CHOICE_3					VARCHAR(50),
    CHOICE_4					VARCHAR(50),
    ANSWER						VARCHAR(50),
    CONSTRAINT UC_CONTENT UNIQUE (`CONTENT`),
    CONSTRAINT CHK_ANSWER CHECK (ANSWER IN (CHOICE_1, CHOICE_2, CHOICE_3, CHOICE_4))
);

DROP TABLE IF EXISTS `TEST_DETAIL`;
CREATE TABLE `TEST_DETAIL`
(
	TEST_ID 			BIGINT,
    QUESTION_ID 		BIGINT,
	CONSTRAINT PK_TEST_DETAIL 			PRIMARY KEY (TEST_ID, QUESTION_ID),
    CONSTRAINT FK_TEST_DETAIL 			FOREIGN KEY(TEST_ID) 		REFERENCES TEST(ID),
    CONSTRAINT FK_QUESTION_ITEM 		FOREIGN KEY(QUESTION_ID) 	REFERENCES QUESTION(ID)
);

ALTER TABLE `TEST`
ADD COLUMN `ACCESS_COUNT` INT DEFAULT 0;





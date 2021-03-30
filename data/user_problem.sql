DROP TABLE IF EXISTS `problem`;
DROP TABLE IF EXISTS `user`;

--add user table 
CREATE TABLE `user` (
`uid` int(6) NOT NULL,
`name` char(50) DEFAULT NULL,
`email` char(50) DEFAULT NULL,
`password` varchar(25) DEFAULT NULL,
`age` tinyint DEFAULT NULL,
`type` char(10) DEFAULT NULL,
PRIMARY KEY (`uid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


--add problem table 
CREATE TABLE `problem` (
`pid` int(6) unsigned NOT NULL AUTO_INCREMENT,
`problem` char(50) DEFAULT NULL,
`uid` int(6),
PRIMARY KEY (`pid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--add foreign key to problem table
ALTER TABLE `problem`
ADD FOREIGN KEY (`uid`) REFERENCES user(`uid`);
INSERT INTO `user` (`uid`, `name`, `email`, `password`, `age`, `type`) VALUES
('1','Jim Kullan','jim.k@gmail.com', 'password1', '32', 'patient'),
('2','Gemma Magee','gemma.m@gmail.com', 'password2', '26', 'patient'),
('3','Conor Robertson','conor.r@gmail.com', 'password3', '47', 'patient'),
('4','Rebecca Thompson','rebecca.t@gmail.com', 'password4', '38', 'patient'),
('5','Niall Dynan','niall.d@gmail.com', 'password5', '19', 'patient'),
('6','Rachel Mooney','rachel.m@gmail.com', 'password6', '56', 'patient'),
('7','Elle Poland','elle.p@gmail.com', 'password7', '44', 'patient'),
('8','Dr. Nathan McAllister','nathan.m@gmail.com', 'password8', '46', 'therapist'),
('9','Dr. Ryan Murphy','ryan.m@gmail.com', 'password9', '54', 'therapist'),
('10','Dr. Amy Young','amy.y@gmail.com', 'password10', '33', 'therapist');

INSERT INTO `problem` (`pid`, `problem`, `uid`) VALUES
('1','Bipolar affective disorder', '3'),
('2','Anxiety disorder', '2'),
('3','Depression', '4'),
('4','Eating Disorder', '1'),
('5','Anxiety disorder', '7'),
('6','Depression', '5'),
('7','Bipolar affective ', '6');
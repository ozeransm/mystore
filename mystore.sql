/*M!999999\- enable the sandbox mode */ 
-- MariaDB dump 10.19  Distrib 10.11.14-MariaDB, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: mystore
-- ------------------------------------------------------
-- Server version	10.11.14-MariaDB-0ubuntu0.24.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `quantity` int(11) NOT NULL DEFAULT 1,
  `id_product` varchar(100) NOT NULL,
  `contacts` varchar(255) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `id_product` (`id_product`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES
(1,'Lenovo ThinkPad X1 Carbon','serhii.kov@example.com','Хочу отримати завтра, якщо можливо',1,'1','Сергій Коваленко, +380501112233','2026-03-01 15:57:39','2026-03-01 15:57:39'),
(2,'Samsung Galaxy S24','maria.iv@example.com','Потрібна подарункова упаковка',2,'3','Марія Іванчук, +380671234567','2026-03-01 15:57:39','2026-03-01 15:57:39'),
(3,'Sony WH-1000XM5','oleg.petrov@example.com','Перед відправкою подзвоніть',1,'5','Олег Петров, +380931234567','2026-03-01 15:57:39','2026-03-01 15:57:39'),
(4,'Dell UltraSharp 27\"','anna.lyt@example.com','Замовлення для офісу',3,'7','Анна Литвин, +380501234888','2026-03-01 15:57:39','2026-03-01 15:57:39'),
(5,'Asus ROG Strix G16','d.savchuk@example.com','Прошу виставити рахунок',1,'10','Дмитро Савчук, +380661112244','2026-03-01 15:57:39','2026-03-01 15:57:39'),
(6,'TP-Link Archer AX55','oksana.rom@example.com','Доставка Новою Поштою',4,'12','Оксана Романюк, +380991234555','2026-03-01 15:57:39','2026-03-01 15:57:39'),
(7,'Xiaomi Robot Vacuum S10','ihor.mel@example.com','Потрібна консультація перед покупкою',1,'14','Ігор Мельник, +380501234999','2026-03-01 15:57:39','2026-03-01 15:57:39'),
(8,'Philips AirFryer XXL','katya.bond@example.com','Замовлення термінове',2,'15','Катерина Бондар, +380671234000','2026-03-01 15:57:39','2026-03-01 15:57:39'),
(9,'Samsung 970 EVO Plus 500GB','vitaliy.gr@example.com','Оплата при отриманні',1,'18','Віталій Гринчук, +380931234222','2026-03-01 15:57:39','2026-03-01 15:57:39'),
(10,'JBL Charge 5','yulia.krav@example.com','Хочу отримати сьогодні',1,'20','Юлія Кравець, +380991234777','2026-03-01 15:57:39','2026-03-01 15:57:39');
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `price` decimal(10,2) NOT NULL DEFAULT 0.00,
  `quantity` int(11) NOT NULL DEFAULT 0,
  `description` text DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES
(1,'Lenovo ThinkPad X1 Carbon',1299.99,12,'Ультрабук бізнес-класу з високою продуктивністю','2026-03-01 15:32:40','2026-03-01 15:32:40'),
(2,'Apple iPhone 15 Pro',1199.00,8,'Флагманський смартфон Apple з камерою Pro','2026-03-01 15:32:40','2026-03-01 15:32:40'),
(3,'Samsung Galaxy S24',999.50,15,'Новий смартфон Samsung з AMOLED дисплеєм','2026-03-01 15:32:40','2026-03-01 15:32:40'),
(4,'Xiaomi Redmi Note 13',249.99,30,'Бюджетний смартфон з великою батареєю','2026-03-01 15:32:40','2026-03-01 15:32:40'),
(5,'Sony WH-1000XM5',349.00,20,'Преміальні навушники з шумозаглушенням','2026-03-01 15:32:40','2026-03-01 15:32:40'),
(6,'Logitech MX Master 3S',129.99,25,'Професійна бездротова миша','2026-03-01 15:32:40','2026-03-01 15:32:40'),
(7,'Dell UltraSharp 27\"',499.00,10,'Професійний монітор для роботи з графікою','2026-03-01 15:32:40','2026-03-01 15:32:40'),
(8,'HP LaserJet Pro M404dn',299.00,7,'Лазерний принтер для офісу','2026-03-01 15:32:40','2026-03-01 15:32:40'),
(9,'Apple MacBook Air M2',1099.00,5,'Легкий ноутбук на процесорі Apple M2','2026-03-01 15:32:40','2026-03-01 15:32:40'),
(10,'Asus ROG Strix G16',1599.00,4,'Ігровий ноутбук з RTX відеокартою','2026-03-01 15:32:40','2026-03-01 15:32:40'),
(11,'Kingston SSD NV2 1TB',69.99,40,'Швидкий NVMe SSD накопичувач','2026-03-01 15:32:40','2026-03-01 15:32:40'),
(12,'Seagate Barracuda 2TB',59.99,35,'Жорсткий диск для ПК','2026-03-01 15:32:40','2026-03-01 15:32:40'),
(13,'TP-Link Archer AX55',129.00,18,'Wi-Fi 6 маршрутизатор','2026-03-01 15:32:40','2026-03-01 15:32:40'),
(14,'Xiaomi Robot Vacuum S10',299.99,12,'Робот-пилосос з лазерною навігацією','2026-03-01 15:32:40','2026-03-01 15:32:40'),
(15,'Philips AirFryer XXL',199.00,9,'Фритюрниця з технологією Rapid Air','2026-03-01 15:32:40','2026-03-01 15:32:40'),
(16,'Bosch Professional Drill GSB 13',89.99,22,'Професійний дриль для дому та роботи','2026-03-01 15:32:40','2026-03-01 15:32:40'),
(17,'Makita Cordless Screwdriver',149.00,14,'Акумуляторний шуруповерт Makita','2026-03-01 15:32:40','2026-03-01 15:32:40'),
(18,'Samsung 970 EVO Plus 500GB',79.99,28,'NVMe SSD високої швидкості','2026-03-01 15:32:40','2026-03-01 15:32:40'),
(19,'LG OLED55C3',1399.00,3,'55-дюймовий OLED телевізор','2026-03-01 15:32:40','2026-03-01 15:32:40'),
(20,'JBL Charge 5',149.99,26,'Портативна Bluetooth колонка','2026-03-01 15:32:40','2026-03-01 15:32:40');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `role` varchar(50) DEFAULT 'user',
  `createdAt` timestamp NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES
(1,'Serhii Ivanov','serhii@example.com','pass123','Перший користувач','user','2026-03-01 09:54:47','2026-03-01 09:54:47'),
(2,'Olena Petrenko','olena@example.com','pass123','Другий користувач','user','2026-03-01 09:54:47','2026-03-01 09:54:47');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-03-01 20:51:59

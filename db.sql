-- phpMyAdmin SQL Dump
-- version 4.7.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Nov 29, 2017 at 11:15 PM
-- Server version: 5.6.35
-- PHP Version: 7.1.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `messotopia`
--

-- --------------------------------------------------------

--
-- Table structure for table `adminLogin`
--

CREATE TABLE `adminLogin` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `level` int(11) NOT NULL DEFAULT '0',
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `adminLogin`
--

INSERT INTO `adminLogin` (`id`, `email`, `password`, `level`, `name`) VALUES
(2, 'bchhabra@gmail.com', '$2a$10$tuKEgJPCr7G5ELfps6H9l.dXqU/kcge56PQK9qwhbL2QuGfFeWahK', 1, 'admin');

-- --------------------------------------------------------

--
-- Table structure for table `latestmeal`
--

CREATE TABLE `latestmeal` (
  `sr` int(11) NOT NULL,
  `id` int(11) NOT NULL,
  `date` date NOT NULL,
  `hostel` varchar(255) NOT NULL,
  `meal` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `latestmeal`
--

INSERT INTO `latestmeal` (`sr`, `id`, `date`, `hostel`, `meal`) VALUES
(8, 12, '2017-11-30', 'M', 'Lunch');

-- --------------------------------------------------------

--
-- Table structure for table `mess_menu`
--

CREATE TABLE `mess_menu` (
  `hostel` varchar(255) NOT NULL,
  `day` varchar(255) NOT NULL,
  `lunch` varchar(255) NOT NULL,
  `breakfast` varchar(255) NOT NULL,
  `dinner` varchar(255) NOT NULL,
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `mess_menu`
--

INSERT INTO `mess_menu` (`hostel`, `day`, `lunch`, `breakfast`, `dinner`, `id`) VALUES
('M', 'Monday', 'Kulche Chole, Curd, Lemon Water', 'Aloo Paranthe, Milk, Tea, Eggs, Omelette', 'Moong Dal, Panner', 1);

-- --------------------------------------------------------

--
-- Table structure for table `stDetails`
--

CREATE TABLE `stDetails` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `rollNo` varchar(255) NOT NULL,
  `leaveCount` int(11) NOT NULL,
  `dates` varchar(255) NOT NULL,
  `totalMeals` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `isPaid` tinyint(1) NOT NULL DEFAULT '0',
  `hostelName` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `stDetails`
--

INSERT INTO `stDetails` (`id`, `name`, `rollNo`, `leaveCount`, `dates`, `totalMeals`, `email`, `phone`, `isPaid`, `hostelName`) VALUES
(10, 'Bharat Chhabra', '101412012', 0, '', 0, 'bchhabra2490@gmail.com', '9780443873', 0, 'M'),
(11, 'Dikshit Kalra', '101412014', 0, '', 0, 'kalradikshit@gmail.com', '9780443873', 0, 'M'),
(12, 'Chirag Shahi', '101412013', 0, '', 0, 'cshahi@gmail.com', '9999212290', 0, 'M'),
(13, 'Gursimran Singh', '101412016', 0, '', 0, 'gursimran@gmail.com', '9999212290', 0, 'M');

-- --------------------------------------------------------

--
-- Table structure for table `stLogin`
--

CREATE TABLE `stLogin` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `level` int(11) NOT NULL DEFAULT '0',
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `stLogin`
--

INSERT INTO `stLogin` (`id`, `email`, `password`, `level`, `name`) VALUES
(10, 'bchhabra2490@gmail.com', '$2a$10$JhewQyYxjRnz..ph/pWyiuZ5OKhVfEnKwwdk8Wp0IM7gjLAqIg7k2', 0, 'Bharat Chhabra'),
(11, 'kalradikshit@gmail.com', '$2a$10$hXKyRgpmqqr2xEzLy4gTRe3K3OADReK7sO4EeAQoE/3zvIbGcAwBm', 0, 'Dikshit Kalra'),
(12, 'cshahi@gmail.com', '$2a$10$J.LQlHe26bn2tfohh8dnw.xPPKmdIUx2Wm7zZDHyDFLoVcirP5C/e', 0, 'Chirag Shahi'),
(13, 'gursimran@gmail.com', '$2a$10$Htbo1swRCBG/mqokv5neYuUtUFnxl9eBE2rDhjdun6p0u/KB/DM1O', 0, 'Gursimran Singh');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `adminLogin`
--
ALTER TABLE `adminLogin`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `latestmeal`
--
ALTER TABLE `latestmeal`
  ADD PRIMARY KEY (`sr`),
  ADD UNIQUE KEY `id` (`id`,`meal`);

--
-- Indexes for table `mess_menu`
--
ALTER TABLE `mess_menu`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `stDetails`
--
ALTER TABLE `stDetails`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `stLogin`
--
ALTER TABLE `stLogin`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `adminLogin`
--
ALTER TABLE `adminLogin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `latestmeal`
--
ALTER TABLE `latestmeal`
  MODIFY `sr` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT for table `mess_menu`
--
ALTER TABLE `mess_menu`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `stDetails`
--
ALTER TABLE `stDetails`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
--
-- AUTO_INCREMENT for table `stLogin`
--
ALTER TABLE `stLogin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `stLogin`
--
ALTER TABLE `stLogin`
  ADD CONSTRAINT `studentID` FOREIGN KEY (`id`) REFERENCES `stDetails` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

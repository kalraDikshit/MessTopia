-- phpMyAdmin SQL Dump
-- version 4.7.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Nov 29, 2017 at 08:58 AM
-- Server version: 5.6.35
-- PHP Version: 7.1.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `TEST_DB`
--

-- --------------------------------------------------------

--
-- Table structure for table `company_prof`
--

CREATE TABLE `company_prof` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `company_prof`
--

INSERT INTO `company_prof` (`id`, `name`) VALUES
(1, 'A'),
(2, 'B');

-- --------------------------------------------------------

--
-- Table structure for table `product_prof`
--

CREATE TABLE `product_prof` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `company_name` varchar(255) NOT NULL,
  `rating` float NOT NULL,
  `images` varchar(1024) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `product_prof`
--

INSERT INTO `product_prof` (`id`, `name`, `company_name`, `rating`, `images`) VALUES
(1, 'productAA', 'A', 4.3, 'image1.png,image2.png'),
(2, 'productAB', 'A', 5, 'image3.png,image4.png'),
(3, 'productBA', 'B', 4.7, 'image1.png,image2.png'),
(4, 'productBB', 'B', 5, 'image3.png,image4.png');

-- --------------------------------------------------------

--
-- Table structure for table `review_prof`
--

CREATE TABLE `review_prof` (
  `id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `review` text NOT NULL,
  `rating` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `review_prof`
--

INSERT INTO `review_prof` (`id`, `product_id`, `review`, `rating`) VALUES
(1, 1, 'Great product', 4),
(2, 2, 'Good', 4.3),
(3, 3, 'Awesome', 4.5),
(4, 4, 'Needs Improvement', 3),
(5, 0, 'undefined', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `company_prof`
--
ALTER TABLE `company_prof`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product_prof`
--
ALTER TABLE `product_prof`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `review_prof`
--
ALTER TABLE `review_prof`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `company_prof`
--
ALTER TABLE `company_prof`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `product_prof`
--
ALTER TABLE `product_prof`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `review_prof`
--
ALTER TABLE `review_prof`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
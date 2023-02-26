-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 26, 2023 at 11:02 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 7.3.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `employee`
--

-- --------------------------------------------------------

--
-- Table structure for table `employe_members`
--

CREATE TABLE `employe_members` (
  `employe_id` int(11) NOT NULL,
  `employe_firstname` varchar(50) NOT NULL,
  `employe_lastname` varchar(50) NOT NULL,
  `employe_email` varchar(255) NOT NULL,
  `employe_address` text NOT NULL,
  `employe_phone` varchar(20) NOT NULL,
  `employe_created_date` datetime DEFAULT NULL,
  `employe_updated_date` datetime DEFAULT NULL,
  `employe_deleted` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `employe_members`
--

INSERT INTO `employe_members` (`employe_id`, `employe_firstname`, `employe_lastname`, `employe_email`, `employe_address`, `employe_phone`, `employe_created_date`, `employe_updated_date`, `employe_deleted`) VALUES
(1, 'zakaria', 'aadel', 'zakaria@gmail.com', 'test', '061283782', '2023-02-26 01:00:00', '0000-00-00 00:00:00', 0),
(2, 'Simo', 'test', 'test@gmail.com', 'test', '88888', '2023-02-26 01:00:00', '0000-00-00 00:00:00', 0),
(3, 'meryem', 'aadel', 'zaki@gmail.com', 'hashjas', '0806666612', NULL, NULL, 0),
(4, 'hassan', 'qorchi', 'zaki@gmail.com', 'hashjas', '0806666612', NULL, NULL, 0),
(5, 'test', 'qorchi', 'zaki@gmail.com', 'hashjas', '0806666612', NULL, NULL, 0),
(6, 'zaz', 'qorchi', 'zaki@gmail.com', 'hashjas', '0806666612', NULL, NULL, 0),
(7, 'zaz', 'qorchi', 'zaki@gmail.com', 'hashjas', '0806666612', NULL, NULL, 0),
(8, 'zazaa', 'qorchi', 'zaki@gmail.com', 'hashjas', '0806666612', NULL, NULL, 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `employe_members`
--
ALTER TABLE `employe_members`
  ADD PRIMARY KEY (`employe_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `employe_members`
--
ALTER TABLE `employe_members`
  MODIFY `employe_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

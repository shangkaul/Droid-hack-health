-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 12, 2017 at 05:43 AM
-- Server version: 10.1.21-MariaDB
-- PHP Version: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sanjeevani`
--

-- --------------------------------------------------------

--
-- Table structure for table `article`
--

CREATE TABLE `article` (
  `id` int(3) NOT NULL,
  `heading` varchar(40) NOT NULL,
  `details` varchar(800) NOT NULL,
  `contact` mediumint(12) NOT NULL,
  `address` longtext NOT NULL,
  `aadhar` varchar(2000) NOT NULL,
  `email` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `article`
--

INSERT INTO `article` (`id`, `heading`, `details`, `contact`, `address`, `aadhar`, `email`) VALUES
(6, 'mn lm ', '	jljmjl', 0, '', '', ''),
(7, 'yash', 'yahs', 0, '', '', ''),
(8, 'helllooo', 'byebeeb', 0, '', '', ''),
(9, 'ok ', 'bye bey', 0, '', '', ''),
(10, 'Yash', 'AGGG', 0, '', '', ''),
(11, 'hello', 'bye', 0, '', '', ''),
(12, 'undefined', 'undefined', 0, '', '', ''),
(13, 'dbdb', 'b cgv ', 0, '', '', ''),
(14, 'ibusvbouvb', '', 0, '', '', ''),
(15, '', '', 0, '', '', ''),
(16, 'helloooo', 'yashy8080', 0, '', '', ''),
(17, 'Vikhyat Tiwari', '', 0, '', '', ''),
(18, 'Yash Aggarwal', '', 0, '', '', ''),
(19, 'Yash Aggarwal', '', 0, '', '', ''),
(20, 'Yash Aggarwal', '', 0, '', '', ''),
(21, 'Yash Aggarwal', '', 0, '', '', ''),
(22, 'Yash Aggarwal', '', 0, '', '', ''),
(23, 'Yash Aggarwal', '', 0, '', '', ''),
(24, 'Yash Aggarwal', '', 0, '', '', ''),
(25, '', '', 0, '', '', ''),
(26, 'Yash Aggarwal', '0wZ0RVHlrBcQ6Ee1rKHDsh0WqBO2', 0, '', '', ''),
(27, 'Yash Aggarwal', '0wZ0RVHlrBcQ6Ee1rKHDsh0WqBO2', 88797, 'bhkbjblj', 'ljnjniooubuih h', 'bibihbivyiy'),
(28, 'Yash Aggarwal', '0wZ0RVHlrBcQ6Ee1rKHDsh0WqBO2', 8388607, 'fbgldbnipn', 'ip', 'bpp'),
(29, 'Yash Aggarwal', '0wZ0RVHlrBcQ6Ee1rKHDsh0WqBO2', 8388607, 'fbgldbnipn', 'ip', 'bpp'),
(30, 'Yash Aggarwal', '0wZ0RVHlrBcQ6Ee1rKHDsh0WqBO2', 999292, 'undefined', 'undefined', 'undefined'),
(31, 'Yash Aggarwal', '0wZ0RVHlrBcQ6Ee1rKHDsh0WqBO2', 2345645, 'undefined', 'undefined', 'undefined'),
(32, 'Yash Aggarwal', '0wZ0RVHlrBcQ6Ee1rKHDsh0WqBO2', 8388607, ' dkfvbdbi', 'bihbhibhi', 'bihbib'),
(33, 'Yash Aggarwal', '0wZ0RVHlrBcQ6Ee1rKHDsh0WqBO2', 8388607, 'bububugbu', 'gbugb', 'ububhbuh'),
(34, 'Yash Aggarwal', '0wZ0RVHlrBcQ6Ee1rKHDsh0WqBO2', 0, 'iviviyviv', 'iyviyviyviy', 'viyvivyiv'),
(35, 'Yash Aggarwal', '0wZ0RVHlrBcQ6Ee1rKHDsh0WqBO2', 8388607, 'f;vknbkrngps', 'pbjbpjbp', 'pbjpbjp'),
(36, 'Yash Aggarwal', '0wZ0RVHlrBcQ6Ee1rKHDsh0WqBO2', 8388607, 'vgjbhknjmlk,;l;;kmjnkhbjgv', 'mkmkljnkhbjgvhfhvgjbhknjlmk;', 'l,mknjbhgvjbhknjlmk;,l'),
(37, 'shisidj', '0wZ0RVHlrBcQ6Ee1rKHDsh0WqBO2', 8388607, 'undefined', 'undefined', 'undefined'),
(38, 'Yash Aggarwal', '0wZ0RVHlrBcQ6Ee1rKHDsh0WqBO2', 23, 'undefined', 'undefined', 'undefined'),
(39, 'Yash Aggarwal', '0wZ0RVHlrBcQ6Ee1rKHDsh0WqBO2', 8388607, 'undefined', 'undefined', 'undefined'),
(40, 'Yash Aggarwal', '0wZ0RVHlrBcQ6Ee1rKHDsh0WqBO2', 67876, 'undefined', 'undefined', 'undefined'),
(41, 'Yash Aggarwal', '0wZ0RVHlrBcQ6Ee1rKHDsh0WqBO2', 1234, 'dewlbl`vl`v', 'lvlvl', 'vljbb;'),
(42, 'Yash Aggarwal', '0wZ0RVHlrBcQ6Ee1rKHDsh0WqBO2', 1234, 'undefined', 'undefined', 'undefined'),
(43, 'Yash Aggarwal', '0wZ0RVHlrBcQ6Ee1rKHDsh0WqBO2', 4567, 'undefined', 'undefined', 'undefined'),
(44, 'Yash Aggarwal', '0wZ0RVHlrBcQ6Ee1rKHDsh0WqBO2', 1234, 'undefined', 'undefined', 'undefined'),
(45, 'Yash Aggarwal', '0wZ0RVHlrBcQ6Ee1rKHDsh0WqBO2', 234234, 'undefined', 'undefined', 'undefined'),
(46, 'undefined', 'undefined', 1212324, 'undefined', 'undefined', 'undefined'),
(47, 'Yash Aggarwal', '0wZ0RVHlrBcQ6Ee1rKHDsh0WqBO2', 12234, 'undefined', 'undefined', 'undefined'),
(48, 'Yash Aggarwal', '0wZ0RVHlrBcQ6Ee1rKHDsh0WqBO2', 1234, 'undefined', 'undefined', 'undefined'),
(49, 'Yash Aggarwal', '0wZ0RVHlrBcQ6Ee1rKHDsh0WqBO2', 0, 'undefined', 'undefined', 'undefined'),
(50, 'Yash Aggarwal', '0wZ0RVHlrBcQ6Ee1rKHDsh0WqBO2', 0, 'undefined', 'undefined', 'undefined'),
(51, 'Yash Aggarwal', '0wZ0RVHlrBcQ6Ee1rKHDsh0WqBO2', 8388607, '098978798', '0897878908978', '78908978'),
(52, 'Yash Aggarwal', '0wZ0RVHlrBcQ6Ee1rKHDsh0WqBO2', 35432, '35421543323', '21344543', '34254354'),
(53, 'Yash Aggarwal', '0wZ0RVHlrBcQ6Ee1rKHDsh0WqBO2', 0, 'undefined', 'undefined', 'undefined'),
(54, 'Yash Aggarwal', '0wZ0RVHlrBcQ6Ee1rKHDsh0WqBO2', 1234, 'czx', 'zxc', 'czx'),
(55, 'Yash Aggarwal', '0wZ0RVHlrBcQ6Ee1rKHDsh0WqBO2', 1, '1', '1', '1'),
(56, 'Yash Aggarwal', '0wZ0RVHlrBcQ6Ee1rKHDsh0WqBO2', 12343, '213', '1324', '21324'),
(57, 'Yash Aggarwal', '0wZ0RVHlrBcQ6Ee1rKHDsh0WqBO2', 0, 'dws', 'dw', 'wd'),
(58, 'Yash Aggarwal', '0wZ0RVHlrBcQ6Ee1rKHDsh0WqBO2', 0, 'ew', 'we', 'ew');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `article`
--
ALTER TABLE `article`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `article`
--
ALTER TABLE `article`
  MODIFY `id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=59;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

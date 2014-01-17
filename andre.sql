-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jan 17, 2014 at 09:46 AM
-- Server version: 5.5.24-log
-- PHP Version: 5.3.13

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `andre`
--

-- --------------------------------------------------------

--
-- Table structure for table `tants`
--

CREATE TABLE IF NOT EXISTS `tants` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `koht` varchar(20) NOT NULL,
  `punktid` float NOT NULL,
  `punktid2t` float NOT NULL,
  `final` float NOT NULL,
  `koma` float NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `koht` (`koht`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=18 ;

--
-- Dumping data for table `tants`
--

INSERT INTO `tants` (`id`, `koht`, `punktid`, `punktid2t`, `final`, `koma`) VALUES
(1, 'Viljandimaa', 0, 0, 6.0001, 0.0001),
(2, 'Harjumaa', 0, 0, 16.0021, 0.00212),
(3, 'Laanemaa', 0, 0, 16.012, 0.01202),
(4, 'Raplamaa', 39, 33, 11, 0.00002),
(5, 'Vorumaa', 13, 20, 3, 0),
(6, 'Parnumaa', 57.0003, 82.0131, 19.0134, 0.01341),
(7, 'Jarvamaa', 23.001, 50.01, 10.011, 0.01101),
(8, 'Hiiumaa', 48.001, 21.001, 11.002, 0.00201),
(9, 'Tartumaa', 37, 53.0001, 13.0001, 0.00011),
(10, 'Valgamaa', 30.0001, 9, 5.0001, 0.0001),
(11, 'Polvamaa', 96.0311, 119.042, 25.0734, 0.07344),
(12, 'Ida-Virumaa', 105.014, 112.035, 25.0493, 0.04934),
(13, 'Tartu Linn', 114.032, 95.0216, 25.0532, 0.05315),
(14, 'Tallinn', 132.073, 88.0212, 25.0942, 0.09425),
(15, 'Jogevamaa', -1, -1, 0, 0),
(16, 'Saaremaa', -1, -2, -2, 0),
(17, 'Laane-Virumaa', -1, -3, -4, 0);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

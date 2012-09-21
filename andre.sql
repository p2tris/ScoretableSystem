-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Loomise aeg: Sept 21, 2012 kell 11:51 AM
-- Serveri versioon: 5.5.24-log
-- PHP versioon: 5.3.13

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Andmebaas: `andre`
--

-- --------------------------------------------------------

--
-- Tabeli struktuur tabelile `tants`
--

CREATE TABLE IF NOT EXISTS `tants` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `koht` varchar(20) NOT NULL,
  `punktid` int(2) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `koht` (`koht`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=18 ;

--
-- Andmete tõmmistamine tabelile `tants`
--

INSERT INTO `tants` (`id`, `koht`, `punktid`) VALUES
(1, 'Harjumaa', 1),
(2, 'Hiiumaa', 11),
(3, 'Ida-Virumaa', 10),
(4, 'Jarvamaa', 38),
(5, 'Jogevamaa', 2),
(6, 'Laane-Virumaa', 6),
(7, 'Laanemaa', 132),
(8, 'Parnumaa', 17),
(9, 'Polvamaa', 9),
(10, 'Raplamaa', 1),
(11, 'Saaremaa', 0),
(12, 'Tallinn', 7),
(13, 'Tartu Linn', 3),
(14, 'Tartumaa', 0),
(15, 'Valgamaa', 4),
(16, 'Viljandimaa', 0),
(17, 'Vorumaa', 24);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

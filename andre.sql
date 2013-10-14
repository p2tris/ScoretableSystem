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

INSERT INTO `tants` (`id`, `koht`, `punktid`,`punktid2t`) VALUES
(1, 'Harjumaa', 0, 0),
(2, 'Hiiumaa', 0, 0),
(3, 'Ida-Virumaa', 0, 0),
(4, 'Jarvamaa', 0, 0),
(5, 'Jogevamaa', 0, 0),
(6, 'Laane-Virumaa', 0, 0),
(7, 'Laanemaa', 0, 0),
(8, 'Parnumaa', 0, 0),
(9, 'Polvamaa', 0, 0),
(10, 'Raplamaa', 0, 0),
(11, 'Saaremaa', 0, 0),
(12, 'Tallinn', 0, 0),
(13, 'Tartu Linn', 0, 0),
(14, 'Tartumaa', 0, 0),
(15, 'Valgamaa', 0, 0),
(16, 'Viljandimaa', 0, 0),
(17, 'Vorumaa', 0, 0);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

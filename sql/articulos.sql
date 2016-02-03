-- phpMyAdmin SQL Dump
-- version 4.0.10.12
-- http://www.phpmyadmin.net
--
-- Servidor: 127.12.128.2:3306
-- Tiempo de generación: 20-01-2016 a las 17:09:53
-- Versión del servidor: 5.5.45
-- Versión de PHP: 5.3.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `goserver`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `articulos`
--

CREATE TABLE IF NOT EXISTS `articulos` (
  `idarticulo` int(11) NOT NULL AUTO_INCREMENT,
  `categoria` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `titulo` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `precio` int(11) NOT NULL,
  `stock` int(11) NOT NULL,
  `imagen` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `descripcion` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  PRIMARY KEY (`idarticulo`),
  KEY `categoria` (`categoria`),
  KEY `categoria_2` (`categoria`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci AUTO_INCREMENT=32 ;

--
-- Volcado de datos para la tabla `articulos`
--

INSERT INTO `articulos` (`idarticulo`, `categoria`, `titulo`, `precio`, `stock`, `imagen`, `descripcion`) VALUES
(1, 'Gaming', 'Servidor CSGO 15 Slots', 15, 1, 'csgo.png', 'servidor dedicado del csgo con 15 slots, activacion instantanea y disponibilidad 24/7'),
(2, 'Dedicados', 'Dedicado DualCore 1 TB', 15, 1, 'servidordedicado.jpg', 'CPU: 2.4Ghz Dualcore, RAM: 16GB, Disco Duro: 1TB HDD, Bandwidth: 15TB'),
(3, 'Dedicados', 'Dedicado QuadCore 1 TB', 20, 1, 'servidordedicado.jpg', 'CPU: 3.4Ghz Quadcore, RAM:	16GB, Disco Duro:	1TB HDD, Bandwidth: 15TB	'),
(4, 'Hosting', 'Hosting 1000 MB', 7, 1, 'hosting.jpg', 'Espacio en disco: 1000 MB, trafico de datos: 100 GB, numero de sitios 2, Dominio gratis .es, instalador automatico 50 Scripts'),
(6, 'Gaming', 'Servidor ARK 20 Slots', 12, 1, 'ark.png', 'servidor dedicado del ARK con 20 slots, activacion instantanea y disponibilidad 24/7'),
(7, 'Almacenamiento', '50 GB de Almacenamiento', 4, 1, 'almacenamiento.jpg', '50 GB de almacenamiento en la nube'),
(8, 'Gaming', 'Servidor RUST 18 Slots', 18, 1, 'rust.png', 'servidor dedicado del rust con 18 slots, activacion instantanea y disponibilidad 24/7'),
(9, 'Gaming', 'Servidor 7 die to die 10 Slots', 8, 1, '7die.png', 'servidor dedicado del 7 die to die con 18 slots, activacion instantanea y disponibilidad 24/7'),
(10, 'Gaming', 'Servidor battlefield 4 25 Slots', 17, 1, 'btf4.png', 'servidor dedicado del battlefield 4 con 25 slots, activacion instantanea y disponibilidad 24/7'),
(11, 'Gaming', 'Servidor battlefield hardline 25 Slots', 20, 1, 'bfh.png', 'servidor dedicado del battlefield hardline con 25 slots, activacion instantanea y disponibilidad 24/7'),
(12, 'Voz', 'TeamSpeak 3 15 Slots', 8, 1, 'ts3.jpg', 'servidor de TeamSpeak3 de 15 slot,activacion instantanea y disponibilidad 24/7'),
(13, 'Voz', 'TeamSpeak 3 20 Slots', 12, 1, 'ts3.jpg', 'servidor de TeamSpeak3 de 20 slot,activacion instantanea y disponibilidad 24/7'),
(14, 'Voz', 'TeamSpeak 3 25 Slots', 15, 1, 'ts3.jpg', 'servidor de TeamSpeak3 de 25 slot,activacion instantanea y disponibilidad 24/7'),
(15, 'Voz', 'TeamSpeak 3 30 Slots', 23, 1, 'ts3.jpg', 'servidor de TeamSpeak3 de 30 slot,activacion instantanea y disponibilidad 24/7'),
(16, 'Voz', 'Ventrilo 10 Slots', 5, 1, 'ventrilo.png', 'servidor ventrilo de 10 slot,activacion instantanea y disponibilidad 24/7'),
(17, 'Voz', 'Ventrilo 20 Slots', 10, 1, 'ventrilo.png', 'servidor ventrilo de 20 slot,activacion instantanea y disponibilidad 24/7'),
(18, 'Hosting', 'Hosting 2000 MB', 15, 1, 'hosting.jpg', 'Espacio en disco: 2000 MB, trafico de datos: 100 GB, numero de sitios 2, Dominio gratis .es, instalador automatico 50 Scripts'),
(19, 'Hosting', 'Hosting 5000 MB', 20, 1, 'hosting.jpg', 'Espacio en disco: 5000 MB, trafico de datos: 200 GB, numero de sitios 3, 2 Dominio gratis .es, instalador automatico 50 Scripts'),
(20, 'Hosting', 'Hosting 10000 MB', 30, 1, 'hosting.jpg', 'Espacio en disco: 10000 MB, trafico de datos: 300 GB, numero de sitios 5, 3 Dominio gratis .es, instalador automatico 50 Scripts'),
(21, 'Hosting', 'Hosting 20000 MB', 40, 1, 'hosting.jpg', 'Espacio en disco: 20000 MB, trafico de datos: 400 GB, numero de sitios 8,  4 Dominio gratis .es, instalador automatico 50 Scripts'),
(22, 'Hosting', 'Hosting 500000 MB', 50, 1, 'hosting.jpg', 'Espacio en disco: 500000 MB, trafico de datos: 500 GB, numero de sitios 10, 5 Dominio gratis .es, instalador automatico 50 Scripts'),
(23, 'Almacenamiento', '100 GB de Almacenamiento', 8, 1, 'almacenamiento.jpg', '100 GB de almacenamiento en la nube'),
(24, 'Almacenamiento', '200 GB de almacenamiento', 16, 1, 'almacenamiento.jpg', '200 GB de almacenamiento en la nube'),
(25, 'Almacenamiento', '300 GB de almacenamiento', 24, 1, 'almacenamiento.jpg', '300 GB de almacenamiento en la nube'),
(26, 'Almacenamiento', '400 GB de almacenamiento', 32, 1, 'almacenamiento.jpg', '400 GB de almacenamiento en la nube'),
(27, 'Almacenamiento', '1000 GB de almacenamiento', 60, 1, 'almacenamiento.jpg', '1000 GB de almacenamiento en la nube'),
(28, 'Dedicados', 'Dedicado DualCore 2 TB', 25, 1, 'servidordedicado.jpg', 'CPU: 3.4Ghz Dualcore, RAM: 16GB, Disco Duro: 2TB HDD, Bandwidth: 15TB'),
(29, 'Dedicados', 'Dedicado QuadCore 4 TB', 35, 1, 'servidordedicado.jpg', 'CPU: 3.4Ghz Quadcore, RAM: 32GB, Disco Duro: 4TB HDD, Bandwidth: 20TB'),
(30, 'Dedicados', 'Dedicado OctaCore 4 TB', 65, 1, 'servidordedicado.jpg', 'CPU: 4Ghz Octacore, RAM: 32GB, Disco Duro: 4TB HDD, Bandwidth: 25TB'),
(31, 'Dedicados', 'Dedicado OctaCore 6 TB', 95, 1, 'servidordedicado.jpg', 'CPU: 5Ghz Octacore, RAM: 64GB, Disco Duro: 6TB HDD, Bandwidth: 30TB');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `articulosdestacados`
--

CREATE TABLE IF NOT EXISTS `articulosdestacados` (
  `idarticulo` int(11) NOT NULL AUTO_INCREMENT,
  `categoria` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `titulo` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `precio` int(11) NOT NULL,
  `stock` int(11) NOT NULL,
  `imagen` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `descripcion` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  PRIMARY KEY (`idarticulo`),
  KEY `categoria` (`categoria`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci AUTO_INCREMENT=13 ;

--
-- Volcado de datos para la tabla `articulosdestacados`
--

INSERT INTO `articulosdestacados` (`idarticulo`, `categoria`, `titulo`, `precio`, `stock`, `imagen`, `descripcion`) VALUES
(1, 'Gaming', 'Servidor CSGO 15 Slots', 15, 1, 'csgo.png', 'servidor dedicado del csgo con 15 slots, activacion instantanea y disponibilidad 24/7'),
(3, 'Dedicados', 'Dedicado QuadCore 1 TB', 20, 1, 'servidordedicado.jpg', 'CPU: 3.4Ghz Quadcore, RAM: 16GB, Disco Duro: 1TB HDD, Bandwidth: 15TB'),
(4, 'Hosting', 'Hosting 2000 MB', 15, 1, 'hosting.jpg', 'Espacio en disco: 2000 MB, trafico de datos: 100 GB, numero de sitios 2, Dominio gratis .es, instalador automatico 50 Scripts'),
(6, 'Gaming', 'Servidor ARK 20 Slots', 12, 1, 'ark.png', 'servidor dedicado del ARK con 20 slots, activacion instantanea y disponibilidad 24/7'),
(7, 'Almacenamiento', '100 GB de Almacenamiento', 8, 1, 'almacenamiento.jpg', '100 GB de almacenamiento en la nube'),
(12, 'Voz', 'TeamSpeak 3 15 Slots', 8, 1, 'ts3.jpg', 'servidor de TeamSpeak3 de 15 slot,activacio\nn instantanea y disponibilidad 24/7');

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `articulos`
--
ALTER TABLE `articulos`
  ADD CONSTRAINT `articulos_ibfk_1` FOREIGN KEY (`categoria`) REFERENCES `categorias` (`nombre`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `articulosdestacados`
--
ALTER TABLE `articulosdestacados`
  ADD CONSTRAINT `articulosdestacados_ibfk_1` FOREIGN KEY (`categoria`) REFERENCES `categorias` (`nombre`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

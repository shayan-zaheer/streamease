const { DataTypes } = require("sequelize");
const sequelize = require("../database/connection");

const Video = sequelize.define("Video", {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
	title: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	link: {
		type: DataTypes.STRING,
		allowNull: false,
	},
    thumbnail: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Video;

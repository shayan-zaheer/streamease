const { DataTypes } = require("sequelize");
const sequelize = require("../database/connection");
const validator = require("validator");

const User = sequelize.define("User", {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        validate: [validator.isEmail, "Please enter a valid email!"],
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,

    },
    confirmPassword: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            validator: function(val){
                return val == this.password;
            },
            message: "Password & confirm password does not match!"
        }
    },
    passwordChangedAt: {
        type: DataTypes.DATE,
    },
});

module.exports = User;

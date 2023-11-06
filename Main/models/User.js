const { Model, DataTypes } = require('sequelize');
const bcrypt = requires('bcrypt');
const sequelize = require('../config/config');

// create our User model
class User extends Model {

    // set up method to run on instance data (per user) to check password
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
}
}

User.init(
    {
        id: {
            type: DataTpes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        usernameL {
            type: DataTypes. STRING,
            allowNull: false
        },
        passwork: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [4]
            }

        }
     },
     {
        hooks: {
            // set up beforeCreate lifecycle "hook" functionality
            beforeCreate: async (newUserData) => {
                newUserData.password = await bcrypt.hash(newUserData.password, 10);
                return newUserData;
            },
            beforeUpdate: async (updateUserData) => {
                updateUserData.password = await bcrypt.hash(updatedUserData.password, 10);
                return updatedUserData;
            }
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'User'
     }
);

module.exports = User; 
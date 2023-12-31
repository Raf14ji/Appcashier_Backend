import db from "../database/index.js";

export const User = db.sequelize.define("users", {
    userId: {
        type: db.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    uuid: {
        type: db.Sequelize.UUID,
        defaultValue: db.Sequelize.UUIDV4,
        allowNull: false
    },
    role : {
        type : db.Sequelize.INTEGER,
        allowNull : false,
        defaultValue : 0
    },
    username: {
        type: db.Sequelize.STRING(45),
        allowNull: false
    },
    password: {
        type: db.Sequelize.STRING(125),
        allowNull : false
    },
    email: {
        type : db.Sequelize.STRING(45),
        allowNull : false
    },
    profileImg : {
        type : db.Sequelize.STRING(255),
        allowNull : true
    },
    isDisable : {
        type : db.Sequelize.BOOLEAN,
        allowNull : false,
        defaultValue : 0
    },
    otp : {
        type : db.Sequelize.STRING(45),
        allowNull : true,
    },
    expiredOtp : {
        type : db.Sequelize.TIME,
        allowNull : true,
    },
},
{ timestamps: false }
)
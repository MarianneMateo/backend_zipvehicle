import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Users from "./UserModel.js";
import Vehicles from "./VehicleModel.js";

const {DataTypes} = Sequelize;

const Bookings = db.define('bookings',{
    uuid:{
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    startDate:{
        type: DataTypes.DATEONLY,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    endDate:{
        type: DataTypes.DATEONLY,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    userId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    vehicleId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    }
},{
    freezeTableName: true
});

Users.hasMany(Bookings);
/* Bookings.hasMany(Vehicles); */
Bookings.belongsTo(Users, {foreignKey: 'userId'});
Bookings.belongsTo(Vehicles, {foreignKey: 'vehicleId'});

export default Bookings;
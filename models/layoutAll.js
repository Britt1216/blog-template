const db = require(".");

module.exports = function(sequelize, DataTypes) {
  var LayoutAllPost = sequelize.define("LayoutAllPost", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 160]
      }
    },
    header1: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            len: [1]
        }
    },
    header2: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            len: [1]
        },
    },
    text1: {
        type: DataTypes.TEXT,
        allowNull: true,
        validate: {
            len: [1]
        }
    },
    text2: {
        type: DataTypes.TEXT,
        allowNull: true,
        validate: {
            len: [1]
        }
    },
    text3: {
        type: DataTypes.TEXT,
        allowNull: true,
        validate: {
            len: [1]
        }
    },
    img1: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            isUrl: true
        }
    },
    img2: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            isUrl: true
        }
    },
    img3: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            isUrl: true
        }
    },
    sideHead: {
        type: DataTypes.STRING,
    },
    sideText: {
        type: DataTypes.TEXT,
        allowNull: true,
        validate: {
            len: [1]
        }
    },
    category: {
      type: DataTypes.STRING
     
    },
    isLayout1: 
    {
        type: DataTypes.BOOLEAN,
        
    },
    isLayout2:
    {
        type: DataTypes.BOOLEAN
    },
    isLayout3:
    {
        type: DataTypes.BOOLEAN
    },
    isLayout4:
    {
        type: DataTypes.BOOLEAN
    },
    isLayout5:
    {
        type: DataTypes.BOOLEAN
    },
    isLayout6:
    {
        type: DataTypes.BOOLEAN
    },
    selectedLayout:
    {
        type: DataTypes.STRING
    }
  });
  return LayoutAllPost;
};
module.exports = function(sequelize, DataTypes) {
  var Layout1Post = sequelize.define("Layout1Post", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 160]
      }
    },
    header1: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1]
        }
    },
    text1: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            len: [1]
        }
    },
    img1: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isUrl: true
        }
    },
    img2: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isUrl: true
        }
    },
    header2: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1]
        }
    },
    text2: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            len: [1]
        }
    },
    category: {
      type: DataTypes.STRING,
      defaultValue: "Personal"
    }
    // isLayout1: 
    // {
    //     type: DataTypes.BOOLEAN,
    //     defaultValue: true
    // }
  });
  return Layout1Post;
};

module.exports = function(sequelize, DataTypes) {
    var Layout3Post = sequelize.define("Layout3Post", {
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
      img1: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isUrl: true
        }
    },
      text1: {
          type: DataTypes.TEXT,
          allowNull: false,
          validate: {
              len: [1]
          }
      },
      img2: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
              isUrl: true
          }
      },
      text2: {
          type: DataTypes.TEXT,
          allowNull: false,
          validate: {
              len: [1]
          }
      },
      img2: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
              isUrl: true
          }
      },
      text3: {
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
    });
    return Layout3Post;
  };
  
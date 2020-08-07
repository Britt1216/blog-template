module.exports = function(sequelize, DataTypes) {
    var Layout2Post = sequelize.define("Layout2Post", {
        title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 160]
        }
      },
      img1: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
              isUrl: true
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
      sideHead: {
        type: DataTypes.STRING,
      },
      sideText: {
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
      // isLayout2: 
      // {
      //     type: DataTypes.BOOLEAN,
      //     defaultValue: true                               
      // }
    });
    return Layout2Post;
  };
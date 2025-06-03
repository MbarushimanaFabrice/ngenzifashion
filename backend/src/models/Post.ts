
// src/models/Post.ts
import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/database';

interface PostAttributes {
  id: number;
  title: string;
  content: string;
  userId: number;
  published?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

interface PostCreationAttributes extends Optional<PostAttributes, 'id'> {}

class Post extends Model<PostAttributes, PostCreationAttributes> implements PostAttributes {
  public id!: number;
  public title!: string;
  public content!: string;
  public userId!: number;
  public published?: boolean;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id',
      },
    },
    published: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    sequelize,
    tableName: 'posts',
    timestamps: true,
  }
);

export default Post;

// src/models/index.ts
import User from './User';
import Post from './Post';

// Define associations
User.hasMany(Post, {
  foreignKey: 'userId',
  as: 'posts',
});

Post.belongsTo(User, {
  foreignKey: 'userId',
  as: 'user',
});

export { User, Post };
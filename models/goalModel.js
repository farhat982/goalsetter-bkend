const mongoose = require('mongoose');
const { stringify } = require('querystring');

const goalSchema = mongoose.Schema(
  {
    //user means which user added the goal belog to that id
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    text: {
      type: String,
      required: [true, 'Please add a text value'],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Goal', goalSchema);

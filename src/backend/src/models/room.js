const { Schema, mongo } = require("mongoose");

module.exports = (mongoose) => {
  const schema = new Schema(
    {
      id: {
        type: Number,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
    },
    { timestamps: true }
  );
  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  return mongoose.model("bids", schema);
};

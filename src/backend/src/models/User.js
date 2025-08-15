const { Schema, mongoose } = require("mongoose");

exports.module = (mongoose) => {
  const schema = new Schema(
    {
      id: { type: Number, required: true },
      name: { type: String, required: true },
      email: { type: String, required: true },
    },
    { timestamps: true }
  );
  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  return mongoose.model("rooms", schema);
};

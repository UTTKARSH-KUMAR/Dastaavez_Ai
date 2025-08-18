const { Schema } = require("mongoose");

module.exports = (mongoose) => {
  const schema = new Schema(
    {
      name: { type: String, required: true },
      username: { type: String, requred: true, unique: true },
      password: { type: String, required: true },
      token: { type: String },
    },
    {
      timestamps: true,
    }
  );
  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  return mongoose.model("userSchema", schema);
};

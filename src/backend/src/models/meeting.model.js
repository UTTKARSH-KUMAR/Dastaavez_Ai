const { Schema } = require("mongoose");

module.exports = (mongoose) => {
  const schema = new Schema(
    {
      name: { type: String, required: true },
      meetingCode: { type: String, required: true },
      date: { type: Date, default: Date.now, required: true },
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
  return mongoose.model("Meeting", schema);
};



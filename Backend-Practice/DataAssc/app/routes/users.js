const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/practiceDataAssociation");

const userSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
	posts: [
		{
			type:mongoose.Schema.Types.ObjectId,
			ref:"Post"
		}
	],
	dp: {
		type: String, // Assuming dp is a URL or file path to the profile picture
	},
	email:{
		type:String,
		required:true,
		unique:true
	},
	fullname: {
		type: String,
		required: true,
	},
});

module.exports = mongoose.model("User", userSchema);

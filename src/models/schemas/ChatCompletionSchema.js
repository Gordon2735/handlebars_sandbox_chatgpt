'use Strict';

import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ChatQuestionSchema = new Schema({
	role: {
		type: String,
		required: true
	},
	content: {
		type: String,
		required: true
	}
});

const ChatCompletionSchema = new Schema({
	role: {
		type: String,
		required: true
	},
	content: {
		type: String,
		required: true
	}
});

const ChatInstanceSchema = new Schema({
	question: [ChatQuestionSchema],
	completion: [ChatCompletionSchema],
	createdAt: {
		type: Date,
		required: true,
		default: Date.now
	},
	id: {
		type: mongoose.Types.ObjectId,
		index: true,
		required: true
	}
});

const ChatQuestion = mongoose.model('ChatQuestion', ChatQuestionSchema);
const ChatCompletion = mongoose.model('ChatCompletion', ChatCompletionSchema);
const ChatInstance = mongoose.model('ChatInstance', ChatInstanceSchema);

export { ChatQuestion as default, ChatCompletion, ChatInstance };

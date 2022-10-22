import mongoose from 'mongoose'

const TaskSchema = mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    done: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    versionKey: false,
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  }
)

TaskSchema.index({ createdAt: 1 })

const Task = mongoose.model('Task', TaskSchema)

Task.syncIndexes()

export default Task

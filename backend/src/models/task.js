import mongoose from 'mongoose'

const TaskSchema = mongoose.Schema(
  {
    task: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    done: {
      type: boolean,
      required: true,
      default: true,
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

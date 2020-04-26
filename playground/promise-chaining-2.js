require("../src/db/mongoose")
const Task = require('../src/models/task')

// Task.findByIdAndDelete('5ea2096598a2627b392c1858').then((task) => {
//     console.log(task)
//     return Task.countDocuments({completed: false})
// }).then((count) => {
//     console.log(count)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completed: false})
    return count
}

deleteTaskAndCount('5ea1e691aaec7973b3dc5acf').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})
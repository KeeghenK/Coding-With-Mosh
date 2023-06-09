const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...', err));

const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tag: [ String ],
    date: { type: Date, default: Date.now },
    isPublish: Boolean
});

const Course = mongoose.model('Course', courseSchema);

async function createCourse() {
    try {
        const course = new Course({
            name: 'Angular Course',
            author: 'Mosh',
            tag: ['angular', 'frontend'],
            isPublish: true
        });

        const result = await course.save();
        console.log(result);
    }
catch(err) {
    console.log('Error', err.message);
}
}

async function getCourse() {
    const pageNumber = 2;
    const pageSize = 10;

    const courses = await Course
    .find({ author: 'Mosh', isPublished: true })
    .skip((pageNumber - 1) * pageSize)
    .limit(pageSize)
    .sort({ name: 1})
    .select({ name: 1, tags: 1 });
    console.log(courses);
}

async function updateCourse(id) {
    const course = await Course.findById(id);
    if (!course) return;

    course.isPublished = true;
    course.author = 'Another Author';

    const result = await course.save();
    console.log(result);
}

async function removeCourse(id) {
    const result = await Course.deleteOne({ _id: id });
    console.log(result);
}

removeCourse('64822bc7be244e3fcbac2b44');
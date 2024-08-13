const mongoose = require("mongoose");

const CertificateSchema = new mongoose.Schema({
    certificate_id: {
        type: String, 
        required: true
    },
    participant_name: {
        type: String,
        required: true
    },
    course_name: {
        type: String,
        required: true
    },
    course_id: {
        type: String, 
        required: true
    },
    date_of_completion: {
        type: Date,
        required: true
    },
    instructor_name: {
        type: String,
        required: true
    },
    issue_date: {
        type: Date,
        required: true
    },
    template_id: {
        type: String, 
        required: true
    },
    organization_name: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true,
        enum: ["issued", "pending", "revoked"] // ค่าที่เป็นไปได้
    },
    participant_email: {
        type: String,
        required: true,
        match: [/.+\@.+\..+/, "Please enter a valid email address"] // ตรวจสอบรูปแบบอีเมล
    },
    remarks: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Certificate', CertificateSchema);
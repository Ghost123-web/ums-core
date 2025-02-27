"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const aisController_1 = __importDefault(require("../controller/aisController"));
class AisRoute {
    constructor() {
        this.router = (0, express_1.Router)();
        this.controller = new aisController_1.default();
        this.initializeRoute();
    }
    initializeRoute() {
        /* Student */
        this.router.get('/students', this.controller.fetchStudents);
        this.router.get('/students/:id', this.controller.fetchStudent);
        this.router.get('/students/:id/transcript', this.controller.fetchStudentTranscript);
        this.router.get('/students/:id/finance', this.controller.fetchStudentFinance);
        this.router.get('/students/:id/activity', this.controller.fetchStudentActivity);
        this.router.post('/students', this.controller.postStudent);
        this.router.patch('/students/:id', this.controller.updateStudent);
        this.router.delete('/students/:id', this.controller.deleteStudent);
        /* Program */
        this.router.get('/programs', this.controller.fetchPrograms);
        this.router.get('/programs/list', this.controller.fetchProgramList);
        this.router.get('/programs/:id', this.controller.fetchProgram);
        this.router.get('/programs/:id/curriculum', this.controller.fetchProgramStructure);
        this.router.get('/programs/:id/students', this.controller.fetchProgramStudents);
        this.router.get('/programs/:id/statistics', this.controller.fetchProgramStatistics);
        this.router.post('/programs', this.controller.postProgram);
        this.router.patch('/programs/:id', this.controller.updateProgram);
        this.router.delete('/programs/:id', this.controller.deleteProgram);
        /* Course */
        this.router.get('/courses', this.controller.fetchCourses);
        this.router.get('/courses/list', this.controller.fetchCourseList);
        this.router.get('/courses/:id', this.controller.fetchCourse);
        this.router.post('/courses', this.controller.postCourse);
        this.router.patch('/courses/:id', this.controller.updateCourse);
        this.router.delete('/courses/:id', this.controller.deleteCourse);
        /* Scheme */
        this.router.get('/schemes', this.controller.fetchSchemes);
        this.router.get('/schemes/list', this.controller.fetchSchemeList);
        this.router.get('/schemes/:id', this.controller.fetchScheme);
        this.router.post('/schemes', this.controller.postScheme);
        this.router.patch('/schemes/:id', this.controller.updateScheme);
        this.router.delete('/schemes/:id', this.controller.deleteScheme);
        // /* Curriculum */
        this.router.get('/curriculums', this.controller.fetchCurriculums);
        this.router.get('/curriculums/:id', this.controller.fetchCurriculum);
        this.router.post('/curriculums', this.controller.postCurriculum);
        this.router.patch('/curriculums/:id', this.controller.updateCurriculum);
        this.router.delete('/curriculums/:id', this.controller.deleteCurriculum);
        // /* Registration */
        this.router.get('/registrations', this.controller.fetchRegistrations); // Registration Logs - only active semester
        this.router.get('/registrations/mount/:indexno', this.controller.fetchRegistrationMount); // Fetch Mounted Courses
        this.router.get('/registrations/:indexno', this.controller.fetchRegistration); // Fetch Registration Slip
        this.router.post('/registrations', this.controller.postRegistration); // Send New Registration
        this.router.patch('/registrations/:indexno', this.controller.updateRegistration); // Update Registration
        this.router.delete('/registrations/:indexno', this.controller.deleteRegistration);
        /* Units - Faculties - Department */
        this.router.get('/departments', this.controller.fetchDepartments);
        this.router.get('/faculties', this.controller.fetchFaculties);
        this.router.get('/units', this.controller.fetchUnits);
        this.router.get('/units/:id', this.controller.fetchUnit);
        this.router.post('/units', this.controller.postUnit);
        this.router.patch('/units/:id', this.controller.updateUnit);
        this.router.delete('/units/:id', this.controller.deleteUnit);
        /* Utility */
        this.router.get('/countries', this.controller.fetchCountries);
        this.router.get('/regions', this.controller.fetchRegions);
        this.router.get('/religions', this.controller.fetchReligions);
        this.router.get('/disabilities', this.controller.fetchDisabilities);
        this.router.get('/titles', this.controller.fetchTitles);
        /* Run Scripts */
        this.router.get('/run-data', this.controller.runData);
        this.router.get('/run-account', this.controller.runAccount);
    }
}
exports.default = new AisRoute().router;

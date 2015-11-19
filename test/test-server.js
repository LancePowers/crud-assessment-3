var chai = require('chai');
var chaiHttp = require('chai-http');
var mongoose = require("mongoose");

var server = require('../server/app');
var Project = require("../server/models/projects");


var should = chai.should();
chai.use(chaiHttp);

describe('Projects', function () {



    //    afterEach(function (done) {
    //        Project.collection.drop();
    //        done();
    //    });
    describe('should be successful', function () {
        beforeEach(function (done) {
            Project.collection.drop();
            var newProject = new Project({
                name: 'Manhattan',
                description: 'This shit\'s the bomb!',
                tags: ['Nuke\'em', 'Da Bomb'],
                group: true,
                group_members: ['Me', 'Albert']
            });
            console.log(newProject.save);
            newProject.save(function (err) {
                console.log('here');
                done();
            });
        });
        it('in listing ALL projects on /projects GET', function (done) {
            chai.request(server)
                .get('/api/projects')
                .end(function (err, res) {
                    res.should.have.status(200);
                    res.body.should.have.property('SUCCESS');
                    res.body.SUCCESS[0].should.have.property('name');
                    done();
                });
        });
        it('in listing a SINGLE project on /project/<id> GET');
        it('in adding a SINGLE project on /projects POST');
        it('in updating a SINGLE project on /project/<id> PUT');
        it('in deleting a SINGLE project on /project/<id> DELETE');

    })
})
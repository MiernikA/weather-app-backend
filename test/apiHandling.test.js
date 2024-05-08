const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
chai.use(chaiHttp);

describe('ApiEndpointTest', function () {

    describe("Handling incorrect data", function () {



        it('should return error for latitude greater than 90', function (done) {
            chai.request('http://localhost:3000')
                .get('/weather/91/50')
                .end(function (err, res) {
                    expect(res).to.have.status(400);
                    expect(res.text).to.equal('Invalid latitude or longitude. Latitude must be between -90 and 90. Longitude must be between -180 and 180.');
                    done();
                });
        });

        it('should return error for longitude less than -180', function (done) {
            chai.request('http://localhost:3000')
                .get('/weather/50/-181')
                .end(function (err, res) {
                    expect(res).to.have.status(400);
                    expect(res.text).to.equal('Invalid latitude or longitude. Latitude must be between -90 and 90. Longitude must be between -180 and 180.');
                    done();
                });
        });

        it('should handle not valida data type', function (done) {
            chai.request('http://localhost:3000')
                .get('/weather/abc/22')
                .end(function (err, res) {
                    expect(res).to.have.status(400);
                    expect(res.text).to.equal('Invalid latitude or longitude. Both should be numbers.');
                    done();
                });
        });

        it('should handle missing latitude parameter', function (done) {
            chai.request('http://localhost:3000')
                .get('/weather//50')
                .end(function (err, res) {
                    expect(res).to.have.status(404);
                    done();
                });
        });
    });

    describe("Handling valid data", function () {
        it('should return correct data for valid latitude and longitude', function (done) {
            chai.request('http://localhost:3000')
                .get('/weather/40/-74')
                .end(function (err, res) {
                    expect(res).to.have.status(200);
                    expect(res.body).to.be.an('object');
                    expect(res.body).to.have.all.keys('date', 'weather_code', 'max_temp', 'min_temp', 'estimated_energy');
                    done();
                });
        });
    });


});

const supertest = require('supertest');
const router = require('../server/router');

test('get index HTML', (done)=>{
    supertest(router)
    .get('/')
    .expect('Content-Type', /html/)
    .end((err,res)=>{
        if(err) return done(err);
        expect(res.statusCode).toBe(200);
        return done();
    })
})
test('get style CSS', (done)=>{
    supertest(router)
    .get('/CSS/style.css')
    .expect('Content-Type', /css/)
    .end((err,res)=>{
        if(err) return done(err);
        expect(res.statusCode).toBe(200);
        return done();
    })
})
test('get dom JS', (done)=>{
    supertest(router)
    .get('/JS/dom.js')
    .expect('Content-Type', /js/)
    .end((err,res)=>{
        if(err) return done(err);
        expect(res.statusCode).toBe(200);
        return done();
    })
})
test('get xhr JS', (done)=>{
    supertest(router)
    .get('/JS/xhr.js')
    .expect('Content-Type', /js/)
    .end((err,res)=>{
        if(err) return done(err);
        expect(res.statusCode).toBe(200);
        return done();
    })
})
test('Not Found', (done)=>{
    supertest(router)
    .get('/notFound')
    .end((err,res)=>{
        if(err) return done(err);
        expect(res.statusCode).toBe(404);
        return done();
    })
})

const expect = require('expect');
const request = require('supertest');

const {app} = require('./../server');
const {Todo} = require('./../models/Todo');


beforeEach((done)=>{
    Todo.remove({}).then(()=> done());
});

describe('Post /todo',()=>{
    it('should create new todo',(done)=>{
        var text= 'Test todo text';
        request(app)
            .post('/todo')
            .send({text})
            .expect(200)
            .expect((res)=>{
                expect(res.body.text).toBe(text);
            })
            .end((err,res)=>{
                if(err){
                    return done(err);
                }

                Todo.find().then((todos)=>{
                    expect(todos.length).toBe(1);
                    expect(todos[0].text).toBe(text);
                    done();
                }).catch((e)=> done(e));
            });
    });

    it('should not create todo',(done)=>{
        request(app)
            .post('/todo')
            .send({})
            .expect(400)
            .end((err,res)=>{
                if(err){
                    return done(err);
                }

                Todo.find().then((todos)=>{
                    expect(todos.length).toBe(0);
                    done();
                }).catch((e)=> done(e));
            });
    });
});
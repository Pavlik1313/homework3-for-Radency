import {Express} from 'express'
export function routes (app: Express): void{
    app.route('/')
        .get(()=> {throw '/ Get controller isn`t implemented'})

    app.route('/notes')
        .get(()=> {throw '/notes Get controller isn`t implemented'})
        .post(()=> {throw '/notes Post controller isn`t implemented'})

    app.route('/notes/active')
        .get(()=> {throw '/notes/active Get controller isn`t implemented'})

    app.route('/notes/archived')
        .get(()=> {throw '/notes/archived Get controller isn`t implemented'})


    app.route('/notes/statistic')
        .get(()=> {throw '/notes/statistic Get controller isn`t implemented'})

    app.route('/notes/:id')
        .get(()=> {throw '/notes/:id Get controller isn`t implemented'})
        .patch(()=> {throw '/notes/:id Patch controller isn`t implemented'})
        .delete(()=> {throw '/notes/:id Delete controller isn`t implemented'})


}
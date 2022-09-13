import {profileReducer} from '../slice'
import {switchShowName, logout, registerUser} from '../../index'


describe('user reducer test', () => {
    it('show name is switching', () => {
        expect(profileReducer(undefined, switchShowName())).toEqual({
            name: 'Неопознанный енот',
            showName: true,
            isAuth: false
        })
    })

    it('register new user', () => {
        return expect(profileReducer(undefined, registerUser({
            email: 'vasyliy@mail.ru',
        }))).toEqual({
            name: 'vasyliy@mail.ru',
            showName: false,
            isAuth: true
        })
    })
    it('logout test', () => {
        return expect(profileReducer(undefined, logout())).toEqual({
            name: 'Неопознанный енот',
            showName: false,
            isAuth: false
        })
    })
})

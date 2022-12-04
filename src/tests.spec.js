// import { describe } from "yargs";
import {sum, sumSpread, minus, multiply, divide, pow, isBigger, isSmaller, getUserInfo} from "./unitTesting.js"
	

export function getUserDisplayName(){
    const user = UserStore.getUser(1);
    return `${user.lastName}, ${user.firstName}`;
}




describe('sum', () => {
    test('should be 3 when called sum with args 1 and 2', () => {
        expect(sum(1,2)).toBe(3);
    });
})
describe('sumSpread', () => {
    test('should be 3 when called sumSpread with args 1 and 2', () => {
        expect(sumSpread(1,2)).toBe(3);
    });
})
describe('minus', () => {
    test('should be 3 when called minus with args 4 and 1', () => {
        expect(minus(4,1)).toBe(3);
    });
})
describe('multiply', () => {
    test('should be 6 when called multiply with args 2 and 3', () => {
        expect(multiply(2,3)).toBe(6);
    });
})



describe('divide', ()=>{
    test('should be 6 when called divide with args 12 and 2', ()=>{
        expect(divide(12,2)).toBe(6)
    })
})
describe('pow', ()=>{
    test('should be 9 when called pow with args 3 and 2', ()=>{
        expect(pow(3,2)).toBe(9)
    })
})
describe('pow', ()=>{
    test('should be 1 when called pow with args 10 and 0', ()=>{
        expect(pow(10,0)).toBe(1)
    })
})
describe('isBigger', ()=>{
    test('should be true when called isBigger with args 9 and 8', ()=>{
        expect(isBigger(9,8)).toBe(true)
    })
})
describe('isSmaller', ()=>{
    test('should be true when called isSmaller with args 8 and 9', ()=>{
        expect(isSmaller(8,9)).toBe(true)
    })
})
describe('getUserInfo', ()=>{
    test('the property fullName of object returned when called getUserInfo should be Vick Jone', ()=>{
        expect(getUserInfo().fullName).toBe("Vick Jone")
    })
})

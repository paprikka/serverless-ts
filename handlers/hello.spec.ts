import {APIGatewayEvent, Context, Callback} from 'aws-lambda'
import {hello} from './hello'
import config from './config'
jest.mock('./config')
describe('handlers/hello', () => {
    it('should be a function', () => {
        expect(typeof hello).toBe('function')
    })

    it('should return test ENV var', () => {
        const event = {
            body: 'body'

        }
        const context = {}

        const callback = jest.fn()
        expect(callback).not.toHaveBeenCalled()

        hello(event, context, callback)

        expect(callback).toHaveBeenCalledTimes(1)
        const expectedResponse = {
            statusCode: 200,
            body: JSON.stringify({
                TEST_VAR_0: 'TEST_VALUE_0'
            })
        }
        expect(callback).toHaveBeenCalledWith(null, expectedResponse)
    })
})